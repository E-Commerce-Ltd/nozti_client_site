// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCJqPb0awjPVWyH18CvOKDDOvffyhdmeBo',
	authDomain: 'nozti-ecommerce.firebaseapp.com',
	projectId: 'nozti-ecommerce',
	storageBucket: 'nozti-ecommerce.appspot.com',
	messagingSenderId: '483179703955',
	appId: '1:483179703955:web:1435a99332403f66b92766',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;