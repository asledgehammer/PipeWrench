/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor ISLightbarUI:new */
    export class ISLightbarUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      btn_sndAlarm: any;

      btn_sndStandby: any;

      btn_sndWall: any;

      btn_sndYelp: any;

      close: any;

      lightsKnob: any;

      playerNum: any;

      playerObj: any;

      vehicle: any;

      constructor(x: any, y: any, width: any, height: any, playerObj: any);

      addKnobValues(...__args: never[]): any;

      ChangeKnob(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;

      setLightbarLightsMode(mode: any, ...__args: never[]): any;

      setLightbarSirenMode(mode: any, ...__args: never[]): any;

      setVehicle(vehicle: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISLightbarUI {}
}
