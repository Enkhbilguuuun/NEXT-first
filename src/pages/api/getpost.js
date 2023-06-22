// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mongoDataApiRequest } from "@/utils/mongoDataApiRequest";

export default async function handler(req, res) {
  const result = await mongoDataApiRequest('find', {})
// const result = await fetch("https://ap-south-1.aws.data.mongodb-api.com/app/data-zjiug/endpoint/data/v1/action/find", {
//   method: "POST",
//   headers: {
//     'Content-Type': 'application/json',
//     'api-key': 'SYjpUor7h1CEhh0NLCktUgtjXaTC9XhOaVdYTyA2mc9d1TESZzEMYSjZYYge2gIL',
//   },
//   body: JSON.stringify({
//     collection:"users",
//     database:"test",
//     dataSource:"Cluster0",
//   }),
// }).then((res) => res.json());

  res.status(200).json(result)
}
