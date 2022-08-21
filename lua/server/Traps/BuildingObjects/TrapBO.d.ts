/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Traps.BuildingObjects {
    /** @customConstructor TrapBO:new */
    export class TrapBO extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      actionAnim: any;

      character: any;

      javaObject: any;

      name: any;

      noNeedHammer: any;

      player: any;

      sq: any;

      trap: any;

      constructor(player: any, trap: any);

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;
    }
  }
  export namespace lua.server.Traps.BuildingObjects.TrapBO {}
}
