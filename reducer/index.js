const initialState = {
  isError: false,
  userDetails: [],
  income: 0,
  loading: false,
  isAuth: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'IS_LOADING':
      return {
        ...state,
        loading: !loading,
      };
    case 'IS_ERROR':
      return {
        ...state,
        loading: false,
        isError: !isError,
      };
    case 'REGISTER':
      return {
        ...state,
        userDetails: action.payload,
        loading: false,
      };
    case 'IS_SUCCESS':
      return {
        ...state,
        loading: false,
        isError: false,
      };
    case 'IS_INCOME':
      return {
        ...state,
        income: action.payload,
      };
    case 'AUTH_USER':
      return {
        ...state,
        isAuth: true,
        userDetails: action.payload,
      };
    default:
      return state;
  }
}
