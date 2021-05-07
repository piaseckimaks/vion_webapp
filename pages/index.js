import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/index.module.css'
import NoLayout from '../layouts/_NoLayout'

export default function index() {
const [error, setError] = React.useState('');

  function handleSignIn ()
  {
    console.log('clicked')
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;
    fetch(`/api/sign_in?user=${user}&pass=${pass}`,{method: 'POST'})
      .then(res=>res.json())
      .then(res=> res.user > 0 ? window.location.href = '/home' : setError('Username or password not correct!'));
    
    setTimeout(setError(''),1000)
  }
  return (
    <div className={styles.container} >

      <main className={styles.main}>
        <h1 className="display-1 my-5 text-primary">
          Welcome to FSEs tools!
        </h1>
      <div className="text-uppercase">
        <form className="row g-3" noValidate>
         <div className="form-floating mb-3">
            <input type="text" id="user" className="text-primary form-control bg-dark border border-dark" placeholder="username" />
            <label htmlFor="floatingOne" className="text-primary">username</label>
         </div>
         <div className="form-floating mb-3">
            <input type="password" id="pass" className=" text-primary form-control bg-dark border border-dark" placeholder="password" />
            <label htmlFor="floatingTwo" className="text-primary">password</label>
         </div>
        </form>
        <p className="text-warning" >{error}</p>
        <button onClick={handleSignIn} className="w-100 text-uppercase btn btn-dark text-primary">login</button>
        </div>
      </main>

      <footer className={styles.footer}>
          <span className="text-primary">Powered by</span>{' '}
          <img src="/vion_logo.png" alt="Vion Logo" className={styles.logo} />
      </footer>

    </div>
  )
}

index.layout = NoLayout;