import { connect } from "react-redux";
import { getContent } from "../actions/actions";
import Accordion from "./Accordion";

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps === state,
		index: state.index
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		getContent: () => {
			dispatch(getContent());
		}
	};
};

const AccordionContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Accordion);

export default AccordionContainer;