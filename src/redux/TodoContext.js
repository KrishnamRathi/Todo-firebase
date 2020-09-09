import createDataContext from './createDataContext'
import db from '../firebase'


const reducer = (state, action) => {
    switch(action.type){
        case "SET_USER":
            return {...state, user: action.payload}

        case "GET_TODOS":
            return {...state, tasks: action.payload}

        case "DELETE":
            return {...state, tasks: state.tasks.filter(task => task!==action.payload)}

        default:
            return state
    }
}
const initialState = {
    user: null,
    tasks: []
}

const login = dispatch => {
    return(user) => {
        try{
            dispatch({type: "SET_USER", payload: user}) 
        }catch(err){console.log(err)}
    }
}

const deleteFromState = dispatch => {
    return (task) => {
        dispatch({type: "DELETE", payload: task});
    }
}

const getTodos = dispatch =>{
    return (email) =>{
        db.collection('todos').doc(email).onSnapshot(snapshot => {
            if(snapshot.data()){
                dispatch({type: "GET_TODOS", payload: snapshot.data().tasks})
            }
            else db.collection('todos').doc(email).set({
                tasks: []
            })
        })
    }
}

export const { Context, Provider } = createDataContext(
    reducer,
    {
        login,
        getTodos,
        deleteFromState
    },
    initialState
)