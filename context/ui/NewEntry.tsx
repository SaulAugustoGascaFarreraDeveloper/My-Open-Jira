import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { ChangeEvent, useState,useContext } from "react";
import { EntriesContext } from "../entries";
import { UIContext } from "./UIContext";


export const NewEntry = () => {


  const {addNewEntry} = useContext(EntriesContext)


  const {isAddingEntry,setIsAddingEntry} = useContext(UIContext)

  //const [isAddingEntry,setIsAddingEntry] = useState(false);

  const [inputValue,setInputValue] = useState('');

  const [touched,setTouched] = useState(false);


  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)

    //console.log('Input value: ',inputValue)
  }


  const onSave = () =>{

    if(inputValue.length === 0 ) return;

    addNewEntry(inputValue)


    setIsAddingEntry(false)

    setTouched(false)

    setInputValue('')

  }

  return (
    <>
    <Box sx={{marginBottom:2,padding:2}}>

      {
        isAddingEntry ? (
          <>

            <TextField fullWidth sx={{marginTop:2,marginBottom:1}} placeholder="New Entry..."
                
                autoFocus
                multiline
                label='New Entry'
                helperText={inputValue.length <= 0 && touched && 'Enter a value'}
                error={inputValue.length <= 0 && touched}
                value={inputValue}
                onChange={onTextFieldChange}
                onBlur={() => setTouched(true)}
                />

                <Box display='flex' justifyContent='space-between'>


                    <Button variant="text" onClick={() => setIsAddingEntry(false)} >
                        Cancel
                    </Button>

                    <Button variant="outlined" color="secondary" endIcon={<SaveOutlinedIcon/>}onClick={onSave} >
                        Save
                    </Button>

                </Box>
          </>
        ) : (
          <>

            <Button startIcon={<AddCircleOutlineOutlinedIcon />} fullWidth variant='outlined' onClick={() => setIsAddingEntry(true)} >
                Add Task
            </Button>

          </>
        )

      }

    </Box>


      
    </>
  )
}
