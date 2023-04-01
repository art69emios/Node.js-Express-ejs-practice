import express from "express";
import path from "path";
import fs from "fs";
import querystring from "querystring";

const app = express();
const PORT = process.env.PORT ?? 3000;
const __dirname = path.resolve();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "static"));

app.get("/", (req, res) => {
  res.render("index", { title: 'main', active: "/" });
});

app.get("/news", (req, res) => {
  res.render("news", { title: 'news', active: "news" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: 'about', active: "about" });
});

app.get("/login", (req, res) => {
  res.render("login", { title: 'login', active: "login" });
});

app.post("/login", (req, res) => {
   let body = "";

   req.on("data", (chunk) => {
      body += chunk.toString();
   });

   req.on("end", () => {
      let  { username, password } = querystring.parse(body);
      const data = { username, password };
      const jsonData = JSON.stringify(data);
      fs.appendFile(path.resolve(__dirname, 'static', 'info.txt'), `\n${jsonData}`, (err)=>{
            if(err){
               throw Error(err)
            }
            res.redirect('/')
      });
   });
});


app.listen(PORT, () => {
  console.log(`start ${PORT}`);
});
