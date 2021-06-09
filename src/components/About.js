import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './../index.css';
import { Container, Grid } from '@material-ui/core';
import Chaat from '../images/chaat.jpg'
import Cnaan from '../images/Cheese_Naan.jpeg'
import Ckorma from '../images/chicken_korma.jpeg'
import Chowmin from '../images/chicken_chowmin.jpeg'
import Biryani from '../images/biryani.jpg'
import Chilli from '../images/ch-chilli.jpeg'
import Momo from '../images/ch-momo.jpeg'
import GNaan from '../images/gnaan.jpeg'
import Cchowmin from '../images/chicken_chowmin.jpeg'
import Lamb from '../images/lamb-curry.jpeg'
import Pakora from '../images/pakora-2.jpg'
import Spaneer from '../images/saagpaneer.jpeg'
import Tandoori from '../images/tandoori.jpeg'
import ReactWOW from 'react-wow'
import { render } from 'react-dom';
import ImageViewer from 'react-simple-image-viewer';


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

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [      
        // require('../images/pakora-2.jpg'),

        require('../images/chaat.jpg'),
        
        require('../images/chicken_korma.jpeg'),

        require('../images/biryani.jpg'),
        require('../images/ch-chilli.jpeg'),
        require('../images/ch-momo.jpeg'),
        require('../images/gnaan.jpeg'),
        require('../images/chicken_chowmin.jpeg'),
        require('../images/lamb-curry.jpeg'),
        require('../images/Cheese_Naan.jpeg'),
        require('../images/saagpaneer.jpeg'),
        require('../images/tandoori.jpeg'),
        require('../images/chicken_chowmin.jpeg'),
    ];
  
    const openImageViewer = useCallback((index) => {
      setCurrentImage(index);
      setIsViewerOpen(true);
    }, []);
  
    const closeImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(false);
    };


    const classes = useStyles();
    return (
        
        <ReactWOW animation='tada'>
                    <div id="about"  >
            <p className={classes.title}>About</p>
            
            <Container maxWidth="lg" component="main">
            <p className={classes.subtitle}>We are Nepali restaurent located in Albany,California. We have been in service for __ yeas and we are here to provide you the best Nepali cuisine experience you ever had in life!</p>
                <Grid container spacing={3} alignItems="center" justify="center">
                <img src={Pakora}  onClick={ () => openImageViewer(1) } key={1} style={{width:'100%', height:'auto'}}/>
                </Grid>
             <br/>
                <div>
      {images.map((src, index) => (
             
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
          width="400"
          key={ index }
          style={{ margin: '2px' }}
          alt=""/>               
         
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={ images }
          currentIndex={ currentImage }
          onClose={ closeImageViewer }
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
        />
      )}
    </div>
            </Container>
        </div>
        </ReactWOW>
    )
}

