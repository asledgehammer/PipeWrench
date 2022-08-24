/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugChunkState {
    /** @customConstructor DebugChunkStateUI:new */
    export class DebugChunkStateUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonExit: any;

      buttonOptions: any;

      comboPlayerIndex: any;

      currentTool: any;

      dragCameraTool: any;

      gameState: any;

      mouseDown: any;

      mouseDownX: any;

      mouseDownY: any;

      mouseMoved: any;

      objectList: any;

      objectListSquare: any;

      objectPickerPanel: any;

      objectSections: any;

      objPropsPanel: any;

      optionsPanel: any;

      selectedSquare: any;

      squarePanel: any;

      toolBar: any;

      vehicleStoryPanel: any;

      zLevelSlider: any;

      constructor(x: any, y: any, width: any, height: any, gameState: any);

      createChildren: (() => any) | any;

      doDrawObjectListItem: ((y: any, item: any, alt: any) => any) | any;

      isMouseOverChild: (() => any) | any;

      onCamera: (() => any) | any;

      onChangePlayer: (() => any) | any;

      onChangeZLevel: ((value: any, slider: any) => any) | any;

      onExit: (() => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onOptions: (() => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      pickSquare: ((x: any, y: any) => any) | any;

      setObjectList: ((square: any, x: any, y: any, z: any) => any) | any;

      showUI: (() => any) | any;

      update: (() => any) | any;

      updateObjectList: (() => any) | any;

      updateObjectProps: (() => any) | any;
    }

    /** @customConstructor DebugChunkStateUI_OptionsPanel:new */
    export class DebugChunkStateUI_OptionsPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      gameState: any;

      tickBox: any;

      constructor(x: any, y: any, width: any, height: any, gameState: any);

      createChildren: (() => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      onTickBox: ((index: any, selected: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugChunkState.DebugChunkStateUI {}
}
