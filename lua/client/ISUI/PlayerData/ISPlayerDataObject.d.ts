/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.PlayerData {
    /** @customConstructor ISPlayerDataObject:new */
    export class ISPlayerDataObject extends sharedLua.shared.ISBaseObject.ISBaseObject {
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

      sleepingUI: any;

      vehicleDashboard: any;

      w1: any;

      w2: any;

      x1: any;

      x1left: any;

      x2: any;

      y1: any;

      y1top: any;

      y2: any;

      zoneUI: any;

      constructor(id: any);

      createInventoryInterface(...__args: never[]): any;

      onResolutionChange(oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]): any;

      placeInventoryScreens(playerID: any, totalPlayers: any, mouse: any, ...__args: never[]): any;

      revertToKeyboardAndMouse(...__args: never[]): any;

      /** @noSelf */
      static onKeyPressed: (key: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.PlayerData.ISPlayerDataObject {}
}
