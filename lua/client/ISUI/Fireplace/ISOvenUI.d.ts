/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      addKnobValues: (() => any) | any;

      ChangeKnob: (() => any) | any;

      changeTempType: (() => any) | any;

      onChangeTempType: ((clickedOption: any, enabled: any) => any) | any;

      onClick: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      update: (() => any) | any;

      updateButtons: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.Fireplace.ISOvenUI {}
}
