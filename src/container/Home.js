import React, { useEffect, useState } from 'react'
// https://www.npmjs.com/package/google-spreadsheet
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { private_key, client_email } from '../token.json'
const g = window;
g['key'] = {}
function Home() {
    const [data, setData] = useState([])
    async function load() {
        const doc = new GoogleSpreadsheet(process.env.REACT_APP_SHEET_URL);
        // // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication

        await doc.useServiceAccountAuth({
            client_email,
            private_key
        });
        await doc.loadInfo(); // loads document properties and worksheets

        const sheet = doc.sheetsByTitle['st1']; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
        // read rows
        const rows = await sheet.getRows(); // can pass in { limit, offset }
        setData(rows);
        g['data'] = rows;

        const sheet2 = doc.sheetsByTitle['test']; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

        // append rows
        const larryRow = await sheet2.addRow({ name: 'Larry Page', email: 'larry@google.com' });
        const moreRows = await sheet2.addRows([
            { name: 'Sergey Brin', email: 'sergey@google.com' },
            { name: 'Eric Schmidt', email: 'eric@google.com' },
        ]);
        console.log(moreRows)
    }

    useEffect(() => {
        load();
        return (() => {
            console.log('clean')
        })
    }, []);

    const RenderItems = () => {
        if (data.length > 0) {
            return data.map((i, ii) => {
                // 검색 키 생성
                g.key[i['대상명']] = i;
                return <div key={`items-${ii}`}>{`${i['도']} ${i['관서']} ${i['대상명']}`}</div>
            })
        } else {
            return <p>no data</p>
        }

    }

    return (
        <div>
            <RenderItems />

        </div>
    )
}
export default Home