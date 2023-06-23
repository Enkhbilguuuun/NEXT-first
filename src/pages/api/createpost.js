// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mongoDataApiRequest } from "@/utils/mongoDataApiRequest";

export default async function handler(req, res) {


const {id} = req.query;
const data = req.body;


  const result = await mongoDataApiRequest('insertOne', {document: data})
  console.log(data)

  res.status(200).json(result)
}
