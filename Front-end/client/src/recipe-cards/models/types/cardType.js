import { shape, string, number, arrayOf, oneOfType } from "prop-types";
import imageType from "./imageType";

const cardType = shape({
  _id: string,
  dishTitle: string.isRequired,
  author: string.isRequired,
  description: string,
  image: imageType.isRequired,
  overallTime: string.isRequired,
  dateAdded: string.isRequired,
  instructions: arrayOf(string).isRequired,
  likes: arrayOf(string).isRequired,
  web: oneOfType([string]).isRequired,
  tags: arrayOf(string).isRequired,
  user_id: string.isRequired,
  createdAt: string.isRequired,
});

export default cardType;
