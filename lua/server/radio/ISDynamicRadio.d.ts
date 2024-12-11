/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.radio {
    export abstract class DynamicRadio {
      static [id: string]: any;

      /** @noSelf */
      static OnEveryHour: (...__args: never[]) => any;

      /** @noSelf */
      static OnLoadRadioScripts: (_scriptManager: any, _isNewGame: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.radio.ISDynamicRadio {}
}
