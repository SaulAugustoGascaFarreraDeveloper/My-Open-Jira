import { Box } from "@mui/material"
import Head from "next/head"
import { FC } from "react"
import { SideBar,Navbar} from "../ui";


interface Props{
    title?:string,
    children: any
}

export const Layout :  FC<Props> = ({title='My Open Jira',children}) => {
  return (
    <>
    <Box sx={{flexFlow:1}}>
        <Head>
            <title>{title}</title>
        </Head>

        <Navbar navbarTitle={title} />

        <SideBar />


        <Box sx={{padding: '10x 20px'}} >
            {children}
        </Box>

    </Box>
    </>
  )
}
