// loads the dom before any other functionality
document.addEventListener("DOMContentLoaded", () => {
    // The endpoint to fetch data
    const url= "http://localhost:3000/films"
                    function getFilms(){    
                    fetch(url) 
                    .then(res => res.json()) 
                    .then(data => console.log(data))
                }
                getFilms();
    }) 
       
    const btn1= document.querySelector('#bookTicket');
    btn1.addEventListener('click',() =>{
        console.log('Someone Clicked me');
    })
    
    
    
    
 
