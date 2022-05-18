/**
 * @swagger
 * tags:
 *   name: Gada Finance APIs
 *   description: APIs to handle Gada Finance resources.
 */

/**
* @swagger
* /api/v1/login:
*  post:
*      tags: [Auth APIs]
*      summary: Login
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      type: object
*                      properties:
*                          accountID:
*                              type: string
*                              default: 'test'
*                          password:
*                              type: string
*                              default: 'test'
*      responses:
*          default:
*              description: Return demo
*/


/**
* @swagger
* /api/v1/register:
*  post:
*      tags: [Auth APIs]
*      summary: Register
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      type: object
*                      properties:
*                          accountID:
*                              type: string
*                              default: 'test'
*                          password:
*                              type: string
*                              default: 'test'
*      responses:
*          default:
*              description: Return demo
*/

/**
* @swagger
* /api/v1/pool:
*  get:
*      tags: [Pool APIs]
*      summary: Get list pool
*      security:
*	         - bearerAuth: []
*      parameters:
*          - name: page
*            in: query
*            schema:
*              type: integer
*          - name: limit
*            in: query
*            schema:
*              type: integer
*      responses:
*          default:
*              description: Return demo
*/

/**
* @swagger
* /api/v1/pool/list-pool:
*  get:
*      tags: [Pool APIs]
*      summary: Get list pool
*      parameters:
*          - name: page
*            in: query
*            schema:
*              type: integer
*          - name: limit
*            in: query
*            schema:
*              type: integer
*          - name: type
*            in: query
*            schema:
*              type: string
*              enum: ['open', 'closed', 'upcoming']
*      responses:
*          default:
*              description: Return demo
*/

/**
* @swagger
* /api/v1/pool:
*  post:
*      tags: [Pool APIs]
*      summary: Create pool
*      security:
*	         - bearerAuth: []
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      type: object
*                      properties:
*                          projectName:
*                              type: string
*                              default: 'test'
*                          tokenSymbol:
*                              type: string
*                              default: 'test'
*                          supply:
*                              type: number
*                              default: 1
*                          tokenAddress:
*                              type: string
*                              default: 'test'
*                          saleDate:
*                              type: date
*                              default: '2016-05-18T16:00:00Z'
*                          amount:
*                              type: number
*                              default: 1
*                          typeOfSale:
*                              type: string
*                              default: 'test'
*                          forPrivateSale:
*                              type: number
*                              default: 1
*                          swapRate:
*                              type: number
*                              default: 1
*                          softCap:
*                              type: string
*                              default: 'test'
*                          hardCap:
*                              type: string
*                              default: 'test'
*                          minAllocation:
*                              type: number
*                              default: 1
*                          maxAllocation:
*                              type: number
*                              default: 1
*                          raise:
*                              type: number
*                              default: 2
*                          total:
*                              type: number
*                              default: 10
*                          telegram:
*                              type: string
*                              default: 'test'
*                          telegramIcon:
*                              type: string
*                              default: 'test'
*                          website:
*                              type: string
*                              default: 'test'
*                          websiteIcon:
*                              type: string
*                              default: 'test'
*                          twitter:
*                              type: string
*                              default: 'test'
*                          twitterIcon:
*                              type: string
*                              default: 'test'
*                          logo:
*                              type: string
*                              default: 'base64'
*                          pricepertoken:
*                              type: number
*                              default: 123
*                          projectLogo:
*                              type: string
*                              default: 'test'
*                          projectTitle:
*                              type: string
*                              default: 'test'
*                          projectSubtitle:
*                              type: string
*                              default: 'test'
*                          projectImage:
*                              type: string
*                              default: 'test'
*                          projectHighlights:
*                              type: string
*                              default: 'test'
*                          productDescription:
*                              type: string
*                              default: 'test'
*                          productImage:
*                              type: string
*                              default: 'test'
*                          solution:
*                              type: string
*                              default: 'test'
*                          businessModel:
*                              type: string
*                              default: 'test'
*                          investors:
*                              type: string
*                              default: 'test'
*                          team:
*                              type: string
*                              default: 'test'
*                          tokenUtility:
*                              type: string
*                              default: 'test'
*                          tokenomiceImage:
*                              type: string
*                              default: 'test'
*                          solutionImage:
*                              type: string
*                              default: 'test'
*                          businessModelImage:
*                              type: string
*                              default: 'test'
*                          investorsImage:
*                              type: string
*                              default: 'test'
*                          tokenUtilityImages:
*                              type: string
*                              default: 'test'
*                          heroImg:
*                              type: string
*                              default: 'test'
*                          market:
*                              type: string
*                              default: 'test'
*                          linkWhiteList:
*                              type: string
*                              default: 'test'
*                          tokenDistribution:
*                              type: string
*                              default: 'test'
*                          initialMarketCap:
*                              type: string
*                              default: 'test'
*                          initialTokenCirculation:
*                              type: string
*                              default: 'test'
*                          teams:
*                              type: string
*                              default: 'test'
*                          whiteList:
*                              type: array
*                              default: ['string']
*                          startTime:
*                              type: date
*                              default: '2016-05-18T16:00:00Z'
*                          endTime:
*                              type: date
*                              default: '2016-05-18T16:00:00Z'
*      responses:
*          default:
*              description: Return demo
*/

