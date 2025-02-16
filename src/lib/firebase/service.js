import { addDoc, collection, doc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import app from './init';
import bcrypt from 'bcrypt';

const firestore = getFirestore(app);

export async function retrieveData(collectionName) {
    const snapshot = await getDocs(collection(firestore, collectionName));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return data;
}

export async function retrieveDataById(collectionName, id) {
    const snapshot = await getDocs(doc(firestore, collectionName, id));
    const data = snapshot.data();
    return data;
}

export async function signUp(userData, callback) {
    const q = query(
        collection(firestore, 'users'),
        where('email', '==', userData.email,
              'fullname', '==', userData.fullname,
            'phone', '==', userData.phone,
            'password', '==', userData.password,
            'role', '==', userData.role,
        
        )
    );

    try {
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        if (data.length > 0) {
            callback(false);
        } else {
            if (!userData.role) {
                userData.role = 'jemaat'
            }
            userData.password = await bcrypt.hash(userData.password, 10);
            await addDoc(collection(firestore, 'users'), userData);
            callback(true);
        }
    } catch (error) {
        callback(false);
        console.log(error);
    }
}
