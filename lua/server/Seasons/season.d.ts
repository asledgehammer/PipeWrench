/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Seasons {
    export abstract class season {
      static [id: string]: any;

      /** @noSelf */
      static EveryTenMinutes: () => any;

      /** @noSelf */
      static load: () => any;

      /** @noSelf */
      static OnGameStart: () => any;

      /** @noSelf */
      static OnGameTimeLoaded: () => any;

      /** @noSelf */
      static save: () => any;

      /** @noSelf */
      static startRain: () => any;

      /** @noSelf */
      static updateAmbient: () => any;

      /** @noSelf */
      static updateBodyTemperature: () => any;

      /** @noSelf */
      static updateMoonPhase: () => any;

      /** @noSelf */
      static updateMoonState: (currentHour: any, month: any) => any;

      /** @noSelf */
      static updateRain: () => any;

      /** @noSelf */
      static updateWeather: (month: any, currentHour: any) => any;

      /** @noSelf */
      static updateWeatherIcon: () => any;
    }
  }
  export namespace lua.server.Seasons.season {}
}
