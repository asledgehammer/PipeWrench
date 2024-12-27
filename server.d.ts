/**  @noSelfInFile */
/// <reference path="reference.d.ts" />
declare module '@asledgehammer/pipewrench/server' {
  // [LUA-PARTIAL:START]

  // [lua/server/Animal/ISPickDungCursor.d.ts]
  /** @customConstructor ISPickDungCursor:new */
  export class ISPickDungCursor extends lua.server.Animal.ISPickDungCursor {}

  // [lua/server/Animal/ISScytheGrassCursor.d.ts]
  /** @customConstructor ISScytheGrassCursor:new */
  export class ISScytheGrassCursor extends lua.server.Animal.ISScytheGrassCursor {}

  // [lua/server/BuildingObjects/ISAnimalPickMateCursor.d.ts]
  /** @customConstructor ISAnimalPickMateCursor:new */
  export class ISAnimalPickMateCursor extends lua.server.BuildingObjects.ISAnimalPickMateCursor {}

  // [lua/server/BuildingObjects/ISBarbedWire.d.ts]
  /** @customConstructor ISBarbedWire:new */
  export class ISBarbedWire extends lua.server.BuildingObjects.ISBarbedWire {}

  // [lua/server/BuildingObjects/ISBrushToolTileCursor.d.ts]
  /** @customConstructor ISBrushToolTileCursor:new */
  export class ISBrushToolTileCursor extends lua.server.BuildingObjects.ISBrushToolTileCursor {}

  // [lua/server/BuildingObjects/ISBuildCursorMouse.d.ts]
  /** @customConstructor ISBuildCursorMouse:new */
  export class ISBuildCursorMouse extends lua.server.BuildingObjects.ISBuildCursorMouse {}

  // [lua/server/BuildingObjects/ISBuildingObject.d.ts]
  /** @customConstructor ISBuildingObject:new */
  export class ISBuildingObject extends lua.server.BuildingObjects.ISBuildingObject {}

  // [lua/server/BuildingObjects/ISBuildIsoEntity.d.ts]
  /** @customConstructor ISBuildIsoEntity:new */
  export class ISBuildIsoEntity extends lua.server.BuildingObjects.ISBuildIsoEntity {}

  // [lua/server/BuildingObjects/ISBuildRampCursor.d.ts]
  /** @customConstructor ISBuildRampCursor:new */
  export class ISBuildRampCursor extends lua.server.BuildingObjects.ISBuildRampCursor {}

  // [lua/server/BuildingObjects/ISBuildUtil.d.ts]
  export abstract class buildUtil extends lua.server.BuildingObjects.buildUtil {}

  // [lua/server/BuildingObjects/ISButcheringHook.d.ts]
  /** @customConstructor ISButcheringHook:new */
  export class ISButcheringHook extends lua.server.BuildingObjects.ISButcheringHook {}

  // [lua/server/BuildingObjects/ISChopTreeCursor.d.ts]
  /** @customConstructor ISChopTreeCursor:new */
  export class ISChopTreeCursor extends lua.server.BuildingObjects.ISChopTreeCursor {}

  // [lua/server/BuildingObjects/ISCleanBloodCursor.d.ts]
  /** @customConstructor ISCleanBloodCursor:new */
  export class ISCleanBloodCursor extends lua.server.BuildingObjects.ISCleanBloodCursor {}

  // [lua/server/BuildingObjects/ISCleanGraffitiCursor.d.ts]
  /** @customConstructor ISCleanGraffitiCursor:new */
  export class ISCleanGraffitiCursor extends lua.server.BuildingObjects.ISCleanGraffitiCursor {}

  // [lua/server/BuildingObjects/ISCompost.d.ts]
  /** @customConstructor ISCompost:new */
  export class ISCompost extends lua.server.BuildingObjects.ISCompost {}

