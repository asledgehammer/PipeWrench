/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.ISUI {
    export abstract class ISVehicleRegulator {
      static [id: string]: any;

      /** @noSelf */
      static onJoypadPressDown: (joypadData: any, ...__args: never[]) => any;

      /** @noSelf */
      static onJoypadPressUp: (joypadData: any, ...__args: never[]) => any;

      /** @noSelf */
      static onJoypadPressX: (buttonPrompt: any, joypadData: any, ...__args: never[]) => any;

      /** @noSelf */
      static onJoypadReleaseX: (joypadData: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleRegulator {}
}
