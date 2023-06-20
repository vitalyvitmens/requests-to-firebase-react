import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
	apiKey: 'AIzaSyDN55VcTsCeSxIoGB3SrvWt-Sno6Du5gDs',
	authDomain: 'productsproject-6cc64.firebaseapp.com',
	projectId: 'productsproject-6cc64',
	storageBucket: 'productsproject-6cc64.appspot.com',
	messagingSenderId: '282687828925',
	appId: '1:282687828925:web:d4b2419e3875a61dc458d4',
	databaseURL:
		'https://productsproject-6cc64-default-rtdb.europe-west1.firebasedatabase.app/',
}

const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)
