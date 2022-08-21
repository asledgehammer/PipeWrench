/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Farming {
    /** @customConstructor CFarmingSystem:new */
    export class CFarmingSystem extends lua.client.Map.CGlobalObjectSystem {
      [id: string]: any;
      static [id: string]: any;

      hoursElapsed: any;

      constructor();

      changePlayer: ((player: any) => any) | any;

      gainXp: ((player: any, luaObject: any) => any) | any;

      getXp: ((character: any) => any) | any;
    }
  }
  export namespace lua.client.Farming.CFarmingSystem {}
}
