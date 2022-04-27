import React from "react";
import './InputComponent.scss'
import ButtonComponent from './ButtonComponent'

class InputComponent extends React.Component {
    // appendBookInList = (event) => {
    //     if (this.props.inputValue) {
    //       let obj = {
    //         bookName: this.props.inputValue,
    //         id: new Date().getTime()
    //       }
    //       this.setState({
    //         allBooks: [...this.props.allBooks, obj],
    //         inputValue: ""
    //       })
    //     }
    //   }
    render() {
        return(
            <div className='inputParent'>
                <input type={"text"} value={this.props.inputValue}
                    onChange={(event) => this.props.updateInputValue(event)}
                    onKeyPress={(event) => this.props.appendBookByKeypress(event)}
                    placeholder="Enter any book name"
                />
                {/* <span className="clearInputValue">x</span> */}
                <ButtonComponent
                    inputValue={this.props.inputValue}
                    allBooks={this.props.allBooks}
                    appendBookInList={this.appendBookInList}
                />
            </div>
        )
    }
}
export default InputComponent;