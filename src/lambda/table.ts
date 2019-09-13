import { Handler, Context, Callback, APIGatewayEvent } from "aws-lambda";

interface HelloResponse {
  statusCode: number;
  body: string;
}
const items: any = [
  {
    id: 1,
    amount: 20,
    description: "Water 0"
  },
  {
    id: 2,
    amount: 10,
    description: "Water 1"
  },
  {
    id: 3,
    amount: 50,
    description: "Water 2"
  }
];
const handler: Handler = (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
) => {
  const params = event.queryStringParameters;
  const response: HelloResponse = {
    statusCode: 200,
    body: JSON.stringify(items)
  };

  callback(undefined, response);
};

export { handler };
