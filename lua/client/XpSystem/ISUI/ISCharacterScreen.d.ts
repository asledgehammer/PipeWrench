/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addTooltip(option: any, text: any, ...__args: never[]): any;

      beardMenu(button: any, ...__args: never[]): any;

      create(...__args: never[]): any;

      hairMenu(button: any, ...__args: never[]): any;

      initJoypadButtons(joypadData: any, ...__args: never[]): any;

      maxTextWidth(font: any, text: any, maxWidth: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      onShowLiterature(...__args: never[]): any;

      render(...__args: never[]): any;

      updateAvatar(...__args: never[]): any;

      /** @noSelf */
      static loadBeardAndHairStyle: (self: any, ...__args: never[]) => any;

      /** @noSelf */
      static loadFavouriteWeapon: (self: any, ...__args: never[]) => any;

      /** @noSelf */
      static loadProfession: (self: any, ...__args: never[]) => any;

      /** @noSelf */
      static loadTraits: (self: any, ...__args: never[]) => any;

      /** @noSelf */
      static onCutHair: (playerObj: any, hairStyle: any, time: any, ...__args: never[]) => any;

      /** @noSelf */
      static onTrimBeard: (playerObj: any, beardStyle: any, ...__args: never[]) => any;

      /** @noSelf */
      static setDisplayedTraits: (self: any, ...__args: never[]) => any;

      /** @noSelf */
      static traitsChanged: (self: any, ...__args: never[]) => any;
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
