
// loads the dom before any other functionality
document.addEventListener("DOMContentLoaded", () => {
    getFilms()
    }) 
              
    // The endpoint to fetch data
    const url= "http://localhost:3000/films"
    // function that does the actual fetching and convertion of data to json
                function getFilms(){
    
                    fetch(url) 
                    .then(res => res.json()) 
                    .then(data => {
                       
                        data.forEach(film => {
                            displayfilms(film)
                        });
                    })
                }
    
    //this function displays Flatdango films
                function displayfilms(film){
                    const name= document.createElement('p')
                    name.innerHTML=film.title
                    const main= document.getElementById("main")
                    main.append(name)
                    //Event listener listens for a click, it the calls Singlefilm function
                    name.addEventListener("click", () => {
                        singlefilm(film) 
                        
                    })
                }
            // This function handles all Flatdango films and displaing the title, img ,description,sold-out ticket,.
    function singlefilm(film){
        document.getElementById("movieTitle").innerHTML=film.title
        document.getElementById("poster").src = film.poster
        document.getElementById("description").innerHTML = film.description
        document.getElementById("runtime").innerHTML = film.runtime
        document.getElementById("showtime").innerHTML = film.showtime
       const leftTicket= document.getElementById("availableTickets").innerHTML = (film.capacity)-(film.tickets_sold)
    console.log(leftTicket);

    const btn= document.querySelector('.main2')
    btn.addEventListener('click', ()=>{
        if (leftTicket<=0) {
            let btndiv= document.querySelector('.soldout')
            btndiv.innerHTML= "<button>Sold Out</button>"
        }else{

           let tickets_sold= document.querySelector('#availableTickets')
           console.log(tickets_sold);
           tickets_sold.i
        }
    })
    } 



    


    
    
 
