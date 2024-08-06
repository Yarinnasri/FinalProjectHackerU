import Joi from "joi";

const urlRegex =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

const cardSchema = {
  dishTitle: Joi.string().min(2).max(250).required(),
  author: Joi.string().min(2).max(250).required(),
  cuisine: Joi.string().min(2).max(250).required(),
  description: Joi.string().min(2).max(2560).required(),
  tags: Joi.array().items(Joi.string()).required(),
  overallTime: Joi.string().min(2).max(50).required(),
  dateAdded: Joi.date().required(),
  instructions: Joi.array().items(Joi.string()).required(),
  webUrl: Joi.string()
    .ruleset.regex(urlRegex)
    .rule({ message: 'card "web" mast be a valid url' })
    .required(),
  imageUrl: Joi.string()
    .ruleset.regex(urlRegex)
    .rule({ message: 'card.image "url" mast be a valid url' }),
  imageAlt: Joi.string().min(2).max(250).allow(""),
};
export const editCardSchema = {
  dishTitle: Joi.string().min(2).max(250).required(),
  author: Joi.string().min(2).max(250).required(),
  cuisine: Joi.string().min(2).max(250).required(),
  description: Joi.string().min(2).max(2560).required(),
  overallTime: Joi.string().min(2).max(50).required(),
  dateAdded: Joi.date().required(),
  instructions: Joi.array().items(Joi.string()).allow(),
  webUrl: Joi.string()
    .ruleset.regex(urlRegex)
    .rule({ message: 'card "web" mast be a valid url' })
    .required(),
  imageUrl: Joi.string()
    .ruleset.regex(urlRegex)
    .rule({ message: 'card.image "url" mast be a valid url' })
    .allow(),
  imageAlt: Joi.string().min(2).max(250).allow(""),
};

export default cardSchema;
