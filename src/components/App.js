import React, { useState } from 'react';
import hogs from '../porkers_data';
import Nav from './Nav';
import HogList from './HogList';
import FilterAndSort from './FilterAndSort';
import AddHogForm from './AddHogForm';

function App() {
  const [hogData, setHogData] = useState(hogs);
  const [isGreasedFilter, setIsGreasedFilter] = useState(false);
  const [sortOption, setSortOption] = useState(null);
  const [hiddenHogs, setHiddenHogs] = useState([]);

  const addNewHog = (newHog) => setHogData([...hogData, newHog]);

  const hideHog = (hogName) => setHiddenHogs([...hiddenHogs, hogName]);

  const displayedHogs = hogData
    .filter(hog => !hiddenHogs.includes(hog.name) && (!isGreasedFilter || hog.greased))
    .sort((a, b) => {
      if (sortOption === 'name') return a.name.localeCompare(b.name);
      if (sortOption === 'weight') return a.weight - b.weight;
      return 0;
    });

  return (
    <div className="App">
      <Nav />
      <FilterAndSort 
        setIsGreasedFilter={setIsGreasedFilter} 
        setSortOption={setSortOption} 
      />
      <AddHogForm addNewHog={addNewHog} />
      <HogList hogs={displayedHogs} hideHog={hideHog} />
    </div>
  );
}

export default App;

