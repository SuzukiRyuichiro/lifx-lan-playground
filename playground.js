// Create a LifxLan object
const Lifx  = require('node-lifx-lan');

// Turn on all LIFX bulbs in the local network
Lifx.turnOnBroadcast(
  {color: {css: 'yellow'}}
  ).then(() => {
  console.log('Done!');
}).catch((error) => {
  console.error(error);
});
