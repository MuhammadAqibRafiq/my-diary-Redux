import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import firebase from 'firebase/compat/app';
// import { logout } from '../features/userSlice';
// import { useDispatch } from 'react-redux';
import './style.css';
import { Card, Button, Stack, Form } from 'react-bootstrap'
import Navbar from './navbar';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';

const Feed = ({ user }) => {

    const [input, setInput] = useState('');
    const [post, setPost] = useState([]);
    // const dispatch = useDispatch()

    useEffect(() => {
        db.collection('posts').orderBy("timeStamp", "desc").onSnapshot(snapshot => {
            setPost(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        })

    }, [])

    console.log(user)
    console.log(post)

    const sendPost = async (e) => {
        // e.preventDefault();
        //    console.log(post)
        if (input) {
            await db.collection('posts').add({
                name: user.displayName,
                discription: user.email,
                message: input,
                photoURL: user.photoURL || '',
                timeStamp: firebase.firestore.FieldValue.serverTimestamp() ,

            });
        }
        else { alert('Please type something') }
        // setInput('')
    }



    // console.log('feed==user', user)
    return (
        <>
            <div style={{ background: 'black' }}><Navbar /></div>

            <div className=''>
                <br />
                <div className='container py-2'>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control className="me-auto" placeholder='Type...' onChange={(e) => setInput(e.target.value)} />
                        <Button variant="secondary" onClick={sendPost}>Submit</Button>
                        <div className="vr" />
                        <Button variant="outline-danger">Reset</Button>
                    </Stack>
                </div>
                <br />

                <div className='container'>

                    {
                        post.map((elem, ind) => {
                            // console.log(elem.data.timeStamp.toString())
                            return (

                                <Card className="text-center m-3" key={ind}>
                                    <Card.Header className='d-flex justify-content-center'><Avatar src={elem.data.photoURL} alt={elem.data.name} /><p className='m-2'>{elem.data.name}</p></Card.Header>
                                    <Card.Body>
                                        {/* <Card.Title>{elem.data.discription}</Card.Title> */}
                                        <Card.Text>{elem.data.message}</Card.Text>
                                        <Button variant="outline-danger">Delete</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">
                                        { !user ? elem.data.timeStamp.toString() : "Timestamp and delete button soon" }
                                 </Card.Footer>

                                    {/* <Card.Footer className="text-muted">{moment(elem.data.timeStamp.toDate()).calendar()} </Card.Footer> */}
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Feed