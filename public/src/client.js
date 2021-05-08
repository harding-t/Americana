let socket = io();

socket.emit('user-enter', "anonymous");

console.log("Welcome to Americana!");