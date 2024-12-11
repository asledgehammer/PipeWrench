/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    export abstract class SpeedControlsHandler {
      static [id: string]: any;

      /** @noSelf */
      static onKeyPressed: (key: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.SpeedControlsHandler {}
}
