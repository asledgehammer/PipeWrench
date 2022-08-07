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
 * File generated at: 2022-08-07T18:22:54.977Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.Foraging {
    export abstract class forageClient {
      static [id: string]: any;

      /** @noSelf */
      static addZone: (_zoneData: any) => any;

      /** @noSelf */
      static clearData: () => any;

      /** @noSelf */
      static getZones: () => any;

      /** @noSelf */
      static init: () => any;

      /** @noSelf */
      static removeZone: (_zoneData: any) => any;

      /** @noSelf */
      static syncForageData: () => any;

      /** @noSelf */
      static updateData: () => any;

      /** @noSelf */
      static updateIcon: (_zoneData: any, _iconID: any, _icon: any) => any;

      /** @noSelf */
      static updateZone: (_zoneData: any) => any;
    }

    export abstract class forageData {
      static [id: string]: any;
    }
  }
  export namespace lua.client.Foraging.forageClient {}
}
