/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ZombiePopulationWindow:new */
    export class ZombiePopulationWindow extends lua.client.ISUI.ISCollapsableWindow {
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

      onAddWorldSound: ((worldX: any, worldY: any) => any) | any;

      onChangeOption: ((option: any) => any) | any;

      onMapMouseDown: ((x: any, y: any) => any) | any;

      onMapMouseMove: ((dx: any, dy: any) => any) | any;

      onMapMouseUp: ((x: any, y: any) => any) | any;

      onMapMouseUpOutside: ((x: any, y: any) => any) | any;

      onMapRightMouseDown: ((x: any, y: any) => any) | any;

      onMapRightMouseUp: ((x: any, y: any) => any) | any;

      onMapRightMouseUpOutside: ((x: any, y: any) => any) | any;

      onRenderMouseWheel: ((del: any) => any) | any;

      onTeleport: ((worldX: any, worldY: any) => any) | any;

      renderTex: (() => any) | any;

      /** @noSelf */
      static OnOpenPanel: () => any;
    }
  }
  export namespace lua.client.ISUI.ZombiePopulationWindow {
    /** @noSelf */
    export const newZombiePopulationWindow: () => any;
  }
}
