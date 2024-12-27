/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Layouts {
    /** @customConstructor ISBaseStockingLayout:new */
    export class ISBaseStockingLayout extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      arrayList: any;

      blueprintLogic: any;

      buttonOffColor: any;

      buttonOnColor: any;

      buttonPower: any;

      coverPanel: any;

      frontPanel: any;

      interiorTextures: any;

      interiorUnlitTextures: any;

      itemSlotKey: any;

      itemSlotMoney: any;

      joypadMoveInterval: any;

      ledInvalidCol: any;

      ledValidCol: any;

      parentPanel: any;

      parts: any;

      player: any;

      playerNum: any;

      productColumns: any;

      productPanelHeight: any;

      productPanelWidth: any;

      resourceKey: any;

      resourceMoney: any;

      resources: any;

      scriptLabel: any;

      textColorOff: any;

      textColorOn: any;

      vendingOptions: any;

      constructor(x: any, y: any, _parentPanel: any, _blueprintLogic: any);

      addVendingOption(_index: any, _x: any, _y: any, _resource: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      getMaxCredits(...__args: never[]): any;

      getProductPrice(_productId: any, ...__args: never[]): any;

      getVendingOption(_index: any, ...__args: never[]): any;

      isRunning(...__args: never[]): any;

      isTurnedOn(...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Layouts.ISBaseStockingLayout {}
}
