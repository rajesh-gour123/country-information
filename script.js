// document.getElementById('countryForm').addEventListener('submit', async function(event) {
//     event.preventDefault();

//     const countryName = document.getElementById('countryName').value;
//     const url = `https://restcountries.com/v3.1/name/${countryName}`;

//     try {
//         const res = await fetch(url);
//         const data = await res.json();

//         if (data.length > 0) {
//             const countryData = data[0];
//             const country = {
//                 name: countryData.name.common,
//                 capital: countryData.capital ? countryData.capital[0] : 'No capital',
//                 flag: countryData.flags ? countryData.flags.png : '',
//                 population: countryData.population,
//                 map: countryData.maps.googleMaps,
//                 startOfWeek: countryData.startOfWeek,
//                 timezones: countryData.timezones,
//                 currencies: countryData.currencies ? Object.values(countryData.currencies).map(c => c.name).join(', ') : 'No currency data'
//             };

//             displayCountryInfo(country);
//         } else {
//             displayCountryInfo(null);
//         }
//     } catch (err) {
//         console.error(err);
//         displayCountryInfo(null);
//     }
// });

// function displayCountryInfo(country) {
//     const countryInfoDiv = document.getElementById('countryInfo');
//     countryInfoDiv.innerHTML = '';

//     if (country) {
//         countryInfoDiv.innerHTML = `
//             <h2>${country.name}</h2>
//             <p><strong>Capital:</strong> ${country.capital}</p>
//             <p><strong>Total Population:</strong> ${country.population}</p>
//             <p><strong>Start of the Week:</strong> ${country.startOfWeek}</p>
//             <p><strong>Timezones:</strong> ${country.timezones.join(', ')}</p>
//             <p><strong>Currencies:</strong> ${country.currencies}</p>
//             <p><strong>Flag:</strong> <img src="${country.flag}" alt="Flag of ${country.name}"></p>
//             <p><strong>Map:</strong> <a href="${country.map}" target="_blank">View on Google Maps</a></p>
//         `;

//         let h3 = document.querySelector("h3");
//         h3.innerText = country.population;
//     } else {
//         countryInfoDiv.innerHTML = '<p>No country data available. Please enter a valid country name.</p>';
//     }
// }


document.getElementById('countryForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const countryName = document.getElementById('countryName').value;
    const url = `https://restcountries.com/v3.1/name/${countryName}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.length > 0) {
            const countryData = data[0];
            const country = {
                name: countryData.name.common,
                capital: countryData.capital ? countryData.capital[0] : 'No capital',
                flag: countryData.flags ? countryData.flags.png : '',
                population: countryData.population,
                map: countryData.maps.googleMaps,
                startOfWeek: countryData.startOfWeek,
                timezones: countryData.timezones,
                currencies: countryData.currencies ? Object.values(countryData.currencies).map(c => c.name).join(', ') : 'No currency data'
            };

            displayCountryInfo(country);
        } else {
            displayCountryInfo(null);
        }
    } catch (err) {
        console.error(err);
        displayCountryInfo(null);
    }
});

function displayCountryInfo(country) {
    const countryNameDisplay = document.getElementById('countryNameDisplay');
    const countryCapital = document.getElementById('countryCapital');
    const countryPopulation = document.getElementById('countryPopulation');
    const countryStartOfWeek = document.getElementById('countryStartOfWeek');
    const countryTimezones = document.getElementById('countryTimezones');
    const countryCurrencies = document.getElementById('countryCurrencies');
    const countryFlag = document.getElementById('countryFlag');
    const countryMap = document.getElementById('countryMap');

    if (country) {
        countryNameDisplay.innerHTML = `<strong> Conutry: </strong> ${country.name}`;
        // countryCapital.innerHTML = country.capital
        countryCapital.innerHTML = `<strong>Capital:</strong> ${country.capital}`;
        countryPopulation.innerHTML = `<strong>Total Population:</strong> ${country.population}`;
       // countryPopulation.innerHTML = country.population
       countryStartOfWeek.innerHTML = `<strong>Start of the Week:</strong> ${country.startOfWeek}`;
      // countryStartOfWeek.innerHTML = country.startOfWeek;
         countryTimezones.innerHTML = `<strong>Timezones:</strong> ${country.timezones.join(', ')}`;
        countryTimezones.innerHTML = country.timezones.join(', ');
       countryCurrencies.innerHTML = `<strong>Currencies:</strong> ${country.currencies}`;
       countryCurrencies.innerHTML = country.currencies;
        countryFlag.innerHTML = `<strong>Flag:</strong> <img src="${country.flag}" alt="Flag of ${country.name}">`;
        countryMap.innerHTML = `<strong>Map:</strong> <a href="${country.map}" target="_blank">View on Google Maps</a>`;
    } else {
        countryNameDisplay.textContent = '';
        countryCapital.innerHTML = '<strong>Capital:</strong> No data available';
        countryPopulation.innerHTML = '<strong>Total Population:</strong> No data available';
        countryStartOfWeek.innerHTML = '<strong>Start of the Week:</strong> No data available';
        countryTimezones.innerHTML = '<strong>Timezones:</strong> No data available';
        countryCurrencies.innerHTML = '<strong>Currencies:</strong> No data available';
        countryFlag.innerHTML = '<strong>Flag:</strong> No data available';
        countryMap.innerHTML = '<strong>Map:</strong> No data available';
    }
}
