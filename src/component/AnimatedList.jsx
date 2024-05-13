import React from 'react'

const AnimatedList = ({open}) => {
  return (
      <div className={`sidebar ${open?'open':""}`}>
          <a href="#" className='navItems'>Home</a>
          <a href="#" className='navItems'>About</a>
          <a href="#" className='navItems'>Resume</a>
          <a href="#" className='navItems'>Projects</a>
          <a href="#" className='navItems'>Contact</a>
    </div>
  )
}

export default AnimatedList