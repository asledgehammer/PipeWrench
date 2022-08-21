/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      accept: (() => any) | any;

      accept1: (() => any) | any;

      cancel: (() => any) | any;

      createChildren: (() => any) | any;

      initPlayer: (() => any) | any;

      newPlayerMouse: (() => any) | any;

      OnJoypadBeforeDeactivate: ((index: any) => any) | any;

      /** @noSelf */
      static getJoypad: () => any;

      /** @noSelf */
      static newPlayer: (joypadIndex: any, joypadData: any) => any;

      /** @noSelf */
      static setVisibleAllUI: (visible: any) => any;
    }
  }
  export namespace lua.client.OptionScreens.CoopCharacterCreation {}
}
