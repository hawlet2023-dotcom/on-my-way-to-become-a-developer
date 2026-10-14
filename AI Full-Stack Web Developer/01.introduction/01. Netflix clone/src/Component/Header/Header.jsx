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
      <img className={styles.logo} src={logo} alt=""/>

             {/* navigation link */}
<nav className={styles.nav}>
<Link  className={styles.navLink} href="">Home</Link>
<Link  className={styles.navLink} href="">Tv Shows</Link>
<Link  className={styles.navLink} href="">Movies</Link>
<Link  className={styles.navLink} href="">New & Popular</Link>
<Link  className={styles.navLink} href="">My List</Link>
<Link  className={styles.navLink} href="">Browse by Language</Link>
</nav>

             {/* right side section */}
  <div className={styles.rightSection}>
        {/* search*/}
<div className={styles.searchSection}>
  <button className={styles.searchButton}>
    <Search size={20}/>
  </button>
</div>

        {/* notification*/}
    <button className={styles.iconButton}>
      {/*notification icon */}
      <Bell size={20}/>
      <span className={styles.notificationBadge}>4</span>
    </button>


        {/* profile */}   
<div className={styles.profileContainer}>
   <button className={styles.profileButton}>
    {/*user icon*/}
    <div className={styles.profileAvatar}>
<User size={20}/>
    </div >
     <ChevronDown size={20}/>
    {/* dropdown icon */}
   </button>
</div>
  </div>
    </div>
    </header>
    
  )
}

export default Header
