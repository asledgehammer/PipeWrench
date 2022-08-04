/*
 * MIT License
 *
 * Copyright (c) 2022 JabDoesThings
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * File generated at: 2022-08-04T20:14:47.290Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.server.radio {
    export class WeatherChannel {
      private constructor();

      static [id: string]: any;

      static AddExtremesForecasting: (_c: any, _bc: any, offset: any, _len: any) => any;

      static AddForecast: (_c: any, _bc: any, _forecast: any, _prefix: any, _doFog: any) => any;

      static AddForecasting: (_c: any, _bc: any, _hour: any) => any;

      static AddFuzz: (_c: any, _bc: any, _chance: any) => any;

      static AddPowerNotice: (_c: any, _bc: any, _force: any) => any;

      static CreateBroadcast: (_gametime: any) => any;

      static FillBroadcast: (_gametime: any, _bc: any) => any;

      static GetDaySegmentForHour: (_hour: any) => any;

      static GetForecastString: (_type: any, _forecast: any) => any;

      static GetRandomString: (_c: any, _bc: any, _doItThreshold: any, _forceRand: any) => any;

      static Init: () => any;

      static OnEveryHour: (_channel: any, _gametime: any, _radio: any) => any;

      static OnLoadRadioScripts: () => any;

      static TestAll: (_gametime: any, _bc: any) => any;
    }
  }
  export namespace lua.server.radio.ISWeatherChannel {}
}
