/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Movers {
    /** @customConstructor Rabbit:new */
    export class Rabbit extends lua.server.Movers.ISBaseMover {
      [id: string]: any;
      static [id: string]: any;

      constructor();
    }
  }
  export namespace lua.server.Movers.Rabbit {
    /** @noSelf */
    export const testCreateRabbit: () => any;
  }
}
