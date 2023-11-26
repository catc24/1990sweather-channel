// Fetch data from the API
  fetch('https://api.weather.gov/gridpoints/APX/45,85/forecast/hourly?units=us')
      .then(response => response.json())
      .then(data => {
          // Extract temperature information from the first period
          const temperature = data.properties.periods[0].temperature;

          // Display the temperature in the weather-info paragraph
          document.getElementById('gaylord').innerText = ` ${temperature}`;
      })
      .catch(error => console.error('Error fetching weather data:', error));







// GAYLORD ICON 
// Fetch JSON from the provided API
fetch('https://api.weather.gov/gridpoints/APX/45,85/forecast/hourly?units=us')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Phrases to look for and corresponding icon paths
    const phrasesToIcons = {
      'Mostly Cloudy': 'https://1990s-weather-channel.vercel.app/img/icons/PartlyCloudy1.gif',
      'cloudy': 'img/icons/Cloudy.gif',
      'windy': 'img/icons/Windy.gif',
      'snowy': 'img/icons/Snowy.gif',
      'rainy': 'img/icons/Rain.gif',
      'clear': 'img/icons/Clear0.gif',
      // Add more phrases and icon paths as needed
    };

    // Find the matching phrase for each forecast period
    for (const period of data.properties.periods) {
      // Check each phrase in the list
      for (const phrase in phrasesToIcons) {
        if (period.shortForecast.toLowerCase().includes(phrase.toLowerCase())) {
          // If a match is found, set the src attribute of the img tag and break out of the loop
          const iconPath = phrasesToIcons[phrase];
          const img = document.getElementById('gaylord-icon');
          img.src = iconPath;
          break;
        }
      }
    }
  })
  .catch(error => console.error('Error fetching or parsing weather data:', error));












// grand-rapids

// Fetch data from the API
  fetch('https://api.weather.gov/gridpoints/GRR/43,86/forecast/hourly?units=us')
      .then(response => response.json())
      .then(data => {
          // Extract temperature information from the first period
          const temperature = data.properties.periods[0].temperature;

          // Display the temperature in the weather-info paragraph
          document.getElementById('grand-rapids').innerText = ` ${temperature}`;
      })
      .catch(error => console.error('Error fetching weather data:', error));

// Fetch JSON from the provided API
fetch('https://api.weather.gov/gridpoints/GRR/43,86/forecast/hourly?units=us')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Phrases to look for and corresponding icon paths
    const phrasesToIcons = {
      'Mostly Cloudy': 'https://1990s-weather-channel.vercel.app/img/icons/PartlyCloudy1.gif',
      'cloudy': 'img/icons/Cloudy.gif',
      'windy': 'img/icons/Windy.gif',
      'snowy': 'img/icons/Snowy.gif',
      'rainy': 'img/icons/Rain.gif',
      'clear': 'img/icons/Clear0.gif',
      // Add more phrases and icon paths as needed
    };

    // Find the matching phrase for each forecast period
    for (const period of data.properties.periods) {
      // Check each phrase in the list
      for (const phrase in phrasesToIcons) {
        if (period.shortForecast.toLowerCase().includes(phrase.toLowerCase())) {
          // If a match is found, set the src attribute of the img tag and break out of the loop
          const iconPath = phrasesToIcons[phrase];
          const img = document.getElementById('grand-rapids-icon');
          img.src = iconPath;
          break;
        }
      }
    }
  })
  .catch(error => console.error('Error fetching or parsing weather data:', error));





detroit










// detroit

// Fetch data from the API
  fetch('https://api.weather.gov/gridpoints/DTX/42,83/forecast/hourly?units=us')
      .then(response => response.json())
      .then(data => {
          // Extract temperature information from the first period
          const temperature = data.properties.periods[0].temperature;

          // Display the temperature in the weather-info paragraph
          document.getElementById('detroit').innerText = ` ${temperature}`;
      })
      .catch(error => console.error('Error fetching weather data:', error));

// Fetch JSON from the provided API
fetch('https://api.weather.gov/gridpoints/DTX/42,83/forecast/hourly?units=us')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Phrases to look for and corresponding icon paths
    const phrasesToIcons = {
      'Mostly Cloudy': 'https://1990s-weather-channel.vercel.app/img/icons/PartlyCloudy1.gif',
      'cloudy': 'img/icons/Cloudy.gif',
      'windy': 'img/icons/Windy.gif',
      'snowy': 'img/icons/Snowy.gif',
      'rainy': 'img/icons/Rain.gif',
      'clear': 'img/icons/Clear0.gif',
      // Add more phrases and icon paths as needed
    };

    // Find the matching phrase for each forecast period
    for (const period of data.properties.periods) {
      // Check each phrase in the list
      for (const phrase in phrasesToIcons) {
        if (period.shortForecast.toLowerCase().includes(phrase.toLowerCase())) {
          // If a match is found, set the src attribute of the img tag and break out of the loop
          const iconPath = phrasesToIcons[phrase];
          const img = document.getElementById('detroit-icon');
          img.src = iconPath;
          break;
        }
      }
    }
  })
  .catch(error => console.error('Error fetching or parsing weather data:', error));




















