const databaseService = require('./services/database_service');
const socketService = require('./services/socket_service');
const apiService = require('./services/api_service');
const viviPointservice = require('./services/blockchain/vivi_point_service');
require('dotenv').config();


databaseService.createConnection(async () => {
    apiService.listen(process.env.SERVER_PORT, () => {
        console.log(`Server is up and running on port: ${process.env.SERVER_PORT}`);
    });
    socketService.listen(process.env.SOCKET_PORT, () => {
        console.log(`Socket.io is up and running on port: ${process.env.SOCKET_PORT}`);
    });
    viviPointservice.init().then((value) => {
        console.log(`Connect ViVi Point smartcontracts: ${value}`);
    });
});


// async function addFriend(buttonAddFriend) {
//     for (const div of buttonAddFriend) {
//         const randomNumber = Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000;
//         await new Promise(resolve => setTimeout(resolve, randomNumber));
//         console.log('Add friend ne');
//         div.click();
//     }
// }

// async function scrollPage() {
//     return window.scrollTo({
//         top: document.documentElement.scrollHeight, // Vị trí cần cuộn xuống (độ cao của trang)
//         behavior: 'smooth' // Hiệu ứng cuộn mượt
//     });
// }

// async function main(loop) {
//     let i = 0;
//     while (i < loop) {
//         console.log('Lan lap thu', i);
//         var buttonAddFriend = document.querySelectorAll('div[aria-label="Thêm bạn bè"]');
//         console.log('Lan nay co', buttonAddFriend.length);
//         if (buttonAddFriend.length <= 0) {
//             await scrollPage();
//             await new Promise(resolve => setTimeout(resolve, 3000));
//         } else {
//             await addFriend(buttonAddFriend);
//             i++;
//         }
//     }
// }


