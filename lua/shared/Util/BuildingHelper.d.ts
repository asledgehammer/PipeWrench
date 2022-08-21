/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Util {
    export abstract class BuildingHelper {
      static [id: string]: any;

      /** @noSelf */
      static getFreeTileFromBuilding: (building: any) => any;

      /** @noSelf */
      static getFreeTilesFromRandomRoomInBuilding: (building: any, count: any) => any;
    }
  }
  export namespace lua.shared.Util.BuildingHelper {}
}
