import type { Component } from 'solid-js'
import { Route, Router, Routes, useParams, A, Outlet } from '@solidjs/router'
import { Transition } from 'solid-transition-group'

const Layout: Component = () => (
  <>
    <nav>
      <A href='/pg1'>Page 1</A>
      <A href='/pg2'>Page 2</A>
      <A href='/pg3'>Page 3</A>
    </nav>

    <main>
      <Transition
        mode="outin"
        onEnter={(el, done) => {
          const a = el.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 600
          });
          a.finished.then(done);
        }}
        onExit={(el, done) => {
          const a = el.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 600
          });
          a.finished.then(done);
        }}
      >
        <Outlet />
      </Transition>
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
