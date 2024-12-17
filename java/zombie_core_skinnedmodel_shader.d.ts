/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.skinnedmodel.shader {
    /**
     * @customConstructor Shader.new
     * @
     * [CLASS] zombie.core.skinnedmodel.shader.Shader
     */
    export class Shader {
      /** int */
      static readonly INSTANCE_MAX: number;

      /**
       * Constructors: 
       *  - (String arg0, boolean arg1, boolean arg2)
       */
      constructor(arg0: string, arg1: boolean, arg2: boolean);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      End(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.rendering.ShaderBufferData
       */
      GetBufferData(): zombie.core.rendering.ShaderBufferData;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Start(): void;
      /**
       * Method Parameters: 
       *  - (Matrix4f arg0): void
       */
      StoreMatrix(arg0: org.joml.Matrix4f): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.opengl.ShaderProgram
       */
      getShaderProgram(): zombie.core.opengl.ShaderProgram;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInstanced(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStatic(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVehicleShader(): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAlpha(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       *  - (float arg0, float arg1, float arg2): void
       */
      setAmbient(arg0: number, arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDepthBias(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHighResDepthMultiplier(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setHueShift(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, ModelInstance arg9): void
       *  - (int arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, IsoMovingObject arg12): void
       */
      setLight(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: zombie.core.skinnedmodel.model.ModelInstance | number, arg10?: number, arg11?: number, arg12?: zombie.iso.IsoMovingObject): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9, float arg10, float arg11, ShaderPropertyBlock arg12): void
       */
      setLightInst(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: zombie.core.rendering.ShaderPropertyBlock): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLightingAmount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0, float[] arg1): void
       *  - (int arg0, Matrix4f arg1): void
       */
      setMatrix(arg0: number, arg1: number[] | org.joml.Matrix4f): void;
      /**
       * Method Parameters: 
       *  - (float[] arg0, float[] arg1): void
       */
      setMatrixBlood1(arg0: number[], arg1: number[]): void;
      /**
       * Method Parameters: 
       *  - (float[] arg0, float[] arg1): void
       */
      setMatrixBlood2(arg0: number[], arg1: number[]): void;
      /**
       * Method Parameters: 
       *  - (FloatBuffer arg0): void
       *  - (Matrix4f[] arg0): void
       *  - (Matrix4f[] arg0): void
       *  - (FloatBuffer arg0, boolean arg1): void
       */
      setMatrixPalette(arg0: java.nio.FloatBuffer | org.joml.Matrix4f[] | org.lwjgl.util.vector.Matrix4f[], arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      setReflectionParam(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setShaderAlpha(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTargetDepth(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0, String arg1, int arg2): void
       */
      setTexture(arg0: zombie.core.textures.Texture, arg1: string, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (float[] arg0): void
       */
      setTextureDamage1Enables1(arg0: number[]): void;
      /**
       * Method Parameters: 
       *  - (float[] arg0): void
       */
      setTextureDamage1Enables2(arg0: number[]): void;
      /**
       * Method Parameters: 
       *  - (float[] arg0): void
       */
      setTextureDamage2Enables1(arg0: number[]): void;
      /**
       * Method Parameters: 
       *  - (float[] arg0): void
       */
      setTextureDamage2Enables2(arg0: number[]): void;
      /**
       * Method Parameters: 
       *  - (float[] arg0): void
       */
      setTextureLightsEnables1(arg0: number[]): void;
      /**
       * Method Parameters: 
       *  - (float[] arg0): void
       */
      setTextureLightsEnables2(arg0: number[]): void;
      /**
       * Method Parameters: 
       *  - (Vector4f arg0): void
       *  - (Vector3f arg0, float arg1): void
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      setTexturePainColor(arg0: org.joml.Vector4f | org.joml.Vector3f | number, arg1?: number, arg2?: number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setTextureRustA(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float[] arg0): void
       */
      setTextureUninstall1(arg0: number[]): void;
      /**
       * Method Parameters: 
       *  - (float[] arg0): void
       */
      setTextureUninstall2(arg0: number[]): void;
      /**
       * Method Parameters: 
       *  - (float arg0, float arg1, float arg2): void
       */
      setTint(arg0: number, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Matrix4f arg0, boolean arg1): void
       *  - (Matrix4f arg0, boolean arg1): void
       */
      setTransformMatrix(arg0: org.joml.Matrix4f | org.lwjgl.util.vector.Matrix4f, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (ModelSlotRenderData arg0, ModelInstanceRenderData arg1): void
       */
      startCharacter(arg0: zombie.core.skinnedmodel.model.ModelSlotRenderData, arg1: zombie.core.skinnedmodel.model.ModelInstanceRenderData): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, int arg1): void
       */
      updateAlpha(arg0: zombie.characters.IsoGameCharacter, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateParams(): void;
    }
  }
}
