/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.XpSystem.ISUI {
    /** @customConstructor ISCharacterScreen:new */
    export class ISCharacterScreen extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      avatarBackgroundTexture: any;

      avatarHeight: any;

      avatarPanel: any;

      avatarWidth: any;

      avatarX: any;

      avatarY: any;

      beardButton: any;

      bFemale: any;

      char: any;

      displayedTraits: any;

      hairButton: any;

      literatureButton: any;

      literatureUI: any;

      playerNum: any;

      profImage: any;

      refreshNeeded: any;

      sexText: any;

      traits: any;

      weightDecTexture: any;

      weightIncLotTexture: any;

      weightIncTexture: any;

      xOffset: any;

      constructor(x: any, y: any, width: any, height: any, playerNum: any);

      addTooltip: ((option: any, text: any) => any) | any;

      beardMenu: ((button: any) => any) | any;

      create: (() => any) | any;

      hairMenu: ((button: any) => any) | any;

      initJoypadButtons: ((joypadData: any) => any) | any;

      maxTextWidth: ((font: any, text: any, maxWidth: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onShowLiterature: (() => any) | any;

      render: (() => any) | any;

      updateAvatar: (() => any) | any;

      /** @noSelf */
      static loadBeardAndHairStyle: (self: any) => any;

      /** @noSelf */
      static loadFavouriteWeapon: (self: any) => any;

      /** @noSelf */
      static loadProfession: (self: any) => any;

      /** @noSelf */
      static loadTraits: (self: any) => any;

      /** @noSelf */
      static onCutHair: (playerObj: any, hairStyle: any, time: any) => any;

      /** @noSelf */
      static onTrimBeard: (playerObj: any, beardStyle: any) => any;

      /** @noSelf */
      static setDisplayedTraits: (self: any) => any;

      /** @noSelf */
      static traitsChanged: (self: any) => any;
    }

    /** @customConstructor ISCharacterScreenAvatar:new */
    export class ISCharacterScreenAvatar extends lua.client.ISUI.ISUI3DModel {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);
    }
  }
  export namespace lua.client.XpSystem.ISUI.ISCharacterScreen {}
}
