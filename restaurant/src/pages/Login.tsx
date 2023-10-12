import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); // to prevent form submission
    
    if (!username.trim()) {
      alert('請輸入使用者名稱');
      return;
    }
    if (!password.trim()) {
      alert('請輸入密碼');
      return;
    }
    // Add your actual login logic here...
  };

  return (
    <section className="vh-200 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card card-custom">
              <div className="card-body p-5 text-center">
                <form onSubmit={handleLogin}>
                  <div className="mb-md-5 mt-md-4 pb-5 font-size-lg">
                    <h2 className="fw-bold mb-2 text-uppercase">登入</h2>
                    <div className="form-outline form-white mb-4">
                      <input 
                        type="text" 
                        placeholder="呀娣" 
                        id="typeUsernameX" 
                        className="form-control form-control-lg" 
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                      />
                      <label className="form-label" htmlFor="typeUsernameX">使用者名稱</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input 
                        type="password" 
                        placeholder="8888" 
                        id="typePasswordX" 
                        className="form-control form-control-lg" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="typePasswordX">密碼</label>
                    </div>
                    <button className="btn btn-outline-light btn-lg px-5" type="submit">登入</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
