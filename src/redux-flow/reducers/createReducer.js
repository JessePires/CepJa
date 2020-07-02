const createReducer = (initialState, handleActions) => {
  if (typeof initialState === 'undefined') {
    throw new Error('initialState should not be undefined'); 
  }

  return (state = initialState, action) => (
    handleActions.hasOwnProperty(action.type)
      ? handleActions[action.type](state, action)
      :state
  )
}; 
  

export default createReducer;
