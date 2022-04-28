import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Showcase = () => {
  return (
    <>
        <Paper elevation={0} sx={{margin: 5, padding: 1, maxWidth: "100%", textAlign: "center"}}>
            <Grid
            container 
            spacing={0}
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            >
                <Grid item xs={12}>
                    <Typography variant='h4'>
                        dida Question Answering
                    </Typography>
                </Grid>
                
                <Grid item xs={12}>
                    <Typography variant='h7' color="text.secondary">
                        AI-based Question Answering can be used in various use cases and industries. 
                        Below is a demo that is just a small sample of what Question Answering tailored to your use case can do.
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
        
    </>
  )
};

export default Showcase;