import API from "../../../../axios/API";
import * as ActionType from "../content/contants";

export const createAction = ({type, payload}) => {
    return {
        type,
        payload
    }
}
export const getProductList = (gender, typeProduct) => {
    return async (dispatch) => {
      try {
        const res = await API(
          `product?gender=${gender}&typeProduct=${typeProduct}`,
          "GET"
        );
        dispatch({
          type: ActionType.FETCH_API_LIST_PRODUCT,
          payload: res.data,
        });
      } catch (err) {
        console.log(err);
      }
    };
  };
  