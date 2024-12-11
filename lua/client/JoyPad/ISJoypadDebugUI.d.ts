/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.JoyPad {
    /** @customConstructor ISJoypadDebugUI:new */
    export class ISJoypadDebugUI extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      constructor();

      addLine(x1: any, x2: any, y: any, label: any, value: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.JoyPad.ISJoypadDebugUI {}
}
