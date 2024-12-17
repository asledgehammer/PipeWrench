/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Foraging {
    /** @customConstructor ISSearchManager:new */
    export class ISSearchManager extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      static showDebug: any;

      static showDebugExtended: any;

      static showDebugLocations: any;

      static showDebugVision: any;

      static showDebugVisionRadius: any;

      activeAlpha: any;

      activeIconRadius: any;

      activeIcons: any;

      activeZoneRadius: any;

      activeZones: any;

      aimBonusTick: any;

      aimBonusTickMax: any;

      aimMulti: any;

      alphaStep: any;

      baseHeight: any;

      baseWidth: any;

      cell: any;

      cellIconRadius: any;

      character: any;

      checkedSquares: any;

      closeIcons: any;

      currentTimestamp: any;

      currentZone: any;

      currentZoneName: any;

      debugArrows: any;

      debugMarkers: any;

      disableTick: any;

      disableTickMax: any;

      distanceMoveExtra: any;

      distanceMoveThreshold: any;

      distanceSinceFind: any;

      effectOverlayValues: any;

      forageIcons: any;

      haloNotes: any;

      iconCategories: any;

      iconLoadRate: any;

      iconQueue: any;

      iconStack: any;

      ignoredItemCategories: any;

      ignoredItemTypes: any;

      isEffectOverlay: any;

      isoMarkers: any;

      isOverride: any;

      isSearchMode: any;

      isSpotting: any;

      lastFoundX: any;

      lastFoundY: any;

      lastTimestamp: any;

      lastUpdateX: any;

      lastUpdateY: any;

      maxRadius: any;

      maxRadiusCap: any;

      minAlpha: any;

      minRadius: any;

      modifiers: any;

      movedIcons: any;

      movedIconsSquares: any;

      overlayValues: any;

      perkLevel: any;

      player: any;

      radius: any;

      reducedTimePerLevel: any;

      searchMode: any;

      searchModeOverlay: any;

      seenIcons: any;

      sneakBonusTick: any;

      sneakBonusTickMax: any;

      sneakMulti: any;

      spotAlpha: any;

      spriteAffinities: any;

      spriteCheckedSquares: any;

      square: any;

      squareCheckRate: any;

      squareStack: any;

      stashIcons: any;

      stashTypes: any;

      texture: any;

      textureColor: any;

      textureHeight: any;

      textureWidth: any;

      timeDelta: any;

      timeSinceFind: any;

      timeToMoveIcon: any;

      timeToMoveIconExtra: any;

      timeToMoveIconMax: any;

      triggerHalo: any;

      updateEvents: any;

      updateTick: any;

      updateTickMax: any;

      visibleFunction: any;

      visibleTarget: any;

      worldIconStack: any;

      worldMarkers: any;

      worldObjectIcons: any;

      xpIcons: any;

      zoom: any;

      constructor(_character: any);

      addHaloNote(_text: any, ...__args: never[]): any;

      addIcon(
        _id: any,
        _iconClass: any,
        _itemType: any,
        _itemObj: any,
        _x: any,
        _y: any,
        _z: any,
        ...__args: never[]
      ): any;

      checkActiveZones(...__args: never[]): any;

      checkCloseIcons(...__args: never[]): any;

      checkForSpriteAffinity(_square: any, _object: any, _zoneData: any, ...__args: never[]): any;

      checkIcons(...__args: never[]): any;

      checkMarkers(...__args: never[]): any;

      checkShouldDisable(...__args: never[]): any;

      checkShouldForceIcon(...__args: never[]): any;

      checkSquares(...__args: never[]): any;

      checkWorldIcons(...__args: never[]): any;

      clearCheckedSquares(...__args: never[]): any;

      clearHaloNotes(...__args: never[]): any;

      clearIcons(...__args: never[]): any;

      clearMovedIconsSquares(...__args: never[]): any;

      clearQueue(...__args: never[]): any;

      clearSpriteCheckedSquares(...__args: never[]): any;

      clearZoneData(...__args: never[]): any;

      createBonusIcon(_square: any, _catDef: any, _zoneData: any, ...__args: never[]): any;

      createIconsForCell(...__args: never[]): any;

      createIconsForContainers(_square: any, _object: any, ...__args: never[]): any;

      createIconsForWorldItems(_square: any, ...__args: never[]): any;

      createIconsForZone(_zoneData: any, _recreate: any, ...__args: never[]): any;

      displayHaloNotes(...__args: never[]): any;

      doChangePosition(_icon: any, ...__args: never[]): any;

      doChangeZone(_zoneData: any, ...__args: never[]): any;

      doDisableCheck(...__args: never[]): any;

      doMoveIcon(_icon: any, _x: any, _y: any, _z: any, ...__args: never[]): any;

      doMoveIconNearPlayer(...__args: never[]): any;

      doUpdateEvents(_force: any, ...__args: never[]): any;

      findSpriteAffinityIcon(_square: any, _catDef: any, _zoneData: any, ...__args: never[]): any;

      flashEye(_amount: any, ...__args: never[]): any;

      getAlpha(...__args: never[]): any;

      getAndActivateZoneAtXY(_x: any, _y: any, ...__args: never[]): any;

      getColor(...__args: never[]): any;

      getGameSpeed(...__args: never[]): any;

      getIsSeen(_icon: any, ...__args: never[]): any;

      getOverlayRadius(...__args: never[]): any;

      getScreenDelta(...__args: never[]): any;

      isFinishedLoadingIcons(...__args: never[]): any;

      isIconOnSquare(_square: any, _iconList: any, ...__args: never[]): any;

      loadIcons(...__args: never[]): any;

      onRightMouseDown(...__args: never[]): any;

      onRightMouseUp(...__args: never[]): any;

      onToggleVisible(...__args: never[]): any;

      removeIcon(_icon: any, ...__args: never[]): any;

      removeItem(_icon: any, ...__args: never[]): any;

      removeZoneAndIcons(_zoneData: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      renderDebugInfo(...__args: never[]): any;

      renderEye(...__args: never[]): any;

      reset(...__args: never[]): any;

      resetForceFindSystem(...__args: never[]): any;

      resetVisionBonuses(...__args: never[]): any;

      setAlpha(_a: any, ...__args: never[]): any;

      setColor(_rgba: any, ...__args: never[]): any;

      spotIcon(_icon: any, ...__args: never[]): any;

      toggleSearchMode(_isSearchMode: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      updateAlpha(...__args: never[]): any;

      updateCurrentZone(...__args: never[]): any;

      updateForceFindSystem(...__args: never[]): any;

      updateModifiers(...__args: never[]): any;

      updateOverlay(...__args: never[]): any;

      updatePosition(...__args: never[]): any;

      updateTimestamp(...__args: never[]): any;

      updateVisionBonuses(...__args: never[]): any;

      updateZoom(...__args: never[]): any;

      worldItemTest(_itemObj: any, ...__args: never[]): any;

      /** @noSelf */
      static createUI: (_player: any, ...__args: never[]) => any;

      /** @noSelf */
      static destroyUI: (_character: any, ...__args: never[]) => any;

      /** @noSelf */
      static getManager: (_character: any, ...__args: never[]) => any;

      /** @noSelf */
      static handleKeyPressed: (_keyPressed: any, ...__args: never[]) => any;

      /** @noSelf */
      static handleOverride: (_state: any, _playerNum: any, ...__args: never[]) => any;

      /** @noSelf */
      static initBinds: (...__args: never[]) => any;

      /** @noSelf */
      static OnFillWorldObjectContextMenu: (_player: any, _context: any, _worldObjects: any, ...__args: never[]) => any;

      /** @noSelf */
      static OnGameStart: (...__args: never[]) => any;

      /** @noSelf */
      static onUpdateIcon: (_zoneData: any, _iconID: any, _icon: any, ...__args: never[]) => any;

      /** @noSelf */
      static setManager: (_character: any, _manager: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.Foraging.ISSearchManager {}
}
