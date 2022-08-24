/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      canSeeOutside: (() => any) | any;

      canSeeThroughObject: ((_object: any) => any) | any;

      doFadeStep: (() => any) | any;

      getVisionTooltipText: (() => any) | any;

      getZoneTooltipText: (() => any) | any;

      isLeapYear: ((_yearNum: any) => any) | any;

      showNextTip: (() => any) | any;

      showPrevTip: (() => any) | any;

      showTip: ((_tip: any, _force: any) => any) | any;

      toggleTips: (() => any) | any;

      update: (() => any) | any;

      updateData: (() => any) | any;

      updateLocation: (() => any) | any;

      updateMoonPhase: (() => any) | any;

      updateMoonPosition: ((_dawn: any, _dusk: any, _timeOfDay: any) => any) | any;

      updateSunPosition: ((_dawn: any, _dusk: any, _timeOfDay: any) => any) | any;

      updateTips: (() => any) | any;

      updateTooltip: (() => any) | any;
    }
  }
  export namespace lua.client.Foraging.ISZoneDisplay {}
}
