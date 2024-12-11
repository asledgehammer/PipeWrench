/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.HealthSystem {
    export abstract class healthUpdate {
      static [id: string]: any;

      /** @noSelf */
      static getBrokenWindow: (feeler: any, ...__args: never[]) => any;

      /** @noSelf */
      static scratchFromWindow: (feeler: any, ...__args: never[]) => any;

      /** @noSelf */
      static update: (...__args: never[]) => any;
    }
  }
  export namespace lua.server.HealthSystem.HealthUpdate {}
}
