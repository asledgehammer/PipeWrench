/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    export abstract class ISUIHandler {
      static [id: string]: any;

      /** @noSelf */
      static onKeyPressed: (key: any) => any;

      /** @noSelf */
      static onKeyStartPressed: (key: any) => any;

      /** @noSelf */
      static setVisibleAllUI: (visible: any) => any;

      /** @noSelf */
      static toggleUI: () => any;
    }
  }
  export namespace lua.client.ISUI.ISUIHandler {}
}
