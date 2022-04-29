import React from 'react'
import './App.scss';
import InputComponent from './InputComponent'
import HeaderComponent from './HeaderComponent';
import ButtonComponent from './ButtonComponent'
import List from './List';
import FilterPanel from './FilterPanel';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
      allBooks: [],
      filteredBooks: [],
      readFilterArray: []
    }
  }


  updateInputValue = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  appendBookInList = (event) => {
    if (this.state.inputValue) {
      let obj = {
        bookName: this.state.inputValue,
        id: new Date().getTime(),
        isRead: false
      }
      this.setState({
        allBooks: [...this.state.allBooks, obj],
        inputValue: ""
      })
    }
  }

  appendBookByKeypress = (event) => {
    
    if (event.key === "Enter") {
      this.appendBookInList()
    }
  }

  deleteList = (elm) => {
    const booksAfterDeletion = this.state.allBooks.filter((item, index) => {
      if (elm.id !== item.id) {
        return true
      }
    })
    this.setState({
      allBooks: booksAfterDeletion
    })
  }

  editList = (elm) => {
    const booksAfterDeletion = this.state.allBooks.filter((item, index) => {
      if (elm.id !== item.id) {
        return true
      }
    })
    this.setState({
      allBooks: booksAfterDeletion,
      inputValue: elm.bookName
    }) 
  }

  markAsRead = (elm) => {
    const readBooks = this.state.allBooks.map((item, index) => {
      if (elm.id === item.id) {
        return {
          ...item,
          isRead: !item.isRead
        }
      }
      return item
    })
    this.setState({
      allBooks: readBooks
    })
  }

  filterBooks = (event) => {
    
    const fileterdArray = this.state.allBooks.filter((elm, index) => {
      if ((event.target.innerText === "Reading") && (elm.isRead === false)) {
        return true
      }
    })
    const getReadBooks = this.state.allBooks.filter((elm, index) => {
      if ((event.target.innerText === "Read") && (elm.isRead === true)) {
        return true
      }
    })
    this.setState({
      fileterdBooks: 
      // this.state.fileterdBooks.length>0 ? [...this.state.fileterdBooks, fileterdArray] : 
      fileterdArray,
      readFilterArray: 
      // this.state.readFilterArray.length>0 ? [...this.state.readFilterArray, getReadBooks] : 
      getReadBooks
    })
  }

  clearBookList = (event) => {
    this.setState({
      allBooks: [],
      filteredBooks: [],
      readFilterArray: []
    })
  }

  render() {
    return (
      <div className='mainAppContainer'>
        <HeaderComponent />
        <InputComponent inputValue={this.state.inputValue}
          allBooks={this.state.allBooks}
          updateInputValue={this.updateInputValue}
          appendBookByKeypress={this.appendBookByKeypress}
        />
        {/* <ButtonComponent
          inputValue={this.state.inputValue}
          allBooks={this.state.allBooks}
          appendBookInList={this.appendBookInList}
        /> */}
        <List inputValue={this.state.inputValue}
          allBooks={this.state.allBooks}
          editList={this.editList}
          deleteList={this.deleteList}
          markAsRead={this.markAsRead}
          filteredBooks={this.state.filteredBooks}
          readFilterArray={this.state.readFilterArray}
        />
        <FilterPanel
          inputValue={this.state.inputValue}
          allBooks={this.state.allBooks}
          filterBooks={this.filterBooks}
          clearBookList={this.clearBookList}
          fileterdBooks={this.state.fileterdBooks}
        />
      </div>
    );
  }
}

export default App;


// There will be an input to enter new book name along side 'Add' button.

// After entering a book name, clicking on 'Add' button or pressing 'Enter' 
// key should save the book and show it in a list form below the input.

// Each book in the list will have checkbox to mark the book as 'Read'.

// Each book in the list will have edit icon appear on hover to edit the name
//  of the book. The icon will appear to the opposite side of the book name.

// Each book in the list will have delete icon appear on hover allowing user 
// to delete that book. The icon will appear to the right of the edit icon.

// At the bottom of the list, there will be a panel to show more information. 
// In that panel, there will be 3 things.

// 1. There will be 3 filters at the center of the bottom panel to filter 
// books from the list.

// The three filters are 'All', 'Reading', 'Read'.

// By default, 'All' filter is selected and it should show all the books
//  including 'Reading' and 'Read'.

// When 'Reading' filter is selected, all the books which other than the ones
//  marked as 'Read' should appear.

// When 'Read' filter is selected, all the books which are marked as 'Read'
//  should appear.

// 2. To the left of the panel, it should ALWAYS show the count of books which
//  are in 'Reading'. It should reset if all the 'Reading' books are deleted.

// 3. To the right end of the panel, there will be a 'Clear' button to clear all
//  the 'Read' books from the list at one go.

// Bonus: When the user is typing book name in the input, as the user is typing,
//  immediately use that typed  keyword and search in the existing book names
//  to show the matching books consisting that keyword in the same list.

// For example. Suppose there are three books in the list: 'Harry Potter', 
// 'Hotel Transylvania' and 'Harry Goes To Guantanamo'. The user typed keyword
//  'h' in the input. You should immediately use that typed letter and search
//  in the existing list of 3 books and show the result which contains that
//  keyword which in this example, will be all three of the books as they
//  all contain 'h' letter. Now, if the user continues typing 'har', then 
// the search result will reduce to show just 2 books as only 2 books contains
//  the letter 'har'. The search should not be case sensitive. If the user goes
//  on typing 'harish', then the search result will be empty and if the user 
// decides to press Enter, the book called 'harish' will get added as the 
// fourth book and all 4 books will show up in the list.

// Think about the UI. Make it look presentable. Think how you're going to 
// break the UI into small components.

// Remember to write SCSS in nested format and use proper classnames. 
// Decide which functionality you'll implement first and proceed with writing
//  code for it. Take one step at a time. Do not jump and miss the khidki
//  like last time. If you follow proper flow while writing code, the chances
//  of making errors become less.