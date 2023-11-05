const IP = '172.25.182.136';
const PORT = 50541;
const PLAYER_INITIALS = "PVT";
const INPUT_MAP = {
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right',
  j: "Say: I'm a hungry boy",
  k: "Say: i luv u :3",
  l: "Say: tastes great",
};

// Store inverted input map to prevent snake stoppages
const INPUT_MAP_INVERT = {
  w: 's',
  a: 'd',
  s: 'w',
  d: 'a'
};


module.exports = {
  IP,
  PORT,
  PLAYER_INITIALS,
  INPUT_MAP,
  INPUT_MAP_INVERT
};