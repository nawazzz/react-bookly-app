import React from "react";

class ButtonComponent extends React.Component {
    render() {
        return(
            <div>
                <button
                    onClick={(event) => this.props.appendBookInList(event)}
                >Add</button>
            </div>
        )
    }
}
export default ButtonComponent;