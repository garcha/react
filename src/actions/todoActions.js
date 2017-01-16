import dispatcher from '../dispatcher';

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function reloadTodos(){
  // axios("http://someurl.com/someendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECIEVE_TODO", todos: [
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
        {
          id: 3,
          text: "Eat Lunch",
          complete: true
        },
    ]})

    // if(false){
    //   dispatcher.dispatch({type: "FETCH_TODOS_ERRORS"})
    // }
  }, 1000)
}
