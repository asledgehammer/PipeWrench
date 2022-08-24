/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.BrushTool {
    /** @customConstructor FireBrushUI:new */
    export class FireBrushUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      addByArea: any;

      addByClick: any;

      brushType: any;

      close: any;

      endPos: any;

      isAdd: any;

      player: any;

      removeByArea: any;

      removeByClick: any;

      selectByClick: any;

      selectEnd: any;

      selectStart: any;

      startPos: any;

      titlebarbkg: any;

      zPos: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      addExplosion: ((square: any) => any) | any;

      addFire: ((square: any) => any) | any;

      addSmoke: ((square: any) => any) | any;

      applyOnArea: (() => any) | any;

      destroy: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      removeFire: ((square: any) => any) | any;

      removeSmoke: ((square: any) => any) | any;

      render: (() => any) | any;

      /** @noSelf */
      static openPanel: (x: any, y: any, playerObj: any) => any;
    }
  }
  export namespace lua.client.DebugUIs.BrushTool.FireBrushUI {}
}
