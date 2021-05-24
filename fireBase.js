var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyCZt06F5P9bRUXKWto2_qZmeDupw_JP1RY",
  authDomain: "my-site-1a4a0.firebaseapp.com",
  projectId: "my-site-1a4a0",
  storageBucket: "my-site-1a4a0.appspot.com",
  messagingSenderId: "635368129613",
  appId: "1:635368129613:web:a8d62f9a7614b10670c804",
  measurementId: "G-VXH2EBP7FB"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


