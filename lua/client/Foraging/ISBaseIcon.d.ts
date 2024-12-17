/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.Foraging {
    /** @customConstructor ISBaseIcon:new */
    export class ISBaseIcon extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      adjacentSquares: any;

      alphaTarget: any;

      altWorldTexture: any;

      baseHeight: any;

      baseWidth: any;

      bounce: any;

      bounceHeight: any;

      bounceMax: any;

      bounceSpeed: any;

      bounceStep: any;

      canMoveVertical: any;

      canRollForSearchFocus: any;

      character: any;

      currentTimestamp: any;

      darkVisionRadius: any;

      distanceToPlayer: any;

      expandView: any;

      expandViewStep: any;

      icon: any;

      iconClass: any;

      iconID: any;

      identified: any;

      identifyDistance: any;

      isBeingRemoved: any;

      isBonusIcon: any;

      isDarknessCapped: any;

      isForageable: any;

      isKnownPoison: any;

      isMover: any;

      isNoticed: any;

      isoMarker: any;

      isSeen: any;

      isSeenThisUpdate: any;

      itemCount: any;

      itemList: any;

      itemObj: any;

      itemRotation: any;

      itemSize: any;

      itemTexture: any;

      itemType: any;

      lastSeenHours: any;

      lastTimestamp: any;

      managedMarkers: any;

      manager: any;

      maxPosChanges: any;

      maxRadius: any;

      maxRadiusCap: any;

      minRadius: any;

      modifiers: any;

      moveState: any;

      moveTargetX: any;

      moveTargetY: any;

      onMouseDoubleClick: any;

      onSquareDistance: any;

      perkLevel: any;

      pinAlpha: any;

      pinOffset: any;

      player: any;

      posChanges: any;

      renderItemTexture: any;

      spotTimer: any;

      spotTimerMax: any;

      square: any;

      stareVal: any;

      texture: any;

      textureCenter: any;

      textureColor: any;

      timeDelta: any;

      updateEvents: any;

      updateTick: any;

      updateTickMax: any;

      viewAngle: any;

      viewDistance: any;

      visionData: any;

      worldMarker: any;

      xCoord: any;

      yCoord: any;

      zCoord: any;

      zoom: any;

      zSize: any;

      constructor(_manager: any, _icon: any);

      addIsoMarker(...__args: never[]): any;

      addWorldMarker(...__args: never[]): any;

      checkIsForageable(...__args: never[]): any;

      checkIsPlayerRunning(...__args: never[]): any;

      checkIsSpotted(...__args: never[]): any;

      doContextMenu(_context: any, ...__args: never[]): any;

      doPickup(...__args: never[]): any;

      doSearchFocusCheck(...__args: never[]): any;

      doUpdateEvents(_force: any, ...__args: never[]): any;

      doVisionCheck(...__args: never[]): any;

      findPinOffset(...__args: never[]): any;

      findTextureCenter(...__args: never[]): any;

      getAlpha(...__args: never[]): any;

      getAngle2D(_x1: any, _y1: any, _x2: any, _y2: any, ...__args: never[]): any;

      getAngleOffset2D(_angle1: any, _angle2: any, ...__args: never[]): any;

      getCanSeeThisUpdate(...__args: never[]): any;

      getColor(...__args: never[]): any;

      getDistance3D(_x1: any, _y1: any, _z1: any, _x2: any, _y2: any, _z2: any, ...__args: never[]): any;

      getGameSpeed(...__args: never[]): any;

      getGridSquare(...__args: never[]): any;

      getIsNoticed(...__args: never[]): any;

      getIsSearchModeActive(...__args: never[]): any;

      getIsSeen(...__args: never[]): any;

      getIsSeenThisUpdate(...__args: never[]): any;

      getItemList(...__args: never[]): any;

      getScreenDelta(...__args: never[]): any;

      getSpotTimer(...__args: never[]): any;

      initAltTexture(...__args: never[]): any;

      initGridSquare(...__args: never[]): any;

      initItem(...__args: never[]): any;

      initItemCount(...__args: never[]): any;

      isCenterView(_bonusAngle: any, ...__args: never[]): any;

      isInRangeForUpdate(...__args: never[]): any;

      isInRangeOfPlayer(_range: any, ...__args: never[]): any;

      isNearby(...__args: never[]): any;

      isValid(...__args: never[]): any;

      onRightMouseDown(...__args: never[]): any;

      onRightMouseUp(...__args: never[]): any;

      remove(...__args: never[]): any;

      removeIsoMarker(...__args: never[]): any;

      removeWorldMarker(...__args: never[]): any;

      render(...__args: never[]): any;

      render3DItem(...__args: never[]): any;

      renderAltWorldTexture(...__args: never[]): any;

      renderPinIcon(...__args: never[]): any;

      renderWorldIcon(...__args: never[]): any;

      renderWorldItemTexture(...__args: never[]): any;

      reset(...__args: never[]): any;

      resetBounce(...__args: never[]): any;

      setAlpha(_a: any, ...__args: never[]): any;

      setColor(_rgba: any, ...__args: never[]): any;

      setIsBeingRemoved(_isBeingRemoved: any, ...__args: never[]): any;

      setIsNoticed(_isNoticed: any, ...__args: never[]): any;

      setIsSeen(_isSeen: any, ...__args: never[]): any;

      setIsSeenThisUpdate(_isSeen: any, ...__args: never[]): any;

      setSpotTimer(_time: any, ...__args: never[]): any;

      setWorldMarkerPosition(...__args: never[]): any;

      spotIcon(...__args: never[]): any;

      update(...__args: never[]): any;

      updateAlpha(...__args: never[]): any;

      updateBounce(...__args: never[]): any;

      updateDistanceToPlayer(...__args: never[]): any;

      updateLastSeen(...__args: never[]): any;

      updateManagerMarkers(...__args: never[]): any;

      updateModifiers(...__args: never[]): any;

      updatePerkLevel(...__args: never[]): any;

      updatePinIconPosition(...__args: never[]): any;

      updatePinIconSize(...__args: never[]): any;

      updateSpotTimer(...__args: never[]): any;

      updateSpotTimerMax(...__args: never[]): any;

      updateTimestamp(...__args: never[]): any;

      updateViewDistance(...__args: never[]): any;

      updateWorldMarker(...__args: never[]): any;

      updateZoom(...__args: never[]): any;
    }
  }
  export namespace lua.client.Foraging.ISBaseIcon {}
}
