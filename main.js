// console.log("connected")
let wordToSearch = "tree"
fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`).then(response => response.json()).then(data => console.log(data));
