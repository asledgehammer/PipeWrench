/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.XpSystem.ISUI {
    /** @customConstructor ISCharacterInfo:new */
    export class ISCharacterInfo extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      static animOffset: any;

      static timerMultiplierAnim: any;

      arrow: any;

      arrowLeft: any;

      barWithTooltip: any;

      char: any;

      disabledArrow: any;

      lastLeveledUpPerk: any;

      lastLevelUpTime: any;

      perks: any;

      playerNum: any;

      progressBarLoaded: any;

      progressBars: any;

      ProgressSkilMultiplier: any;

      reloadSkillBar: any;

      showingPassive: any;

      SkillBarSeparator: any;

      SkillPtsProgressBar: any;

      SkillPtsProgressBarEmpty: any;

      SkillPtsProgressBarStart: any;

      txtLen: any;

      yButton: any;

      constructor(x: any, y: any, width: any, height: any, playerNum: any);

      createChildren(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      updateTooltipForJoypad(...__args: never[]): any;

      /** @noSelf */
      static loadPerk: (self: any, ...__args: never[]) => any;

      /** @noSelf */
      static onResolutionChange: (oldw: any, oldh: any, neww: any, newh: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.XpSystem.ISUI.ISCharacterInfo {}
}
