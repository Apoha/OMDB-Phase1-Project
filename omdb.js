let enterAMoovieName = false

document.addEventListener("DOMContentLoaded", function(e){


  const searchBtn = document.querySelector(".submit-moovie");
  const movieFormContainer = document.querySelector(".movies-container");
  searchBtn.addEventListener("click", (e) => {


    e.preventDefault()

    const inputMoovieName = document.querySelector(".input-text")
    console.log(inputMoovieName.value)
   // console.log(e.target.value)
   // console.log('I am clicke')

     fetchData(inputMoovieName.value)
    // hide & seek with the form
    enterAMoovieName = !enterAMoovieName;
    if (enterAMoovieName) {
      movieFormContainer.style.display = "block";
    } else {
      movieFormContainer.style.display = "none";
    }
    // fetchData()
    
  });

  aboutYourApp()
  contactApp()
  connectWithUs()
})




function fetchData(moovie){

      
        fetch(`https://www.omdbapi.com/?t=${moovie}&apikey=${API_KEY}`)

       // fetch('http://www.omdbapi.com/?i=tt3896198&apikey=c1e41875')
      
          .then(function (response) { 
            console.log(response)
            return response.json()
          })
      
      
          .then(function (json) {
            console.log(json)
            const moovieSection = document.createElement("section")
            moovieSection.id = "moovie-info"
            const moovieInfo = document.createElement("div")
            moovieInfo.className = "moovie-profil"
            const moovieImage = document.createElement("img")
           // moovieInfo.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BNjAyN2QxOTItOGQ0YS00NmQxLWIxMjEtMDdkZmY0NDU5OWUzXkEyXkFqcGdeQXVyMTk1MDM0OTc@._V1_SX300.jpg")
           moovieImage.setAttribute("src",  json.Poster)
           const moovieActor = document.createElement("p")
           moovieActor.textContent = `Actors: ${json.Actors}`
          const moovieAwards = document.createElement("p")
          moovieAwards.textContent = `Awards: ${json.Awards}`
          const moovieBoxOffice = document.createElement("p")
          moovieBoxOffice.textContent = `BoxOffice: ${json.BoxOffice}`
          const moovieCountry = document.createElement("p")
          moovieCountry.textContent = `Country: ${json.Country}`
          const moovieDVD= document.createElement("p")
          moovieDVD.textContent = `DVD: ${json.DVD}`
          const moovieDirector = document.createElement("p")
          moovieDirector.textContent = `Director: ${json.Director}`
          const moovieGenre = document.createElement("p")
          moovieGenre.textContent = `Genre: ${json.Genre}`
          const moovieLanguage = document.createElement("p")
          moovieLanguage.textContent = `Language: ${json.Language}`
          const moovieMetascore = document.createElement("p")
          moovieMetascore.textContent =`Metascore: ${json.Metascore}`
          const mooviePlot = document.createElement("p")
          mooviePlot.textContent = `Plot:${json.Plot}`
          const moovieProduction = document.createElement("p")
          moovieProduction.textContent = `Production:${json.Porduction}`
          const moovieRate = document.createElement("p")
          moovieRate.textContent = document.createElement("p")
          moovieRate.textContent =`Rate: ${json.Rate}`
          const moovieRating = document.createElement("p")
          moovieRating.textContent= `Rating: ${json.Rating}`
          const moovieReleased = document.createElement("p")
          moovieReleased.textContent = `Released: ${json.Released}`
          const moovieResponse = document.createElement("p")
          moovieResponse.textContent= `Response: ${json.Response}`
          const moovieRuntime = document.createElement("p") 
          moovieRuntime.textContent = `Runtime: ${json.Runtime}`
          const moovieTitle = document.createElement("p")
          moovieTitle.textContent = `Title: ${json.Title}`
          const moovieType = document.createElement("p")
          moovieType.textContent = `Type: ${json.Type}`
          const moovieWebsite = document.createElement("p")
          moovieWebsite.textContent = `Website: ${json.Website}`
          const moovieWriter = document.createElement("p")
          moovieWriter.textContent =`Writer: ${json.Writer}`
          const moovieYear = document.createElement("p")
          moovieYear.textContent = `Year: ${json.Year}`
          const moovieImdbID = document.createElement("p")
          moovieImdbID.textContent =`imdbID: ${json.imdbID}`
          const moovieImdbRating = document.createElement("p")
          moovieImdbRating.textContent =`imdbRting: ${json.imdbRating}`
          const moovieImdbVotes = document.createElement("p")
          moovieImdbVotes.textContent = `imdbVotes: ${json.imdbVotes}`


          document.body.appendChild(moovieSection)
           moovieSection.appendChild(moovieInfo)
           moovieInfo.appendChild(moovieImage)
           moovieInfo.appendChild(moovieActor)
           moovieInfo.appendChild(moovieAwards)
           moovieInfo.appendChild(moovieBoxOffice)
           moovieInfo.appendChild(moovieCountry)
           moovieInfo.appendChild(moovieDVD)
           moovieInfo.appendChild(moovieDirector)
           moovieInfo.appendChild(moovieGenre)
           moovieInfo.appendChild(moovieLanguage)
           moovieInfo.appendChild(moovieMetascore)
           moovieInfo.appendChild(mooviePlot)
           moovieInfo.appendChild(moovieProduction)
           moovieInfo.appendChild(moovieRate)
           moovieInfo.appendChild(moovieRating)
           moovieInfo.appendChild(moovieReleased)
           moovieInfo.appendChild(moovieRuntime)
           moovieInfo.appendChild(moovieTitle)
           moovieInfo.appendChild(moovieType)
           moovieInfo.appendChild(moovieWebsite)
           moovieInfo.appendChild(moovieWriter)
           moovieInfo.appendChild(moovieYear)
           moovieInfo.appendChild(moovieImdbID)
           moovieInfo.appendChild(moovieImdbRating)
           moovieInfo.appendChild(moovieImdbVotes)

           likeButton()
           clickLikeButton()
          })

        
}
    





