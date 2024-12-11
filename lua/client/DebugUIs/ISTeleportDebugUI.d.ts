/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      destroy(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      titleBarHeight(...__args: never[]): any;

      updateButtons(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.ISTeleportDebugUI {}
}
