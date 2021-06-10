import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './../index.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow'

const useStyles = makeStyles(theme => ({
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
    link2: {
        fontFamily: 'Poppins',
        fontSize: '20px',
        textDecoration: 'none',
        color: 'white',
        padding: '0px 10px',
        display: 'flex',
        justifyContent: 'center',
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform .3s ease',
            color: 'black',
        },
    },
    pStyle: {
        fontSize: '100px',
        fontFamily: 'Quicksand',
        position: 'absolute',
        top: '30%',
        left: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#575656',
        textShadow: '#e4e4e4 4px 4px 7px;',
        [theme.breakpoints.down('sm')]: {
            fontSize: '75px',
            textAlign: 'center'
        },
    },
    subpStyle: {
        fontSize: '30px',
        fontFamily: 'Courgette',
        position: 'absolute',
        top: '50%',
        left: '5%',
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        textShadow: '#e4e4e4 7px 7px 7px;',        
        
        [theme.breakpoints.down('lg')]: {
            fontSize: '25px',
            top: '50%'
        },
        [theme.breakpoints.down('md')]: {
            top: '50%',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px',
            top: '55%',
            textAlign: 'center',
            textShadow: '2px 2px 3em #fff, 0 0 0.4em #fff;',
            left: 0
        },
    },
    button: {
        fontSize: '20px',
        fontFamily: 'Poppins',
        position: 'absolute',
        top: '67%',
        left: '6%',
        justifyContent: 'center',
        backgroundColor:'#e0d12e',
        alignItems: 'center',
        color: 'black',
        border:'none',
        [theme.breakpoints.down('sm')]: {
           display:'none'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '25px',
            top: '60%',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '25px',
            top: '58%',
        },
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform .3s ease',
            backgroundColor:'black',
            border:'none'
        },
    
    },
    button2: {
        fontSize: '20px',
        fontFamily: 'Poppins',
        position: 'absolute',
        backgroundColor:'black',
        top: '78%',
        left: '6%',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        
        [theme.breakpoints.down('lg')]: {
            fontSize: '25px',
            top: '70%'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '25px',
            top: '68%',
        },
        [theme.breakpoints.down('sm')]: {
            display:'none'
         },
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform .3s ease',
            backgroundColor:'#e0d12e',
            border:'none'
        },
    }
}));

export default function Mainimg() {
    const classes = useStyles();
    return (
        <div>
            <div className="bg"></div>
            <ReactWOW animation='fadeInUp' >
            <h1 className={classes.pStyle}>Everest Kitchen</h1>
            </ReactWOW>
            <ReactWOW animation='fadeIn' delay="0.8s">
            <p className={classes.subpStyle}> <em>"We are here to provide you the best Nepali cuisine experience you ever had!"</em></p>
            </ReactWOW>
            <Button variant="outlined" size="large" color="primary" className={classes.button}>
            <Link to="/menu" className={classes.link1}>
                            View Menu</Link>
                            <br/>
                          
        </Button>
<br></br>
        <Button variant="outlined" size="large"  className={classes.button2}>           
                            <a href="tel:510-579-5079"className={classes.link2}>Call 510-579-5079
                            </a>
        </Button>
        </div>
    )
}
