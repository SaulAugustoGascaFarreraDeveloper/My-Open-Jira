import { List, Paper } from "@mui/material"
import { FC, useContext, useMemo, DragEvent } from 'react';
import { EntryStatus } from "../../interfaces"
import { EntriesContext } from "../entries";
import { EntryCard } from "./EntryCard"
import { UIContext } from "./UIContext";

import styles from './EntryList.module.css'

interface Props{
    status: EntryStatus
}


export const EntryList : FC<Props> = ({status}) => {


   const {entries,updateEntry} = useContext(EntriesContext)

   const {isDragging,endDragging} = useContext(UIContext)

   const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])

   const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        //console.log(event)
        const id = event.dataTransfer.getData('text')
        //console.log({id})

        const entry = entries.find(e => e._id === id)!;

        entry.status = status

        updateEntry(entry)

        endDragging()

   }


   const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault()
   }
   

  return (
    <>
        <div 
            onDrop={onDropEntry}
            onDragOver={allowDrop}
            className={isDragging ? styles.dragging : ''}
        >
            <Paper sx={{height:'calc(100vh - 180px)',overflow:'scroll',backgroundColor:'transparent',padding:'1px 5px'}}>

                    <List sx={{opacity: isDragging ? 0.2 : 1,transition: 'all .3s'}}>
                        {
                            entriesByStatus.map((entry,i) => (
                                <EntryCard key={entry._id} entry={entry} />
                            ))
                        }
                      
                    </List>

            </Paper>
        </div>
    </>
  )
}
