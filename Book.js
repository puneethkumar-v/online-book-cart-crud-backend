import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
  isbn: { type: Number, required: true, unique: true },
  name: {
    type: String, 
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isInStock: {
    type: Boolean,
    required: true,
  },
  edition: {
    type: Number,
  },
  printDate: String,
});

const Book = mongoose.model("Book", BookSchema)
export default Book; 
