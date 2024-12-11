/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Maps.Editor {
    /** @customConstructor WorldMapEditorMode_Style:new */
    export class WorldMapEditorMode_Style extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode {
      [id: string]: any;
      static [id: string]: any;

      currentEditor: any;

      editors: any;

      layerNameEntry: any;

      layerType: any;

      listbox: any;

      zoomEntry: any;

      constructor(editor: any);

      createChildren(...__args: never[]): any;

      fillList(...__args: never[]): any;

      generateLuaScript_FillStops(layer: any, ...__args: never[]): any;

      generateLuaScript_TextureStops(layer: any, ...__args: never[]): any;

      onAdd(...__args: never[]): any;

      onChangeLayerType(...__args: never[]): any;

      onLayerNameEntered(...__args: never[]): any;

      onListboxEvent(action: any, ...__args: never[]): any;

      onMinZoomEntered(...__args: never[]): any;

      onMouseUpOutside(x: any, y: any, ...__args: never[]): any;

      onMoveDown(...__args: never[]): any;

      onMoveUp(...__args: never[]): any;

      onRemove(...__args: never[]): any;

      onRightMouseDown(x: any, y: any, ...__args: never[]): any;

      onSelect(...__args: never[]): any;

      render(...__args: never[]): any;

      setCurrentEditor(layer: any, ...__args: never[]): any;
    }

    /** @customConstructor WorldMapStyleEditor:new */
    export class WorldMapStyleEditor extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      editorMode: any;

      layer: any;

      mapAPI: any;

      mapUI: any;

      styleAPI: any;

      constructor(editorMode: any);

      display(layer: any, ...__args: never[]): any;

      onKeyPress(key: any, ...__args: never[]): any;

      shrinkWrap(...__args: never[]): any;

      undisplay(...__args: never[]): any;
    }

    /** @customConstructor WorldMapStyleEditor_ColorStopsPanel:new */
    export class WorldMapStyleEditor_ColorStopsPanel extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor_TabPanel {
      [id: string]: any;
      static [id: string]: any;

      alphaEntry: any;

      blueEntry: any;

      greenEntry: any;

      listbox: any;

      redEntry: any;

      zoomEntry: any;

      constructor(width: any, editorMode: any);

      createChildren(...__args: never[]): any;

      getSelectedAlpha(...__args: never[]): any;

      getSelectedBlue(...__args: never[]): any;

      getSelectedGreen(...__args: never[]): any;

      getSelectedIndex(...__args: never[]): any;

      getSelectedRed(...__args: never[]): any;

      getSelectedZoom(...__args: never[]): any;

      onAdd(...__args: never[]): any;

      onAlphaEntered(...__args: never[]): any;

      onBlueEntered(...__args: never[]): any;

      onGreenEntered(...__args: never[]): any;

      onListboxEvent(action: any, ...__args: never[]): any;

      onMoveDown(...__args: never[]): any;

      onMoveUp(...__args: never[]): any;

      onRedEntered(...__args: never[]): any;

      onRemove(...__args: never[]): any;

      onSelect(...__args: never[]): any;

      onZoomEntered(...__args: never[]): any;

      setRGBA(r: any, g: any, b: any, a: any, ...__args: never[]): any;
    }

    /** @customConstructor WorldMapStyleEditor_FilterPanel:new */
    export class WorldMapStyleEditor_FilterPanel extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor_TabPanel {
      [id: string]: any;
      static [id: string]: any;

      keyEntry: any;

      valueEntry: any;

      constructor(width: any, editorMode: any);

      createChildren(...__args: never[]): any;

      onKeyEntered(...__args: never[]): any;

      onValueEntered(...__args: never[]): any;
    }

    /** @customConstructor WorldMapStyleEditor_PolygonLayerPanel:new */
    export class WorldMapStyleEditor_PolygonLayerPanel extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor {
      [id: string]: any;
      static [id: string]: any;

      fillPanel: any;

      filterPanel: any;

      tabs: any;

      texturePanel: any;

      constructor(editorMode: any);

      createChildren(...__args: never[]): any;

      onMouseDownMap(x: any, y: any, ...__args: never[]): any;

      onMouseMoveMap(dx: any, dy: any, ...__args: never[]): any;

      onMouseUpMap(x: any, y: any, ...__args: never[]): any;

      onMouseUpOutsideMap(x: any, y: any, ...__args: never[]): any;

      onRightMouseDownMap(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }

    /** @customConstructor WorldMapStyleEditor_TabPanel:new */
    export class WorldMapStyleEditor_TabPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      editorMode: any;

      layer: any;

      mapAPI: any;

      mapUI: any;

      styleAPI: any;

      constructor(width: any, editorMode: any);

      getEntryClamped(entry: any, min: any, max: any, ...__args: never[]): any;

      onKeyPress(key: any, ...__args: never[]): any;

      onMouseDownMap(x: any, y: any, ...__args: never[]): any;

      onMouseMoveMap(dx: any, dy: any, ...__args: never[]): any;

      onMouseUpMap(x: any, y: any, ...__args: never[]): any;

      onMouseUpOutsideMap(x: any, y: any, ...__args: never[]): any;

      onRightMouseDownMap(x: any, y: any, ...__args: never[]): any;

      populateList(layer: any, ...__args: never[]): any;

      undisplay(...__args: never[]): any;
    }

    /** @customConstructor WorldMapStyleEditor_TextureLayerPanel:new */
    export class WorldMapStyleEditor_TextureLayerPanel extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor {
      [id: string]: any;
      static [id: string]: any;

      fillPanel: any;

      tabs: any;

      texturePanel: any;

      constructor(editorMode: any);

      createChildren(...__args: never[]): any;

      onMouseDownMap(x: any, y: any, ...__args: never[]): any;

      onMouseMoveMap(dx: any, dy: any, ...__args: never[]): any;

      onMouseUpMap(x: any, y: any, ...__args: never[]): any;

      onMouseUpOutsideMap(x: any, y: any, ...__args: never[]): any;

      onRightMouseDownMap(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;
    }

    /** @customConstructor WorldMapStyleEditor_TexturePanel:new */
    export class WorldMapStyleEditor_TexturePanel extends lua.client.ISUI.Maps.Editor
      .WorldMapStyleEditor_TextureStopsPanel {
      [id: string]: any;
      static [id: string]: any;

      lockSize: any;

      mode: any;

      resizeMode: any;

      resizer: any;

      scaleEntry: any;

      sizeLocked: any;

      snapButtons: any;

      snapMode: any;

      textureMode: any;

      useWorldBounds: any;

      constructor(width: any, editorMode: any);

      cancelResize(...__args: never[]): any;

      getSelectedTextureScale(...__args: never[]): any;

      onBoundsFromTexture(...__args: never[]): any;

      onChangeSizeLocked(...__args: never[]): any;

      onChangeSnapMode(button: any, ...__args: never[]): any;

      onChangeTextureMode(...__args: never[]): any;

      onChangeUseWorldBounds(...__args: never[]): any;

      onKeyPress(key: any, ...__args: never[]): any;

      onResizeToTexture(...__args: never[]): any;

      onRightMouseDownMap(x: any, y: any, ...__args: never[]): any;

      onScaleEntered(...__args: never[]): any;

      undisplay(...__args: never[]): any;
    }

    /** @customConstructor WorldMapStyleEditor_TextureStopsPanel:new */
    export class WorldMapStyleEditor_TextureStopsPanel extends lua.client.ISUI.Maps.Editor
      .WorldMapStyleEditor_TabPanel {
      [id: string]: any;
      static [id: string]: any;

      listbox: any;

      texturePathEntry: any;

      zoomEntry: any;

      constructor(width: any, editorMode: any);

      createChildren(...__args: never[]): any;

      getSelectedIndex(...__args: never[]): any;

      getSelectedTexture(...__args: never[]): any;

      getSelectedTexturePath(...__args: never[]): any;

      getSelectedZoom(...__args: never[]): any;

      onAdd(...__args: never[]): any;

      onListboxEvent(action: any, ...__args: never[]): any;

      onMoveDown(...__args: never[]): any;

      onMoveUp(...__args: never[]): any;

      onRemove(...__args: never[]): any;

      onSelect(...__args: never[]): any;

      onTexturePathEntered(...__args: never[]): any;

      onZoomEntered(...__args: never[]): any;

      render(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Style {}
}
