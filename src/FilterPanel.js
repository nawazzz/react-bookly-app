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
                        <span className="ReadBooksCount">Count</span>
                        <span >
                            <button>All</button>
                        </span>
                        <span>
                            <button>Reading</button>
                        </span>
                        <span>
                            <button>Read</button>
                        </span>
                    </div>
                    <div>
                        <button>Clear Read</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default FilterPanel;