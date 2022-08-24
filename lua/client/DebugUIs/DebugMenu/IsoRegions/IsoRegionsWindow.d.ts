/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs.DebugMenu.IsoRegions {
    /** @customConstructor IsoRegionsWindow:new */
    export class IsoRegionsWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      mouseDownX: any;

      mouseDownY: any;

      mouseMoved: any;

      panning: any;

      renderPanel: any;

      settingPath: any;

      xpos: any;

      ypos: any;

      zoom: any;

      constructor(x: any, y: any, width: any, height: any);

      onChangeEditOption: ((option: any) => any) | any;

      onChangeOption: ((option: any) => any) | any;

      onChangeZLevelOption: ((option: any) => any) | any;

      onMapMouseDown: ((x: any, y: any) => any) | any;

      onMapMouseMove: ((dx: any, dy: any) => any) | any;

      onMapMouseUp: ((x: any, y: any) => any) | any;

      onMapMouseUpOutside: ((x: any, y: any) => any) | any;

      onMapRightMouseDown: ((x: any, y: any) => any) | any;

      onMapRightMouseUp: ((x: any, y: any) => any) | any;

      onMapRightMouseUpOutside: ((x: any, y: any) => any) | any;

      onOpenLogs: (() => any) | any;

      onRecalcChunks: (() => any) | any;

      onRenderMouseWheel: ((del: any) => any) | any;

      onSquareDetails: ((worldX: any, worldY: any) => any) | any;

      onTeleport: ((worldX: any, worldY: any) => any) | any;

      onUnsetSelect: ((worldX: any, worldY: any) => any) | any;

      renderTex: (() => any) | any;

      rotate: (() => any) | any;

      /** @noSelf */
      static onKeyStartPressed: (_key: any) => any;

      /** @noSelf */
      static OnOpenPanel: () => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionsWindow {
    /** @noSelf */
    export const newIsoRegionsWindow: () => any;
  }
}
