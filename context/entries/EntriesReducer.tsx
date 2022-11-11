import { EntriesState } from './'

type EntriesActionType = {type: '[Entries] - Action Name'}

export const EntriesReducer = (state: EntriesState,action: EntriesActionType) :  EntriesState => {

  switch (action.type) {
    /*case 'UI - Open Sidebar':

    return{
      ...state,
      sideMenuOpen: true
    }

      break;*/

  
    default:

    return state

      break;
  }

}
