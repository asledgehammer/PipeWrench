/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Foraging {
    /** @customConstructor ISZoneDisplay:new */
    export class ISZoneDisplay extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      alpha: any;

      blinkStep: any;

      canSeeSky: any;

      character: any;

      climateManager: any;

      climateMoon: any;

      cloudIntensity: any;

      currentTip: any;

      currentZone: any;

      dawn: any;

      dusk: any;

      fadeElements: any;

      fadeTarget: any;

      flashNumber: any;

      flashNumberMax: any;

      flashTipButton: any;

      fogIntensity: any;

      fogStep: any;

      gameTime: any;

      infoBtn: any;

      manager: any;

      moonBright: any;

      moonPhase: any;

      nextBtn: any;

      noon: any;

      perkLevel: any;

      player: any;

      prevBtn: any;

      showBackground: any;

      showBorder: any;

      sunBright: any;

      timeOfDay: any;

      timeString: any;

      tipPanel: any;

      tooltip: any;

      updateTick: any;

      updateTickMax: any;

      visionBonuses: any;

      zdImages: any;

      constructor(_parent: any);

      canSeeOutside(...__args: never[]): any;

      canSeeThroughObject(_object: any, ...__args: never[]): any;

      doFadeStep(...__args: never[]): any;

      getVisionTooltipText(...__args: never[]): any;

      getZoneTooltipText(...__args: never[]): any;

      isLeapYear(_yearNum: any, ...__args: never[]): any;

      showNextTip(...__args: never[]): any;

      showPrevTip(...__args: never[]): any;

      showTip(_tip: any, _force: any, ...__args: never[]): any;

      toggleTips(...__args: never[]): any;

      update(...__args: never[]): any;

      updateData(...__args: never[]): any;

      updateLocation(...__args: never[]): any;

      updateMoonPhase(...__args: never[]): any;

      updateMoonPosition(_dawn: any, _dusk: any, _timeOfDay: any, ...__args: never[]): any;

      updateSunPosition(_dawn: any, _dusk: any, _timeOfDay: any, ...__args: never[]): any;

      updateTips(...__args: never[]): any;

      updateTooltip(...__args: never[]): any;
    }
  }
  export namespace lua.client.Foraging.ISZoneDisplay {}
}
