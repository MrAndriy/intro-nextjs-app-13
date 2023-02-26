export default async function handler(req, res) {
  if (req.method === "POST") {
    //save to DB
    console.log(req.body);
    
    res.status(200).json({ message: "Success!" });
  } 
}