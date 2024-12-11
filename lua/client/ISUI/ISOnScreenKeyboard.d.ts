/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISOnScreenKeyboard:new */
    export class ISOnScreenKeyboard extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      bSelectDefaultKey: any;

      buttonPadY: any;

      capsLock: any;

      entry: any;

      isRTPressed: any;

      keepOnScreen: any;

      keyPanel: any;

      playerNum: any;

      setBlockMovement: any;

      shiftDown: any;

      textEntryBox: any;

      toggleButtonBG: any;

      transition: any;

      constructor(x: any, y: any, width: any, height: any);

      accept(...__args: never[]): any;

      checkRightTrigger(joypadData: any, ...__args: never[]): any;

      createChildren(...__args: never[]): any;

      focusOnEntry(joypadData: any, ...__args: never[]): any;

      getCurrentText(...__args: never[]): any;

      hide(...__args: never[]): any;

      KeyFunction_CapsLock(...__args: never[]): any;

      KeyFunction_Char(chLower: any, chUpper: any, ...__args: never[]): any;

      KeyFunction_Enter(...__args: never[]): any;

      KeyFunction_Hide(...__args: never[]): any;

      KeyFunction_KeyCode(keyCode: any, ...__args: never[]): any;

      KeyFunction_TogglePassword(...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      onMouseDownOutside(x: any, y: any, ...__args: never[]): any;

      setButtonNames(...__args: never[]): any;

      setMultipleLine(multipleLine: any, ...__args: never[]): any;

      show(playerNum: any, textEntryBox: any, joypadData: any, ...__args: never[]): any;

      shrinkWrap(panel: any, ...__args: never[]): any;

      update(...__args: never[]): any;
    }

    /** @customConstructor OnScreenKeyboardEntry:new */
    export class OnScreenKeyboardEntry extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      javaObject: any;

      constructor(x: any, y: any, width: any, height: any);

      focus(...__args: never[]): any;

      getCursorLine(...__args: never[]): any;

      getCursorPos(...__args: never[]): any;

      getInternalText(...__args: never[]): any;

      getText(...__args: never[]): any;

      instantiate(...__args: never[]): any;

      isFocused(...__args: never[]): any;

      isMasked(...__args: never[]): any;

      isMultipleLine(...__args: never[]): any;

      render(...__args: never[]): any;

      setCursorLine(line: any, ...__args: never[]): any;

      setCursorPos(charIndex: any, ...__args: never[]): any;

      setMasked(masked: any, ...__args: never[]): any;

      setMaxLines(max: any, ...__args: never[]): any;

      setMultipleLine(multipleLine: any, ...__args: never[]): any;

      setText(str: any, ...__args: never[]): any;

      unfocus(...__args: never[]): any;

      update(...__args: never[]): any;
    }

    /** @customConstructor OnScreenKeyboardPanel:new */
    export class OnScreenKeyboardPanel extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      backgroundColorPressed: any;

      buttonH: any;

      buttonPadX: any;

      buttonPadY: any;

      buttonW: any;

      buttonX: any;

      buttonY: any;

      defaultButton: any;

      parent: any;

      rowOfButtons: any;

      constructor(x: any, y: any, parent: any);

      createButton(textLower: any, textUpper: any, keyFunction: any, arg1: any, arg2: any, ...__args: never[]): any;

      createButton_Char(chLower: any, chUpper: any, ...__args: never[]): any;

      createButton2(
        x: any,
        y: any,
        w: any,
        h: any,
        text: any,
        keyFunction: any,
        arg1: any,
        arg2: any,
        ...__args: never[]
      ): any;

      createChildren(...__args: never[]): any;

      onButtonPressed(button: any, ...__args: never[]): any;

      onGainJoypadFocus(joypadData: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      renderButton(...__args: never[]): any;
    }

    export abstract class OnScreenKeyboard {
      static [id: string]: any;

      static instance: any;

      /** @noSelf */
      static GetCurrentText: (...__args: never[]) => any;

      /** @noSelf */
      static Hide: (...__args: never[]) => any;

      /** @noSelf */
      static IsVisible: (...__args: never[]) => any;

      /** @noSelf */
      static Show: (playerNum: any, textEntryBox: any, joypadData: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.client.ISUI.ISOnScreenKeyboard {}
}
