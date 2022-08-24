/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared {
    export abstract class luautils {
      static [id: string]: any;

      /** @noSelf */
      static equipItems: (_player: any, _primItemToEquip: any, _scndItemToEquip: any) => any;

      /** @noSelf */
      static getConditionRGB: (condition: any) => any;

      /** @noSelf */
      static getCorrectSquareForWall: (playerObj: any, square: any) => any;

      /** @noSelf */
      static getNextTiles: (cell: any, startingGrid: any, range: any) => any;

      /** @noSelf */
      static haveToBeTransfered: (player: any, item: any, dontWalk: any) => any;

      /** @noSelf */
      static indexOf: (table1: any, value: any) => any;

      /** @noSelf */
      static isEquipped: (_item: any, _player: any) => any;

      /** @noSelf */
      static isSquareAdjacentToSquare: (_square1: any, _square2: any) => any;

      /** @noSelf */
      static okModal: (_text: any, _centered: any, _width: any, _height: any, _posX: any, _posY: any) => any;

      /** @noSelf */
      static round: (num: any, idp: any) => any;

      /** @noSelf */
      static split: (inputstr: any, sep: any) => any;

      /** @noSelf */
      static stringEnds: (String: any, End: any) => any;

      /** @noSelf */
      static stringStarts: (String: any, Start: any) => any;

      /** @noSelf */
      static trim: (s: any) => any;

      /** @noSelf */
      static updatePerksXp: (perks: any, player: any) => any;

      /** @noSelf */
      static walkAdj: (playerObj: any, square: any, keepActions: any) => any;

      /** @noSelf */
      static walkAdjAltTest: (playerObj: any, square: any, altSquare: any, keepActions: any) => any;

      /** @noSelf */
      static walkAdjWall: (playerObj: any, square: any, north: any, keepActions: any) => any;

      /** @noSelf */
      static walkAdjWindowOrDoor: (playerObj: any, square: any, item: any, keepActions: any) => any;

      /** @noSelf */
      static walkToContainer: (container: any, playerNum: any) => any;

      /** @noSelf */
      static walkToObject: (_player: any, _object: any, _cancelTA: any) => any;

      /** @noSelf */
      static weaponLowerCondition: (_weapon: any, _character: any, _replace: any, _chance: any) => any;
    }
  }
  export namespace lua.shared.luautils {}
}
