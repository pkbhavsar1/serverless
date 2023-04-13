exports.gets3Handler = async (event) => {
    console.log("S3 Calling");
    
    response = {statusCode: 200, body: "S3 TRUE"};
    return response;
}