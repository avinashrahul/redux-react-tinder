import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item"> {book.title} </li>
      )
    });
  }

  render() {
    console.log(this.props.asd); // Testing
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// Now Book Reducer is automatically loaded into Application state
// using state we can call books object
// Now below books key can be used as porps inside the class
function mapStateToProps(state) {
  return {
    books: state.books, // check reducers/index.js
    asd: 'hyderabad'
  };
}

// This is the way to export the whole containerso app can use it.
export default connect(mapStateToProps)(BookList);
