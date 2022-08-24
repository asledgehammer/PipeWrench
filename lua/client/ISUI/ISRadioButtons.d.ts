/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISRadioButtons:new */
    export class ISRadioButtons extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      _textColor: any;

      autoWidth: any;

      boxSize: any;

      changeOptionArgs: any;

      changeOptionFunc: any;

      changeOptionTarget: any;

      choicesColor: any;

      enable: any;

      font: any;

      fontHgt: any;

      isRadioButtons: any;

      itemGap: any;

      itemHgt: any;

      joypadFocused: any;

      joypadIndex: any;

      leftMargin: any;

      mouseOverIndex: any;

      options: any;

      selected: any;

      textGap: any;

      textureCircle: any;

      textureIndicator: any;

      textureSize: any;

      tooltip: any;

      tooltipUI: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        target: any,
        changeOptionFunc: any,
        arg1: any,
        arg2: any,
        arg3: any,
        arg4: any
      );

      addOption: ((text: any, data: any, texture: any, enabled: any) => any) | any;

      checkIndex: ((index: any) => any) | any;

      clear: (() => any) | any;

      forceClick: (() => any) | any;

      getNumOptions: (() => any) | any;

      getOptionData: ((index: any) => any) | any;

      getOptionText: ((index: any) => any) | any;

      getOptionTexture: ((index: any) => any) | any;

      getTextColor: ((index: any, color: any) => any) | any;

      isEmpty: (() => any) | any;

      isOptionEnabled: ((index: any) => any) | any;

      isSelected: ((index: any) => any) | any;

      onJoypadDirDown: ((joypadData: any) => any) | any;

      onJoypadDirUp: ((joypadData: any) => any) | any;

      render: (() => any) | any;

      setFont: ((font: any) => any) | any;

      setJoypadFocused: ((focused: any) => any) | any;

      setOptionData: ((index: any, data: any) => any) | any;

      setOptionEnabled: ((index: any, enabled: any) => any) | any;

      setOptionText: ((index: any, text: any) => any) | any;

      setOptionTexture: ((index: any, texture: any) => any) | any;

      setSelected: ((index: any) => any) | any;

      setWidthToFit: (() => any) | any;
    }
  }
  export namespace lua.client.ISUI.ISRadioButtons {}
}
