const activeRewardReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_ACTIVE_REWARD':
      return action.payload;
    default:
      return state;
  }
};

export default activeRewardReducer;