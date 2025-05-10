import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBXI9VdmVJpFv91ssFUisbZqHoHujO4i-A',
  authDomain: 'pheuanpet.firebaseapp.com',
  projectId: 'pheuanpet',
  storageBucket: 'pheuanpet.firebasestorage.app',
  messagingSenderId: '761181086118',
  appId: '1:761181086118:web:4f72621f1d3459004eaf67',
  measurementId: 'G-CGWH329WR0',
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const auth = getAuth(app);
