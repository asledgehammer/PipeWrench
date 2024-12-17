/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Maps {
    /** @customConstructor ISWorldMapSharing:new */
    export class ISWorldMapSharing extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      currentPanel: any;

      currentSymbol: any;

      mapUI: any;

      panelMain: any;

      panelPlayers: any;

      constructor(mapUI: any);

      applyChanges(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setCurrentPanel(panel: any, ...__args: never[]): any;

      setCurrentSymbol(symbol: any, ...__args: never[]): any;
    }

    /** @customConstructor ISWorldMapSharing_PanelPlayers:new */
    export class ISWorldMapSharing_PanelPlayers extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      buttonAll: any;

      buttonBack: any;

      buttonNone: any;

      listbox: any;

      constructor(x: any, y: any, width: any, height: any);

      becomeCurrent(joypadData: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onButtonAll(...__args: never[]): any;

      onButtonBack(...__args: never[]): any;

      onButtonNone(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      populateList(symbol: any, ...__args: never[]): any;

      setCurrentSymbol(symbol: any, ...__args: never[]): any;

      /** @noSelf */
      static onMiniScoreboardUpdate: (...__args: never[]) => any;

      /** @noSelf */
      static onScoreboardUpdate: (usernames: any, displayNames: any, steamIDs: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.Maps.ISWorldMapSharing {}
}
