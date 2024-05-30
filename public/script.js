document.addEventListener("DOMContentLoaded", function() {
    const itemsPerPage = 3;
    let currentPage = 1;
    let universities = [];

    function renderTable(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = universities.slice(start, end);

        const unisTable = document.querySelector('#unis-content');
        unisTable.innerHTML = '';

        paginatedItems.forEach(university => {
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

        document.getElementById('page-info').textContent = `Page ${currentPage} of ${Math.ceil(universities.length / itemsPerPage)}`;
        document.getElementById('prev-page').disabled = currentPage === 1;
        document.getElementById('first-page').disabled = currentPage === 1;
        document.getElementById('next-page').disabled = currentPage === Math.ceil(universities.length / itemsPerPage);
        document.getElementById('last-page').disabled = currentPage === Math.ceil(universities.length / itemsPerPage);
    }

    function fetchData() {
        fetch('/uni')
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                universities = data;
                renderTable(currentPage);
            } else {
                console.error('Data is not an array:', data);
            }
        })
        .catch(error => console.error('Error fetching universities:', error));
    }

    document.getElementById('first-page').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage = 1;
            renderTable(currentPage);
        }
    });

    document.getElementById('prev-page').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable(currentPage);
        }
    });

    document.getElementById('next-page').addEventListener('click', () => {
        if (currentPage < Math.ceil(universities.length / itemsPerPage)) {
            currentPage++;
            renderTable(currentPage);
        }
    });

    document.getElementById('last-page').addEventListener('click', () => {
        const totalPages = Math.ceil(universities.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage = totalPages;
            renderTable(currentPage);
        }
    });

    fetchData();
});
