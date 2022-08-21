/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    export abstract class SpeedControlsHandler {
      static [id: string]: any;

      /** @noSelf */
      static onKeyPressed: (key: any) => any;
    }
  }
  export namespace lua.client.ISUI.SpeedControlsHandler {}
}
