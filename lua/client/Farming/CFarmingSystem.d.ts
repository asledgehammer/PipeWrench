/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Farming {
    /** @customConstructor CFarmingSystem:new */
    export class CFarmingSystem extends lua.client.Map.CGlobalObjectSystem {
      [id: string]: any;
      static [id: string]: any;

      hoursElapsed: any;

      constructor();

      changePlayer(player: any, ...__args: never[]): any;

      gainXp(player: any, luaObject: any, ...__args: never[]): any;

      getXp(character: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Farming.CFarmingSystem {}
}
