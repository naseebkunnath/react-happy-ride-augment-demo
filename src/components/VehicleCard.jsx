import './VehicleCard.css'

function VehicleCard({ vehicle }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="vehicle-card">
      <div className="vehicle-image-container">
        <img 
          src={vehicle.image} 
          alt={vehicle.name}
          className="vehicle-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300/f0f0f0/999999?text=Vehicle+Image'
          }}
        />
        <div className="vehicle-type-badge">{vehicle.type}</div>
      </div>
      
      <div className="vehicle-content">
        <div className="vehicle-header">
          <h3 className="vehicle-name">{vehicle.name}</h3>
          <span className="vehicle-year">{vehicle.year}</span>
        </div>
        
        <div className="vehicle-price">
          {formatPrice(vehicle.price)}
        </div>
        
        <div className="vehicle-features">
          {vehicle.features.map((feature, index) => (
            <span key={index} className="feature-tag">
              {feature}
            </span>
          ))}
        </div>
        
        <div className="vehicle-specs">
            <div className="spec-item">
              <span className="spec-label">Engine:</span>
              <span className="spec-value">{vehicle.spec.engine}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Mileage:</span>
              <span className="spec-value">{vehicle.spec.mileage}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Fuel Type:</span>
              <span className="spec-value">{vehicle.spec.fuelType}</span>
            </div>
        </div>
        
        <button className="view-details-btn">
          View Details
        </button>
      </div>
    </div>
  )
}

export default VehicleCard
