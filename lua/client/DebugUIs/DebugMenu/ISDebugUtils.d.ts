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
 * File generated at: 2022-08-05T02:36:29.082Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs.DebugMenu {
    export abstract class ISDebugUtils {
      static [id: string]: any;

      /** @noSelf */
      static addButton: (_self: any, _data: any, _x: any, _y: any, _w: any, _h: any, _title: any, _func: any) => any;

      /** @noSelf */
      static addComboBox: (_self: any, _data: any, _x: any, _y: any, _w: any, _font: any, _func: any) => any;

      /** @noSelf */
      static addHorzBar: (_self: any, _y: any) => any;

      /** @noSelf */
      static addLabel: (_self: any, _data: any, _x: any, _y: any, _title: any, _font: any, _bLeft: any) => any;

      /** @noSelf */
      static addSlider: (_self: any, _data: any, _x: any, _y: any, _w: any, _h: any, _func: any) => any;

      /** @noSelf */
      static addTextEntryBox: (_self: any, _data: any, _title: any, _x: any, _y: any, _w: any, _h: any) => any;

      /** @noSelf */
      static addTickBox: (
        _self: any,
        _data: any,
        _x: any,
        _y: any,
        _w: any,
        _h: any,
        _title: any,
        options: any,
        _func: any
      ) => any;

      /** @noSelf */
      static clamp01: (_n: any) => any;

      /** @noSelf */
      static initHorzBars: (_self: any, _x: any, _width: any) => any;

      /** @noSelf */
      static onMouseWheel: (self: any, del: any) => any;

      /** @noSelf */
      static printval: (_v: any, _d: any) => any;

      /** @noSelf */
      static renderHorzBars: (_self: any) => any;

      /** @noSelf */
      static roundNum: (num: any, numDecimalPlaces: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.ISDebugUtils {}
}
