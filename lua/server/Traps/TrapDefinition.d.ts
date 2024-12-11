/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Traps {
    export abstract class Animals {
      static [id: string]: any;
    }

    export abstract class Traps {
      static [id: string]: any;
    }
  }
  export namespace lua.server.Traps.TrapDefinition {}
}
