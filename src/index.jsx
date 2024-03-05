import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './app'
import { RouteNames, routes } from './router/router'
import { store } from './store/store'

const root = ReactDOM.createRoot(
  document.querySelector('#root'),
)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {routes.map((route) => {
        return (
          <Route
            path={route.path.slice(1)}
            element={<route.element />}
            key={route.path}
          />
        )
      })}
      <Route path="*" element={<Navigate to={RouteNames.PAGE_NOT_EXIST} />} />
    </Route>,
  ),
)

root.render(
  <Provider store={store} children={undefined}>
    <RouterProvider router={router} />
  </Provider>,
)
