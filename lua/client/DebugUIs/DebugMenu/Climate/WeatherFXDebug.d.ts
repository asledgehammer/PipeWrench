/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench/client' {
  export namespace lua.client.DebugUIs.DebugMenu.Climate {
    /** @customConstructor WeatherFXDebug:new */
    export class WeatherFXDebug extends lua.client.ISUI.ISCollapsableWindow {
      [id: string]: any;
      static [id: string]: any;

      static eventAdded: any;

      static fx: any;

      static instance: any;

      static shiftDown: any;

      AmbientSlider: any;

      btnBlizzard: any;

      btnClimate: any;

      btnDebugBounds: any;

      btnGodMode: any;

      btnLaunchFlare: any;

      btnNightVision: any;

      btnStorm: any;

      btnTropical: any;

      cloudSlider: any;

      currentTile: any;

      DayLightStrengthSlider: any;

      DesaturationSlider: any;

      fogSlider: any;

      hotKeyPanels: any;

      isJoypadWindow: any;

      labelAmbient: any;

      labelAmbientValue: any;

      labelCloud: any;

      labelCloudValue: any;

      labelDayLightStrength: any;

      labelDayLightStrengthValue: any;

      labelDesaturation: any;

      labelDesaturationValue: any;

      labelFog: any;

      labelFogValue: any;

      labelIsSnow: any;

      labelNightStrength: any;

      labelNightStrengthValue: any;

      labelPrecipitation: any;

      labelPrecipitationValue: any;

      labelViewDistance: any;

      labelViewDistanceValue: any;

      labelWindAngle: any;

      labelWindAngleValue: any;

      labelWindIntensity: any;

      labelWindIntensityValue: any;

      LightColorPanel: any;

      NightStrengthSlider: any;

      overrideBPrompt: any;

      pin: any;

      player: any;

      playerNum: any;

      precipitationSlider: any;

      richtext: any;

      subFocus: any;

      tickBoxIsSnow: any;

      ViewDistanceSlider: any;

      windAngleSlider: any;

      windIntensitySlider: any;

      constructor(x: any, y: any, width: any, height: any, player: any);

      clear(...__args: never[]): any;

      onAmbientChange(_slider: any, _value: any, ...__args: never[]): any;

      onButtonClimate(_btn: any, ...__args: never[]): any;

      onButtonDebugBounds(_btn: any, ...__args: never[]): any;

      onButtonDoBlizzard(_btn: any, ...__args: never[]): any;

      onButtonDoStorm(_btn: any, ...__args: never[]): any;

      onButtonDoTropical(_btn: any, ...__args: never[]): any;

      onButtonGodMode(_btn: any, ...__args: never[]): any;

      onButtonLaunchFlare(_btn: any, ...__args: never[]): any;

      onButtonNightVision(_btn: any, ...__args: never[]): any;

      onCloudIntensityChange(_slider: any, _value: any, ...__args: never[]): any;

      onDayLightStrengthChange(_slider: any, _value: any, ...__args: never[]): any;

      onDesaturationChange(_slider: any, _value: any, ...__args: never[]): any;

      onFogIntensityChange(_slider: any, _value: any, ...__args: never[]): any;

      onLightColorChange(_slider: any, _value: any, ...__args: never[]): any;

      onLightIntensityChange(_slider: any, _value: any, ...__args: never[]): any;

      onNightStrengthChange(_slider: any, _value: any, ...__args: never[]): any;

      onPrecipitationChange(_slider: any, _value: any, ...__args: never[]): any;

      onResize(...__args: never[]): any;

      onViewDistanceChange(_slider: any, _value: any, ...__args: never[]): any;

      onWindAngleChange(_slider: any, _value: any, ...__args: never[]): any;

      onWindIntensityChange(_slider: any, _value: any, ...__args: never[]): any;

      stayOnSplitScreen(...__args: never[]): any;

      tickBoxIsSnowChange(_optionIndex: any, _value: any, ...__args: never[]): any;

      update(...__args: never[]): any;

      /** @noSelf */
      static OnOpenPanel: (...__args: never[]) => any;
    }
  }
  export namespace lua.client.DebugUIs.DebugMenu.Climate.WeatherFXDebug {}
}
