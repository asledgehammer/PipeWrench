/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs {
    /** @customConstructor ISDebugAnimationTextUI:new */
    export class ISDebugAnimationTextUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      textBox: any;

      constructor(x: any, y: any, width: any, height: any, chr: any);

      setText(...__args: never[]): any;
    }
  }
  export namespace lua.client.DebugUIs.ISDebugAnimationTextUI {}
}
