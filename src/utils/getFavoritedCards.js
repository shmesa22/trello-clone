export const getFavoritedCards = (cards) => (
  cards.filter((card) => card.isFavorited)
);
