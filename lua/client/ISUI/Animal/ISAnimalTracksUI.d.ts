/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Animal {
    /** @customConstructor ISAnimalTracksUI:new */
    export class ISAnimalTracksUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      chr: any;

      isSprite: any;

      playerNum: any;

      refreshNeeded: any;

      texture: any;

      track: any;

      trackingLevel: any;

      xoffset: any;

      constructor(x: any, y: any, width: any, height: any, track: any, player: any);

      create(...__args: never[]): any;

      getAnimalType(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Animal.ISAnimalTracksUI {}
}
