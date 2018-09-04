import { compose, createStore, applyMiddleware } from "redux";
import persistState from 'redux-localstorage';
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import accordionApp from "./reducer";

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {

	let middleWareTools = compose(
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		),
        persistState(null, {key: 'accordion'})
	);

	return createStore(
		accordionApp,
		preloadedState,
		middleWareTools
	);
}
