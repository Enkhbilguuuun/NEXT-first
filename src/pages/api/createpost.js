// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mongoDataApiRequest } from "@/utils/mongoDataApiRequest";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    res.status(405).end();
    return;
}

const {id} = req.query;
const {text} = req.body;


  const result = await mongoDataApiRequest('insertOne', {document: {text: text}})
  console.log(text)

  res.status(200).json(result)
}
