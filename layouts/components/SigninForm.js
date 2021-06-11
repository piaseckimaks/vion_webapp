import React from 'react'
import styles from '../../styles/index.module.css'

export default function SigninForm({ handleSubmit }) {
    return (
        <div className={styles.main}>
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
        </div>
    )
}
