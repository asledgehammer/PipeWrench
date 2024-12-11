/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor ISRemoveItemTool:new */
    export class ISRemoveItemTool extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      close: any;

      endPos: any;

      itemType: any;

      maxLines: any;

      multipleLine: any;

      name: any;

      numLines: any;

      player: any;

      remove: any;

      select: any;

      selectEnd: any;

      selectStart: any;

      startPos: any;

      titlebarbkg: any;

      zPos: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      destroy(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      titleBarHeight(...__args: never[]): any;

      /** @noSelf */
      static removeItem: (item: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static removeItems: (items: any, player: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.ISRemoveItemTool {}
}
