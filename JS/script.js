
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
    
    //this function displays Flatacuties animals
                function displayfilms(film){
                    const name= document.createElement('p')
                    name.innerHTML=film.title
                    const main= document.getElementById("main")
                    main.append(name)
                    //Event listener listens for a click, it the calls SingleCat function
                    name.addEventListener("click", () => {
                        singlefilm(film) 
                        
                    })
                }
            // This function handles all Flatacuties animal characteristics like Displaing the name, img and votes for each.
    function singlefilm(film){
        document.getElementById("movieTitle").innerHTML=film.title
        document.getElementById("poster").src = film.poster
        
    
        
    } 
    


    
    
 
