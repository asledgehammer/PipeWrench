/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      centerOnScreen(...__args: never[]): any;

      closeSelf(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      exitSeat(seat: any, ...__args: never[]): any;

      isKeyConsumed(key: any, ...__args: never[]): any;

      isSeatInstalled(seat: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onKeyPress(key: any, ...__args: never[]): any;

      onKeyRelease(key: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setVehicle(vehicle: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      useSeat(seat: any, ...__args: never[]): any;
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
