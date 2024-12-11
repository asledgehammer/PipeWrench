/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles {
    export abstract class ISVehicleTrailerUtils {
      static [id: string]: any;

      /** @noSelf */
      static getTowableVehicleNear: (
        square: any,
        ignoreVehicle: any,
        attachmentA: any,
        attachmentB: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static onTrailerPathFail: (playerObj: any, ...__args: never[]) => any;

      /** @noSelf */
      static walkToTrailer: (playerObj: any, vehicle: any, attachment: any, nextAction: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Vehicles.ISVehicleTrailerUtils {}
}
