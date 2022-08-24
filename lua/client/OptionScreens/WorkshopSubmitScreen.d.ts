/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor WorkshopSubmitScreen:new */
    export class WorkshopSubmitScreen extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      page1: any;

      page10: any;

      page2: any;

      page3: any;

      page4: any;

      page5: any;

      page6: any;

      page7: any;

      page8: any;

      page9: any;

      constructor(x: any, y: any, width: any, height: any);

      create: (() => any) | any;

      fillList: (() => any) | any;

      onButtonBack: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      /** @noSelf */
      static OnSteamWorkshopItemCreated: (itemID: any, bUserNeedsToAcceptWorkshopLegalAgreement: any) => any;

      /** @noSelf */
      static OnSteamWorkshopItemNotCreated: (result: any) => any;

      /** @noSelf */
      static OnSteamWorkshopItemNotUpdated: (result: any) => any;

      /** @noSelf */
      static OnSteamWorkshopItemUpdated: (bUserNeedsToAcceptWorkshopLegalAgreement: any) => any;
    }
  }
  export namespace lua.client.OptionScreens.WorkshopSubmitScreen {}
}
