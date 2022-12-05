const init = () => {
    const inputForm = document.querySelector('form'); // grabbing the form element

    // listening for the submit event
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.querySelector('input#searchByID');
        // console.log(input.value);

        // another way to acces the input value is below
        // console.log(event.target.children[1].value);

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
        
            title.innerText = data.title;
            summary.innerText = data.summary;
        });
    });
}

document.addEventListener('DOMContentLoaded', init);