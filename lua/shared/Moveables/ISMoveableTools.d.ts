/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.Moveables {
    export abstract class ISMoveableTools {
      static [id: string]: any;

      /** @noSelf */
      static canPlayerPickUpMoveable: (
        _char: any,
        _square: any,
        _object: any,
        _moveProps: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static canPlayerPickUpObject: (_char: any, _square: any, _object: any, ...__args: never[]) => any;

      /** @noSelf */
      static getMoveableList: (_square: any, ...__args: never[]) => any;

      /** @noSelf */
      static getObjectList: (_square: any, ...__args: never[]) => any;

      /** @noSelf */
      static getScrapableObjects: (_char: any, _square: any, ...__args: never[]) => any;

      /** @noSelf */
      static isObjectMoveable: (_object: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.Moveables.ISMoveableTools {}
}
