/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    export abstract class ISJoystickButtonRadialMenu {
      static [id: string]: any;

      /** @noSelf */
      static displayLeft: (joypadData: any) => any;

      /** @noSelf */
      static onJoypadButtonReleased: (button: any, joypadData: any) => any;

      /** @noSelf */
      static onJoypadDown: (button: any, joypadData: any) => any;

      /** @noSelf */
      static onRepeatLeftStickButton: (joypadData: any) => any;

      /** @noSelf */
      static onToggleAutoWalk: (playerObj: any) => any;

      /** @noSelf */
      static onToggleCrouch: (playerObj: any) => any;

      /** @noSelf */
      static onToggleSit: (playerObj: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISJoystickButtonRadialMenu {}
}
