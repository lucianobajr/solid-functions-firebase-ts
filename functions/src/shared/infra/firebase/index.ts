import admin from "firebase-admin";

import { serviceAccount } from "../../../config/serviceAccount";

const credentials = serviceAccount as admin.ServiceAccount;

if (process.env.NODE_ENV === "dev") {
    admin.initializeApp({
        credential: admin.credential.cert(credentials),
    });
} else {
    admin.initializeApp();
}

const db = admin.firestore();

export { admin, db };