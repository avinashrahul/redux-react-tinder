import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    // When app boots up the state will be null so this is a check
    if (!this.props.book) {
      return(
        <div>
          Select a book to print details
        </div>
      );
    }

    return(
      <div>
        <h4> Details: </h4>
        <div>
          {this.props.book.title}
        </div>
      </div>
    );
  }
}

// Here state is Application state
// active book from reducers/index.js
// the below book key now be availeb as props in Book Detail component
function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
