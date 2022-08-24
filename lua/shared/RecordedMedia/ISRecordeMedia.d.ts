/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.RecordedMedia {
    export abstract class ISRecordedMedia {
      static [id: string]: any;

      /** @noSelf */
      static init: (_rc: any) => any;
    }
  }
  export namespace lua.shared.RecordedMedia.ISRecordeMedia {}
}
