/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Logs {
    export abstract class ISLogSystem {
      static [id: string]: any;

      /** @noSelf */
      static getGenericLogText: (_character: any, _actionType: any) => any;

      /** @noSelf */
      static getObjectPosition: (_object: any) => any;

      /** @noSelf */
      static init: () => any;

      /** @noSelf */
      static logAction: (_action: any) => any;

      /** @noSelf */
      static OnClientCommand: (_module: any, _command: any, _plObj: any, _packet: any) => any;

      /** @noSelf */
      static sendLog: (_character: any, _loggerName: any, _logText: any) => any;

      /** @noSelf */
      static writeLog: (_character: any, _packet: any) => any;
    }
  }
  export namespace lua.shared.Logs.ISLogSystem {}
}
