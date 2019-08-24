class Weather {
  constructor(city, state) {
    this.city = city;
    this.state = state;
    this.api_key = '1b0ac153c15b4dafa46151053192408';
  }

  // Fetch Weather from API
  async getWeather() {
    const url = `https://api.apixu.com/v1/current.json?key=${this.api_key}&q=${Weather.urlEncode(this.city)},${Weather.urlEncode(this.state)}`;
    const response = await fetch(url);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }

  static urlEncode(str) {
    return str.split('').map((letter) => (letter === ' ' ? '%20' : letter)).join('');
  }
}
