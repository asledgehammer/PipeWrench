/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.PrintMedia {
    export abstract class PrintMediaEntries {
      static [id: string]: any;

      static useJoypad: any;

      /** @noSelf */
      static addPrintMediaEntry: (index: any, type: any, ...__args: never[]) => any;

      /** @noSelf */
      static getEntry: (num: any, ...__args: never[]) => any;

      /** @noSelf */
      static getEntryCount: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.PrintMedia.PrintMediaEntries {}
}
