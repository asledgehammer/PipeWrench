/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.NPCs.UI {
    /** @customConstructor CharacterInfoPage:new */
    export class CharacterInfoPage extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      avatar: any;

      avatarPanel: any;

      desc: any;

      constructor(x: any, y: any, width: any, height: any, desc: any);

      createAvatar(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      drawAvatar(...__args: never[]): any;

      /** @noSelf */
      static doInfo: (desc: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.NPCs.UI.CharacterInfoPage {}
}