/**
* @swagger
* /api/v1/pool/update:
*  post:
*      tags: [Pool APIs]
*      summary: Update pool
*      security:
*	         - bearerAuth: []
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      type: object
*                      properties:
*                          id:
*                              type: string
*                              default: '614a22abb509e673ac8e79ae'
*                          projectName:
*                              type: string
*                              default: 'test'
*                          tokenSymbol:
*                              type: string
*                              default: 'test'
*                          supply:
*                              type: number
*                              default: 1
*                          tokenAddress:
*                              type: string
*                              default: 'test'
*                          saleDate:
*                              type: date
*                              default: '2016-05-18T16:00:00Z'
*                          amount:
*                              type: number
*                              default: 1
*                          typeOfSale:
*                              type: string
*                              default: 'test'
*                          forPrivateSale:
*                              type: number
*                              default: 1
*                          swapRate:
*                              type: number
*                              default: 1
*                          softCap:
*                              type: string
*                              default: 'test'
*                          hardCap:
*                              type: string
*                              default: 'test'
*                          minAllocation:
*                              type: number
*                              default: 1
*                          maxAllocation:
*                              type: number
*                              default: 1
*                          raise:
*                              type: number
*                              default: 2
*                          total:
*                              type: number
*                              default: 10
*                          telegram:
*                              type: string
*                              default: 'test'
*                          telegramIcon:
*                              type: string
*                              default: 'test'
*                          website:
*                              type: string
*                              default: 'test'
*                          websiteIcon:
*                              type: string
*                              default: 'test'
*                          twitter:
*                              type: string
*                              default: 'test'
*                          twitterIcon:
*                              type: string
*                              default: 'test'
*                          logo:
*                              type: string
*                              default: 'base64'
*                          pricepertoken:
*                              type: number
*                              default: 123
*                          projectLogo:
*                              type: string
*                              default: 'test'
*                          projectTitle:
*                              type: string
*                              default: 'test'
*                          projectSubtitle:
*                              type: string
*                              default: 'test'
*                          projectImage:
*                              type: string
*                              default: 'test'
*                          projectHighlights:
*                              type: string
*                              default: 'test'
*                          productDescription:
*                              type: string
*                              default: 'test'
*                          productImage:
*                              type: string
*                              default: 'test'
*                          solution:
*                              type: string
*                              default: 'test'
*                          businessModel:
*                              type: string
*                              default: 'test'
*                          investors:
*                              type: string
*                              default: 'test'
*                          team:
*                              type: string
*                              default: 'test'
*                          tokenUtility:
*                              type: string
*                              default: 'test'
*                          tokenomiceImage:
*                              type: string
*                              default: 'test'
*                          solutionImage:
*                              type: string
*                              default: 'test'
*                          businessModelImage:
*                              type: string
*                              default: 'test'
*                          investorsImage:
*                              type: string
*                              default: 'test'
*                          tokenUtilityImages:
*                              type: string
*                              default: 'test'
*                          heroImg:
*                              type: string
*                              default: 'test'
*                          market:
*                              type: string
*                              default: 'test'
*                          linkWhiteList:
*                              type: string
*                              default: 'test'
*                          tokenDistribution:
*                              type: string
*                              default: 'test'
*                          initialMarketCap:
*                              type: string
*                              default: 'test'
*                          initialTokenCirculation:
*                              type: string
*                              default: 'test'
*                          whiteList:
*                              type: array
*                              default: ['string']
*                          teams:
*                              type: string
*                              default: 'test'
*                          startTime:
*                              type: date
*                              default: '2016-05-18T16:00:00Z'
*                          endTime:
*                              type: date
*                              default: '2016-05-18T16:00:00Z'
*      responses:
*          default:
*              description: Return demo
*/

/**
* @swagger
* /api/v1/pool/delete:
*  post:
*      tags: [Pool APIs]
*      summary: Delete pool
*      security:
*	         - bearerAuth: []
*      requestBody:
*          content:
*              application/json:
*                  schema:
*                      type: object
*                      properties:
*                          id:
*                              type: string
*                              default: '614a22abb509e673ac8e79ae'
*      responses:
*          default:
*              description: Return demo
*/

/**
* @swagger
* /api/v1/pool/{id}:
*  get:
*      tags: [Pool APIs]
*      summary: Get pool
*      security:
*	         - bearerAuth: []
*      parameters:
*          - name: id
*            in: path
*            schema:
*              type: string
*      responses:
*          default:
*              description: Return demo
*/

/**
* @swagger
* /api/v1/file/upload:
*  post:
*      tags: [UPload APIs]
*      summary: Upload image
*      security:
*	         - bearerAuth: []
*      requestBody:
*          content:
*              multipart/form-data:
*                  schema:
*                      type: object
*                      properties:
*                          file:
*                              type: string
*                              format: binary
*      responses:
*          default:
*              description: Return demo
*/

/**
* @swagger
* /api/v1/file/{filename}:
*  delete:
*      tags: [UPload APIs]
*      summary: Delete image
*      security:
*	         - bearerAuth: []
*      parameters:
*          - name: filename
*            in: path
*            schema:
*              type: string
*      responses:
*          default:
*              description: Return demo
*/
