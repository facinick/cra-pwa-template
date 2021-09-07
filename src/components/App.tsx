import React from 'react';
import '../styles/App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { observer } from 'mobx-react-lite';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useThemeStore } from '../stores/provider';
import { HelloWorld } from './HelloWorld';
import { FirebaseAppProvider } from 'reactfire';
// import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '../private/firebase_config';

const App = observer(function App() {
    const { theme } = useThemeStore();
    // const firestoreInstance = getFirestore(useFirebaseApp());

    return (
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <CssBaseline />
                    <HelloWorld />
                </div>
            </ThemeProvider>
        </FirebaseAppProvider>
    );
});

export default App;
