/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
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
        arg4: any,
      );

      addOption(text: any, data: any, texture: any, enabled: any, ...__args: never[]): any;

      checkIndex(index: any, ...__args: never[]): any;

      clear(...__args: never[]): any;

      forceClick(...__args: never[]): any;

      getNumOptions(...__args: never[]): any;

      getOptionData(index: any, ...__args: never[]): any;

      getOptionText(index: any, ...__args: never[]): any;

      getOptionTexture(index: any, ...__args: never[]): any;

      getTextColor(index: any, color: any, ...__args: never[]): any;

      isEmpty(...__args: never[]): any;

      isOptionEnabled(index: any, ...__args: never[]): any;

      isSelected(index: any, ...__args: never[]): any;

      onJoypadDirDown(joypadData: any, ...__args: never[]): any;

      onJoypadDirUp(joypadData: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setFont(font: any, ...__args: never[]): any;

      setJoypadFocused(focused: any, ...__args: never[]): any;

      setOptionData(index: any, data: any, ...__args: never[]): any;

      setOptionEnabled(index: any, enabled: any, ...__args: never[]): any;

      setOptionText(index: any, text: any, ...__args: never[]): any;

      setOptionTexture(index: any, texture: any, ...__args: never[]): any;

      setSelected(index: any, ...__args: never[]): any;

      setWidthToFit(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISRadioButtons {}
}
