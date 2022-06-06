import {OAuth2Provider} from '@salte-auth/salte-auth';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import {useEffect, useState} from 'react';
import {auth} from './utils/auth';

export function App() {
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        auth.on('login', (error, user) => {
            if (error) console.error(error);
            else setAccessToken(user);
        });
        
        auth.on('logout', (error) => {
            if (error) console.error(error);
            else setAccessToken(null);
        });

        if (auth) {
            const provider = auth.provider('google') as OAuth2Provider;

            setAccessToken(provider?.accessToken);
        }
    }, []);

    console.log(accessToken);

    return (
        <div>
            <button 
                onClick={() => {
                    const doc = new GoogleSpreadsheet();

                    doc.useRawAccessToken(accessToken.raw);

                    doc.createNewSpreadsheetDocument({
                        title: 'test'
                    })
                }}
            >Initialize</button>
        </div>
    );
}