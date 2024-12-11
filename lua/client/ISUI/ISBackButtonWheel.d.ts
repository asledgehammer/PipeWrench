/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISBackButtonWheel:new */
    export class ISBackButtonWheel extends lua.client.ISUI.ISRadialMenu {
      [id: string]: any;
      static [id: string]: any;

      static disableCrafting: any;

      static disableMoveable: any;

      static disablePlayerInfo: any;

      static disableTime: any;

      static disableZoomIn: any;

      static disableZoomOut: any;

      showPausedMessage: any;

      constructor(playerNum: any);

      addCommands(...__args: never[]): any;

      onCommand(command: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISBackButtonWheel {}
}
