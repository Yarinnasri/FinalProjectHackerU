const generateBizNumber = require("./generateBizNumber");

const normalizeCard = async (rawCard, userId) => {
  const { url, alt } = rawCard.image;
  const image = {
    url:
      url ||
      "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
    alt: alt || "Recipe card image",
  };

  return {
    ...rawCard,
    image,
    overallTime: rawCard.overallTime || "",
    dateAdded: rawCard.dateAdded,
    author: rawCard.author,
    cuisine: rawCard.cuisine,
    instructions: rawCard.instructions,
    description: rawCard.description,
    bizNumber: rawCard.bizNumber || (await generateBizNumber()),
    user_id: rawCard.user_id || userId,
  };
};
module.exports = normalizeCard;
