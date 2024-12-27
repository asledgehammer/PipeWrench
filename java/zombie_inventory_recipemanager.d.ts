/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.inventory.recipemanager {
    /**
     * @customConstructor RecipeMonitor.new
     * @
     * [CLASS] zombie.inventory.recipemanager.RecipeMonitor
     */
    export class RecipeMonitor {
      /** zombie.core.Color */
      static readonly colGray?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly colHeader?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly colNeg?: zombie.core.Color;
      /** zombie.core.Color */
      static readonly colPos?: zombie.core.Color;

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
      static DecTab(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      static Enable(arg0: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): zombie.core.Color
       */
      static GetColorForLine(arg0: number): zombie.core.Color;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.core.Color>
       */
      static GetColors(): java.util.ArrayList<zombie.core.Color>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static GetLines(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static GetSaveDir(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static IncTab(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static IsEnabled(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, Color arg1): void
       */
      static Log(arg0: string, arg1?: zombie.core.Color): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static LogBlanc(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, IsoGameCharacter arg1, ArrayList arg2, InventoryItem arg3, ArrayList arg4, boolean arg5): void
       */
      static LogInit(arg0: zombie.scripting.objects.Recipe, arg1: zombie.characters.IsoGameCharacter, arg2: java.util.ArrayList<zombie.inventory.ItemContainer>, arg3: zombie.inventory.InventoryItem, arg4: java.util.ArrayList<zombie.inventory.InventoryItem>, arg5: boolean): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, InventoryItem arg1): void
       */
      static LogItem(arg0: string, arg1: zombie.inventory.InventoryItem): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, ArrayList arg1): void
       */
      static LogList<T>(arg0: string, arg1: java.util.ArrayList<T>): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (List arg0): void
       */
      static LogSources(arg0: java.util.List<zombie.scripting.objects.Recipe$Source>): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static ResetTabs(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static SaveToFile(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (int arg0): void
       */
      static SetTab(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static StartMonitor(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): boolean
       */
      static canLog(): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      static getColBlack(): zombie.core.Color;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      static getColGray(): zombie.core.Color;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemContainer arg0): string
       */
      static getContainerString(arg0: zombie.inventory.ItemContainer): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): number
       */
      static getMonitorID(): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.Recipe
       */
      static getRecipe(): zombie.scripting.objects.Recipe;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      static getRecipeLines(): java.util.ArrayList<string>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getRecipeName(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Result arg0): string
       */
      static getResultString(arg0: zombie.scripting.objects.Recipe$Result): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static resume(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0): void
       */
      static setRecipe(arg0: zombie.scripting.objects.Recipe): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static suspend(): void;
    }
  }
}
