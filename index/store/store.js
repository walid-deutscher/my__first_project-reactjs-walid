import {createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
 import List  from'./reducers/index';
 
function getlocaldata(){
const data=localStorage.getItem('data');
let newlist;
if(data){newlist=data}
else{ newlist=[]}
const ins = {list:newlist}
    return ins
     

}


 

    const store = createStore(List, getlocaldata(), compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )) ;

    
  
export default store ;