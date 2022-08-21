/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor LastStandPlayerSelect:new */
    export class LastStandPlayerSelect extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      backButton: any;

      deleteButton: any;

      itemheightoverride: any;

      javaObject: any;

      joyfocus: any;

      listbox: any;

      newButton: any;

      playButton: any;

      playersDesc: any;

      selected: any;

      constructor(x: any, y: any, width: any, height: any);

      create: (() => any) | any;

      createPlayerList: (() => any) | any;

      createSurvivorDescFromData: ((newPlayer: any) => any) | any;

      drawMap: ((y: any, item: any, alt: any) => any) | any;

      getAllSavedPlayers: (() => any) | any;

      getColor: ((line: any) => any) | any;

      instantiate: (() => any) | any;

      onDblClickPlayer: (() => any) | any;

      onDeleteModalClick: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onGainJoypadFocus_child: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate: ((joypadData: any) => any) | any;

      onJoypadBeforeDeactivate_child: ((joypadData: any) => any) | any;

      onLoseJoypadFocus_child: ((joypadData: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      render: (() => any) | any;

      /** @noSelf */
      static clickPlay: () => any;

      /** @noSelf */
      static initWorld: () => any;

      /** @noSelf */
      static newGame: (player: any, square: any) => any;
    }
  }
  export namespace lua.client.OptionScreens.LastStandPlayerSelect {}
}
