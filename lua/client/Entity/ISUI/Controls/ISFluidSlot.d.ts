/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Controls {
    /** @customConstructor ISFluidSlot:new */
    export class ISFluidSlot extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      buttonClear: any;

      buttonTransfer: any;

      disableButtons: any;

      enableClear: any;

      enableTransfer: any;

      fluidBar: any;

      fluidBorderColorOrig: any;

      functionTarget: any;

      hideButtons: any;

      margin: any;

      minimumBarSize: any;

      onClearFluids: any;

      onTransferFluids: any;

      player: any;

      resource: any;

      styleBar: any;

      styleBtnClear: any;

      styleBtnTransfer: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        player: any,
        resource: any,
        _styleBtnTransfer: any,
        _styleBtnClear: any,
        _styleBar: any,
      );

      calculateLayout(_preferredWidth: any, _preferredHeight: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setResource(_resource: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Controls.ISFluidSlot {}
}
