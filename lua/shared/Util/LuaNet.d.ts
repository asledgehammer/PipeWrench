/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Util {
    export abstract class LuaNet {
      static [id: string]: any;

      getInstance: (() => any) | any;
    }
  }
  export namespace lua.shared.Util.LuaNet {}
}
