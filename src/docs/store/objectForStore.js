let objectTemplate = {
  arrival: "Moscow (SVO)",
  destination: "New York City (JFK)",
  airline: "Pobeda",
  liked: false,
};

let returnObject = (function () {
  let objectArray = [];
  function updateObject() {
    for (let i = 0; i < 30; i++) {
      objectArray[i] = JSON.parse(JSON.stringify(objectTemplate));
      objectArray[i].time = `${Math.floor(Math.random() * 23)}:${Math.floor(
        Math.random() * 50 + 10
      )}`;
      objectArray[i].price = `${Math.floor(Math.random() * 50000) + 10000}`;
    }
  }
  return function () {
    updateObject();
    return objectArray;
  };
})();

export default returnObject;
