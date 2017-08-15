import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
//makes the action from actioncreator flow through the all the reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
}

// anything returned from this function ends up as props on BookList container
function mapDispatchToProps(dispatch) {
  // the result of selectBook should be passed to all reducers when called
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// takes function and component and produces a container
// container is a component that is aware of state by Redux
// promote BookList to container -needs to know about dispatch method selectBook
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
