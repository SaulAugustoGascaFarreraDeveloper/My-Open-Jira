import { FC,useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../interfaces';
import { EntriesContext,EntriesReducer } from './';

export interface EntriesState{
    entries: Entry[];
}

interface Props{
    children: any
}

const Entries_INITIAL_STATE : EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pending: Hello Open Jira',
            status:'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'In-Progress: Saul Gasca',
            status:'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            _id: uuidv4(),
            description: 'Finished: Matthews greandote',
            status:'finished',
            createdAt: Date.now() - 100000
        },
    ],
}


export const EntriesProvider : FC<Props>  = ({children}) => {

const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE)

return (
   <>
    <EntriesContext.Provider value={{
           ...state
       }}>
           {children}
       </EntriesContext.Provider>
   </>
 )
}