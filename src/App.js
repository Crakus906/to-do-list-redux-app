import React from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import{add, del,done,clear} from "./actions";
import './App.css';


class App extends React.Component {
  state = { 
    value: '',
    todos: [],
  }
  onChange = (e) => {
    this.setState({value: e.target.value})
  }

  onClick = () => {
    this.props.add({value:this.state.value, done:false });
    this.setState({value: ''});
  }
  doneTodo = (e) => {
    const todos = this.props.todos.map(todo => {
      if(todo.value === e){
        todo.done = !todo.done;
      }
      return todo;
    });
   this.props.done(todos)
  }
  onDelete = (e) => {
    const todos = this.props.todos;
    todos.splice(e,1);
    this.props.del(todos);
  }
  
  render(){
    return (
      <div className="container">
        <input onChange={this.onChange} value={this.state.value}/>
        <button className="push" onClick={this.onClick}>push</button>
        <div>
          {this.props.todos ? this.props.todos.map((todo,i) => 
          <div className={`todo ${todo.done ? 'done':''}`} key={i}>{todo.value}
            <button onClick={() =>this.doneTodo(todo.value)}>{todo.done ? 'cansel' : 'done'}</button>
            <button className="delete" onClick={() => this.onDelete(i)}>delete</button>
          </div>): null}
          <button className='clear' onClick={this.props.clear}>clear</button>
        </div>
      </div>
     );
  }
}
const mapStateToProps = state => ({
  todos: state.todos,});

const mapDispatchToProps = dispatch => bindActionCreators({
  add,
  del,
  done,
  clear,
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(App);
