import { getFirestore } from 'firebase/firestore'
import app from './Credenciais';

const dataBase = getFirestore(app);

export default dataBase

