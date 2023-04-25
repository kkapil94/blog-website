import * as fs from "fs"


export default async function handler(req, res) {
    const folder = await fs.promises.readdir("blogData");
    let blogs = [];
    for (let index = 0; index < folder.length; index++) {
        const item = folder[index];
        const blog = await fs.promises.readFile("blogData/"+item,"utf8")
        blogs = [...blogs,JSON.parse(blog)]
    }
    res.status(200).json(blogs)
  }