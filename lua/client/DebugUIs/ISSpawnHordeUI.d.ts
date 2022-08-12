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
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor ISSpawnHordeUI:new */
    export class ISSpawnHordeUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      add: any;

      arrow: any;

      boolOptions: any;

      chr: any;

      clearbodies: any;

      closeButton2: any;

      cursor: any;

      femaleOutfits: any;

      healthSlider: any;

      healthSliderLabel: any;

      healthSliderTitle: any;

      maleOutfits: any;

      marker: any;

      moveWithMouse: any;

      outfit: any;

      outfitLbl: any;

      pickNewSq: any;

      playerNum: any;

      radius: any;

      radiusLbl: any;

      removezombies: any;

      selectX: any;

      selectY: any;

      selectZ: any;

      zombiesNbr: any;

      zombiesNbrLabel: any;

      constructor(x: any, y: any, character: any, square: any);

      addMarker: ((square: any, radius: any) => any) | any;

      getOutfit: (() => any) | any;

      getRadius: (() => any) | any;

      getZombiesNumber: (() => any) | any;

      onBoolOptionsChange: ((index: any, selected: any) => any) | any;

      onRemoveBodies: (() => any) | any;

      onRemoveZombies: (() => any) | any;

      onSelectNewSquare: (() => any) | any;

      onSliderChange: ((_newval: any, _slider: any) => any) | any;

      onSpawn: (() => any) | any;

      onSquareSelected: ((square: any) => any) | any;

      removeMarker: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.ISSpawnHordeUI {}
}
