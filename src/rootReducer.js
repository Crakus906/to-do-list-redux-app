import {
    DELETE,
    ADD,
    DONE,
    CLEAR
   } from "./actions";
   
   const initialState = {
    todos: [{value:'buy milk', done:false},{value:'create redux to-do app', done:false}],
   };
   
   export default (state = initialState, action) => {
     switch (action.type) {
       case ADD: {
         return {
           ...state,
           todos: [...state.todos,action.payload]
         };
       }
       case DELETE: {
         return {
          todos: [...action.payload]
         };
       }case DONE: {
         return {
          todos: [...action.payload]
         };
       }case CLEAR: {
         return {
          todos: []
         };
       }
 
       default:
         return state;
     }
   };
   