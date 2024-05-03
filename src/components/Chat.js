import React, {useState, useEffect, useRef} from 'react';
import Message from './Message';

import {db} from '../firebase'
import {query, collection, orderBy, onSnapshot} from 'firebase/firestore'
import Sendmessage from './Sendmessage';


const Chat = () => {
    const [messages, setMessages]=useState([]);
    const scroll= useRef();


    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot)=>{
            let messages=[]
            querySnapshot.forEach((doc)=>{
                messages.push({...doc.data(), id: doc.id})
            })
            setMessages(messages)
        })
        return () => unsubscribe()
    }, []);
    // useEffect(() => {
    //     bottomRef.current.scrollIntoView({ behavior: 'smooth' })
    //   },[messages]);

    return (
        <>
        <div className='main'>

            { messages && messages.map((message) => (
                <Message key={message.id} message={message}/>
            ))}
           
        </div>
        
        <Sendmessage scroll={scroll}/> 
        <span ref={scroll}></span>

        
        </>

    );
};

export default Chat;