const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const beigeColors = [
    '#faf9f6', '#FAF9F6',
    '#faf9f8', '#FAF9F8',
    '#f8f6f0', '#F8F6F0',
    '#f4f0ec', '#F4F0EC',
    '#f6f7f9', '#F6F7F9',
    '#f2e2c4', '#F2E2C4',
    '#f4fdf7', '#F4FDF7'
];

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    beigeColors.forEach(color => {
        const regex = new RegExp(color, 'g');
        content = content.replace(regex, '#ffffff');
    });

    // Also replace tailwind classes
    content = content.replace(/bg-orange-50/g, 'bg-white');
    content = content.replace(/bg-stone-50/g, 'bg-white');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
}

function processDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.css') || fullPath.endsWith('.jsx')) {
            replaceInFile(fullPath);
        }
    });
}

processDirectory(directoryPath);
console.log('Done replacing beige colors.');
