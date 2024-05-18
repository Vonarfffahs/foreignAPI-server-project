const express = require('express');
const request = require('request');

const PORT = 3000;

const app = express();

app.use(express.static('public'));

app.get('/uni', (req, res) => {
    const country = 'Ukraine';
    request(`http://universities.hipolabs.com/search?country=${country}`, function (error, response, body) {
        try {
            const data = JSON.parse(body);
            res.json(data);
        } catch (error) {
            console.error('error:', error);
        }       
    });
});

app.use('/is-21fiot-22-056', (req, res) => {
    const name = 'Victor';
    const lastName = 'Shafranov';
    const year = '2';
    const group = 'IS-21';

    res.send(
        `
        <div 
            style='display:flex;
                   flex-direction:column;
                   justify-content:center;
                   align-items:center;
                   margin:auto;
                   width:50%;
                   background:lightgrey;'
        >
            <h1>Student's info</h1>
            <ul style='list-style:none;font-size:16pt;'>
                <li><b>Name:</b> ${name}</li>
                <li><b>Last Name:</b> ${lastName}</li>
                <li><b>Year:</b> ${year}</li>
                <li><b>Group:</b> ${group}</li>
            </ul>
        </div>
        `
    );
});

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});