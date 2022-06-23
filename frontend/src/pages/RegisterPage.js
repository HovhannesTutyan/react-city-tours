import React, {SyntheticEvent, useState} from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();
        const response = fetch('http://127.0.0.1:8000/api/register/', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        });
        setRedirect(true);
    }

    if (redirect){
        return navigate("/login");
        }

    return (
        <section className="h-100 gradient-form" style={{backgroundColor: "#eee"}}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-xl-10">
                <div className="card rounded-3 text-black">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="card-body p-md-5 mx-md-4">

                        <div className="text-center">
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" style={{width: "185px"}} alt="logo"/>
                          <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                        </div>

                        <form onSubmit={submit}>
                          <p>Register Now!</p>

                          <div className="form-outline mb-4">
                            <input className="form-control" onChange={e=>setName(e.target.value)}/>
                            <label className="form-label">Username</label>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="email" className="form-control"
                              placeholder="Phone number or email address" onChange={e=>setEmail(e.target.value)} />
                            <label className="form-label">Email Address</label>
                          </div>

                          <div className="form-outline mb-4">
                            <input type="password" id="form2Example22" className="form-control" onChange={e=>setPassword(e.target.value)}/>
                            <label className="form-label">Password</label>
                          </div>

                          <div className="text-center pt-1 mb-5 pb-1">
                            <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Register</button>
                          </div>
                        </form>

                      </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                      <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 className="mb-4">We are more than just a company</h4>
                        <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default RegisterPage