/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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

      clearJoypadFocus(joypadData: any, ...__args: never[]): any;

      close(...__args: never[]): any;

      doRightJoystickScrolling(dx: any, dy: any, ...__args: never[]): any;

      ensureVisible(...__args: never[]): any;

      getClosestChild(children: any, x: any, ...__args: never[]): any;

      getJoypadFocus(...__args: never[]): any;

      getVisibleChildren(joypadIndexY: any, ...__args: never[]): any;

      insertNewLineOfButtons(
        button1: any,
        button2: any,
        button3: any,
        button4: any,
        button5: any,
        button6: any,
        button7: any,
        button8: any,
        button9: any,
        button10: any,
        ...__args: never[]
      ): any;

      insertNewListOfButtons(list: any, ...__args: never[]): any;

      insertNewListOfButtonsList(list: any, ...__args: never[]): any;

      isFocusOnControl(...__args: never[]): any;

      noBackground(...__args: never[]): any;

      onMouseDown(x: any, y: any, ...__args: never[]): any;

      restoreJoypadFocus(joypadData: any, ...__args: never[]): any;

      setISButtonForA(button: any, ...__args: never[]): any;

      setISButtonForB(button: any, ...__args: never[]): any;

      setISButtonForX(button: any, ...__args: never[]): any;

      setISButtonForY(button: any, ...__args: never[]): any;

      setJoypadFocus(child: any, joypadData: any, ...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISPanelJoypad {}
}
