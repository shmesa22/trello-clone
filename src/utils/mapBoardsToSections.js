function boardsReducer(boardMap, board) {
  if (board.isFavorited) {
    boardMap.favoriteBoards = boardMap.favoriteBoards
      ? [...boardMap.favoriteBoards, board]
      : [board];

    return boardMap;
  }

  boardMap.rest = boardMap.rest ? [...boardMap.rest, board] : [board];
  return boardMap;
}

export function mapBoardsToSections(boards) {
  return boards.reduce(boardsReducer, {
    favoriteBoars: [],
    rest: [],
  });
}
