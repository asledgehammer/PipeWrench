/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      create(...__args: never[]): any;

      onButtonDisconnect(...__args: never[]): any;

      onButtonInstall(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      progress(id: any, downloaded: any, total: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setRequiredItems(itemIDs: any, ...__args: never[]): any;

      updateItemDetails(detailsList: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.OptionScreens.ServerWorkshopItemScreen {}
}
