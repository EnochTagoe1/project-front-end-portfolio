// console.log("connected")

const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
// console.log(event.target.submit.value)
 const wordToSearch = event.target.submit.value
fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`).then(response => response.json()).then(data=> {console.log(data)
data[0].meanings[0].definitions.forEach(item => {
    console.log(item.definition);
    const definition = document.createElement("div")
    definition.textContent = item.definition
    form.after(definition);
}
)
});
// reset the form
form.reset()



} );




 
// console.log("Submit:", event.target.submit.value);
// console.log("Submit:", event.target.submit.value);






