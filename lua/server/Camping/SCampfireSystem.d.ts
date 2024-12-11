/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Camping {
    /** @customConstructor SCampfireSystem:new */
    export class SCampfireSystem extends lua.server.Map.SGlobalObjectSystem {
      [id: string]: any;
      static [id: string]: any;

      constructor();

      addCampfire(grid: any, ...__args: never[]): any;

      convertOldModData(...__args: never[]): any;

      isValidModData(modData: any, ...__args: never[]): any;

      lowerFirelvl(...__args: never[]): any;

      lowerFuelAmount(...__args: never[]): any;

      nearCamp(delay: any, ...__args: never[]): any;

      removeCampfire(luaObject: any, ...__args: never[]): any;
    }
  }
  export namespace lua.server.Camping.SCampfireSystem {}
}
