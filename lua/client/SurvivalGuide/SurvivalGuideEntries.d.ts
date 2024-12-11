/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.SurvivalGuide {
    export abstract class SurvivalGuideEntries {
      static [id: string]: any;

      static useJoypad: any;

      /** @noSelf */
      static addEntry11: (...__args: never[]) => any;

      /** @noSelf */
      static addSurvivalGuideEntry: (index: any, ...__args: never[]) => any;

      /** @noSelf */
      static getEntry: (num: any, ...__args: never[]) => any;

      /** @noSelf */
      static getEntryCount: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.SurvivalGuide.SurvivalGuideEntries {}
}
