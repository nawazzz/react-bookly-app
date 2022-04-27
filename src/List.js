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
                            <ul className='bookTitleContainer'>
                                <span onClick={() => this.props.markAsRead(elm)} >
                                    <input type={"checkbox"}/>
                                </span>
                                <li
                                    style={{textDecoration: elm.isRead? "underline": "none"}}
                                >
                                    {elm.bookName}
                                </li>
                                    {/* <span onClick={() => {this.props.editList(elm)}}>Edit</span>
                                    <span onClick={(elm) => {this.props.deleteList(elm)}}>x</span> */}
                                
                                
                                {/* <span style={{width: "10px"}} onClick={(event) => {this.props.editList(event)}} ><img style={{width: "100%"}} src={editIcon} alt="edit list"/></span> */}
                            </ul>
                            <div className='iconsContainer'>
                                <span onClick={() => this.props.editList(elm)} ><img src={editIcon} alt="edit list"/></span>
                                <span onClick={() => this.props.deleteList(elm)}><img src={deleteIcon} alt="delete list"/></span>
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