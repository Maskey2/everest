import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../images/logo.png'

const useStyles = makeStyles(theme => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    link: {
        fontFamily: 'Poppins',
        fontSize: '17px',
        textDecoration: 'none',
        color: 'grey',
        display: 'flex',
        width: '140px',
        justifyContent: 'center',
        '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform .3s ease',
            color: 'black',
        },
    },
}));

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}


ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

function ElevateAppBar(props) {
    const classes = useStyles();


    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar className={classes.root} position="sticky" style={{
                    backgroundColor: 'white',
                    color: 'white', height: '55px',
                }}>
                    <Toolbar style={{ display: 'flex', justifyContent: 'left' }}>
                    <Typography variant="subheading" color="inherit">
                            <Link to="/" ><img src={Logo} style={{width:'24%', height:'auto'}} alt="main-logo"/>
                            </Link>
                        </Typography>
                        <Typography variant="subheading" color="inherit">
                            <Link to="/" className={classes.link}>HOME
                            </Link>
                        </Typography>
                        <Typography variant="subheading" color="inherit" >
                            <a href="/#about" className={classes.link}>ABOUT
                            </a>
                        </Typography>
                        <Typography variant="subheading" color="inherit" >
                            <Link to="/menu" className={classes.link}>MENU
                            </Link>
                        </Typography>
                        <Typography variant="subheading" color="inherit" >
                            <Link to="/gallery" className={classes.link}>GALLERY
                            </Link>
                        </Typography>
                        <Typography variant="subheading" color="inherit" >
                        <a href="https://eatstreet.com/berkeley-ca/restaurants/everest-kitchen" className={classes.link} target="_blank"> ORDER-ONLINE
                            </a>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </React.Fragment>
    );
};


export default ElevateAppBar;