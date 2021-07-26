import useUser from '../util/useUser'
import fetchJson from '../util/fetchJson'
import styles from '../styles/index.module.css'
import { SigninForm, Footer } from '../layouts/components'
import { Spinner } from 'react-bootstrap'

export default function index({ showInfoToast }) {
  const { user, mutateUser } = useUser({redirectTo: '/home', redirectIfFound: true})
  
  async function handleSubmit (e)
  {
    e.preventDefault()
    const body = { username: e.currentTarget.username.value, password: e.currentTarget.password.value }

console.log(body)
console.log(JSON.stringify(body))

    try
    {
      const res = await mutateUser( fetchJson( '/api/auth/signin',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
          })
      )

      console.log(res)
      if(!res.isLoggedIn) showInfoToast({level: 1, message: 'Username or password not correct!'})
    }
    catch(err) { console.log(err) }
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
