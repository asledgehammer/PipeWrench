/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor ISVehicleACUI:new */
    export class ISVehicleACUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      close: any;

      heater: any;

      knobTex: any;

      ok: any;

      playerNum: any;

      tempKnob: any;

      vehicle: any;

      constructor(x: any, y: any, character: any);

      addKnobValues: (() => any) | any;

      centerOnScreen: (() => any) | any;

      changeKnob: (() => any) | any;

      createChildren: (() => any) | any;

      onClick: ((button: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      setVehicle: ((vehicle: any) => any) | any;

      undisplay: (() => any) | any;

      update: (() => any) | any;

      updateButtons: (() => any) | any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleACUI {}
}
