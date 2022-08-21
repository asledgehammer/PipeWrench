/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor ISScoreboard:new */
    export class ISScoreboard extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      static isAdmin: any;

      banButton: any;

      banIpButton: any;

      buttonPos: any;

      closeButton: any;

      godmodButton: any;

      invisibleButton: any;

      itemheight: any;

      kickButton: any;

      listbox: any;

      listboxYScroll: any;

      maxNameWid: any;

      muteButton: any;

      playersConnected: any;

      refreshButton: any;

      selectedPlayer: any;

      teleportButton: any;

      teleportToYouButton: any;

      voipmuteButton: any;

      constructor(x: any, y: any, width: any, height: any);

      create: (() => any) | any;

      doAdminButtons: (() => any) | any;

      drawMap: ((y: any, item: any, alt: any) => any) | any;

      fillList: ((usernames: any, displayNames: any, steamIDs: any) => any) | any;

      onContext: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      render: (() => any) | any;

      update: (() => any) | any;

      /** @noSelf */
      static onScoreboardUpdate: (usernames: any, displayNames: any, steamIDs: any) => any;

      /** @noSelf */
      static recreate: () => any;
    }
  }
  export namespace lua.client.OptionScreens.ISScoreboard {}
}
