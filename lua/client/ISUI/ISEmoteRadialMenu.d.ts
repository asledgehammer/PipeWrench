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

      center: (() => any) | any;

      configEmote: (() => any) | any;

      display: (() => any) | any;

      emote: ((emote: any) => any) | any;

      fillMenu: ((submenu: any) => any) | any;

      init: (() => any) | any;

      /** @noSelf */
      static checkKey: (key: any) => any;

      /** @noSelf */
      static onKeyPressed: (key: any) => any;

      /** @noSelf */
      static onKeyReleased: (key: any) => any;

      /** @noSelf */
      static onKeyRepeat: (key: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISEmoteRadialMenu {}
}
