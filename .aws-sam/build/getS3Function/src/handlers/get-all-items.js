const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();
const host = process.env.ENDPOINT;
/**
 * A simple example includes a HTTP get method to get all items from a DynamoDB table.
 */
exports.getAllItemsHandler = async (event) => {
    console.log("TABLE NAME", host);
    console.log("LAMBDA", lambda);
    const params = {
        FunctionName: process.env.MY_OTHER_LAMBDA_ARN,
        InvocationType: 'RequestResponse',
        // Payload: JSON.stringify({})/* event object you want to pass to getS3Function */
    };

    try {
        const data = await lambda.invoke(params).promise();
        console.log(`Success S3: ${JSON.stringify(data)}`);
    } catch (err) {
        console.log(`Error S3: ${err}`);
    }
    response = {statusCode: 200, body: "GET ALL ITEM"};
    return response;
}
// // Create clients and set shared const values outside of the handler.

// // Get the DynamoDB table name from environment variables
// const tableName = process.env.SAMPLE_DOCUMENT;

// const mysql = require('mysql');
// /**
//  * A simple example includes a HTTP get method to get all items from a DynamoDB table.
//  */
// exports.getAllItemsHandler = async (event) => {
//     if (event.httpMethod !== 'GET') {
//         throw new Error(`getAllItems only accept GET method, you tried: ${event.httpMethod}`);
//     }
//     // All log statements are written to CloudWatch
//     console.info('received:', event);

//     // get all items from the table (only first 1MB data, you can use `LastEvaluatedKey` to get the rest of data)
//     // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#scan-property
//     // https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_Scan.html

//     let response = {};

//     try {
//         console.log("TABLE NAME", tableName);
//         const params = {
//             TableName : tableName
//         };
//         const connection = mysql.createConnection({
//             host     : tableName,
//             user     : 'Pradyumn',
//             password : 'Golu245701',
//             database : 'ToDo'
//           });
//           connection.connect();
//           connection.query('SELECT * FROM items', function (error, results, fields) {
//             if (error) throw error;
//             const items = results;
//             connection.end();
            
//             callback(null, items);
//           });
//         response = {
//             statusCode: 200,
//             body: JSON.stringify(items)
//         };
//     } catch (err) {
//         response = {
//             statusCode: 404,
//             body: err
//         };
//     }

//     // All log statements are written to CloudWatch
//     console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
//     return response;
// }
