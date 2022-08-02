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
 * File generated at: 2022-08-02T05:43:53.809Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor ISGameSounds:new */
    export class ISGameSounds extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      addY: any;

      buttonClose: any;

      buttonReload: any;

      joyfocus: any;

      mainPanel: any;

      maxLabelWidth: any;

      previewControl: any;

      tabs: any;

      volumesChanged: any;

      constructor(x: any, y: any, width: any, height: any);

      addCombo:
        | ((x: any, y: any, w: any, h: any, name: any, options: any, selected: any, target: any, onchange: any) => any)
        | any;

      addPage: ((name: any) => any) | any;

      addVolumeControl:
        | ((x: any, y: any, w: any, h: any, name: any, volume: any, target: any, onchange: any) => any)
        | any;

      createChildren: (() => any) | any;

      onClose: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onReload: (() => any) | any;

      onReturnToGame: (() => any) | any;

      onStopSound: (() => any) | any;

      onVolumeChanged: ((control: any, volume: any) => any) | any;

      static onPlaySound: ((args: any) => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.ISGameSounds {}
}
