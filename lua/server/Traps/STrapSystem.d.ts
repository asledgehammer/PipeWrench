/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Traps {
    /** @customConstructor STrapSystem:new */
    export class STrapSystem extends lua.server.Map.SGlobalObjectSystem {
      [id: string]: any;
      static [id: string]: any;

      static removedCache: any;

      constructor();

      convertOldModData(...__args: never[]): any;

      /** @noSelf */
      static addSound: (...__args: never[]) => any;

      /** @noSelf */
      static checkTrap: (...__args: never[]) => any;

      /** @noSelf */
      static EveryDays: (...__args: never[]) => any;

      /** @noSelf */
      static isValidModData: (modData: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.Traps.STrapSystem {}
}
