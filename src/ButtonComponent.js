import React from "react";
import './ButtonComponent.scss'

class ButtonComponent extends React.Component {
    render() {
        return(
            <div className="buttonContainer">
                <button
                    onClick={(event) => this.props.appendBookInList()}
                >Add</button>
            </div>
        )
    }
}
export default ButtonComponent;