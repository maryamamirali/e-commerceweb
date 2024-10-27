import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword , onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, getDoc , doc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
apiKey: "AIzaSyBjEUaT9wEypDktTz5mBZSmk6BqrDJruO4",
authDomain: "ecommerce-com-64d4d.firebaseapp.com",
projectId: "ecommerce-com-64d4d",
storageBucket: "ecommerce-com-64d4d.appspot.com",
messagingSenderId: "541642619972",
appId: "1:541642619972:web:64ef4cf857c6bcf85ed011",
measurementId: "G-MH9ZC2N70Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);



//signup
function Register (email , password) {
    return createUserWithEmailAndPassword(auth , email , password)

}

//signin
function Login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

//logout
function Logout () {
    return signOut(auth)
}

//add product
async function product(productInfo) {
    const { title, description, price, image } = productInfo;

    const storageRef = ref(storage, 'products/' + image.name);
    await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef);

    return addDoc(collection(db, "products"), { title, description, price, image: url });
}


//get product
async function GetProduct() {
const querySnapshot = await getDocs(collection(db, "products"));

const Products = [];

querySnapshot.forEach(doc => {
    const data = doc.data();
    data.id = doc.id;
    Products.push(data);
});

return Products;
}

//single product
async function getSingleProduct(prdctId) {
const docRef = doc(db, "products" , prdctId);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("document data" , prdctId);
return docSnap.data()
}else {
    console.log("no such document");
    
}
}

export {
    Register,
    Login,
    Logout,
    product,
    GetProduct,
    getSingleProduct,
    onAuthStateChanged,
    auth,
}