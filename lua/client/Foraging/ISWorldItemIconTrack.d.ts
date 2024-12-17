/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Foraging {
    /** @customConstructor ISWorldItemIconTrack:new */
    export class ISWorldItemIconTrack extends lua.client.Foraging.ISBaseIcon {
      [id: string]: any;
      static [id: string]: any;

      container: any;

      isTrack: any;

      isValidSquare: any;

      itemObjTable: any;

      constructor(_manager: any, _icon: any);

      isValidWorldItem(...__args: never[]): any;
    }
  }
  export namespace lua.client.Foraging.ISWorldItemIconTrack {}
}
