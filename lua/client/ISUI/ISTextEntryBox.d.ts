/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISTextEntryBox:new */
    export class ISTextEntryBox extends lua.client.ISUI.ISPanelJoypad {
      [id: string]: any;
      static [id: string]: any;

      currentText: any;

      fade: any;

      font: any;

      javaObject: any;

      joypadFocused: any;

      keeplog: any;

      logIndex: any;

      title: any;

      tooltip: any;

      tooltipUI: any;

      constructor(title: any, x: any, y: any, width: any, height: any);

      clear(...__args: never[]): any;

      focus(...__args: never[]): any;

      getCursorPos(...__args: never[]): any;

      getFrameAlpha(...__args: never[]): any;

      getInternalText(...__args: never[]): any;

      getMaxLines(...__args: never[]): any;

      getText(...__args: never[]): any;

      ignoreFirstInput(...__args: never[]): any;

      instantiate(...__args: never[]): any;

      isEditable(...__args: never[]): any;

      isFocused(...__args: never[]): any;

      isMultipleLine(...__args: never[]): any;

      isSelectable(...__args: never[]): any;

      onCommandEntered(...__args: never[]): any;

      onMouseWheel(del: any, ...__args: never[]): any;

      onPressDown(...__args: never[]): any;

      onPressUp(...__args: never[]): any;

      onTextChange(...__args: never[]): any;

      selectAll(...__args: never[]): any;

      setClearButton(hasButton: any, ...__args: never[]): any;

      setCursorPos(charIndex: any, ...__args: never[]): any;

      setEditable(editable: any, ...__args: never[]): any;

      setForceUpperCase(forceUpperCase: any, ...__args: never[]): any;

      setFrameAlpha(alpha: any, ...__args: never[]): any;

      setHasFrame(hasFrame: any, ...__args: never[]): any;

      setJoypadFocused(focused: any, joypadData: any, ...__args: never[]): any;

      setMasked(b: any, ...__args: never[]): any;

      setMaxLines(max: any, ...__args: never[]): any;

      setMaxTextLength(length: any, ...__args: never[]): any;

      setMultipleLine(multiple: any, ...__args: never[]): any;

      setOnlyNumbers(onlyNumbers: any, ...__args: never[]): any;

      setSelectable(enable: any, ...__args: never[]): any;

      setText(str: any, ...__args: never[]): any;

      setTooltip(text: any, ...__args: never[]): any;

      setValid(valid: any, ...__args: never[]): any;

      unfocus(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISTextEntryBox {}
}
