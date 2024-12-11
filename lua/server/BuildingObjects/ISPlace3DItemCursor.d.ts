/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISPlace3DItemCursor:new */
    export class ISPlace3DItemCursor extends lua.server.BuildingObjects.ISBuildingObject {
      [id: string]: any;
      static [id: string]: any;

      character: any;

      chr: any;

      isPlace3DCursor: any;

      isYButtonResetCursor: any;

      items: any;

      itemSq: any;

      joypadPositionActive: any;

      joypadPositionX: any;

      joypadPositionY: any;

      keepOnSquare: any;

      keepOnSquareX: any;

      keepOnSquareY: any;

      noNeedHammer: any;

      placeAll: any;

      player: any;

      previousSq: any;

      render3DItemRot: any;

      render3DItemXOffset: any;

      render3DItemYOffset: any;

      render3DItemZOffset: any;

      rotatePressed: any;

      rotateReverse: any;

      rotateStart: any;

      rotating: any;

      selectedSqDrop: any;

      skipBuildAction: any;

      surfaceKeyTimer: any;

      surfaceSelected: any;

      surfacesPossible: any;

      constructor(character: any, items: any);

      checkPositionJoypad(...__args: never[]): any;

      checkRotateJoypad(...__args: never[]): any;

      checkRotateKey(...__args: never[]): any;

      checkSelectSurfaceKey(...__args: never[]): any;

      clamp(rot: any, ...__args: never[]): any;

      create(x: any, y: any, z: any, north: any, sprite: any, ...__args: never[]): any;

      drawPrompt(playerNum: any, ui: any, ...__args: never[]): any;

      getSurface(square: any, ...__args: never[]): any;

      getXPrompt(...__args: never[]): any;

      handleRotate(pressed: any, reverse: any, ...__args: never[]): any;

      onObjectLeftMouseButtonDown(object: any, x: any, y: any, ...__args: never[]): any;

      rotateDelta(...__args: never[]): any;
    }
  }
  export namespace lua.server.BuildingObjects.ISPlace3DItemCursor {}
}
