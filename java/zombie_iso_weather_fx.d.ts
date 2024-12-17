/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.iso.weather.fx {
    /**
     * @customConstructor IsoWeatherFX.new
     * @
     * [CLASS] zombie.iso.weather.fx.IsoWeatherFX
     */
    export class IsoWeatherFX {
      /** int */
      static ID_CLOUD: number;
      /** int */
      static ID_FOG: number;
      /** int */
      static ID_RAIN: number;
      /** int */
      static ID_SNOW: number;
      /** float */
      static ZoomMod: number;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCloudIntensity(): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.iso.weather.fx.WeatherParticleDrawer
       */
      getDrawer(arg0: number): zombie.iso.weather.fx.WeatherParticleDrawer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFogIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getPrecipitationIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getPrecipitationIsSnow(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRenderWindAngleRain(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindAngleIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWindPrecipIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasCloudsToRender(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasFogToRender(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasPrecipitationToRender(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      init(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDebugBounds(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderClouds(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderFog(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0, boolean arg1, boolean arg2): void
       */
      renderLayered(arg0: boolean, arg1: boolean, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderPrecipitation(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCloudIntensity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDebugBounds(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFogIntensity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setPrecipitationIntensity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setPrecipitationIsSnow(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWindAngleIntensity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWindIntensity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWindPrecipIntensity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static clamp(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static clerp(arg0: number, arg1: number, arg2: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): number
       */
      static lerp(arg0: number, arg1: number, arg2: number): number;
    }
    /**
     * @customConstructor WeatherParticleDrawer.new
     * @
     * [CLASS] zombie.iso.weather.fx.WeatherParticleDrawer extends zombie.core.textures.TextureDraw$GenericDrawer
     */
    export class WeatherParticleDrawer {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8): void
       *  - (Texture arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, float arg12): void
       */
      addParticle(arg0: zombie.core.textures.Texture, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9?: number, arg10?: number, arg11?: number, arg12?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      endFrame(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      postRender(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      startFrame(): void;
    }
  }
}
