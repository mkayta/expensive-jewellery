function mostExpensive(jewelry) {
    let mostExpensiveItem = '';
    let highestPrice = 0
    for (let item in jewelry) {
        if (jewelry[item] > highestPrice) {
            highestPrice = jewelry[item];
            mostExpensiveItem = [item];
        }
    }
    
     return  `The most expensive one is the ${mostExpensiveItem}`;
}

let mh= mostExpensive({
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650
}); 
console.log(mh)
console.log(mostExpensive({
  "Silver Bracelet": 280,
  "Gemstone Earrings": 180,
  "Diamond Ring": 3500
})); 

