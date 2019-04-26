// Values inside of this reducer:
// - an array of objects
// - clue id
// - clue descriptions
// - clue answer
// - clue location

const allCluesReducer = (state = [ 
  { id: '', clue_number: '', description: '', answer: '', location: '' },
  { id: '', clue_number: '', description: '', answer: '', location: '' },
  { id: '', clue_number: '', description: '', answer: '', location: '' },
  { id: '', clue_number: '', description: '', answer: '', location: '' },
  { id: '', clue_number: '', description: '', answer: '', location: '' }
], action) => {
  switch (action.type) {
    case 'SET_ALL_CLUES':
      return action.payload;
    default:
      return state;
  }
};

export default allCluesReducer;