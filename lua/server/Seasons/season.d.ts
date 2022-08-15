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
 */

/**  @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />

declare module '@shughesuk/pipewrench' {
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
  export namespace lua.server.Seasons.season { }
}
