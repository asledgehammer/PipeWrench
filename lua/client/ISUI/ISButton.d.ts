/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.ISUI {
    /** @customConstructor ISButton:new */
    export class ISButton extends lua.client.ISUI.ISPanel {
      [id: string]: any;
      static [id: string]: any;

      allowMouseUpProcessing: any;

      backgroundColorMouseOver: any;

      backgroundColorPressed: any;

      blinkBGAlpha: any;

      blinkBGAlphaIncrease: any;

      blinkImageAlpha: any;

      blinkImageAlphaIncrease: any;

      borderColorEnabled: any;

      displayBackground: any;

      enable: any;

      fade: any;

      font: any;

      forcedHeightImage: any;

      forcedWidthImage: any;

      image: any;

      isButton: any;

      isJoypad: any;

      joypadFocused: any;

      joypadTexture: any;

      joypadTextureWH: any;

      onclick: any;

      onClickArgs: any;

      onmousedown: any;

      onmouseoutfunction: any;

      onmouseover: any;

      overlayText: any;

      pressed: any;

      pressedTime: any;

      repeatWhilePressedFunc: any;

      sounds: any;

      target: any;

      textColor: any;

      textureColor: any;

      title: any;

      tooltip: any;

      tooltipUI: any;

      yoffset: any;

      constructor(
        x: any,
        y: any,
        width: any,
        height: any,
        title: any,
        clicktarget: any,
        onclick: any,
        onmousedown: any,
        allowMouseUpProcessing: any,
      );

      clearJoypadButton(...__args: never[]): any;

      forceClick(...__args: never[]): any;

      forceImageSize(width: any, height: any, ...__args: never[]): any;

      getTitle(...__args: never[]): any;

      isEnabled(...__args: never[]): any;

      onMouseDoubleClick(x: any, y: any, ...__args: never[]): any;

      render(...__args: never[]): any;

      setBackgroundColorMouseOverRGBA(r: any, g: any, b: any, a: any, ...__args: never[]): any;

      setBackgroundRGBA(r: any, g: any, b: any, a: any, ...__args: never[]): any;

      setBorderRGBA(r: any, g: any, b: any, a: any, ...__args: never[]): any;

      setDisplayBackground(background: any, ...__args: never[]): any;

      setEnable(bEnabled: any, ...__args: never[]): any;

      setFont(font: any, ...__args: never[]): any;

      setImage(image: any, ...__args: never[]): any;

      setJoypadButton(texture: any, ...__args: never[]): any;

      setJoypadFocused(focused: any, ...__args: never[]): any;

      setOnClick(func: any, arg1: any, arg2: any, arg3: any, arg4: any, ...__args: never[]): any;

      setOnMouseOutFunction(onmouseout: any, ...__args: never[]): any;

      setOnMouseOverFunction(onmouseover: any, ...__args: never[]): any;

      setOverlayText(text: any, ...__args: never[]): any;

      setRepeatWhilePressed(func: any, ...__args: never[]): any;

      setSound(which: any, soundName: any, ...__args: never[]): any;

      setTextureRGBA(r: any, g: any, b: any, a: any, ...__args: never[]): any;

      setTitle(title: any, ...__args: never[]): any;

      setTooltip(tooltip: any, ...__args: never[]): any;

      setWidthToTitle(minWidth: any, isJoypad: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      updateTooltip(...__args: never[]): any;
    }
  }
  export namespace lua.client.ISUI.ISButton {}
}
