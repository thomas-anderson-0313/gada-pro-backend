require('dotenv').config();

const express = require('express')
var cors = require('cors')
const logger = require('morgan')
const initAPIs = require("./routers/api.router");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require('swagger-jsdoc');
const upload = require("./routers/upload.router");
const Grid = require("gridfs-stream");

const port = process.env.PORT || 3100

// MongDB
const mongoClient = require('mongoose')
mongoClient.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected database from mongodb.')
}).catch((error) => {
  console.error(`Connect database is failed with error which is ${error}`)
})

const options = {
  swaggerDefinition: {
    openapi: '3.0.1', // YOU NEED THIS
    info: {
      title: 'Your API title',
      version: '1.0.0',
      description: 'Your API description'
    },
    basePath: '/',
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
    security: [{
      bearerAuth: []
    }]
  },
  apis: ["*.js", "routers/*/*.js"], // files containing annotations as above
};
const openApiSpecification = swaggerJsdoc(options);
// ---------------------

const app = express()

app.use(logger(process.env.NODE_ENV))
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.disable('etag'); // avoid cache - status code 304

app.use("/docs",
  express.static('node_modules/swagger-ui-dist/', { index: false }),
  swaggerUi.serve,
  swaggerUi.setup(openApiSpecification)
);

let gfs;
const conn = mongoClient.connection;
conn.once("open", function () {
  gfs = Grid(conn.db, mongoClient.mongo);
  gfs.collection("photos");
});

app.use("/api/v1/file", upload);

// media routes
app.get("/api/v1/file/:filename", async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  } catch (error) {
    return res.status(500).json({ status: 0, data: "Not found." });
  }
});

app.delete("/api/v1/file/:filename", async (req, res) => {
  try {
    console.log(1);
    await gfs.files.deleteOne({ filename: req.params.filename });
    return res.status(200).json({ status: 1, data: "success" });
  } catch (error) {
    return res.status(500).json({ status: 0, data: "An error occured." });
  }
});

initAPIs(app);

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next()
})

app.use((err, req, res, next) => {
  const error = app.get('env') === 'development' ? err : {}
  const status = err.status || 500

  return res.status(status).json({
    error: {
      message: error.message
    }
  })
})

app.listen(port, () => console.log(`Server is listening on port ${port}`))
