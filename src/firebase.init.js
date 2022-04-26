import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  // apiKey: "AIzaSyBsyK3H_HEPcpFQERg3M8VgzclWKqk8ANY",
  // authDomain: "genius-car-services01.firebaseapp.com",
  // projectId: "genius-car-services01",
  // storageBucket: "genius-car-services01.appspot.com",
  // messagingSenderId: "169975648656",
  // appId: "1:169975648656:web:4975331f45061f6279a315",

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
