const solutionLettersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SOLUTION_LETTERS':
      const lettersArray = []
      for ( let i = 0; i < action.payload.length; i++ ) {
        console.log(action.payload[i]);
        lettersArray.push(action.payload[i]);
      }
      console.log(lettersArray);
      return lettersArray;
    default:
      return state;
  }
};

export default solutionLettersReducer;