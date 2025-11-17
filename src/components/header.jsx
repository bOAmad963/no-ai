import style from './header.module.css'
import {Link, useNavigate} from 'react-router-dom'
import { Button } from '@mui/material'

function Header(){

  const navigate = useNavigate()

  function nav(address){
    setTimeout(() => navigate(address),200)
  }

  return(
    <>
    <div className={style.container}>
      <h2>E-Game Store</h2>
      <div>
        <Button onClick={() => nav('/')}>Home</Button>
        <Button onClick={() => nav('/contact')}>Contact</Button>
        {!localStorage.getItem('loged') ? (
          <Button onClick={() => nav('/login')}>Login</Button>
        ) : (
          <Button onClick={() => nav('/profile')}>Profile</Button>
        )}
      </div>
    </div>

    <div className={style.sideBar}>
        
    </div>
    </>
  )
}

export default Header