const { exec } = require('child_process');

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