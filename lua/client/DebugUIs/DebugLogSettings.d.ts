/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor DebugLogSettings:new */
    export class DebugLogSettings extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      comboLookup: any;

      constructor(x: any, y: any, width: any, height: any);

      onComboBox(comboBox: any, debugType: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      onSetAll(comboBox: any, ...__args: never[]): any;

      setVisible(bVisible: any, ...__args: never[]): any;

      syncCombos(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugLogSettings {}
}
