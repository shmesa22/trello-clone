import { getFriendlyUrl } from './getFriendlyUrl';

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
  'getFriendlyUrl should format card title correctly',
  () => {
    expect(getFriendlyUrl(cards[0].title)).toBe('trello-clone');
    expect(getFriendlyUrl(cards[1].title)).toBe('programming');
  }
);
