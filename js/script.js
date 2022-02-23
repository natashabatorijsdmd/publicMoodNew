
const joy = document.querySelector(".joy");
const love = document.querySelector(".love");
const fear = document.querySelector(".fear");
const hate = document.querySelector(".hate");

var modal;

//Script for the modal
document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelector('.modal');
    modal = M.Modal.init(elem);
    console.log(modal);
  });

//Adding Moods to the database

joy.addEventListener('click', (e) => {

    mood = e.target.getAttribute("data-mood");
   saveMood(mood);
   modal.open();
   setTimeout(() => {
       modal.close()
   }, 2000)
   clearTimeout();
})

love.addEventListener('click', (e) => {
    mood = e.target.getAttribute("data-mood");
   saveMood(mood);
   modal.open();
   setTimeout(() => {
       modal.close()
   }, 2000)
   clearTimeout();
})

fear.addEventListener('click', (e) => {
    mood = e.target.getAttribute("data-mood");
   saveMood(mood);
   modal.open();
   setTimeout(() => {
       modal.close()
   }, 2000)
   clearTimeout();
})

hate.addEventListener('click', (e) => {
    mood = e.target.getAttribute("data-mood");
   saveMood(mood);
   modal.open();
   setTimeout(() => {
       modal.close()
   }, 2000)
   clearTimeout();
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

