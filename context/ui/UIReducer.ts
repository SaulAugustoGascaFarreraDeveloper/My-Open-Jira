import { stat } from 'fs';
import { UIState } from './'

type UIActionType =  {type: 'UI - Open Sidebar'} 
                    | {type: 'UI - Close Sidebar'} 
                    | {type: 'UI - Set isAddingEntry',payload: boolean}
                    | {type: 'UI - Start Dragging'}
                    | {type: 'UI - End Dragging'}

export const UIReducer = (state: UIState,action: UIActionType) :  UIState => {

  switch (action.type) {
    case 'UI - Open Sidebar':

    return{
      ...state,
      sideMenuOpen: true
    }

      break;

    case 'UI - Close Sidebar':

    return{
      ...state,
      sideMenuOpen: false
    }

      break;


      case 'UI - Set isAddingEntry':

      return{
        ...state,
        isAddingEntry: action.payload
      }

      break;

      case 'UI - Start Dragging':
        

      return{
        ...state,
        isDragging: true
      }

      break;

      case 'UI - End Dragging':
        

      return{
        ...state,
        isDragging: false
      }

      break;



    default:

    return state

      break;
  }

}
