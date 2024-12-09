/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Logs {
    export abstract class ISLogSystem {
      static [id: string]: any;

      /** @noSelf */
      static getGenericLogText: (_character: any, _actionType: any, ...__args: never[]) => any;

      /** @noSelf */
      static getObjectPosition: (_object: any, ...__args: never[]) => any;

      /** @noSelf */
      static init: (...__args: never[]) => any;

      /** @noSelf */
      static logAction: (_action: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnClientCommand: (_module: any, _command: any, _plObj: any, _packet: any, ...__args: never[]) => any;

      /** @noSelf */
      static sendLog: (_character: any, _loggerName: any, _logText: any, ...__args: never[]) => any;

      /** @noSelf */
      static writeLog: (_character: any, _packet: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.Logs.ISLogSystem {}
}
