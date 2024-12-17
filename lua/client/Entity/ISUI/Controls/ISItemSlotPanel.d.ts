/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Controls {
    /** @customConstructor ISItemSlotPanel:new */
    export class ISItemSlotPanel extends lua.client.Entity.ISUI.Controls.ISGroupBox {
      [id: string]: any;
      static [id: string]: any;

      drawProgress: any;

      entity: any;

      player: any;

      styleCell: any;

      tableLayout: any;

      constructor(x: any, y: any, width: any, height: any, player: any, entity: any, _styleLabel: any, _styleCell: any);

      addResource(_resourceItem: any, _styleItemSlot: any, ...__args: never[]): any;

      addResources(_resources: any, _styleItemSlot: any, ...__args: never[]): any;

      onItemSlotAddItems(_itemSlot: any, _itemList: any, ...__args: never[]): any;

      onItemSlotRemoveItems(_itemSlot: any, _isRightClick: any, _isShift: any, ...__args: never[]): any;

      onItemSlotRemoveSingleItem(_itemSlot: any, _item: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Controls.ISItemSlotPanel {}
}
