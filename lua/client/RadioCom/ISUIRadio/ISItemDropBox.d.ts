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
  export namespace lua.client.RadioCom.ISUIRadio {
    /** @customConstructor ISItemDropBox:new */
    export class ISItemDropBox extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      backDropTex: any;

      backDropTexCol: any;

      backgroundColorHL: any;

      backgroundColorHLInv: any;

      backgroundColorHLVal: any;

      borderColorHL: any;

      borderColorHLInv: any;

      borderColorHLVal: any;

      boxOccupied: any;

      doBackDropTex: any;

      doHighlight: any;

      doInvalidHighlight: any;

      doToolTip: any;

      doValidHighlight: any;

      functionTarget: any;

      mouseEnabled: any;

      mouseOverState: any;

      onDragSelf: any;

      onItemDropped: any;

      onItemRemove: any;

      onVerifyItem: any;

      storedItem: any;

      storedItemTex: any;

      storeItem: any;

      toolTip: any;

      toolTipText: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        storeItem: any,
        target: any,
        onItemDropped: any,
        onItemRemove: any,
        onVerifyItem: any,
        onDragSelf: any
      );

      activateToolTip: (() => any) | any;

      createChildren: (() => any) | any;

      deactivateToolTip: (() => any) | any;

      defaultVerifyItem: ((_item: any) => any) | any;

      hasValidItemInDrag: (() => any) | any;

      itemDropped: ((_items: any) => any) | any;

      onRightMouseUp: ((x: any, y: any) => any) | any;

      render: (() => any) | any;

      setBackDropTex: ((_tex: any, _a: any, _r: any, _g: any, _b: any) => any) | any;

      setDoBackDropTex: ((_b: any) => any) | any;

      setHighlight:
        | ((arg0: any, _a: any, _r: any, _g: any, _b: any, _a2: any, _r2: any, _g2: any, _b2: any) => any)
        | any;

      setInvalidHighlight:
        | ((arg0: any, _a: any, _r: any, _g: any, _b: any, _a2: any, _r2: any, _g2: any, _b2: any) => any)
        | any;

      setStoredItem: ((_item: any) => any) | any;

      setStoredItemFake: ((_itemTex: any) => any) | any;

      setToolTip: ((_b: any, _text: any) => any) | any;

      setValidHighlight:
        | ((arg0: any, _a: any, _r: any, _g: any, _b: any, _a2: any, _r2: any, _g2: any, _b2: any) => any)
        | any;
    }
  }
  export namespace lua.client.RadioCom.ISUIRadio.ISItemDropBox {}
}
