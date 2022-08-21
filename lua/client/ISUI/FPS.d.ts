/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    export abstract class ISFPS {
      static [id: string]: any;

      static lastSec: any;

      /** @noSelf */
      static onKeyPressed: (key: any) => any;
    }
  }
  export namespace lua.client.ISUI.FPS {}
}
