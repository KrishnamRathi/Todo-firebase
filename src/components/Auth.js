import React, { useContext, } from 'react'
import { Typography, Button } from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'
import './Auth.css'
import { Context as TodoContext } from '../redux/TodoContext'
import  { auth, provider } from '../firebase'

function Auth() {
    const { login } = useContext(TodoContext);

    const signin = () =>{
        auth.signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            login(user);
        })
        .catch(err => alert(err.message));
    }
    // useEffect(() => {
        
    // }, [input])

    return (
        <div className="auth">
            <Typography variant="h2">
                Login using google
            </Typography>
            <div className="auth__button">
                <Button variant="contained" 
                    className="button_style"
                    onClick={signin}
                >
                    <ExitToApp />
                    <Typography className="button__text" >Login</Typography>  
                </Button>
            </div>
        </div>
    )
}

export default Auth
