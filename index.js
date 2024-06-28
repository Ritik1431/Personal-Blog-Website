const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const port = 3000;

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "/views"));

app.set("view engine", "ejs");

let postContent = {
    imageLink: "https://images.unsplash.com/photo-1514593214839-ce1849100055?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Back to Fiction : What I'm Reading This Summer",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae nemo neque vitae quo adipisci labore, perferendis obcaecati accusantium! Beatae repellendus illum doloribus doloremque perspiciatis. Eaque minima asperiores eveniet iure ex."
}

app.get("/", (req, res) => {
    res.send("hello world!")
})
app.get("/home", (req, res) => {
    res.render("home.ejs" ,{postContent});
})
app.get("/edit", (req, res) => {
    res.render("edit.ejs", { postContent });
})
app.patch("/edit", (req, res) => {
    const { imageLink, heading, content } = req.body;
    postContent = { imageLink, heading, content };
    res.redirect("/home");
})
app.listen(port, () => {
    console.log("listening to port ", port);
})