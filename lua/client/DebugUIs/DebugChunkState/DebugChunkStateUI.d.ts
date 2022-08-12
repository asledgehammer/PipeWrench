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
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.DebugUIs.DebugChunkState {
    /** @customConstructor DebugChunkStateUI:new */
    export class DebugChunkStateUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonExit: any;

      buttonOptions: any;

      comboPlayerIndex: any;

      currentTool: any;

      dragCameraTool: any;

      gameState: any;

      mouseDown: any;

      mouseDownX: any;

      mouseDownY: any;

      mouseMoved: any;

      objectList: any;

      objectListSquare: any;

      objectPickerPanel: any;

      objectSections: any;

      objPropsPanel: any;

      optionsPanel: any;

      selectedSquare: any;

      squarePanel: any;

      toolBar: any;

      vehicleStoryPanel: any;

      zLevelSlider: any;

      constructor(x: any, y: any, width: any, height: any, gameState: any);

      createChildren: (() => any) | any;

      doDrawObjectListItem: ((y: any, item: any, alt: any) => any) | any;

      isMouseOverChild: (() => any) | any;

      onCamera: (() => any) | any;

      onChangePlayer: (() => any) | any;

      onChangeZLevel: ((value: any, slider: any) => any) | any;

      onExit: (() => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onOptions: (() => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      pickSquare: ((x: any, y: any) => any) | any;

      setObjectList: ((square: any, x: any, y: any, z: any) => any) | any;

      showUI: (() => any) | any;

      update: (() => any) | any;

      updateObjectList: (() => any) | any;

      updateObjectProps: (() => any) | any;
    }

    /** @customConstructor DebugChunkStateUI_OptionsPanel:new */
    export class DebugChunkStateUI_OptionsPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      gameState: any;

      tickBox: any;

      constructor(x: any, y: any, width: any, height: any, gameState: any);

      createChildren: (() => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      onTickBox: ((index: any, selected: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugChunkState.DebugChunkStateUI {}
}
