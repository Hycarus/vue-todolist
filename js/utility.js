function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
function getIndex(id, array){
    return array.findIndex((el) => el.id === id);
}