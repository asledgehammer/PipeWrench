/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor AnimationClipViewer:new */
    export class AnimationClipViewer extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      animate: any;

      bottomPanel: any;

      buttonOptions: any;

      filter: any;

      filterText: any;

      listBox: any;

      optionsPanel: any;

      scene: any;

      speedScale: any;

      timeline: any;

      toolBar: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      createToolbar(...__args: never[]): any;

      getCurrentFrame(...__args: never[]): any;

      getCurrentTime(...__args: never[]): any;

      getDuration(...__args: never[]): any;

      getFPS(...__args: never[]): any;

      getLastFrame(...__args: never[]): any;

      onExit(button: any, x: any, y: any, ...__args: never[]): any;

      onKeyPress(key: any, ...__args: never[]): any;

      onOptions(...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      onSpeedScaleChanged(speed: any, slider: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      resetView(...__args: never[]): any;

      setClipList(...__args: never[]): any;

      showUI(...__args: never[]): any;

      update(...__args: never[]): any;
    }

    /** @customConstructor AnimationClipViewer_ListBox:new */
    export class AnimationClipViewer_ListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      selectedClipName: any;

      constructor(x: any, y: any, width: any, height: any);

      indexOf(text: any, ...__args: never[]): any;
    }

    /** @customConstructor AnimationClipViewer_OptionsPanel:new */
    export class AnimationClipViewer_OptionsPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      tickBox: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      onTickBox(index: any, selected: any, ...__args: never[]): any;
    }

    /** @customConstructor AnimationClipViewer_Scene:new */
    export class AnimationClipViewer_Scene extends lua.client.Vehicles.ISUI.ISUI3DScene {
      [id: string]: any;
      static [id: string]: any;

      rotate: any;

      zeroVector: any;

      constructor(x: any, y: any, width: any, height: any);

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      prerenderEditor(...__args: never[]): any;
    }

    /** @customConstructor AnimationClipViewer_Timeline:new */
    export class AnimationClipViewer_Timeline extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      dragging: any;

      keyframeTimes: any;

      selectedClipName: any;

      constructor(x: any, y: any, width: any, height: any);

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.AnimationClipViewer {
    /** @noSelf */
    export const AnimationViewerState_InitUI: () => any;
  }
}
