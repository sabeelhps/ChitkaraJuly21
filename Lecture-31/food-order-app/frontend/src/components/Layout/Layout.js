import React,{Fragment} from 'react'
import MainNavigation from './MainNavigation'

const Layout = (props) => {
    return (
        <Fragment>
            <header>
                <MainNavigation />
            </header>
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout
