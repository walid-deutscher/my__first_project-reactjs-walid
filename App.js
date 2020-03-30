import React ,{Component} from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { Link,BrowserRouter as Router,Route} from'react-router-dom'
 import Home from'./index/pages/Home'
 import List from'./index/pages/Items'
 import store from'./index/store/store';
 import {Provider} from "react-redux";
 
class App extends Component {
 
  
constructor(){
  super()
 
  
  }
    
   render(){

    return(
    <Router>
 
    <div>
      
<div className="w3-top">
  <div className="w3-bar w3-black w3-card">
    <a className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"  onclick={this.myFunction} title="Toggle Navigation Menu">
    <FontAwesomeIcon icon={faBars} />
      </a>
    <Link   to ='/' className="w3-bar-item w3-button w3-padding-large">HOME</Link>
    <Link to ='/list'   className="w3-bar-item w3-button w3-padding-large w3-hide-small">List of products</Link>
    <Link  to='/' className="w3-bar-item w3-button w3-padding-large w3-hide-small">Proudcut Adiminstartion</Link>
    <Link  to="/" className="w3-bar-item w3-button w3-padding-large w3-hide-small">A props de Nous</Link>
     
   </div>
</div>
<br/>
 
 
 

    </div>
         
         <Route path='/' component={Home} />
         <Route path='/list' component={List} />
    </Router>)
   }
   



                 }

                      
                 function AppWithStore(){
                  return <Provider store={store}>
                    <App />
                  </Provider>
                }
                
 
export default AppWithStore;
                
 
 


 































 