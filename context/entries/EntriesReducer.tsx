import { Entry } from '../../interfaces';
import { EntriesState } from './'

type EntriesActionType = {type: '[Entry] Add-Entry',payload: Entry} | {type: '[Entry] Entry-Updated',payload: Entry}

export const EntriesReducer = (state: EntriesState,action: EntriesActionType) :  EntriesState => {

  switch (action.type) {
    case '[Entry] Add-Entry':

    return{
      ...state,
      //sideMenuOpen: true
      entries: [...state.entries,action.payload]
    }

      break;

      case '[Entry] Entry-Updated':

      return{
        ...state,
        entries: state.entries.map(entry => {
          if(entry._id === action.payload._id){
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry;
        })
      }

      break;

  
    default:

    return state

      break;
  }

}