  // [lua/server/BuildingObjects/ISDestroyCursor.d.ts]
  /** @customConstructor ISDestroyCursor:new */
  export class ISDestroyCursor extends lua.server.BuildingObjects.ISDestroyCursor {}

  // [lua/server/BuildingObjects/ISDoubleDoor.d.ts]
  /** @customConstructor ISDoubleDoor:new */
  export class ISDoubleDoor extends lua.server.BuildingObjects.ISDoubleDoor {}

  // [lua/server/BuildingObjects/ISDoubleTileFurniture.d.ts]
  /** @customConstructor ISDoubleTileFurniture:new */
  export class ISDoubleTileFurniture extends lua.server.BuildingObjects.ISDoubleTileFurniture {}

  // [lua/server/BuildingObjects/ISEmptyGraves.d.ts]
  /** @customConstructor ISEmptyGraves:new */
  export class ISEmptyGraves extends lua.server.BuildingObjects.ISEmptyGraves {}

  // [lua/server/BuildingObjects/ISHutch.d.ts]
  /** @customConstructor ISHutch:new */
  export class ISHutch extends lua.server.BuildingObjects.ISHutch {}

  // [lua/server/BuildingObjects/ISLightSource.d.ts]
  /** @customConstructor ISLightSource:new */
  export class ISLightSource extends lua.server.BuildingObjects.ISLightSource {}

  // [lua/server/BuildingObjects/ISMoveableCursor.d.ts]
  /** @customConstructor ISMoveableCursor:new */
  export class ISMoveableCursor extends lua.server.BuildingObjects.ISMoveableCursor {}

  // [lua/server/BuildingObjects/ISNaturalFloor.d.ts]
  /** @customConstructor ISNaturalFloor:new */
  export class ISNaturalFloor extends lua.server.BuildingObjects.ISNaturalFloor {}

  // [lua/server/BuildingObjects/ISPaintCursor.d.ts]
  /** @customConstructor ISPaintCursor:new */
  export class ISPaintCursor extends lua.server.BuildingObjects.ISPaintCursor {}

  // [lua/server/BuildingObjects/ISPaperCursor.d.ts]
  /** @customConstructor ISPaperCursor:new */
  export class ISPaperCursor extends lua.server.BuildingObjects.ISPaperCursor {}

  // [lua/server/BuildingObjects/ISPickCharacterCursor.d.ts]
  /** @customConstructor ISPickCharacterCursor:new */
  export class ISPickCharacterCursor extends lua.server.BuildingObjects.ISPickCharacterCursor {}

  // [lua/server/BuildingObjects/ISPlace3DItemCursor.d.ts]
  /** @customConstructor ISPlace3DItemCursor:new */
  export class ISPlace3DItemCursor extends lua.server.BuildingObjects.ISPlace3DItemCursor {}

  // [lua/server/BuildingObjects/ISRemovePlantCursor.d.ts]
  /** @customConstructor ISRemovePlantCursor:new */
  export class ISRemovePlantCursor extends lua.server.BuildingObjects.ISRemovePlantCursor {}

  // [lua/server/BuildingObjects/ISSelectCursor.d.ts]
  /** @customConstructor ISSelectCursor:new */
  export class ISSelectCursor extends lua.server.BuildingObjects.ISSelectCursor {}

  // [lua/server/BuildingObjects/ISShovelGroundCursor.d.ts]
  /** @customConstructor ISShovelGroundCursor:new */
  export class ISShovelGroundCursor extends lua.server.BuildingObjects.ISShovelGroundCursor {}

  // [lua/server/BuildingObjects/ISSimpleFurniture.d.ts]
  /** @customConstructor ISSimpleFurniture:new */
  export class ISSimpleFurniture extends lua.server.BuildingObjects.ISSimpleFurniture {}

  // [lua/server/BuildingObjects/ISWalkToCursor.d.ts]
  /** @customConstructor ISWalkToCursor:new */
  export class ISWalkToCursor extends lua.server.BuildingObjects.ISWalkToCursor {}

