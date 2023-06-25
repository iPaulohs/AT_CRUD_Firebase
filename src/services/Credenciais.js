import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDd3h0UVFcsztT_Q9M_Nf-O9lBCxIFhEVk",
  authDomain: "at-react-native-phs.firebaseapp.com",
  projectId: "at-react-native-phs",
  storageBucket: "at-react-native-phs.appspot.com",
  messagingSenderId: "696147782442",
  appId: "1:696147782442:web:8b6c7bde10d13f39b44c53"
};

const app = initializeApp(firebaseConfig);

export default app