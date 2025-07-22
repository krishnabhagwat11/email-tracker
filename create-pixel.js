const fs = require('fs');

// This is a standard 1x1 transparent GIF file in hex format
const pixelBuffer = Buffer.from('47494638396101000100800000000000ffffff21f90401000000002c00000000010001000002024401003b', 'hex');

fs.writeFileSync('pixel.gif', pixelBuffer);
console.log('Transparent 1x1 pixel created as pixel.gif'); 