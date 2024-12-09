/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Util {
    export abstract class BuildingHelper {
      static [id: string]: any;

      /** @noSelf */
      static getFreeTileFromBuilding: (building: any, ...__args: never[]) => any;

      /** @noSelf */
      static getFreeTilesFromRandomRoomInBuilding: (building: any, count: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.Util.BuildingHelper {}
}
