document.addEventListener("DOMContentLoaded", function() {
    fetch('/uni')
    .then(response => response.json())
    .then(data => {
        if (Array.isArray(data)) {
            const universitiesList = document.getElementById('universities-list');
            data.forEach(university => {
                const listItem = document.createElement('li');
                listItem.textContent = university.name;
                universitiesList.appendChild(listItem);
            });
        } else {
            console.error('Data is not an array:', data);
        }
    })
    .catch(error => console.error('Error fetching universities:', error));
});
