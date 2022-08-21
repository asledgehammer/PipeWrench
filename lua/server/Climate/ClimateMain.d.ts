/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.Climate {
    export abstract class ClimateMain {
      static [id: string]: any;

      /** @noSelf */
      static onClimateManagerInit: (_clim: any) => any;
    }
  }
  export namespace lua.server.Climate.ClimateMain {}
}
