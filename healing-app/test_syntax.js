const fs = require('fs');
const html = fs.readFileSync('d:/GitHub 0921/healing-app/index.html', 'utf8');

const regex = /if \(typeof Workspace !== 'undefined'\) \{([\s\S]*?)var origOpenCover/m;
const match = html.match(regex);
if (match) {
    console.log('Workspace hook found and looks well formed.');
} else {
    console.log('Workspace hook MISSING or MALFORMED');
}