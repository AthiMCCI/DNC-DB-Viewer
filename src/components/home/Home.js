
import React, {useState} from 'react'

// import Sidenav from '../sidenav/SideNav'
// import PageContent from '../pagecontent'

// import AppHeader from '../header/Header'
// import AppFooter from '../footer/Footer'
import { BrowserRouter } from "react-router-dom";
import PageContent from './../pagecontent/index';
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'




export default function Home({setToken}) {
    
    const [cpage, setCpage] = useState('Dashboard')
    
    return (
    <div >
        <div className="hcontainer-header">
            {/* <AppHeader/> */}
        </div>
        <div className="hcontainer-body">
            <BrowserRouter>
            <div className="hcontainer-sidebar">
                {/* <Sidenav setToken={setToken}/> */}
            </div>
            <div className="hcontainer-dashboard">
                <PageContent/>
            </div>
            </BrowserRouter>
        </div>
        <div className="hcontainer-footer">
            {/* <AppFooter/> */}
        </div>
    </div>
)
}