  // [lua/server/BuildingObjects/ISWoodenContainer.d.ts]
  /** @customConstructor ISWoodenContainer:new */
  export class ISWoodenContainer extends lua.server.BuildingObjects.ISWoodenContainer {}

  // [lua/server/BuildingObjects/ISWoodenDoor.d.ts]
  /** @customConstructor ISWoodenDoor:new */
  export class ISWoodenDoor extends lua.server.BuildingObjects.ISWoodenDoor {}

  // [lua/server/BuildingObjects/ISWoodenDoorFrame.d.ts]
  /** @customConstructor ISWoodenDoorFrame:new */
  export class ISWoodenDoorFrame extends lua.server.BuildingObjects.ISWoodenDoorFrame {}

  // [lua/server/BuildingObjects/ISWoodenFloor.d.ts]
  /** @customConstructor ISWoodenFloor:new */
  export class ISWoodenFloor extends lua.server.BuildingObjects.ISWoodenFloor {}

  // [lua/server/BuildingObjects/ISWoodenStairs.d.ts]
  /** @customConstructor ISWoodenStairs:new */
  export class ISWoodenStairs extends lua.server.BuildingObjects.ISWoodenStairs {}

  // [lua/server/BuildingObjects/ISWoodenWall.d.ts]
  /** @customConstructor ISWoodenWall:new */
  export class ISWoodenWall extends lua.server.BuildingObjects.ISWoodenWall {}

  // [lua/server/BuildingObjects/PaintingReference.d.ts]
  export abstract class OtherPainting extends lua.server.BuildingObjects.OtherPainting {}
  export abstract class Painting extends lua.server.BuildingObjects.Painting {}
  export abstract class WallPaper extends lua.server.BuildingObjects.WallPaper {}

  // [lua/server/Camping/BuildingObjects/campingCampfire.d.ts]
  /** @customConstructor campingCampfire:new */
  export class campingCampfire extends lua.server.Camping.BuildingObjects.campingCampfire {}

  // [lua/server/Camping/camping_fuel.d.ts]
  export abstract class campingFuelCategory extends lua.server.Camping.campingFuelCategory {}
  export abstract class campingFuelType extends lua.server.Camping.campingFuelType {}
  export abstract class campingLightFireCategory extends lua.server.Camping.campingLightFireCategory {}
  export abstract class campingLightFireType extends lua.server.Camping.campingLightFireType {}

  // [lua/server/Camping/camping_tent.d.ts]
  export abstract class camping extends lua.server.Camping.camping {}

  // [lua/server/Camping/camping_text.d.ts]
  export abstract class campingText extends lua.server.Camping.campingText {}

  // [lua/server/Camping/SCampfireGlobalObject.d.ts]
  /** @customConstructor SCampfireGlobalObject:new */
  export class SCampfireGlobalObject extends lua.server.Camping.SCampfireGlobalObject {}

  // [lua/server/Camping/SCampfireSystem.d.ts]
  /** @customConstructor SCampfireSystem:new */
  export class SCampfireSystem extends lua.server.Camping.SCampfireSystem {}

  // [lua/server/Climate/ClimateMain.d.ts]
  export abstract class ClimateMain extends lua.server.Climate.ClimateMain {}

  // [lua/server/Farming/BuildingObjects/farmingPlot.d.ts]
  /** @customConstructor farmingPlot:new */
  export class farmingPlot extends lua.server.Farming.BuildingObjects.farmingPlot {}

  // [lua/server/Farming/BuildingObjects/ISFarmingCursor.d.ts]
  /** @customConstructor ISFarmingCursor:new */
  export class ISFarmingCursor extends lua.server.Farming.BuildingObjects.ISFarmingCursor {}

  // [lua/server/Farming/BuildingObjects/ISFarmingCursorMouse.d.ts]
  /** @customConstructor ISFarmingCursorMouse:new */
  export class ISFarmingCursorMouse extends lua.server.Farming.BuildingObjects.ISFarmingCursorMouse {}

