/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISVehicleConfirmBox:new */
    export class ISVehicleConfirmBox extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      close: any;

      drawJoypadFocus: any;

      texSpiffoWarning: any;

      constructor();

      createChildren: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onOptionMouseDown: ((button: any, x: any, y: any) => any) | any;
    }

    /** @customConstructor ISVehiclePartListBox:new */
    export class ISVehiclePartListBox extends lua.client.ISUI.ISScrollingListBox {
      [id: string]: any;
      static [id: string]: any;
    }
  }
  export namespace lua.client.ISUI.ISVehicleConfirmBox {}
}
