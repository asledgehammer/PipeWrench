/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISPanelJoypad:new */
    export class ISPanelJoypad extends lua.client.ISUI.ISUIElement {
      [id: string]: any;
      static [id: string]: any;

      background: any;

      backgroundColor: any;

      borderColor: any;

      downX: any;

      downY: any;

      ISButtonA: any;

      ISButtonB: any;

      ISButtonX: any;

      ISButtonY: any;

      joypadButtons: any;

      joypadButtonsY: any;

      joypadIndex: any;

      joypadIndexY: any;

      mouseOver: any;

      moveWithMouse: any;

      moving: any;

      constructor(x: any, y: any, width: any, height: any);

      clearJoypadFocus: ((joypadData: any) => any) | any;

      close: (() => any) | any;

      doRightJoystickScrolling: ((dx: any, dy: any) => any) | any;

      ensureVisible: (() => any) | any;

      getClosestChild: ((children: any, x: any) => any) | any;

      getJoypadFocus: (() => any) | any;

      getVisibleChildren: ((joypadIndexY: any) => any) | any;

      insertNewLineOfButtons:
        | ((
            button1: any,
            button2: any,
            button3: any,
            button4: any,
            button5: any,
            button6: any,
            button7: any,
            button8: any,
            button9: any,
            button10: any
          ) => any)
        | any;

      insertNewListOfButtons: ((list: any) => any) | any;

      insertNewListOfButtonsList: ((list: any) => any) | any;

      isFocusOnControl: (() => any) | any;

      noBackground: (() => any) | any;

      onMouseDown: ((x: any, y: any) => any) | any;

      restoreJoypadFocus: ((joypadData: any) => any) | any;

      setISButtonForA: ((button: any) => any) | any;

      setISButtonForB: ((button: any) => any) | any;

      setISButtonForX: ((button: any) => any) | any;

      setISButtonForY: ((button: any) => any) | any;

      setJoypadFocus: ((child: any, joypadData: any) => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISPanelJoypad {}
}
