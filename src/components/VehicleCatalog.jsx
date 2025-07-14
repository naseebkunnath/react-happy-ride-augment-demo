import { useState } from 'react'
import './VehicleCatalog.css'
import VehicleCard from './VehicleCard'
import FilterBar from './FilterBar'

const vehiclesData = [
  {
    id: 1,
    name: "Suzuki Alto 800",
    type: "Hatchback",
    year: 2015,
    price: 285000,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    features: ["Fuel Efficient", "Compact", "Easy Parking"],
    specs: {
      engine: "0.8L Petrol",
      mileage: "22.05 kmpl",
      fuelType: "Petrol"
    }
  },
  {
    id: 2,
    name: "Toyota Etios Liva",
    type: "Hatchback",
    year: 2016,
    price: 485000,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop",
    features: ["Spacious Interior", "Reliable", "Good Build Quality"],
    specs: {
      engine: "1.2L Petrol",
      mileage: "17.5 kmpl",
      fuelType: "Petrol"
    }
  },
  {
    id: 3,
    name: "Maruti Suzuki WagonR",
    type: "Hatchback",
    year: 2014,
    price: 325000,
    image: "https://images.unsplash.com/photo-1494976688153-c91c4d0b4c8b?w=400&h=300&fit=crop",
    features: ["Tall Boy Design", "Roomy", "Low Maintenance"],
    specs: {
      engine: "1.0L Petrol",
      mileage: "20.5 kmpl",
      fuelType: "Petrol"
    }
  },
  {
    id: 4,
    name: "Hyundai Santro",
    type: "Hatchback",
    year: 2013,
    price: 245000,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
    features: ["Comfortable Ride", "Good Features", "City Car"],
    specs: {
      engine: "1.1L Petrol",
      mileage: "19.1 kmpl",
      fuelType: "Petrol"
    }
  },
  {
    id: 5,
    name: "Tata Indica",
    type: "Hatchback",
    year: 2012,
    price: 185000,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
    features: ["Affordable", "Diesel Option", "Practical"],
    specs: {
      engine: "1.4L Diesel",
      mileage: "25.0 kmpl",
      fuelType: "Diesel"
    }
  },
  {
    id: 6,
    name: "Maruti Suzuki Swift",
    type: "Hatchback",
    year: 2015,
    price: 425000,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop",
    features: ["Sporty Design", "Good Performance", "Popular"],
    specs: {
      engine: "1.2L Petrol",
      mileage: "22.0 kmpl",
      fuelType: "Petrol"
    }
  },
  {
    id: 7,
    name: "Honda City",
    type: "Sedan",
    year: 2014,
    price: 565000,
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=300&fit=crop",
    features: ["Premium Sedan", "Comfortable", "Refined Engine"],
    specs: {
      engine: "1.5L Petrol",
      mileage: "17.8 kmpl",
      fuelType: "Petrol"
    }
  },
  {
    id: 8,
    name: "Maruti Suzuki Dzire",
    type: "Sedan",
    year: 2016,
    price: 485000,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop",
    features: ["Compact Sedan", "Fuel Efficient", "Value for Money"],
    specs: {
      engine: "1.2L Petrol",
      mileage: "22.0 kmpl",
      fuelType: "Petrol"
    }
  },
  {
    id: 9,
    name: "Hyundai i10",
    type: "Hatchback",
    year: 2013,
    price: 285000,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
    features: ["Stylish Design", "Good Features", "Reliable"],
    specs: {
      engine: "1.1L Petrol",
      mileage: "19.8 kmpl",
      fuelType: "Petrol"
    }
  },
  {
    id: 10,
    name: "Chevrolet Beat",
    type: "Hatchback",
    year: 2014,
    price: 265000,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
    features: ["Youthful Design", "Good Music System", "Peppy Engine"],
    specs: {
      engine: "1.2L Petrol",
      mileage: "18.6 kmpl",
      fuelType: "Petrol"
    }
  },
  {
    id: 11,
    name: "Ford Figo",
    type: "Hatchback",
    year: 2015,
    price: 385000,
    image: "https://images.unsplash.com/photo-1494976688153-c91c4d0b4c8b?w=400&h=300&fit=crop",
    features: ["European Design", "Good Handling", "Safety Features"],
    specs: {
      engine: "1.2L Petrol",
      mileage: "18.16 kmpl",
      fuelType: "Petrol"
    }
  },
  {
    id: 12,
    name: "Nissan Micra",
    type: "Hatchback",
    year: 2013,
    price: 325000,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    features: ["Unique Design", "Spacious", "CVT Option"],
    specs: {
      engine: "1.2L Petrol",
      mileage: "19.34 kmpl",
      fuelType: "Petrol"
    }
  },
  {
    id: 13,
    name: "Maruti Suzuki Celerio",
    type: "Hatchback",
    year: 2016,
    price: 365000,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
    features: ["AMT Gearbox", "Fuel Efficient", "Compact"],
    specs: {
      engine: "1.0L Petrol",
      mileage: "23.1 kmpl",
      fuelType: "Petrol"
    }
  },
  {
    id: 14,
    name: "Hyundai Grand i10",
    type: "Hatchback",
    year: 2015,
    price: 425000,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
    features: ["Premium Features", "Good Build", "Comfortable"],
    specs: {
      engine: "1.2L Petrol",
      mileage: "18.9 kmpl",
      fuelType: "Petrol"
    }
  },
  {
    id: 15,
    name: "Tata Zest",
    type: "Sedan",
    year: 2015,
    price: 445000,
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=300&fit=crop",
    features: ["Compact Sedan", "Good Features", "Diesel Engine"],
    specs: {
      engine: "1.3L Diesel",
      mileage: "23.0 kmpl",
      fuelType: "Diesel"
    }
  },
  {
    id: 16,
    name: "Volkswagen Polo",
    type: "Hatchback",
    year: 2014,
    price: 485000,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=300&fit=crop",
    features: ["German Engineering", "Solid Build", "Premium Feel"],
    specs: {
      engine: "1.2L Petrol",
      mileage: "17.21 kmpl",
      fuelType: "Petrol"
    }
  },
  {
    id: 17,
    name: "Skoda Fabia",
    type: "Hatchback",
    year: 2013,
    price: 385000,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=300&fit=crop",
    features: ["European Style", "Spacious", "Good Features"],
    specs: {
      engine: "1.2L Petrol",
      mileage: "16.95 kmpl",
      fuelType: "Petrol"
    }
  },
  {
    id: 18,
    name: "Mahindra Logan",
    type: "Sedan",
    year: 2012,
    price: 285000,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop",
    features: ["Spacious Sedan", "Affordable", "Practical"],
    specs: {
      engine: "1.4L Petrol",
      mileage: "16.2 kmpl",
      fuelType: "Petrol"
    }
  },
  {
    id: 19,
    name: "Chevrolet Sail",
    type: "Sedan",
    year: 2014,
    price: 345000,
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=300&fit=crop",
    features: ["Spacious Interior", "Good Features", "Value Sedan"],
    specs: {
      engine: "1.2L Petrol",
      mileage: "18.2 kmpl",
      fuelType: "Petrol"
    }
  },
  {
    id: 20,
    name: "Renault Pulse",
    type: "Hatchback",
    year: 2013,
    price: 295000,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
    features: ["French Design", "Good Interiors", "Reliable"],
    specs: {
      engine: "1.2L Petrol",
      mileage: "18.5 kmpl",
      fuelType: "Petrol"
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
