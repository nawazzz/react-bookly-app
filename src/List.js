import React from 'react';
import './List.scss';
import editIcon from './edit.svg';
import deleteIcon from './trash.svg';

class List extends React.Component {

    render() {
        return(
            <div>
                {this.props.allBooks.map((elm, index) => {
                    return(
                        <div className='listMainContainer'>
                            <div className='bookTitleContainer'>
                                <input type={"checkbox"}/>
                                <h6>{elm.bookName}</h6>
                                {/* <span style={{width: "10px"}} onClick={(event) => {this.props.editList(event)}} ><img style={{width: "100%"}} src={editIcon} alt="edit list"/></span> */}
                            </div>
                            <div className='iconsContainer'>
                                <span onClick={(elm) => {this.props.editList(elm)}} ><img src={editIcon} alt="edit list"/></span>
                                <span onClick={(event) => {this.props.deleteList(event)}}><img src={deleteIcon} alt="delete list"/></span>
                            </div>                            
                        </div>
                    )
                })
                }
            </div>
        )
    }
}
export default List;