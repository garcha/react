import { EventEmitter } from "events";

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 1,
        text: "Go Shopping",
        complete: false
      },
      {
        id: 2,
        text: "Pay water bill",
        complete: false
      },
    ];
  }

  createTodo(text) {
    const id = Date.now()

    this.todos.push({
      id,
      text,
      complete: false,
    });

    this.emit("change");
  }
  getAll(){
    return this.todos;
  }

  handleActions(action) {
    //console.log("TodoStore recieved an action", action);
    switch (action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
      }
      case "RECIEVE_TODO": {
        this.todos = action.todos;
        this.emit('change');
      }
    }
  }

}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore))

export default todoStore;

window.dispatcher = dispatcher;
window.todoStore = todoStore;