function aboutYourApp(){

const aboutUsBtn = document.querySelector(".about-us")
aboutUsBtn.addEventListener("click", function(){

  //console.log("This App has been designed for you. Making easy  your experience when look for a moovie is the driven reason of the creation of this App")
  const aboutInfo = document.createElement("p")
  aboutInfo.className = "about-Message"
  aboutInfo.textContent = "This App has been designed for you. Making easy  your experience when look for a moovie is the driven reason of the creation of this App"
   aboutUsBtn.appendChild(aboutInfo)

})
}




function contactApp(){

  const contactUs = document.querySelector(".contact")
  contactUs.addEventListener("click", function(){
    //console.log("contact Me")
  const contact = document.createElement("p")
 contact.className = "contact-Info"
 contact.textContent = "Phone: +1 517-300-3534 E-mail: MooviesLovers@aol.com"
  contactUs.appendChild(contact)
 
})
}


function connectWithUs(){

  const connectWith = document.querySelector(".connect")
  connectWith.addEventListener("click", function(){
    const connect = document.createElement("p")
    connect.innerHTML= "<a href =''>FaceBook</a> <a href =''>Instagram</a>"
    connectWith.appendChild(connect)
    
  })
}





function likeButton(){

  const moovieProfil = document.querySelector(".moovie-profil")
  const likeLabel = document.createElement("label")
  likeLabel.setAttribute("for", "likes")
  likeLabel.textContent = "Like "
  const btnLike = document.createElement("button")
  btnLike.className = "btn-like"
  btnLike.textContent = 0
  moovieProfil.appendChild(likeLabel)
  moovieProfil.appendChild(btnLike)
  console.log("i am a button")
}




function clickLikeButton(){
 let counter = 0;
  const clickBtnLike = document.querySelector(".btn-like")
  clickBtnLike.addEventListener("click", function(){
//     let counter = 0;
//  for(i=0; i<clickBtnLike.textContent; i++){

//  }

counter++;
clickBtnLike.textContent = counter
console.log(counter)
  })
}



