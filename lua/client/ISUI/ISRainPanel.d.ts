/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISRainPanel:new */
    export class ISRainPanel extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      alpha: any;

      intensity: any;

      reloadButton: any;

      speed: any;

      changeIntensity: (() => any) | any;

      changeSpeed: (() => any) | any;

      createChildren: (() => any) | any;

      onChangeAlpha: (() => any) | any;

      reloadTextures: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISRainPanel {
    /** @noSelf */
    export const addRainPanel: () => any;
  }
}
