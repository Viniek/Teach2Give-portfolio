import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <ol>
    <Link to = "/">Works</Link>
    <Link to = "/Blog">Blog</Link>
    <Link to ="/Contact">Contact</Link>
      </ol>
    </header>
  )
}

export default Header