import React from 'react';
import { Session } from '../requests';

function SignIn(props) {
    const { onSignIn } = props

    function  handleSubmit(event){
        event.preventDefault()
        const {currentTarget} = event
        const formData = new FormData(currentTarget)
        const params = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        Session.create(params).then(data => {
            if(data.id){
                onSignIn()
                props.history.push('/auctions')
            }
        })
    }
    return (
        <main>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email * : </label>
                    <input type="email" name="email" id="email" />
                </div>
                <br/>
                <div>
                    <label htmlFor="password">password * : </label>
                    <input type="password" name="password" id="password" />
                </div>
                <br/>
                <input type="submit" value="Sign In" />
            </form>
        </main>
    )
}

export default SignIn