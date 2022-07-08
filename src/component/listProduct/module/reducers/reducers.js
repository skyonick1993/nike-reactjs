import * as Actiontype from "../content/contants";
const GenderAndTypeProduct  = JSON.parse(localStorage.getItem("GenderAndTypeProduct"))
const search = JSON.parse(localStorage.getItem("search"))
let initialState = {


  data: [],

  isLoading: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actiontype.FETCH_API_LIST_PRODUCT:
      state.data = payload;

      break;
    case Actiontype.IS_LOADING_LIST_Product:
      state.isLoading = payload;
      break
    default:
      break;
  }
  return { ...state };
};

export default reducer;
