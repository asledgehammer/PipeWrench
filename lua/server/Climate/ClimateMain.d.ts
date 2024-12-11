/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.Climate {
    export abstract class ClimateMain {
      static [id: string]: any;

      /** @noSelf */
      static onClimateManagerInit: (_clim: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.Climate.ClimateMain {}
}
