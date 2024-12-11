/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugChunkState {
    /** @customConstructor DebugChunkStateUI_ObjPropsHandler:new */
    export class DebugChunkStateUI_ObjPropsHandler extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      addLineX: any;

      addLineY: any;

      gameState: any;

      object: any;

      constructor(x: any, y: any, width: any, height: any, gameState: any);

      addLine(text: any, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, ...__args: never[]): any;

      playerIndex(...__args: never[]): any;

      postrender(...__args: never[]): any;

      render(...__args: never[]): any;

      render1(...__args: never[]): any;

      setObject(object: any, ...__args: never[]): any;
    }

    /** @customConstructor DebugChunkStateUI_ObjPropsPanel:new */
    export class DebugChunkStateUI_ObjPropsPanel extends lua.client.DebugUIs.DebugChunkState.ISSectionedPanel {
      [id: string]: any;
      static [id: string]: any;

      debugChunkState: any;

      object: any;

      constructor(x: any, y: any, width: any, height: any, debugChunkState: any);

      createChildren(...__args: never[]): any;

      setObject(object: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugChunkState.DebugChunkState_ObjectProperties {}
}
