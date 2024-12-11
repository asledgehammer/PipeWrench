/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Seasons {
    export abstract class season {
      static [id: string]: any;

      /** @noSelf */
      static EveryTenMinutes: (...__args: never[]) => any;

      /** @noSelf */
      static load: (...__args: never[]) => any;

      /** @noSelf */
      static OnGameStart: (...__args: never[]) => any;

      /** @noSelf */
      static OnGameTimeLoaded: (...__args: never[]) => any;

      /** @noSelf */
      static save: (...__args: never[]) => any;

      /** @noSelf */
      static startRain: (...__args: never[]) => any;

      /** @noSelf */
      static updateAmbient: (...__args: never[]) => any;

      /** @noSelf */
      static updateBodyTemperature: (...__args: never[]) => any;

      /** @noSelf */
      static updateMoonPhase: (...__args: never[]) => any;

      /** @noSelf */
      static updateMoonState: (currentHour: any, month: any, ...__args: never[]) => any;

      /** @noSelf */
      static updateRain: (...__args: never[]) => any;

      /** @noSelf */
      static updateWeather: (month: any, currentHour: any, ...__args: never[]) => any;

      /** @noSelf */
      static updateWeatherIcon: (...__args: never[]) => any;
    }
  }
  export namespace lua.server.Seasons.season {}
}
