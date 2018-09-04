import React from "react";

const Body = (props) =>{
    const classBody = ("collapsing " + (props.collapsed ? "show card-body-open" : ""));
    return(
        <div id={props.id} className={classBody} aria-labelledby={"heading-" + props.index} data-parent="#accordion">
            <div className="card-body">
                {props.text}
            </div>
        </div>
    );
}

const Header = (props) =>{
    return(
        <div className="card-header" id={"heading-" + props.index}>
            <h5 className="mb-0">
                <button className="btn btn-link" 
                    data-toggle="collapse" data-target={"#" + props.id} 
                    aria-expanded="true" aria-controls={props.id}
                    onClick={(e) => props.onToggleAc(props.id)}>
                    {props.title}
                </button>
            </h5>
        </div>
    );
}

const Card = (props) => {
    return (
        <div className="card">
            <Header {...props} />
            <Body {...props} />
        </div>
    );
}

export default Card;