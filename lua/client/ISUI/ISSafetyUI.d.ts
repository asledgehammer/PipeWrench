/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      createChildren: (() => any) | any;

      getExtraLogData: (() => any) | any;

      render: (() => any) | any;

      toggleSafety: (() => any) | any;

      /** @noSelf */
      static initUI: () => any;

      /** @noSelf */
      static onKeyPressed: (key: any) => any;
    }
  }
  export namespace lua.client.ISUI.ISSafetyUI {}
}
