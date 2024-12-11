/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor ISVehicleRoadtripDebug:new */
    export class ISVehicleRoadtripDebug extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      initialBattery: any;

      initialGas: any;

      moveWithMouse: any;

      partsCondition: any;

      playerNum: any;

      previousSq: any;

      start: any;

      startedTrip: any;

      startTimer: any;

      stop: any;

      stopTimer: any;

      totalDist: any;

      vehicle: any;

      constructor(x: any, y: any, character: any);

      startRoadtrip(...__args: never[]): any;

      stopRoadtrip(...__args: never[]): any;

      update(...__args: never[]): any;

      updateXY(x: any, y: any, startingListY: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleRoadtripDebug {}
}
