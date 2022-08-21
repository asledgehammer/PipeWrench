/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugChunkState {
    /** @customConstructor DebugChunkStateUI_SquarePanel:new */
    export class DebugChunkStateUI_SquarePanel extends lua.client.DebugUIs.DebugChunkState.ISSectionedPanel {
      [id: string]: any;
      static [id: string]: any;

      debugChunkState: any;

      font: any;

      fontHgt: any;

      square: any;

      squareX: any;

      squareY: any;

      squareZ: any;

      constructor(x: any, y: any, width: any, height: any, debugChunkState: any);

      createSections: (() => any) | any;

      setSquare: ((square: any, x: any, y: any, z: any) => any) | any;
    }

    /** @customConstructor DebugChunkStateUI_SquarePropsHandler:new */
    export class DebugChunkStateUI_SquarePropsHandler extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      addLineX: any;

      addLineY: any;

      gameState: any;

      object: any;

      square: any;

      squareX: any;

      squareY: any;

      squareZ: any;

      constructor(x: any, y: any, width: any, height: any, gameState: any);

      addLine: ((text: any, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any) => any) | any;

      playerIndex: (() => any) | any;

      postrender: (() => any) | any;

      render: (() => any) | any;

      render1: (() => any) | any;

      setSquare: ((square: any, x: any, y: any, z: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugChunkState.DebugChunkState_SquarePanel {}
}
