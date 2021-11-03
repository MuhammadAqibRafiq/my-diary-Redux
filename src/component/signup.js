import React, { useState } from 'react'
import Navbar from './navbar';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth } from '../firebase';
import './style.css';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { Card, CardContent, Button, Box } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import '../App.css'

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.error.main,
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

const SignUp = () => {

    const classes = useStyles();

    const [fullname, setFullname] = useState('');
    const [photo, setPhoto] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const register = async (e) => {
        e.preventDefault();
        if (!fullname) {
            return alert("Enter a fullname")
        }
        await auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: fullname,
                    photoURL: photo
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: userAuth.user.displayName,
                            photoURL: userAuth.user.photoURL
                        }))
                    })
            })
            .catch((error) => alert(error));
    }

    return (
        <>
            <div style={{ background: 'black' }}><Navbar /></div>

            <div className='signup-main'>
                <Formik>

                    {({ isSubmitting }) => (

                        <Card>
                            <CardContent className='signup-cardcontent'>
                                <Form className='Signup-form-border'>

                                    <div className={classes.paper} >
                                        <Avatar className={classes.avatar}>
                                            <LockOpenIcon />
                                        </Avatar>

                                        <h3 className='signup-title'>SignUp</h3>
                                    </div>

                                    <Box>
                                        <Field style={{ paddingRight: '5px' }} type="text" name="firstname" label='FullName*' component={TextField} value={fullname} onChange={e => { setFullname(e.target.value) }} />

                                        <Field type="photo" name="photo" label='Photo Url' className='gap' component={TextField} value={photo} onChange={e => { setPhoto(e.target.value) }} />
                                    </Box>
                                    <br />

                                    <Box>
                                        <Field type="email" name="email" label='Email Address*' component={TextField} value={email} onChange={e => { setEmail(e.target.value) }} />
                                    </Box>
                                    <br />

                                    <Box>
                                        <Field type="password" name="password" label='Password*' component={TextField} value={password} onChange={e => { setPassword(e.target.value) }} />
                                    </Box>

                                    <br />

                                    <div className={classes.paper} >
                                        <Button type="submit" variant="contained" color='primary' onClick={register}
                                            disabled={isSubmitting}
                                            startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                                        >
                                            Submit
                                        </Button>
                                    </div>

                                    <Box className='signup-account'>
                                        <Link variant="body2" to="/login" >
                                            Already have an account? Sign in
                                        </Link>
                                    </Box>

                                    <Box mt={5}>
                                        <Copyright />
                                    </Box>

                                </Form>

                            </CardContent>
                        </Card>
                    )}
                </Formik>

            </div>
        </>
    );
}
export default SignUp;



// import React, { useState } from 'react'
// import Navbar from './navbar';
// import { useDispatch } from 'react-redux';
// import { login } from '../features/userSlice';
// import { auth } from '../firebase';
// import './style.css';


// const Login = () => {

//     const [fullname, setFullname] = useState('');
//     const [photo, setPhoto] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const dispatch = useDispatch()

//     const logintoapp = async (e) => {
//         e.preventDefault();
//         auth.signInWithEmailAndPassword(email, password).then(userAuth => {
//             dispatch(login({
//                 email: userAuth.user.email,
//                 uid: userAuth.uid,
//                 displayName: userAuth.user.displayName,
//                 photoURL: userAuth.user.photoURL
//             }))
//         })
//     }

//     const register = () => {
//         if (!fullname) {
//             return alert("Enter a fullname")
//         }
//         auth.createUserWithEmailAndPassword(email, password)
//             .then((userAuth) => {
//                 userAuth.user.updateProfile({
//                     displayName: fullname,
//                     photoURL: photo
//                 })
//                     .then(() => {
//                         dispatch(login({
//                             email: userAuth.user.email,
//                             uid: userAuth.user.uid,
//                             displayName: userAuth.user.displayName,
//                             photoURL: userAuth.user.photoURL
//                         }))
//                     })
//             })
//             .catch((error) => alert(error));
//     }

//     return (
//         <div>

//             <Navbar />
//             LOGIN FIRST
//             <form className='t'>
//                 <input placeholder='FullName(required if registering)' type='text' value={fullname} onChange={e => { setFullname(e.target.value) }} />
//                 <br />
//                 <input placeholder='Photo(optional)' type='picture' value={photo} onChange={e => { setPhoto(e.target.value) }} />
//                 <br />
//                 <input placeholder='Email' type='email' value={email} onChange={e => { setEmail(e.target.value) }} />
//                 <br />
//                 <input placeholder='Password' type='password' value={password} onChange={e => { setPassword(e.target.value) }} />
//                 <br />
//                 <button onClick={logintoapp}>Login</button>
//                 <p>Not a member ? <span onClick={register} style={{ cursor: 'pointer', color: "blue" }}>register now</span></p>
//             </form>
//         </div>
//     )
// }

// export default Login