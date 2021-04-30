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
}));


export default function Pricing() {
    const classes = useStyles();

    return (

      
    <Container maxWidth="lg" component="footer" className={classes.footer} >
        <Grid container spacing={2}>        
            <Grid item xs={6} sm={3} md={4} lg={4} >
              <Typography component={'span'} className={classes.headerlink}>
             Everest Kitchen             
              </Typography>
              <ul>    
             
              <a href='/#about' className={classes.link}><li>About  </li>  </a>     
              <a href='/#contact' className={classes.link}><li>Contact  </li> </a>           
              </ul>
            </Grid>  
            <Grid item xs={6} sm={3} md={4} lg={4}>
              <Typography component={'span'} gutterBottom className={classes.headerlink}>                
               Highlights
              </Typography>                 
              <ul>    
              <Link to='/design&develop' className={classes.link}><li>Menu  </li></Link>  
              <Link to='/manufacture' className={classes.link}><li>Catering Order </li></Link>
              <Link to='/ourbrands' className={classes.link}><li>Customer Reviews </li></Link>
              </ul>              
            </Grid>  
            <Grid item xs={12} sm={6} md={4} lg={4}>
              
               
               <Typography component="h2" className={classes.headerlink} style={{paddingLeft:'5px', paddingBottom: '5px', fontSize: '22px', fontFamily: "Poppins, sans-serif"}}> Get in Touch with us!</Typography>             
            <Typography component={'span'} className={classes.link} style={{padding:'5px',   fontFamily: "Poppins, sans-serif"}}><FacebookIcon/></Typography>     
            <Typography component={'span'} className={classes.link} style={{padding:'5px',   fontFamily: "Poppins, sans-serif"}}><InstagramIcon/></Typography>          
            <Typography component={'span'} className={classes.link} style={{padding:'5px',   fontFamily: "Poppins, sans-serif"}}><RoomIcon/></Typography>  
         
        </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
       
      </Container>
     
    );
}