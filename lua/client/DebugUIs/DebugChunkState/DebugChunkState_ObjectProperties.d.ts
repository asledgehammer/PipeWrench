/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      addLine: ((text: any, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any) => any) | any;

      playerIndex: (() => any) | any;

      postrender: (() => any) | any;

      render: (() => any) | any;

      render1: (() => any) | any;

      setObject: ((object: any) => any) | any;
    }

    /** @customConstructor DebugChunkStateUI_ObjPropsPanel:new */
    export class DebugChunkStateUI_ObjPropsPanel extends lua.client.DebugUIs.DebugChunkState.ISSectionedPanel {
      [id: string]: any;
      static [id: string]: any;

      debugChunkState: any;

      object: any;

      constructor(x: any, y: any, width: any, height: any, debugChunkState: any);

      createChildren: (() => any) | any;

      setObject: ((object: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugChunkState.DebugChunkState_ObjectProperties {}
}