  // [lua/server/Farming/farming_vegetableconf.d.ts]
  export abstract class farming_vegetableconf extends lua.server.Farming.farming_vegetableconf {}
  /** @noSelf */
  export const calcNextTimeFactor: () => any;
  /** @noSelf */
  export const randomGrowthOffset: () => any;

  // [lua/server/Farming/ScavengeDefinition.d.ts]
  export abstract class scavenges extends lua.server.Farming.scavenges {}

  // [lua/server/Farming/SFarmingSystem.d.ts]
  /** @customConstructor SFarmingSystem:new */
  export class SFarmingSystem extends lua.server.Farming.SFarmingSystem {}

  // [lua/server/Farming/SPlantGlobalObject.d.ts]
  /** @customConstructor SPlantGlobalObject:new */
  export class SPlantGlobalObject extends lua.server.Farming.SPlantGlobalObject {}

  // [lua/server/FeedingTrough/BuildingObjects/ISFeedingTrough.d.ts]
  /** @customConstructor ISFeedingTrough:new */
  export class ISFeedingTrough extends lua.server.FeedingTrough.BuildingObjects.ISFeedingTrough {}

  // [lua/server/FeedingTrough/SFeedingTroughGlobalObject.d.ts]
  /** @customConstructor SFeedingTroughGlobalObject:new */
  export class SFeedingTroughGlobalObject extends lua.server.FeedingTrough.SFeedingTroughGlobalObject {}

  // [lua/server/FeedingTrough/SFeedingTroughSystem.d.ts]
  /** @customConstructor SFeedingTroughSystem:new */
  export class SFeedingTroughSystem extends lua.server.FeedingTrough.SFeedingTroughSystem {}

  // [lua/server/FireFighting/FireFighting.d.ts]
  export abstract class FireFighting extends lua.server.FireFighting.FireFighting {}

  // [lua/server/FireFighting/ISExtinguishCursor.d.ts]
  /** @customConstructor ISExtinguishCursor:new */
  export class ISExtinguishCursor extends lua.server.FireFighting.ISExtinguishCursor {}

  // [lua/server/Fishing/BuildingObjects/FishingNet.d.ts]
  /** @customConstructor fishingNet:new */
  export class fishingNet extends lua.server.Fishing.BuildingObjects.fishingNet {}

  // [lua/server/Foraging/forageServer.d.ts]
  export abstract class forageServer extends lua.server.Foraging.forageServer {}

  // [lua/server/HealthSystem/HealthUpdate.d.ts]
  export abstract class healthUpdate extends lua.server.HealthSystem.healthUpdate {}

  // [lua/server/ISBuildingBlueprintManager.d.ts]
  export abstract class ISBuildingBlueprintManager extends lua.server.ISBuildingBlueprintManager {}

  // [lua/server/ISCoordConversion.d.ts]
  export abstract class ISCoordConversion extends lua.server.ISCoordConversion {}

  // [lua/server/ISObjectClickHandler.d.ts]
  export abstract class ISObjectClickHandler extends lua.server.ISObjectClickHandler {}

  // [lua/server/Items/AcceptItemFunction.d.ts]
  export abstract class AcceptItemFunction extends lua.server.Items.AcceptItemFunction {}

  // [lua/server/Items/BrokenFences.d.ts]
  export abstract class debris extends lua.server.Items.debris {}

  // [lua/server/Items/ItemBindingHandler.d.ts]
  export abstract class ItemBindingHandler extends lua.server.Items.ItemBindingHandler {}

  // [lua/server/Items/ProceduralDistributions.d.ts]
  export abstract class ProceduralDistributions extends lua.server.Items.ProceduralDistributions {}

  // [lua/server/Items/ScriptItemInterface.d.ts]
  export abstract class ScriptItemInterface extends lua.server.Items.ScriptItemInterface {}

