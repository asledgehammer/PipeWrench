/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Traps {
    /** @customConstructor STrapSystem:new */
    export class STrapSystem extends lua.server.Map.SGlobalObjectSystem {
      [id: string]: any;
      static [id: string]: any;

      static removedCache: any;

      constructor();

      convertOldModData: (() => any) | any;

      /** @noSelf */
      static addSound: () => any;

      /** @noSelf */
      static checkTrap: () => any;

      /** @noSelf */
      static EveryDays: () => any;

      /** @noSelf */
      static isValidModData: (modData: any) => any;
    }
  }
  export namespace lua.server.Traps.STrapSystem {}
}
