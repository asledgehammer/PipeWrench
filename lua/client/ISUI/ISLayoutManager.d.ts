/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    export abstract class ISLayoutManager {
      static [id: string]: any;

      static enableLog: any;

      /** @noSelf */
      static CallRestoreLayout: (name: any, layout: any, ...__args: never[]) => any;

      /** @noSelf */
      static CallSaveLayout: (name: any, layout: any, ...__args: never[]) => any;

      /** @noSelf */
      static DefaultRestoreWindow: (window: any, layout: any, ...__args: never[]) => any;

      /** @noSelf */
      static DefaultSaveWindow: (window: any, layout: any, ...__args: never[]) => any;

      /** @noSelf */
      static FindResizeWidget: (window: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnPostSave: (...__args: never[]) => any;

      /** @noSelf */
      static ReadIni: (...__args: never[]) => any;

      /** @noSelf */
      static RegisterWindow: (name: any, funcs: any, target: any, ...__args: never[]) => any;

      /** @noSelf */
      static SaveLayout: (name: any, window: any, ...__args: never[]) => any;

      /** @noSelf */
      static SaveWindowVisible: (window: any, layout: any, ...__args: never[]) => any;

      /** @noSelf */
      static TryRestore: (name: any, ...__args: never[]) => any;

      /** @noSelf */
      static WriteIni: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISLayoutManager {}
}
