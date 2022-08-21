/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      isValidWorldItem: (() => any) | any;
    }
  }
  export namespace lua.client.Foraging.ISWorldItemIcon {}
}
