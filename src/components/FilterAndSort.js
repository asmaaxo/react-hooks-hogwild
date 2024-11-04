import React from 'react';

function FilterAndSort({ setIsGreasedFilter, setSortOption }) {
  return (
    <div className="filter-sort ui segment">
      <label>
        <input 
          type="checkbox" 
          onChange={(e) => setIsGreasedFilter(e.target.checked)} 
        />
        Greased Only
      </label>
      <label>
        Sort By:
        <select onChange={(e) => setSortOption(e.target.value)}>
          <option value="">Select</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
}

export default FilterAndSort;

