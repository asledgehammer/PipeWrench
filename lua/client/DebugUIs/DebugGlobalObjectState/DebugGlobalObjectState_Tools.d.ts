/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugGlobalObjectState {
    /** @customConstructor DebugGlobalObjectStateUI_DragCameraTool:new */
    export class DebugGlobalObjectStateUI_DragCameraTool extends lua.client.DebugUIs.DebugChunkState
      .DebugChunkStateUI_Tool {
      [id: string]: any;
      static [id: string]: any;

      mouseDown: any;

      startDragX: any;

      startDragY: any;

      startScreenX: any;

      startScreenY: any;

      constructor(ui: any);
    }

    /** @customConstructor DebugGlobalObjectStateUI_Tool:new */
    export class DebugGlobalObjectStateUI_Tool extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      ui: any;

      constructor(ui: any);

      java0: ((func: any) => any) | any;

      java1: ((func: any, arg0: any) => any) | any;

      java2: ((func: any, arg0: any, arg1: any) => any) | any;

      onMouseDown: ((x: any, y: any) => any) | any;

      onMouseMove: ((dx: any, dy: any) => any) | any;

      onMouseUp: ((x: any, y: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugGlobalObjectState.DebugGlobalObjectState_Tools {}
}
