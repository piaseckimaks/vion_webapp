import { useState, useEffect } from 'react'
import useUser from '../util/useUser'
import fetchJson from '../util/fetchJson'
import Router from 'next/router'
import styles from '../styles/index.module.css'
import { Toast } from '../layouts/components'
import { Spinner } from 'react-bootstrap'

export default function index() {
  const { user, mutateUser } = useUser({redirectTo: '/home', redirectIfFound: true})
  //error with three levels 0-succes, 1-warning, 2-danger
  const [error, setError] = useState({message: '', level: 0});
  const [toast, setToast] = useState();

  useEffect(() => 
  {
    let toastElList = [].slice.call(document.querySelectorAll('.toast'))
    let toastList = toastElList.map(function (toastEl) { return new bootstrap.Toast(toastEl) })  
    
    setToast(toastList[0])
  }, [])

  
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
      const res = await mutateUser(
        fetchJson(
          '/api/auth/signin',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          })
      )
      console.log(res)
      setError({message: 'Username or password not correct!', level: 1})
      if(res.error) toast.show()
    }
    catch(err)
    {
      Router.push('/500');
    }
  }

  if(!user?.isLoggedIn) return (

    <div className={styles.container} >
      
      <main className={styles.main}>
        <h1 className="display-1 my-5 text-primary">
          Welcome to FSEs tools!
        </h1>
      <div className="text-uppercase">
        <form className="row g-3 needs-validation" onSubmit={handleSubmit} noValidate>
         <div className="form-floating mb-3">
            <input type="text" name="username" className="text-white form-control bg-dark border border-dark" placeholder="username" />
            <label htmlFor="floatingOne" className="text-white">username</label>
         </div>
         <div className="form-floating mb-3">
            <input type="password" name="password" className="text-white form-control bg-dark border border-dark" placeholder="password" />
            <label htmlFor="floatingTwo" className="text-white">password</label>
         </div>
         <button type="submit" className="w-100 text-uppercase btn btn-primary">sign in</button>
        </form>
        </div>
      </main>

      <Toast error={error}/>

      <footer className={styles.footer}>
          <span className="text-white">Powered by</span>{' '}
          <img src="/vion_logo.png" alt="Vion Logo" className="h-50" />
      </footer>
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
