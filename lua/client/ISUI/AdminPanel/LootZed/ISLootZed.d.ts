/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      destroy(...__args: never[]): any;

      drawDatas(y: any, item: any, alt: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onSelectContainerType(...__args: never[]): any;

      onTextChange(...__args: never[]): any;

      render(...__args: never[]): any;

      titleBarHeight(...__args: never[]): any;

      update(...__args: never[]): any;

      updateButtons(...__args: never[]): any;

      updateContent(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.AdminPanel.LootZed.ISLootZed {}
}
