/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addExplosion(square: any, ...__args: never[]): any;

      addFire(square: any, ...__args: never[]): any;

      addSmoke(square: any, ...__args: never[]): any;

      applyOnArea(...__args: never[]): any;

      destroy(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      removeFire(square: any, ...__args: never[]): any;

      removeSmoke(square: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      /** @noSelf */
      static openPanel: (x: any, y: any, playerObj: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.BrushTool.FireBrushUI {}
}
