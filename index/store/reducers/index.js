import  { ADD_DATA ,REMOVE_DATA} from'../actions/types'

export  default function list(state,action){

    console.log(action.type);
    console.log("Comming... !");
    switch(action.type){
        case ADD_DATA :{
            state.list.push(action.data)
        
           return state;
        }
        case REMOVE_DATA :{
   
            const result_after_remove=state.list.filter(result=>{return result.name != action.name});

            
              console.log(result_after_remove);
        
           return []
        }
        default:  if(state===undefined){
            return []
        }
        return state

    }

}