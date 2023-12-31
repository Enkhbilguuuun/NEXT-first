// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mongoDataApiRequest } from "@/utils/mongoDataApiRequest";

export default async function handler(req, res) {

  if (req.method !== "GET") {
    res.status(405).end();
    return;
}

  const result = await mongoDataApiRequest('find', {})
  res.status(200).json(result)
}
