/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server {
    export abstract class TutorialHelperFunctions {
      static [id: string]: any;

      /** @noSelf */
      static replaceInContainer: (x: any, y: any, z: any, type: any, items: any) => any;
    }
  }
  export namespace lua.server.TutorialHelperFunctions {}
}
