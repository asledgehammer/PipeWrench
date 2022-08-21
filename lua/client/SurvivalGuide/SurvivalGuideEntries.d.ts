/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.SurvivalGuide {
    export abstract class SurvivalGuideEntries {
      static [id: string]: any;

      static useJoypad: any;

      /** @noSelf */
      static addEntry11: () => any;

      /** @noSelf */
      static addSurvivalGuideEntry: (index: any) => any;

      /** @noSelf */
      static getEntry: (num: any) => any;

      /** @noSelf */
      static getEntryCount: () => any;
    }
  }
  export namespace lua.client.SurvivalGuide.SurvivalGuideEntries {}
}
