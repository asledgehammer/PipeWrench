/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      create(...__args: never[]): any;

      createAvatar(...__args: never[]): any;

      disableBtn(...__args: never[]): any;

      dressWithDefinitions(definition: any, resetWornItems: any, ...__args: never[]): any;

      initPlayer(...__args: never[]): any;

      instantiate(...__args: never[]): any;

      onGenderSelected(combo: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      randomGenericOutfit(...__args: never[]): any;

      render(...__args: never[]): any;

      setAvatarFromUI(...__args: never[]): any;
    }
  }
  export namespace lua.client.OptionScreens.CharacterCreationHeader {}
}
