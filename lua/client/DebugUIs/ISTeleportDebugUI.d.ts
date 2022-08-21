/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor ISTeleportDebugUI:new */
    export class ISTeleportDebugUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      entryX: any;

      entryY: any;

      entryZ: any;

      fontHgt: any;

      maxLines: any;

      multipleLine: any;

      name: any;

      no: any;

      numLines: any;

      onclick: any;

      player: any;

      target: any;

      titlebarbkg: any;

      yes: any;

      constructor(x: any, y: any, width: any, height: any, player: any, target: any, onclick: any);

      destroy: (() => any) | any;

      onClick: ((button: any) => any) | any;

      render: (() => any) | any;

      titleBarHeight: (() => any) | any;

      updateButtons: (() => any) | any;
    }
  }
  export namespace lua.client.DebugUIs.ISTeleportDebugUI {}
}
