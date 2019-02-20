/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  preferences.unshift(0);
  for (let i = 1;i < preferences.length; i++){
    let a = preferences[i];
    let b = preferences[a];
    let c = preferences[b];
      if(c == i){
        count = count + 1;
      }
  }
  return Math.floor(count/3);
};
