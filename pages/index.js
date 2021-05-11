import { useState } from 'react'
import useUser from '../util/useUser'
import fetchJson from '../util/fetchJson'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/index.module.css'
import NoLayout from '../layouts/_NoLayout'

export default function index() {
  const { mutateUser } = useUser({redirectTo: '/home', redirectIfFound: true})
  const [error, setError] = useState('');

  async function handleSubmit (e)
  {
    e.preventDefault()

    const body =
    {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value
    }

    try
    {
      await mutateUser(
        fetchJson(
          '/api/signin',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          })
      )
    }
    catch(err)
    {
      console.error('An unexpected error occured: ', err)
      setError(err.data)
    }

    setTimeout(setError(''),1000)
  }
  return (
    <div className={styles.container} >

      <main className={styles.main}>
        <h1 className="display-1 my-5 text-primary">
          Welcome to FSEs tools!
        </h1>
      <div className="text-uppercase">
        <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
         <div className="form-floating mb-3">
            <input type="text" name="username" className="text-primary form-control bg-dark border border-dark" placeholder="username" />
            <label htmlFor="floatingOne" className="text-primary">username</label>
         </div>
         <div className="form-floating mb-3">
            <input type="password" name="password" className=" text-primary form-control bg-dark border border-dark" placeholder="password" />
            <label htmlFor="floatingTwo" className="text-primary">password</label>
         </div>
         <button type="submit" className="w-100 text-uppercase btn btn-dark text-primary">login</button>
        </form>
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