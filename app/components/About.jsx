var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className='text-center'>About</h1>
      <p>I have built this app for The Complete React Web App.</p>
      <ul>
        <li>
          <a href='https://facebook.github.io/react'>React</a> - A JavaScript framework for building
            user interfaces.
        </li>
        <li>
          <a href='http://openweathermap.org'>Open Weather Map</a> - Weather data is provided by
            OpenWeatherMap.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
