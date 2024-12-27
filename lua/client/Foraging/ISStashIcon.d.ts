/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Foraging {
    /** @customConstructor ISStashIcon:new */
    export class ISStashIcon extends lua.client.Foraging.ISBaseIcon {
      [id: string]: any;
      static [id: string]: any;

      isValidSquare: any;

      itemObjTable: any;

      constructor(_manager: any, _icon: any);
    }
  }
  export namespace lua.client.Foraging.ISStashIcon {}
}
