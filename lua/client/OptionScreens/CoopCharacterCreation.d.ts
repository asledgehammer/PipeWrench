/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor CoopCharacterCreation:new */
    export class CoopCharacterCreation extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      static visibleUI: any;

      charCreationHeader: any;

      charCreationMain: any;

      charCreationProfession: any;

      coopUserName: any;

      joypadData: any;

      mapSpawnSelect: any;

      playerIndex: any;

      constructor(joypadIndex: any, joypadData: any, playerIndex: any);

      accept(...__args: never[]): any;

      accept1(...__args: never[]): any;

      cancel(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      initPlayer(...__args: never[]): any;

      newPlayerMouse(...__args: never[]): any;

      OnJoypadBeforeDeactivate(index: any, ...__args: never[]): any;

      /** @noSelf */
      static getJoypad: (...__args: never[]) => any;

      /** @noSelf */
      static newPlayer: (joypadIndex: any, joypadData: any, ...__args: never[]) => any;

      /** @noSelf */
      static setVisibleAllUI: (visible: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.OptionScreens.CoopCharacterCreation {}
}
