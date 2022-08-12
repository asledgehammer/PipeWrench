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

/** @noResolution @noSelfInFile */
/// <reference path="../../../../../reference.d.ts" />
/// <reference path="../../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs.DebugMenu.IsoRegions {
    /** @customConstructor IsoRegionDetails:new */
    export class IsoRegionDetails extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      static lastX: any;

      static lastY: any;

      canvasY: any;

      currentTile: any;

      greyCol: any;

      hotKeyPanels: any;

      isJoypadWindow: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerNum: any;

      richtext: any;

      subFocus: any;

      tmpTxt: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addLine: ((_prefix: any, _line: any) => any) | any;

      addLineEnd: (() => any) | any;

      addTitle: ((_title: any) => any) | any;

      clear: (() => any) | any;

      onButton: ((_btn: any) => any) | any;

      onResize: (() => any) | any;

      readRegion: ((_x: any, _y: any, _z: any, _o: any) => any) | any;

      stayOnSplitScreen: (() => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: () => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionDetails {}
}
