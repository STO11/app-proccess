import React from 'react';
import {Navigation} from './navigation/index';
//import {Storage} from './services/storage';
//declare const global: {HermesInternal: null | {}};

// const statOnline = async () => {
//     let userState = await Storage.onlineState();
//     return userState;
// };

const App = () => {
    return <Navigation />;
};
export default App;
