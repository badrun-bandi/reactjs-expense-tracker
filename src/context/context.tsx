import { createContext, Dispatch, useReducer } from 'react';
import { AppKey, Transaction } from '../models/common';
import { Actions, StateType } from '../models/types';
import { useStorageValue } from '../utils/storage';
import AppReducer from './reducer';

export const mockData: Transaction[] =
[
    {type:"Income",category:"Investments",amount:500,date:"12-30-2021",id:"ad24f902-7bd3-4a4f-8fdf-29fd5db564e4"},
    {type:"Expense",category:"Travel",amount:250.40,date:"12-30-2021",id:"991400e3-e466-4a60-ab25-dbffdc3f3616"}
];

type Props = { children: React.ReactElement }
const initialState: StateType = [...mockData];

export const AppContext = createContext<{ state: StateType; dispatch: Dispatch<Actions>}>({
    state: initialState,
    dispatch: () => null
});
export const Provider = ({children}: Props): JSX.Element => {
    const [storage] = useStorageValue(AppKey.TrackerApp, initialState);
    const [state, dispatch] = useReducer(AppReducer, storage);
    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
}