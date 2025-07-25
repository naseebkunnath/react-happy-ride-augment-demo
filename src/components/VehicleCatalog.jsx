import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './VehicleCatalog.css'
import VehicleCard from './VehicleCard'
import FilterBar from './FilterBar'
import { isJwtExpired } from '../utils/jwtUtils'

function VehicleCatalog() {
  const [vehicles, setVehicles] = useState([])
  const [error, setError] = useState('');
  const [filteredVehicles, setFilteredVehicles] = useState([])
  const [selectedType, setSelectedType] = useState('All')
  const [sortBy, setSortBy] = useState('name')

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('token');
      if(!token || isJwtExpired(token)) {
        setError('You must be logged in to view the catalog.');
        navigate('/login', { replace: true });
      }
      try {
        const response = await fetch('http://localhost:8080/api/vehicles', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // ✅ include token here
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }

        const data = await response.json();
        setVehicles(data);
        setFilteredVehicles(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);

  const handleFilter = (type) => {
    setSelectedType(type)
    if (type === 'All') {
      setFilteredVehicles(vehicles)
    } else {
      setFilteredVehicles(vehicles.filter(vehicle => vehicle.type === type))
    }
  }

  const handleSort = (sortOption) => {
    setSortBy(sortOption)
    const sorted = [...filteredVehicles].sort((a, b) => {
      if (sortOption === 'price') {
        return a.price - b.price
      } else if (sortOption === 'year') {
        return b.year - a.year
      } else {
        return a.name.localeCompare(b.name)
      }
    })
    setFilteredVehicles(sorted)
  }

  return (
    <main className="catalog">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="catalog-container">
        <FilterBar 
          selectedType={selectedType}
          sortBy={sortBy}
          onFilter={handleFilter}
          onSort={handleSort}
        />
        <div className="vehicles-grid">
          {filteredVehicles.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </main>
  )
}

export default VehicleCatalog
