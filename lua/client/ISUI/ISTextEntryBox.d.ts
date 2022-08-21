/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
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

      clear: (() => any) | any;

      focus: (() => any) | any;

      getCursorPos: (() => any) | any;

      getFrameAlpha: (() => any) | any;

      getInternalText: (() => any) | any;

      getMaxLines: (() => any) | any;

      getText: (() => any) | any;

      ignoreFirstInput: (() => any) | any;

      instantiate: (() => any) | any;

      isEditable: (() => any) | any;

      isFocused: (() => any) | any;

      isMultipleLine: (() => any) | any;

      isSelectable: (() => any) | any;

      onCommandEntered: (() => any) | any;

      onMouseWheel: ((del: any) => any) | any;

      onPressDown: (() => any) | any;

      onPressUp: (() => any) | any;

      onTextChange: (() => any) | any;

      selectAll: (() => any) | any;

      setClearButton: ((hasButton: any) => any) | any;

      setCursorPos: ((charIndex: any) => any) | any;

      setEditable: ((editable: any) => any) | any;

      setForceUpperCase: ((forceUpperCase: any) => any) | any;

      setFrameAlpha: ((alpha: any) => any) | any;

      setHasFrame: ((hasFrame: any) => any) | any;

      setJoypadFocused: ((focused: any, joypadData: any) => any) | any;

      setMasked: ((b: any) => any) | any;

      setMaxLines: ((max: any) => any) | any;

      setMaxTextLength: ((length: any) => any) | any;

      setMultipleLine: ((multiple: any) => any) | any;

      setOnlyNumbers: ((onlyNumbers: any) => any) | any;

      setSelectable: ((enable: any) => any) | any;

      setText: ((str: any) => any) | any;

      setTooltip: ((text: any) => any) | any;

      setValid: ((valid: any) => any) | any;

      unfocus: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISTextEntryBox {}
}
