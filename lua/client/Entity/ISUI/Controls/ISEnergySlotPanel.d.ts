/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Controls {
    /** @customConstructor ISEnergySlotPanel:new */
    export class ISEnergySlotPanel extends lua.client.Entity.ISUI.Controls.ISGroupBox {
      [id: string]: any;
      static [id: string]: any;

      entity: any;

      isVertical: any;

      player: any;

      tableLayout: any;

      constructor(x: any, y: any, width: any, height: any, player: any, entity: any, _styleLabel: any);

      addResource(
        _resourceEnergy: any,
        _styleEnergySlot: any,
        _styleIcon: any,
        _styleBar: any,
        ...__args: never[]
      ): any;

      addResources(_resources: any, _styleEnergySlot: any, _styleIcon: any, _styleBar: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Controls.ISEnergySlotPanel {}
}
