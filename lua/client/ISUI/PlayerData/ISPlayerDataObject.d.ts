/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.PlayerData {
    /** @customConstructor ISPlayerDataObject:new */
    export class ISPlayerDataObject extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      backButtonWheel: any;

      buttonPrompt: any;

      characterInfo: any;

      contextMenu: any;

      craftingUI: any;

      equipped: any;

      h1: any;

      h2: any;

      id: any;

      lootInventory: any;

      mechanicsUI: any;

      miniMap: any;

      playerHotbar: any;

      playerInventory: any;

      radialMenu: any;

      safetyUI: any;

      vehicleDashboard: any;

      w1: any;

      w2: any;

      x1: any;

      x1left: any;

      x2: any;

      y1: any;

      y1top: any;

      y2: any;

      constructor(id: any);

      createInventoryInterface: (() => any) | any;

      onResolutionChange: ((oldw: any, oldh: any, neww: any, newh: any) => any) | any;

      placeInventoryScreens: ((playerID: any, totalPlayers: any, mouse: any) => any) | any;

      revertToKeyboardAndMouse: (() => any) | any;

      /** @noSelf */
      static onKeyPressed: (key: any) => any;
    }
  }
  export namespace lua.client.ISUI.PlayerData.ISPlayerDataObject {}
}
