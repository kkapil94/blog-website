
import * as fs from "fs"


export default function handler(req, res) {
    fs.readFile(`blogData/${req.query.slug}.json`,"utf8",(err,data)=>{
        const blog = JSON.parse(data)
        res.status(200).json(blog)
    })
  }