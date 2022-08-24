/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI.Maps {
    /** @customConstructor ISMiniMapInner:new */
    export class ISMiniMapInner extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      dragging: any;

      dragMoved: any;

      dragStartCX: any;

      dragStartCY: any;

      dragStartWorldX: any;

      dragStartWorldY: any;

      dragStartX: any;

      dragStartY: any;

      dragStartZoomF: any;

      mapAPI: any;

      playerNum: any;

      rightMouseDown: any;

      constructor(x: any, y: any, width: any, height: any, playerNum: any);

      onMouseDown: ((x: any, y: any) => any) | any;

      onTeleport: ((worldX: any, worldY: any) => any) | any;

      prerenderHack: (() => any) | any;
    }

    /** @customConstructor ISMiniMapOuter:new */
    export class ISMiniMapOuter extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      borderSize: any;

      bottomHeight: any;

      bottomPanel: any;

      button1: any;

      button2: any;

      button3: any;

      button4: any;

      button5: any;

      button6: any;

      hideInventoryX: any;

      inner: any;

      playerNum: any;

      titleBar: any;

      userPosition: any;

      constructor(x: any, y: any, width: any, height: any, playerNum: any);

      createChildren: (() => any) | any;

      onButton1: (() => any) | any;

      onButton2: (() => any) | any;

      onButton3: (() => any) | any;

      onButton4: (() => any) | any;

      onButton5: (() => any) | any;

      onButton6: (() => any) | any;

      onGainJoypadFocus: ((joypadData: any) => any) | any;

      onLoseJoypadFocus: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      RestoreLayout: ((name: any, layout: any) => any) | any;

      restoreSettings: (() => any) | any;

      SaveLayout: ((name: any, layout: any) => any) | any;

      saveSettings: (() => any) | any;

      setAdornmentsVisible: ((visible: any) => any) | any;

      setPosition: (() => any) | any;
    }

    /** @customConstructor ISMiniMapTitleBar:new */
    export class ISMiniMapTitleBar extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      dragging: any;

      miniMap: any;

      titlebarbkg: any;

      constructor(miniMap: any);

      titleBarHeight: (() => any) | any;

      /** @noSelf */
      static TitleBarHeight: () => any;
    }

    export abstract class ISMiniMap {
      static [id: string]: any;

      /** @noSelf */
      static FocusMiniMap: (playerNum: any) => any;

      /** @noSelf */
      static InitPlayer: (playerNum: any) => any;

      /** @noSelf */
      static IsAllowed: () => any;

      /** @noSelf */
      static Recreate: (playerNum: any) => any;

      /** @noSelf */
      static ToggleMiniMap: (playerNum: any) => any;
    }
  }
  export namespace lua.client.ISUI.Maps.ISMiniMap {}
}
