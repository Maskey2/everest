import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './../index.css';
import { Container, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    
    title: {
        fontSize: '70px',
        fontFamily: 'Quicksand',
        textAlign: 'center',
        color: '#575656',
        [theme.breakpoints.down('sm')]: {
            fontSize: '75px',
            textAlign: 'center'
        },
    },
    subtitle: {
        fontSize: '30px',
        fontFamily: 'Courgette',
        textAlign: 'center',
        color: 'black',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            textAlign: 'center',
            left: 0
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '25px',
            top: '60%'
        },
    },
}));

export default function About() {
    const classes = useStyles();
    return (
        <div id="about"  >
            <p className={classes.title}>About</p>
            
            <Container maxWidth="lg" component="main">
            <p className={classes.subtitle}>We are Nepali restaurent located in San Francisco California. We have been in service for __ yeas and we are here to provide you the best Nepali cuisine experience you ever had in life!</p>
                <Grid container spacing={3} alignItems="center" justify="center">
                    <Grid item xs={12} sm={12} md={3} style={{textAlign:'center'}}>
                        <img src="https://www.holidify.com/images/cmsuploads/compressed/1515644556794_20190527160433.jpeg" style={{ height: '200px' }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} style={{textAlign:'center'}}>
                    <img src="https://images1.dallasobserver.com/imager/u/original/11557554/peak_chilimomo_alisonmclean_01.jpg" style={{ height: '200px' }} />
             </Grid>
             <Grid item xs={12} sm={12} md={3} style={{textAlign:'center'}}>
                        <img src="https://lh3.googleusercontent.com/proxy/C567hnfQzzHgaOvZzELMIrUmfT91G2yRlHjuHTDcqqU3Bb944v3NlADAyxMiDJr2aN8xwS3h6oPJupgfih4go3Yr-9q6fKYdvduUblurzwWUy65wt5ylPYDPSDe5U0eI" style={{ height: '200px' }} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} style={{textAlign:'center'}}>
                    <img src="https://img.sndimg.com/food/image/upload/v1/img/recipes/41/88/43/picANCOlO.jpg" style={{ height: '200px' }} />
             </Grid>
                </Grid>
            </Container>
        </div>
    )
}

