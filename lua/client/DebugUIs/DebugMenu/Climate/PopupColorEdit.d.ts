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
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor PopupColorEdit:new */
    export class PopupColorEdit extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      buttonBorderColor: any;

      firstRun: any;

      floats: any;

      optionControls: any;

      panelTitle: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, title: any);

      addColorOption: ((_id: any, _color: any, _x: any, _y: any, _w: any) => any) | any;

      addFloatOption: ((_id: any, _float: any, _x: any, _y: any, _w: any) => any) | any;

      addSlider: ((_id: any, _x: any, _y: any, _w: any, _title: any) => any) | any;

      createChildren: (() => any) | any;

      onClick: ((_button: any) => any) | any;

      onFloatSliderChange: ((_newval: any, _slider: any) => any) | any;

      onSliderChange: ((_newval: any, _slider: any) => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: (_colorInfo: any, _parent: any, _ambient: any, _desat: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.PopupColorEdit {}
}
