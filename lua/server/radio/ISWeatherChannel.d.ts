/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.radio {
    export abstract class WeatherChannel {
      static [id: string]: any;

      /** @noSelf */
      static AddExtremesForecasting: (_c: any, _bc: any, offset: any, _len: any) => any;

      /** @noSelf */
      static AddForecast: (_c: any, _bc: any, _forecast: any, _prefix: any, _doFog: any) => any;

      /** @noSelf */
      static AddForecasting: (_c: any, _bc: any, _hour: any) => any;

      /** @noSelf */
      static AddFuzz: (_c: any, _bc: any, _chance: any) => any;

      /** @noSelf */
      static AddPowerNotice: (_c: any, _bc: any, _force: any) => any;

      /** @noSelf */
      static CreateBroadcast: (_gametime: any) => any;

      /** @noSelf */
      static FillBroadcast: (_gametime: any, _bc: any) => any;

      /** @noSelf */
      static GetDaySegmentForHour: (_hour: any) => any;

      /** @noSelf */
      static GetForecastString: (_type: any, _forecast: any) => any;

      /** @noSelf */
      static GetRandomString: (_c: any, _bc: any, _doItThreshold: any, _forceRand: any) => any;

      /** @noSelf */
      static Init: () => any;

      /** @noSelf */
      static OnEveryHour: (_channel: any, _gametime: any, _radio: any) => any;

      /** @noSelf */
      static OnLoadRadioScripts: () => any;

      /** @noSelf */
      static TestAll: (_gametime: any, _bc: any) => any;
    }
  }
  export namespace lua.server.radio.ISWeatherChannel {}
}
