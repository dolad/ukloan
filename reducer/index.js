const initialState = {
  isLoading: false,
  isError: false,
  userDetails: [],
};

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return {
        ...state,
        isLoading: !isLoading,
      };
    case 'IS_ERROR':
      return {
        ...state,
        isLoading: false,
        isError: !isError,
      };
    case 'REGISTER':
      return {
        ...state,
        userDetails: action.payload,
        isLoading: false,
      };
    case 'IS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
  }
};

export default indexReducer;
