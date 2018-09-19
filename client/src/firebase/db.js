import { db } from './firebase';

//User API

export const onceGetUsers= () =>
    db.ref('users').once('value');

    //Other Entity APIs 