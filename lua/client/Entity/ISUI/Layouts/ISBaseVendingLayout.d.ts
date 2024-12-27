/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Layouts {
    /** @customConstructor ISBaseVendingLayout:new */
    export class ISBaseVendingLayout extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      arrayList: any;

      blueprintLogic: any;

      buttonBorderColor: any;

      buttonBorderColorDisabled: any;

      buttonImg: any;

      frontImageOff: any;

      frontImageOn: any;

      frontPanel: any;

      itemSlotMoney: any;

      itemSlotOutput: any;

      joypadMoveInterval: any;

      ledInvalidCol: any;

      ledValidCol: any;

      moneyLcd: any;

      mouseOverButtons: any;

      optionArea: any;

      parentPanel: any;

      parts: any;

      player: any;

      playerNum: any;

      resourceMoney: any;

      resourceOutput: any;

      resources: any;

      trayImgs: any;

      trayPanel: any;

      vendingOptions: any;

      constructor(x: any, y: any, _parentPanel: any, _blueprintLogic: any);

      addVendingOption(_index: any, _x: any, _y: any, _resource: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      getCredits(...__args: never[]): any;

      getProductPrice(_productId: any, ...__args: never[]): any;

      getVendingOption(_index: any, ...__args: never[]): any;

      isRunning(...__args: never[]): any;

      isTurnedOn(...__args: never[]): any;

      onButtonClick(_button: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.Entity.ISUI.Layouts.ISBaseVendingLayout {}
}
