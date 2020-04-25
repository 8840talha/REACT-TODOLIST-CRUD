import React, { Component } from 'react';
import logo from './logo.svg';
import TodoForm from './components/TodoForm/TodoForm'
import './App.css';
import Listitem from './components/Listitem/Listitem';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash,faPlus } from '@fortawesome/free-solid-svg-icons'


library.add(faTrash,faPlus)
class App extends Component {
  state = {
    items: [],
    currentItem: {
      text: '',
      key: ''
    }


  }



  inputChangeHandler = (event) => {
    this.setState({
      currentItem: {
        text: event.target.value,
        key: Date.now()
      }
    })
  }


  addTodo = (event) => {
    event.preventDefault();

    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  removeTodo = (key) => {

    const newItemsArr = this.state.items.filter(item => {
      return item.key !== key;
    })
    this.setState({ items: newItemsArr })


  }

  updateTodo = (text, key) => {

    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }

    })
    this.setState({ items: items })

  }

  render() {
    return (
      <div className="App">
        <h1>TodoList</h1>
        <TodoForm addTodo={this.addTodo} value={this.state.currentItem.text} handleInput={this.inputChangeHandler} />
        <Listitem todo={this.state.items} remove={this.removeTodo} update={this.updateTodo} />
      </div>
    );
  }
}

export default App;
