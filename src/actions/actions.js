const content = require('../content.json');

export const FETCH_GET_ACCORDION = "FETCH_GET_ACCORDION";
export const SUCCESS_GET_ACCORDION = "SUCCESS_GET_ACCORDION";

export function getContent() {
	return function (dispatch) {
		dispatch({ type: FETCH_GET_ACCORDION });
		dispatch({ type: SUCCESS_GET_ACCORDION, content: content });
	}
}
