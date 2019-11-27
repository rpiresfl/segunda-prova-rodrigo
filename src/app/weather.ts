export class Weather {

  weather_state_abbr: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;

  constructor(weather_state_abbr?: string, applicable_date?: string, min_temp?: number, max_temp?: number) {
    this.weather_state_abbr = weather_state_abbr;
    this.applicable_date = applicable_date;
    this.min_temp = min_temp;
    this.max_temp = max_temp;
  }
}
