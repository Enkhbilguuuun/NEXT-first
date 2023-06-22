import { mongoDataApiRequest } from "@/utils/mongoDataApiRequest";

export default async function handler(req, res) {
  const result = await mongoDataApiRequest('deleteOne', {filter: {
    _id: { $oid: '63cfa6a5bc5165e309dc2af2' } 
  }})

  res.status(200).json(result)
}
