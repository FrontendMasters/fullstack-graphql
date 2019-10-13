import { Switch, Route } from 'react-router-dom'
import React, {Fragment} from 'react'
import Header from './Header'
import Pets from '../pages/Pets'

const App = () => (
  <Fragment>
    <Header />
    <div>
      <Switch>
        <Route exact path="/" component={Pets} />
      </Switch>
    </div>
  </Fragment>
)

export default App
