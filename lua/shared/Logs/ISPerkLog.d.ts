/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Logs {
    export abstract class ISPerkLog {
      static [id: string]: any;

      /** @noSelf */
      static init: () => any;

      /** @noSelf */
      static logAllPerks: (_character: any) => any;

      /** @noSelf */
      static logCreatePlayer: (_player: any) => any;

      /** @noSelf */
      static logDeath: (_character: any) => any;

      /** @noSelf */
      static logLogin: (_character: any) => any;

      /** @noSelf */
      static logPerkLevelChange: (_character: any, _perk: any, _perkLevel: any) => any;
    }
  }
  export namespace lua.shared.Logs.ISPerkLog {}
}
