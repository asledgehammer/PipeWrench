/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISLiteratureList:new */
    export class ISLiteratureList extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      constructor(x: any, y: any, width: any, height: any, character: any);
    }

    /** @customConstructor ISLiteratureMediaList:new */
    export class ISLiteratureMediaList extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      scriptItem: any;

      constructor(x: any, y: any, width: any, height: any, character: any);
    }

    /** @customConstructor ISLiteratureUI:new */
    export class ISLiteratureUI extends lua.client.ISUI.ISCollapsableWindowJoypad {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      drawJoypadFocus: any;

      listbox1: any;

      listbox2: any;

      listboxMedia: any;

      owner: any;

      playerNum: any;

      tabs: any;

      constructor(x: any, y: any, width: any, height: any, character: any, owner: any);

      close: (() => any) | any;

      createChildren: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onJoypadDirDown: ((button: any) => any) | any;

      onJoypadDirUp: ((button: any) => any) | any;

      onJoypadDown: ((button: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      prerender: (() => any) | any;

      setLists: (() => any) | any;

      setMediaLists: ((scriptItems: any) => any) | any;

      /** @noSelf */
      static SetItemHidden: (fullType: any, hidden: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISLiteratureUI {}
}
