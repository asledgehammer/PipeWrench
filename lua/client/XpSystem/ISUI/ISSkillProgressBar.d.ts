/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.XpSystem.ISUI {
    /** @customConstructor ISSkillProgressBar:new */
    export class ISSkillProgressBar extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static alpha: any;

      static upAlpha: any;

      AddSkillBtn: any;

      char: any;

      level: any;

      message: any;

      parent: any;

      perk: any;

      playerNum: any;

      ProgressSkill: any;

      SkillBtnEmptWhitey: any;

      SkillBtnEmpty: any;

      SkillBtnEmptyBig: any;

      tooltip: any;

      UnlockedSkill: any;

      xp: any;

      xpForLvl: any;

      constructor(x: any, y: any, width: any, height: any, playerNum: any, perk: any, parent: any);

      activate: (() => any) | any;

      render: (() => any) | any;

      renderPerkRect: (() => any) | any;

      updateTooltip: ((lvlSelected: any) => any) | any;

      /** @noSelf */
      static getPerkXp: (self: any) => any;

      /** @noSelf */
      static getPreviousXpLvl: (perk: any, level: any) => any;

      /** @noSelf */
      static getXpForLvl: (perk: any, level: any) => any;

      /** @noSelf */
      static updateAlpha: () => any;
    }
  }
  export namespace lua.client.XpSystem.ISUI.ISSkillProgressBar {}
}
