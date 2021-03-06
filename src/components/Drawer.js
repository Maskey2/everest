import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Grid, Box, } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../images/logo.png'

const useStyles = makeStyles({
    list: {
        width: 230,
    },
    fullList: {
        width: 'auto',
    },
    color: {
        backgroundColor: 'black',
        color: 'grey'
    },
    reslogo: {        
       maxWidth:'100%', 
       height:'auto', 
       verticalAlign:'middle',
       paddingTop: '4px',
    },
    reslink: {
        textDecoration: 'none',
        fontSize: '18px',
        fontFamily: 'Poppins',
        color: 'black'
    },
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = anchor => (
        <div className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem key={3} button divider>
                    <Link to="/" className={classes.reslink}>Home</Link> </ListItem>
                <ListItem key={1} button divider>
                <a href='/#about' className={classes.reslink}>About  </a>    
                    </ListItem>
                <ListItem key={2} button divider>
                    <Link to="/menu" className={classes.reslink}>Menu</Link>
                    </ListItem>
                    <ListItem key={4} button divider>
                    <Link to="/gallery" className={classes.reslink}>Gallery</Link>
                    </ListItem>
                    <ListItem key={4} button divider>
                    <a href="https://eatstreet.com/berkeley-ca/restaurants/everest-kitchen" className={classes.reslink}>Order Online
                            </a>  </ListItem>


            </List>
        </div>
    );

    return (
        <div>
            <Box display={{ xs: 'block', md: 'none', sm: 'block', lg: 'none' }} >
                {['left'].map(anchor => (
                    <React.Fragment key={anchor}>
                        <AppBar className={classes.color} >
                            <Toolbar >
                                <div style={{display:'contents'}} >
                                <Grid item xs={6} style={{display: 'grid'}}>
                                <MenuIcon style={{ fontSize: '30px' }} onClick={toggleDrawer(anchor, true)}></MenuIcon>
                                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                        {list(anchor)}
                                    </Drawer>
                                    </Grid>
                                    <Grid item xs={6} >
                                    <Link to="/">
                                    <img src={Logo} className={classes.reslogo} alt="main-logo"/>
                                    </Link>
                                    </Grid>
                                   
                                   
                                </div>
                            </Toolbar>
                        </AppBar>
                    </React.Fragment>
                ))}
            </Box>
        </div>
    );
}