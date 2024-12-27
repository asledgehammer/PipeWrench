/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      onMouseDown(x: any, y: any, ...__args: never[]): any;

      onTeleport(worldX: any, worldY: any, ...__args: never[]): any;

      prerenderHack(...__args: never[]): any;
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

      createChildren(...__args: never[]): any;

      onButton1(...__args: never[]): any;

      onButton2(...__args: never[]): any;

      onButton3(...__args: never[]): any;

      onButton4(...__args: never[]): any;

      onButton5(...__args: never[]): any;

      onButton6(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onLoseJoypadFocus(joypadData: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      RestoreLayout(name: any, layout: any, ...__args: never[]): any;

      restoreSettings(...__args: never[]): any;

      SaveLayout(name: any, layout: any, ...__args: never[]): any;

      saveSettings(...__args: never[]): any;

      setAdornmentsVisible(visible: any, ...__args: never[]): any;

      setPosition(...__args: never[]): any;
    }

    /** @customConstructor ISMiniMapTitleBar:new */
    export class ISMiniMapTitleBar extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      dragging: any;

      miniMap: any;

      titlebarbkg: any;

      constructor(miniMap: any);

      titleBarHeight(...__args: never[]): any;

      /** @noSelf */
      static TitleBarHeight: (...__args: never[]) => any;
    }

    export abstract class ISMiniMap {
      static [id: string]: any;

      /** @noSelf */
      static FocusMiniMap: (playerNum: any, ...__args: never[]) => any;

      /** @noSelf */
      static InitPlayer: (playerNum: any, ...__args: never[]) => any;

      /** @noSelf */
      static IsAllowed: (...__args: never[]) => any;

      /** @noSelf */
      static NeedsLight: (...__args: never[]) => any;

      /** @noSelf */
      static Recreate: (playerNum: any, ...__args: never[]) => any;

      /** @noSelf */
      static ToggleMiniMap: (playerNum: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.Maps.ISMiniMap {}
}
