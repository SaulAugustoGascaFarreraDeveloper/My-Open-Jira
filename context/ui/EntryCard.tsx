import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { FC,DragEvent,useContext} from "react";
import { Entry } from '../../interfaces';
import { UIContext } from "./UIContext";


interface Props{
    entry: Entry
}


export const EntryCard : FC<Props> = ({entry}) => {

    const {startDragging,endDragging} = useContext(UIContext)

    const onDragStart = (event: DragEvent) => {
        console.log(event)

        event.dataTransfer.setData('text',entry._id)

        //todo: modoficar estado para verificar que estoy haciendo drag
        startDragging()
    }


    const onDragEnd = () => {
        //Cancel on drag
        endDragging()
    }

  return (
    <>
        <Card sx={{marginBottom:1}} draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>
            <CardActionArea>
                <CardContent>
                    <Typography sx={{whiteSpace:'pre-line'}}>{entry.description}</Typography>
                </CardContent>

                <CardActions sx={{display:'flex',justifyContent:'end',paddingRight:2}}>
                    <Typography variant="body2">30 minutes ago</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    </>
  )
}
