/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Vehicles {
    export abstract class ProfessionVehicles {
      static [id: string]: any;

      /** @noSelf */
      static CheckSwap: (vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnCreateRegion: (region: any, square: any, direction: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.Vehicles.ProfessionVehicles {}
}
