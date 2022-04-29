import React from "react";
import './FilterPanel.scss'

class FilterPanel extends React.Component {
    render() {
        return(
            <div 
                style={{display: this.props.allBooks.length>0 ? "block" : "none"}}
                
            >
                <div 
                    className="panelContainer" 
                    onClick={(event) => this.props.filterBooks(event)}
                >
                    <div className="allFilterContainer">
                        <p className="readBooksCount">
                            'Reading': 
                            {/* {this.props.filteredBooks.length > 0 ? this.props.filteredBooks.length : 0} */}
                        </p>
                        <span className="booksFilterSelectionButton">
                            <button>All</button>
                        </span>
                        <span className="booksFilterSelectionButton">
                            <button>Reading</button>
                        </span>
                        <span className="booksFilterSelectionButton">
                            <button>Read</button>
                        </span>
                    </div>
                    <div className="clearButtonContainer">
                        <button onClick={(event) => this.props.clearBookList(event)}>Clear Read</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default FilterPanel;