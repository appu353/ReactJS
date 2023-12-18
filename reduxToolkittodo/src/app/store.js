import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
export const store = configureStore({
  reducer: todoReducer,
}); //configureStore will always accept obj

//Step for creating store:=
//import { configureStore } from "@reduxjs/toolkit";
//import todoReducer and add all list of reducer insider configure store.

//short summary of this videos:-
// one application can have only one store which is called single source of truth
//we can have multiple keyvalue property in configureStore.
//We have to introduce reducer in configureStore.
//So inside todoSlice.js, we have to create slice using createSlice method.
//we need name, initial state, and reducers where we will define what task we are going to perform.
//Next step is to define data structure in initial state.
//When are creatingslice , we are passing some name , then initial state and we can define key and functions in reducers.
//If apllication is big then we can define it in separate page and import it and use name of functions inside reducers.
//Inside reducer functions we are getting updated state value of store and in action we are getting action.payload.
//next step is to export individual functionality bcz we are not knowing which functionality will be used in which componenet.
//Next is to export main reducer.
//NOW we have to go to component and we have to either send data(useDispatch) or fecth data(useSelector).
//for sending data (useDispatch) we have to import reducer and send that reducer using dispatch.
//for fetching value we can get access of state inside callback of useSelector method.We can pick whatever we want from state.
