import firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyCZzPK3NIClc47PXn6HO5MDTdLPQ5G2MuI",
	authDomain: "mass-media-crawlers.firebaseapp.com",
	projectId: "mass-media-crawlers",
	storageBucket: "mass-media-crawlers.appspot.com",
	messagingSenderId: "719923862600",
	appId: "1:719923862600:web:1b7bb7210dcce3e7fa0c7d",
	measurementId: "G-LBCTC0HJ5H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;