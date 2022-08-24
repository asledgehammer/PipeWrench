/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.ISUI {
    export abstract class ISVehicleRegulator {
      static [id: string]: any;

      /** @noSelf */
      static onJoypadPressDown: (joypadData: any) => any;

      /** @noSelf */
      static onJoypadPressUp: (joypadData: any) => any;

      /** @noSelf */
      static onJoypadPressX: (buttonPrompt: any, joypadData: any) => any;

      /** @noSelf */
      static onJoypadReleaseX: (joypadData: any) => any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleRegulator {}
}
