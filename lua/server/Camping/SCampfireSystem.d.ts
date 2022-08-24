/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Camping {
    /** @customConstructor SCampfireSystem:new */
    export class SCampfireSystem extends lua.server.Map.SGlobalObjectSystem {
      [id: string]: any;
      static [id: string]: any;

      constructor();

      addCampfire: ((grid: any) => any) | any;

      convertOldModData: (() => any) | any;

      isValidModData: ((modData: any) => any) | any;

      lowerFirelvl: (() => any) | any;

      lowerFuelAmount: (() => any) | any;

      nearCamp: ((delay: any) => any) | any;

      removeCampfire: ((luaObject: any) => any) | any;
    }
  }
  export namespace lua.server.Camping.SCampfireSystem {}
}
