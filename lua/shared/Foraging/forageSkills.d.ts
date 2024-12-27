/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Foraging {
    export abstract class forageSkills {
      static [id: string]: any;
    }

    export abstract class forageZones {
      static [id: string]: any;
    }
  }
  export namespace lua.shared.Foraging.forageSkills {}
}
