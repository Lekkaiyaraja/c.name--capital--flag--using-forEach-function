fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Iterate over the array of countries using forEach
    data.forEach(country => {
      // Extract required details (name, capital, flag) for each country
      const name = country.name.common;
      const capital = country.capital[0];
      const flag = country.flags.png;

      // Print the details for each country
      console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
    });
  })
  .catch(error => console.error('Error fetching data:', error));
