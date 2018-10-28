export const starredBoards = {
  title: 'Starred Boards',
  icon: 'far fa-star',
  cards: [
    {
      id: 1,
      title: 'trello clone',
      isFavorited: true,
      background: 'orange',
    },
    {
      id: 2,
      title: 'React JS',
      isFavorited: true,
      background: 'pink',
    },
    {
      id: 3,
      title: 'Meetup',
      isFavorited: true,
      background: 'red',
    },
  ]
}

export const recentlyViewed = {
  title: 'Recently Viewed',
  icon: 'far fa-clock',
  cards: [
    {
      id: 4,
      title: 'Programming',
      isFavorited: false,
      background: 'purple',
    }
  ]
}

export const personalBoards = {
  title: 'Personal Boards',
  icon:'far far-user',
  cards: [
    ...starredBoards.cards,
    {
      id: 4,
      title: 'Programming',
      isFavorited: false,
      background: 'purple',
    },
    {
      id: 5,
      title: 'Learning',
      isFavorited: false,
      background: 'green',
    }
  ]
}
