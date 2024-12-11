/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      close(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onJoypadDirDown(button: any, ...__args: never[]): any;

      onJoypadDirUp(button: any, ...__args: never[]): any;

      onJoypadDown(button: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      prerender(...__args: never[]): any;

      setLists(...__args: never[]): any;

      setMediaLists(scriptItems: any, ...__args: never[]): any;

      /** @noSelf */
      static SetItemHidden: (fullType: any, hidden: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISLiteratureUI {}
}
