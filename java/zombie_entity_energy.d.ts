/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.entity.energy {
    /**
     * @customConstructor Energy.new
     * @
     * [CLASS] zombie.entity.energy.Energy
     */
    export class Energy {
      /** zombie.entity.energy.Energy */
      static readonly Electric?: zombie.entity.energy.Energy;
      /** zombie.entity.energy.Energy */
      static readonly Mechanical?: zombie.entity.energy.Energy;
      /** zombie.entity.energy.Energy */
      static readonly Steam?: zombie.entity.energy.Energy;
      /** zombie.entity.energy.Energy */
      static readonly Thermal?: zombie.entity.energy.Energy;
      /** zombie.entity.energy.Energy */
      static readonly VoidEnergy?: zombie.entity.energy.Energy;


      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDisplayName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEnergyTypeString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getHorizontalBarTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getIconTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getVerticalBarTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVanilla(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.energy.Energy
       *  - (EnergyType arg0): zombie.entity.energy.Energy
       */
      static Get(arg0: string | zombie.entity.energy.EnergyType): zombie.entity.energy.Energy;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ScriptLoadMode arg0): void
       */
      static Init(arg0: zombie.scripting.ScriptLoadMode): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static PreReloadScripts(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Reset(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.entity.energy.Energy>
       */
      static getAllEnergies(): java.util.ArrayList<zombie.entity.energy.Energy>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): zombie.entity.energy.Energy
       */
      static loadEnergy(arg0: java.nio.ByteBuffer, arg1: number): zombie.entity.energy.Energy;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Energy arg0, ByteBuffer arg1): void
       */
      static saveEnergy(arg0: zombie.entity.energy.Energy, arg1: java.nio.ByteBuffer): void;
    }
    /** [ENUM] zombie.entity.energy.EnergyType */
    export class EnergyType {
      protected constructor();
      static readonly Electric: zombie.entity.energy.EnergyType;
      static readonly Mechanical: zombie.entity.energy.EnergyType;
      static readonly Modded: zombie.entity.energy.EnergyType;
      static readonly None: zombie.entity.energy.EnergyType;
      static readonly Steam: zombie.entity.energy.EnergyType;
      static readonly Thermal: zombie.entity.energy.EnergyType;
      static readonly VoidEnergy: zombie.entity.energy.EnergyType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.entity.energy.EnergyType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.entity.energy.EnergyType>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getId(): number;
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
       * Method Parameters: 
       *  - (Empty): string
       */
      toStringLower(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (byte arg0): zombie.entity.energy.EnergyType
       */
      static FromId(arg0: number): zombie.entity.energy.EnergyType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.energy.EnergyType
       */
      static FromNameLower(arg0: string): zombie.entity.energy.EnergyType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static containsNameLowercase(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.entity.energy.EnergyType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.entity.energy.EnergyType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.entity.energy.EnergyType[]
       */
      static values(): zombie.entity.energy.EnergyType[];
    }
  }
}
