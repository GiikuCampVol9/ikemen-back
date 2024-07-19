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
const storage = firebase.storage();

const container = document.getElementById('container');

firebase.firestore()
    .collection('user')
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() はドキュメントの全てのフィールドを含むオブジェクト
            const data = doc.data();
            const name = data.name;
            const profileUrl = data.profileUrl;

            console.log('Name:', name);
            console.log('Profile URL:', profileUrl);
            console.log('---'); // ドキュメント間に区切りを入れるための区切り文字

            const userInfoDiv = document.createElement('div',{class:'user-info'});
            const h2Element = document.createElement('h2');
            const imgElement = document.createElement('img');

            // 名前を設定
            h2Element.textContent = name;
            // 画像を設定
            imgElement.src = profileUrl;
            imgElement.alt = `${name}'s icon`;
            imgElement.width = 100;

            // h2 と img を userInfoDiv に追加
            userInfoDiv.appendChild(h2Element);
            userInfoDiv.appendChild(imgElement);

            // body の最後に userInfoDiv を追加
            container.appendChild(userInfoDiv);
        });
    })
    .catch((error) => {
        console.error("Error getting documents: ", error);
    });