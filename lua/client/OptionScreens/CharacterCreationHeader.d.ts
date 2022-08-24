/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor CharacterCreationHeader:new */
    export class CharacterCreationHeader extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      avatarPanel: any;

      femaletex: any;

      forenameEntry: any;

      genderCombo: any;

      itemheightoverride: any;

      javaObject: any;

      maletex: any;

      surnameEntry: any;

      constructor(x: any, y: any, width: any, height: any);

      create: (() => any) | any;

      createAvatar: (() => any) | any;

      disableBtn: (() => any) | any;

      dressWithDefinitions: ((definition: any, resetWornItems: any) => any) | any;

      initPlayer: (() => any) | any;

      instantiate: (() => any) | any;

      onGenderSelected: ((combo: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      randomGenericOutfit: (() => any) | any;

      render: (() => any) | any;

      setAvatarFromUI: (() => any) | any;
    }
  }
  export namespace lua.client.OptionScreens.CharacterCreationHeader {}
}
