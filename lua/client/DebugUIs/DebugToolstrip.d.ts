/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor DebugToolstrip:new */
    export class DebugToolstrip extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonResume: any;

      buttonStepInto: any;

      buttonStepOver: any;

      debugLog: any;

      debugLogWindow: any;

      debugOptions: any;

      errors: any;

      errorsWindow: any;

      mapView: any;

      mapWindow: any;

      settingsWindow: any;

      showDebuggerOnError: any;

      constructor(x: any, y: any, width: any, height: any);

      createChildren: (() => any) | any;

      onButtonResume: (() => any) | any;

      onButtonStepInto: (() => any) | any;

      onButtonStepOver: (() => any) | any;

      onDebugLog: (() => any) | any;

      onMapClick: (() => any) | any;

      onOptionsClick: (() => any) | any;

      onShowErrors: (() => any) | any;

      onToggleBreak: ((index: any, selected: any) => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.DebugToolstrip {}
}
