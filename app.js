import express from "express";
const app = express();
import router from "#api/notes";

// body-parsing middleware
app.use(express.json())

// Simple logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

// route-handling middleware
app.route("/").get((req,res)=>{
  res.send("hello")
})

app.use("/notes", router)

// Catch-all error-handling middleware
app.use((err, req, res, next) => {
  res.status(500).send("Sorry! Something went wrong :(");
});

export default app;