// chicago

// Fetch data from the API
  fetch('https://api.weather.gov/gridpoints/LOT/42,87/forecast/hourly?units=us')
      .then(response => response.json())
      .then(data => {
          // Extract temperature information from the first period
          const temperature = data.properties.periods[0].temperature;

          // Display the temperature in the weather-info paragraph
          document.getElementById('chicago').innerText = ` ${temperature}`;
      })
      .catch(error => console.error('Error fetching weather data:', error));

// Fetch JSON from the provided API
fetch('https://api.weather.gov/gridpoints/LOT/42,87/forecast/hourly?units=us')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Phrases to look for and corresponding icon paths
    const phrasesToIcons = {
      'Mostly Cloudy': 'https://1990s-weather-channel.vercel.app/img/icons/PartlyCloudy1.gif',
      'cloudy': 'img/icons/Cloudy.gif',
      'windy': 'img/icons/Windy.gif',
      'snowy': 'img/icons/Snowy.gif',
      'rainy': 'img/icons/Rain.gif',
      'clear': 'img/icons/Clear0.gif',
      // Add more phrases and icon paths as needed
    };

    // Find the matching phrase for each forecast period
    for (const period of data.properties.periods) {
      // Check each phrase in the list
      for (const phrase in phrasesToIcons) {
        if (period.shortForecast.toLowerCase().includes(phrase.toLowerCase())) {
          // If a match is found, set the src attribute of the img tag and break out of the loop
          const iconPath = phrasesToIcons[phrase];
          const img = document.getElementById('chicago-icon');
          img.src = iconPath;
          break;
        }
      }
    }
  })
  .catch(error => console.error('Error fetching or parsing weather data:', error));
















// green-bay

// Fetch data from the API
  fetch('https://api.weather.gov/gridpoints/GRB/44,88/forecast/hourly?units=us')
      .then(response => response.json())
      .then(data => {
          // Extract temperature information from the first period
          const temperature = data.properties.periods[0].temperature;

          // Display the temperature in the weather-info paragraph
          document.getElementById('green-bay').innerText = ` ${temperature}`;
      })
      .catch(error => console.error('Error fetching weather data:', error));

// Fetch JSON from the provided API
fetch('https://api.weather.gov/gridpoints/GRB/44,88/forecast/hourly?units=us')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Phrases to look for and corresponding icon paths
    const phrasesToIcons = {
      'Mostly Cloudy': 'https://1990s-weather-channel.vercel.app/img/icons/PartlyCloudy1.gif',
      'cloudy': 'img/icons/Cloudy.gif',
      'windy': 'img/icons/Windy.gif',
      'snowy': 'img/icons/Snowy.gif',
      'rainy': 'img/icons/Rain.gif',
      'clear': 'img/icons/Clear0.gif',
      // Add more phrases and icon paths as needed
    };

    // Find the matching phrase for each forecast period
    for (const period of data.properties.periods) {
      // Check each phrase in the list
      for (const phrase in phrasesToIcons) {
        if (period.shortForecast.toLowerCase().includes(phrase.toLowerCase())) {
          // If a match is found, set the src attribute of the img tag and break out of the loop
          const iconPath = phrasesToIcons[phrase];
          const img = document.getElementById('green-bay-icon');
          img.src = iconPath;
          break;
        }
      }
    }
  })
  .catch(error => console.error('Error fetching or parsing weather data:', error));


















// eau-claire

// Fetch data from the API
  fetch('https://api.weather.gov/gridpoints/FGF/45,91/forecast/hourly?units=us')
      .then(response => response.json())
      .then(data => {
          // Extract temperature information from the first period
          const temperature = data.properties.periods[0].temperature;

          // Display the temperature in the weather-info paragraph
          document.getElementById('eau-claire').innerText = ` ${temperature}`;
      })
      .catch(error => console.error('Error fetching weather data:', error));

// Fetch JSON from the provided API
fetch('https://api.weather.gov/gridpoints/FGF/45,91/forecast/hourly?units=us')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Phrases to look for and corresponding icon paths
    const phrasesToIcons = {
      'Mostly Cloudy': 'https://1990s-weather-channel.vercel.app/img/icons/PartlyCloudy1.gif',
      'cloudy': 'img/icons/Cloudy.gif',
      'windy': 'img/icons/Windy.gif',
      'snowy': 'img/icons/Snowy.gif',
      'rainy': 'img/icons/Rain.gif',
      'clear': 'img/icons/Clear0.gif',
      // Add more phrases and icon paths as needed
    };

    // Find the matching phrase for each forecast period
    for (const period of data.properties.periods) {
      // Check each phrase in the list
      for (const phrase in phrasesToIcons) {
        if (period.shortForecast.toLowerCase().includes(phrase.toLowerCase())) {
          // If a match is found, set the src attribute of the img tag and break out of the loop
          const iconPath = phrasesToIcons[phrase];
          const img = document.getElementById('eau-claire-icon');
          img.src = iconPath;
          break;
        }
      }
    }
  })
  .catch(error => console.error('Error fetching or parsing weather data:', error));
