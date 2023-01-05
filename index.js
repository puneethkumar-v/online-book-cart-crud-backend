import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Book from "./Book.js";



const app = express();
const PORT = 5000;

app.use(cors());
// app.use(bodyParser());
app.use(express.json());

app.get("/", (req, res) => res.send("HELLLO WORLD"));
app.get("/getAllBooks", async (req, res) => {
  try {
   const {data} = await Book.find({});
    res.status(200).json(data);
  } catch(err) {
    console.log(err);
  }
})
app.post("/post", async(req, res) => {
  try {
    const book = req.body;
    console.log(book);
    const {data} = await Book.create(book);
    res.status(200).json(data);
  } catch(err) {
    console.log(err);
  }
})

app.listen(PORT, () => console.log("Server is listening in at the port " + PORT))
