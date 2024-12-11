/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor ISAttachedItemsUI:new */
    export class ISAttachedItemsUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      add: any;

      character: any;

      chr: any;

      datas: any;

      itemType: any;

      itemTypeLabel: any;

      location: any;

      locationLabel: any;

      moveWithMouse: any;

      onzombie: any;

      playerNum: any;

      remove: any;

      removeZombie: any;

      constructor(x: any, y: any, character: any);

      drawDatas(y: any, item: any, alt: any, ...__args: never[]): any;

      onAdd(char: any, ...__args: never[]): any;

      onAddOnChar(...__args: never[]): any;

      onAddZombie(...__args: never[]): any;

      onRemove(...__args: never[]): any;

      onRemoveZombie(...__args: never[]): any;

      populateList(...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.ISAttachedItemsUI {}
}
