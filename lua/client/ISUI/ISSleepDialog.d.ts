/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISSleepDialog:new */
    export class ISSleepDialog extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      name: any;

      no: any;

      player: any;

      playerNum: any;

      playerX: any;

      playerY: any;

      spinBox: any;

      text: any;

      yes: any;

      constructor(x: any, y: any, width: any, height: any, text: any, player: any);

      destroy(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISSleepDialog {}
}
