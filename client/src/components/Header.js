import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const Header = () =>
  <header>
    <div className="row">
      <div className="col-xs">
        <Link to="/" >
          Home
        </Link>
      </div>
    </div>
  </header>

export default withRouter(Header)
