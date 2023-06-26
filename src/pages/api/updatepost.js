import { mongoDataApiRequest } from "@/utils/mongoDataApiRequest";

export default async function handler(req, res) {

  if (req.method !== "PUT") {
    res.status(405).end();
    return;
}

const {id} = req.query;
const {text} = req.body

console.log("this is text", text)

  const result = await mongoDataApiRequest("updateOne", {
    filter: {
      _id: { $oid: id},
    },
    update: {
        $set: {email : text}
        
    }
  });

  res.status(200).json(result);
}
