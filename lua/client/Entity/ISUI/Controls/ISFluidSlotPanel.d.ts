/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Controls {
    /** @customConstructor ISFluidSlotPanel:new */
    export class ISFluidSlotPanel extends lua.client.Entity.ISUI.Controls.ISGroupBox {
      [id: string]: any;
      static [id: string]: any;

      entity: any;

      player: any;

      tableLayout: any;

      constructor(x: any, y: any, width: any, height: any, player: any, entity: any, _styleLabel: any);

      addResource(
        _resourceFluid: any,
        _styleFluidSlot: any,
        _styleBtnTransfer: any,
        _styleBtnClear: any,
        _styleBar: any,
        ...__args: never[]
      ): any;

      addResources(
        _resources: any,
        _styleFluidSlot: any,
        _styleBtnTransfer: any,
        _styleBtnClear: any,
        _styleBar: any,
        ...__args: never[]
      ): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Controls.ISFluidSlotPanel {}
}
