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
 * File generated at: 2022-08-04T23:00:34.414Z
 */

/** @noResolution @noSelfInFile */
/// <reference path="../../../../reference.d.ts" />
/// <reference path="../../../../PipeWrench.d.ts" />
import * as PipeWrench from 'PipeWrench';

declare module 'PipeWrench' {
  export namespace lua.client.ISUI.AdminPanel {
    /** @customConstructor ISWhitelistViewer:new */
    export class ISWhitelistViewer extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      activeView: any;

      buttonBorderColor: any;

      canModify: any;

      close: any;

      delete: any;

      modify: any;

      panel: any;

      refreshBtn: any;

      schema: any;

      constructor(x: any, y: any, width: any, height: any);

      closeSelf: (() => any) | any;

      createChildren: (() => any) | any;

      onActivateView: (() => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      onRemove: ((button: any, view: any) => any) | any;

      refresh: (() => any) | any;

      refreshButtons: (() => any) | any;

      render: (() => any) | any;

      /** @noSelf */
      static receiveDBSchema: (schema: any) => any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.ISWhitelistViewer {}
}
