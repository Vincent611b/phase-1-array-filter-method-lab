// Code your solution here
// Test data
const drivers = [
    'Bobby',
    'Sammy',
    'Sally',
    'Annette',
    'Sarah',
    'Bobby',
    'Sammy',
    'Annette',
    'Sally',
    'Sarah',
  ];
  
  const driverObjects = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Sarah', hometown: 'San Francisco' },
  ];
  
  // Test function for findMatching
  console.log(findMatching(drivers, 'Sa')); // Should return ['Sammy', 'Sally', 'Sarah', 'Sammy']
  
  // Test function for fuzzyMatch
  console.log(fuzzyMatch(drivers, 'sa')); // Should return ['Sammy', 'Sally', 'Sarah', 'Sammy']
  
  // Test function for matchName
  console.log(matchName(driverObjects, 'Sammy')); // Should return [{ name: 'Sammy', hometown: 'New York' }, { name: 'Sammy', hometown: 'New York' }]

  
  // Function to find matching drivers' names
function findMatching(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
  }
  
  // Function to find drivers whose names begin with the provided letters
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  // Function to match driver objects based on name
  function matchName(driverObjects, query) {
    return driverObjects.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }
  