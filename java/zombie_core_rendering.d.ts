/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.core.rendering {
    /**
     * @customConstructor InstancedBuffer.new
     * @
     * [CLASS] zombie.core.rendering.InstancedBuffer extends zombie.core.rendering.ShaderBuffer
     */
    export class InstancedBuffer {
      /**
       * Constructors: 
       *  - (Shader arg0, int arg1)
       */
      constructor(arg0: zombie.core.skinnedmodel.shader.Shader, arg1: number);
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      Advance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GetBinding(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.rendering.ShaderBufferData
       */
      GetBufferData(): zombie.core.rendering.ShaderBufferData;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GetBufferID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      OnReset(): void;
      /**
       * Method Parameters: 
       *  - (ShaderPropertyBlock arg0): void
       */
      PushInstanced(arg0: zombie.core.rendering.ShaderPropertyBlock): void;
      /**
       * Method Parameters: 
       *  - (ShaderPropertyBlock arg0): void
       */
      PushProperties(arg0: zombie.core.rendering.ShaderPropertyBlock): void;
      /**
       * Method Parameters: 
       *  - (ShaderPropertyBlock arg0): void
       */
      PushUniforms(arg0: zombie.core.rendering.ShaderPropertyBlock): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Release(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      SetBinding(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      SetPosition(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      UpdateData(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, boolean arg1): void
       */
      static PushBool(arg0: java.nio.ByteBuffer, arg1: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, Color arg1): void
       */
      static PushColor(arg0: java.nio.ByteBuffer, arg1: zombie.core.Color): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, Color[] arg1): void
       */
      static PushColorArray(arg0: java.nio.ByteBuffer, arg1: zombie.core.Color[]): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, float arg1): void
       */
      static PushFloat(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, float arg1, float arg2): void
       */
      static PushFloat2(arg0: java.nio.ByteBuffer, arg1: number, arg2: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, float arg1, float arg2, float arg3): void
       */
      static PushFloat3(arg0: java.nio.ByteBuffer, arg1: number, arg2: number, arg3: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      static PushFloat4(arg0: java.nio.ByteBuffer, arg1: number, arg2: number, arg3: number, arg4: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, float[] arg1): void
       */
      static PushFloatArray(arg0: java.nio.ByteBuffer, arg1: number[]): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      static PushInt(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, int[] arg1): void
       */
      static PushIntArray(arg0: java.nio.ByteBuffer, arg1: number[]): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, Matrix3f arg1): void
       */
      static PushMatrix3(arg0: java.nio.ByteBuffer, arg1: org.lwjgl.util.vector.Matrix3f): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, Matrix3f[] arg1): void
       */
      static PushMatrix3Array(arg0: java.nio.ByteBuffer, arg1: org.lwjgl.util.vector.Matrix3f[]): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, Matrix4f arg1): void
       */
      static PushMatrix4(arg0: java.nio.ByteBuffer, arg1: org.lwjgl.util.vector.Matrix4f): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, Matrix4f[] arg1): void
       */
      static PushMatrix4Array(arg0: java.nio.ByteBuffer, arg1: org.lwjgl.util.vector.Matrix4f[]): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, int[] arg1): void
       */
      static PushTextureArray(arg0: java.nio.ByteBuffer, arg1: number[]): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, Vector2f arg1): void
       */
      static PushVector2(arg0: java.nio.ByteBuffer, arg1: org.lwjgl.util.vector.Vector2f): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, Vector2f[] arg1): void
       */
      static PushVector2Array(arg0: java.nio.ByteBuffer, arg1: org.lwjgl.util.vector.Vector2f[]): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, Vector3f arg1): void
       */
      static PushVector3(arg0: java.nio.ByteBuffer, arg1: org.lwjgl.util.vector.Vector3f): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, Vector3f[] arg1): void
       */
      static PushVector3Array(arg0: java.nio.ByteBuffer, arg1: org.lwjgl.util.vector.Vector3f[]): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, Vector4f arg1): void
       */
      static PushVector4(arg0: java.nio.ByteBuffer, arg1: org.lwjgl.util.vector.Vector4f): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, Vector4f[] arg1): void
       */
      static PushVector4Array(arg0: java.nio.ByteBuffer, arg1: org.lwjgl.util.vector.Vector4f[]): void;
    }
    /**
     * @customConstructor RenderTarget.new
     * @
     * [ABSTRACT CLASS] zombie.core.rendering.RenderTarget
     */
    export class RenderTarget {

      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      BindDraw(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      BindRead(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      BindTexture(): void;
      /**
       * Method Parameters: 
       *  - (RenderTarget arg0): void
       *  - (RenderTarget arg0, Shader arg1): void
       */
      Blit(arg0: zombie.core.rendering.RenderTarget, arg1?: zombie.core.skinnedmodel.shader.Shader): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.rendering.RenderTarget
       */
      Create(): zombie.core.rendering.RenderTarget;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Destroy(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GetHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GetWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static DrawFullScreenQuad(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static DrawFullScreenTri(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.rendering.RenderTarget
       */
      static GetTarget(arg0: string): zombie.core.rendering.RenderTarget;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static UnbindTarget(): void;
    }
    /**
     * @customConstructor RenderTexture.new
     * @
     * [CLASS] zombie.core.rendering.RenderTexture extends zombie.core.rendering.RenderTarget
     */
    export class RenderTexture {
      /**
       * Constructors: 
       *  - (String arg0)
       *  - (Descriptor arg0)
       */
      constructor(arg0: string | zombie.core.rendering.RenderTexture$Descriptor);
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      BindDepth(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      BindDraw(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      BindRead(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      BindStencil(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      BindTexture(): void;
      /**
       * Method Parameters: 
       *  - (RenderTarget arg0): void
       *  - (RenderTarget arg0, Shader arg1): void
       */
      Blit(arg0: zombie.core.rendering.RenderTarget, arg1?: zombie.core.skinnedmodel.shader.Shader): void;
      /**
       * Method Parameters: 
       *  - (RenderTarget arg0): void
       *  - (RenderTarget arg0, Rectangle arg1, Rectangle arg2): void
       */
      CopyTexture(arg0: zombie.core.rendering.RenderTarget, arg1?: org.lwjgl.util.Rectangle, arg2?: org.lwjgl.util.Rectangle): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.rendering.RenderTarget
       */
      Create(): zombie.core.rendering.RenderTarget;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Destroy(): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GetHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GetWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.rendering.RenderTarget
       */
      Recreate(): zombie.core.rendering.RenderTarget;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static DrawFullScreenQuad(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static DrawFullScreenTri(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.core.rendering.RenderTarget
       *  - (String arg0, boolean arg1): zombie.core.rendering.RenderTexture
       */
      static GetTarget(arg0: string, arg1?: boolean): zombie.core.rendering.RenderTarget | zombie.core.rendering.RenderTexture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Descriptor arg0): zombie.core.rendering.RenderTexture
       */
      static GetTexture(arg0: zombie.core.rendering.RenderTexture$Descriptor): zombie.core.rendering.RenderTexture;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static UnbindTarget(): void;
    }
    /**
     * @customConstructor Descriptor.new
     * @
     * [CLASS] zombie.core.rendering.RenderTexture$Descriptor
     */
    export class RenderTexture$Descriptor {
      /**
       * Constructors: 
       *  - (String arg0)
       *  - (Descriptor arg0)
       */
      constructor(arg0: string | zombie.core.rendering.RenderTexture$Descriptor);
    }
    /**
     * @customConstructor ShaderBufferData.new
     * @
     * [CLASS] zombie.core.rendering.ShaderBufferData
     */
    export class ShaderBufferData {
      /**
       * Constructors: 
       *  - (Shader arg0)
       */
      constructor(arg0: zombie.core.skinnedmodel.shader.Shader);
      /**
       * Method Parameters: 
       *  - (ShaderPropertyBlock arg0): void
       */
      CopyInstanced(arg0: zombie.core.rendering.ShaderPropertyBlock): void;
      /**
       * Method Parameters: 
       *  - (ShaderPropertyBlock arg0): void
       */
      CopyParameters(arg0: zombie.core.rendering.ShaderPropertyBlock): void;
      /**
       * Method Parameters: 
       *  - (ShaderPropertyBlock arg0): void
       */
      CopyUniforms(arg0: zombie.core.rendering.ShaderPropertyBlock): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GetCurrentInstance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GetSize(): number;
      /**
       * Method Parameters: 
       *  - (InstancedBuffer arg0): void
       *  - (InstancedBuffer arg0, ShaderPropertyBlock arg1): void
       */
      PushInstanced(arg0: zombie.core.rendering.InstancedBuffer, arg1?: zombie.core.rendering.ShaderPropertyBlock): void;
      /**
       * Method Parameters: 
       *  - (InstancedBuffer arg0): void
       */
      PushParameters(arg0: zombie.core.rendering.InstancedBuffer): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      PushUniforms(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      Reset(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ResetInstanced(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ResetParameters(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ResetUniforms(): void;
    }
    /**
     * @customConstructor ShaderParameter.new
     * @
     * [CLASS] zombie.core.rendering.ShaderParameter
     */
    export class ShaderParameter {
      /**
       * Constructors: 
       *  - (ShaderParameter arg0)
       *  - (String arg0, boolean arg1)
       *  - (String arg0, float arg1)
       *  - (String arg0, float[] arg1)
       *  - (String arg0, int arg1)
       *  - (String arg0, Matrix3f arg1)
       *  - (String arg0, Matrix3f[] arg1)
       *  - (String arg0, Matrix4f arg1)
       *  - (String arg0, Matrix4f[] arg1)
       *  - (String arg0, Vector2f arg1)
       *  - (String arg0, Vector2f[] arg1)
       *  - (String arg0, Vector3f arg1)
       *  - (String arg0, Vector3f[] arg1)
       *  - (String arg0, Vector4f arg1)
       *  - (String arg0, Vector4f[] arg1)
       *  - (String arg0, int arg1, boolean arg2)
       *  - (String arg0, int[] arg1, boolean arg2)
       */
      constructor(arg0: zombie.core.rendering.ShaderParameter | string, arg1?: boolean | number | number[] | org.lwjgl.util.vector.Matrix3f | org.lwjgl.util.vector.Matrix3f[] | org.lwjgl.util.vector.Matrix4f | org.lwjgl.util.vector.Matrix4f[] | org.lwjgl.util.vector.Vector2f | org.lwjgl.util.vector.Vector2f[] | org.lwjgl.util.vector.Vector3f | org.lwjgl.util.vector.Vector3f[] | org.lwjgl.util.vector.Vector4f | org.lwjgl.util.vector.Vector4f[], arg2?: boolean);
      /**
       * Method Parameters: 
       *  - (ShaderParameter arg0, boolean arg1, boolean arg2): void
       */
      Copy(arg0: zombie.core.rendering.ShaderParameter, arg1: boolean, arg2: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      GetBool(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.nio.FloatBuffer
       */
      GetBuffer(): java.nio.FloatBuffer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GetFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      GetFloatArray(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GetInt(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      GetIntArray(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): org.lwjgl.util.vector.Matrix3f
       */
      GetMatrix3(): org.lwjgl.util.vector.Matrix3f;
      /**
       * Method Parameters: 
       *  - (Empty): org.lwjgl.util.vector.Matrix3f[]
       */
      GetMatrix3Array(): org.lwjgl.util.vector.Matrix3f[];
      /**
       * Method Parameters: 
       *  - (Empty): org.lwjgl.util.vector.Matrix4f
       */
      GetMatrix4(): org.lwjgl.util.vector.Matrix4f;
      /**
       * Method Parameters: 
       *  - (Empty): org.lwjgl.util.vector.Matrix4f[]
       */
      GetMatrix4Array(): org.lwjgl.util.vector.Matrix4f[];
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GetSize(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      GetTexture(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number[]
       */
      GetTextureArray(): number[];
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.rendering.ShaderParameter$ParameterTypes
       */
      GetType(): zombie.core.rendering.ShaderParameter$ParameterTypes;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      GetValue(): any;
      /**
       * Method Parameters: 
       *  - (Empty): org.lwjgl.util.vector.Vector2f
       */
      GetVector2(): org.lwjgl.util.vector.Vector2f;
      /**
       * Method Parameters: 
       *  - (Empty): org.lwjgl.util.vector.Vector2f[]
       */
      GetVector2Array(): org.lwjgl.util.vector.Vector2f[];
      /**
       * Method Parameters: 
       *  - (Empty): org.lwjgl.util.vector.Vector3f
       */
      GetVector3(): org.lwjgl.util.vector.Vector3f;
      /**
       * Method Parameters: 
       *  - (Empty): org.lwjgl.util.vector.Vector3f[]
       */
      GetVector3Array(): org.lwjgl.util.vector.Vector3f[];
      /**
       * Method Parameters: 
       *  - (Empty): org.lwjgl.util.vector.Vector4f
       */
      GetVector4(): org.lwjgl.util.vector.Vector4f;
      /**
       * Method Parameters: 
       *  - (Empty): org.lwjgl.util.vector.Vector4f[]
       */
      GetVector4Array(): org.lwjgl.util.vector.Vector4f[];
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      PullUniform(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (InstancedBuffer arg0, int arg1): void
       */
      PushInstanced(arg0: zombie.core.rendering.InstancedBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      PushUniform(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      ResetValue(): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      SetBool(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      SetFloat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float[] arg0): void
       */
      SetFloatArray(arg0: number[]): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      SetInt(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int[] arg0): void
       */
      SetIntArray(arg0: number[]): void;
      /**
       * Method Parameters: 
       *  - (Matrix3f arg0): void
       */
      SetMatrix3(arg0: org.lwjgl.util.vector.Matrix3f): void;
      /**
       * Method Parameters: 
       *  - (Matrix3f[] arg0): void
       */
      SetMatrix3Array(arg0: org.lwjgl.util.vector.Matrix3f[]): void;
      /**
       * Method Parameters: 
       *  - (Matrix4f arg0): void
       */
      SetMatrix4(arg0: org.lwjgl.util.vector.Matrix4f): void;
      /**
       * Method Parameters: 
       *  - (Matrix4f[] arg0): void
       */
      SetMatrix4Array(arg0: org.lwjgl.util.vector.Matrix4f[]): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      SetTexture(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int[] arg0): void
       */
      SetTextureArray(arg0: number[]): void;
      /**
       * Method Parameters: 
       *  - (Vector2f arg0): void
       *  - (float arg0, float arg1): void
       */
      SetVector2(arg0: org.lwjgl.util.vector.Vector2f | number, arg1?: number): void;
      /**
       * Method Parameters: 
       *  - (Vector2f[] arg0): void
       */
      SetVector2Array(arg0: org.lwjgl.util.vector.Vector2f[]): void;
      /**
       * Method Parameters: 
       *  - (Vector3f arg0): void
       *  - (float arg0, float arg1, float arg2): void
       */
      SetVector3(arg0: org.lwjgl.util.vector.Vector3f | number, arg1?: number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (Vector3f[] arg0): void
       */
      SetVector3Array(arg0: org.lwjgl.util.vector.Vector3f[]): void;
      /**
       * Method Parameters: 
       *  - (Vector4f arg0): void
       *  - (float arg0, float arg1, float arg2, float arg3): void
       */
      SetVector4(arg0: org.lwjgl.util.vector.Vector4f | number, arg1?: number, arg2?: number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (Vector4f[] arg0): void
       */
      SetVector4Array(arg0: org.lwjgl.util.vector.Vector4f[]): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      UpdateDefault(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      WriteToBuffer(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
    }
    /** [ENUM] zombie.core.rendering.ShaderParameter$ParameterTypes */
    export class ShaderParameter$ParameterTypes {
      protected constructor();
      static readonly Bool: zombie.core.rendering.ShaderParameter$ParameterTypes;
      static readonly Float: zombie.core.rendering.ShaderParameter$ParameterTypes;
      static readonly FloatArray: zombie.core.rendering.ShaderParameter$ParameterTypes;
      static readonly Int: zombie.core.rendering.ShaderParameter$ParameterTypes;
      static readonly IntArray: zombie.core.rendering.ShaderParameter$ParameterTypes;
      static readonly Matrix3: zombie.core.rendering.ShaderParameter$ParameterTypes;
      static readonly Matrix3Array: zombie.core.rendering.ShaderParameter$ParameterTypes;
      static readonly Matrix4: zombie.core.rendering.ShaderParameter$ParameterTypes;
      static readonly Matrix4Array: zombie.core.rendering.ShaderParameter$ParameterTypes;
      static readonly Texture: zombie.core.rendering.ShaderParameter$ParameterTypes;
      static readonly TextureArray: zombie.core.rendering.ShaderParameter$ParameterTypes;
      static readonly Vector2: zombie.core.rendering.ShaderParameter$ParameterTypes;
      static readonly Vector2Array: zombie.core.rendering.ShaderParameter$ParameterTypes;
      static readonly Vector3: zombie.core.rendering.ShaderParameter$ParameterTypes;
      static readonly Vector3Array: zombie.core.rendering.ShaderParameter$ParameterTypes;
      static readonly Vector4: zombie.core.rendering.ShaderParameter$ParameterTypes;
      static readonly Vector4Array: zombie.core.rendering.ShaderParameter$ParameterTypes;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.core.rendering.ShaderParameter$ParameterTypes>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.core.rendering.ShaderParameter$ParameterTypes>;
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
       *  - (String arg0): zombie.core.rendering.ShaderParameter$ParameterTypes
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.core.rendering.ShaderParameter$ParameterTypes | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.rendering.ShaderParameter$ParameterTypes[]
       */
      static values(): zombie.core.rendering.ShaderParameter$ParameterTypes[];
    }
    /**
     * @customConstructor ShaderPropertyBlock.new
     * @
     * [CLASS] zombie.core.rendering.ShaderPropertyBlock
     */
    export class ShaderPropertyBlock {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (ShaderPropertyBlock arg0): void
       */
      CopyParameters(arg0: zombie.core.rendering.ShaderPropertyBlock): void;
      /**
       * Method Parameters: 
       *  - (InstancedBuffer arg0): void
       */
      CopyToInstanced(arg0: zombie.core.rendering.InstancedBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.rendering.ShaderParameter
       */
      GetParameter(arg0: string): zombie.core.rendering.ShaderParameter;
      /**
       * Method Parameters: 
       *  - (String arg0, float arg1): void
       */
      SetFloat(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, float[] arg1): void
       */
      SetFloatArray(arg0: string, arg1: number[]): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, float arg2): void
       */
      SetFloatArrayElement(arg0: string, arg1: number, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): void
       */
      SetInt(arg0: string, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Matrix3f arg1): void
       */
      SetMatrix3(arg0: string, arg1: org.lwjgl.util.vector.Matrix3f): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Matrix3f[] arg1): void
       */
      SetMatrix3Array(arg0: string, arg1: org.lwjgl.util.vector.Matrix3f[]): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, Matrix3f arg2): void
       */
      SetMatrix3ArrayElement(arg0: string, arg1: number, arg2: org.lwjgl.util.vector.Matrix3f): void;
      /**
       * Method Parameters: 
       *  - (String arg0, FloatBuffer arg1): org.lwjgl.util.vector.Matrix4f
       *  - (String arg0, Matrix4f arg1): org.lwjgl.util.vector.Matrix4f
       *  - (String arg0, Matrix4f arg1): org.lwjgl.util.vector.Matrix4f
       */
      SetMatrix4(arg0: string, arg1: java.nio.FloatBuffer | org.joml.Matrix4f | org.lwjgl.util.vector.Matrix4f): org.lwjgl.util.vector.Matrix4f;
      /**
       * Method Parameters: 
       *  - (String arg0, FloatBuffer arg1): void
       *  - (String arg0, Matrix4f[] arg1): void
       */
      SetMatrix4Array(arg0: string, arg1: java.nio.FloatBuffer | org.lwjgl.util.vector.Matrix4f[]): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, Matrix4f arg2): void
       */
      SetMatrix4ArrayElement(arg0: string, arg1: number, arg2: org.lwjgl.util.vector.Matrix4f): void;
      /**
       * Method Parameters: 
       *  - (Shader arg0): void
       */
      SetShader(arg0: zombie.core.skinnedmodel.shader.Shader): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Vector2f arg1): void
       *  - (String arg0, float arg1, float arg2): void
       */
      SetVector2(arg0: string, arg1: org.lwjgl.util.vector.Vector2f | number, arg2?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Vector2f[] arg1): void
       */
      SetVector2Array(arg0: string, arg1: org.lwjgl.util.vector.Vector2f[]): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, Vector2f arg2): void
       *  - (String arg0, int arg1, float arg2, float arg3): void
       */
      SetVector2ArrayElement(arg0: string, arg1: number, arg2: org.lwjgl.util.vector.Vector2f | number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Vector3f arg1): void
       *  - (String arg0, float arg1, float arg2, float arg3): void
       */
      SetVector3(arg0: string, arg1: org.lwjgl.util.vector.Vector3f | number, arg2?: number, arg3?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Vector3f[] arg1): void
       */
      SetVector3Array(arg0: string, arg1: org.lwjgl.util.vector.Vector3f[]): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, Vector3f arg2): void
       *  - (String arg0, int arg1, float arg2, float arg3, float arg4): void
       */
      SetVector3ArrayElement(arg0: string, arg1: number, arg2: org.lwjgl.util.vector.Vector3f | number, arg3?: number, arg4?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Vector4f arg1): void
       *  - (String arg0, float arg1, float arg2, float arg3, float arg4): void
       */
      SetVector4(arg0: string, arg1: org.lwjgl.util.vector.Vector4f | number, arg2?: number, arg3?: number, arg4?: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0, Vector4f[] arg1): void
       */
      SetVector4Array(arg0: string, arg1: org.lwjgl.util.vector.Vector4f[]): void;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, Vector4f arg2): void
       *  - (String arg0, int arg1, float arg2, float arg3, float arg4, float arg5): void
       */
      SetVector4ArrayElement(arg0: string, arg1: number, arg2: org.lwjgl.util.vector.Vector4f | number, arg3?: number, arg4?: number, arg5?: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      StoreProperties(): void;
    }
  }
}
