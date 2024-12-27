/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.scripting.ui {
    /** [ENUM] zombie.scripting.ui.TextAlign */
    export class TextAlign {
      protected constructor();
      static readonly Center: zombie.scripting.ui.TextAlign;
      static readonly Left: zombie.scripting.ui.TextAlign;
      static readonly Right: zombie.scripting.ui.TextAlign;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.scripting.ui.TextAlign>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.scripting.ui.TextAlign>;
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
       *  - (String arg0): zombie.scripting.ui.TextAlign
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.scripting.ui.TextAlign | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.TextAlign[]
       */
      static values(): zombie.scripting.ui.TextAlign[];
    }
    /** [ENUM] zombie.scripting.ui.VectorPosAlign */
    export class VectorPosAlign {
      protected constructor();
      static readonly BottomLeft: zombie.scripting.ui.VectorPosAlign;
      static readonly BottomMiddle: zombie.scripting.ui.VectorPosAlign;
      static readonly BottomRight: zombie.scripting.ui.VectorPosAlign;
      static readonly CenterLeft: zombie.scripting.ui.VectorPosAlign;
      static readonly CenterMiddle: zombie.scripting.ui.VectorPosAlign;
      static readonly CenterRight: zombie.scripting.ui.VectorPosAlign;
      static readonly None: zombie.scripting.ui.VectorPosAlign;
      static readonly TopLeft: zombie.scripting.ui.VectorPosAlign;
      static readonly TopMiddle: zombie.scripting.ui.VectorPosAlign;
      static readonly TopRight: zombie.scripting.ui.VectorPosAlign;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.scripting.ui.VectorPosAlign>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.scripting.ui.VectorPosAlign>;
      /**
       * Method Parameters: 
       *  - (XuiVector arg0): number
       */
      getX(arg0: zombie.scripting.ui.XuiScript$XuiVector): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getXmod(): number;
      /**
       * Method Parameters: 
       *  - (XuiVector arg0): number
       */
      getY(arg0: zombie.scripting.ui.XuiScript$XuiVector): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getYmod(): number;
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
       *  - (String arg0): zombie.scripting.ui.VectorPosAlign
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.scripting.ui.VectorPosAlign | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.VectorPosAlign[]
       */
      static values(): zombie.scripting.ui.VectorPosAlign[];
    }
    /** [ENUM] zombie.scripting.ui.XuiAutoApply */
    export class XuiAutoApply {
      protected constructor();
      static readonly Always: zombie.scripting.ui.XuiAutoApply;
      static readonly Forbidden: zombie.scripting.ui.XuiAutoApply;
      static readonly IfSet: zombie.scripting.ui.XuiAutoApply;
      static readonly IfSetAndKeyExists: zombie.scripting.ui.XuiAutoApply;
      static readonly No: zombie.scripting.ui.XuiAutoApply;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.scripting.ui.XuiAutoApply>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.scripting.ui.XuiAutoApply>;
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
       *  - (String arg0): zombie.scripting.ui.XuiAutoApply
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.scripting.ui.XuiAutoApply | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply[]
       */
      static values(): zombie.scripting.ui.XuiAutoApply[];
    }
    /**
     * @customConstructor XuiLuaStyle.new
     * @
     * [CLASS] zombie.scripting.ui.XuiLuaStyle
     */
    export class XuiLuaStyle {
      /** java.util.EnumSet<zombie.scripting.ui.XuiVarType> */
      static AllowedVarTypes?: java.util.EnumSet<zombie.scripting.ui.XuiVarType>;


      /**
       * Method Parameters: 
       *  - (XuiLuaStyle arg0): void
       */
      copyVarsFrom(arg0: zombie.scripting.ui.XuiLuaStyle): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiLuaStyle$XuiVar<any, any>
       */
      getVar(arg0: string): zombie.scripting.ui.XuiLuaStyle$XuiVar<any, any>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.ui.XuiLuaStyle$XuiVar<any, any>>
       */
      getVars(): java.util.ArrayList<zombie.scripting.ui.XuiLuaStyle$XuiVar<any, any>>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiLuaClass(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiStyleName(): string;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      loadVar(arg0: string, arg1: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      static ReadConfigs(arg0: java.util.ArrayList<zombie.scripting.objects.XuiConfigScript>): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
    }
    /**
     * @customConstructor XuiBoolean.new
     * @
     * [CLASS] zombie.scripting.ui.XuiLuaStyle$XuiBoolean extends zombie.scripting.ui.XuiLuaStyle$XuiVar<java.lang.Boolean, zombie.scripting.ui.XuiLuaStyle$XuiBoolean>
     */
    export class XuiLuaStyle$XuiBoolean {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiColor.new
     * @
     * [CLASS] zombie.scripting.ui.XuiLuaStyle$XuiColor extends zombie.scripting.ui.XuiLuaStyle$XuiVar<zombie.core.Color, zombie.scripting.ui.XuiLuaStyle$XuiColor>
     */
    export class XuiLuaStyle$XuiColor {

      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getA(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getG(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getR(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiDouble.new
     * @
     * [CLASS] zombie.scripting.ui.XuiLuaStyle$XuiDouble extends zombie.scripting.ui.XuiLuaStyle$XuiVar<java.lang.Double, zombie.scripting.ui.XuiLuaStyle$XuiDouble>
     */
    export class XuiLuaStyle$XuiDouble {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiFontType.new
     * @
     * [CLASS] zombie.scripting.ui.XuiLuaStyle$XuiFontType extends zombie.scripting.ui.XuiLuaStyle$XuiVar<zombie.ui.UIFont, zombie.scripting.ui.XuiLuaStyle$XuiFontType>
     */
    export class XuiLuaStyle$XuiFontType {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiString.new
     * @
     * [CLASS] zombie.scripting.ui.XuiLuaStyle$XuiString extends zombie.scripting.ui.XuiLuaStyle$XuiVar<java.lang.String, zombie.scripting.ui.XuiLuaStyle$XuiString>
     */
    export class XuiLuaStyle$XuiString {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiStringList.new
     * @
     * [CLASS] zombie.scripting.ui.XuiLuaStyle$XuiStringList extends zombie.scripting.ui.XuiLuaStyle$XuiVar<java.util.ArrayList<java.lang.String>, zombie.scripting.ui.XuiLuaStyle$XuiStringList>
     */
    export class XuiLuaStyle$XuiStringList {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiTexture.new
     * @
     * [CLASS] zombie.scripting.ui.XuiLuaStyle$XuiTexture extends zombie.scripting.ui.XuiLuaStyle$XuiVar<java.lang.String, zombie.scripting.ui.XuiLuaStyle$XuiTexture>
     */
    export class XuiLuaStyle$XuiTexture {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiTranslateString.new
     * @
     * [CLASS] zombie.scripting.ui.XuiLuaStyle$XuiTranslateString extends zombie.scripting.ui.XuiLuaStyle$XuiVar<java.lang.String, zombie.scripting.ui.XuiLuaStyle$XuiTranslateString>
     */
    export class XuiLuaStyle$XuiTranslateString {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): any
       *  - (Empty): string
       */
      value(): any;
    }
    /**
     * @customConstructor XuiVar.new
     * @
     * [ABSTRACT CLASS] zombie.scripting.ui.XuiLuaStyle$XuiVar
     */
    export class XuiLuaStyle$XuiVar<T, C> {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiManager.new
     * @
     * [CLASS] zombie.scripting.ui.XuiManager
     */
    export class XuiManager {
      /** java.util.EnumSet<zombie.scripting.ScriptType> */
      static XuiScriptTypes?: java.util.EnumSet<zombie.scripting.ScriptType>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.ui.XuiScript>
       */
      static GetAllDefaultStyles(): java.util.ArrayList<zombie.scripting.ui.XuiScript>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.ui.XuiScript>
       */
      static GetAllLayouts(): java.util.ArrayList<zombie.scripting.ui.XuiScript>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.ui.XuiScript>
       */
      static GetAllStyles(): java.util.ArrayList<zombie.scripting.ui.XuiScript>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.ui.XuiScript>
       */
      static GetCombinedScripts(): java.util.ArrayList<zombie.scripting.ui.XuiScript>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiSkin
       */
      static GetDefaultSkin(): zombie.scripting.ui.XuiSkin;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      static GetDefaultStyle(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.XuiLayoutScript
       */
      static GetDefaultStyleScript(arg0: string): zombie.scripting.objects.XuiLayoutScript;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      static GetLayout(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.XuiLayoutScript
       */
      static GetLayoutScript(arg0: string): zombie.scripting.objects.XuiLayoutScript;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiSkin
       */
      static GetSkin(arg0: string): zombie.scripting.ui.XuiSkin;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      static GetStyle(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.XuiLayoutScript
       */
      static GetStyleScript(arg0: string): zombie.scripting.objects.XuiLayoutScript;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static ParseScripts(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDefaultSkinName(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static setParseOnce(arg0: boolean): void;
    }
    /**
     * @customConstructor XuiReference.new
     * @
     * [CLASS] zombie.scripting.ui.XuiReference extends zombie.scripting.ui.XuiScript
     */
    export class XuiReference {
      /**
       * Constructors: 
       *  - (String arg0, boolean arg1)
       */
      constructor(arg0: string, arg1: boolean);
      /**
       * Method Parameters: 
       *  - (Block arg0): void
       */
      Load(arg0: zombie.scripting.ScriptParser$Block): void;
      /**
       * Method Parameters: 
       *  - (XuiScript arg0): void
       */
      addChild(arg0: zombie.scripting.ui.XuiScript): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAllowDropAlways(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorBottom(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorLeft(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorRight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorTop(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiStringList
       */
      getAnimationList(): zombie.scripting.ui.XuiScript$XuiStringList;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFloat
       */
      getAnimationTime(): zombie.scripting.ui.XuiScript$XuiFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackDropTexCol(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getBackground(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorHL(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorHLInv(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorHLVal(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorMouseOver(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundEmpty(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundHover(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColorHL(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColorHLInv(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColorHLVal(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderInput(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderInvalid(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderLocked(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderOutput(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderValid(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.ui.XuiScript>
       */
      getChildren(): java.util.ArrayList<zombie.scripting.ui.XuiScript>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getChoicesColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDisplayBackground(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoBackDropTex(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoBorderLocked(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoHighlight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoInvalidHighlight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoToolTip(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoValidHighlight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDrawBackground(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDrawBorder(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDrawGrid(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDynamic(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFontType
       */
      getFont(): zombie.scripting.ui.XuiScript$XuiFontType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFontType
       */
      getFont2(): zombie.scripting.ui.XuiScript$XuiFontType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFontType
       */
      getFont3(): zombie.scripting.ui.XuiScript$XuiFontType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getGridColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getHsbFactor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getIcon(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVector
       */
      getIconVector(): zombie.scripting.ui.XuiScript$XuiVector;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiString
       */
      getLayout(): zombie.scripting.ui.XuiScript$XuiString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiSpacing
       */
      getMargin(): zombie.scripting.ui.XuiScript$XuiSpacing;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFloat
       */
      getMinimumHeight(): zombie.scripting.ui.XuiScript$XuiFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFloat
       */
      getMinimumWidth(): zombie.scripting.ui.XuiScript$XuiFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getMouseEnabled(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getMouseOverText(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getMoveWithMouse(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getName(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiSpacing
       */
      getPadding(): zombie.scripting.ui.XuiScript$XuiSpacing;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVectorPosAlign
       */
      getPosAlign(): zombie.scripting.ui.XuiScript$XuiVectorPosAlign;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript
       */
      getReferenceLayout(): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getScriptType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getStoreItem(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript
       */
      getStyle(): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTextAlign
       */
      getTextAlign(): zombie.scripting.ui.XuiScript$XuiTextAlign;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getTextColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTexture(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTextureBackground(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getTextureColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTextureOverride(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTickTexture(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getTitle(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getToolTipTextItem(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getToolTipTextLocked(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getTooltip(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript$XuiVar
       */
      getVar(arg0: string): zombie.scripting.ui.XuiScript$XuiVar<any, any>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.ui.XuiScript$XuiVar<any, any>>
       */
      getVars(): java.util.ArrayList<zombie.scripting.ui.XuiScript$XuiVar<any, any>>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVector
       */
      getVector(): zombie.scripting.ui.XuiScript$XuiVector;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiCustomDebug(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiLayoutName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiLuaClass(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiStyle(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiUUID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnyStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLayout(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       *  - (String arg0, String arg1, boolean arg2): boolean
       */
      loadVar(arg0: string, arg1: string, arg2?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (XuiScript arg0): void
       */
      setDefaultStyle(arg0: zombie.scripting.ui.XuiScript): void;
      /**
       * Method Parameters: 
       *  - (XuiScript arg0): void
       */
      setStyle(arg0: zombie.scripting.ui.XuiScript): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      setXuiKey(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      setXuiLuaClass(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      setXuiStyle(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, boolean arg2, XuiScriptType arg3): zombie.scripting.ui.XuiScript
       */
      static CreateScriptForClass(arg0: string, arg1: string, arg2: boolean, arg3: zombie.scripting.ui.XuiScriptType): zombie.scripting.ui.XuiScript;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Block arg0): string
       */
      static ReadLuaClassValue(arg0: zombie.scripting.ScriptParser$Block): string;
    }
    /**
     * @customConstructor XuiScript.new
     * @
     * [CLASS] zombie.scripting.ui.XuiScript
     */
    export class XuiScript {
      /**
       * Constructors: 
       *  - (String arg0, boolean arg1, String arg2)
       *  - (String arg0, boolean arg1, String arg2, XuiScriptType arg3)
       */
      constructor(arg0: string, arg1: boolean, arg2: string, arg3?: zombie.scripting.ui.XuiScriptType);
      /**
       * Method Parameters: 
       *  - (Block arg0): void
       */
      Load(arg0: zombie.scripting.ScriptParser$Block): void;
      /**
       * Method Parameters: 
       *  - (XuiScript arg0): void
       */
      addChild(arg0: zombie.scripting.ui.XuiScript): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAllowDropAlways(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorBottom(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorLeft(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorRight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorTop(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiStringList
       */
      getAnimationList(): zombie.scripting.ui.XuiScript$XuiStringList;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFloat
       */
      getAnimationTime(): zombie.scripting.ui.XuiScript$XuiFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackDropTexCol(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getBackground(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorHL(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorHLInv(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorHLVal(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorMouseOver(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundEmpty(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundHover(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColorHL(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColorHLInv(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColorHLVal(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderInput(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderInvalid(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderLocked(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderOutput(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderValid(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.ui.XuiScript>
       */
      getChildren(): java.util.ArrayList<zombie.scripting.ui.XuiScript>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getChoicesColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDisplayBackground(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoBackDropTex(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoBorderLocked(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoHighlight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoInvalidHighlight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoToolTip(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoValidHighlight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDrawBackground(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDrawBorder(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDrawGrid(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFontType
       */
      getFont(): zombie.scripting.ui.XuiScript$XuiFontType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFontType
       */
      getFont2(): zombie.scripting.ui.XuiScript$XuiFontType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFontType
       */
      getFont3(): zombie.scripting.ui.XuiScript$XuiFontType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getGridColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getHsbFactor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getIcon(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVector
       */
      getIconVector(): zombie.scripting.ui.XuiScript$XuiVector;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiSpacing
       */
      getMargin(): zombie.scripting.ui.XuiScript$XuiSpacing;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFloat
       */
      getMinimumHeight(): zombie.scripting.ui.XuiScript$XuiFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFloat
       */
      getMinimumWidth(): zombie.scripting.ui.XuiScript$XuiFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getMouseEnabled(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getMouseOverText(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getMoveWithMouse(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getName(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiSpacing
       */
      getPadding(): zombie.scripting.ui.XuiScript$XuiSpacing;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVectorPosAlign
       */
      getPosAlign(): zombie.scripting.ui.XuiScript$XuiVectorPosAlign;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getScriptType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getStoreItem(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript
       */
      getStyle(): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTextAlign
       */
      getTextAlign(): zombie.scripting.ui.XuiScript$XuiTextAlign;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getTextColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTexture(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTextureBackground(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getTextureColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTextureOverride(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTickTexture(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getTitle(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getToolTipTextItem(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getToolTipTextLocked(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getTooltip(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript$XuiVar
       */
      getVar(arg0: string): zombie.scripting.ui.XuiScript$XuiVar<any, any>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.ui.XuiScript$XuiVar<any, any>>
       */
      getVars(): java.util.ArrayList<zombie.scripting.ui.XuiScript$XuiVar<any, any>>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVector
       */
      getVector(): zombie.scripting.ui.XuiScript$XuiVector;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiCustomDebug(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiLayoutName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiLuaClass(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiStyle(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiUUID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnyStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLayout(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       *  - (String arg0, String arg1, boolean arg2): boolean
       */
      loadVar(arg0: string, arg1: string, arg2?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (XuiScript arg0): void
       */
      setDefaultStyle(arg0: zombie.scripting.ui.XuiScript): void;
      /**
       * Method Parameters: 
       *  - (XuiScript arg0): void
       */
      setStyle(arg0: zombie.scripting.ui.XuiScript): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      setXuiKey(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      setXuiLuaClass(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      setXuiStyle(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, boolean arg2, XuiScriptType arg3): zombie.scripting.ui.XuiScript
       */
      static CreateScriptForClass(arg0: string, arg1: string, arg2: boolean, arg3: zombie.scripting.ui.XuiScriptType): zombie.scripting.ui.XuiScript;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Block arg0): string
       */
      static ReadLuaClassValue(arg0: zombie.scripting.ScriptParser$Block): string;
    }
    /**
     * @customConstructor XuiBoolean.new
     * @
     * [CLASS] zombie.scripting.ui.XuiScript$XuiBoolean extends zombie.scripting.ui.XuiScript$XuiVar<java.lang.Boolean, zombie.scripting.ui.XuiScript$XuiBoolean>
     */
    export class XuiScript$XuiBoolean {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript$XuiVar<boolean, zombie.scripting.ui.XuiScript$XuiBoolean>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getStyle(): zombie.scripting.ui.XuiScript$XuiVar<boolean, zombie.scripting.ui.XuiScript$XuiBoolean>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getValueType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStyling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScriptLoadEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScriptLoadEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiColor.new
     * @
     * [CLASS] zombie.scripting.ui.XuiScript$XuiColor extends zombie.scripting.ui.XuiScript$XuiVar<zombie.core.Color, zombie.scripting.ui.XuiScript$XuiColor>
     */
    export class XuiScript$XuiColor {

      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getA(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript$XuiVar<zombie.core.Color, zombie.scripting.ui.XuiScript$XuiColor>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getG(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getR(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getStyle(): zombie.scripting.ui.XuiScript$XuiVar<zombie.core.Color, zombie.scripting.ui.XuiScript$XuiColor>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getValueType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStyling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScriptLoadEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScriptLoadEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiDouble.new
     * @
     * [CLASS] zombie.scripting.ui.XuiScript$XuiDouble extends zombie.scripting.ui.XuiScript$XuiVar<java.lang.Double, zombie.scripting.ui.XuiScript$XuiDouble>
     */
    export class XuiScript$XuiDouble {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript$XuiVar<number, zombie.scripting.ui.XuiScript$XuiDouble>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getStyle(): zombie.scripting.ui.XuiScript$XuiVar<number, zombie.scripting.ui.XuiScript$XuiDouble>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getValueType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStyling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScriptLoadEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScriptLoadEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiFloat.new
     * @
     * [CLASS] zombie.scripting.ui.XuiScript$XuiFloat extends zombie.scripting.ui.XuiScript$XuiVar<java.lang.Float, zombie.scripting.ui.XuiScript$XuiFloat>
     */
    export class XuiScript$XuiFloat {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript$XuiVar<number, zombie.scripting.ui.XuiScript$XuiFloat>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getStyle(): zombie.scripting.ui.XuiScript$XuiVar<number, zombie.scripting.ui.XuiScript$XuiFloat>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getValueType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStyling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScriptLoadEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScriptLoadEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiFontType.new
     * @
     * [CLASS] zombie.scripting.ui.XuiScript$XuiFontType extends zombie.scripting.ui.XuiScript$XuiVar<zombie.ui.UIFont, zombie.scripting.ui.XuiScript$XuiFontType>
     */
    export class XuiScript$XuiFontType {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript$XuiVar<zombie.ui.UIFont, zombie.scripting.ui.XuiScript$XuiFontType>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getStyle(): zombie.scripting.ui.XuiScript$XuiVar<zombie.ui.UIFont, zombie.scripting.ui.XuiScript$XuiFontType>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getValueType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStyling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScriptLoadEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScriptLoadEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiFunction.new
     * @
     * [CLASS] zombie.scripting.ui.XuiScript$XuiFunction extends zombie.scripting.ui.XuiScript$XuiVar<java.lang.String, zombie.scripting.ui.XuiScript$XuiFunction>
     */
    export class XuiScript$XuiFunction {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript$XuiVar<string, zombie.scripting.ui.XuiScript$XuiFunction>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getStyle(): zombie.scripting.ui.XuiScript$XuiVar<string, zombie.scripting.ui.XuiScript$XuiFunction>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getValueType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStyling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScriptLoadEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScriptLoadEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiInteger.new
     * @
     * [CLASS] zombie.scripting.ui.XuiScript$XuiInteger extends zombie.scripting.ui.XuiScript$XuiVar<java.lang.Integer, zombie.scripting.ui.XuiScript$XuiInteger>
     */
    export class XuiScript$XuiInteger {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript$XuiVar<number, zombie.scripting.ui.XuiScript$XuiInteger>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getStyle(): zombie.scripting.ui.XuiScript$XuiVar<number, zombie.scripting.ui.XuiScript$XuiInteger>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getValueType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStyling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScriptLoadEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScriptLoadEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiSpacing.new
     * @
     * [CLASS] zombie.scripting.ui.XuiScript$XuiSpacing extends zombie.scripting.ui.XuiScript$XuiVar<java.lang.Float, zombie.scripting.ui.XuiScript$XuiSpacing>
     */
    export class XuiScript$XuiSpacing {
      /**
       * Constructors: 
       *  - (XuiScript arg0, String arg1, XuiUnit arg2, XuiUnit arg3, XuiUnit arg4, XuiUnit arg5)
       */
      constructor(arg0: zombie.scripting.ui.XuiScript, arg1: string, arg2: zombie.scripting.ui.XuiScript$XuiUnit, arg3: zombie.scripting.ui.XuiScript$XuiUnit, arg4: zombie.scripting.ui.XuiScript$XuiUnit, arg5: zombie.scripting.ui.XuiScript$XuiUnit);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBottom(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript$XuiVar<number, zombie.scripting.ui.XuiScript$XuiSpacing>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLeft(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getStyle(): zombie.scripting.ui.XuiScript$XuiVar<number, zombie.scripting.ui.XuiScript$XuiSpacing>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTop(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getValueType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBottomPercent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStyling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLeftPercent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRightPercent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScriptLoadEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTopPercent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScriptLoadEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiString.new
     * @
     * [CLASS] zombie.scripting.ui.XuiScript$XuiString extends zombie.scripting.ui.XuiScript$XuiVar<java.lang.String, zombie.scripting.ui.XuiScript$XuiString>
     */
    export class XuiScript$XuiString {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript$XuiVar<string, zombie.scripting.ui.XuiScript$XuiString>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getStyle(): zombie.scripting.ui.XuiScript$XuiVar<string, zombie.scripting.ui.XuiScript$XuiString>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getValueType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStyling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScriptLoadEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScriptLoadEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiStringList.new
     * @
     * [CLASS] zombie.scripting.ui.XuiScript$XuiStringList extends zombie.scripting.ui.XuiScript$XuiVar<java.util.ArrayList<java.lang.String>, zombie.scripting.ui.XuiScript$XuiStringList>
     */
    export class XuiScript$XuiStringList {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript$XuiVar<any, any>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getStyle(): zombie.scripting.ui.XuiScript$XuiVar<any, any>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getValueType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStyling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScriptLoadEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScriptLoadEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiTextAlign.new
     * @
     * [CLASS] zombie.scripting.ui.XuiScript$XuiTextAlign extends zombie.scripting.ui.XuiScript$XuiVar<zombie.scripting.ui.TextAlign, zombie.scripting.ui.XuiScript$XuiTextAlign>
     */
    export class XuiScript$XuiTextAlign {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript$XuiVar<zombie.scripting.ui.TextAlign, zombie.scripting.ui.XuiScript$XuiTextAlign>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getStyle(): zombie.scripting.ui.XuiScript$XuiVar<zombie.scripting.ui.TextAlign, zombie.scripting.ui.XuiScript$XuiTextAlign>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getValueType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStyling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScriptLoadEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScriptLoadEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiTexture.new
     * @
     * [CLASS] zombie.scripting.ui.XuiScript$XuiTexture extends zombie.scripting.ui.XuiScript$XuiVar<java.lang.String, zombie.scripting.ui.XuiScript$XuiTexture>
     */
    export class XuiScript$XuiTexture {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript$XuiVar<string, zombie.scripting.ui.XuiScript$XuiTexture>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getStyle(): zombie.scripting.ui.XuiScript$XuiVar<string, zombie.scripting.ui.XuiScript$XuiTexture>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getValueType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStyling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScriptLoadEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScriptLoadEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiTranslateString.new
     * @
     * [CLASS] zombie.scripting.ui.XuiScript$XuiTranslateString extends zombie.scripting.ui.XuiScript$XuiVar<java.lang.String, zombie.scripting.ui.XuiScript$XuiTranslateString>
     */
    export class XuiScript$XuiTranslateString {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript$XuiVar<string, zombie.scripting.ui.XuiScript$XuiTranslateString>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getStyle(): zombie.scripting.ui.XuiScript$XuiVar<string, zombie.scripting.ui.XuiScript$XuiTranslateString>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getValueType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStyling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScriptLoadEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScriptLoadEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): any
       *  - (Empty): string
       */
      value(): any;
    }
    /**
     * @customConstructor XuiUnit.new
     * @
     * [CLASS] zombie.scripting.ui.XuiScript$XuiUnit extends zombie.scripting.ui.XuiScript$XuiVar<java.lang.Float, zombie.scripting.ui.XuiScript$XuiUnit>
     */
    export class XuiScript$XuiUnit {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript$XuiVar<number, zombie.scripting.ui.XuiScript$XuiUnit>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getStyle(): zombie.scripting.ui.XuiScript$XuiVar<number, zombie.scripting.ui.XuiScript$XuiUnit>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getValueType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStyling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPercent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScriptLoadEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScriptLoadEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       *  - (float arg0, boolean arg1): void
       */
      setValue(arg0: any, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiVar.new
     * @
     * [ABSTRACT CLASS] zombie.scripting.ui.XuiScript$XuiVar
     */
    export class XuiScript$XuiVar<T, C> {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript$XuiVar<T, C>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getStyle(): zombie.scripting.ui.XuiScript$XuiVar<T, C>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getValueType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStyling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScriptLoadEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScriptLoadEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiVector.new
     * @
     * [CLASS] zombie.scripting.ui.XuiScript$XuiVector extends zombie.scripting.ui.XuiScript$XuiVar<java.lang.Float, zombie.scripting.ui.XuiScript$XuiVector>
     */
    export class XuiScript$XuiVector {
      /**
       * Constructors: 
       *  - (XuiScript arg0, String arg1, XuiUnit arg2, XuiUnit arg3, XuiUnit arg4, XuiUnit arg5)
       */
      constructor(arg0: zombie.scripting.ui.XuiScript, arg1: string, arg2: zombie.scripting.ui.XuiScript$XuiUnit, arg3: zombie.scripting.ui.XuiScript$XuiUnit, arg4: zombie.scripting.ui.XuiScript$XuiUnit, arg5: zombie.scripting.ui.XuiScript$XuiUnit);
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript$XuiVar<number, zombie.scripting.ui.XuiScript$XuiVector>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getH(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getStyle(): zombie.scripting.ui.XuiScript$XuiVar<number, zombie.scripting.ui.XuiScript$XuiVector>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getValueType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getW(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWidth(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStyling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScriptLoadEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      ishPercent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      iswPercent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isxPercent(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isyPercent(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScriptLoadEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /**
     * @customConstructor XuiVectorPosAlign.new
     * @
     * [CLASS] zombie.scripting.ui.XuiScript$XuiVectorPosAlign extends zombie.scripting.ui.XuiScript$XuiVar<zombie.scripting.ui.VectorPosAlign, zombie.scripting.ui.XuiScript$XuiVectorPosAlign>
     */
    export class XuiScript$XuiVectorPosAlign {

      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiAutoApply
       */
      getAutoApplyMode(): zombie.scripting.ui.XuiAutoApply;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript$XuiVar<zombie.scripting.ui.VectorPosAlign, zombie.scripting.ui.XuiScript$XuiVectorPosAlign>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaTableKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVar<T, C>
       */
      getStyle(): zombie.scripting.ui.XuiScript$XuiVar<zombie.scripting.ui.VectorPosAlign, zombie.scripting.ui.XuiScript$XuiVectorPosAlign>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType
       */
      getType(): zombie.scripting.ui.XuiVarType;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUiOrder(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getValueString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getValueType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIgnoreStyling(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScriptLoadEnabled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValueSet(): boolean;
      /**
       * Method Parameters: 
       *  - (XuiAutoApply arg0): void
       */
      setAutoApplyMode(arg0: zombie.scripting.ui.XuiAutoApply): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setScriptLoadEnabled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): number
       */
      setUiOrder(arg0: number): number;
      /**
       * Method Parameters: 
       *  - (Object arg0): void
       */
      setValue(arg0: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): T
       */
      value(): any;
    }
    /** [ENUM] zombie.scripting.ui.XuiScriptType */
    export class XuiScriptType {
      protected constructor();
      static readonly DefaultStyle: zombie.scripting.ui.XuiScriptType;
      static readonly Layout: zombie.scripting.ui.XuiScriptType;
      static readonly Reference: zombie.scripting.ui.XuiScriptType;
      static readonly Style: zombie.scripting.ui.XuiScriptType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.scripting.ui.XuiScriptType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.scripting.ui.XuiScriptType>;
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
       *  - (String arg0): zombie.scripting.ui.XuiScriptType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.scripting.ui.XuiScriptType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType[]
       */
      static values(): zombie.scripting.ui.XuiScriptType[];
    }
    /**
     * @customConstructor XuiSkin.new
     * @
     * [CLASS] zombie.scripting.ui.XuiSkin
     */
    export class XuiSkin {
      /**
       * Constructors: 
       *  - (String arg0, XuiSkinScript arg1)
       */
      constructor(arg0: string, arg1: zombie.scripting.objects.XuiSkinScript);
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.core.Color
       */
      color(arg0: string): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      debugPrint(): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): zombie.scripting.ui.XuiLuaStyle
       */
      get(arg0: string, arg1: string): zombie.scripting.ui.XuiLuaStyle;
      /**
       * Method Parameters: 
       *  - (String arg0, ComponentType arg1): zombie.scripting.ui.XuiSkin$ComponentUiStyle
       */
      getComponentUiStyle(arg0: string, arg1: zombie.entity.ComponentType): zombie.scripting.ui.XuiSkin$ComponentUiStyle;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiLuaStyle
       */
      getDefault(arg0: string): zombie.scripting.ui.XuiLuaStyle;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getEntityDisplayName(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiSkin$EntityUiStyle
       */
      getEntityUiStyle(arg0: string): zombie.scripting.ui.XuiSkin$EntityUiStyle;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInvalidated(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiSkin
       */
      static Default(): zombie.scripting.ui.XuiSkin;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDefaultSkinName(): string;
    }
    /**
     * @customConstructor ComponentUiStyle.new
     * @
     * [CLASS] zombie.scripting.ui.XuiSkin$ComponentUiStyle
     */
    export class XuiSkin$ComponentUiStyle {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDisplayName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getIcon(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getListOrderZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaPanelClass(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiStyle(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEnabled(): boolean;
    }
    /**
     * @customConstructor EntityUiStyle.new
     * @
     * [CLASS] zombie.scripting.ui.XuiSkin$EntityUiStyle
     */
    export class XuiSkin$EntityUiStyle {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBuildDescription(): string;
      /**
       * Method Parameters: 
       *  - (ComponentType arg0): zombie.scripting.ui.XuiSkin$ComponentUiStyle
       */
      getComponentUiStyle(arg0: zombie.entity.ComponentType): zombie.scripting.ui.XuiSkin$ComponentUiStyle;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDisplayName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getIcon(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getLuaCanOpenWindow(): any;
      /**
       * Method Parameters: 
       *  - (Empty): any
       */
      getLuaOpenWindow(): any;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaWindowClass(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiStyle(): string;
      /**
       * Method Parameters: 
       *  - (ComponentType arg0): boolean
       */
      isComponentEnabled(arg0: zombie.entity.ComponentType): boolean;
    }
    /**
     * @customConstructor XuiTableScript.new
     * @
     * [CLASS] zombie.scripting.ui.XuiTableScript extends zombie.scripting.ui.XuiScript
     */
    export class XuiTableScript {
      /**
       * Constructors: 
       *  - (String arg0, boolean arg1, XuiScriptType arg2)
       */
      constructor(arg0: string, arg1: boolean, arg2: zombie.scripting.ui.XuiScriptType);
      /**
       * Method Parameters: 
       *  - (Block arg0): void
       */
      Load(arg0: zombie.scripting.ScriptParser$Block): void;
      /**
       * Method Parameters: 
       *  - (Block arg0, ArrayList arg1): void
       */
      LoadColumnsRows<T>(arg0: zombie.scripting.ScriptParser$Block, arg1: java.util.ArrayList<T>): void;
      /**
       * Method Parameters: 
       *  - (XuiScript arg0): void
       */
      addChild(arg0: zombie.scripting.ui.XuiScript): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAllowDropAlways(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorBottom(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorLeft(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorRight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorTop(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiStringList
       */
      getAnimationList(): zombie.scripting.ui.XuiScript$XuiStringList;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFloat
       */
      getAnimationTime(): zombie.scripting.ui.XuiScript$XuiFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackDropTexCol(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getBackground(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorHL(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorHLInv(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorHLVal(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorMouseOver(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundEmpty(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundHover(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColorHL(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColorHLInv(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColorHLVal(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderInput(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderInvalid(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderLocked(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderOutput(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderValid(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): zombie.scripting.ui.XuiScript
       */
      getCell(arg0: number, arg1: number): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiString
       */
      getCellStyle(): zombie.scripting.ui.XuiScript$XuiString;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.ui.XuiScript>
       */
      getChildren(): java.util.ArrayList<zombie.scripting.ui.XuiScript>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getChoicesColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.ui.XuiScript
       */
      getColumn(arg0: number): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColumnCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiString
       */
      getColumnStyle(): zombie.scripting.ui.XuiScript$XuiString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDisplayBackground(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoBackDropTex(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoBorderLocked(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoHighlight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoInvalidHighlight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoToolTip(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoValidHighlight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDrawBackground(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDrawBorder(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDrawGrid(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFontType
       */
      getFont(): zombie.scripting.ui.XuiScript$XuiFontType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFontType
       */
      getFont2(): zombie.scripting.ui.XuiScript$XuiFontType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFontType
       */
      getFont3(): zombie.scripting.ui.XuiScript$XuiFontType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getGridColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getHsbFactor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getIcon(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVector
       */
      getIconVector(): zombie.scripting.ui.XuiScript$XuiVector;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiSpacing
       */
      getMargin(): zombie.scripting.ui.XuiScript$XuiSpacing;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFloat
       */
      getMinimumHeight(): zombie.scripting.ui.XuiScript$XuiFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFloat
       */
      getMinimumWidth(): zombie.scripting.ui.XuiScript$XuiFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getMouseEnabled(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getMouseOverText(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getMoveWithMouse(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getName(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiSpacing
       */
      getPadding(): zombie.scripting.ui.XuiScript$XuiSpacing;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVectorPosAlign
       */
      getPosAlign(): zombie.scripting.ui.XuiScript$XuiVectorPosAlign;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.scripting.ui.XuiScript
       */
      getRow(arg0: number): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRowCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiString
       */
      getRowStyle(): zombie.scripting.ui.XuiScript$XuiString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getScriptType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getStoreItem(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript
       */
      getStyle(): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTextAlign
       */
      getTextAlign(): zombie.scripting.ui.XuiScript$XuiTextAlign;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getTextColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTexture(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTextureBackground(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getTextureColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTextureOverride(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTickTexture(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getTitle(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getToolTipTextItem(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getToolTipTextLocked(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getTooltip(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript$XuiVar
       */
      getVar(arg0: string): zombie.scripting.ui.XuiScript$XuiVar<any, any>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.ui.XuiScript$XuiVar<any, any>>
       */
      getVars(): java.util.ArrayList<zombie.scripting.ui.XuiScript$XuiVar<any, any>>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVector
       */
      getVector(): zombie.scripting.ui.XuiScript$XuiVector;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiCustomDebug(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiLayoutName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiLuaClass(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiStyle(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiUUID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnyStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLayout(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       *  - (String arg0, String arg1, boolean arg2): boolean
       */
      loadVar(arg0: string, arg1: string, arg2?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (XuiScript arg0): void
       */
      setDefaultStyle(arg0: zombie.scripting.ui.XuiScript): void;
      /**
       * Method Parameters: 
       *  - (XuiScript arg0): void
       */
      setStyle(arg0: zombie.scripting.ui.XuiScript): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      setXuiKey(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      setXuiLuaClass(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      setXuiStyle(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, boolean arg2, XuiScriptType arg3): zombie.scripting.ui.XuiScript
       */
      static CreateScriptForClass(arg0: string, arg1: string, arg2: boolean, arg3: zombie.scripting.ui.XuiScriptType): zombie.scripting.ui.XuiScript;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Block arg0): string
       */
      static ReadLuaClassValue(arg0: zombie.scripting.ScriptParser$Block): string;
    }
    /**
     * @customConstructor XuiTableCellScript.new
     * @
     * [CLASS] zombie.scripting.ui.XuiTableScript$XuiTableCellScript extends zombie.scripting.ui.XuiScript
     */
    export class XuiTableScript$XuiTableCellScript {
      /**
       * Constructors: 
       *  - (String arg0, boolean arg1, XuiScript arg2)
       */
      constructor(arg0: string, arg1: boolean, arg2: zombie.scripting.ui.XuiScript);
      /**
       * Method Parameters: 
       *  - (Block arg0): void
       */
      Load(arg0: zombie.scripting.ScriptParser$Block): void;
      /**
       * Method Parameters: 
       *  - (XuiScript arg0): void
       */
      addChild(arg0: zombie.scripting.ui.XuiScript): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAllowDropAlways(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorBottom(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorLeft(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorRight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorTop(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiStringList
       */
      getAnimationList(): zombie.scripting.ui.XuiScript$XuiStringList;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFloat
       */
      getAnimationTime(): zombie.scripting.ui.XuiScript$XuiFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackDropTexCol(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getBackground(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorHL(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorHLInv(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorHLVal(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorMouseOver(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundEmpty(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundHover(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColorHL(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColorHLInv(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColorHLVal(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderInput(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderInvalid(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderLocked(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderOutput(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderValid(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.ui.XuiScript>
       */
      getChildren(): java.util.ArrayList<zombie.scripting.ui.XuiScript>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getChoicesColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDisplayBackground(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoBackDropTex(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoBorderLocked(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoHighlight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoInvalidHighlight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoToolTip(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoValidHighlight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDrawBackground(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDrawBorder(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDrawGrid(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFontType
       */
      getFont(): zombie.scripting.ui.XuiScript$XuiFontType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFontType
       */
      getFont2(): zombie.scripting.ui.XuiScript$XuiFontType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFontType
       */
      getFont3(): zombie.scripting.ui.XuiScript$XuiFontType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getGridColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getHsbFactor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getIcon(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVector
       */
      getIconVector(): zombie.scripting.ui.XuiScript$XuiVector;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiSpacing
       */
      getMargin(): zombie.scripting.ui.XuiScript$XuiSpacing;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFloat
       */
      getMinimumHeight(): zombie.scripting.ui.XuiScript$XuiFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFloat
       */
      getMinimumWidth(): zombie.scripting.ui.XuiScript$XuiFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getMouseEnabled(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getMouseOverText(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getMoveWithMouse(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getName(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiSpacing
       */
      getPadding(): zombie.scripting.ui.XuiScript$XuiSpacing;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVectorPosAlign
       */
      getPosAlign(): zombie.scripting.ui.XuiScript$XuiVectorPosAlign;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getScriptType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getStoreItem(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript
       */
      getStyle(): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTextAlign
       */
      getTextAlign(): zombie.scripting.ui.XuiScript$XuiTextAlign;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getTextColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTexture(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTextureBackground(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getTextureColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTextureOverride(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTickTexture(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getTitle(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getToolTipTextItem(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getToolTipTextLocked(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getTooltip(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript$XuiVar
       */
      getVar(arg0: string): zombie.scripting.ui.XuiScript$XuiVar<any, any>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.ui.XuiScript$XuiVar<any, any>>
       */
      getVars(): java.util.ArrayList<zombie.scripting.ui.XuiScript$XuiVar<any, any>>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVector
       */
      getVector(): zombie.scripting.ui.XuiScript$XuiVector;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiCustomDebug(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiLayoutName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiLuaClass(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiStyle(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiUUID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnyStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCellHasLoaded(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLayout(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       *  - (String arg0, String arg1, boolean arg2): boolean
       */
      loadVar(arg0: string, arg1: string, arg2?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (XuiScript arg0): void
       */
      setDefaultStyle(arg0: zombie.scripting.ui.XuiScript): void;
      /**
       * Method Parameters: 
       *  - (XuiScript arg0): void
       */
      setStyle(arg0: zombie.scripting.ui.XuiScript): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      setXuiKey(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      setXuiLuaClass(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      setXuiStyle(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, boolean arg2, XuiScriptType arg3): zombie.scripting.ui.XuiScript
       */
      static CreateScriptForClass(arg0: string, arg1: string, arg2: boolean, arg3: zombie.scripting.ui.XuiScriptType): zombie.scripting.ui.XuiScript;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Block arg0): string
       */
      static ReadLuaClassValue(arg0: zombie.scripting.ScriptParser$Block): string;
    }
    /**
     * @customConstructor XuiTableColumnScript.new
     * @
     * [CLASS] zombie.scripting.ui.XuiTableScript$XuiTableColumnScript extends zombie.scripting.ui.XuiScript
     */
    export class XuiTableScript$XuiTableColumnScript {
      /**
       * Constructors: 
       *  - (String arg0, boolean arg1, XuiScript arg2)
       */
      constructor(arg0: string, arg1: boolean, arg2: zombie.scripting.ui.XuiScript);
      /**
       * Method Parameters: 
       *  - (Block arg0): void
       */
      Load(arg0: zombie.scripting.ScriptParser$Block): void;
      /**
       * Method Parameters: 
       *  - (XuiScript arg0): void
       */
      addChild(arg0: zombie.scripting.ui.XuiScript): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAllowDropAlways(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorBottom(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorLeft(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorRight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorTop(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiStringList
       */
      getAnimationList(): zombie.scripting.ui.XuiScript$XuiStringList;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFloat
       */
      getAnimationTime(): zombie.scripting.ui.XuiScript$XuiFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackDropTexCol(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getBackground(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorHL(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorHLInv(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorHLVal(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorMouseOver(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundEmpty(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundHover(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColorHL(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColorHLInv(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColorHLVal(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderInput(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderInvalid(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderLocked(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderOutput(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderValid(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.ui.XuiScript>
       */
      getChildren(): java.util.ArrayList<zombie.scripting.ui.XuiScript>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getChoicesColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDisplayBackground(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoBackDropTex(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoBorderLocked(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoHighlight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoInvalidHighlight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoToolTip(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoValidHighlight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDrawBackground(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDrawBorder(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDrawGrid(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFontType
       */
      getFont(): zombie.scripting.ui.XuiScript$XuiFontType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFontType
       */
      getFont2(): zombie.scripting.ui.XuiScript$XuiFontType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFontType
       */
      getFont3(): zombie.scripting.ui.XuiScript$XuiFontType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getGridColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getHsbFactor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getIcon(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVector
       */
      getIconVector(): zombie.scripting.ui.XuiScript$XuiVector;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiSpacing
       */
      getMargin(): zombie.scripting.ui.XuiScript$XuiSpacing;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFloat
       */
      getMinimumHeight(): zombie.scripting.ui.XuiScript$XuiFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFloat
       */
      getMinimumWidth(): zombie.scripting.ui.XuiScript$XuiFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getMouseEnabled(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getMouseOverText(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getMoveWithMouse(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getName(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiSpacing
       */
      getPadding(): zombie.scripting.ui.XuiScript$XuiSpacing;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVectorPosAlign
       */
      getPosAlign(): zombie.scripting.ui.XuiScript$XuiVectorPosAlign;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getScriptType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getStoreItem(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript
       */
      getStyle(): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTextAlign
       */
      getTextAlign(): zombie.scripting.ui.XuiScript$XuiTextAlign;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getTextColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTexture(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTextureBackground(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getTextureColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTextureOverride(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTickTexture(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getTitle(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getToolTipTextItem(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getToolTipTextLocked(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getTooltip(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript$XuiVar
       */
      getVar(arg0: string): zombie.scripting.ui.XuiScript$XuiVar<any, any>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.ui.XuiScript$XuiVar<any, any>>
       */
      getVars(): java.util.ArrayList<zombie.scripting.ui.XuiScript$XuiVar<any, any>>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVector
       */
      getVector(): zombie.scripting.ui.XuiScript$XuiVector;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiCustomDebug(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiLayoutName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiLuaClass(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiStyle(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiUUID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnyStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLayout(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       *  - (String arg0, String arg1, boolean arg2): boolean
       */
      loadVar(arg0: string, arg1: string, arg2?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (XuiScript arg0): void
       */
      setDefaultStyle(arg0: zombie.scripting.ui.XuiScript): void;
      /**
       * Method Parameters: 
       *  - (XuiScript arg0): void
       */
      setStyle(arg0: zombie.scripting.ui.XuiScript): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      setXuiKey(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      setXuiLuaClass(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      setXuiStyle(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, boolean arg2, XuiScriptType arg3): zombie.scripting.ui.XuiScript
       */
      static CreateScriptForClass(arg0: string, arg1: string, arg2: boolean, arg3: zombie.scripting.ui.XuiScriptType): zombie.scripting.ui.XuiScript;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Block arg0): string
       */
      static ReadLuaClassValue(arg0: zombie.scripting.ScriptParser$Block): string;
    }
    /**
     * @customConstructor XuiTableRowScript.new
     * @
     * [CLASS] zombie.scripting.ui.XuiTableScript$XuiTableRowScript extends zombie.scripting.ui.XuiScript
     */
    export class XuiTableScript$XuiTableRowScript {
      /**
       * Constructors: 
       *  - (String arg0, boolean arg1, XuiScript arg2)
       */
      constructor(arg0: string, arg1: boolean, arg2: zombie.scripting.ui.XuiScript);
      /**
       * Method Parameters: 
       *  - (Block arg0): void
       */
      Load(arg0: zombie.scripting.ScriptParser$Block): void;
      /**
       * Method Parameters: 
       *  - (XuiScript arg0): void
       */
      addChild(arg0: zombie.scripting.ui.XuiScript): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAllowDropAlways(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorBottom(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorLeft(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorRight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getAnchorTop(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiStringList
       */
      getAnimationList(): zombie.scripting.ui.XuiScript$XuiStringList;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFloat
       */
      getAnimationTime(): zombie.scripting.ui.XuiScript$XuiFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackDropTexCol(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getBackground(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorHL(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorHLInv(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorHLVal(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundColorMouseOver(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundEmpty(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBackgroundHover(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColorHL(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColorHLInv(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderColorHLVal(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderInput(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderInvalid(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderLocked(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderOutput(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getBorderValid(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.ui.XuiScript>
       */
      getChildren(): java.util.ArrayList<zombie.scripting.ui.XuiScript>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getChoicesColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript
       */
      getDefaultStyle(): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDisplayBackground(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoBackDropTex(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoBorderLocked(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoHighlight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoInvalidHighlight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoToolTip(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDoValidHighlight(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDrawBackground(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDrawBorder(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getDrawGrid(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFontType
       */
      getFont(): zombie.scripting.ui.XuiScript$XuiFontType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFontType
       */
      getFont2(): zombie.scripting.ui.XuiScript$XuiFontType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFontType
       */
      getFont3(): zombie.scripting.ui.XuiScript$XuiFontType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getGridColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getHsbFactor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getIcon(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVector
       */
      getIconVector(): zombie.scripting.ui.XuiScript$XuiVector;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiSpacing
       */
      getMargin(): zombie.scripting.ui.XuiScript$XuiSpacing;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFloat
       */
      getMinimumHeight(): zombie.scripting.ui.XuiScript$XuiFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiFloat
       */
      getMinimumWidth(): zombie.scripting.ui.XuiScript$XuiFloat;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getMouseEnabled(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getMouseOverText(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getMoveWithMouse(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getName(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiSpacing
       */
      getPadding(): zombie.scripting.ui.XuiScript$XuiSpacing;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVectorPosAlign
       */
      getPosAlign(): zombie.scripting.ui.XuiScript$XuiVectorPosAlign;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScriptType
       */
      getScriptType(): zombie.scripting.ui.XuiScriptType;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiBoolean
       */
      getStoreItem(): zombie.scripting.ui.XuiScript$XuiBoolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript
       */
      getStyle(): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTextAlign
       */
      getTextAlign(): zombie.scripting.ui.XuiScript$XuiTextAlign;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getTextColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTexture(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTextureBackground(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiColor
       */
      getTextureColor(): zombie.scripting.ui.XuiScript$XuiColor;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTextureOverride(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTexture
       */
      getTickTexture(): zombie.scripting.ui.XuiScript$XuiTexture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getTitle(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getToolTipTextItem(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getToolTipTextLocked(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiTranslateString
       */
      getTooltip(): zombie.scripting.ui.XuiScript$XuiTranslateString;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript$XuiVar
       */
      getVar(arg0: string): zombie.scripting.ui.XuiScript$XuiVar<any, any>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.ui.XuiScript$XuiVar<any, any>>
       */
      getVars(): java.util.ArrayList<zombie.scripting.ui.XuiScript$XuiVar<any, any>>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiScript$XuiVector
       */
      getVector(): zombie.scripting.ui.XuiScript$XuiVector;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiCustomDebug(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiKey(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiLayoutName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiLuaClass(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiStyle(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getXuiUUID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnyStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDefaultStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isLayout(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStyle(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       *  - (String arg0, String arg1, boolean arg2): boolean
       */
      loadVar(arg0: string, arg1: string, arg2?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (XuiScript arg0): void
       */
      setDefaultStyle(arg0: zombie.scripting.ui.XuiScript): void;
      /**
       * Method Parameters: 
       *  - (XuiScript arg0): void
       */
      setStyle(arg0: zombie.scripting.ui.XuiScript): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      setXuiKey(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      setXuiLuaClass(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.ui.XuiScript
       */
      setXuiStyle(arg0: string): zombie.scripting.ui.XuiScript;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, boolean arg2, XuiScriptType arg3): zombie.scripting.ui.XuiScript
       */
      static CreateScriptForClass(arg0: string, arg1: string, arg2: boolean, arg3: zombie.scripting.ui.XuiScriptType): zombie.scripting.ui.XuiScript;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Block arg0): string
       */
      static ReadLuaClassValue(arg0: zombie.scripting.ScriptParser$Block): string;
    }
    /** [ENUM] zombie.scripting.ui.XuiVarType */
    export class XuiVarType {
      protected constructor();
      static readonly Boolean: zombie.scripting.ui.XuiVarType;
      static readonly Color: zombie.scripting.ui.XuiVarType;
      static readonly Double: zombie.scripting.ui.XuiVarType;
      static readonly Float: zombie.scripting.ui.XuiVarType;
      static readonly FontType: zombie.scripting.ui.XuiVarType;
      static readonly Function: zombie.scripting.ui.XuiVarType;
      static readonly Integer: zombie.scripting.ui.XuiVarType;
      static readonly String: zombie.scripting.ui.XuiVarType;
      static readonly StringList: zombie.scripting.ui.XuiVarType;
      static readonly TextAlign: zombie.scripting.ui.XuiVarType;
      static readonly Texture: zombie.scripting.ui.XuiVarType;
      static readonly TranslateString: zombie.scripting.ui.XuiVarType;
      static readonly Unit: zombie.scripting.ui.XuiVarType;
      static readonly Vector: zombie.scripting.ui.XuiVarType;
      static readonly VectorPosAlign: zombie.scripting.ui.XuiVarType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.scripting.ui.XuiVarType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.scripting.ui.XuiVarType>;
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
       *  - (String arg0): zombie.scripting.ui.XuiVarType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.scripting.ui.XuiVarType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.scripting.ui.XuiVarType[]
       */
      static values(): zombie.scripting.ui.XuiVarType[];
    }
  }
}
