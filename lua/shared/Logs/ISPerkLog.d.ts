/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Logs {
    export abstract class ISPerkLog {
      static [id: string]: any;

      /** @noSelf */
      static init: (...__args: never[]) => any;

      /** @noSelf */
      static logAllPerks: (_character: any, ...__args: never[]) => any;

      /** @noSelf */
      static logCreatePlayer: (_player: any, ...__args: never[]) => any;

      /** @noSelf */
      static logDeath: (_character: any, ...__args: never[]) => any;

      /** @noSelf */
      static logLogin: (_character: any, ...__args: never[]) => any;

      /** @noSelf */
      static logPerkLevelChange: (_character: any, _perk: any, _perkLevel: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.Logs.ISPerkLog {}
}
