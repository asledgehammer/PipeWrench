/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    export abstract class ISDPadWheels {
      static [id: string]: any;

      /** @noSelf */
      static onDisplayDown: (joypadData: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDisplayLeft: (joypadData: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDisplayRight: (joypadData: any, ...__args: never[]) => any;

      /** @noSelf */
      static onDisplayUp: (joypadData: any, ...__args: never[]) => any;

      /** @noSelf */
      static onEquipPrimary: (playerObj: any, item: any, ...__args: never[]) => any;

      /** @noSelf */
      static onShout: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static onToggleLight: (playerObj: any, item: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISDPadWheels {}
}
