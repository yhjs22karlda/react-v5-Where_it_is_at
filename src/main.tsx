import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import {legacy_createStore as createStore} from "redux"
import {Provider} from "react-redux"
import App from './App'
import Events from './views/Events'
import Buy from './views/Buy'
import Tickets from './views/Tickets'
import reducer from './reducers/reducer'
import './index.scss'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },{
        path: "/events",
        element: <Events />
    },{
        path: "/buy",
        element: <Buy />
    },{
        path: "/tickets",
        element: <Tickets />
    }
])

const store = createStore(
    reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
)

