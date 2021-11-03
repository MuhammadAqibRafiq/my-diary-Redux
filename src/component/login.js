import React, { useState } from 'react'
import Navbar from './navbar';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth } from '../firebase';
import '../App.css';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Card, CardContent, Button, Box } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));


function Copyright() {

    return (

        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" to={{ pathname: "https://aqibportfolio.netlify.app/" }} target="_blank" >
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const LogIn = () => {

    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const logintoapp = async (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                uid: userAuth.uid,
                email: userAuth.user.email,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL,
            }))
        })
    }


    return (
        <>
            <div style={{ background: 'black' }}><Navbar /></div>
            <div className='login-main'>
                <img src="https://source.unsplash.com/random" className='login-bg' alt='' />

                <Formik>

                    {({ isSubmitting }) => (

                        < div className='sec'>

                            <Card className="login-cards">

                                <CardContent className="login-cardcontent">

                                    <Form className='login-form-border'>

                                        <div className={classes.paper} >
                                            <Avatar className={classes.avatar}>
                                                <LockOutlinedIcon />
                                            </Avatar>

                                            <h3>LogIn</h3>
                                        </div>

                                        <Box className='abc'>
                                            <Field type="email" name="email" label='Email Address*' value={email} onChange={e => { setEmail(e.target.value) }} component={TextField} />
                                        </Box>
                                        <br />
                                        <Box  >
                                            <Field type="password" name="password" label='Password*' value={password} onChange={e => { setPassword(e.target.value) }} component={TextField} />
                                        </Box>

                                        <br />

                                        <div className={classes.paper} >
                                            <Button type="submit" variant="contained" color='primary' onClick={logintoapp}
                                                disabled={isSubmitting}
                                                startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}>
                                                Submit
                                            </Button>
                                        </div>

                                        <Box className='login-account'>
                                            {/* <Link variant="body2" to="/forget" > */}
                                            <Link variant="body2" to="/login" >
                                                Forgot password?
                                            </Link>
                                        </Box>

                                        <Box mt={5}>
                                            <Copyright />
                                        </Box>

                                    </Form>

                                </CardContent>
                            </Card>
                        </div>
                    )
                    }
                </Formik>

            </div>
        </>
    )
}

export default LogIn