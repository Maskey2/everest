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
    button: {
        fontSize: '20px',
        fontFamily: 'Poppins',
        position: 'absolute',
        top: '60%',
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
            top: '70%'
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
        top: '68%',
        left: '6%',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
           display:'none'
        },
        [theme.breakpoints.down('lg')]: {
            fontSize: '25px',
            top: '70%'
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
        <ReactWOW animation='fadeIn'>
            <div className="bg"></div>
            <h1 className={classes.pStyle}>Everest Kitchen</h1>
            <p className={classes.subpStyle}> <em>"We are here to provide you the best Nepali cuisine experience you ever had!"</em></p>
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
        </ReactWOW>
    )
}
