/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Fireplace {
    /** @customConstructor ISOvenUI:new */
    export class ISOvenUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      close: any;

      knobTex: any;

      ok: any;

      oven: any;

      tempKnob: any;

      tempType: any;

      timerKnob: any;

      constructor(x: any, y: any, width: any, height: any, oven: any, character: any);

      addKnobValues(...__args: never[]): any;

      ChangeKnob(...__args: never[]): any;

      changeTempType(...__args: never[]): any;

      onChangeTempType(clickedOption: any, enabled: any, ...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      update(...__args: never[]): any;

      updateButtons(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Fireplace.ISOvenUI {}
}
