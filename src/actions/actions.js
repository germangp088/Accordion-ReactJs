const content = require('../content.json');

export const SUCCESS_GET_ACCORDION = "SUCCESS_GET_ACCORDION";

export function getContent() {
	return function (dispatch) {
		dispatch({ type: SUCCESS_GET_ACCORDION, content: content });
	}
}