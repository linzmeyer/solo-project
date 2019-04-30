const solutionLettersReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SOLUTION_LETTERS':
      const lettersArray = []
      // push ever letter into an array as individual elements
      for ( let i = 0; i < action.payload.length; i++ ) {
        lettersArray.push(action.payload[i]);
      }
      console.log(lettersArray);
      return lettersArray;
    default:
      return state;
  }
};

export default solutionLettersReducer;