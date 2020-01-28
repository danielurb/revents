export const createReducer = (initialState, fnMap) => {
  return (state = initialState, { type, payload }) => {
    const handler = fnMap[type]; //object bracket notation

    return handler ? handler(state, payload) : state;
  };
};
