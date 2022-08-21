/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      drawDatas: ((y: any, item: any, alt: any) => any) | any;

      onAdd: ((char: any) => any) | any;

      onAddOnChar: (() => any) | any;

      onAddZombie: (() => any) | any;

      onRemove: (() => any) | any;

      onRemoveZombie: (() => any) | any;

      populateList: (() => any) | any;

      update: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.ISAttachedItemsUI {}
}
