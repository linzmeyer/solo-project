// Values inside of this reducer: an array of objects
const allUsersReducer = (state = [ 
  { id: '', username: '', password: '', solved_solution: '', solutions_id: '' },
], action) => {
  switch (action.type) {
    case 'SET_ALL_USERS':
      return action.payload;
    default:
      return state;
  }
};

export default allUsersReducer;