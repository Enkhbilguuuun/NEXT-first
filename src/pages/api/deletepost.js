import { mongoDataApiRequest } from "@/utils/mongoDataApiRequest";

export default async function handler(req, res) {


  const {id} = req.query;
  const data = req.body;

  const result = await mongoDataApiRequest('deleteOne', {filter: {
    _id: { $oid: id } 
  }})
  console.log(id)

  res.status(200).json(result)
}
