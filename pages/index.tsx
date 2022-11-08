import { NextPage } from 'next'
import {Typography} from '@mui/material'
import { Layout } from '../components/layouts'


const HomePage : NextPage = () => {
  return (
    <>
      
      <Layout title='My Awesome Open Jira'>

      <Typography variant='h1'  color='primary'>
        Next JS saul
      </Typography>

      </Layout>
    </>
  )
}


export default HomePage