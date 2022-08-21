/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      checkPositionJoypad: (() => any) | any;

      checkRotateJoypad: (() => any) | any;

      checkRotateKey: (() => any) | any;

      checkSelectSurfaceKey: (() => any) | any;

      clamp: ((rot: any) => any) | any;

      create: ((x: any, y: any, z: any, north: any, sprite: any) => any) | any;

      drawPrompt: ((playerNum: any, ui: any) => any) | any;

      getSurface: ((square: any) => any) | any;

      getXPrompt: (() => any) | any;

      handleRotate: ((pressed: any, reverse: any) => any) | any;

      onObjectLeftMouseButtonDown: ((object: any, x: any, y: any) => any) | any;

      rotateDelta: (() => any) | any;
    }
  }
  export namespace lua.server.BuildingObjects.ISPlace3DItemCursor {}
}
