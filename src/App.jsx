import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { RoleContext } from './states/context'
import { Roles } from './utils/constants'
import './App.css'
import { Footer, Header, ProjectRoutes, Sidenav } from './core'

export default function App() {
    const [role, setRole] = useState(Roles.Admin)

    return (
        <RoleContext.Provider value={{ role, setRole }}>
            <Router>
                <Header />
                <div className="main-container w-full flex">
                    <Sidenav />
                    <main className="w-4/5" flex-grow>
                        <ProjectRoutes />
                    </main>
                </div>
                <Footer />
            </Router>
        </RoleContext.Provider>
    )
}
