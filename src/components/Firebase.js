import app from 'firebase/app'
import 'firebase/firebase-firestore'

const config = {
  apiKey: "AIzaSyBSFtPxgJS8USawtuUnHwVHH0ttP3V7Nx8",
  authDomain: "my-personal-bio.firebaseapp.com",
  databaseURL: "https://my-personal-bio.firebaseio.com",
  projectId: "my-personal-bio",
  storageBucket: "my-personal-bio.appspot.com",
  messagingSenderId: "770715025261",
  appId: "1:770715025261:web:8aa851a469fa962f"
}

class Firebase {
	constructor() {
    app.initializeApp(config)

    this.db = app.firestore();
    this.resumeId = 'dqqrhVhL4q05XfXYhP9R'
	}

	async getResume() {
		return await this.db.doc(`bios/${this.resumeId}`).get();
	}
}

export default new Firebase()