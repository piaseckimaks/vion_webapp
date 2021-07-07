//import 'popper.js'
import '../styles/globals.css'
import '../styles/custom_bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useUser } from '../util/'
import { DialogToast, InfoToast } from '../layouts/components'


export default function MyApp({ Component, pageProps }) {
  const { user } = useUser()
  //this states allow me to manage Toasts (showing and hiding)
  const [dialogToast, setDialogToast] = useState({})
  const [dialogMsg, setDialogMsg] = useState('')
  const [infoToast, setInfoToast] = useState({})
  const [infoData, setInfoData] = useState({level: 0, message: ''})

  useEffect(() => 
  {
    let toastElList = [].slice.call(document.querySelectorAll('.toast'))
    let toastList = toastElList.map(function (toastEl) { return new bootstrap.Toast(toastEl) })  
    const dialog = toastList.find(el=> el._element.id === 'dialog')
    const info = toastList.find(el=> el._element.id === 'info')
    
    //this is needed for dialog toast to appear until user input
    if( dialog?._config ) dialog._config.autohide = false

    console.log(dialog)
    setDialogToast(dialog)
    setInfoToast(info)

  }, [])

  function showDialogToast(msg = '') 
  { 
    setDialogMsg(msg)
    document.getElementById('dialog-box').classList.remove('d-none')
    dialogToast.show() 
  }
  function showInfoToast(data = {}) { setInfoData(data); infoToast.show() }
  function hideDialogToast(e) 
  { 
    dialogToast.hide()
    document.getElementById('dialog-box').classList.add('d-none')
    return e.currentTarget.id
  }
  

  pageProps.showInfoToast = showInfoToast
  pageProps.showDialogToast = showDialogToast
  return (
    <div >
      <Head>
        <title>ICT</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap" rel="stylesheet"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossOrigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
      <DialogToast msg={dialogMsg} hideDialogToast={hideDialogToast}/>
      <InfoToast data={infoData}/>
    </div>
    )
}
