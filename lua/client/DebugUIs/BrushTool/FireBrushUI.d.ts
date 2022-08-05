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
 * File generated at: 2022-08-04T23:00:32.807Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs.BrushTool {
    /** @customConstructor FireBrushUI:new */
    export class FireBrushUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      addByArea: any;

      addByClick: any;

      brushType: any;

      close: any;

      endPos: any;

      isAdd: any;

      player: any;

      removeByArea: any;

      removeByClick: any;

      selectByClick: any;

      selectEnd: any;

      selectStart: any;

      startPos: any;

      titlebarbkg: any;

      zPos: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addExplosion: ((square: any) => any) | any;

      addFire: ((square: any) => any) | any;

      addSmoke: ((square: any) => any) | any;

      applyOnArea: (() => any) | any;

      destroy: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      removeFire: ((square: any) => any) | any;

      removeSmoke: ((square: any) => any) | any;

      render: (() => any) | any;

      /** @noSelf */
      static openPanel: (x: any, y: any, playerObj: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.BrushTool.FireBrushUI {}
}
