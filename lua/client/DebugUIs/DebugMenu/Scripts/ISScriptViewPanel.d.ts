/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Scripts {
    /** @customConstructor ISScriptViewPanel:new */
    export class ISScriptViewPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      autoExpandAll: any;

      currentViewMode: any;

      greyCol: any;

      listView: any;

      script: any;

      searchText: any;

      toggleViewButton: any;

      viewModes: any;

      constructor(x: any, y: any, width: any, height: any, script: any);

      createChildren(...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      populate(...__args: never[]): any;

      render(...__args: never[]): any;

      setScript(_script: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Scripts.ISScriptViewPanel {}
}
