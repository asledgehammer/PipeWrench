/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Farming.BuildingObjects {
    /** @customConstructor ISFarmingCursorMouse:new */
    export class ISFarmingCursorMouse extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      isValid: any;

      noNeedHammer: any;

      onSquareSelected: any;

      player: any;

      skipBuildAction: any;

      sq: any;

      tooltip: any;

      constructor(character: any, onSquareSelected: any, isValid: any);

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      hideTooltip(...__args: never[]): any;

      renderTooltip(...__args: never[]): any;

      /** @noSelf */
      static IsVisible: (...__args: never[]) => any;
    }
  }
  export namespace lua.server.Farming.BuildingObjects.ISFarmingCursorMouse {}
}
