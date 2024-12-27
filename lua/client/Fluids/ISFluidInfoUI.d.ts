/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Fluids {
    /** @customConstructor ISFluidInfoUI:new */
    export class ISFluidInfoUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      btnClose: any;

      buttonBorderColor: any;

      container: any;

      isIsoPanel: any;

      owner: any;

      panel: any;

      panelText: any;

      panelX: any;

      player: any;

      transferColor: any;

      variableColor: any;

      zOffsetSmallFont: any;

      constructor(x: any, y: any, width: any, height: any, _player: any, _container: any);

      createChildren(...__args: never[]): any;

      onButton(_btn: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OpenPanel: (_player: any, _container: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Fluids.ISFluidInfoUI {}
}
