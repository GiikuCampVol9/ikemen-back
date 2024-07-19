// Firebaseの初期化
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
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
const savaData = () => {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const name = document.getElementById("name").value;
    const serverTimeStamp = firebase.firestore.FieldValue.serverTimestamp()
    const created_at = serverTimeStamp
    // storageに入れる処理
    // urlとpathと取得する(いじいじしたら取得できる)

    // auth->uid取得できる
    // db.collection("user").doc(uid).set({})

    // dbという変数にフォームのデータを入れる👆
    db.collection("user")
        .add({
            email: email,
            pass: pass,
            name : name,
            created_at : created_at,
            // 画像のパス(変更削除するときにいるはず)
            prof_img: path,
            // 表示するようのなんとか
            profileUrl: url
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
};