  // [lua/server/Items/SuburbsDistributions.d.ts]
  export abstract class NoContainerFillRooms extends lua.server.Items.NoContainerFillRooms {}
  export abstract class WeaponUpgrades extends lua.server.Items.WeaponUpgrades {}

  // [lua/server/Map/MapObjects/MOFarming.d.ts]

  // [lua/server/Map/MapObjects/MOFeedingTrough.d.ts]
  export abstract class MOFeedingTrough extends lua.server.Map.MapObjects.MOFeedingTrough {}

  // [lua/server/Map/MapObjects/MOHutch.d.ts]
  export abstract class MOHutch extends lua.server.Map.MapObjects.MOHutch {}

  // [lua/server/Map/MetaEnum.d.ts]
  export abstract class MetaObjectEnum extends lua.server.Map.MetaObjectEnum {}

  // [lua/server/Map/SGlobalObject.d.ts]
  /** @customConstructor SGlobalObject:new */
  export class SGlobalObject extends lua.server.Map.SGlobalObject {}

  // [lua/server/Map/SGlobalObjectSystem.d.ts]
  /** @customConstructor SGlobalObjectSystem:new */
  export class SGlobalObjectSystem extends lua.server.Map.SGlobalObjectSystem {}

  // [lua/server/metazones/AnimalsPathConfig.d.ts]
  export abstract class animals_path_config extends lua.server.metazones.animals_path_config {}

  // [lua/server/metazones/BiomeMapConfig.d.ts]
  export abstract class biome_map_config extends lua.server.metazones.biome_map_config {}

  // [lua/server/metazones/metazoneHandler.d.ts]
  /** @noSelf */
  export const doMapZones: () => any;
  /** @noSelf */
  export const doSpawnOrigins: () => any;

  // [lua/server/Movers/ISBaseMover.d.ts]
  /** @customConstructor ISBaseMover:new */
  export class ISBaseMover extends lua.server.Movers.ISBaseMover {}

  // [lua/server/Movers/MoverStateMachine.d.ts]
  /** @customConstructor ISMoverStateMachine:new */
  export class ISMoverStateMachine extends lua.server.Movers.ISMoverStateMachine {}

  // [lua/server/Movers/MoverStates/ISBaseState.d.ts]
  /** @customConstructor ISBaseState:new */
  export class ISBaseState extends lua.server.Movers.MoverStates.ISBaseState {}

  // [lua/server/Movers/MoverStates/MoveToState.d.ts]
  /** @customConstructor MoveToState:new */
  export class MoveToState extends lua.server.Movers.MoverStates.MoveToState {}

  // [lua/server/Movers/Rabbit.d.ts]
  /** @customConstructor Rabbit:new */
  export class Rabbit extends lua.server.Movers.Rabbit {}
  /** @noSelf */
  export const testCreateRabbit: () => any;

  // [lua/server/NewSelectionSystem/GridSquareSelector.d.ts]
  export abstract class GridSquareSelector extends lua.server.NewSelectionSystem.GridSquareSelector {}

  // [lua/server/NPCs/SadisticAIDirector/SadisticMusicDirector.d.ts]
  /** @customConstructor SadisticMusicDirector:new */
  export class SadisticMusicDirector extends lua.server.NPCs.SadisticAIDirector.SadisticMusicDirector {}
  /** @noSelf */
  export const SadisticMusicDirectorTick: () => any;

  // [lua/server/Professions/Professions.d.ts]
  export abstract class Professions extends lua.server.Professions.Professions {}

  // [lua/server/radio/ISDynamicRadio.d.ts]
  export abstract class DynamicRadio extends lua.server.radio.DynamicRadio {}

  // [lua/server/radio/ISWeatherChannel.d.ts]
  export abstract class WeatherChannel extends lua.server.radio.WeatherChannel {}

