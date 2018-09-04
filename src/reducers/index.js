import {
	SUCCESS_GET_ACCORDION
} from "../actions/actions";

const initialState = {
	content: [],
	isFetching : true
}

function indexStore(state = initialState, action){  
	switch(action.type){
        case SUCCESS_GET_ACCORDION:
                    
            return {
                ...state,
                content: action.content,
                isFetching: false
            };
        default:
            return state;
    }
}

export default indexStore;