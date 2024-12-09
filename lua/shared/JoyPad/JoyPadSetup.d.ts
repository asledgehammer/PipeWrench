/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      clearJoypad(...__args: never[]): any;

      onPauseButtonPressed(...__args: never[]): any;

      onPressButton(button: any, ...__args: never[]): any;

      onPressButtonNoFocus(button: any, ...__args: never[]): any;

      onPressDown(...__args: never[]): any;

      onPressLeft(...__args: never[]): any;

      onPressRight(...__args: never[]): any;

      onPressUp(...__args: never[]): any;

      onReleaseButton(button: any, ...__args: never[]): any;

      onReleaseDown(...__args: never[]): any;

      onReleaseLeft(...__args: never[]): any;

      onReleaseRight(...__args: never[]): any;

      onReleaseUp(...__args: never[]): any;

      setJoypad(joypadData: any, ...__args: never[]): any;

      update(time: any, ...__args: never[]): any;
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

      clearController(...__args: never[]): any;

      isConnected(...__args: never[]): any;

      setActive(isActive: any, ...__args: never[]): any;

      setController(controller: any, ...__args: never[]): any;
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
      static getMainMenuJoypad: (...__args: never[]) => any;

      /** @noSelf */
      static onCoopJoinFailed: (playerNum: any, ...__args: never[]) => any;

      /** @noSelf */
      static onGamepadConnect: (id: any, ...__args: never[]) => any;

      /** @noSelf */
      static onGamepadDisconnect: (id: any, ...__args: never[]) => any;

      /** @noSelf */
      static onGameStart: (...__args: never[]) => any;

      /** @noSelf */
      static onPlayerDeath: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRenderUI: (...__args: never[]) => any;

      /** @noSelf */
      static restoreAllFocus: (...__args: never[]) => any;

      /** @noSelf */
      static saveAllFocus: (...__args: never[]) => any;

      /** @noSelf */
      static useKeyboardMouse: (...__args: never[]) => any;
    }
  }
  export namespace lua.shared.JoyPad.JoyPadSetup {}
}
