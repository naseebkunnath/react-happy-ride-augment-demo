import './FilterBar.css'

function FilterBar({ selectedType, sortBy, onFilter, onSort }) {
  const vehicleTypes = ['All', 'Electric', 'Sedan', 'Sports Car', 'SUV']
  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'price', label: 'Price' },
    { value: 'year', label: 'Year' }
  ]

  return (
    <div className="filter-bar">
      <div className="filter-section">
        <h3 className="filter-title">Filter by Type</h3>
        <div className="filter-buttons">
          {vehicleTypes.map(type => (
            <button
              key={type}
              className={`filter-btn ${selectedType === type ? 'active' : ''}`}
              onClick={() => onFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      
      <div className="sort-section">
        <h3 className="sort-title">Sort by</h3>
        <select 
          className="sort-select"
          value={sortBy}
          onChange={(e) => onSort(e.target.value)}
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FilterBar
