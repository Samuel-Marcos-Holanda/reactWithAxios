import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {path: '/',element : <App/>},
  {path: '/test',element : 
  <div>
    <Link to= "/">
      <button type="button">
        Voltar
      </button>
    </Link>
  </div>}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
