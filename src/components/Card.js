import React from "react";

const Card = (props) => {
    const classBody = ("collapsing " + (props.collapsed ? "show card-body-open" : ""));

    return (
        <div className="card">
            <div className="card-header" id={"heading-" + props.index}>
                <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target={"#" + props.id} aria-expanded="true" aria-controls={props.id}
                        onClick={(e) => props.onToggleAc(props.id)}>
                        {props.title}
                    </button>
                </h5>
            </div>

            <div id={props.id} className={classBody} aria-labelledby={"heading-" + props.index} data-parent="#accordion">
                <div className="card-body">
                    {props.text}
                </div>
            </div>
        </div>
    );
}

export default Card;