// Values inside of this reducer: an array of objects
// - clue id
// - clue descriptions
// - clue answer
// - clue location
const allActiveContentReducer = (state = [ 
  { id: '', clue_number: '', description: '', answer: '', location: '' },
  { id: '', clue_number: '', description: '', answer: '', location: '' },
  { id: '', clue_number: '', description: '', answer: '', location: '' },
  { id: '', clue_number: '', description: '', answer: '', location: '' },
  { id: '', clue_number: '', description: '', answer: '', location: '' }
], action) => {
  switch (action.type) {
    case 'SET_ALL_ACTIVE_CONTENT':
      return action.payload;
    default:
      return state;
  }
};

export default allActiveContentReducer;