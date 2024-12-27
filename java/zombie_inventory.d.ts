/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.inventory {
    /**
     * @customConstructor FixingManager.new
     * @
     * [CLASS] zombie.inventory.FixingManager
     */
    export class FixingManager {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, IsoGameCharacter arg1, Fixing arg2, Fixer arg3): zombie.inventory.InventoryItem
       */
      static fixItem(arg0: zombie.inventory.InventoryItem, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.scripting.objects.Fixing, arg3: zombie.scripting.objects.Fixing$Fixer): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, IsoGameCharacter arg1, Fixing arg2, Fixer arg3): number
       */
      static getChanceOfFail(arg0: zombie.inventory.InventoryItem, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.scripting.objects.Fixing, arg3: zombie.scripting.objects.Fixing$Fixer): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, IsoGameCharacter arg1, Fixing arg2, Fixer arg3): number
       */
      static getCondRepaired(arg0: zombie.inventory.InventoryItem, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.scripting.objects.Fixing, arg3: zombie.scripting.objects.Fixing$Fixer): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0): java.util.ArrayList<zombie.scripting.objects.Fixing>
       */
      static getFixes(arg0: zombie.inventory.InventoryItem): java.util.ArrayList<zombie.scripting.objects.Fixing>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, Fixer arg1, InventoryItem arg2): void
       */
      static useFixer(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.scripting.objects.Fixing$Fixer, arg2: zombie.inventory.InventoryItem): void;
    }
    /**
     * @customConstructor InventoryItem.new
     * @
     * [CLASS] zombie.inventory.InventoryItem extends zombie.entity.GameEntity
     */
    export class InventoryItem {
      /**
       * Constructors: 
       *  - (String arg0, String arg1, String arg2, String arg3)
       *  - (String arg0, String arg1, String arg2, Item arg3)
       */
      constructor(arg0: string, arg1: string, arg2: string, arg3: string | zombie.scripting.objects.Item);
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      CanStack(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      CopyModData(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0): void
       *  - (ObjectTooltip arg0, Layout arg1): void
       */
      DoTooltip(arg0: zombie.ui.ObjectTooltip, arg1?: zombie.ui.ObjectTooltip$Layout): void;
      /**
       * Method Parameters: 
       *  - (ObjectTooltip arg0, Layout arg1, int arg2): void
       */
      DoTooltipEmbedded(arg0: zombie.ui.ObjectTooltip, arg1: zombie.ui.ObjectTooltip$Layout, arg2: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      HowRotten(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsClothing(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsDrainable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsFood(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsInventoryContainer(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsLiterature(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsMap(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsRotten(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      IsWeapon(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      ModDataMatches(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       */
      OnAddedToContainer(arg0: zombie.inventory.ItemContainer): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       */
      OnBeforeRemoveFromContainer(arg0: zombie.inventory.ItemContainer): void;
      /**
       * Method Parameters: 
       *  - (int arg0, int arg1): void
       */
      SetContainerPosition(arg0: number, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       *  - (boolean arg0, boolean arg1, boolean arg2): void
       */
      Use(arg0?: boolean, arg1?: boolean, arg2?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      UseAndSync(): void;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      UseForCrafting(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      UseItem(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      addExtraItem(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      addToWorld(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      allowRandomTint(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      applyMaxSharpness(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeContainer
       */
      attrib(): zombie.entity.components.attributes.AttributeContainer;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBeActivated(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canBeRemote(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canEmitLight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      canStoreWater(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      componentSize(): number;
      /**
       * Method Parameters: 
       *  - (Component arg0): boolean
       */
      containsComponent(arg0: zombie.entity.Component): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      copyBloodLevelFrom(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      copyClothing(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      copyConditionModData(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      copyModData(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      copyTimesHeadRepairedFrom(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      copyTimesHeadRepairedTo(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      copyTimesRepairedFrom(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      copyTimesRepairedTo(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       */
      createAndStoreDefaultDeadBody(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       *  - (int arg0, float arg1): boolean
       *  - (int arg0, float arg1, boolean arg2): boolean
       *  - (int arg0, float arg1, boolean arg2, boolean arg3): boolean
       *  - (int arg0, float arg1, boolean arg2, boolean arg3, IsoGameCharacter arg4): boolean
       */
      damageCheck(arg0?: number, arg1?: number, arg2?: boolean, arg3?: boolean, arg4?: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doBreakSound(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doBuildingStash(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      doDamagedSound(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      finishupdate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getA(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getActualWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAge(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAlcoholPower(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAlternateModelName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAmmoType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAnimalFeedType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.animals.AnimalTracks
       */
      getAnimalTracks(): zombie.characters.animals.AnimalTracks;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAttachedSlot(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAttachedSlotType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAttachedToModel(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAttachmentReplacement(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAttachmentType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getAttachmentsProvided(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.attributes.AttributeContainer
       */
      getAttributes(): zombie.entity.components.attributes.AttributeContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getB(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBandagePower(): number;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): number
       */
      getBlood(arg0: zombie.characterTextures.BloodBodyPartType): number;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.characterTextures.BloodClothingType>
       */
      getBloodClothingType(): java.util.ArrayList<zombie.characterTextures.BloodClothingType>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBloodLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBloodLevelAdjustedHigh(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBloodLevelAdjustedLow(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBodyLocation(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBoredomChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getBrakeForce(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBreakSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBringToBearSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getBurntString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.nio.ByteBuffer
       */
      getByteData(): java.nio.ByteBuffer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemType
       */
      getCat(): zombie.inventory.ItemType;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCategory(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getChanceToSpawnDamaged(): number;
      /**
       * Method Parameters: 
       *  - (float arg0): string
       */
      getCleanString(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.population.ClothingItem
       */
      getClothingItem(): zombie.core.skinnedmodel.population.ClothingItem;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getClothingItemExtra(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getClothingItemExtraOption(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getClothingItemName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.Color
       */
      getColor(): zombie.core.Color;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColorBlue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColorGreen(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.ColorInfo
       */
      getColorInfo(): zombie.core.textures.ColorInfo;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getColorRed(): number;
      /**
       * Method Parameters: 
       *  - (ComponentType arg0): T
       */
      getComponent<T>(arg0: zombie.entity.ComponentType): T;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.entity.Component
       */
      getComponentForIndex(arg0: number): zombie.entity.Component;
      /**
       * Method Parameters: 
       *  - (short arg0): zombie.entity.Component
       */
      getComponentFromID(arg0: number): zombie.entity.Component;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCondition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getConditionLowerChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getConditionLowerNormal(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getConditionLowerOffroad(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getConditionMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getConsolidateOption(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getContainer(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getContainerX(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getContainerY(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getContentsWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCookedString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCookingTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCountDownSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentAmmoCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentCondition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentUses(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCurrentUsesFloat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCustomMenuOption(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDamagedSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoDeadBody
       */
      getDeadBodyObject(): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDescription(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDigType(): string;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0): number
       */
      getDirt(arg0: zombie.characterTextures.BloodBodyPartType): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDiscomfortModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDisplayCategory(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDisplayName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getDropSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getDurability(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEatTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEatType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEngineLoudness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEntityDisplayName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEntityFullTypeDebug(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEntityNetID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getEquipParent(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEquipSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getEquippedWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getEvolvedRecipeName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getExceptionCompatibleString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getExplosionSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getExtraItems(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getExtraItemsWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFabricType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFatigueChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFillFromDispenserSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFillFromLakeSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFillFromTapSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFillFromToiletSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getFireFuelRatio(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.fluids.FluidContainer
       */
      getFluidContainer(): zombie.entity.components.fluids.FluidContainer;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFullType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getG(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.GameEntityType
       */
      getGameEntityType(): zombie.entity.GameEntityType;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getGunType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHaveBeenRepaired(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeadCondition(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeadConditionLowerChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeadConditionLowerChanceMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHeadConditionMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHearingModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getHotbarEquippedWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getIcon(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getIconsForTexture(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getInvHeat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      getIsCraftingConsumed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getItemHeat(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ItemReplacement
       */
      getItemReplacementPrimaryHand(): zombie.scripting.objects.ItemReplacement;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ItemReplacement
       */
      getItemReplacementSecondHand(): zombie.scripting.objects.ItemReplacement;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getItemWhenDry(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getJobDelta(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getJobType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getKeyId(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLastAged(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightDistance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getLightStrength(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLootType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getLuaCreate(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       *  - (boolean arg0): number
       *  - (IsoGameCharacter arg0): number
       *  - (boolean arg0, IsoGameCharacter arg1): number
       */
      getMaintenanceMod(arg0?: boolean | zombie.characters.IsoGameCharacter, arg1?: zombie.characters.IsoGameCharacter): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMakeUpType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxAmmo(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxMilk(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxSharpness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxUses(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMechanicType(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.radio.media.MediaData
       */
      getMediaData(): zombie.radio.media.MediaData;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMediaType(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMeltingTime(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMetalValue(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getMilkReplaceItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinutesToBurn(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMinutesToCook(): number;
      /**
       * Method Parameters: 
       *  - (Empty): se.krka.kahlua.vm.KahluaTable
       */
      getModData(): se.krka.kahlua.vm.KahluaTable;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModID(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getModelIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getModule(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getName(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoDirections
       */
      getNewPlaceDir(): zombie.iso.IsoDirections;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffAge(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getOffAgeMax(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOffString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOnBreak(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getOutermostContainer(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getOwner(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoDirections
       */
      getPlaceDir(): zombie.iso.IsoDirections;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPlaceMultipleSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPlaceOneSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPourLiquidOnGroundSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPourType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getPreviousOwner(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getQuality(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getR(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRecordedMediaIndex(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getReduceInfectionPower(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRegistry_id(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRemoteControlID(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getRemoteRange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getReplaceOnUse(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getReplaceOnUseFullType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getReplaceOnUseOn(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getReplaceOnUseOnString(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getReplaceType(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getReplaceTypes(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.HashMap<string, string>
       */
      getReplaceTypesMap(): java.util.HashMap<string, string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getRequireInHandOrInventory(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getRightClickContainer(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSaveType(): number;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): number
       */
      getScore(arg0: zombie.characters.SurvivorDesc): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.Item
       */
      getScriptItem(): zombie.scripting.objects.Item;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSharpness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSharpnessIncrement(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSharpnessMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getShoutMultiplier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getShoutType(): string;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getSoundByID(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (String arg0): string
       */
      getSoundParameter(arg0: string): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.entity.components.spriteconfig.SpriteConfig
       */
      getSpriteConfig(): zombie.entity.components.spriteconfig.SpriteConfig;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStashChance(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getStashMap(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getStaticModel(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getStaticModelException(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getStaticModelsByIndex(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStrainModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getStressChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getStringItemType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSuspensionCompression(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getSuspensionDamping(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getSwingAnim(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getTags(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.iso.IsoObject>
       */
      getTaken(): java.util.ArrayList<zombie.iso.IsoObject>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTex(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTexture(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTextureBurnt(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTextureColorMask(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTextureCooked(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTextureFluidMask(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.textures.Texture
       */
      getTexturerotten(): zombie.core.textures.Texture;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimesHeadRepaired(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTimesRepaired(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getTooltip(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTorchDot(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUnCookedString(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getUnequipSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUnequippedWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUnhappyChange(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getUser(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getUses(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoPlayer
       */
      getUsingPlayer(): zombie.characters.IsoPlayer;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getVisionModifier(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.core.skinnedmodel.visual.ItemVisual
       */
      getVisual(): zombie.core.skinnedmodel.visual.ItemVisual;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeaponLevel(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWetCooldown(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWetness(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWheelFriction(): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWithDrainable(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWithoutDrainable(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWorker(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.objects.IsoWorldInventoryObject
       */
      getWorldItem(): zombie.iso.objects.IsoWorldInventoryObject;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWorldObjectSprite(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWorldStaticItem(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWorldStaticModel(): string;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<string>
       */
      getWorldStaticModelsByIndex(): java.util.ArrayList<string>;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getWorldTexture(): string;
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
       *  - (Empty): number
       */
      getZ(): number;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasBlood(): boolean;
      /**
       * Method Parameters: 
       *  - (ComponentType arg0): boolean
       */
      hasComponent(arg0: zombie.entity.ComponentType): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasComponents(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasDirt(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasHeadCondition(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasMetal(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasModData(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasQuality(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasRenderers(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      hasReplaceType(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasSharpness(): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      hasTag(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      hasTimesHeadRepaired(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      haveExtraItems(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       *  - (int arg0, float arg1): boolean
       *  - (int arg0, float arg1, boolean arg2): boolean
       *  - (int arg0, float arg1, boolean arg2, boolean arg3): boolean
       *  - (int arg0, float arg1, boolean arg2, boolean arg3, IsoGameCharacter arg4): boolean
       */
      headConditionCheck(arg0?: number, arg1?: number, arg2?: boolean, arg3?: boolean, arg4?: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      inheritFoodAgeFrom(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      inheritOlderFoodAge(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      initialiseItem(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isActivated(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAddedToEngine(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlcoholic(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAlwaysWelcomeGift(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isAnimalFeed(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBeingFilled(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBloody(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBroken(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isBurnt(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCanBandage(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isConditionAffectsCapacity(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCookable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCooked(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCustomColor(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCustomName(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isCustomWeight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDamaged(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDisappearOnUse(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDull(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmittingLight(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEntityValid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEquipped(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEquippedNoSprint(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFavorite(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFishingLure(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isFood(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHidden(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInLocalPlayerInventory(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInPlayerInventory(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInfected(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isInitialised(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIsCookable(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isKeepOnDeplete(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMemento(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMeta(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isProtectFromRainWhileEquipped(): boolean;
      /**
       * Method Parameters: 
       *  - (boolean arg0): boolean
       */
      isPureWater(arg0: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRecordedMedia(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemoteController(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRemovingFromEngine(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isRequiresEquippedBothHands(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScheduledForBucketUpdate(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isScheduledForEngineRemoval(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTorchCone(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTrap(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTwoHandWeapon(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isUseWorldItem(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): boolean
       */
      isUsingPlayer(arg0: zombie.characters.IsoPlayer): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isValidEngineEntity(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVanilla(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isVisualAid(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWaterSource(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWet(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isWorn(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): zombie.iso.objects.IsoDeadBody
       */
      loadCorpseFromByteData(arg0: zombie.iso.IsoGridSquare): zombie.iso.objects.IsoDeadBody;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      loadEntity(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): void
       */
      monogramAfterDescriptor(arg0: zombie.characters.SurvivorDesc): void;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): void
       */
      nameAfterDescriptor(arg0: zombie.characters.SurvivorDesc): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onBreak(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       */
      onEquip(arg0?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      onUnEquip(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      playActivateDeactivateSound(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      playActivateSound(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      playDeactivateSound(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      randomizeWorldZRotation(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reduceCondition(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reduceHeadCondition(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reduceSharpness(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (boolean arg0): void
       */
      removeFromWorld(arg0?: boolean): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderlast(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      renderlastComponents(): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      requiresEntitySave(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, boolean arg1): void
       */
      save(arg0: java.nio.ByteBuffer, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      saveEntity(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, boolean arg1): void
       */
      saveWithSize(arg0: java.nio.ByteBuffer, arg1: boolean): void;
      /**
       * Method Parameters: 
       *  - (UdpConnection arg0): void
       */
      sendSyncEntity(arg0: zombie.core.raknet.UdpConnection): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setActivated(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setActivatedRemote(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setActualWeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAge(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAlcoholPower(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setAlcoholic(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAmmoType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (AnimalTracks arg0): void
       */
      setAnimalTracks(arg0: zombie.characters.animals.AnimalTracks): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setAttachedSlot(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAttachedSlotType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAttachedToModel(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAttachmentReplacement(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAttachmentType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setAttachmentsProvided(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      setAutoAge(): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBandagePower(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBeingFilled(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0, float arg1): void
       */
      setBlood(arg0: zombie.characterTextures.BloodBodyPartType, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setBloodClothingType(arg0: java.util.ArrayList<zombie.characterTextures.BloodClothingType>): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBloodLevel(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBoredomChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setBrakeForce(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setBreakSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBroken(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setBurnt(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setBurntString(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanBeActivated(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCanBeRemote(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ItemType arg0): void
       */
      setCat(arg0: zombie.inventory.ItemType): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setChanceToSpawnDamaged(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Color arg0): void
       */
      setColor(arg0: zombie.core.Color): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setColorBlue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setColorGreen(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setColorRed(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       *  - (int arg0, boolean arg1): void
       */
      setCondition(arg0: number, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setConditionFrom(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setConditionFromHeadCondition(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setConditionFromModData(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setConditionLowerNormal(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setConditionLowerOffroad(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setConditionMax(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setConditionNoSound(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setConditionTo(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       */
      setContainer(arg0: zombie.inventory.ItemContainer): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setContainerX(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setContainerY(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCooked(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCookedString(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCookingTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCountDownSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCurrentAmmoCount(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCurrentUses(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setCurrentUsesFrom(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCustomColor(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCustomMenuOption(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCustomName(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setCustomWeight(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDescription(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (BloodBodyPartType arg0, float arg1): void
       */
      setDirt(arg0: zombie.characterTextures.BloodBodyPartType, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setDisplayCategory(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setDurability(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setEngineLoudness(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       *  - (IsoGameCharacter arg0, boolean arg1): void
       */
      setEquipParent(arg0: zombie.characters.IsoGameCharacter, arg1?: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setEvolvedRecipeName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setExplosionSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setFatigueChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setFavorite(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setGunType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHaveBeenRepaired(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setHeadCondition(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setHeadConditionFromCondition(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setIcon(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setIconsForTexture(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setInfected(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setInitialised(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsCookable(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsCraftingConsumed(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setItemCapacity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setItemHeat(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setItemWhenDry(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setJobDelta(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setJobType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setKeyId(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLastAged(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setLightDistance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setLightStrength(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxAmmo(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setMaxCapacity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (byte arg0): void
       */
      setMediaType(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMeltingTime(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMetalValue(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMinutesToBurn(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setMinutesToCook(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setModelIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setModule(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setName(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): void
       */
      setNewPlaceDir(arg0: zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOffAge(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setOffAgeMax(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOffString(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoDirections arg0): void
       */
      setPlaceDir(arg0: zombie.iso.IsoDirections): void;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): void
       */
      setPreviousOwner(arg0: zombie.characters.IsoGameCharacter): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setQuality(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (MediaData arg0): void
       */
      setRecordedMediaData(arg0: zombie.radio.media.MediaData): void;
      /**
       * Method Parameters: 
       *  - (short arg0): void
       */
      setRecordedMediaIndex(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRecordedMediaIndexInteger(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setReduceInfectionPower(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Item arg0): void
       */
      setRegistry_id(arg0: zombie.scripting.objects.Item): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRemoteControlID(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setRemoteController(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setRemoteRange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setReplaceOnUse(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setReplaceOnUseOn(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setRequireInHandOrInventory(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (ItemContainer arg0): void
       */
      setRightClickContainer(arg0: zombie.inventory.ItemContainer): void;
      /**
       * Method Parameters: 
       *  - (Item arg0): void
       */
      setScriptItem(arg0: zombie.scripting.objects.Item): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSharpness(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setSharpnessFrom(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setStashChance(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setStashMap(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setStaticModel(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setStaticModelsByIndex(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setStressChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSuspensionCompression(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setSuspensionDamping(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setTaken(arg0: java.util.ArrayList<zombie.iso.IsoObject>): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setTexture(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setTextureBurnt(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTextureColorMask(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setTextureCooked(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTextureFluidMask(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (Texture arg0): void
       */
      setTexturerotten(arg0: zombie.core.textures.Texture): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTimesHeadRepaired(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setTimesRepaired(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setTooltip(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setTorchCone(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setUnCookedString(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setUnhappyChange(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setUses(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      setUsesFrom(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (IsoPlayer arg0): void
       */
      setUsingPlayer(arg0: zombie.characters.IsoPlayer): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWeight(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setWet(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWetCooldown(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWheelFriction(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setWorker(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoWorldInventoryObject arg0): void
       */
      setWorldItem(arg0: zombie.iso.objects.IsoWorldInventoryObject): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setWorldScale(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setWorldStaticItem(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setWorldStaticModel(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setWorldStaticModelsByIndex(arg0: java.util.ArrayList<string>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setWorldTexture(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setWorldZRotation(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       *  - (int arg0): boolean
       *  - (int arg0, float arg1): boolean
       *  - (int arg0, float arg1, boolean arg2): boolean
       *  - (int arg0, float arg1, boolean arg2, boolean arg3): boolean
       *  - (int arg0, float arg1, boolean arg2, boolean arg3, IsoGameCharacter arg4): boolean
       */
      sharpnessCheck(arg0?: number, arg1?: number, arg2?: boolean, arg3?: boolean, arg4?: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      shouldUpdateInWorld(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      storeInByteData(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      syncItemFields(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      synchWithVisual(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * Method Parameters: 
       *  - (int arg0): string
       */
      tryGetWorldStaticModelByIndex(arg0: number): string;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      update(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      updateAge(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       *  - (BaseSoundEmitter arg0): void
       */
      updateEquippedAndActivatedSound(arg0?: zombie.audio.BaseSoundEmitter): void;
      /**
       * Method Parameters: 
       *  - (BaseSoundEmitter arg0): void
       */
      updateSound(arg0: zombie.audio.BaseSoundEmitter): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      static RemoveFromContainer(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): string
       */
      static getDefaultEntityDisplayName(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): zombie.inventory.InventoryItem
       *  - (ByteBuffer arg0, int arg1, boolean arg2): zombie.inventory.InventoryItem
       *  - (ByteBuffer arg0, int arg1, boolean arg2, InventoryItem arg3): zombie.inventory.InventoryItem
       */
      static loadItem(arg0: java.nio.ByteBuffer, arg1: number, arg2?: boolean, arg3?: zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
    }
    /**
     * @customConstructor ItemContainer.new
     * @
     * [CLASS] zombie.inventory.ItemContainer
     */
    export class ItemContainer {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       *  - (int arg0)
       *  - (String arg0, IsoGridSquare arg1, IsoObject arg2)
       *  - (int arg0, String arg1, IsoGridSquare arg2, IsoObject arg3)
       */
      constructor(arg0?: number | string, arg1?: zombie.iso.IsoGridSquare | string, arg2?: zombie.iso.IsoObject | zombie.iso.IsoGridSquare, arg3?: zombie.iso.IsoObject);
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       *  - (String arg0, float arg1): boolean
       */
      AddItem(arg0: string | zombie.inventory.InventoryItem, arg1?: number): zombie.inventory.InventoryItem | boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       */
      AddItemBlind(arg0: zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (InventoryItem arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      AddItems(arg0: java.util.ArrayList<zombie.inventory.InventoryItem> | string | zombie.inventory.InventoryItem, arg1?: number): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       */
      DoAddItem(arg0: zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       */
      DoAddItemBlind(arg0: zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      DoRemoveItem(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       *  - (ItemType arg0): zombie.inventory.InventoryItem
       */
      Find(arg0: string | zombie.inventory.ItemType): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      FindAll(arg0: string): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       *  - (String arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, ArrayList arg1): zombie.inventory.InventoryItem
       */
      FindAndReturn(arg0: string, arg1?: number | java.util.ArrayList<zombie.inventory.InventoryItem>): zombie.inventory.InventoryItem | java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      FindAndReturnCategory(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       */
      FindAndReturnStack(arg0: string | zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      FindAndReturnWaterItem(arg0: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      FindWaterSource(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (ItemType arg0): boolean
       */
      HasType(arg0: zombie.inventory.ItemType): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (InventoryItem arg0): void
       *  - (ItemType arg0): zombie.inventory.InventoryItem
       */
      Remove(arg0: string | zombie.inventory.InventoryItem | zombie.inventory.ItemType): void | zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      RemoveAll(arg0: string, arg1?: number): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       *  - (String arg0, boolean arg1): zombie.inventory.InventoryItem
       */
      RemoveOneOf(arg0: string, arg1?: boolean): void | zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): zombie.inventory.InventoryItem
       */
      addItem(arg0: zombie.inventory.InventoryItem): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      addItemOnServer(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      addItemsToProcessItems(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      clear(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (InventoryItem arg0): boolean
       *  - (String arg0, boolean arg1): boolean
       *  - (InventoryItem arg0, boolean arg1): boolean
       *  - (String arg0, boolean arg1, boolean arg2): boolean
       */
      contains(arg0: string | zombie.inventory.InventoryItem, arg1?: boolean, arg2?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): boolean
       */
      containsEval(arg0: se.krka.kahlua.vm.LuaClosure): boolean;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): boolean
       */
      containsEvalArg(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any): boolean;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): boolean
       */
      containsEvalArgRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any): boolean;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): boolean
       */
      containsEvalRecurse(arg0: se.krka.kahlua.vm.LuaClosure): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      containsID(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      containsRecursive(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsTag(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): boolean
       */
      containsTagEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): boolean
       */
      containsTagEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): boolean
       */
      containsTagEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsTagRecurse(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsType(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): boolean
       */
      containsTypeEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): boolean
       */
      containsTypeEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      containsTypeRecurse(arg0: string): boolean;
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (String arg0, boolean arg1): boolean
       */
      containsWithModule(arg0: string, arg1?: boolean): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      emptyIt(): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getAcceptItemFunction(): string;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getAgeFactor(): number;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (Predicate arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAll(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>, arg1?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllCategory(arg0: string, arg1?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllCategoryRecurse(arg0: string, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllCleaningFluidSources(): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (LuaClosure arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllEval(arg0: se.krka.kahlua.vm.LuaClosure, arg1?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (LuaClosure arg0, Object arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllEvalArg(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (LuaClosure arg0, Object arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllEvalArgRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (LuaClosure arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllEvalRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllFoodsForAnimals(): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (LinkedHashMap arg0, boolean arg1): java.util.LinkedHashMap<string, zombie.inventory.InventoryItem>
       */
      getAllItems(arg0: java.util.LinkedHashMap<string, zombie.inventory.InventoryItem>, arg1: boolean): java.util.LinkedHashMap<string, zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Predicate arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllRecurse(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTag(arg0: string, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTagEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, Object arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTagEvalArg(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any, arg3?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTagEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any, arg3: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTagEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTagRecurse(arg0: string, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllType(arg0: string, arg1?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTypeEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, Object arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTypeEvalArg(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any, arg3?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, Object arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTypeEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any, arg3?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTypeEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, ArrayList arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllTypeRecurse(arg0: string, arg1?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllWaterFillables(): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (boolean arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAllWaterFluidSources(arg0: boolean): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (IsoAnimal arg0): zombie.inventory.types.AnimalInventoryItem
       */
      getAnimalInventoryItem(arg0: zombie.characters.animals.IsoAnimal): zombie.inventory.types.AnimalInventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getAvailableFluidContainer(arg0: string): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getAvailableFluidContainersCapacity(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Predicate arg0, Comparator arg1): zombie.inventory.InventoryItem
       */
      getBest(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>, arg1: java.util.Comparator<zombie.inventory.InventoryItem>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): zombie.inventory.InventoryItem
       */
      getBestBandage(arg0: zombie.characters.SurvivorDesc): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       *  - (Predicate arg0): zombie.inventory.InventoryItem
       */
      getBestCondition(arg0: string | java.util._function_.Predicate<zombie.inventory.InventoryItem>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): zombie.inventory.InventoryItem
       */
      getBestConditionEval(arg0: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): zombie.inventory.InventoryItem
       */
      getBestConditionEvalArg(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): zombie.inventory.InventoryItem
       */
      getBestConditionEvalArgRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): zombie.inventory.InventoryItem
       */
      getBestConditionEvalRecurse(arg0: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       *  - (Predicate arg0): zombie.inventory.InventoryItem
       */
      getBestConditionRecurse(arg0: string | java.util._function_.Predicate<zombie.inventory.InventoryItem>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, LuaClosure arg1): zombie.inventory.InventoryItem
       */
      getBestEval(arg0: se.krka.kahlua.vm.LuaClosure, arg1: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, LuaClosure arg1, Object arg2): zombie.inventory.InventoryItem
       */
      getBestEvalArg(arg0: se.krka.kahlua.vm.LuaClosure, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, LuaClosure arg1, Object arg2): zombie.inventory.InventoryItem
       */
      getBestEvalArgRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, LuaClosure arg1): zombie.inventory.InventoryItem
       */
      getBestEvalRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): zombie.inventory.InventoryItem
       */
      getBestFood(arg0: zombie.characters.SurvivorDesc): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Predicate arg0, Comparator arg1): zombie.inventory.InventoryItem
       */
      getBestRecurse(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>, arg1: java.util.Comparator<zombie.inventory.InventoryItem>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, Comparator arg1): zombie.inventory.InventoryItem
       */
      getBestType(arg0: string, arg1: java.util.Comparator<zombie.inventory.InventoryItem>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): zombie.inventory.InventoryItem
       */
      getBestTypeEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): zombie.inventory.InventoryItem
       */
      getBestTypeEvalArg(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): zombie.inventory.InventoryItem
       */
      getBestTypeEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): zombie.inventory.InventoryItem
       */
      getBestTypeEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, Comparator arg1): zombie.inventory.InventoryItem
       */
      getBestTypeRecurse(arg0: string, arg1: java.util.Comparator<zombie.inventory.InventoryItem>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       *  - (SurvivorDesc arg0): zombie.inventory.InventoryItem
       */
      getBestWeapon(arg0?: zombie.characters.SurvivorDesc): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCapacity(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCapacityWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.characters.IsoGameCharacter
       */
      getCharacter(): zombie.characters.IsoGameCharacter;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getCloseSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getContainerPosition(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getContainingItem(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getContentsWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCookingFactor(): number;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): number
       */
      getCount(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>): number;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): number
       */
      getCountEval(arg0: se.krka.kahlua.vm.LuaClosure): number;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): number
       */
      getCountEvalArg(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any): number;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): number
       */
      getCountEvalArgRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any): number;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): number
       */
      getCountEvalRecurse(arg0: se.krka.kahlua.vm.LuaClosure): number;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): number
       */
      getCountRecurse(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getCountTag(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): number
       */
      getCountTagEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): number;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): number
       */
      getCountTagEvalArg(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): number;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): number
       */
      getCountTagEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): number;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): number
       */
      getCountTagEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getCountTagRecurse(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getCountType(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): number
       */
      getCountTypeEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): number;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): number
       */
      getCountTypeEvalArg(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): number;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): number
       */
      getCountTypeEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): number;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): number
       */
      getCountTypeEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getCountTypeRecurse(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getCustomTemperature(): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): number
       */
      getEffectiveCapacity(arg0: zombie.characters.IsoGameCharacter): number;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): zombie.inventory.InventoryItem
       */
      getFirst(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getFirstAvailableFluidContainer(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getFirstCategory(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getFirstCategoryRecurse(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.InventoryItem
       */
      getFirstCleaningFluidSources(): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): zombie.inventory.InventoryItem
       */
      getFirstEval(arg0: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): zombie.inventory.InventoryItem
       */
      getFirstEvalArg(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1): zombie.inventory.InventoryItem
       */
      getFirstEvalArgRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0): zombie.inventory.InventoryItem
       */
      getFirstEvalRecurse(arg0: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getFirstFluidContainer(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): zombie.inventory.InventoryItem
       */
      getFirstRecurse(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getFirstTag(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): zombie.inventory.InventoryItem
       */
      getFirstTagEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): zombie.inventory.InventoryItem
       */
      getFirstTagEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): zombie.inventory.InventoryItem
       */
      getFirstTagEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getFirstTagRecurse(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getFirstType(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): zombie.inventory.InventoryItem
       */
      getFirstTypeEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2): zombie.inventory.InventoryItem
       */
      getFirstTypeEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1): zombie.inventory.InventoryItem
       */
      getFirstTypeEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getFirstTypeRecurse(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (boolean arg0): zombie.inventory.InventoryItem
       *  - (boolean arg0, boolean arg1): zombie.inventory.InventoryItem
       */
      getFirstWaterFluidSources(arg0: boolean, arg1?: boolean): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getFreezerPosition(): string;
      /**
       * Method Parameters: 
       *  - (long arg0): zombie.inventory.InventoryItem
       */
      getItemById(arg0: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       *  - (String arg0, boolean arg1): number
       */
      getItemCount(arg0: string, arg1?: boolean): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getItemCountFromTypeRecurse(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getItemCountRecurse(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       *  - (String arg0, boolean arg1, boolean arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGameCharacter arg1, boolean arg2, boolean arg3, boolean arg4): zombie.inventory.InventoryItem
       */
      getItemFromType(arg0: string, arg1?: boolean | zombie.characters.IsoGameCharacter, arg2?: boolean, arg3?: boolean, arg4?: boolean): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.InventoryItem
       */
      getItemFromTypeRecurse(arg0: string): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      getItemWithID(arg0: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      getItemWithIDRecursiv(arg0: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getItems(): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): java.util.LinkedHashMap<string, zombie.inventory.InventoryItem>
       */
      getItems4Admin(): java.util.LinkedHashMap<string, zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getItemsFromCategory(arg0: string): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, boolean arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getItemsFromFullType(arg0: string, arg1?: boolean): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, boolean arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getItemsFromType(arg0: string, arg1?: boolean): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getMaxWeight(): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getNumItems(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       *  - (String arg0, boolean arg1): number
       *  - (String arg0, boolean arg1, boolean arg2): number
       *  - (String arg0, boolean arg1, ArrayList arg2): number
       */
      getNumberOfItem(arg0: string, arg1?: boolean, arg2?: boolean | java.util.ArrayList<zombie.inventory.ItemContainer>): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOnlyAcceptCategory(): string;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getOpenSound(): string;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemContainer
       */
      getOutermostContainer(): zombie.inventory.ItemContainer;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoObject
       */
      getParent(): zombie.iso.IsoObject;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getPutSound(): string;
      /**
       * Method Parameters: 
       *  - (Predicate arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSome(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>, arg1: number, arg2: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeCategory(arg0: string, arg1: number, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeCategoryRecurse(arg0: string, arg1: number, arg2: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (LuaClosure arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeEval(arg0: se.krka.kahlua.vm.LuaClosure, arg1: number, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1, int arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (LuaClosure arg0, Object arg1, int arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeEvalArg(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any, arg2: number, arg3?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, Object arg1, int arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (LuaClosure arg0, Object arg1, int arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeEvalArgRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1: any, arg2: number, arg3?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (LuaClosure arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (LuaClosure arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeEvalRecurse(arg0: se.krka.kahlua.vm.LuaClosure, arg1: number, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Predicate arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeRecurse(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>, arg1: number, arg2: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTag(arg0: string, arg1: number, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, int arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTagEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: number, arg3: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2, int arg3, ArrayList arg4): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTagEvalArg(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any, arg3: number, arg4: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2, int arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, Object arg2, int arg3, ArrayList arg4): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTagEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any, arg3: number, arg4?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, int arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, int arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTagEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: number, arg3?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTagRecurse(arg0: string, arg1: number, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeType(arg0: string, arg1: number, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, int arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, int arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTypeEval(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: number, arg3?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2, int arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, Object arg2, int arg3, ArrayList arg4): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTypeEvalArg(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any, arg3: number, arg4?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, Object arg2, int arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, Object arg2, int arg3, ArrayList arg4): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTypeEvalArgRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any, arg3: number, arg4?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, LuaClosure arg1, int arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, LuaClosure arg1, int arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTypeEvalRecurse(arg0: string, arg1: se.krka.kahlua.vm.LuaClosure, arg2: number, arg3?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (String arg0, int arg1, ArrayList arg2): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      getSomeTypeRecurse(arg0: string, arg1: number, arg2?: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getSourceGrid(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.iso.IsoGridSquare
       */
      getSquare(): zombie.iso.IsoGridSquare;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getTemprature(): number;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): number
       */
      getTotalFoodScore(arg0: zombie.characters.SurvivorDesc): number;
      /**
       * Method Parameters: 
       *  - (SurvivorDesc arg0): number
       */
      getTotalWeaponScore(arg0: zombie.characters.SurvivorDesc): number;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      getType(): string;
      /**
       * Method Parameters: 
       *  - (Predicate arg0): number
       */
      getUsesRecurse(arg0: java.util._function_.Predicate<zombie.inventory.InventoryItem>): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getUsesType(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (String arg0): number
       */
      getUsesTypeRecurse(arg0: string): number;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.vehicles.VehiclePart
       */
      getVehiclePart(): zombie.vehicles.VehiclePart;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWaterContainerCount(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeight(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getWeightReduction(): number;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, float arg1): boolean
       *  - (IsoGameCharacter arg0, InventoryItem arg1): boolean
       */
      hasRoomFor(arg0: zombie.characters.IsoGameCharacter, arg1: number | zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): zombie.inventory.InventoryItem
       */
      haveThisKeyId(arg0: number): zombie.inventory.InventoryItem;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isActive(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDirty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isDrawDirty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isEmpty(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isExistYet(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isExplored(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isHasBeenLooted(): boolean;
      /**
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): boolean
       */
      isInCharacterInventory(arg0: zombie.characters.IsoGameCharacter): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isInside(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isIsDevice(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isItemAllowed(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isMicrowave(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isPowered(): boolean;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): boolean
       */
      isRemoveItemAllowed(arg0: zombie.inventory.InventoryItem): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isStove(): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isTemperatureChanging(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeAllItems(): void;
      /**
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      removeItemOnServer(arg0: zombie.inventory.InventoryItem): void;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      removeItemWithID(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (int arg0): boolean
       */
      removeItemWithIDRecurse(arg0: number): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      removeItemsFromProcessItems(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      requestServerItemsForContainer(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      requestSync(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reset(): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): java.util.ArrayList<zombie.inventory.InventoryItem>
       *  - (ByteBuffer arg0, IsoGameCharacter arg1): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      save(arg0: java.nio.ByteBuffer, arg1?: zombie.characters.IsoGameCharacter): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setAcceptItemFunction(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setActive(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setAgeFactor(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setCapacity(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setCloseSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setContainerPosition(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCookingFactor(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setCustomTemperature(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDirty(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setDrawDirty(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setExplored(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setFreezerPosition(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setHasBeenLooted(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (boolean arg0): void
       */
      setIsDevice(arg0: boolean): void;
      /**
       * Method Parameters: 
       *  - (ArrayList arg0): void
       */
      setItems(arg0: java.util.ArrayList<zombie.inventory.InventoryItem>): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOnlyAcceptCategory(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setOpenSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      setParent(arg0: zombie.iso.IsoObject): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setPutSound(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      setSourceGrid(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setType(arg0: string): void;
      /**
       * Method Parameters: 
       *  - (int arg0): void
       */
      setWeightReduction(arg0: number): void;
      /**
       * Method Parameters: 
       *  - (Empty): string
       */
      toString(): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0): number
       */
      static floatingPointCorrection(arg0: number): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoObject arg0): boolean
       */
      static isObjectPowered(arg0: zombie.iso.IsoObject): boolean;
    }
    /**
     * @customConstructor ItemFilter.new
     * @
     * [CLASS] zombie.inventory.ItemFilter
     */
    export class ItemFilter {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (String arg0): boolean
       *  - (InventoryItem arg0): boolean
       *  - (Item arg0): boolean
       */
      allows(arg0: string | zombie.inventory.InventoryItem | zombie.scripting.objects.Item): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.scripting.objects.ItemFilterScript
       */
      getFilterScript(): zombie.scripting.objects.ItemFilterScript;
      /**
       * Method Parameters: 
       *  - (Empty): boolean
       */
      isActive(): boolean;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0, int arg1): void
       */
      load(arg0: java.nio.ByteBuffer, arg1: number): void;
      /**
       * Method Parameters: 
       *  - (ByteBuffer arg0): void
       */
      save(arg0: java.nio.ByteBuffer): void;
      /**
       * Method Parameters: 
       *  - (String arg0): void
       */
      setFilterScript(arg0: string): void;
    }
    /**
     * @customConstructor ItemPickInfo.new
     * @
     * [CLASS] zombie.inventory.ItemPickInfo
     */
    export class ItemPickInfo {

      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      getResultValue(): number;
      /**
       * Method Parameters: 
       *  - (SelectorBucket arg0): boolean
       */
      isMatch(arg0: zombie.scripting.itemConfig.SelectorBucket): boolean;
      /**
       * Method Parameters: 
       *  - (float arg0): void
       */
      setResultValue(arg0: number): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemContainer arg0, Caller arg1): zombie.inventory.ItemPickInfo
       */
      static GetPickInfo(arg0: zombie.inventory.ItemContainer, arg1: zombie.inventory.ItemPickInfo$Caller): zombie.inventory.ItemPickInfo;
    }
    /** [ENUM] zombie.inventory.ItemPickInfo$Caller */
    export class ItemPickInfo$Caller {
      protected constructor();
      static readonly DoRollItem: zombie.inventory.ItemPickInfo$Caller;
      static readonly FillContainer: zombie.inventory.ItemPickInfo$Caller;
      static readonly FillContainerType: zombie.inventory.ItemPickInfo$Caller;
      static readonly RollContainerItem: zombie.inventory.ItemPickInfo$Caller;
      static readonly RollItem: zombie.inventory.ItemPickInfo$Caller;
      static readonly RollProceduralItem: zombie.inventory.ItemPickInfo$Caller;
      static readonly Unknown: zombie.inventory.ItemPickInfo$Caller;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.inventory.ItemPickInfo$Caller>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.inventory.ItemPickInfo$Caller>;
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
       *  - (String arg0): zombie.inventory.ItemPickInfo$Caller
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.inventory.ItemPickInfo$Caller | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemPickInfo$Caller[]
       */
      static values(): zombie.inventory.ItemPickInfo$Caller[];
    }
    /**
     * @customConstructor ItemPickerJava.new
     * @
     * [CLASS] zombie.inventory.ItemPickerJava
     */
    export class ItemPickerJava {
      /** java.util.ArrayList<java.lang.String> */
      static readonly NoContainerFillRooms?: java.util.ArrayList<string>;
      /** gnu.trove.map.hash.THashMap<java.lang.String, zombie.inventory.ItemPickerJava$ItemPickerContainer> */
      static readonly ProceduralDistributions?: gnu.trove.map.hash.THashMap<string, zombie.inventory.ItemPickerJava$ItemPickerContainer>;
      /** gnu.trove.map.hash.THashMap<java.lang.String, zombie.inventory.ItemPickerJava$VehicleDistribution> */
      static readonly VehicleDistributions?: gnu.trove.map.hash.THashMap<string, zombie.inventory.ItemPickerJava$VehicleDistribution>;
      /** java.util.HashMap<java.lang.String, zombie.inventory.ItemPickerJava$ItemPickerUpgradeWeapons> */
      static readonly WeaponUpgradeMap?: java.util.HashMap<string, zombie.inventory.ItemPickerJava$ItemPickerUpgradeWeapons>;
      /** java.util.ArrayList<zombie.inventory.ItemPickerJava$ItemPickerUpgradeWeapons> */
      static readonly WeaponUpgrades?: java.util.ArrayList<zombie.inventory.ItemPickerJava$ItemPickerUpgradeWeapons>;
      /** gnu.trove.map.hash.THashMap<java.lang.String, zombie.inventory.ItemPickerJava$ItemPickerContainer> */
      static readonly containers?: gnu.trove.map.hash.THashMap<string, zombie.inventory.ItemPickerJava$ItemPickerContainer>;
      /** gnu.trove.map.hash.THashMap<java.lang.String, zombie.inventory.ItemPickerJava$ItemPickerRoom> */
      static readonly rooms?: gnu.trove.map.hash.THashMap<string, zombie.inventory.ItemPickerJava$ItemPickerRoom>;
      /** float */
      static zombieDensityCap: number;

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
      static InitSandboxLootSettings(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static Parse(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, ItemContainer arg1): boolean
       */
      static addVehicleKeyAsLoot(arg0: zombie.inventory.InventoryItem, arg1: zombie.inventory.ItemContainer): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemContainer arg0, String arg1): boolean
       */
      static containerHasZone(arg0: zombie.inventory.ItemContainer, arg1: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): void
       */
      static doOverlaySprite(arg0: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemPickerContainer arg0, ItemContainer arg1, float arg2, IsoGameCharacter arg3, boolean arg4, ItemPickerRoom arg5): void
       */
      static doRollItem(arg0: zombie.inventory.ItemPickerJava$ItemPickerContainer, arg1: zombie.inventory.ItemContainer, arg2: number, arg3: zombie.characters.IsoGameCharacter, arg4: boolean, arg5: zombie.inventory.ItemPickerJava$ItemPickerRoom): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemContainer arg0, IsoPlayer arg1): void
       */
      static fillContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.characters.IsoPlayer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemPickerRoom arg0, ItemContainer arg1, String arg2, IsoGameCharacter arg3): void
       */
      static fillContainerType(arg0: zombie.inventory.ItemPickerJava$ItemPickerRoom, arg1: zombie.inventory.ItemContainer, arg2: string, arg3: zombie.characters.IsoGameCharacter): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemPickerItem arg0, IsoGameCharacter arg1, ItemContainer arg2, float arg3, boolean arg4): number
       */
      static getActualSpawnChance(arg0: zombie.inventory.ItemPickerJava$ItemPickerItem, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.inventory.ItemContainer, arg3: number, arg4: boolean): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (float arg0, Item arg1, boolean arg2): number
       */
      static getAdjustedZombieDensity(arg0: number, arg1: zombie.scripting.objects.Item, arg2: boolean): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemPickerItem arg0, IsoGameCharacter arg1, boolean arg2): number
       */
      static getBaseChance(arg0: zombie.inventory.ItemPickerJava$ItemPickerItem, arg1: zombie.characters.IsoGameCharacter, arg2: boolean): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0, boolean arg1, Item arg2): number
       */
      static getBaseChanceMultiplier(arg0: zombie.characters.IsoGameCharacter, arg1: boolean, arg2: zombie.scripting.objects.Item): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemContainer arg0): string
       */
      static getContainerZombiesType(arg0: zombie.inventory.ItemContainer): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1, String arg2, boolean arg3): zombie.inventory.ItemPickerJava$ItemPickerContainer
       */
      static getItemContainer(arg0: string, arg1: string, arg2: string, arg3: boolean): zombie.inventory.ItemPickerJava$ItemPickerContainer;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): gnu.trove.map.hash.THashMap<string, zombie.inventory.ItemPickerJava$ItemPickerContainer>
       */
      static getItemPickerContainers(): gnu.trove.map.hash.THashMap<string, zombie.inventory.ItemPickerJava$ItemPickerContainer>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       *  - (String arg0, boolean arg1): number
       */
      static getLootModifier(arg0: string, arg1?: boolean): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): number
       */
      static getLootModifierFromType(arg0: string): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Item arg0): string
       */
      static getLootType(arg0: zombie.scripting.objects.Item): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): string
       */
      static getSquareBuildingName(arg0: zombie.iso.IsoGridSquare): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): string
       */
      static getSquareRegion(arg0: zombie.iso.IsoGridSquare): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): string
       */
      static getSquareZombiesType(arg0: zombie.iso.IsoGridSquare): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemPickerContainer arg0, ItemContainer arg1): number
       */
      static getZombieDensityFactor(arg0: zombie.inventory.ItemPickerJava$ItemPickerContainer, arg1: zombie.inventory.ItemContainer): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): boolean
       */
      static isGoodKey(arg0: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, IsoGridSquare arg1): void
       */
      static keyNamerBuilding(arg0: zombie.inventory.InventoryItem, arg1: zombie.iso.IsoGridSquare): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryContainer arg0, IsoGameCharacter arg1, ItemPickerContainer arg2): void
       */
      static rollContainerItem(arg0: zombie.inventory.types.InventoryContainer, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.inventory.ItemPickerJava$ItemPickerContainer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemPickerContainer arg0, ItemContainer arg1, boolean arg2, IsoGameCharacter arg3, ItemPickerRoom arg4): void
       */
      static rollItem(arg0: zombie.inventory.ItemPickerJava$ItemPickerContainer, arg1: zombie.inventory.ItemContainer, arg2: boolean, arg3: zombie.characters.IsoGameCharacter, arg4: zombie.inventory.ItemPickerJava$ItemPickerRoom): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      static rotItem(arg0: zombie.inventory.InventoryItem): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, ItemContainer arg1): void
       *  - (InventoryItem arg0, ItemContainer arg1, ItemContainer arg2): void
       */
      static spawnLootCarKey(arg0: zombie.inventory.InventoryItem, arg1: zombie.inventory.ItemContainer, arg2?: zombie.inventory.ItemContainer): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0, String arg1): boolean
       */
      static squareHasZone(arg0: zombie.iso.IsoGridSquare, arg1: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      static trashItem(arg0: zombie.inventory.InventoryItem): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      static trashItemLooted(arg0: zombie.inventory.InventoryItem): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      static trashItemRats(arg0: zombie.inventory.InventoryItem): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (ItemContainer arg0, String arg1, ItemPickerContainer arg2): zombie.inventory.InventoryItem
       */
      static tryAddItemToContainer(arg0: zombie.inventory.ItemContainer, arg1: string, arg2: zombie.inventory.ItemPickerJava$ItemPickerContainer): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoObject arg0): void
       */
      static updateOverlaySprite(arg0: zombie.iso.IsoObject): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0): void
       */
      static wearDownItem(arg0: zombie.inventory.InventoryItem): void;
    }
    /**
     * @customConstructor ItemPickerContainer.new
     * @
     * [CLASS] zombie.inventory.ItemPickerJava$ItemPickerContainer
     */
    export class ItemPickerJava$ItemPickerContainer {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ItemPickerItem.new
     * @
     * [CLASS] zombie.inventory.ItemPickerJava$ItemPickerItem
     */
    export class ItemPickerJava$ItemPickerItem {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ItemPickerRoom.new
     * @
     * [CLASS] zombie.inventory.ItemPickerJava$ItemPickerRoom
     */
    export class ItemPickerJava$ItemPickerRoom {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ItemPickerUpgradeWeapons.new
     * @
     * [CLASS] zombie.inventory.ItemPickerJava$ItemPickerUpgradeWeapons
     */
    export class ItemPickerJava$ItemPickerUpgradeWeapons {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor KeyNamer.new
     * @
     * [CLASS] zombie.inventory.ItemPickerJava$KeyNamer
     */
    export class ItemPickerJava$KeyNamer {
      /** java.util.ArrayList<java.lang.String> */
      static BigBuildingRooms?: java.util.ArrayList<string>;
      /** java.util.ArrayList<java.lang.String> */
      static RestaurantSubstrings?: java.util.ArrayList<string>;
      /** java.util.ArrayList<java.lang.String> */
      static Restaurants?: java.util.ArrayList<string>;
      /** java.util.ArrayList<java.lang.String> */
      static RoomSubstrings?: java.util.ArrayList<string>;
      /** java.util.ArrayList<java.lang.String> */
      static Rooms?: java.util.ArrayList<string>;
      /** java.util.ArrayList<java.lang.String> */
      static badZones?: java.util.ArrayList<string>;

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
      static clear(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGridSquare arg0): string
       */
      static getName(arg0: zombie.iso.IsoGridSquare): string;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, IsoGridSquare arg1): void
       */
      static nameKey(arg0: zombie.inventory.InventoryItem, arg1: zombie.iso.IsoGridSquare): void;
    }
    /**
     * @customConstructor ProceduralItem.new
     * @
     * [CLASS] zombie.inventory.ItemPickerJava$ProceduralItem
     */
    export class ItemPickerJava$ProceduralItem {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor VehicleDistribution.new
     * @
     * [CLASS] zombie.inventory.ItemPickerJava$VehicleDistribution
     */
    export class ItemPickerJava$VehicleDistribution {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
    }
    /**
     * @customConstructor ItemSpawner.new
     * @
     * [ABSTRACT CLASS] zombie.inventory.ItemSpawner
     */
    export class ItemSpawner {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      protected constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, ItemContainer arg1): zombie.inventory.InventoryItem
       *  - (InventoryItem arg0, ItemContainer arg1): zombie.inventory.InventoryItem
       *  - (InventoryItem arg0, IsoGridSquare arg1): zombie.inventory.InventoryItem
       *  - (String arg0, ItemContainer arg1, boolean arg2): zombie.inventory.InventoryItem
       *  - (InventoryItem arg0, ItemContainer arg1, boolean arg2): zombie.inventory.InventoryItem
       *  - (InventoryItem arg0, IsoGridSquare arg1, boolean arg2): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (InventoryItem arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4): zombie.inventory.InventoryItem
       *  - (String arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, boolean arg5): zombie.inventory.InventoryItem
       *  - (InventoryItem arg0, IsoGridSquare arg1, float arg2, float arg3, float arg4, boolean arg5): zombie.inventory.InventoryItem
       */
      static spawnItem(arg0: string | zombie.inventory.InventoryItem, arg1: zombie.inventory.ItemContainer | zombie.iso.IsoGridSquare, arg2?: boolean | number, arg3?: number, arg4?: number, arg5?: boolean): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, int arg1, ItemContainer arg2): java.util.List<zombie.inventory.InventoryItem>
       *  - (InventoryItem arg0, int arg1, ItemContainer arg2): java.util.List<zombie.inventory.InventoryItem>
       */
      static spawnItems(arg0: string | zombie.inventory.InventoryItem, arg1: number, arg2: zombie.inventory.ItemContainer): java.util.List<zombie.inventory.InventoryItem>;
    }
    /** [ENUM] zombie.inventory.ItemType */
    export class ItemType {
      protected constructor();
      static readonly AlarmClock: zombie.inventory.ItemType;
      static readonly AlarmClockClothing: zombie.inventory.ItemType;
      static readonly Animal: zombie.inventory.ItemType;
      static readonly Clothing: zombie.inventory.ItemType;
      static readonly Drainable: zombie.inventory.ItemType;
      static readonly Food: zombie.inventory.ItemType;
      static readonly Key: zombie.inventory.ItemType;
      static readonly KeyRing: zombie.inventory.ItemType;
      static readonly Literature: zombie.inventory.ItemType;
      static readonly Moveable: zombie.inventory.ItemType;
      static readonly None: zombie.inventory.ItemType;
      static readonly Weapon: zombie.inventory.ItemType;
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
      describeConstable(): java.util.Optional<java.lang.Enum$EnumDesc<zombie.inventory.ItemType>>;
      /**
       * Method Parameters: 
       *  - (Object arg0): boolean
       */
      equals(arg0: any): boolean;
      /**
       * Method Parameters: 
       *  - (Empty): java.lang.Class<E>
       */
      getDeclaringClass(): java.lang.Class<zombie.inventory.ItemType>;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      hashCode(): number;
      /**
       * Method Parameters: 
       *  - (Empty): number
       */
      index(): number;
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
       *  - (int arg0): zombie.inventory.ItemType
       */
      static fromIndex(arg0: number): zombie.inventory.ItemType;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.inventory.ItemType
       *  - (Class arg0, String arg1): T
       */
      static valueOf<T>(arg0: string | java.lang.Class<T>, arg1?: string): zombie.inventory.ItemType | T;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.inventory.ItemType[]
       */
      static values(): zombie.inventory.ItemType[];
    }
    /**
     * @customConstructor RecipeManager.new
     * @
     * [CLASS] zombie.inventory.RecipeManager
     */
    export class RecipeManager {
      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, Recipe arg1): boolean
       */
      static DoesUseItemUp(arg0: string, arg1: zombie.scripting.objects.Recipe): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, String arg1): boolean
       */
      static DoesWipeUseDelta(arg0: string, arg1: string): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (boolean arg0, Recipe arg1, InventoryItem arg2, IsoGameCharacter arg3, ArrayList arg4): zombie.inventory.InventoryItem
       */
      static GetMovableRecipeTool(arg0: boolean, arg1: zombie.scripting.objects.Recipe, arg2: zombie.inventory.InventoryItem, arg3: zombie.characters.IsoGameCharacter, arg4: java.util.ArrayList<zombie.inventory.ItemContainer>): zombie.inventory.InventoryItem;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, IsoGameCharacter arg1, InventoryItem arg2, ArrayList arg3): boolean
       */
      static HasAllRequiredItems(arg0: zombie.scripting.objects.Recipe, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.inventory.InventoryItem, arg3: java.util.ArrayList<zombie.inventory.ItemContainer>): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, Recipe arg1): boolean
       */
      static IsItemDestroyed(arg0: string, arg1: zombie.scripting.objects.Recipe): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, IsoGameCharacter arg1, InventoryItem arg2, ArrayList arg3): boolean
       */
      static IsRecipeValid(arg0: zombie.scripting.objects.Recipe, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.inventory.InventoryItem, arg3: java.util.ArrayList<zombie.inventory.ItemContainer>): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static LoadedAfterLua(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, InventoryItem arg1, IsoGameCharacter arg2, ArrayList arg3): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      static PerformMakeItem(arg0: zombie.scripting.objects.Recipe, arg1: zombie.inventory.InventoryItem, arg2: zombie.characters.IsoGameCharacter, arg3: java.util.ArrayList<zombie.inventory.ItemContainer>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): void
       */
      static ScriptsLoaded(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0, Recipe arg1, IsoGameCharacter arg2): number
       */
      static UseAmount(arg0: string, arg1: zombie.scripting.objects.Recipe, arg2: zombie.characters.IsoGameCharacter): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): java.util.ArrayList<zombie.scripting.objects.EvolvedRecipe>
       */
      static getAllEvolvedRecipes(): java.util.ArrayList<zombie.scripting.objects.EvolvedRecipe>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, IsoGameCharacter arg1, ArrayList arg2, InventoryItem arg3, ArrayList arg4): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      static getAvailableItemsAll(arg0: zombie.scripting.objects.Recipe, arg1: zombie.characters.IsoGameCharacter, arg2: java.util.ArrayList<zombie.inventory.ItemContainer>, arg3: zombie.inventory.InventoryItem, arg4: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, IsoGameCharacter arg1, ArrayList arg2, InventoryItem arg3, ArrayList arg4): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      static getAvailableItemsNeeded(arg0: zombie.scripting.objects.Recipe, arg1: zombie.characters.IsoGameCharacter, arg2: java.util.ArrayList<zombie.inventory.ItemContainer>, arg3: zombie.inventory.InventoryItem, arg4: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (String arg0): zombie.scripting.objects.Recipe
       */
      static getDismantleRecipeFor(arg0: string): zombie.scripting.objects.Recipe;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, IsoGameCharacter arg1, ArrayList arg2, boolean arg3): java.util.ArrayList<zombie.scripting.objects.EvolvedRecipe>
       */
      static getEvolvedRecipe(arg0: zombie.inventory.InventoryItem, arg1: zombie.characters.IsoGameCharacter, arg2: java.util.ArrayList<zombie.inventory.ItemContainer>, arg3: boolean): java.util.ArrayList<zombie.scripting.objects.EvolvedRecipe>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (IsoGameCharacter arg0): number
       */
      static getKnownRecipesNumber(arg0: zombie.characters.IsoGameCharacter): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, IsoGameCharacter arg1, ArrayList arg2, InventoryItem arg3): number
       */
      static getNumberOfTimesRecipeCanBeDone(arg0: zombie.scripting.objects.Recipe, arg1: zombie.characters.IsoGameCharacter, arg2: java.util.ArrayList<zombie.inventory.ItemContainer>, arg3: zombie.inventory.InventoryItem): number;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, int arg1, IsoGameCharacter arg2, ArrayList arg3, InventoryItem arg4, ArrayList arg5): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      static getSourceItemsAll(arg0: zombie.scripting.objects.Recipe, arg1: number, arg2: zombie.characters.IsoGameCharacter, arg3: java.util.ArrayList<zombie.inventory.ItemContainer>, arg4: zombie.inventory.InventoryItem, arg5: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, int arg1, IsoGameCharacter arg2, ArrayList arg3, InventoryItem arg4, ArrayList arg5): java.util.ArrayList<zombie.inventory.InventoryItem>
       */
      static getSourceItemsNeeded(arg0: zombie.scripting.objects.Recipe, arg1: number, arg2: zombie.characters.IsoGameCharacter, arg3: java.util.ArrayList<zombie.inventory.ItemContainer>, arg4: zombie.inventory.InventoryItem, arg5: java.util.ArrayList<zombie.inventory.InventoryItem>): java.util.ArrayList<zombie.inventory.InventoryItem>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (InventoryItem arg0, IsoGameCharacter arg1, ArrayList arg2): java.util.ArrayList<zombie.scripting.objects.Recipe>
       */
      static getUniqueRecipeItems(arg0: zombie.inventory.InventoryItem, arg1: zombie.characters.IsoGameCharacter, arg2: java.util.ArrayList<zombie.inventory.ItemContainer>): java.util.ArrayList<zombie.scripting.objects.Recipe>;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, InventoryItem arg1, ArrayList arg2, IsoGameCharacter arg3): boolean
       */
      static hasHeat(arg0: zombie.scripting.objects.Recipe, arg1: zombie.inventory.InventoryItem, arg2: java.util.ArrayList<zombie.inventory.ItemContainer>, arg3: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, IsoGameCharacter arg1, InventoryItem arg2, ArrayList arg3): boolean
       */
      static isAllItemsUsableRotten(arg0: zombie.scripting.objects.Recipe, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.inventory.InventoryItem, arg3: java.util.ArrayList<zombie.inventory.ItemContainer>): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, IsoGameCharacter arg1, InventoryItem arg2, ArrayList arg3): void
       */
      static printDebugRecipeValid(arg0: zombie.scripting.objects.Recipe, arg1: zombie.characters.IsoGameCharacter, arg2: zombie.inventory.InventoryItem, arg3: java.util.ArrayList<zombie.inventory.ItemContainer>): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, InventoryItem arg1, ArrayList arg2, IsoGameCharacter arg3): boolean
       */
      static validateHasHeat(arg0: zombie.scripting.objects.Recipe, arg1: zombie.inventory.InventoryItem, arg2: java.util.ArrayList<zombie.inventory.ItemContainer>, arg3: zombie.characters.IsoGameCharacter): boolean;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Recipe arg0, InventoryItem arg1): boolean
       */
      static validateRecipeContainsSourceItem(arg0: zombie.scripting.objects.Recipe, arg1: zombie.inventory.InventoryItem): boolean;
    }
  }
}
