/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      addKnobValues: (() => any) | any;

      ChangeKnob: (() => any) | any;

      createChildren: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;

      setLightbarLightsMode: ((mode: any) => any) | any;

      setLightbarSirenMode: ((mode: any) => any) | any;

      setVehicle: ((vehicle: any) => any) | any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISLightbarUI {}
}
