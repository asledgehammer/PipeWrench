/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Entity.ISUI.Layouts {
    /** @customConstructor ISVendorVendingLayout:new */
    export class ISVendorVendingLayout extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      anim: any;

      arrayList: any;

      blueprintLogic: any;

      buttonBorderColor: any;

      buttonBorderColorDisabled: any;

      buttonImg: any;

      buttons: any;

      frontImageOff: any;

      frontImageOn: any;

      glassPanel: any;

      glassPanelBorder: any;

      hackPane: any;

      interiorPanel: any;

      interiorTextures: any;

      interiorUnlitTextures: any;

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

      productColumns: any;

      resourceMoney: any;

      resourceOutput: any;

      resources: any;

      texGlassBorder: any;

      texGlassPane: any;

      texSpiralBack: any;

      texSpiralFront: any;

      texVendingBar: any;

      trayImgs: any;

      trayPanel: any;

      vendingBarImgs: any;

      vendingBars: any;

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
  export namespace lua.client.Entity.ISUI.Layouts.ISVendorVendingLayout {}
}
