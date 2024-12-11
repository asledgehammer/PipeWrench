/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      concatList(list: any, ...__args: never[]): any;

      doRichTextList(container: any, roomName: any, ...__args: never[]): any;

      doRoom(container: any, roomName: any, contName: any, procName: any, ...__args: never[]): any;

      generateBuilding(...__args: never[]): any;

      getLootDensity(...__args: never[]): any;

      getRandomKitchenCounter(...__args: never[]): any;

      itemValidForList(item: any, ...__args: never[]): any;

      startGenerate(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.ISLootStressTestUI {}
}
