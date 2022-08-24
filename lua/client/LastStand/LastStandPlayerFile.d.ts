/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.LastStand {
    export abstract class LastStandPlayerFile {
      static [id: string]: any;

      load: ((fileName: any) => any) | any;

      new: (() => any) | any;

      readBlockStart: (() => any) | any;

      readBonus: (() => any) | any;

      readClothing: (() => any) | any;

      readLine: ((line: any) => any) | any;

      readPlayer: (() => any) | any;

      readSkills: (() => any) | any;

      readTraits: (() => any) | any;
    }
  }
  export namespace lua.client.LastStand.LastStandPlayerFile {}
}
