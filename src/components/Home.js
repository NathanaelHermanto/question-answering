import { Grid } from '@mui/material'
import React from 'react'
import Showcase from './Showcase'

const Home = () => {
  return (
    <>
        <Grid
        container 
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        >
            <Grid item xs={12} sm={8} md={6} lg={6} >
                <Showcase />
            </Grid>
        </Grid>
    </>
  )
}

export default Home