/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor CoopCharacterCreationProfession:new */
    export class CoopCharacterCreationProfession extends lua.client.OptionScreens.CharacterCreationProfession {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);
    }
  }
  export namespace lua.client.OptionScreens.CoopCharacterCreationProfession {}
}
