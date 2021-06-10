import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './../index.css';
import { Container, Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
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
import Logo from '../images/logo.png'


const useStyles = makeStyles(theme => ({
  mainlogo: {
    width:'30%', 
    height:'auto',
    paddingTop:'20px',
    [theme.breakpoints.down('sm')]: {
      width:'80%', 
  },
}, 
    
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
    eveimg:{
width:'400px',
height:'auto',
margin:'auto',
[theme.breakpoints.down('sm')]: {
  width:'340px',
}, 

    },
    button: {
      fontSize: '20px',
      fontFamily: 'Poppins',     
      justifyContent: 'center',
      backgroundColor:'#e0d12e',
      alignItems: 'center',
      color: 'black',
      border:'none',
      [theme.breakpoints.down('lg')]: {
          fontSize: '25px',
      },
      [theme.breakpoints.down('md')]: {
          fontSize: '25px',
      },
      '&:hover': {
          transform: 'scale(1.1)',
          transition: 'transform .3s ease',
          backgroundColor:'black',
          border:'none'
      },
  
  },
  link1: {
    fontFamily: 'Poppins',
    fontSize: '20px',
    textDecoration: 'none',
    color: 'black',
    padding: '0px 10px',
    display: 'flex',
    justifyContent: 'center',
    '&:hover': {
        transform: 'scale(1.1)',
        transition: 'transform .3s ease',
        color: 'white',
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
     
        
          
                    <div id="about"  >
                    
            <p className={classes.title}><img src={Logo} className={classes.mainlogo} alt="main-logo"/></p>
            
            <Container maxWidth="lg" component="main">
            <ReactWOW animation='fadeInUp'>
            <p className={classes.subtitle}>We are Nepali restaurent located in Albany,California. We have been in service for __ years and we are here to provide you the best Nepali cuisine experience you ever had in life!<br/><br/></p>

            <p style={{textAlign:'center', fontSize:'22px'}}>
            <u>OPERATION HOURS</u>
            <br/><br/>
            Monday – Thursday | 5 pm to 9.30pm<br/>
            
            Friday – Saturday | 5pm to 11 pm<br/>
            
            Sunday | 11:30- 2:30 ,<br/> 5pm to 9:30 pm<br/>
           
            Dine - In, Beer and Wine place. Nepali & Indian restaurant.<br/> We always serve fresh & natural ingredients. Come try our juicy momos and delicious tandoors !<br/><br/>
            <Button variant="outlined" size="large" color="primary" className={classes.button}>
            <Link to="/menu" className={classes.link1}>
                            View Menu</Link>
                           
                          
          </Button><br/> <br/>
            </p>            
           
            </ReactWOW>
            <ReactWOW animation="fadeIn" scroll={true}>
                <Grid container spacing={3} alignItems="center" justify="center" alignContent="center">
                <img src={Pakora}  onClick={ () => openImageViewer(1) } key={1} style={{width:'100%', height:'auto'}}/>
                </Grid>
                </ReactWOW>
             <br/>
             <ReactWOW animation='fadeIn'>
               <div>
      {images.map((src, index) => (
             
        <img
          src={ src }
          onClick={ () => openImageViewer(index) }
         
          key={ index }
          className={classes.eveimg}
          style={{ margin: '2px' }}
          alt="Food Images"/>               
         
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
    </ReactWOW>
            </Container>
        </div>
         
    )
}

