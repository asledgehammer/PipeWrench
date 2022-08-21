/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.radio {
    export abstract class DynamicRadio {
      static [id: string]: any;

      /** @noSelf */
      static OnEveryHour: () => any;

      /** @noSelf */
      static OnLoadRadioScripts: (_scriptManager: any, _isNewGame: any) => any;
    }
  }
  export namespace lua.server.radio.ISDynamicRadio {}
}
