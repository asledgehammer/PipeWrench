/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared {
    export abstract class luautils {
      static [id: string]: any;

      /** @noSelf */
      static countItemsRecursive: (_containerList: any, _itemsNum: any, ...__args: never[]) => any;

      /** @noSelf */
      static equipItems: (_player: any, _primItemToEquip: any, _scndItemToEquip: any, ...__args: never[]) => any;

      /** @noSelf */
      static findRootInventory: (_inventory: any, ...__args: never[]) => any;

      /** @noSelf */
      static getConditionRGB: (condition: any, ...__args: never[]) => any;

      /** @noSelf */
      static getCorrectSquareForWall: (playerObj: any, square: any, ...__args: never[]) => any;

      /** @noSelf */
      static getNextTiles: (cell: any, startingGrid: any, range: any, ...__args: never[]) => any;

      /** @noSelf */
      static haveToBeTransfered: (player: any, item: any, dontWalk: any, ...__args: never[]) => any;

      /** @noSelf */
      static indexOf: (table1: any, value: any, ...__args: never[]) => any;

      /** @noSelf */
      static isEquipped: (_item: any, _player: any, ...__args: never[]) => any;

      /** @noSelf */
      static isSquareAdjacentToSquare: (_square1: any, _square2: any, ...__args: never[]) => any;

      /** @noSelf */
      static okModal: (
        _text: any,
        _centered: any,
        _width: any,
        _height: any,
        _posX: any,
        _posY: any,
        ...__args: never[]
      ) => any;

      /** @noSelf */
      static round: (num: any, idp: any, ...__args: never[]) => any;

      /** @noSelf */
      static split: (inputstr: any, sep: any, ...__args: never[]) => any;

      /** @noSelf */
      static stringEnds: (String: any, End: any, ...__args: never[]) => any;

      /** @noSelf */
      static stringStarts: (String: any, Start: any, ...__args: never[]) => any;

      /** @noSelf */
      static tableContains: (table2: any, value: any, ...__args: never[]) => any;

      /** @noSelf */
      static trim: (s: any, ...__args: never[]) => any;

      /** @noSelf */
      static updatePerksXp: (perks: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static walk: (playerObj: any, square: any, keepActions: any, ...__args: never[]) => any;

      /** @noSelf */
      static walkAdj: (playerObj: any, square: any, keepActions: any, excludeList: any, ...__args: never[]) => any;

      /** @noSelf */
      static walkAdjAltTest: (playerObj: any, square: any, altSquare: any, keepActions: any, ...__args: never[]) => any;

      /** @noSelf */
      static walkAdjTest: (playerObj: any, square: any, ...__args: never[]) => any;

      /** @noSelf */
      static walkAdjWall: (playerObj: any, square: any, north: any, keepActions: any, ...__args: never[]) => any;

      /** @noSelf */
      static walkAdjWindowOrDoor: (playerObj: any, square: any, item: any, keepActions: any, ...__args: never[]) => any;

      /** @noSelf */
      static walkToContainer: (container: any, playerNum: any, ...__args: never[]) => any;

      /** @noSelf */
      static walkToObject: (_player: any, _object: any, _cancelTA: any, ...__args: never[]) => any;

      /** @noSelf */
      static weaponLowerCondition: (
        _weapon: any,
        _character: any,
        _replace: any,
        _chance: any,
        ...__args: never[]
      ) => any;
    }
  }
  export namespace lua.shared.luautils {}
}
