import AWS from "aws-sdk";
export const handler = async(event) => {
   // TODO implement
   var elbv2 = new AWS.ELBv2();
   var params = {
      Actions: [
      {
         'Type': 'redirect',
         'Order': 1,
         'RedirectConfig': {
             'Protocol': 'HTTPS',
             'Port': '443',
             'Host': 'www.google.com',
             'Path': '/',
             'StatusCode': 'HTTP_301'
         }
      }
      ], 
      Conditions: [
       {
            'Field': 'http-request-method',
            'HttpRequestMethodConfig': {
               'Values': [
                  'GET',
                  ]
            },
       }
      ], 
      ListenerArn: "arn:aws:elasticloadbalancing:ap-south-1:550223705105:loadbalancer/app/ttms-alb/e3ef1183eb65f409", 
      Priority: 1
     };
     elbv2.createRule(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
   const response = {
       statusCode: 200,
       body: JSON.stringify('Hello from Lambda!'),
   };
   return response;
};



   