/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
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
    export class DebugChunkStateUI_Tool extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      ui: any;

      constructor(ui: any);

      java0(func: any, ...__args: never[]): any;

      java1(func: any, arg0: any, ...__args: never[]): any;

      java2(func: any, arg0: any, arg1: any, ...__args: never[]): any;

      onMouseDown(x: any, y: any, ...__args: never[]): any;

      onMouseMove(dx: any, dy: any, ...__args: never[]): any;

      onMouseUp(x: any, y: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugChunkState.DebugChunkState_Tools {}
}
