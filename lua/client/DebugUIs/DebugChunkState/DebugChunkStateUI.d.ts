/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      objectAtCursorPanel: any;

      objectList: any;

      objectListSquare: any;

      objectPickerPanel: any;

      objectSections: any;

      objPropsPanel: any;

      optionsPanel: any;

      selectedSquare: any;

      spritePopupPanel: any;

      squarePanel: any;

      toolBar: any;

      vehicleStoryPanel: any;

      zLevelSlider: any;

      constructor(x: any, y: any, width: any, height: any, gameState: any);

      createChildren(...__args: never[]): any;

      doDrawObjectListItem(y: any, item: any, alt: any, ...__args: never[]): any;

      isMouseOverChild(...__args: never[]): any;

      onCamera(...__args: never[]): any;

      onChangePlayer(...__args: never[]): any;

      onChangeZLevel(value: any, slider: any, ...__args: never[]): any;

      onExit(...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onOptions(...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      pickSquare(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setObjectList(square: any, x: any, y: any, z: any, ...__args: never[]): any;

      showUI(...__args: never[]): any;

      update(...__args: never[]): any;

      updateObjectList(...__args: never[]): any;

      updateObjectProps(...__args: never[]): any;
    }

    /** @customConstructor DebugChunkStateUI_OptionsPanel:new */
    export class DebugChunkStateUI_OptionsPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      gameState: any;

      tickBox: any;

      constructor(x: any, y: any, width: any, height: any, gameState: any);

      createChildren(...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      onTickBox(index: any, selected: any, ...__args: never[]): any;
    }

    /** @customConstructor DebugChunkStateUI_SpritePopupPanel:new */
    export class DebugChunkStateUI_SpritePopupPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      sprite: any;

      constructor(x: any, y: any, w: any, h: any);

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugChunkState.DebugChunkStateUI {}
}
