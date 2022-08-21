/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.NPCs.UI {
    /** @customConstructor CharacterInfoPage:new */
    export class CharacterInfoPage extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      avatar: any;

      avatarPanel: any;

      desc: any;

      constructor(x: any, y: any, width: any, height: any, desc: any);

      createAvatar: (() => any) | any;

      createChildren: (() => any) | any;

      drawAvatar: (() => any) | any;

      /** @noSelf */
      static doInfo: (desc: any) => any;
    }
  }
  export namespace lua.client.NPCs.UI.CharacterInfoPage {}
}
