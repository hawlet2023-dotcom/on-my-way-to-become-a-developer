import React from 'react'; 
import logo from '../../assets/image/logo.png'
import {Link} from 'react-router-dom' 
import {Search,Bell,User,ChevronDown } from 'lucide-react'
import styles from './Header.module.css' 
function Header() {
  return (
    <header className={styles.header}>
    <div className={styles.container}>
            {/*logo*/}
      <img src={logo} alt="" />

             {/* navigation link */}
<nav>
<Link href="">Home</Link>
<Link href="">Tv Shows</Link>
<Link href="">Movies</Link>
<Link href="">New & Popular</Link>
<Link href="">My List</Link>
<Link href="">Browse by Language</Link>
</nav>

             {/* right side section */}
  <div>
        {/* search*/}
<div>
  <button>
    <Search/>
  </button>
</div>

        {/* notification*/}
    <button>
      {/*notification icon */}
      <Bell/>
      <span>4</span>
    </button>


        {/* profile */}   
<div>
   <button>
    {/*user icon*/}
    <div>
<User/>
    </div>
     <ChevronDown/>
    {/* dropdown icon */}
   </button>
</div>
  </div>
    </div>
    </header>
    
  )
}

export default Header
