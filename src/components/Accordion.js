import React, { PureComponent } from 'react';
import Title from "./Title";
import Card from "./Card";
import './Accordion.css';

class Accordion extends PureComponent {
	constructor(props) {
			super(props);
			this.state = {
				content: []
      };
      this.onToggleAc = this.onToggleAc.bind(this);
	}

	componentDidMount() {
		const { getContent } = this.props;
		getContent();
  }
  	
	componentWillReceiveProps(nextProps) {
		this.setState({
			content: nextProps.index.content
		});
  }

	onToggleAc(id) {
    const { content }= this.state;
		const stateContent = JSON.parse(JSON.stringify((content)));
		
		const newContent = stateContent.map(l => {
      l.collapsed = (l.id === id) ? true : false;
			return l;
    });

		this.setState({
			content: newContent
		});
	}

  render() {
    const { content }= this.state;

    return (
      <div className="container">
        <div className="Accordion">
          <header className="Accordion-header">
            <Title 
              className="Accordion-title"
              title="Accordion ReactJS"
            />
          </header>
          <div id="accordion" className="Accordion-intro">
            {content.map((o, i) => {
                return (
                  <Card key={"Card_" + i} 
                    id={o.id} 
                    index={i} 
                    title={o.title} 
                    text={o.text} 
                    collapsed={o.collapsed}
                    onToggleAc={this.onToggleAc} 
                  />
                )
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
