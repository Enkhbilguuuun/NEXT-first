import { mongoDataApiRequest } from "@/utils/mongoDataApiRequest";

export default async function handler(req, res) {
  const result = await mongoDataApiRequest("updateOne", {
    filter: {
      _id: { $oid: "63d23eeb7bce6db21567f82f" },
    },
    update: {
        $set: {
            status: "complete",
            email : "Temulen@gmail.com"
        }
    }
  });

  res.status(200).json(result);
}
