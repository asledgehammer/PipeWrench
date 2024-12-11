/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      clear(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      initialise(...__args: never[]): any;

      scrollToBottom(...__args: never[]): any;

      setMonitor(_mon: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Anims.ISAnimLoggerOutput {}
}
