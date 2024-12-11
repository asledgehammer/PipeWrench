/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      createChildren(...__args: never[]): any;

      onButtonResume(...__args: never[]): any;

      onButtonStepInto(...__args: never[]): any;

      onButtonStepOver(...__args: never[]): any;

      onDebugLog(...__args: never[]): any;

      onMapClick(...__args: never[]): any;

      onOptionsClick(...__args: never[]): any;

      onShowErrors(...__args: never[]): any;

      onToggleBreak(index: any, selected: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugToolstrip {}
}
