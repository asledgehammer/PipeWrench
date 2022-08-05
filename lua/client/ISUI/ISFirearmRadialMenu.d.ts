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
 * File generated at: 2022-08-04T23:00:34.674Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISFirearmRadialMenu:new */
    export class ISFirearmRadialMenu extends lua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      playerNum: any;

      constructor(character: any);

      center: (() => any) | any;

      display: (() => any) | any;

      fillMenu: (() => any) | any;

      getWeapon: (() => any) | any;

      /** @noSelf */
      static checkKey: (key: any) => any;

      /** @noSelf */
      static checkWeapon: (playerObj: any) => any;

      /** @noSelf */
      static getBestLBButtonAction: (buttonPrompt: any) => any;

      /** @noSelf */
      static getBestRBButtonAction: (buttonPrompt: any) => any;

      /** @noSelf */
      static onJoypadButtonReleased: (buttonPrompt: any, button: any) => any;

      /** @noSelf */
      static onKeyPressed: (key: any) => any;

      /** @noSelf */
      static onKeyReleased: (key: any) => any;

      /** @noSelf */
      static onKeyRepeat: (key: any) => any;

      /** @noSelf */
      static onRepeatRBumper: (buttonPrompt: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISFirearmRadialMenu {}
}
