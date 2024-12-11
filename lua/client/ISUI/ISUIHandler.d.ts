/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    export abstract class ISUIHandler {
      static [id: string]: any;

      /** @noSelf */
      static onKeyPressed: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyStartPressed: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static setVisibleAllUI: (visible: any, ...__args: never[]) => any;

      /** @noSelf */
      static toggleUI: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISUIHandler {}
}
