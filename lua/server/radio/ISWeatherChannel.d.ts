/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.radio {
    export abstract class WeatherChannel {
      static [id: string]: any;

      /** @noSelf */
      static AddExtremesForecasting: (_c: any, _bc: any, offset: any, _len: any, ...__args: never[]) => any;

      /** @noSelf */
      static AddForecast: (_c: any, _bc: any, _forecast: any, _prefix: any, _doFog: any, ...__args: never[]) => any;

      /** @noSelf */
      static AddForecasting: (_c: any, _bc: any, _hour: any, ...__args: never[]) => any;

      /** @noSelf */
      static AddFuzz: (_c: any, _bc: any, _chance: any, ...__args: never[]) => any;

      /** @noSelf */
      static AddPowerNotice: (_c: any, _bc: any, _force: any, ...__args: never[]) => any;

      /** @noSelf */
      static CreateBroadcast: (_gametime: any, ...__args: never[]) => any;

      /** @noSelf */
      static FillBroadcast: (_gametime: any, _bc: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetDaySegmentForHour: (_hour: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetForecastString: (_type: any, _forecast: any, ...__args: never[]) => any;

      /** @noSelf */
      static GetRandomString: (_c: any, _bc: any, _doItThreshold: any, _forceRand: any, ...__args: never[]) => any;

      /** @noSelf */
      static Init: (...__args: never[]) => any;

      /** @noSelf */
      static OnEveryHour: (_channel: any, _gametime: any, _radio: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnLoadRadioScripts: (...__args: never[]) => any;

      /** @noSelf */
      static TestAll: (_gametime: any, _bc: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.radio.ISWeatherChannel {}
}
