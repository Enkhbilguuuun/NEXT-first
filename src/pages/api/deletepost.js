import { mongoDataApiRequest } from "@/utils/mongoDataApiRequest";

export default async function handler(req, res) {

  if (req.method !== "DELETE") {
    res.status(405).end();
    return;
}

  const {id} = req.query;
  const data = req.body;

  const result = await mongoDataApiRequest('deleteOne', {filter: {
    _id: { $oid: id } 
  }})
  console.log(id)

  res.status(200).json(result)
}
