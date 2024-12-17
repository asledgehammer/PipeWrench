/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Foraging {
    export abstract class ISAnimalTracksMenu {
      static [id: string]: any;

      /** @noSelf */
      static doContextMenu: (context: any, trackItem: any, chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static handleIsoTracks: (context: any, track: any, chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static inspect: (track: any, chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static inspectIsoTrack: (track: any, chr: any, ...__args: never[]) => any;

      /** @noSelf */
      static onGrab: (track: any, chr: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Foraging.ISAnimalTracksMenu {}
}
