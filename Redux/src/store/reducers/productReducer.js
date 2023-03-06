import {PRODUCTS} from '../../constant/Data/Product'

const initialState ={
    products:PRODUCTS,
    filteredProducts:[],
    selected:null,
};

const productReducer = (state=initialState,action)=>{
    return state;
};

export default productReducer;