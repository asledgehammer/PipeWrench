/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Farming.BuildingObjects {
    /** @customConstructor farmingPlot:new */
    export class farmingPlot extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      handItem: any;

      noNeedHammer: any;

      skipBuildAction: any;

      constructor(handItem: any, character: any);

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;
    }
  }
  export namespace lua.server.Farming.BuildingObjects.farmingPlot {}
}
