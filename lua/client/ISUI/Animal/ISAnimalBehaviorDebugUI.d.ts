/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI.Animal {
    /** @customConstructor ISAnimalBehaviorDebugUI:new */
    export class ISAnimalBehaviorDebugUI extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      animal: any;

      chr: any;

      playerNum: any;

      refreshNeeded: any;

      constructor(x: any, y: any, width: any, height: any, animal: any, player: any);

      create(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.Animal.ISAnimalBehaviorDebugUI {}
}
