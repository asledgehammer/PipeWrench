/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Moveables {
    export abstract class ISMoveableTools {
      static [id: string]: any;

      /** @noSelf */
      static canPlayerPickUpMoveable: (_char: any, _square: any, _object: any, _moveProps: any) => any;

      /** @noSelf */
      static canPlayerPickUpObject: (_char: any, _square: any, _object: any) => any;

      /** @noSelf */
      static getMoveableList: (_square: any) => any;

      /** @noSelf */
      static getObjectList: (_square: any) => any;

      /** @noSelf */
      static getScrapableObjects: (_char: any, _square: any) => any;

      /** @noSelf */
      static isObjectMoveable: (_object: any) => any;
    }
  }
  export namespace lua.client.Moveables.ISMoveableTools {}
}
