
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

// Hi Chris, I'm sorry this is a mess I kind of started to figure it out but my brain was 
// so foggy I couldn't make any sense of anything (kind of felt dizzy even reading it)
// I have put down some comments and stuff from what I could originally figure out about the process
// but there is a fair chunk left to do, i think. I really appreciate you looking at it for me... 

const colRef = collection(db, 'moods') 
const q = query(colRef, orderBy('createdAt'))


// get a snapshot of the data (from all time)
onSnapshot(q, (snapshot) => {
    let moods = [] //array for all data from all time
    snapshot.docs.forEach((doc) => {
        moods.push({ ...doc.data(), id:doc.id })
    })
    console.log(moods) // this isn't working yet
})

onSnapshot(q, (snapshot) => {
    let recentMoods = [] //push data from last 3 hours only to this array
    snapshot.docs.forEach((doc) => {
        moods.push({ ...doc.data(), id:doc.id })
 }) 
})

// maybe need a for loop to look inside the array and count how many times each element appears???

var currentMood //make this variable for when we find the most frequent element in the array
