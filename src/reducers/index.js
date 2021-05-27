//index.js de reducer 2

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state, //recogemos el estado
        myList: [...action.myList, action.payload],
      };
    default:
      return state; //por defecto, si no coincide con ningún caso, retorna el estado actual
  }
};

export default reducer;
