/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugChunkState {
    /** @customConstructor DebugChunkState_VehicleStoryPanel:new */
    export class DebugChunkState_VehicleStoryPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      combo: any;

      debugChunkState: any;

      constructor(x: any, y: any, width: any, height: any, debugChunkState: any);

      createChildren(...__args: never[]): any;

      onChangeStory(...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugChunkState.DebugChunkState_VehicleStoryPanel {}
}
