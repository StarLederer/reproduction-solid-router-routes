import type { Component } from 'solid-js'
import { Route, Router, Routes, useParams, A, Outlet } from '@solidjs/router'

const Layout: Component = () => (
  <>
    <nav>
      <A href='/pg1'>Page 1</A>
      <A href='/pg2'>Page 2</A>
      <A href='/pg3'>Page 3</A>
    </nav>

    <main>
      <Outlet />
    </main>
  </>
)


const Page: Component = () => {
  const p = useParams()

  return (
    <article>
      <h1>{p.page}</h1>
      Hello from {p.page}
    </article>
  )
}

const Placeholder: Component = () => (
  <article>
    Please navigate somewhere using the links above.
  </article>
)

const Main: Component = () => (
  <Router>
    <Routes>
      <Route path="" component={Layout} >
        <Route path="*" component={Placeholder} />
        <Route path=":page" component={Page} />
      </Route>
    </Routes>
  </Router>
)

export default Main
