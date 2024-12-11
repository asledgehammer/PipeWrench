/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.BuildingObjects {
    /** @customConstructor ISBuildingObject:new */
    export class ISBuildingObject extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      blockAllTheSquare: any;

      build: any;

      canBarricade: any;

      canBeAlwaysPlaced: any;

      canBeBuild: any;

      canBePlastered: any;

      canPassThrough: any;

      choosenSprite: any;

      clickedUI: any;

      completionSound: any;

      crossSpeed: any;

      dismantable: any;

      dragNilAfterPlace: any;

      east: any;

      eastSprite: any;

      hoppable: any;

      isContainer: any;

      isCorner: any;

      isDoor: any;

      isDoorFrame: any;

      isLeftDown: any;

      isThumpable: any;

      isWallLike: any;

      modData: any;

      north: any;

      northSprite: any;

      nSprite: any;

      RENDER_SPRITE: any;

      RENDER_SPRITE_FLOOR: any;

      RENDER_SPRITE_NAME: any;

      south: any;

      southSprite: any;

      sprite: any;

      square: any;

      thumpDmg: any;

      west: any;

      xJoypad: any;

      yJoypad: any;

      zJoypad: any;

      deactivate(...__args: never[]): any;

      getAPrompt(...__args: never[]): any;

      getBPrompt(...__args: never[]): any;

      getLBPrompt(...__args: never[]): any;

      getRBPrompt(...__args: never[]): any;

      getSprite(...__args: never[]): any;

      getYPrompt(...__args: never[]): any;

      haveMaterial(square: any, ...__args: never[]): any;

      init(...__args: never[]): any;

      isValid(square: any, ...__args: never[]): any;

      onJoypadDirDown(joypadData: any, ...__args: never[]): any;

      onJoypadDirLeft(joypadData: any, ...__args: never[]): any;

      onJoypadDirRight(joypadData: any, ...__args: never[]): any;

      onJoypadDirUp(joypadData: any, ...__args: never[]): any;

      onJoypadPressButton(joypadIndex: any, joypadData: any, button: any, ...__args: never[]): any;

      onTimedActionStart(action: any, ...__args: never[]): any;

      onTimedActionStop(action: any, ...__args: never[]): any;

      reinit(...__args: never[]): any;

      render(x: any, y: any, z: any, square: any, ...__args: never[]): any;

      reset(...__args: never[]): any;

      rotateKey(key: any, ...__args: never[]): any;

      rotateMouse(x: any, y: any, ...__args: never[]): any;

      setCanPassThrough(passThrough: any, ...__args: never[]): any;

      setDragNilAfterPlace(nilAfter: any, ...__args: never[]): any;

      setEastSprite(sprite: any, ...__args: never[]): any;

      setNorthSprite(sprite: any, ...__args: never[]): any;

      setSouthSprite(sprite: any, ...__args: never[]): any;

      setSprite(sprite: any, ...__args: never[]): any;

      tryBuild(x: any, y: any, z: any, ...__args: never[]): any;

      walkTo(x: any, y: any, z: any, ...__args: never[]): any;

      /** @noSelf */
      static onDestroy: (thump: any, player: any, ...__args: never[]) => any;

      /** @noSelf */
      static removeFromGround: (square: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.server.BuildingObjects.ISBuildingObject {}
}
