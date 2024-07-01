function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42; // Scuber's headquarters location
    return Math.abs(someValue - hqLocation);
  }
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // 1 block is 264 feet
  }
  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(start - destination);
    return blocks * 264; // 1 block is 264 feet
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot for distance between 400 and 2000 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare of $25 for distance over 2000 feet and under 2500 feet
    } else {
      return 'cannot travel that far'; // Distance over 2500 feet is not allowed
    }
  }
     
