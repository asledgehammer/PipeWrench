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
