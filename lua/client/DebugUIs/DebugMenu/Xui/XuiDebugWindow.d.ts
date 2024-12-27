/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Xui {
    /** @customConstructor XuiDebugWindow:new */
    export class XuiDebugWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      colors: any;

      defStyleColor: any;

      disableColor: any;

      elements: any;

      elementsLabel: any;

      headerColor: any;

      heightMod: any;

      leftWidth: any;

      list: any;

      minimumHeight: any;

      minimumWidth: any;

      nullColor: any;

      player: any;

      playerNum: any;

      referenceColor: any;

      reloadButton: any;

      rh: any;

      rightWidth: any;

      scriptColor: any;

      scriptLabel: any;

      selectedElementItem: any;

      selectedScriptItem: any;

      styleColor: any;

      subLabel: any;

      tableColor: any;

      testCustomButton: any;

      testWindowButton: any;

      th: any;

      vars: any;

      varsLabel: any;

      viewScriptButton: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addScriptElements(_script: any, _depth: any, _color: any, ...__args: never[]): any;

      createVarItem(_name: any, _value: any, _order: any, _var: any, ...__args: never[]): any;

      drawColorItem(y: any, item: any, alt: any, ...__args: never[]): any;

      drawConfigItem(y: any, item: any, alt: any, ...__args: never[]): any;

      drawElementItem(y: any, item: any, alt: any, ...__args: never[]): any;

      drawVarItem(y: any, item: any, alt: any, ...__args: never[]): any;

      initColors(...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      onCloseSubWindow(_window: any, _closeIt: any, ...__args: never[]): any;

      onColorSelected(_item: any, ...__args: never[]): any;

      onConfigSelected(_item: any, ...__args: never[]): any;

      onElementSelected(_item: any, ...__args: never[]): any;

      onResize(_width: any, _height: any, ...__args: never[]): any;

      onVarSelected(_item: any, ...__args: never[]): any;

      populate(...__args: never[]): any;

      populateElements(...__args: never[]): any;

      populateVars(...__args: never[]): any;

      positionSubWindow(_window: any, ...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (_player: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Xui.XuiDebugWindow {}
}
