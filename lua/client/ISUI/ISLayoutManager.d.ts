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

/**  @noSelfInFile */
/// <reference path="../../../reference.d.ts" />
/// <reference path="../../../PipeWrench.d.ts" />

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    export abstract class ISLayoutManager {
      static [id: string]: any;

      static enableLog: any;

      /** @noSelf */
      static CallRestoreLayout: (name: any, layout: any) => any;

      /** @noSelf */
      static CallSaveLayout: (name: any, layout: any) => any;

      /** @noSelf */
      static DefaultRestoreWindow: (window: any, layout: any) => any;

      /** @noSelf */
      static DefaultSaveWindow: (window: any, layout: any) => any;

      /** @noSelf */
      static FindResizeWidget: (window: any) => any;

      /** @noSelf */
      static OnPostSave: () => any;

      /** @noSelf */
      static ReadIni: () => any;

      /** @noSelf */
      static RegisterWindow: (name: any, funcs: any, target: any) => any;

      /** @noSelf */
      static SaveLayout: (name: any, window: any) => any;

      /** @noSelf */
      static SaveWindowVisible: (window: any, layout: any) => any;

      /** @noSelf */
      static TryRestore: (name: any) => any;

      /** @noSelf */
      static WriteIni: () => any;
    }
  }
  export namespace lua.client.ISUI.ISLayoutManager { }
}
