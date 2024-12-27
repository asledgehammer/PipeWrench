/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Traps {
    export abstract class TrapSystem {
      static [id: string]: any;

      /** @noSelf */
      static initObjectModData: (isoObject: any, trapDef: any, north: any, player: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.Traps.TrapSystem {}
}
