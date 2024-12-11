/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      activate(...__args: never[]): any;

      render(...__args: never[]): any;

      renderPerkRect(...__args: never[]): any;

      updateTooltip(lvlSelected: any, ...__args: never[]): any;

      /** @noSelf */
      static getPerkXp: (self: any, ...__args: never[]) => any;

      /** @noSelf */
      static getPreviousXpLvl: (perk: any, level: any, ...__args: never[]) => any;

      /** @noSelf */
      static getXpForLvl: (perk: any, level: any, ...__args: never[]) => any;

      /** @noSelf */
      static updateAlpha: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.XpSystem.ISUI.ISSkillProgressBar {}
}
