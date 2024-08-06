export const normalizeCard = (card) => ({
  dishTitle: card.dishTitle,
  cuisine: card.cuisine,
  author: card.author,
  dateAdded: card.dateAdded,
  description: card.description,
  tags: card.tags,
  overallTime: card.overallTime,
  instructions: card.instructions,
  web: card.webUrl,
  image: {
    url: card.imageUrl,
    alt: card.imageAlt,
  },
});
