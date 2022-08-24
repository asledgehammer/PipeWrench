/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      destroy: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      render: (() => any) | any;

      titleBarHeight: (() => any) | any;

      /** @noSelf */
      static removeItem: (item: any, player: any) => any;

      /** @noSelf */
      static removeItems: (items: any, player: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.ISRemoveItemTool {}
}
