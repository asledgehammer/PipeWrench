/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugChunkState {
    /** @customConstructor DebugChunkState_ObjectAtCursorPanel:new */
    export class DebugChunkState_ObjectAtCursorPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      combo: any;

      debugChunkState: any;

      sliderLevels: any;

      sliderWidth: any;

      constructor(x: any, y: any, width: any, height: any, debugChunkState: any);

      createChildren(...__args: never[]): any;

      onChangeObject(...__args: never[]): any;

      onLevelsChanged(value: any, slider: any, ...__args: never[]): any;

      onWidthChanged(value: any, slider: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      syncUI(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugChunkState.DebugChunkState_ObjectAtCursorPanel {}
}
