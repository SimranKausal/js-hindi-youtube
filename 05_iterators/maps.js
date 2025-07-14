 let map =  new Map();
 map.set("in","india")
 map.set("USA","united states of America")
 map.set('fr','France')

 console.log(map);
  // maps are just like objects but they do not contain repeated values , they always conatin unique values and they remember the order in which thw data was entered into them

for (const key of map) {
    console.log(key);
}