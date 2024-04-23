import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {Apollo} from "apollo-angular";
import {gql} from "@apollo/client";

interface WeatherResponse {
  getWeatherByCityName: {
    city: string;
    country: string;
    temperature: number;
    humidity: number;
    windSpeed: number;
  };
}
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private apollo: Apollo) { }

  getWeatherByCityName(city: string): Observable<WeatherResponse> {
    return this.apollo.watchQuery<WeatherResponse>({
      query: gql`
        query GetWeatherByCityName($city: String!) {
          getWeatherByCityName(city: $city) {
            city
            country
            temperature
            humidity
            windSpeed
          }
        }
      `,
      variables: {
        city
      }
    }).valueChanges.pipe(
      map(result => result.data)
    );
  }
}

