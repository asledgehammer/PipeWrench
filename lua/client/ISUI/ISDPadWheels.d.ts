/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    export abstract class ISDPadWheels {
      static [id: string]: any;

      /** @noSelf */
      static onDisplayDown: (joypadData: any) => any;

      /** @noSelf */
      static onDisplayLeft: (joypadData: any) => any;

      /** @noSelf */
      static onDisplayRight: (joypadData: any) => any;

      /** @noSelf */
      static onDisplayUp: (joypadData: any) => any;

      /** @noSelf */
      static onEquipPrimary: (playerObj: any, item: any) => any;

      /** @noSelf */
      static onShout: (playerObj: any) => any;

      /** @noSelf */
      static onToggleLight: (playerObj: any, item: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISDPadWheels {}
}
