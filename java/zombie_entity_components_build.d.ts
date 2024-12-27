/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.entity.components.build {
    /**
     * @customConstructor BuildLogic.new
     * @
     * [CLASS] zombie.entity.components.build.BuildLogic extends zombie.entity.components.crafting.BaseCraftingLogic
     */
    export class BuildLogic {
      /**
       * Constructors: 
       *  - (IsoGameCharacter arg0, CraftBench arg1, IsoObject arg2)
       */
      constructor(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.entity.components.crafting.CraftBench, arg2: zombie.iso.IsoObject);
      /**
       * Method Parameters: 
       *  - (String arg0, Object arg1): void
       *  - (String arg0, Object arg1, Object arg2): void
       */
      addEventListener(arg0: string, arg1: any, arg2?: any): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canPerformCurrentRecipe(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1): void
       *  - (String arg0, String arg1, boolean arg2): void
       *  - (String arg0, String arg1, boolean arg2, IsoPlayer arg3): void
       */
      filterRecipeList(arg0: string, arg1: string, arg2?: boolean, arg3?: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      getAllBuildableRecipes(): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * Method Parameters: 
       *  - (CraftRecipe arg0): zombie.entity.components.crafting.BaseCraftingLogic$CachedRecipeInfo
       */
      getCachedRecipeInfo(arg0: zombie.scripting.entity.components.crafting.CraftRecipe): zombie.entity.components.crafting.BaseCraftingLogic$CachedRecipeInfo;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getCategoryList(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.entity.components.crafting.CraftRecipe
       */
      getRecipe(): zombie.scripting.entity.components.crafting.CraftRecipe;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      getRecipeList(): java.util.ArrayList<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * Method Parameters: 
       *  - (InputScript arg0): java.util.List<zombie.scripting.objects.Item>
       */
      getSatisfiedInputItems(arg0: zombie.scripting.entity.components.crafting.InputScript): java.util.List<zombie.scripting.objects.Item>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.spriteconfig.SpriteConfigManager$ObjectInfo
       */
      getSelectedBuildObject(): zombie.entity.components.spriteconfig.SpriteConfigManager$ObjectInfo;
      /**
       * Method Parameters: 
       *  - (String arg0, IsoPlayer arg1): string
       */
      getSelectedRecipeStyle(arg0: string, arg1: zombie.characters.IsoPlayer): string;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCraftActionInProgress(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCraftCheat(): boolean;
      /**
       * Method Parameters: 
       *  - (InputScript arg0): boolean
       */
      isInputSatisfied(arg0: zombie.scripting.entity.components.crafting.InputScript): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isManualSelectInputs(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      performCurrentRecipe(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      refresh(): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setContainers(arg0: java.util.ArrayList<zombie.inventory.ItemContainer>): void;
      /**
       * Method Parameters: 
       *  - (CraftRecipe arg0): void
       */
      setRecipe(arg0: zombie.scripting.entity.components.crafting.CraftRecipe): void;
      /**
       * Method Parameters: 
       *  - (List arg0): void
       */
      setRecipes(arg0: java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>): void;
      /**
       * Method Parameters: 
       *  - (String arg0, String arg1, IsoPlayer arg2): void
       */
      setSelectedRecipeStyle(arg0: string, arg1: string, arg2: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldShowManualSelectInputs(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      sortRecipeList(): void;
      /**
       * Method Parameters: 
       *  - (KahluaTableImpl arg0): void
       */
      startCraftAction(arg0: se.krka.kahlua.j2se.KahluaTableImpl): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      stopCraftAction(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, Object arg1): void
       */
      static callLua(arg0: string, arg1: any): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, Object arg1): boolean
       */
      static callLuaBool(arg0: string, arg1: any): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, List arg2, List arg3, IsoPlayer arg4): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>
       */
      static filterRecipeList(arg0: string, arg1: string, arg2: java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>, arg3: java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>, arg4: zombie.characters.IsoPlayer): java.util.List<zombie.scripting.entity.components.crafting.CraftRecipe>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (CraftRecipe arg0): string
       */
      static getFavouriteModDataString(arg0: zombie.scripting.entity.components.crafting.CraftRecipe): string;
    }
  }
}
