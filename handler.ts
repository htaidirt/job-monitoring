import { APIGatewayProxyHandler } from 'aws-lambda';

export const hello: APIGatewayProxyHandler = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hey, TS is awesome',
      input: event
    })
  };
};