import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">
          <span className="header-icon">🚗</span>
          Happy Ride
        </h1>
        <p className="header-subtitle">Discover your perfect ride</p>
      </div>
    </header>
  )
}

export default Header
