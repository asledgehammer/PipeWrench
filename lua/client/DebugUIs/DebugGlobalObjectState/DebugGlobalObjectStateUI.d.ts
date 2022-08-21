/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugGlobalObjectState {
    /** @customConstructor DebugGlobalObjectStateUI:new */
    export class DebugGlobalObjectStateUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonExit: any;

      comboClientServer: any;

      currentTool: any;

      dragCameraTool: any;

      gameState: any;

      mouseDown: any;

      mouseDownX: any;

      mouseDownY: any;

      mouseMoved: any;

      objectList: any;

      objectSections: any;

      propertiesPanel: any;

      selectedObject: any;

      selectedSquare: any;

      selectedSystem: any;

      showServer: any;

      systemList: any;

      toolBar: any;

      zLevelSlider: any;

      constructor(x: any, y: any, width: any, height: any, gameState: any);

      createChildren: (() => any) | any;

      isMouseOverChild: (() => any) | any;

      ObjectList_doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      ObjectList_OnMouseDoubleClick: ((item: any) => any) | any;

      onChangeZLevel: ((value: any, slider: any) => any) | any;

      onComboClientServer: (() => any) | any;

      onExit: (() => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      pickSquare: ((x: any, y: any) => any) | any;

      setObjectList: ((square: any, x: any, y: any, z: any) => any) | any;

      setSystemList: (() => any) | any;

      showUI: (() => any) | any;

      SystemList_doDrawItem: ((y: any, item: any, alt: any) => any) | any;

      update: (() => any) | any;

      updateObjectList: (() => any) | any;

      updateObjectProps: (() => any) | any;

      updateSelectedObject: (() => any) | any;

      updateSelectedSystem: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugGlobalObjectState.DebugGlobalObjectStateUI {}
}
