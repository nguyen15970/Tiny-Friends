const initState = {
  detail: {},
  listCart: [
  ],
};

const rootReducer = (state = initState, action) => {
  console.log({ state }, { action });

  switch (action.type) {
    case "Detail":
      return {
        ...state, 
        detail:action.payload
      };
      case "Addtocart":
        return {
          ...state,
          listCart:[
            ...state.listCart,action.payload
          ]
        };

    default:
      return state;
  }
};

export default rootReducer