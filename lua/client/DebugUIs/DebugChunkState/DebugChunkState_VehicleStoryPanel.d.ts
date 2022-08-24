/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugChunkState {
    /** @customConstructor DebugChunkState_VehicleStoryPanel:new */
    export class DebugChunkState_VehicleStoryPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      combo: any;

      debugChunkState: any;

      constructor(x: any, y: any, width: any, height: any, debugChunkState: any);

      createChildren: (() => any) | any;

      onChangeStory: (() => any) | any;

      render: (() => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugChunkState.DebugChunkState_VehicleStoryPanel {}
}
