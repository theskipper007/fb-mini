import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import { Avatar} from '@material-ui/core'
import { useStateValue } from '../StateProvider'


function Header() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className = "header">
            <div className = "header__left">
               
            </div>
            <div className = "header__middle">
                <div className = "header__options header__options--active">
                        <h1>NEXUS</h1>
                    </div>
                </div>
            <div className = "header__right"> 
                <div className = "header__info">
                    <Avatar
                    src = {user.photoURL}
                    />
                    <h4>{user.displayName}</h4>
                </div>
            </div>
            
        </div>
    )
}

export default Header
