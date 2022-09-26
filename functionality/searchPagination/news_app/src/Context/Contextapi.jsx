import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../Reducer/reducer';

let API = `http://hn.algolia.com/api/v1/search?`;

const initialState = {
    isLoading : true, 
    // Keys from API provided
    query : "HTML",
    nbPage : 0,
    page : 0,
    hits : []
}


// Context
const AppContext = React.createContext();

// Provider  
const AppProvider = ({children}) => {
    const [state , dispatch] = useReducer(reducer, initialState);

    const fetchApiData = async(url) =>{
        dispatch ({type: "SET_LOADING"})
        try{
            const resp = await fetch(url);
            const data  = await resp.json();
            console.log(data , API);
            
            dispatch({
                type: 'GET_STORIES',
                payload: {
                    hits : data.hits,
                    nbPage : data.nbPage,
                }
            })
        }
        catch(err){
            console.log(err);
        }
    }

    // to remove the post 
    const removePost =() =>{
        dispatch({type: 'REMOVE_POST'}) ;
    }

    useEffect(() =>{
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    } , [])

    return (
        <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider , AppContext , useGlobalContext };