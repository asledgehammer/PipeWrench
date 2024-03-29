/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.characters.professions {
    /**
     * @customConstructor ProfessionFactory.new
     * @
     * [CLASS] zombie.characters.professions.ProfessionFactory
     */
    export class ProfessionFactory {
      /** java.util.LinkedHashMap<java.lang.String, zombie.characters.professions.ProfessionFactory$Profession> */
      static ProfessionMap?: java.util.LinkedHashMap<string, zombie.characters.professions.ProfessionFactory$Profession>;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
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
       *  - (String arg0, String arg1, String arg2, int arg3): zombie.characters.professions.ProfessionFactory$Profession
       */
      static addProfession(arg0: string, arg1: string, arg2: string, arg3: number): zombie.characters.professions.ProfessionFactory$Profession;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.characters.professions.ProfessionFactory$Profession
       */
      static getProfession(arg0: string): zombie.characters.professions.ProfessionFactory$Profession;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characters.professions.ProfessionFactory$Profession>
       */
      static getProfessions(): java.util.ArrayList<zombie.characters.professions.ProfessionFactory$Profession>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static init(): void;
    }
    /**
     * @customConstructor Profession.new
     * @
     * [CLASS] zombie.characters.professions.ProfessionFactory$Profession
     */
    export class ProfessionFactory$Profession {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, int arg3, String arg4)
       */
      constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: string);
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addFreeTrait(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Perk arg0, int arg1): void
       */
      addXPBoost(arg0: zombie.characters.skills.PerkFactory$Perk, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCost(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.List<string>
       */
      getFreeRecipes(): java.util.List<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.Stack<string>
       */
      getFreeTraitStack(): java.util.Stack<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getFreeTraits(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getIconPath(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLabel(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLeftLabel(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getRightLabel(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<zombie.characters.skills.PerkFactory$Perk, number>
       */
      getXPBoostMap(): java.util.HashMap<zombie.characters.skills.PerkFactory$Perk, number>;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCost(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDescription(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (List arg0): void
       */
      setFreeRecipes(arg0: java.util.List<string>): void;
      /**
       * Method Parameters: 
       *  - (Stack arg0): void
       */
      setFreeTraitStack(arg0: java.util.Stack<string>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setIconPath(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setType(arg0: string): void;
    }
  }
}
