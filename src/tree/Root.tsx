import type { Component } from 'solid-js'
import { Show, createEffect, createSignal } from 'solid-js'
import { Route, Router, Routes, useNavigate, useParams, A, Outlet } from '@solidjs/router'

import { Page } from '~/lib/router'


const Layout: Component = () => {
  const navigate = useNavigate()
  return (
    <div >
      <header>
        {/* <select onChange={(e) => { navigate(`/${e.target.value}`) }}>
          <option value="pg1">Page 1</option>
          <option value="pg2">Page 2</option>
          <option value="pg3">Page 3</option>
        </select> */}
        <A href='/pg1'>Page 1</A>
        <A href='/pg2'>Page 2</A>
        <A href='/pg3'>Page 3</A>
      </header>

      <Outlet />
    </div>
  )
}

const Pg: Component = () => {
  const { page } = useParams()

  return (
    <div>
      Hello from {page}
    </div>
  )
}

const Main: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Layout} >
          <Route path=":page" component={Pg} />
        </Route>
      </Routes>
    </Router>
  )
}

export default Main
