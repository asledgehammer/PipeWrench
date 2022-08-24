/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor CoopCharacterCreationMain:new */
    export class CoopCharacterCreationMain extends lua.client.OptionScreens.CharacterCreationMain {
      [id: string]: any;
      static [id: string]: any;

      constructor(x: any, y: any, width: any, height: any);
    }
  }
  export namespace lua.client.OptionScreens.CoopCharacterCreationMain {}
}
