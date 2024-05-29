document.addEventListener("DOMContentLoaded", function() {
    fetch('/uni')
    .then(response => response.json())
    .then(data => {
        if (Array.isArray(data)) {
            const unisTable = document.querySelector('#unis-content');
            data.forEach(university => {
                const row = document.createElement('tr'),
                      name = document.createElement('td'),
                      image = document.createElement('td'),
                      domains = document.createElement('td'),
                      webPages = document.createElement('td');

                name.textContent = university.name;
                image.innerHTML = '<img src="https://www.musa.in.ua/sites/default/files/styles/600x450/public/2020-03/kpi%20photo%20%288%29.jpg?itok=iq41n5Ki" alt="KPI">';
                domains.textContent = university.domains;
                webPages.textContent = university.web_pages;
                
                row.appendChild(name);
                row.appendChild(image);
                row.appendChild(domains);
                row.appendChild(webPages);
                unisTable.appendChild(row);
            });
        } else {
            console.error('Data is not an array:', data);
        }
    })
    .catch(error => console.error('Error fetching universities:', error));
});
