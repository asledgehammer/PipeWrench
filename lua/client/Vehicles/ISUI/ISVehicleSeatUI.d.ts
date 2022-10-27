/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor ISVehicleSeatUI:new */
    export class ISVehicleSeatUI extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      characterSeat: any;

      close: any;

      joypadSeat: any;

      mouseOverExit: any;

      mouseOverSeat: any;

      playerNum: any;

      richText: any;

      seatText: any;

      vehicle: any;

      constructor(x: any, y: any, character: any);

      centerOnScreen: (() => any) | any;

      closeSelf: (() => any) | any;

      createChildren: (() => any) | any;

      exitSeat: ((seat: any) => any) | any;

      isKeyConsumed: ((key: any) => any) | any;

      isSeatInstalled: ((seat: any) => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onKeyPress: ((key: any) => any) | any;

      onKeyRelease: ((key: any) => any) | any;

      onMouseDownOutside: ((x: any, y: any) => any) | any;

      render: (() => any) | any;

      setVehicle: ((vehicle: any) => any) | any;

      update: (() => any) | any;

      useSeat: ((seat: any) => any) | any;
    }

    export abstract class ImageScale {
      static [id: string]: any;
    }

    export abstract class SeatOffsetX {
      static [id: string]: any;
    }

    export abstract class SeatOffsetY {
      static [id: string]: any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleSeatUI {}
}
