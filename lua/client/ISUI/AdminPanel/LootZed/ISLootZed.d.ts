/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.AdminPanel.LootZed {
    /** @customConstructor ISLootZed:new */
    export class ISLootZed extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      datas: any;

      name: any;

      no: any;

      player: any;

      playerSelect: any;

      searchEntryBox: any;

      titlebarbkg: any;

      constructor(width: any, height: any, player: any);

      destroy: (() => any) | any;

      drawDatas: ((y: any, item: any, alt: any) => any) | any;

      onClick: ((button: any) => any) | any;

      onSelectContainerType: (() => any) | any;

      onTextChange: (() => any) | any;

      render: (() => any) | any;

      titleBarHeight: (() => any) | any;

      update: (() => any) | any;

      updateButtons: (() => any) | any;

      updateContent: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.LootZed.ISLootZed {}
}
