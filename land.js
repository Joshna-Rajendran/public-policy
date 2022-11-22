// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAWqWYfzv6C74t46WvQ1jv3LBOaJoh7R0E',
  authDomain: 'public-policy-e672e.firebaseapp.com',
  databaseURL: 'https://public-policy-e672e-default-rtdb.firebaseio.com',
  projectId: 'public-policy-e672e',
  storageBucket: 'public-policy-e672e.appspot.com',
  messagingSenderId: '482573638024',
  appId: '1:482573638024:web:9c22620aa8be344d6f823d',
  measurementId: 'G-5FEBRCFM3X',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var detRef = firebase.database().ref('details');

function saveData() {
  const sname = document.getElementById('sname').value;
  const bname = document.getElementById('bname').value;
  const mno = document.getElementById('mno').value;
  const idate = document.getElementById('idate').value;
  const rdate = document.getElementById('rdate').value;

  var newDetRef = detRef.push();
  newDetRef.set({
    StudentName: sname,
    BookName: bname,
    Mobile: mno,
    Issue: idate,
    Return: rdate,
  });

  setTimeout(function () {
    alert('Data updated successfully');
  }, 1000);

  document.getElementById('sname').value = '';
  document.getElementById('bname').value = '';
  document.getElementById('mno').value = '';
  document.getElementById('idate').value = '';
  document.getElementById('rdate').value = '';
}
