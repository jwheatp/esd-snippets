import express from "express";
import cors from "cors";

import multer from "multer";

// import cloudinary from "cloudinary";

import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// quand on utilise pas Prisma on peut passer par le module .dotenv
// afin de lire les variables d'environnement du .env
import * as dotenv from 'dotenv'
dotenv.config()

// avec Cloudinary
// cloudinary.config({
// 	cloud_name: process.env.CLOUDINARY_NAME,
// 	api_key: process.env.CLOUDINARY_API_KEY,
// 	api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// avec Firebase
// https://firebase.google.com/docs/storage/web/start
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
	projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET
};

const fireApp = initializeApp(firebaseConfig);
const storage = getStorage(fireApp);

// initialize app
const app = express();
app.use(cors())

const port = 3000;

app.post("/upload", multer().single("picture"), async (req, res) => {
	// Avec Cloudinary
	// cloudinary.v2.uploader
	// 	.upload_stream(req.file.buffer, (error, result) => {
	// 		// when its done, display image url in response
	// 		res.json({ error, error, url: result?.url });
	// 	})
	// 	.end(req.file.buffer);

	// Avec Firebase
	const storageRef = ref(storage, 'mon-image.png')

	await uploadBytes(storageRef, req.file.buffer, {
		contentType: 'image/png',
	})

	const url = await getDownloadURL(storageRef)

	res.json({ url })
});

// run the server
app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
