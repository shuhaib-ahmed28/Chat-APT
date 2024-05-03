import React from 'react';
import {auth} from '../firebase'

const LogOut = () => {
    const signOut =() => {
        signOut(auth)
    }
    return (
        <div className="btnwrapper">
        <button className='signout-btn' onClick={() => auth.signOut()}>
            SIGN OUT
        </button>
        </div>
    );
};

export default LogOut;