/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.JoyPad {
    /** @customConstructor ISJoypadDebugUI:new */
    export class ISJoypadDebugUI extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      constructor();

      addLine: ((x1: any, x2: any, y: any, label: any, value: any) => any) | any;
    }
  }
  export namespace lua.client.JoyPad.ISJoypadDebugUI {}
}
