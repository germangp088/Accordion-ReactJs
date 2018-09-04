import React from "react";
import { Provider } from "react-redux";
import { Switch } from "react-router-dom";
import { Router, Route, browserHistory } from "react-router";
import AccordionContainer from "./components/AccordionContainer";

const Root = ({store}) => (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Switch>
				<Route exact={true} path="/" component={AccordionContainer} />
			</Switch>
		</Router>
	</Provider>
);

export default Root;
