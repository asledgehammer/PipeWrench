/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      addKnobValues(...__args: never[]): any;

      centerOnScreen(...__args: never[]): any;

      changeKnob(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onClick(button: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setVehicle(vehicle: any, ...__args: never[]): any;

      undisplay(...__args: never[]): any;

      update(...__args: never[]): any;

      updateButtons(...__args: never[]): any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleACUI {}
}
