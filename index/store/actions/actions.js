import {ADD_DATA ,REMOVE_DATA}from'./types'

export function RemoveDataFromAction(name){

    return {
        type:REMOVE_DATA ,
        name
    }
}


export function removeData(name){
    return(dispatch)=>{
        dispatch(RemoveDataFromAction(name))
    }
}


 
export function ADDataFromAction(data){

    return {
        type:ADD_DATA ,
        data
    }
}


export function addData(data){
    return(dispatch)=>{
        dispatch( ADDataFromAction(data))
    }


}