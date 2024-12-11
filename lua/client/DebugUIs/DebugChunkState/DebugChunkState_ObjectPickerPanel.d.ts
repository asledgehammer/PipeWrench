/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugChunkState {
    /** @customConstructor DebugChunkState_ObjectPickerPanel:new */
    export class DebugChunkState_ObjectPickerPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      addLineX: any;

      addLineY: any;

      debugChunkState: any;

      lastPicked: any;

      constructor(x: any, y: any, width: any, height: any, debugChunkState: any);

      addLine(text: any, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugChunkState.DebugChunkState_ObjectPickerPanel {}
}
