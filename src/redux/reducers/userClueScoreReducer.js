const userClueScoreReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_USER_CLUE_SCORE':
      return action.payload;
    default:
      return state;
  }
};

export default userClueScoreReducer;