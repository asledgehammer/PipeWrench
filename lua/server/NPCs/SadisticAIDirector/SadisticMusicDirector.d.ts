/**  @noSelfInFile */

import { lua as sharedLua } from '@asledgehammer/pipewrench';

declare module '@asledgehammer/pipewrench/server' {
  export namespace lua.server.NPCs.SadisticAIDirector {
    /** @customConstructor SadisticMusicDirector:new */
    export class SadisticMusicDirector extends sharedLua.shared.ISBaseObject.ISBaseObject {
      [id: string]: any;
      static [id: string]: any;

      drama: any;

      lastChangedTrack: any;

      lastNumZombie: any;

      lastSeenZombie: any;

      lastTimeSinceZombie: any;

      lastTriggerDrama: any;

      triggerDelay: any;

      constructor();

      changeTrack(...__args: never[]): any;

      seenZombies(num: any, ...__args: never[]): any;

      shouldChangeTrack(...__args: never[]): any;

      tick(...__args: never[]): any;
    }
  }
  export namespace lua.server.NPCs.SadisticAIDirector.SadisticMusicDirector {
    /** @noSelf */
    export const SadisticMusicDirectorTick: () => any;
  }
}
