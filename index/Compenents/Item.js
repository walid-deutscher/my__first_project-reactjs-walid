 import React from'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faShower} from '@fortawesome/free-solid-svg-icons'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux";
import {removeData} from "../store/actions/actions";
class Item  extends React.Component{

  removeitem=(name)=>{
    this.props.removeData(name);
    this.props.showa();

  }
    render(){

    
    return (
      <div>
      <li className="w3-padding-small w3-center"> 
      
       <h3>  {this.props.name}   
        </h3>
       
       
           <button  onClick={()=>this.removeitem(this.props.name)} className=" w3-hover-green w3-button w3-green w3-margin"   >
           <FontAwesomeIcon icon={faTrash} />
                                  </button>
                                  <button  className="w3-button w3-red w3-margin"   >
                                  <FontAwesomeIcon icon={faEdit} />
                                  </button>
                
                                  </li> 
           
                
            </div>
       
    )
    }
 }

 
 export default connect(null,{removeData})(Item);