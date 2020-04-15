
// import { Product} from '../product';
// export interface ProductState{
// ShowProductCode
// }

export function reducer(state, action) {
    switch (action.type) {
  
      case 'TOGGLE_PRODUCT_CODE':
        console.log("state of product "+ JSON.stringify(state));
        console.log("action of payload "+ action.payload);
        return {
          ...state,
          showProductCode: action.payload
        };
  
      default:
        return state;
    }
  }