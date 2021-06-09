import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import RoomIcon from '@material-ui/icons/Room';
import Map from './../images/map.PNG'
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Everest Kitchen
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },

    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
    link:{
        textDecoration:'none',
        color:'black'
    },
    linka:{
        textDecoration:'none',
        fontSize:'19px',
        color:'black'
    }
}));


export default function Pricing() {
    const classes = useStyles();

    return (

      
    <Container maxWidth="lg" component="footer" className={classes.footer} >
        <Grid container spacing={2}>        
            <Grid item xs={6} sm={3} md={4} lg={4} justify="center" alignItems="center">
              <Typography component={'span'} className={classes.headerlink}>
              <a href='/' className={classes.linka}><strong>Everest Kitchen </strong></a>                         
              </Typography>
              <ul>    
              {/* <a href='https://everest.onrender.com/menu' className={classes.link}><li>Menu  </li></a>  */}
             <li><a href='/#about' className={classes.link}>About  </a>      </li> 
             <li> <a href="tel:510-579-5079" className={classes.link}>Contact                            </a>  </li>        
              </ul>
            </Grid>  
            <Grid item xs={6} sm={3} md={4} lg={4} justify="center" alignItems="center">
            <a href="https://www.google.com/maps/dir/29.9556943,-90.1936557/1150+Solano+Ave,+Albany,+CA+94706/@32.588076,-124.3538617,4z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8085793225bfd6df:0xa1ba86d69d6ea318!2m2!1d-122.2974194!2d37.8901832">
           <img src={Map} alt="Map" style={{width:'80%',height:'auto'}}/>
            </a>
            </Grid>  

            
            <Grid item xs={12} sm={6} md={4} lg={4}>
              
               
               <Typography component="h2" className={classes.headerlink} style={{paddingLeft:'5px', paddingBottom: '5px', fontSize: '22px', fontFamily: "Poppins, sans-serif"}}> Get in Touch with us!</Typography>             
            <Typography component={'span'} className={classes.link} style={{padding:'5px',   fontFamily: "Poppins, sans-serif"}}><FacebookIcon/></Typography>     
            <Typography component={'span'} className={classes.link} style={{padding:'5px',   fontFamily: "Poppins, sans-serif"}}><InstagramIcon/></Typography>   
            <a href="https://www.google.com/maps/dir/29.9556943,-90.1936557/1150+Solano+Ave,+Albany,+CA+94706/@32.588076,-124.3538617,4z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8085793225bfd6df:0xa1ba86d69d6ea318!2m2!1d-122.2974194!2d37.8901832">       
            <Typography component={'span'} className={classes.link} style={{padding:'5px',   fontFamily: "Poppins, sans-serif"}}><RoomIcon/></Typography>  </a>
         
        </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
       
      </Container>
     
    );
}