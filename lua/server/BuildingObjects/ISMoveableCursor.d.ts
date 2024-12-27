/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
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

      clearCache(...__args: never[]): any;

      create(_x: any, _y: any, _z: any, _north: any, _sprite: any, ...__args: never[]): any;

      exitCursor(...__args: never[]): any;

      getDirectionFromItem(item: any, ...__args: never[]): any;

      getInfoPanel(...__args: never[]): any;

      getInventoryObjectList(...__args: never[]): any;

      getMoveableMode(...__args: never[]): any;

      getObjectList(...__args: never[]): any;

      getRepairObjectList(...__args: never[]): any;

      getRotateableObject(...__args: never[]): any;

      getScrapObjectList(...__args: never[]): any;

      getXPrompt(...__args: never[]): any;

      onObjectLeftMouseButtonDown(object: any, x: any, y: any, ...__args: never[]): any;

      rotateWhilePlacing(...__args: never[]): any;

      setCursorFacing(facing: any, ...__args: never[]): any;

      setInfoPanel(_square: any, _object: any, _moveProps: any, _customTexture: any, ...__args: never[]): any;

      setJoypadFocus(_window: any, ...__args: never[]): any;

      setMoveableMode(_mode: any, ...__args: never[]): any;

      shouldAddObject(_obj: any, moveProps: any, ...__args: never[]): any;

      tryInitialItem(_item: any, ...__args: never[]): any;

      /** @noSelf */
      static changeModeKey: (_key: any, _playerNum: any, _joyPadTriggered: any, ...__args: never[]) => any;

      /** @noSelf */
      static clearCacheForAllPlayers: (...__args: never[]) => any;

      /** @noSelf */
      static exitCursorKey: (_key: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.BuildingObjects.ISMoveableCursor {}
}
