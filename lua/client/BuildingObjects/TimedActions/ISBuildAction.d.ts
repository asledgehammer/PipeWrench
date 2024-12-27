/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.BuildingObjects.TimedActions {
    /** @customConstructor ISBuildAction:new */
    export class ISBuildAction extends sharedLua.shared.TimedActions.ISBaseTimedAction {
      [id: string]: any;
      static [id: string]: any;

      static worldSoundTime: any;

      craftingSound: any;

      doSaw: any;

      hammer: any;

      hammerSound: any;

      item: any;

      north: any;

      onCancelFunc: any;

      onCancelTarget: any;

      onCompleteFunc: any;

      onCompleteTarget: any;

      sawSound: any;

      soundTime: any;

      spriteName: any;

      square: any;

      started: any;

      transactionId: any;

      x: any;

      y: any;

      z: any;

      constructor(character: any, item: any, x: any, y: any, z: any, north: any, spriteName: any, time: any);

      faceLocation(...__args: never[]): any;

      isReachableThroughWindowOrDoor(_square: any, ...__args: never[]): any;

      setOnCancel(_func: any, _target: any, ...__args: never[]): any;

      setOnComplete(_func: any, _target: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.BuildingObjects.TimedActions.ISBuildAction {}
}
