/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      createChildren(...__args: never[]): any;

      isMouseOverChild(...__args: never[]): any;

      ObjectList_doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      ObjectList_OnMouseDoubleClick(item: any, ...__args: never[]): any;

      onChangeZLevel(value: any, slider: any, ...__args: never[]): any;

      onComboClientServer(...__args: never[]): any;

      onExit(...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      pickSquare(x: any, y: any, ...__args: never[]): any;

      setObjectList(square: any, x: any, y: any, z: any, ...__args: never[]): any;

      setSystemList(...__args: never[]): any;

      showUI(...__args: never[]): any;

      SystemList_doDrawItem(y: any, item: any, alt: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      updateObjectList(...__args: never[]): any;

      updateObjectProps(...__args: never[]): any;

      updateSelectedObject(...__args: never[]): any;

      updateSelectedSystem(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugGlobalObjectState.DebugGlobalObjectStateUI {}
}
