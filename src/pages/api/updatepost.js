import { mongoDataApiRequest } from "@/utils/mongoDataApiRequest";

export default async function handler(req, res) {

  if (req.method !== "PUT") {
    res.status(405).end();
    return;
}

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
