/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Util {
    export abstract class StringReplacer {
      static [id: string]: any;

      /** @noSelf */
      static DoCharacter: (str: any, desc: any) => any;
    }
  }
  export namespace lua.shared.Util.StringReplacer {}
}
