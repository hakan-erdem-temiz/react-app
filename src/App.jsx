/*
The App component is the root component of the app. Only the root component should be aware of a redux. 
The important part to notice is the connect function which is used for connecting our root component App to the store.
This function takes select function as an argument.
Select function takes the state from the store and returns the props (visibleTodos) that we can use in our components.
*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions/actions.js";

import AddTodo from "./components/AddTodo.js";
import TodoList from "./components/TodoList.js";
import { changeApprovalStatus } from "./actions/actions";

class App extends Component {
  render() {
    const { dispatch, visibleTodos } = this.props;

    return (
      <div>
        <AddTodo
          onAddClick={(text, isApproved) => dispatch(addTodo(text, isApproved))}
          onChangeStatus={status => dispatch(changeApprovalStatus(status))}
        />
        <TodoList todos={visibleTodos} />
      </div>
    );
  }
}

function select(state) {
  //mapStateToProps
  return {
    visibleTodos: state.todos
  };
}

export default connect(select)(App);

/*
<Provider store> — Wraps the React application and makes the Redux state available to all container components in the application’s hierarchy
connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options]) — Creates a higher-order component for making 
container components out of base React components
*/
