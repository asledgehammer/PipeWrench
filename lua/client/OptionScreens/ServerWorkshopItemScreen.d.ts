/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor ServerWorkshopItemScreen:new */
    export class ServerWorkshopItemScreen extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      disconnectButton: any;

      installButton: any;

      label: any;

      listbox: any;

      prevScreen: any;

      constructor(x: any, y: any, width: any, height: any);

      create: (() => any) | any;

      onButtonDisconnect: (() => any) | any;

      onButtonInstall: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      progress: ((id: any, downloaded: any, total: any) => any) | any;

      render: (() => any) | any;

      setRequiredItems: ((itemIDs: any) => any) | any;

      updateItemDetails: ((detailsList: any) => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.ServerWorkshopItemScreen {}
}
