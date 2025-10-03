import React, { Children } from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
    <main className='max-w-screen' >
      <Header/>
      <div>
        {children}
        </div>
    </main>
    </>
  )
}

export default Layout
