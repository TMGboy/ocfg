const apiKey = '1b62ccff88d2cd537027e1d82920197b';

async function fetchAndFillMovieDetails(movieId) {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=ar`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch movie details. Status: ${response.status}`);
        }

        const data = await response.json();

        document.title = `${data.title} - مشاهدة فيلم`;
        document.querySelector('.separator img').src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
        document.querySelector('.tableImage h1').textContent = `مشاهدة فيلم ${data.title}`;
        document.querySelector('.tableImage table tr:nth-child(1) td:nth-child(2)').innerHTML = data.original_language;
        document.querySelector('.tableImage table tr:nth-child(2) td:nth-child(2)').textContent = data.certification;
        document.querySelector('.tableImage table tr:nth-child(3) td:nth-child(2)').innerHTML = `
            <a class='label' href='/search/label/${data.genres[0].name}'>${data.genres[0].name}</a> .
            <a class='label' href='/search/label/${data.genres[1].name}'>${data.genres[1].name}</a> .
            <a class='label' href='/search/label/${data.genres[2].name}'>${data.genres[2].name}</a> .
        `;
        document.querySelector('.tableImage table tr:nth-child(4) td:nth-child(2)').textContent = `${data.runtime} دقيقة`;
        document.querySelector('.tableImage table tr:nth-child(5) td:nth-child(2)').textContent = 'WEB-DL';
        document.querySelector('.tableImage table tr:nth-child(6) td:nth-child(2)').innerHTML = `
            <i class="fas fa-star"></i> <span>${data.vote_average}</span>
        `;
        document.querySelector('.tableImage table tr:nth-child(7) td:nth-child(2)').textContent = 'مترجم';
 // Replace IMDB ID placeholders in URLs
        document.querySelector('.Server span').setAttribute('url', `https://autoembed.to/movie/tmdb/${data.external_ids.imdb_id}?trailer=1`);
        document.querySelector('.Download a').setAttribute('href', `https://cima4u.org/movie/${data.external_ids.imdb_id}`);

    } catch (error) {
        console.error('Error fetching movie details:', error.message);
    }
}

const urlParts = window.location.pathname.split('/');
const movieId = urlParts[urlParts.length - 1].split('.')[0];
fetchAndFillMovieDetails(movieId);
