/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      onChangeEditOption(option: any, ...__args: never[]): any;

      onChangeOption(option: any, ...__args: never[]): any;

      onChangeZLevelOption(option: any, ...__args: never[]): any;

      onMapMouseDown(x: any, y: any, ...__args: never[]): any;

      onMapMouseMove(dx: any, dy: any, ...__args: never[]): any;

      onMapMouseUp(x: any, y: any, ...__args: never[]): any;

      onMapMouseUpOutside(x: any, y: any, ...__args: never[]): any;

      onMapRightMouseDown(x: any, y: any, ...__args: never[]): any;

      onMapRightMouseUp(x: any, y: any, ...__args: never[]): any;

      onMapRightMouseUpOutside(x: any, y: any, ...__args: never[]): any;

      onOpenLogs(...__args: never[]): any;

      onRecalcChunks(...__args: never[]): any;

      onRenderMouseWheel(del: any, ...__args: never[]): any;

      onSquareDetails(worldX: any, worldY: any, ...__args: never[]): any;

      onTeleport(worldX: any, worldY: any, ...__args: never[]): any;

      onUnsetSelect(worldX: any, worldY: any, ...__args: never[]): any;

      renderTex(...__args: never[]): any;

      rotate(...__args: never[]): any;

      /** @noSelf */
      static onKeyStartPressed: (_key: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionsWindow {
    /** @noSelf */
    export const newIsoRegionsWindow: () => any;
  }
}
