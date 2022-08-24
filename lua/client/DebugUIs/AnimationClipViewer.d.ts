/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      createChildren: (() => any) | any;

      createToolbar: (() => any) | any;

      getCurrentFrame: (() => any) | any;

      getCurrentTime: (() => any) | any;

      getDuration: (() => any) | any;

      getFPS: (() => any) | any;

      getLastFrame: (() => any) | any;

      onExit: ((button: any, x: any, y: any) => any) | any;

      onKeyPress: ((key: any) => any) | any;

      onOptions: (() => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      onSpeedScaleChanged: ((speed: any, slider: any) => any) | any;

      render: (() => any) | any;

      resetView: (() => any) | any;

      setClipList: (() => any) | any;

      showUI: (() => any) | any;

      update: (() => any) | any;
    }

    /** @customConstructor AnimationClipViewer_ListBox:new */
    export class AnimationClipViewer_ListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      selectedClipName: any;

      constructor(x: any, y: any, width: any, height: any);

      indexOf: ((text: any) => any) | any;
    }

    /** @customConstructor AnimationClipViewer_OptionsPanel:new */
    export class AnimationClipViewer_OptionsPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      tickBox: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      onTickBox: ((index: any, selected: any) => any) | any;
    }

    /** @customConstructor AnimationClipViewer_Scene:new */
    export class AnimationClipViewer_Scene extends lua.client.Vehicles.ISUI.ISUI3DScene {
      [id: string]: any;
      static [id: string]: any;

      rotate: any;

      zeroVector: any;

      constructor(x: any, y: any, width: any, height: any);

      onRightMouseDown: ((x: any, y: any) => any) | any;

      prerenderEditor: (() => any) | any;
    }

    /** @customConstructor AnimationClipViewer_Timeline:new */
    export class AnimationClipViewer_Timeline extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      dragging: any;

      keyframeTimes: any;

      selectedClipName: any;

      constructor(x: any, y: any, width: any, height: any);

      render: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.AnimationClipViewer {
    /** @noSelf */
    export const AnimationViewerState_InitUI: () => any;
  }
}
