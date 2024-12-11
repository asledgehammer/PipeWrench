/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    export abstract class ISJoystickButtonRadialMenu {
      static [id: string]: any;

      /** @noSelf */
      static displayLeft: (joypadData: any, ...__args: never[]) => any;

      /** @noSelf */
      static onJoypadButtonReleased: (button: any, joypadData: any, ...__args: never[]) => any;

      /** @noSelf */
      static onJoypadDown: (button: any, joypadData: any, ...__args: never[]) => any;

      /** @noSelf */
      static onRepeatLeftStickButton: (joypadData: any, ...__args: never[]) => any;

      /** @noSelf */
      static onToggleAutoWalk: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onToggleCrouch: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onToggleSit: (playerObj: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISJoystickButtonRadialMenu {}
}
