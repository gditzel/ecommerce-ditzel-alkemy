import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAOfWijahMRouJTrkDTZ7mP0McAUvnhez4",
  authDomain: "ecommerceditzel.firebaseapp.com",
  projectId: "ecommerceditzel",
  storageBucket: "ecommerceditzel.appspot.com",
  messagingSenderId: "602889975042",
  appId: "1:602889975042:web:c85f66b59e8da8bb577e1b"
};

const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}