  // [lua/server/RainBarrel/BuildingObjects/RainCollectorBarrel.d.ts]
  /** @customConstructor RainCollectorBarrel:new */
  export class RainCollectorBarrel extends lua.server.RainBarrel.BuildingObjects.RainCollectorBarrel {}

  // [lua/server/RainBarrel/SRainBarrelGlobalObject.d.ts]
  /** @customConstructor SRainBarrelGlobalObject:new */
  export class SRainBarrelGlobalObject extends lua.server.RainBarrel.SRainBarrelGlobalObject {}

  // [lua/server/RainBarrel/SRainBarrelSystem.d.ts]
  /** @customConstructor SRainBarrelSystem:new */
  export class SRainBarrelSystem extends lua.server.RainBarrel.SRainBarrelSystem {}

  // [lua/server/RandomizedWorldContent/StoryClutter/StoryClutter_Definitions.d.ts]
  export abstract class StoryClutter extends lua.server.RandomizedWorldContent.StoryClutter.StoryClutter {}

  // [lua/server/recipecode.d.ts]

  // [lua/server/Seasons/season.d.ts]
  export abstract class season extends lua.server.Seasons.season {}

  // [lua/server/Seasons/seasonProps.d.ts]
  export abstract class seasonProps extends lua.server.Seasons.seasonProps {}

  // [lua/server/TemplateReplacers.d.ts]
  export abstract class TemplateReplacers extends lua.server.TemplateReplacers {}

  // [lua/server/Traps/BuildingObjects/TrapBO.d.ts]
  /** @customConstructor TrapBO:new */
  export class TrapBO extends lua.server.Traps.BuildingObjects.TrapBO {}

  // [lua/server/Traps/ISUI/ISTrapMenu.d.ts]
  export abstract class ISTrapMenu extends lua.server.Traps.ISUI.ISTrapMenu {}

  // [lua/server/Traps/STrapGlobalObject.d.ts]
  /** @customConstructor STrapGlobalObject:new */
  export class STrapGlobalObject extends lua.server.Traps.STrapGlobalObject {}

  // [lua/server/Traps/STrapSystem.d.ts]
  /** @customConstructor STrapSystem:new */
  export class STrapSystem extends lua.server.Traps.STrapSystem {}

  // [lua/server/Traps/TrapDefinition.d.ts]
  export abstract class Traps extends lua.server.Traps.Traps {}

  // [lua/server/TurnBased/TurnBasedMain.d.ts]
  export abstract class TurnbasedDummyChr extends lua.server.TurnBased.TurnbasedDummyChr {}
  /** @noSelf */
  export const InitTurnbasedEngine: () => any;
  /** @noSelf */
  export const PrepareTurnbasedEngine: () => any;

  // [lua/server/TutorialHelperFunctions.d.ts]
  export abstract class TutorialHelperFunctions extends lua.server.TutorialHelperFunctions {}

  // [lua/server/Vehicles/ProfessionVehicles.d.ts]
  export abstract class ProfessionVehicles extends lua.server.Vehicles.ProfessionVehicles {}

  // [lua/server/Vehicles/Vehicles.d.ts]
  export abstract class Vehicles extends lua.server.Vehicles.Vehicles {}
  export abstract class VehicleUtils extends lua.server.Vehicles.VehicleUtils {}

  // [lua/server/WorldGen/WorldGen.d.ts]
  export abstract class worldgen extends lua.server.WorldGen.worldgen {}

  // [lua/server/XpSystem/XPSystem_SkillBook.d.ts]
  export abstract class SkillBook extends lua.server.XpSystem.SkillBook {}

  // [lua/server/XpSystem/XpSystem_text.d.ts]
  export abstract class xpSystemText extends lua.server.XpSystem.xpSystemText {}

  // [lua/server/XpSystem/XpUpdate.d.ts]
  export abstract class xpUpdate extends lua.server.XpSystem.xpUpdate {}

  // [LUA-PARTIAL:END]
}
