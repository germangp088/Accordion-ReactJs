import {
	FETCH_GET_ACCORDION,
	SUCCESS_GET_ACCORDION
} from "../actions/actions";

const initialState = {
	content: [],
	isFetching : false
}

function indexStore(state = initialState, action){  
	switch(action.type){
        case FETCH_GET_ACCORDION:
            return {
                ...state,
                isFetching: true
            };
        case SUCCESS_GET_ACCORDION:
            let contentClone = JSON.parse(JSON.stringify(action.content));
            
            return {
                ...state,
                content: contentClone,
                isFetching: false
            };
        default:
            return state;
    }
}

export default indexStore;