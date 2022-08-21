/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISMoveableCursor:new */
    export class ISMoveableCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      cacheInvObjectIndex: any;

      cacheInvObjectSprite: any;

      cacheObject: any;

      cacheSquare: any;

      canCreate: any;

      canSeeCurrentSquare: any;

      character: any;

      colorMod: any;

      currentMoveProps: any;

      currentSquare: any;

      cursorFacing: any;

      floorSprite: any;

      isMoveableCursor: any;

      isYButtonResetCursor: any;

      joypadFacing: any;

      moveableMode: any;

      noNeedHammer: any;

      objectIndex: any;

      objectListCache: any;

      objectSprite: any;

      origMoveProps: any;

      origSpriteName: any;

      player: any;

      renderFloorHelper: any;

      renderX: any;

      renderY: any;

      renderZ: any;

      skipBuildAction: any;

      skipWalk: any;

      subObjectIndex: any;

      tryInitialInvItem: any;

      yOffset: any;

      constructor(_character: any);

      clearCache: (() => any) | any;

      create: ((_x: any, _y: any, _z: any, _north: any, _sprite: any) => any) | any;

      exitCursor: (() => any) | any;

      getDirectionFromItem: ((item: any) => any) | any;

      getInfoPanel: (() => any) | any;

      getInventoryObjectList: (() => any) | any;

      getMoveableMode: (() => any) | any;

      getObjectList: (() => any) | any;

      getRotateableObject: (() => any) | any;

      getScrapObjectList: (() => any) | any;

      getXPrompt: (() => any) | any;

      onObjectLeftMouseButtonDown: ((object: any, x: any, y: any) => any) | any;

      rotateWhilePlacing: (() => any) | any;

      setInfoPanel: ((_square: any, _object: any, _moveProps: any, _customTexture: any) => any) | any;

      setJoypadFocus: ((_window: any) => any) | any;

      setMoveableMode: ((_mode: any) => any) | any;

      shouldAddObject: ((_obj: any) => any) | any;

      tryInitialItem: ((_item: any) => any) | any;

      /** @noSelf */
      static changeModeKey: (_key: any, _playerNum: any, _joyPadTriggered: any) => any;

      /** @noSelf */
      static clearCacheForAllPlayers: () => any;

      /** @noSelf */
      static exitCursorKey: (_key: any) => any;
    }
  }
  export namespace lua.server.BuildingObjects.ISMoveableCursor {}
}
