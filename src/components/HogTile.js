import React, { useState } from 'react';

function HogTile({ hog, hideHog }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="ui eight wide column">
      <div className="ui card">
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <h3>{hog.name}</h3>
          <button onClick={() => hideHog(hog.name)} className="ui button">Hide</button>
          <button onClick={toggleDetails} className="ui button">
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
          {showDetails && (
            <div className="extra content">
              <p><strong>Specialty:</strong> {hog.specialty}</p>
              <p><strong>Weight:</strong> {hog.weight} kg</p>
              <p><strong>Greased:</strong> {hog.greased ? 'Yes' : 'No'}</p>
              <p><strong>Highest Medal:</strong> {hog['highest medal achieved']}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HogTile;

