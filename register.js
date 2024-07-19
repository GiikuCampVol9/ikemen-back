// Firebaseの初期化
const firebaseConfig = {
    apiKey: "AIzaSyAR6puGjI0wejXqMVFtJgLHFGTAhxiQG-4",
    authDomain: "ikemen-9c89f.firebaseapp.com",
    projectId: "ikemen-9c89f",
    storageBucket: "ikemen-9c89f.appspot.com",
    messagingSenderId: "462068637932",
    appId: "1:462068637932:web:e745925fe748a101fa05c9",
    measurementId: "G-1G03LTN26D"
};

// Firebaseアプリの初期化
firebase.initializeApp(firebaseConfig);

// FirestoreとAuthのインスタンスを取得
const db = firebase.firestore();
const auth = firebase.auth();

// const register = () => {
//     const email = document.getElementById('email').value;
//     const pass = document.getElementById('pass').value;
//     const name = document.getElementById('name').value;
//     const created_at = serverTimestamp();

//     auth.createUserWithEmailAndPassword(email, pass, name)
//         .then((res) => {
//             console.log(res.user);
//         })
//         .catch((err) => {
//             alert(err.message);
//             console.log(err.code);
//             console.log(err.user);
//         });
// };

// const login = () => {
//     const email = document.getElementById('email').value
//     const pass = document.getElementById('pass').value
//     const name = document.getElementById('name').value

//     auth.signInWithEmailAndPassword(email, pass, name)
//         .then((res) => {
//             console.log(res.user)
//         })
//         .catch((err) => {
//             // ダイアログが表示されるようにする
//             alert(err.message)
//             console.log(err.code)
//             console.log(err.user)
//         })
// }

// データをFireStoreに保存するメソッド
const saveData = () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const name = document.getElementById("name").value;
    const serverTimeStamp = firebase.firestore.FieldValue.serverTimestamp()
    const created_at = serverTimeStamp

    // dbという変数にフォームのデータを入れる👆
    db.collection("user") 
        .add({
            email: email,
            pass: pass,
            name: name,
            prof_img: Path2D,
            created_at: created_at
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
};