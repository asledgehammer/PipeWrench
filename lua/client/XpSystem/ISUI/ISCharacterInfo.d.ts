/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      createChildren: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      render: (() => any) | any;

      updateTooltipForJoypad: (() => any) | any;

      /** @noSelf */
      static loadPerk: (self: any) => any;

      /** @noSelf */
      static onResolutionChange: (oldw: any, oldh: any, neww: any, newh: any) => any;
    }
  }
  export namespace lua.client.XpSystem.ISUI.ISCharacterInfo {}
}
