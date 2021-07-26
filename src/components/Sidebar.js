import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import { useStateValue } from '../StateProvider'

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <SidebarRow
                    src={user.photoURL}
                    title={user.displayName}
                    />

                <SidebarRow
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fsvg%2F20151019%2Ffriends_1191883.png&f=1&nofb=1"
                    title="Friends"
                    />

            </div>
            <div className="sidebar__bottom">
            </div>
        </div>
    )
}

export default Sidebar


