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
import { TextField } from '@mui/material';

const Examples = () => {
    const example = ["Food", "Electronics", "TechManual"];
    const [language, setLanguage] = useState("english");
    const [passageValue, setPassageValue] = useState("");
    const [questionValue, setQuestionValue] = useState("");
    const passages = {
        'Food': "Xylitol is also known as birch sugar. Xylitol tastes just as sweet as sugar, and you can replace it one-to-one in recipes. But why should you do that? Birch sugar has some positive advantages over table sugar. On the one hand, it is tooth-friendly and even has a non-cariogenic effect, i.e. it does not cause caries. Secondly, xylitol is particularly popular because of its low glycemic index. It has a glycemic index of 7 to 11, while that of regular sugar is 65 to 100. So if you want to consciously avoid the negative properties of sugar, but not its sweetness, you should give xylitol a try. However, in moderation, because in high doses it can have a laxative effect. Birch sugar should also be kept away from dogs, as it can even be fatal for the four-legged friends.", 
        'Electronics': "The iPhone SE (2020) scores very well in the test and allows Apple fans to dive into the iPhone world for less money. The performance is excellent and the battery lasts for a really long time. The camera also does a decent job, but has to admit defeat to the top models. iPhone SE packs Apple's powerful A13 Bionic chip into Apple's most popular size at a most affordable price. It’s just what you’ve been waiting for. It has a height of 138.4 mm, a width of 67.3 mm and a depth of 7.3 mm. It starts at $399.", 
        'TechManual': 'The Apache Lucene project develops open-source search software. The project releases a core search library, named Lucene core, as well as the Solr search server. Solr is a high performance search server built using Lucene Core. Solr is highly scalable, providing fully fault tolerant distributed indexing, search and analytics. It exposes Lucenes features through easy to use JSON/HTTP interfaces or native clients for Java and other languages.'
    };
    const questions = {
        'Food': "What is the advantage of birch sugar?", 
        'Electronics': "What chip is in the iPhone SE?", 
        'TechManual': 'How can I connect to the search server?'
    };
    const passagesDE = {
        'Food': "Xylitol ist auch als Birkenzucker bekannt. Xylit schmeckt genauso süß wie Zucker, und Sie können es in Rezepten eins zu eins ersetzen. Aber warum sollten Sie das tun? Birkenzucker hat einige positive Vorteile gegenüber Haushaltszucker. Zum einen ist er zahnfreundlich und wirkt sogar nicht kariogen, d.h. er verursacht keine Karies. Zum anderen ist Xylit besonders beliebt wegen seines niedrigen glykämischen Index. Er hat einen glykämischen Index von 7 bis 11, während der von normalem Zucker bei 65 bis 100 liegt. Wer also bewusst auf die negativen Eigenschaften des Zuckers, nicht aber auf seine Süße verzichten möchte, sollte Xylit ausprobieren. Allerdings in Maßen, denn in hohen Dosen kann es abführend wirken. Auch von Hunden sollte Birkenzucker ferngehalten werden, da er für die Vierbeiner sogar tödlich sein kann.", 
        'Electronics': "Das iPhone SE (2020) schneidet im Test sehr gut ab und ermöglicht Apple-Fans den Einstieg in die iPhone-Welt für weniger Geld. Die Leistung ist hervorragend und der Akku hält wirklich lange durch. Auch die Kamera macht einen ordentlichen Job, muss sich aber den Top-Modellen geschlagen geben. Das iPhone SE packt Apples leistungsstarken A13-Bionic-Chip in die beliebteste Apple-Größe zu einem äußerst günstigen Preis. Es ist genau das, worauf Sie gewartet haben. Es hat eine Höhe von 138,4 mm, eine Breite von 67,3 mm und eine Tiefe von 7,3 mm. Es beginnt bei 399 $.", 
        'TechManual': 'Das Apache Lucene-Projekt entwickelt Open-Source-Such-Software. Das Projekt veröffentlicht eine Kern-Suchbibliothek, genannt Lucene Core, sowie den Solr-Suchserver. Solr ist ein hochleistungsfähiger Suchserver, der auf Lucene Core aufbaut. Solr ist hoch skalierbar und bietet vollständig fehlertolerante verteilte Indizierung, Suche und Analyse. Er stellt die Funktionen von Lucene über einfach zu verwendende JSON/HTTP-Schnittstellen oder native Clients für Java und andere Sprachen zur Verfügung.'
    };
    const questionsDE = {
        'Food': "Was ist der Vorteil von Birkenzucker?", 
        'Electronics': "Welcher Prozessor ist im iPhone SE?", 
        'TechManual': 'Wie kann ich den Suchserver ansprechen?'
    };

    const handleExampleButton = (event) => {
        if (language==="english"){
            setPassageValue(passages[`${event.currentTarget.value}`]);
        } else {
            setPassageValue(passagesDE[`${event.currentTarget.value}`]);
        }

        if (language==="english"){
            setQuestionValue(questions[`${event.currentTarget.value}`]);
        } else {
            setQuestionValue(questionsDE[`${event.currentTarget.value}`]);
        }
    };

    const handleClearButton = () => {
        setPassageValue("");
        setQuestionValue("");
    };

    const handleRadioButton = (event) => {
        setLanguage(event.currentTarget.value);
    };

    const handleSubmitButton = () => {
        console.log("submitted");
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

                <Grid item xs={12}>
                    <TextField 
                        id="outlined-textarea"
                        label="Passage"
                        placeholder="Passage"
                        multiline
                        value={passageValue}
                        rows={8}
                        sx={{minWidth: '100%'}}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField 
                        id="outlined-textarea"
                        label="Question"
                        placeholder="Question"
                        multiline
                        value={questionValue}
                        rows={2}
                        sx={{minWidth: '100%'}}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button onClick={handleSubmitButton} variant='contained' color='secondary' sx={{margin: 0.5, padding: 0.5, minWidth: '100%'}}> 
                        Submit 
                    </Button>
                </Grid>

            </Grid>
        </>
    )
};

export default Examples;