import Link from "next/link"; 
import styles from "./WeatherCard.module.css"; 



const Header = () => (
    <div className = {styles.header}> 
    <header>
        <nav>
            <Link href="/Tokyo">Tokyo </Link>
            <Link href="/Boston">Boston</Link>
            <Link href="/Paris">Paris </Link>
            <Link href="/Chicago">Chicago </Link>
    
        </nav>
    </header>

    </div>

); 


export default Header; 