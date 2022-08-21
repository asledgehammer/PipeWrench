/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugChunkState {
    /** @customConstructor DebugChunkStateUI_DragCameraTool:new */
    export class DebugChunkStateUI_DragCameraTool extends lua.client.DebugUIs.DebugChunkState.DebugChunkStateUI_Tool {
      [id: string]: any;
      static [id: string]: any;

      mouseDown: any;

      startDragX: any;

      startDragY: any;

      startScreenX: any;

      startScreenY: any;

      constructor(ui: any);
    }

    /** @customConstructor DebugChunkStateUI_Tool:new */
    export class DebugChunkStateUI_Tool extends lua.shared.ISBaseObject {
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
  export namespace lua.client.DebugUIs.DebugChunkState.DebugChunkState_Tools {}
}
