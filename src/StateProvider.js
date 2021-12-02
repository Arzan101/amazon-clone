import React, {createContext, useContext, useReducer} from 'react';

//Prepares Datalayer
export const StateContext = createContext();

//Wrap our App and provide the Data layer
export const StateProvider =({reducer , initialstate ,children})=>(

    <StateContext.Provider value ={useReducer(reducer,initialstate)}>
    {children}
    </StateContext.Provider>
);

//Pull information from Data layer
export const useStateValue =()=> useContext(StateContext);