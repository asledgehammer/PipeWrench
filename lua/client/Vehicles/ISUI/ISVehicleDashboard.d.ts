/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      iconSpeedRegulator: any;

      iconTrunk: any;

      ignitionTex: any;

      lightsTex: any;

      playerNum: any;

      speedGauge: any;

      speedGaugeTex: any;

      speedregulatorTex: any;

      texEngine: any;

      trunkTex: any;

      vehicle: any;

      wasKeyInIgnition: any;

      constructor(playerNum: any, chr: any);

      checkEngineFull: (() => any) | any;

      createChildren: (() => any) | any;

      getAlphaFlick: ((_default_: any) => any) | any;

      onClickDoors: (() => any) | any;

      onClickEngine: (() => any) | any;

      onClickHeadlights: (() => any) | any;

      onClickHeater: (() => any) | any;

      onClickKeys: (() => any) | any;

      onClickTrunk: (() => any) | any;

      onResolutionChange: (() => any) | any;

      render: (() => any) | any;

      setVehicle: ((vehicle: any) => any) | any;

      /** @noSelf */
      static damageChecker: () => any;

      /** @noSelf */
      static damageFlick: (character: any) => any;

      /** @noSelf */
      static getVehicleCondition: (vehicle: any) => any;

      /** @noSelf */
      static onEnterVehicle: (character: any) => any;

      /** @noSelf */
      static onExitVehicle: (character: any) => any;

      /** @noSelf */
      static onGameStart: () => any;

      /** @noSelf */
      static OnGameStart: () => any;

      /** @noSelf */
      static onSwitchVehicleSeat: (character: any) => any;
    }
  }
  export namespace lua.client.Vehicles.ISUI.ISVehicleDashboard {}
}
