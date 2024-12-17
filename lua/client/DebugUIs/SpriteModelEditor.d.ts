/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor SpriteModelEditor:new */
    export class SpriteModelEditor extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      animationComboModelScriptName: any;

      animationComboTileProperties: any;

      belowList: any;

      bottomPanel: any;

      button1: any;

      buttonCreateTilesetImage: any;

      buttonOptions: any;

      comboChooseAnimation: any;

      comboChooseModel: any;

      comboModID: any;

      currentModelScriptName: any;

      listBox: any;

      modID: any;

      optionsPanel: any;

      runtimeEntry: any;

      runtimeEntryProperties: any;

      scene: any;

      selectedTileProperties: any;

      sliderAnimationTime: any;

      tempExtents: any;

      tempTranslate: any;

      tilePicker: any;

      toolBar: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      createToolbar(...__args: never[]): any;

      getOrCreateTileProperties(...__args: never[]): any;

      getTileProperties(...__args: never[]): any;

      onAnimationTimeChanged(time: any, slider: any, ...__args: never[]): any;

      onComboChooseAnimation(...__args: never[]): any;

      onComboChooseModel(...__args: never[]): any;

      onCreateTilesetImage(button: any, x: any, y: any, ...__args: never[]): any;

      onCreateTilesetImage2(button: any, ...__args: never[]): any;

      onExit(button: any, x: any, y: any, ...__args: never[]): any;

      onKeyPress(key: any, ...__args: never[]): any;

      onOptions(...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      onRuntimeEntered(...__args: never[]): any;

      onSave(button: any, x: any, y: any, ...__args: never[]): any;

      onToggleGizmo(...__args: never[]): any;

      render(...__args: never[]): any;

      resetView(...__args: never[]): any;

      setSelectedAnimation(animationName: any, ...__args: never[]): any;

      showUI(...__args: never[]): any;

      syncAnimationTimeSlider(...__args: never[]): any;

      syncChooseAnimationCombo(...__args: never[]): any;

      syncChooseModelCombo(...__args: never[]): any;

      syncRuntimeEntry(...__args: never[]): any;

      update(...__args: never[]): any;
    }

    /** @customConstructor SpriteModelEditor_ListBox:new */
    export class SpriteModelEditor_ListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);

      indexOf(text: any, ...__args: never[]): any;
    }

    /** @customConstructor SpriteModelEditor_OptionsPanel:new */
    export class SpriteModelEditor_OptionsPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      tickBox: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren(...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      onTickBox(index: any, selected: any, ...__args: never[]): any;
    }

    /** @customConstructor SpriteModelEditor_Scene:new */
    export class SpriteModelEditor_Scene extends lua.client.Vehicles.ISUI.ISUI3DScene {
      [id: string]: any;
      static [id: string]: any;

      dragPointIndex: any;

      editor: any;

      gizmo: any;

      gizmoAxis: any;

      gizmoClickScenePos: any;

      gizmoStartScenePos: any;

      originalRotate: any;

      originalScale: any;

      originalTranslate: any;

      rotate: any;

      sceneModelName: any;

      selectedTileName: any;

      tempExtentsMax: any;

      tempExtentsMin: any;

      tempRotate: any;

      tempTranslate: any;

      zeroVector: any;

      constructor(x: any, y: any, width: any, height: any, editor: any);

      java0(func: any, ...__args: never[]): any;

      java1(func: any, arg0: any, ...__args: never[]): any;

      java2(func: any, arg0: any, arg1: any, ...__args: never[]): any;

      java3(func: any, arg0: any, arg1: any, arg2: any, ...__args: never[]): any;

      java4(func: any, arg0: any, arg1: any, arg2: any, arg3: any, ...__args: never[]): any;

      java5(func: any, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, ...__args: never[]): any;

      java6(func: any, arg0: any, arg1: any, arg2: any, arg3: any, arg4: any, arg5: any, ...__args: never[]): any;

      java7(
        func: any,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        arg5: any,
        arg6: any,
        ...__args: never[]
      ): any;

      java9(
        func: any,
        arg0: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any,
        arg5: any,
        arg6: any,
        arg7: any,
        arg8: any,
        ...__args: never[]
      ): any;

      onGizmoAccept(...__args: never[]): any;

      onGizmoCancel(...__args: never[]): any;

      onGizmoChanged(delta: any, ...__args: never[]): any;

      onGizmoStart(...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      prerenderEditor(...__args: never[]): any;

      render(...__args: never[]): any;

      renderBox3D(
        tx: any,
        ty: any,
        tz: any,
        rx: any,
        ry: any,
        rz: any,
        minX: any,
        minY: any,
        minZ: any,
        maxX: any,
        maxY: any,
        maxZ: any,
        r: any,
        g: any,
        b: any,
        ...__args: never[]
      ): any;

      renderNorthWall(...__args: never[]): any;

      renderTileName(...__args: never[]): any;

      renderWestWall(...__args: never[]): any;

      snapToFurniturePixel(x: any, y: any, ...__args: never[]): any;
    }

    /** @customConstructor SpriteModelEditor_TileList:new */
    export class SpriteModelEditor_TileList extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      editor: any;

      picker: any;

      selected: any;

      tileset: any;

      constructor(x: any, y: any, width: any, height: any, picker: any);

      getColRowAt(x: any, y: any, ...__args: never[]): any;

      isValidColRow(col: any, row: any, ...__args: never[]): any;

      onClearSelectedTiles(...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setTileset(tilesetName: any, ...__args: never[]): any;
    }

    /** @customConstructor SpriteModelEditor_TilePicker:new */
    export class SpriteModelEditor_TilePicker extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      comboTileset: any;

      editor: any;

      listBox: any;

      constructor(x: any, y: any, width: any, height: any, editor: any);

      createChildren(...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onSelectTileset(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.SpriteModelEditor {
    /** @noSelf */
    export const SpriteModelEditor_InitUI: () => any;
  }
}
