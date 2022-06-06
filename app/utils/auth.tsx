import {SalteAuth} from '@salte-auth/salte-auth';
import {Google} from '@salte-auth/google';
import {Redirect} from '@salte-auth/redirect';
import {CONFIG} from '../config';

export const auth = new SalteAuth({
    handlers: [
        new Redirect({
            default: true,
        }),
    ],

    providers: [
        new Google({
            clientID: CONFIG.CLIENT_ID,
            responseType: 'token',

            scope: 'https://www.googleapis.com/auth/spreadsheets',

            routes: true,
        }),
    ],
})