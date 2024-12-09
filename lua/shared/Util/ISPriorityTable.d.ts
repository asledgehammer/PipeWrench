/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Util {
    export abstract class ISPriorityTable {
      static [id: string]: any;

      /** @noSelf */
      static new: (...__args: never[]) => any;
    }
  }
  export namespace lua.shared.Util.ISPriorityTable {}
}
