/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISEmoteRadialMenu:new */
    export class ISEmoteRadialMenu extends lua.shared.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      static defaultMenu: any;

      static icons: any;

      static menu: any;

      static variants: any;

      character: any;

      playerNum: any;

      constructor(character: any);

      center(...__args: never[]): any;

      configEmote(...__args: never[]): any;

      display(...__args: never[]): any;

      emote(emote: any, ...__args: never[]): any;

      fillMenu(submenu: any, ...__args: never[]): any;

      init(...__args: never[]): any;

      /** @noSelf */
      static checkKey: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyPressed: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyReleased: (key: any, ...__args: never[]) => any;

      /** @noSelf */
      static onKeyRepeat: (key: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISEmoteRadialMenu {}
}
