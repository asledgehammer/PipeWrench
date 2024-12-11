/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Foraging {
    /** @customConstructor ISWorldItemIcon:new */
    export class ISWorldItemIcon extends lua.client.Foraging.ISBaseIcon {
      [id: string]: any;
      static [id: string]: any;

      container: any;

      isValidSquare: any;

      itemObjTable: any;

      onClickContext: any;

      constructor(_manager: any, _icon: any);

      isValidWorldItem(...__args: never[]): any;
    }
  }
  export namespace lua.client.Foraging.ISWorldItemIcon {}
}
