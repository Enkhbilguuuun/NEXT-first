import { mongoDataApiRequest } from "@/utils/mongoDataApiRequest";

export default async function handler(req, res) {


const {id} = req.query;
const data = req.body

  const result = await mongoDataApiRequest("updateOne", {
    filter: {
      _id: { $oid: id},
    },
    update: {
        $set: data
        
    }
  });
  console.log(data)

  res.status(200).json(result);
}
