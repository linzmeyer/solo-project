// Values inside of this reducer: an array of objects
// - clue id
// - clue descriptions
// - clue answer
// - clue location
const allCluesReducer = (state = [ 
  { id: 1, clue_number: 1, description: '', answer: '', location: '' },
  { id: 2, clue_number: 2, description: '', answer: '', location: '' },
  { id: 3, clue_number: 3, description: '', answer: '', location: '' },
  { id: 4, clue_number: 4, description: '', answer: '', location: '' },
  { id: 5, clue_number: 5, description: '', answer: '', location: '' }
], action) => {
  switch (action.type) {
    case 'SET_ALL_CLUES':
      return action.payload;
    default:
      return state;
  }
};

export default allCluesReducer;