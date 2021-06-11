import { useState, useEffect } from 'react'
import useUser from '../util/useUser'
import fetchJson from '../util/fetchJson'
import styles from '../styles/index.module.css'
import { SigninForm, Footer } from '../layouts/components'
import { Spinner } from 'react-bootstrap'

export default function index({ showDialogToast, showInfoToast }) {
  const { user, mutateUser } = useUser({redirectTo: '/home', redirectIfFound: true})
  //error with three levels 0-succes, 1-warning, 2-danger
  const [error, setError] = useState({message: '', level: 0});
  const [toast, setToast] = useState();
  
  async function handleSubmit (e)
  {
    e.preventDefault()

    const body = { username: e.currentTarget.username.value, password: e.currentTarget.password.value }

    try
    {
      const res = await mutateUser( fetchJson( '/api/auth/signin',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          })
      )

      if(!res.isLoggedIn) showInfoToast({level: 1, message: 'Username or password not correct!'})
    }
    catch(err)
    {
      console.log(err)
      Router.push('/500');
    }
  }

  if(!user?.isLoggedIn) return (
    <div className={styles.container} >
      <SigninForm handleSubmit={handleSubmit} />
      <Footer />
    </div>
  )

  return (
    <div className="bg-black vh-100 vw-100">
      <div className="position-absolute top-50 start-50 translate-middle" >
        <Spinner animation="border" role="status" />
      </div>
    </div>
  )

}
