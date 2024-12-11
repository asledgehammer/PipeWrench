/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    export abstract class ISFPS {
      static [id: string]: any;

      static lastSec: any;

      /** @noSelf */
      static onKeyPressed: (key: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.FPS {}
}
