/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Foraging {
    export abstract class forageDefaultDefs {
      static [id: string]: any;
    }

    export abstract class forageDefs {
      static [id: string]: any;
    }
  }
  export namespace lua.shared.Foraging.forageDefinitions {}
}
