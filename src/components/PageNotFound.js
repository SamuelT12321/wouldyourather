import React from 'react'

export default function PageNotFound ({location}) {
  return (
    <div className="row">
      <div className="col s8 offset-s2 center-align">
          <h5>Page Not Found ! No match for {location.pathname}</h5>
      </div>
    </div>
  )
} 