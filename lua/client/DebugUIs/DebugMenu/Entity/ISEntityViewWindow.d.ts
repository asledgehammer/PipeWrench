/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Entity {
    /** @customConstructor ISEntityViewWindow:new */
    export class ISEntityViewWindow extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static coords: any;

      static instance: any;

      entityPanel: any;

      entityPanelY: any;

      greyCol: any;

      minimumHeight: any;

      minimumWidth: any;

      pin: any;

      player: any;

      playerNum: any;

      constructor(x: any, y: any, width: any, height: any);

      onResize(...__args: never[]): any;

      setEntity(_entity: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (_entity: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Entity.ISEntityViewWindow {}
}
