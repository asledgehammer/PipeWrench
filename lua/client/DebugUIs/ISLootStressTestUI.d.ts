/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor ISLootStreetTestUI:new */
    export class ISLootStreetTestUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      bathroomContainer: any;

      bedroomContainer: any;

      character: any;

      chr: any;

      houseNbr: any;

      houseType: any;

      kitchenContainer: any;

      kitchenProclist: any;

      lootType: any;

      moveWithMouse: any;

      onlyjunk: any;

      playerNum: any;

      richtext: any;

      shedContainer: any;

      start: any;

      totalList: any;

      town: any;

      constructor(x: any, y: any, character: any);

      concatList: ((list: any) => any) | any;

      doRichTextList: ((container: any, roomName: any) => any) | any;

      doRoom: ((container: any, roomName: any, contName: any, procName: any) => any) | any;

      generateBuilding: (() => any) | any;

      getLootDensity: (() => any) | any;

      getRandomKitchenCounter: (() => any) | any;

      itemValidForList: ((item: any) => any) | any;

      startGenerate: (() => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.ISLootStressTestUI {}
}
