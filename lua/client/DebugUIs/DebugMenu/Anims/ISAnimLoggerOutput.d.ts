/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.Anims {
    /** @customConstructor ISAnimLoggerOutput:new */
    export class ISAnimLoggerOutput extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {
      [id: string]: any;
      static [id: string]: any;

      clearText: any;

      init: any;

      monitor: any;

      richtext: any;

      constructor(x: any, y: any, width: any, height: any, doStencil: any);

      clear: (() => any) | any;

      createChildren: (() => any) | any;

      initialise: (() => any) | any;

      scrollToBottom: (() => any) | any;

      setMonitor: ((_mon: any) => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Anims.ISAnimLoggerOutput {}
}
