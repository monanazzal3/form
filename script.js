
const favoriteLanguages = ['JavaScript', 'Python', 'C++'];


function displayFavoriteLanguages() {
    const ul = document.getElementById('favorite-languages');

    favoriteLanguages.forEach(language => {
        const li = document.createElement('li');
        li.textContent = language;
        ul.appendChild(li);
    });
}

displayFavoriteLanguages();
