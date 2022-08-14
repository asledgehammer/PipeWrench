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
import * as PipeWrench from 'PipeWrench';

declare module '@shughesuk/pipewrench' {
  export namespace lua.shared.Logs {
    export abstract class ISLogSystem {
      static [id: string]: any;

      /** @noSelf */
      static getGenericLogText: (_character: any, _actionType: any) => any;

      /** @noSelf */
      static getObjectPosition: (_object: any) => any;

      /** @noSelf */
      static init: () => any;

      /** @noSelf */
      static logAction: (_action: any) => any;

      /** @noSelf */
      static OnClientCommand: (_module: any, _command: any, _plObj: any, _packet: any) => any;

      /** @noSelf */
      static sendLog: (_character: any, _loggerName: any, _logText: any) => any;

      /** @noSelf */
      static writeLog: (_character: any, _packet: any) => any;
    }
  }
  export namespace lua.shared.Logs.ISLogSystem { }
}
