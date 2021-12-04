import React, {createContext, useContext, useReducer} from 'react';

//Prepares Datalayer
export const StateContext = createContext();

//Wrap our App and provide the Data layer
export const StateProvider =({reducer,initialState,children})=>(

    <StateContext.Provider value ={useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>
);

//Pull information from Data layer
export const useStateValue =()=> useContext(StateContext);