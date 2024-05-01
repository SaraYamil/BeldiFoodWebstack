import React from 'react'

export default function Header() {
  return (
    <header>
    <a href="/" className="logo">Beldi Food</a>
    <nav className="navigation">
        <a href="/" className="home-link">Home</a>
        <a href="story" className="story-link">Story</a>
        <a href="menu"className="menu-link">Menu</a>
        <a href="update" className="updates-link">Our Updates</a>
    </nav>
        <a href="contact" className="booking-btn">Reservation</a>
</header>
  )
}
