/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      create(...__args: never[]): any;

      createPlayerList(...__args: never[]): any;

      createSurvivorDescFromData(newPlayer: any, ...__args: never[]): any;

      drawMap(y: any, item: any, alt: any, ...__args: never[]): any;

      getAllSavedPlayers(...__args: never[]): any;

      getColor(line: any, ...__args: never[]): any;

      instantiate(...__args: never[]): any;

      onDblClickPlayer(...__args: never[]): any;

      onDeleteModalClick(button: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onGainJoypadFocus_child(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate(joypadData: any, ...__args: never[]): any;

      onJoypadBeforeDeactivate_child(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus_child(joypadData: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      /** @noSelf */
      static clickPlay: (...__args: never[]) => any;

      /** @noSelf */
      static initWorld: (...__args: never[]) => any;

      /** @noSelf */
      static newGame: (player: any, square: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.OptionScreens.LastStandPlayerSelect {}
}
