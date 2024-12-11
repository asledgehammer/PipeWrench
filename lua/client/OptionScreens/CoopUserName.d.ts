/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.OptionScreens {
    /** @customConstructor CoopUserName:new */
    export class CoopUserName extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static instance: any;

      backButton: any;

      entry: any;

      fontHgt: any;

      nextButton: any;

      constructor(x: any, y: any, width: any, height: any);

      beforeShow(...__args: never[]): any;

      clickBack(...__args: never[]): any;

      clickNext(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      getUserName(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      shouldShow(...__args: never[]): any;
    }
  }
  export namespace lua.client.OptionScreens.CoopUserName {}
}
