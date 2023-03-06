
import {CATEGORIES} from '../../constant/Data/Category'
import { categoryTypes } from '../types/categoryType';


const {SELECT_CATEGORY}= categoryTypes;
//esstado inicial

const initialState = {
    categories:CATEGORIES,
    selected:null,
}

const categoryReducer = (state=initialState, action) =>{
    //return state;
    switch(action.type){
        case SELECT_CATEGORY:
            const indexCategory =state.categories.findIndex(
                (category) =>category.id === action.categoryId
            );
            if(indexCategory===-1)return state;
            
            return {
                ...state,
                selected:state.categories[indexCategory]
            };
            default:
                return state;

    }
};

export default categoryReducer;