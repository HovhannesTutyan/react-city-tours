import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useSearchParams, useNavigate } from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';

export default function SigninScreen(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    console.log(searchParams);
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;


    useEffect(() => {
        if(userInfo){
            navigate(searchParams)
        }
    },[userInfo])

    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1> Sign In </h1>
                </div>
                { loading && <LoadingBox> </LoadingBox>}
                {error && <MessageBox variant="danger">{error} </MessageBox>}
                <div>
                    <label htmlFor="email"> Email address </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password"> Password </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit"> Sign In </button>
                </div>
                <div>
                    <label />
                    <div>
                        New Customer? {' '}
                        <Link to="/register">Create your account </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}