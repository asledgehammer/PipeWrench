/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles {
    export abstract class ISVehicleTrailerUtils {
      static [id: string]: any;

      /** @noSelf */
      static getTowableVehicleNear: (square: any, ignoreVehicle: any, attachmentA: any, attachmentB: any) => any;

      /** @noSelf */
      static onTrailerPathFail: (playerObj: any) => any;

      /** @noSelf */
      static walkToTrailer: (playerObj: any, vehicle: any, attachment: any, nextAction: any) => any;
    }
  }
  export namespace lua.client.Vehicles.ISVehicleTrailerUtils {}
}
