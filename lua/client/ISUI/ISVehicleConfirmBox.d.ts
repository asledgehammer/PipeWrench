/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISVehicleConfirmBox:new */
    export class ISVehicleConfirmBox extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      close: any;

      drawJoypadFocus: any;

      texSpiffoWarning: any;

      constructor();

      createChildren(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onOptionMouseDown(button: any, x: any, y: any, ...__args: never[]): any;
    }

    /** @customConstructor ISVehiclePartListBox:new */
    export class ISVehiclePartListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;
    }
  }
  export namespace lua.client.ISUI.ISVehicleConfirmBox {}
}
