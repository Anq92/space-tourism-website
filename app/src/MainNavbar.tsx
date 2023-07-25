import { NavLink } from 'react-router-dom';
import './MainNavbar.sass'
function MainNavbar() {
    return (
            <div className = 'links-container'><NavLink 
                    to='/'   
                    className={({ isActive, isPending }) => 
                    isPending ? 'pending' : isActive ? 'active' : ''}>
                    00 home
                </NavLink>
                <NavLink 
                    to='/destinations'   
                    className={({ isActive, isPending }) => 
                    isPending ? 'pending' : isActive ? 'active' : ''}>
                    01 destination
                </NavLink>
                <NavLink 
                    to='/crew'   
                    className={({ isActive, isPending }) => 
                    isPending ? 'pending' : isActive ? 'active' : ''}>
                    02 crew
                </NavLink>
                <NavLink 
                    to='/technology'   
                    className={({ isActive, isPending }) => 
                    isPending ? 'pending' : isActive ? 'active' : ''}>
                    03 technology
                </NavLink>
            </div>
    )
}

export default MainNavbar