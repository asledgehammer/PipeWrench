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
 * File generated at: 2022-08-03T17:20:42.603Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../reference.d.ts" />
/// <reference path="../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.server {
    export class ISObjectClickHandler {
      private constructor();

      static [id: string]: any;

      static doClick: ((object: any, x: any, y: any) => any) | any;

      static doClickCurtain: ((object: any, playerNum: any, playerObj: any) => any) | any;

      static doClickDoor: ((object: any, playerNum: any, playerObj: any) => any) | any;

      static doClickLightSwitch: ((object: any, playerNum: any, playerObj: any) => any) | any;

      static doClickSpecificObject: ((object: any, playerNum: any, playerObj: any) => any) | any;

      static doClickThumpable: ((object: any, playerNum: any, playerObj: any) => any) | any;

      static doClickWindow: ((object: any, playerNum: any, playerObj: any) => any) | any;

      static doDoubleClick: ((object: any, x: any, y: any) => any) | any;

      static doRClick: ((object: any, x: any, y: any) => any) | any;

      static doRDoubleClick: ((object: any, x: any, y: any) => any) | any;

      static onObjectLeftMouseButtonDown: ((object: any, x: any, y: any) => any) | any;

      static onObjectLeftMouseButtonUp: ((object: any, x: any, y: any) => any) | any;

      static onObjectRightMouseButtonDown: ((object: any, x: any, y: any) => any) | any;

      static onObjectRightMouseButtonUp: ((object: any, x: any, y: any) => any) | any;

      static onTick: (() => any) | any;
    }
  }
  export namespace lua.server.ISObjectClickHandler {}
}
