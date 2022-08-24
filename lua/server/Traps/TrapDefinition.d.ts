/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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
