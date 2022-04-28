import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Examples = () => {
    const example = ["Food", "Electronics", "Techn. Manual"];
    const [language, setLanguage] = useState("english");

    const handleExampleButton = (event) => {
        console.log(event.currentTarget.value);
    };

    const handleClearButton = () => {
        console.log("cleared");
    };

    const handleRadioButton = (event) => {
        setLanguage(event.currentTarget.value);
        console.log(event.currentTarget.value)
    }
    
    return (
        <>
            <Grid container direction="column" spacing={1} justifyContent="center" alignItems="stretch">
                <Grid item xs={12}>
                    <Paper elevation={0} sx={{backgroundColor: "cornflowerblue", padding: 1, margin: 1, opacity: "75%"}}>
                        <Grid
                        container 
                        spacing={0}
                        direction="column"
                        justifyContent="center"
                        alignItems="stretch"
                        >
                            <Grid item xs={12}>
                                <Typography color={"white"}>
                                    Enter your own text or use one of these examples:
                                </Typography>
                            </Grid>
                            
                            <Grid item xs={12}>
                                {example.map((e) => (
                                    <Button onClick={handleExampleButton} value={e} key={e} label={e} variant="contained" 
                                    sx={{margin: 0.5, padding: 0.5}}
                                    >
                                        {e}
                                    </Button>
                                ))}
                                <Button onClick={handleClearButton} variant='contained' color='secondary' sx={{margin: 0.5, padding: 0.5}}> 
                                    Clear 
                                </Button>
                            </Grid>

                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Language</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="english"
                            onChange={handleRadioButton}
                        >
                            <FormControlLabel value="english" control={<Radio />} label="english" />
                            <FormControlLabel value="deutsch" control={<Radio />} label="deutsch" />
                        </RadioGroup>
                    </FormControl>
                </Grid>

            </Grid>
        </>
    )
};

export default Examples;