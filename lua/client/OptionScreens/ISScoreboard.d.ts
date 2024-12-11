/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      create(...__args: never[]): any;

      doAdminButtons(...__args: never[]): any;

      drawMap(y: any, item: any, alt: any, ...__args: never[]): any;

      fillList(usernames: any, displayNames: any, steamIDs: any, ...__args: never[]): any;

      onContext(button: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static onScoreboardUpdate: (usernames: any, displayNames: any, steamIDs: any, ...__args: never[]) => any;

      /** @noSelf */
      static recreate: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.OptionScreens.ISScoreboard {}
}
