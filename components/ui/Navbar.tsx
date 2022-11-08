import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { FC, useContext } from 'react';
import { UIContext } from '../../context/ui';


interface Props{
    navbarTitle?:string
}

export const Navbar : FC<Props> = ({navbarTitle}) => {


const {openSideMenu} = useContext(UIContext)

  return (
    <>
        <AppBar position="sticky" elevation={0} >
            <Toolbar >
                <IconButton size="large" edge="start" onClick={openSideMenu}  >
                    <MenuOutlinedIcon />
                </IconButton>

                <Typography variant='h6' >{navbarTitle || 'Open Jira'}</Typography>

            </Toolbar>
        </AppBar>
    </>
  )
}
