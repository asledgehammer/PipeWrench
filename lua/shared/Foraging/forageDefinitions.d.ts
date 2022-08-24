/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Foraging {
    export abstract class forageCategories {
      static [id: string]: any;
    }

    export abstract class forageDefaultDefs {
      static [id: string]: any;
    }

    export abstract class forageDefs {
      static [id: string]: any;
    }

    export abstract class forageSkills {
      static [id: string]: any;
    }

    export abstract class forageZones {
      static [id: string]: any;
    }

    export abstract class scavenges {
      static [id: string]: any;
    }
  }
  export namespace lua.shared.Foraging.forageDefinitions {}
}
