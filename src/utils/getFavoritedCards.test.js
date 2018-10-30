import { getFavoritedCards } from './getFavoritedCards';

const cards = [
  {
    id: 1,
    title: ' Trello Clone ',
    isFavorited: true,
    background: 'orange',
  },
  {
    id: 2,
    title: 'programming',
    isFavorited: false,
    background: 'orange',
  },
];

test(
  'getFavoritedCards should filter favorite cards correctly',
  () => {
    expect(getFavoritedCards(cards)).toHaveLength(1);
  }
);
