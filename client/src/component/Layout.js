import React from 'react'



const Layout = ({children}) => {
  return (

    //add here the navbar and footer component

    // each time we want to have a page with navbar and footer, 
    // we import the layout to that page 
    // and we make all code page inside layout componet
    //<Layout>
    // ...here is the code of the page
    //<Layout/>

    <div>
       {children}
    </div>
    
  )
}

export default Layout