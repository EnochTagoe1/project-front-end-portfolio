// console.log("connected")
let wordToSearch = "house"
fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`).then(response => response.json()).then(data => console.log(data));
event.preventDefault();