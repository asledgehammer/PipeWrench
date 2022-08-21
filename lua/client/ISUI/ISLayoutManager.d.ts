/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    export abstract class ISLayoutManager {
      static [id: string]: any;

      static enableLog: any;

      /** @noSelf */
      static CallRestoreLayout: (name: any, layout: any) => any;

      /** @noSelf */
      static CallSaveLayout: (name: any, layout: any) => any;

      /** @noSelf */
      static DefaultRestoreWindow: (window: any, layout: any) => any;

      /** @noSelf */
      static DefaultSaveWindow: (window: any, layout: any) => any;

      /** @noSelf */
      static FindResizeWidget: (window: any) => any;

      /** @noSelf */
      static OnPostSave: () => any;

      /** @noSelf */
      static ReadIni: () => any;

      /** @noSelf */
      static RegisterWindow: (name: any, funcs: any, target: any) => any;

      /** @noSelf */
      static SaveLayout: (name: any, window: any) => any;

      /** @noSelf */
      static SaveWindowVisible: (window: any, layout: any) => any;

      /** @noSelf */
      static TryRestore: (name: any) => any;

      /** @noSelf */
      static WriteIni: () => any;
    }
  }
  export namespace lua.client.ISUI.ISLayoutManager {}
}
