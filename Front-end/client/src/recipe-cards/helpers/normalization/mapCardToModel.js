export const mapCardToModel = (card) => ({
  dishTitle: card.dishTitle,
  description: card.description,
  author: card.author,
  cuisine: card.cuisine,
  instructions: card.instructions,
  dateAdded: card.dateAdded,
  overallTime: card.overallTime,
  webUrl: card.web,
  imageUrl: card.image.url,
  imageAlt: card.image.alt,
});
