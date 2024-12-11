/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISSafetyUI:new */
    export class ISSafetyUI extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      backdropAlpha: any;

      character: any;

      cooldownTimer: any;

      disableTexture: any;

      drawLock: any;

      lockTexture: any;

      noBackground: any;

      offLockedTexture: any;

      offTexture: any;

      onLockedTexture: any;

      onTexture: any;

      pendingTexture: any;

      playerNum: any;

      radialIcon: any;

      safety: any;

      toggleTimer: any;

      constructor(x: any, y: any, playerNum: any);

      createChildren(...__args: never[]): any;

      getExtraLogData(...__args: never[]): any;

      render(...__args: never[]): any;

      toggleSafety(...__args: never[]): any;

      /** @noSelf */
      static initUI: (...__args: never[]) => any;

      /** @noSelf */
      static onKeyPressed: (key: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISSafetyUI {}
}
