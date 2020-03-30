

import React from'react'
 
import {connect} from "react-redux";
import {addData} from "../store/actions/actions";
import Item from'../Compenents/Item'
class Items extends React.Component{
 

    state={

        name:"",
        data:[ ] 
    }
 constructor(props){
     super(props);
   
     console.log(this.props.list) ;


 }

 componentDidMount() {
     
  }
 show=()=>{
    console.log(this.props.list);
    
    this.setState({data:this.props.list}) ;
 }

 addName=()=>{
   if(this.state.name.trim()==""){

    alert("You must put a name");
       return false ;

   }
 this.props.addData({"name":this.state.name}) ;

 this.show();

 }
 onChangeaction=(event)=>{

    this.setState({name:event.target.value})
     
 }
    render(){
        return (<div className="w3-center">
            <br/><br/>
            <div>
                                      <h3>List of names</h3>
                                  {this.state.data.map((item,index)=>
                   <ul className="w3-ul w3-border "  style={{width:"50%",margin:"auto"}} >
                       <Item  showa={this.show} key={index} name={item.name} /></ul>) }

                                  </div>
                                  <br />
 
                   
<input  className="w3-input w3-border w3-small"  onChange={this.onChangeaction}   type="text" />

           <button className=" w3-hover-black w3-button w3-black w3-margin" onClick={this.addName}  >
                              
                              Add New name
                              </button>

                         
                              <div>
                               
                              </div>

                             
        </div>)
    }
}
 

const mapStateToProps = (state) => {
    return {
        list: state.list ,
    };
}

 

export default connect(mapStateToProps,{addData})(Items);/*
{this.props.list.map((item,index)=>{
                                <li key={index}>{item.name}</li>
                              })}

*/