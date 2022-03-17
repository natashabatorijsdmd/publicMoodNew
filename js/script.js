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
   }, 12000)
   clearTimeout();
})

love.addEventListener('click', (e) => {
    mood = e.target.getAttribute("data-mood");
   saveMood(mood);
   modal.open();
   setTimeout(() => {
       modal.close()
   }, 12000)
   clearTimeout();
})

fear.addEventListener('click', (e) => {
    mood = e.target.getAttribute("data-mood");
   saveMood(mood);
   modal.open();
   setTimeout(() => {
       modal.close()
   }, 12000)
   clearTimeout();
})

hate.addEventListener('click', (e) => {
    mood = e.target.getAttribute("data-mood");
   saveMood(mood);
   modal.open();
   setTimeout(() => {
       modal.close()
   }, 12000)
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


let currentDate = new Date.now();
let timePeriod = currentDate - 7200000;

const colRef = collection(db, "moods");
const q = query(colRef, where("createdAt", ">=", timePeriod));

function mode(array){
    //find Javascript array method that will 
    //extract most common emotion
}

function getMoods(){

    db.collection("moods")
    .onSnapshot((querySnapshot) => {
        getDocs(q); // Not sure if this is right? as dont understand 
        //how this will affect the array 'currentMoods' to be shorter and only 
        //include the timePeriod objects
        var currentMoods = [];
        querySnapshot.forEach((doc) => {
            currentMoods.push(doc.data().emotion);
        });
        console.log(mode); 
    });
 

    if(mode == joy){
        //create HTML element using createElement
    }

    if(mode == love){
        //create HTML element using createElement
    }

    if(mode == fear){
        //create HTML element using createElement
    }

    if(mode == hate){
        //create HTML element using createElement
    }


getMoods();

}