
import React, {useState } from 'react';
import {auth, db} from '../firebase'
import { addDoc,collection,serverTimestamp } from 'firebase/firestore';

const Sendmessage = ({ scroll  }) => {
const [input, setInput] = useState('');
const sendMessage = async (e) =>{
    e.preventDefault();
    if (input === ""){
        alert ("please enter a valid message");
        return
    }
    const {uid, displayName} =auth.currentUser;
    await addDoc(collection(db,'messages'),{
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput("");
    scroll.current.scrollIntoView({ behavior: 'smooth' })
      
    

};

    return ( 
        <form onSubmit= {sendMessage} className='formm'> 
            <input value={input} onChange={(e) => setInput(e.target.value)} type='text' className='text' placeholder='Message' /> 
            <button className='send-btn' type='submit'> Send</button>
        </form>
    );
};

export default Sendmessage;