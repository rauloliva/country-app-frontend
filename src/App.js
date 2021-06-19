import React, { Fragment, lazy, Suspense } from 'react'
import {Switch, Route} from 'react-router-dom'

import './assets/app.css'

import Loading from './components/Loading'
const Search = lazy(() => import('./components/Search'))
const Header = lazy(() => import('./components/Header'))
const InfoCard = lazy(() => import('./components/InfoCard'))
const Page404 = lazy(() => import('./components/404'))
const Main = lazy(() => import('./components/Main'))


const App = () => {
  return (
    <Fragment>
      <Suspense fallback={ <Loading/> }>
        <Header />
        
        <Switch>
          <Route path='/' exact>
              <p className='main-title'>Get information about the countries of the world!</p>
              <Search />
              <Main />
          </Route>
          <Route path='/search' exact>
            <Search />
          </Route>
          <Route path='/info'>
            <InfoCard />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Suspense>
    </Fragment>
  )
}

export default App
