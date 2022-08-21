/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.HealthSystem {
    export abstract class healthUpdate {
      static [id: string]: any;

      /** @noSelf */
      static getBrokenWindow: (feeler: any) => any;

      /** @noSelf */
      static scratchFromWindow: (feeler: any) => any;

      /** @noSelf */
      static update: () => any;
    }
  }
  export namespace lua.server.HealthSystem.HealthUpdate {}
}
