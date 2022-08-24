/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.opengl {
    /**
     * @customConstructor IShaderProgramListener.new
     * @
     * [INTERFACE] zombie.core.opengl.IShaderProgramListener
     */
    export class IShaderProgramListener {
      protected constructor();
      /**
       * Method Parameters: 
       *  - (ShaderProgram arg0): void
       */
      callback(arg0: zombie.core.opengl.ShaderProgram): void;
    }
    /**
     * @customConstructor RenderSettings.new
     * @
     * [CLASS] zombie.core.opengl.RenderSettings
     */
    export class RenderSettings {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      applyRenderSettings(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      getAmbientForPlayer(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.Color
       */
      getMaskClearColorForPlayer(arg0: number): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.core.opengl.RenderSettings$PlayerRenderSettings
       */
      getPlayerSettings(arg0: number): zombie.core.opengl.RenderSettings$PlayerRenderSettings;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      legacyPostRender(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.opengl.RenderSettings
       */
      static getInstance(): zombie.core.opengl.RenderSettings;
    }
    /**
     * @customConstructor PlayerRenderSettings.new
     * @
     * [CLASS] zombie.core.opengl.RenderSettings$PlayerRenderSettings
     */
    export class RenderSettings$PlayerRenderSettings {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAmbient(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getBlendColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBlendIntensity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBmod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDarkness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDesaturation(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFogMod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGmod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getMaskClearColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getNight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRmod(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSM_Alpha(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSM_Radius(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getViewDistance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isApplyNightVisionGoggles(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isExterior(): boolean;
    }
    /**
     * @customConstructor Shader.new
     * @
     * [CLASS] zombie.core.opengl.Shader
     */
    export class Shader {
      /** java.util.HashMap<java.lang.Integer, zombie.core.opengl.Shader> */
      static ShaderMap?: java.util.HashMap<number, zombie.core.opengl.Shader>;

      /**
       * Constructors: 
       *  - (String arg0)
       */
      constructor(arg0: string);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      End(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Start(): void;
      /**
       * Method Parameters: 
       *  - (ShaderProgram arg0): void
       */
      callback(arg0: zombie.core.opengl.ShaderProgram): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      destroy(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.opengl.ShaderProgram
       */
      getProgram(): zombie.core.opengl.ShaderProgram;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCompiled(): boolean;
      /**
       * Method Parameters: 
       *  - (TextureDraw arg0): void
       */
      postRender(arg0: zombie.core.textures.TextureDraw): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setTexture(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (TextureDraw arg0, int arg1): void
       */
      startMainThread(arg0: zombie.core.textures.TextureDraw, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (TextureDraw arg0): void
       */
      startRenderThread(arg0: zombie.core.textures.TextureDraw): void;
    }
    /**
     * @customConstructor ShaderProgram.new
     * @
     * [CLASS] zombie.core.opengl.ShaderProgram
     */
    export class ShaderProgram {

      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      End(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Start(): void;
      /**
       * Method Parameters: 
       *  - (IShaderProgramListener arg0): void
       */
      addCompileListener(arg0: zombie.core.opengl.IShaderProgramListener): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Type arg1): zombie.core.opengl.ShaderUnit
       */
      addShader(arg0: string, arg1: zombie.core.opengl.ShaderUnit$Type): zombie.core.opengl.ShaderUnit;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      compile(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      destroy(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getShaderID(): number;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): zombie.core.opengl.ShaderProgram$Uniform
       *  - (String arg0, int arg1, boolean arg2): zombie.core.opengl.ShaderProgram$Uniform
       */
      getUniform(arg0: string, arg1: number, arg2?: boolean): zombie.core.opengl.ShaderProgram$Uniform;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCompiled(): boolean;
      /**
       * Method Parameters: 
       *  - (IShaderProgramListener arg0): void
       */
      removeCompileListener(arg0: zombie.core.opengl.IShaderProgramListener): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      setSamplerUnit(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): void
       *  - (String arg0, int arg1): void
       *  - (String arg0, Matrix4f arg1): void
       *  - (String arg0, Vector2 arg1): void
       *  - (String arg0, Vector3 arg1): void
       *  - (String arg0, Texture arg1, int arg2): void
       */
      setValue(arg0: string, arg1: number | org.lwjgl.util.vector.Matrix4f | zombie.iso.Vector2 | zombie.iso.Vector3 | zombie.core.textures.Texture, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      setValueColor(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      setValueColorRGB(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1, float arg2): void
       *  - (String arg0, float arg1, float arg2): void
       */
      setVector2(arg0: number | string, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1, float arg2, float arg3): void
       *  - (String arg0, float arg1, float arg2, float arg3): void
       */
      setVector3(arg0: number | string, arg1: number, arg2: number, arg3: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1, float arg2, float arg3, float arg4): void
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      setVector4(arg0: number | string, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       */
      static createFragShader(arg0: string): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, boolean arg1, boolean arg2): zombie.core.opengl.ShaderProgram
       */
      static createShaderProgram(arg0: string, arg1: boolean, arg2: boolean): zombie.core.opengl.ShaderProgram;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       */
      static createVertShader(arg0: string): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): string
       */
      static getLogInfo(arg0: number): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static printLogInfo(arg0: number): void;
    }
    /**
     * @customConstructor Uniform.new
     * @
     * [CLASS] zombie.core.opengl.ShaderProgram$Uniform
     */
    export class ShaderProgram$Uniform {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ShaderUnit.new
     * @
     * [CLASS] zombie.core.opengl.ShaderUnit
     */
    export class ShaderUnit {
      /**
       * Constructors: 
       *  - (ShaderProgram arg0, String arg1, Type arg2)
       */
      constructor(arg0: zombie.core.opengl.ShaderProgram, arg1: string, arg2: zombie.core.opengl.ShaderUnit$Type);
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      attach(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      compile(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      destroy(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFileName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getGLID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getParentShaderProgramGLID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCompiled(): boolean;
    }
    /** [ENUM] zombie.core.opengl.ShaderUnit$Type */
    export class ShaderUnit$Type {
      protected constructor();
      static readonly Frag: zombie.core.opengl.ShaderUnit$Type;
      static readonly Vert: zombie.core.opengl.ShaderUnit$Type;
      name(): string;
      ordinal(): number;
      /**
       * Method Parameters: 
       *  - (Enum arg0): number
       *  - (Object arg0): number
       */
      compareTo(arg0: any): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Optional<java.lang.Enum$EnumDesc<E>>
       */
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.core.opengl.ShaderUnit$Type>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.core.opengl.ShaderUnit$Type>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      name(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      ordinal(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.opengl.ShaderUnit$Type
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.core.opengl.ShaderUnit$Type | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.opengl.ShaderUnit$Type[]
       */
      static values(): zombie.core.opengl.ShaderUnit$Type[];
    }
    /**
     * @customConstructor SharedVertexBufferObjects.new
     * @
     * [CLASS] zombie.core.opengl.SharedVertexBufferObjects
     */
    export class SharedVertexBufferObjects {
      /**
       * Constructors: 
       *  - (int arg0)
       */
      constructor(arg0: number);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      next(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      startFrame(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      unmap(): void;
    }
  }
}
