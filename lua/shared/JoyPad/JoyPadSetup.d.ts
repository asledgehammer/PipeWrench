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

declare module 'PipeWrench' {
  export namespace lua.shared.JoyPad {
    /** @customConstructor JoypadControllerData:new */
    export class JoypadControllerData extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      connected: any;

      id: any;

      joypad: any;

      pressed: any;

      wasPressed: any;

      constructor(id: any);

      clearJoypad: (() => any) | any;

      onPauseButtonPressed: (() => any) | any;

      onPressButton: ((button: any) => any) | any;

      onPressButtonNoFocus: ((button: any) => any) | any;

      onPressDown: (() => any) | any;

      onPressLeft: (() => any) | any;

      onPressRight: (() => any) | any;

      onPressUp: (() => any) | any;

      onReleaseButton: ((button: any) => any) | any;

      onReleaseDown: (() => any) | any;

      onReleaseLeft: (() => any) | any;

      onReleaseRight: (() => any) | any;

      onReleaseUp: (() => any) | any;

      setJoypad: ((joypadData: any) => any) | any;

      update: ((time: any) => any) | any;
    }

    /** @customConstructor JoypadData:new */
    export class JoypadData extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      controller: any;

      focus: any;

      id: any;

      inMainMenu: any;

      isActive: any;

      lastfocus: any;

      listBox: any;

      player: any;

      prevfocus: any;

      prevprevfocus: any;

      constructor();

      clearController: (() => any) | any;

      isConnected: (() => any) | any;

      setActive: ((isActive: any) => any) | any;

      setController: ((controller: any) => any) | any;
    }

    export abstract class joypad {
      static [id: string]: any;
    }

    export abstract class Joypad {
      static [id: string]: any;
    }

    export abstract class JoypadState {
      static [id: string]: any;

      static controllerTest: any;

      static disableClimbOver: any;

      static disableControllerPrompt: any;

      static disableGrab: any;

      static disableInvInteraction: any;

      static disableMovement: any;

      static disableReload: any;

      static disableSmashWindow: any;

      static disableYInventory: any;

      static forceActivate: any;

      /** @noSelf */
      static getMainMenuJoypad: () => any;

      /** @noSelf */
      static onCoopJoinFailed: (playerNum: any) => any;

      /** @noSelf */
      static onGamepadConnect: (id: any) => any;

      /** @noSelf */
      static onGamepadDisconnect: (id: any) => any;

      /** @noSelf */
      static onGameStart: () => any;

      /** @noSelf */
      static onPlayerDeath: (playerObj: any) => any;

      /** @noSelf */
      static onRenderUI: () => any;

      /** @noSelf */
      static restoreAllFocus: () => any;

      /** @noSelf */
      static saveAllFocus: () => any;

      /** @noSelf */
      static useKeyboardMouse: () => any;
    }
  }
  export namespace lua.shared.JoyPad.JoyPadSetup {}
}
