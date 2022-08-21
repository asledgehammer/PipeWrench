/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.RainBarrel.BuildingObjects {
    /** @customConstructor RainCollectorBarrel:new */
    export class RainCollectorBarrel extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      javaObject: any;

      name: any;

      player: any;

      sq: any;

      waterMax: any;

      constructor(player: any, sprite: any, waterMax: any);

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      getHealth: (() => any) | any;
    }
  }
  export namespace lua.server.RainBarrel.BuildingObjects.RainCollectorBarrel {}
}
