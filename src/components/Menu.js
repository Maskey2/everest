import React from 'react'
import { Container, Grid } from '@material-ui/core';
import Img from '../images/Everest_Menu_1.jpg'
import Img2 from '../images/Everest_Menu_2.jpg'
import {  Typography } from "@material-ui/core";
import Menu from './../menu/Everest_Menu.pdf'

export default function Users() {
    return (
        <Container maxWidth="lg" component="main" style={{minHeight:'80vh'}}>
            <h1 style={{textAlign:'center', backgroundColor:'#e4e4e4', padding:'10px',marginTop:'70px'}}>MENU</h1>
            <Grid container spacing={2} justify="center" alignItems="center">                    
          <Grid item  xs={12} sm={12} md={12}>
              <a href={Menu}>
          <img src={Img} alt="Menu" style={{maxWidth:'100%',height:'auto'}}/></a>
              </Grid>  
              <Grid item  xs={12} sm={12} md={12}>
              <a href={Menu}>
          <img src={Img2} alt="Menu" style={{maxWidth:'100%',height:'auto'}}/></a>
              </Grid> 
              
        </Grid>
           
        </Container>
    )
}
