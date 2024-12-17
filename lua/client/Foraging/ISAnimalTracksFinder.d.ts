/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Foraging {
    export abstract class ISAnimalTracksFinder {
      static [id: string]: any;

      addItemIcon: ((track: any, chr: any) => any) | any;

      canFindTrack: ((track: any, chr: any) => any) | any;

      clearTracks: ((chr: any) => any) | any;

      update: ((chr: any) => any) | any;

      updateTracks: ((chr: any) => any) | any;

      /** @noSelf */
      static getAnimalTracks: (chr: any, tracks: any, ...__args: never[]) => any;

      /** @noSelf */
      static isTrack: (worldObject: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Foraging.ISAnimalTracksFinder {}
}
