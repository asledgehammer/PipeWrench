/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Vehicles.ISUI {
    /** @customConstructor ISVehicleDashboard:new */
    export class ISVehicleDashboard extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static lastVehicleDamage: any;

      static lastVehicleDamageTimer: any;

      backgroundTex: any;

      batteryTex: any;

      btn_partSpeed: any;

      character: any;

      dashboardBG: any;

      doorTex: any;

      engineGauge: any;

      engineGaugeTex: any;

      engineTex: any;

      flickAlpha: any;

      flickAlphaUp: any;

      flickingTimer: any;

      fuelGauge: any;

      fuelValue: any;

      gasTank: any;

      gaugeEmpty: any;

      gaugeFull: any;

      gaugeLow: any;

      gauges: any;

      heaterTex: any;

      iconAirCondition: any;

      iconBattery: any;

      iconDoor: any;

      iconEngine: any;

      iconHeater: any;

      iconIgnition: any;

      iconIgnitionHotwired: any;

      iconIgnitionKey: any;

      iconIgnitionStarted: any;

      iconLights: any;

      iconRadio: any;

      iconSpeedRegulator: any;

      iconTrunk: any;

      ignitionTex: any;

      leftSideFuel: any;

      leftSideFuelTex: any;

      lightsTex: any;

      playerNum: any;

      radioTex: any;

      rightSideFuel: any;

      rightSideFuelTex: any;

      speedGauge: any;

      speedGaugeTex: any;

      speedregulatorTex: any;

      texEngine: any;

      trunkTex: any;

      vehicle: any;

      wasKeyInIgnition: any;

      constructor(playerNum: any, chr: any);

      checkEngineFull(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      getAlphaFlick(_default_: any, ...__args: never[]): any;

      onClickDoors(...__args: never[]): any;

      onClickEngine(...__args: never[]): any;

      onClickHeadlights(...__args: never[]): any;

      onClickHeater(...__args: never[]): any;

      onClickKeys(...__args: never[]): any;

      onClickRadio(...__args: never[]): any;

      onClickTrunk(...__args: never[]): any;

      onResolutionChange(...__args: never[]): any;

      render(...__args: never[]): any;

      setVehicle(vehicle: any, ...__args: never[]): any;

      /** @noSelf */
      static damageChecker: (...__args: never[]) => any;

      /** @noSelf */
      static damageFlick: (character: any, ...__args: never[]) => any;

      /** @noSelf */
      static getVehicleCondition: (vehicle: any, ...__args: never[]) => any;

      /** @noSelf */
      static onEnterVehicle: (character: any, ...__args: never[]) => any;

      /** @noSelf */
      static onExitVehicle: (character: any, ...__args: never[]) => any;

      /** @noSelf */
      static onGameStart: (...__args: never[]) => any;

      /** @noSelf */
      static OnGameStart: (...__args: never[]) => any;

      /** @noSelf */
      static onSwitchVehicleSeat: (character: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleDashboard {}
}
