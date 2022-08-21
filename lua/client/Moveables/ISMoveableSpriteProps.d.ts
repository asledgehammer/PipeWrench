/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.Moveables {
    export abstract class InfoPanelFlags {
      static [id: string]: any;
    }

    export abstract class ISMoveableSpriteProps {
      static [id: string]: any;

      addAllScrapItemsToInventory: ((_character: any, _list: any) => any) | any;

      addAllScrapItemsToSquare: ((_square: any, _list: any) => any) | any;

      addBreakDebris: ((_square: any) => any) | any;

      addInventoryItemToSquare: ((_square: any, _item: any, _max: any, _chance: any) => any) | any;

      addOrDropItem: ((_character: any, _item: any) => any) | any;

      addScrapItemToList:
        | ((_list: any, _item: any, _max: any, _chance: any, _skillMod: any, _doSizeMod: any) => any)
        | any;

      canManuallyRotate: (() => any) | any;

      canPickUpMoveable: ((_character: any, _square: any, _object: any) => any) | any;

      canPickUpMoveableInternal: ((_character: any, _square: any, _object: any, _isMulti: any) => any) | any;

      canPlaceMoveable: ((_character: any, _square: any, _item: any) => any) | any;

      canPlaceMoveableInternal: ((_character: any, _square: any, _item: any, _forceTypeObject: any) => any) | any;

      canRotateDirection: (() => any) | any;

      canRotateMoveable: ((_square: any, _object: any, _origProps: any) => any) | any;

      canRotateMoveableInternal: ((_square: any, _object: any) => any) | any;

      canScrapObject: ((_character: any) => any) | any;

      canScrapObjectInternal: ((_result: any, _object: any) => any) | any;

      doBreakTest: ((_player: any) => any) | any;

      findInInventory: ((_character: any, _spriteName: any) => any) | any;

      findInInventoryMultiSprite: ((_character: any, _spriteName: any) => any) | any;

      findOnSquare: ((_square: any, _spriteName: any) => any) | any;

      getActionTime: ((_player: any, _mode: any) => any) | any;

      getBreakChance: ((_player: any) => any) | any;

      getChanceByDef: ((scrapDef: any, chr: any) => any) | any;

      getFaceDirectionFromSpriteName: ((_face: any) => any) | any;

      getFaceIndex: (() => any) | any;

      getFaces: (() => any) | any;

      getFaceSpriteFromParentObject: ((_object: any) => any) | any;

      getIndexedFaces: (() => any) | any;

      getInfoPanelDescription: ((_square: any, _object: any, _player: any, _mode: any) => any) | any;

      getInfoPanelFlagsGeneral: ((_square: any, _object: any, _player: any, _mode: any) => any) | any;

      getInfoPanelFlagsPerTile: ((_square: any, _object: any, _player: any, _mode: any) => any) | any;

      getMoveableOverlayFromObject: ((_object: any) => any) | any;

      getObjectHealth: (() => any) | any;

      getObjectMoveProps: ((_obj: any) => any) | any;

      getScrapActionTime: ((_player: any) => any) | any;

      getScrapItemsList: ((_character: any) => any) | any;

      getScrapSkillChance: ((_player: any) => any) | any;

      getScrapSound: ((_character: any) => any) | any;

      getScrapToolUses: (() => any) | any;

      getSoundFromTool: ((_square: any, _character: any, _mode: any) => any) | any;

      getSpecificMoveableObjectFromSquare: ((_square: any, _objectType: any) => any) | any;

      getSpriteGridCache: ((_square: any, _verifyOnly: any, _getWorldObjects: any) => any) | any;

      getSpriteGridInfo: ((_square: any, _getWorldObjects: any) => any) | any;

      getToolString: ((_itemTypes: any, _itemNames: any) => any) | any;

      getTopTable: ((_square: any) => any) | any;

      getTotalTableHeight: ((_square: any) => any) | any;

      getWallForFacing: ((_square: any, _dir: any, _mode: any) => any) | any;

      getYOffsetCursor: (() => any) | any;

      hasFaces: (() => any) | any;

      hasRequiredSkill: ((_player: any, _mode: any) => any) | any;

      hasScrapTool: ((_player: any, _doSecond: any) => any) | any;

      hasTool: ((_player: any, _mode: any) => any) | any;

      instanceItem: ((_spriteNameOverride: any) => any) | any;

      isFloorAtTopOfStairs: ((object: any) => any) | any;

      isFreeTile: ((_square: any) => any) | any;

      isSquareAtTopOfStairs: ((_square: any) => any) | any;

      isWallBetweenParts: ((_spriteGrid: any, _x: any, _y: any, _z: any) => any) | any;

      objectNoContainerOrEmpty: ((_object: any) => any) | any;

      pickUpMoveable: ((_character: any, _square: any, _createItem: any, _forceAllow: any) => any) | any;

      pickUpMoveableInternal:
        | ((
            _character: any,
            _square: any,
            _object: any,
            _sprInstance: any,
            _spriteName: any,
            _createItem: any,
            _rotating: any
          ) => any)
        | any;

      pickUpMoveableViaCursor: ((_character: any, _square: any, _origSpriteName: any, _moveCursor: any) => any) | any;

      placeMoveable: ((_character: any, _square: any, _origSpriteName: any) => any) | any;

      placeMoveableInternal: ((_square: any, _item: any, _spriteName: any) => any) | any;

      placeMoveableViaCursor: ((_character: any, _square: any, _origSpriteName: any, _moveCursor: any) => any) | any;

      playBreakSound: ((_character: any, _object: any) => any) | any;

      rotateMoveable: ((_character: any, _square: any, _origSpriteName: any) => any) | any;

      rotateMoveableInternal: ((_character: any, _square: any, _origSpriteName: any) => any) | any;

      rotateMoveableViaCursor: ((_character: any, _square: any, _origSpriteName: any, _moveCursor: any) => any) | any;

      scrapGiveXp: ((_character: any, _scrapDef: any) => any) | any;

      scrapHaloNoteCheck: ((_character: any, _itemsAdded: any) => any) | any;

      scrapObject: ((_character: any) => any) | any;

      scrapObjectInternal:
        | ((
            _character: any,
            _scrapDef: any,
            _square: any,
            _object: any,
            _scrapResult: any,
            _chance: any,
            _perkName: any
          ) => any)
        | any;

      scrapObjectViaCursor: ((_character: any, _square: any, _origSpriteName: any, _moveCursor: any) => any) | any;

      scrapWalkToAndEquip: ((_character: any) => any) | any;

      snapFaceToSquare: ((_square: any) => any) | any;

      startScrapAction: ((_action: any) => any) | any;

      walkToAndEquip: ((_character: any, _square: any, _mode: any) => any) | any;

      /** @noSelf */
      static addLineToInfoTable: (
        _table: any,
        _lineA: any,
        _rA: any,
        _gA: any,
        _bA: any,
        _lineB: any,
        _rB: any,
        _gB: any,
        _bB: any
      ) => any;

      /** @noSelf */
      static fromObject: (_object: any) => any;

      /** @noSelf */
      static new: (_sprite: any) => any;

      /** @noSelf */
      static OnDynamicMovableRecipe: (_sprite: any, _recipe: any, _item: any, _player: any) => any;
    }

    export abstract class ISThumpableSpriteProps {
      static [id: string]: any;

      addToolString: ((infoTable: any, tag: any, hasTool: any) => any) | any;

      canScrapObject: ((playerObj: any) => any) | any;

      getInfoPanelDescription: ((_square: any, _object: any, _player: any, _mode: any) => any) | any;

      getScrapActionTime: ((_character: any) => any) | any;

      getScrapSound: ((_character: any) => any) | any;

      getYOffsetCursor: (() => any) | any;

      scrapObjectViaCursor: ((_character: any, _square: any, _origSpriteName: any, _moveCursor: any) => any) | any;

      startScrapAction: ((_action: any) => any) | any;

      walkToAndEquip: ((_character: any, _square: any, _mode: any) => any) | any;

      /** @noSelf */
      static new: (object: any) => any;
    }

    export abstract class SpriteGridCache {
      static [id: string]: any;
    }
  }
  export namespace lua.client.Moveables.ISMoveableSpriteProps {}
}
