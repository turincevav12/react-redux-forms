const CREATE = 'my-app/creatTodo/CREATE';
const ADD_USER = 'my-app/creatTodo/ADD_USER';

export default (state = {
  user: {
    
  }
}, action) => {
  switch (action.type) {
    case CREATE:
      return[
        ...state,
        action.todo
      ]

    case ADD_USER:
      return[
        ...state,
        action.user
      ]
    default: return state;
  }
}

export function createTodoCart(todo) {
  return { type: CREATE, todo };
}

export function addForm(user){
  return { type: ADD_USER, user}
}

export function getTodos () {
  return dispatch => get('/user').then(user => dispatch(addForm(user)))
}

export function getTodo (dispatch) {
  return {
    createTodoCart: (todo) => dispatch(createTodoCart(todo)),
    addForm: ( user ) => dispatch(addForm(user))
  }
}