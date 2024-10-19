import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const ReactRouter = () => {
  return (
    <div>

        <BrowserRouter>
            <Routes>
                <Route path='/' element={H1}/>
            </Routes>        
        </BrowserRouter>
      
    </div>
  )
}

export default ReactRouter
