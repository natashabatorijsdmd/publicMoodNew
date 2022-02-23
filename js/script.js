
const joy = document.querySelector(".joy");
const love = document.querySelector(".love");
const fear = document.querySelector(".fear");
const hate = document.querySelector(".hate");

const modal = document.querySelector('.modal');

// const timer = setTimeout(closeModal, 1000);

// function closeModal() {
//   modal.close()
// }

//Adding Moods to the database

joy.addEventListener('click', (e) => {
    mood = e.target.getAttribute("data-mood")
   saveMood(mood)
})

love.addEventListener('click', (e) => {
    mood = e.target.getAttribute("data-mood")
   saveMood(mood)
})

fear.addEventListener('click', (e) => {
    mood = e.target.getAttribute("data-mood")
   saveMood(mood)
})

hate.addEventListener('click', (e) => {
    mood = e.target.getAttribute("data-mood")
   saveMood(mood)
})

//Function to save selected mood
function saveMood(mood){
    db.collection('moods').doc().set({
        emotion: mood,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
       })
       .then( () => {
           //this is where i want to open the modal
        console.log("saved")
       })
}

//Script for the modal
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

  if (modal.classList.contains("open")){
    // setTimeout(closeModal, 1000);
    console.log("is open")
  }