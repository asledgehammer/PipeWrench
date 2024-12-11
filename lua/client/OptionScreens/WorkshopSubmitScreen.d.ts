/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      create(...__args: never[]): any;

      fillList(...__args: never[]): any;

      onButtonBack(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      /** @noSelf */
      static OnSteamWorkshopItemCreated: (
        itemID: any,
        bUserNeedsToAcceptWorkshopLegalAgreement: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static OnSteamWorkshopItemNotCreated: (result: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnSteamWorkshopItemNotUpdated: (result: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnSteamWorkshopItemUpdated: (bUserNeedsToAcceptWorkshopLegalAgreement: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.OptionScreens.WorkshopSubmitScreen {}
}
