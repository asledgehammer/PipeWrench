/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Fluids {
    /** @customConstructor ISFluidViewPanel:new */
    export class ISFluidViewPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      fluid: any;

      greyCol: any;

      listView: any;

      objectRuntimeButton: any;

      scriptButton: any;

      scriptLabel: any;

      scriptRuntimeButton: any;

      searchText: any;

      subLabel: any;

      viewButtons: any;

      viewMode: any;

      constructor(x: any, y: any, width: any, height: any, fluid: any);

      createChildren(...__args: never[]): any;

      incY(_y: any, _obj: any, _margin: any, ...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      populateListView(...__args: never[]): any;

      render(...__args: never[]): any;

      setFluid(_fluid: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Fluids.ISFluidViewPanel {}
}
