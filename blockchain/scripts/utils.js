const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

module.exports.executeCommand = (command) => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            if (stderr) {
                reject(new Error(`Standard error: ${stderr}`));
                return;
            }
            const data = stdout.trim();
            resolve(data);
        });
    });
}

module.exports.sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports.readFileJson = (filePath) => {
    _filePath = path.join(__dirname, filePath);
    return new Promise((resolve, reject) => {
        fs.readFile(_filePath, 'utf8', (error, data) => {
            if (error) {
                reject(error);
            }
            try {
                const jsonData = JSON.parse(data);
                resolve(jsonData);
            } catch (error) {
                reject(error);
            }
        });
    });
}