/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISRainPanel:new */
    export class ISRainPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      alpha: any;

      intensity: any;

      reloadButton: any;

      speed: any;

      changeIntensity(...__args: never[]): any;

      changeSpeed(...__args: never[]): any;

      createChildren(...__args: never[]): any;

      onChangeAlpha(...__args: never[]): any;

      reloadTextures(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISRainPanel {
    /** @noSelf */
    export const addRainPanel: () => any;
  }
}
