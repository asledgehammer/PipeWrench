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
  export namespace lua.client.DebugUIs.DebugMenu.General {
    /** @customConstructor ISGameDebugPanel:new */
    export class ISGameDebugPanel extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      boolOptions: any;

      buttons: any;

      sliderOptions: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      addBoolOption: ((_title: any, _tag: any) => any) | any;

      addButtonInfo: ((_title: any, _command: any, _marginBot: any) => any) | any;

      addSliderOption: ((_java: any, _var: any, _min: any, _max: any, _step: any, _get: any, _set: any) => any) | any;

      createChildren: (() => any) | any;

      initialise: (() => any) | any;

      onClick: ((_button: any) => any) | any;

      onSliderChange: ((_newval: any, _slider: any) => any) | any;

      onTicked: ((_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any) => any) | any;

      onTickedValue: ((_index: any, _selected: any, _arg1: any, _arg2: any, _tickbox: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.General.ISGameDebugPanel {}
}
