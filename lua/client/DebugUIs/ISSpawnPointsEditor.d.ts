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
    /** @customConstructor ISSpawnPointsEditor:new */
    export class ISSpawnPointsEditor extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      mapList: any;

      pointList: any;

      professionList: any;

      constructor();

      doDrawPointListItem: ((y: any, item: any, alt: any) => any) | any;

      fillMapList: (() => any) | any;

      isSamePoint: ((point1: any, point2: any) => any) | any;

      onCopyToClipboard: (() => any) | any;

      onMapSelected: ((directory: any) => any) | any;

      onPointDoubleClick: ((item: any) => any) | any;

      onPointSelected: (() => any) | any;

      onProfessionSelected: (() => any) | any;

      onRemovePoint: ((allProfessions: any) => any) | any;

      onSetPointToPlayerPosition: ((allProfessions: any) => any) | any;

      PointList_onRightMouseUp: ((x: any, y: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.ISSpawnPointsEditor {}
}
