import { useState } from 'react'
import './VehicleCatalog.css'
import VehicleCard from './VehicleCard'
import FilterBar from './FilterBar'

const vehiclesData = [
  {
    id: 1,
    name: "Tesla Model S",
    type: "Electric",
    year: 2024,
    price: 89990,
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=300&fit=crop",
    features: ["Autopilot", "Long Range", "Premium Interior"],
    specs: {
      range: "405 miles",
      acceleration: "0-60 mph in 3.1s",
      topSpeed: "200 mph"
    }
  },
  {
    id: 2,
    name: "BMW M3",
    type: "Sedan",
    year: 2024,
    price: 73900,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
    features: ["M Performance", "Sport Package", "Carbon Fiber"],
    specs: {
      engine: "3.0L Twin Turbo",
      acceleration: "0-60 mph in 4.1s",
      horsepower: "473 hp"
    }
  },
  {
    id: 3,
    name: "Porsche 911",
    type: "Sports Car",
    year: 2024,
    price: 106100,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop",
    features: ["Rear Engine", "Sport Chrono", "PASM"],
    specs: {
      engine: "3.0L Twin Turbo",
      acceleration: "0-60 mph in 3.5s",
      horsepower: "379 hp"
    }
  },
  {
    id: 4,
    name: "Range Rover Evoque",
    type: "SUV",
    year: 2024,
    price: 43300,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
    features: ["All Terrain", "Panoramic Roof", "Meridian Audio"],
    specs: {
      engine: "2.0L Turbo",
      acceleration: "0-60 mph in 7.0s",
      horsepower: "246 hp"
    }
  },
  {
    id: 5,
    name: "Audi A4",
    type: "Sedan",
    year: 2024,
    price: 39900,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
    features: ["Quattro AWD", "Virtual Cockpit", "Bang & Olufsen"],
    specs: {
      engine: "2.0L Turbo",
      acceleration: "0-60 mph in 5.6s",
      horsepower: "261 hp"
    }
  },
  {
    id: 6,
    name: "Ford Mustang GT",
    type: "Sports Car",
    year: 2024,
    price: 38630,
    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=400&h=300&fit=crop",
    features: ["V8 Engine", "Performance Package", "Recaro Seats"],
    specs: {
      engine: "5.0L V8",
      acceleration: "0-60 mph in 4.3s",
      horsepower: "450 hp"
    }
  }
]

function VehicleCatalog() {
  const [vehicles, setVehicles] = useState(vehiclesData)
  const [filteredVehicles, setFilteredVehicles] = useState(vehiclesData)
  const [selectedType, setSelectedType] = useState('All')
  const [sortBy, setSortBy] = useState('name')

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
