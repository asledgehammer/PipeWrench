/** @noResolution @noSelfInFile */
/// <reference path="reference.d.ts" />

declare module 'PipeWrench' {

///////////////////////////////////////
// [PARTIAL] : java.api.partial.d.ts //
///////////////////////////////////////

  /** @customConstructor APNGFrame.new */
  export class APNGFrame extends zombie.core.textures.APNGFrame {}
  /** @customConstructor AStarPathFinderResult.new */
  export class AStarPathFinderResult extends zombie.ai.astar.AStarPathFinderResult {}
  /** @customConstructor AbstractAntiCheat.new */
  export class AbstractAntiCheat extends zombie.network.anticheats.AbstractAntiCheat {}
  /** @customConstructor AbstractStyle.new */
  export class AbstractStyle extends zombie.core.Styles.AbstractStyle {}
  /** @customConstructor ActionContext.new */
  export class ActionContext extends zombie.characters.action.ActionContext {}
  /** @customConstructor ActionGroup.new */
  export class ActionGroup extends zombie.characters.action.ActionGroup {}
  /** @customConstructor ActionProgressBar.new */
  export class ActionProgressBar extends zombie.ui.ActionProgressBar {}
  /** @customConstructor ActionState.new */
  export class ActionState extends zombie.characters.action.ActionState {}
  /** @customConstructor ActionStateSnapshot.new */
  export class ActionStateSnapshot extends zombie.characters.action.ActionStateSnapshot {}
  /** @customConstructor ActiveMods.new */
  export class ActiveMods extends zombie.modding.ActiveMods {}
  /** @customConstructor Add.new */
  export class Add extends zombie.Lua.Event$Add {}
  /** @customConstructor AdvancedAnimator.new */
  export class AdvancedAnimator extends zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator {}
  /** @customConstructor AirFront.new */
  export class AirFront extends zombie.iso.weather.ClimateManager$AirFront {}
  /** @customConstructor AlarmClock.new */
  export class AlarmClock extends zombie.inventory.types.AlarmClock {}
  /** @customConstructor AlarmClockClothing.new */
  export class AlarmClockClothing extends zombie.inventory.types.AlarmClockClothing {}
  /** @customConstructor Alias.new */
  export class Alias extends zombie.iso.worldgen.rules.Alias {}
  /** @customConstructor Allocator.new */
  export class Allocator extends zombie.popman.ObjectPool$Allocator<any> {}
  /** @customConstructor AlphaOp.new */
  export class AlphaOp extends zombie.core.Styles.AlphaOp {}
  /** @customConstructor Alternate.new */
  export class Alternate extends zombie.core.skinnedmodel.population.HairStyle$Alternate {}
  /** @customConstructor Ambient.new */
  export class Ambient extends zombie.AmbientStreamManager$Ambient {}
  /** @customConstructor AmbientLoop.new */
  export class AmbientLoop extends zombie.AmbientStreamManager$AmbientLoop {}
  /** @customConstructor AmbientSoundEffect.new */
  export class AmbientSoundEffect extends zombie.SoundManager$AmbientSoundEffect {}
  /** @customConstructor AmbientSoundLogic.new */
  export class AmbientSoundLogic extends zombie.audio.ObjectAmbientEmitters$AmbientSoundLogic {}
  /** @customConstructor AmbientStreamManager.new */
  export class AmbientStreamManager extends zombie.AmbientStreamManager {}
  /** @customConstructor AngelCodeFont.new */
  export class AngelCodeFont extends zombie.core.fonts.AngelCodeFont {}
  /** @customConstructor Anim.new */
  export class Anim extends zombie.scripting.objects.VehicleScript$Anim {}
  /** @customConstructor AnimBoneWeight.new */
  export class AnimBoneWeight extends zombie.core.skinnedmodel.advancedanimation.AnimBoneWeight {}
  /** @customConstructor AnimEvent.new */
  export class AnimEvent extends zombie.core.skinnedmodel.advancedanimation.AnimEvent {}
  /** @customConstructor AnimEventBroadcaster.new */
  export class AnimEventBroadcaster extends zombie.core.skinnedmodel.advancedanimation.events.AnimEventBroadcaster {}
  /** @customConstructor AnimEventTime.new */
  export class AnimEventTime extends zombie.core.skinnedmodel.advancedanimation.AnimEvent$AnimEventTime {}
  /** @customConstructor AnimLayer.new */
  export class AnimLayer extends zombie.core.skinnedmodel.advancedanimation.AnimLayer {}
  /** @customConstructor AnimNode.new */
  export class AnimNode extends zombie.core.skinnedmodel.advancedanimation.AnimNode {}
  /** @customConstructor AnimState.new */
  export class AnimState extends zombie.core.skinnedmodel.advancedanimation.AnimState {}
  /** @customConstructor AnimTimer.new */
  export class AnimTimer extends zombie.GameTime$AnimTimer {}
  /** @customConstructor AnimTrackSampler.new */
  export class AnimTrackSampler extends zombie.core.skinnedmodel.animation.AnimTrackSampler {}
  /** @customConstructor AnimTransition.new */
  export class AnimTransition extends zombie.core.skinnedmodel.advancedanimation.AnimTransition {}
  /** @customConstructor AnimalAllele.new */
  export class AnimalAllele extends zombie.characters.animals.AnimalAllele {}
  /** @customConstructor AnimalBreed.new */
  export class AnimalBreed extends zombie.characters.animals.datas.AnimalBreed {}
  /** @customConstructor AnimalChunk.new */
  export class AnimalChunk extends zombie.characters.animals.AnimalChunk {}
  /** @customConstructor AnimalData.new */
  export class AnimalData extends zombie.characters.animals.datas.AnimalData {}
  /** @customConstructor AnimalDefinitions.new */
  export class AnimalDefinitions extends zombie.characters.animals.AnimalDefinitions {}
  /** @customConstructor AnimalGene.new */
  export class AnimalGene extends zombie.characters.animals.AnimalGene {}
  /** @customConstructor AnimalGenomeDefinitions.new */
  export class AnimalGenomeDefinitions extends zombie.characters.animals.AnimalGenomeDefinitions {}
  /** @customConstructor AnimalGrowStage.new */
  export class AnimalGrowStage extends zombie.characters.animals.datas.AnimalGrowStage {}
  /** @customConstructor AnimalInventoryItem.new */
  export class AnimalInventoryItem extends zombie.inventory.types.AnimalInventoryItem {}
  /** @customConstructor AnimalPacket.new */
  export class AnimalPacket extends zombie.network.packets.character.AnimalPacket {}
  /** @customConstructor AnimalPart.new */
  export class AnimalPart extends zombie.characters.animals.AnimalPart {}
  /** @customConstructor AnimalPartsDefinitions.new */
  export class AnimalPartsDefinitions extends zombie.characters.animals.AnimalPartsDefinitions {}
  /** @customConstructor AnimalSoundState.new */
  export class AnimalSoundState extends zombie.characters.animals.AnimalSoundState {}
  /** @customConstructor AnimalTracks.new */
  export class AnimalTracks extends zombie.characters.animals.AnimalTracks {}
  /** @customConstructor AnimalTracksDefinitions.new */
  export class AnimalTracksDefinitions extends zombie.characters.animals.AnimalTracksDefinitions {}
  /** @customConstructor AnimalTracksType.new */
  export class AnimalTracksType extends zombie.characters.animals.AnimalTracksDefinitions$AnimalTracksType {}
  /** @customConstructor AnimalVisual.new */
  export class AnimalVisual extends zombie.core.skinnedmodel.visual.AnimalVisual {}
  /** @customConstructor AnimalZone.new */
  export class AnimalZone extends zombie.characters.animals.AnimalZone {}
  /** @customConstructor AnimalZoneJunction.new */
  export class AnimalZoneJunction extends zombie.characters.animals.AnimalZoneJunction {}
  /** @customConstructor AnimatedModel.new */
  export class AnimatedModel extends zombie.core.skinnedmodel.advancedanimation.AnimatedModel {}
  /** @customConstructor AnimatedModelInstanceRenderData.new */
  export class AnimatedModelInstanceRenderData extends zombie.core.skinnedmodel.advancedanimation.AnimatedModel$AnimatedModelInstanceRenderData {}
  /** @customConstructor AnimationAsset.new */
  export class AnimationAsset extends zombie.core.skinnedmodel.model.AnimationAsset {}
  /** @customConstructor AnimationAssetParams.new */
  export class AnimationAssetParams extends zombie.core.skinnedmodel.model.AnimationAsset$AnimationAssetParams {}
  /** @customConstructor AnimationBoneBinding.new */
  export class AnimationBoneBinding extends zombie.core.skinnedmodel.animation.AnimationBoneBinding {}
  /** @customConstructor AnimationClip.new */
  export class AnimationClip extends zombie.core.skinnedmodel.animation.AnimationClip {}
  /** @customConstructor AnimationMultiTrack.new */
  export class AnimationMultiTrack extends zombie.core.skinnedmodel.animation.AnimationMultiTrack {}
  /** @customConstructor AnimationPlayer.new */
  export class AnimationPlayer extends zombie.core.skinnedmodel.animation.AnimationPlayer {}
  /** @customConstructor AnimationPlayerRecorder.new */
  export class AnimationPlayerRecorder extends zombie.core.skinnedmodel.animation.debug.AnimationPlayerRecorder {}
  /** @customConstructor AnimationSet.new */
  export class AnimationSet extends zombie.core.skinnedmodel.advancedanimation.AnimationSet {}
  /** @customConstructor AnimationTrack.new */
  export class AnimationTrack extends zombie.core.skinnedmodel.animation.AnimationTrack {}
  /** @customConstructor AnimationVariableHandle.new */
  export class AnimationVariableHandle extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableHandle {}
  /** @customConstructor AnimationVariableReference.new */
  export class AnimationVariableReference extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableReference {}
  /** @customConstructor AnimationVariableSlotCallbackBool.new */
  export class AnimationVariableSlotCallbackBool extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool {}
  /** @customConstructor AnimationVariableSlotCallbackFloat.new */
  export class AnimationVariableSlotCallbackFloat extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackFloat {}
  /** @customConstructor AnimationVariableSlotCallbackInt.new */
  export class AnimationVariableSlotCallbackInt extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt {}
  /** @customConstructor AnimationVariableSlotCallbackString.new */
  export class AnimationVariableSlotCallbackString extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackString {}
  /** @customConstructor AnimationVariableSlotGenerator.new */
  export class AnimationVariableSlotGenerator extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSource$AnimationVariableSlotGenerator {}
  /** @customConstructor AnimationVariableSource.new */
  export class AnimationVariableSource extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSource {}
  /** @customConstructor AnimationVariableType.new */
  export class AnimationVariableType extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableType {}
  /** @customConstructor AnimationViewerState.new */
  export class AnimationViewerState extends zombie.gameStates.AnimationViewerState {}
  /** @customConstructor AnimationsMesh.new */
  export class AnimationsMesh extends zombie.scripting.objects.AnimationsMesh {}
  /** @customConstructor AnimatorDebugMonitor.new */
  export class AnimatorDebugMonitor extends zombie.core.skinnedmodel.advancedanimation.debug.AnimatorDebugMonitor {}
  /** @customConstructor AnimatorsBoneTransform.new */
  export class AnimatorsBoneTransform extends zombie.core.skinnedmodel.animation.AnimatorsBoneTransform {}
  /** @customConstructor AntiCheat.new */
  export class AntiCheat extends zombie.network.anticheats.AntiCheat {}
  /** @customConstructor Area.new */
  export class Area extends zombie.scripting.objects.VehicleScript$Area {}
  /** @customConstructor Array.new */
  export class Array extends zombie.entity.util.Array<any> {}
  /** @customConstructor ArrayIterable.new */
  export class ArrayIterable extends zombie.entity.util.Array$ArrayIterable<any> {}
  /** @customConstructor ArrayIterator.new */
  export class ArrayIterator extends zombie.entity.util.Array$ArrayIterator<any> {}
  /** @customConstructor ArrayList.new */
  export class ArrayList extends java.util.ArrayList<any> {}
  /** @customConstructor Asset.new */
  export class Asset extends zombie.asset.Asset {}
  /** @customConstructor AssetManager.new */
  export class AssetManager extends zombie.asset.AssetManager {}
  /** @customConstructor AssetManagerTable.new */
  export class AssetManagerTable extends zombie.asset.AssetManagers$AssetManagerTable {}
  /** @customConstructor AssetManagers.new */
  export class AssetManagers extends zombie.asset.AssetManagers {}
  /** @customConstructor AssetParams.new */
  export class AssetParams extends zombie.asset.AssetManager$AssetParams {}
  /** @customConstructor AssetPath.new */
  export class AssetPath extends zombie.asset.AssetPath {}
  /** @customConstructor AssetStateObserver.new */
  export class AssetStateObserver extends zombie.asset.AssetStateObserver {}
  /** @customConstructor AssetTable.new */
  export class AssetTable extends zombie.asset.AssetManager$AssetTable {}
  /** @customConstructor AssetType.new */
  export class AssetType extends zombie.asset.AssetType {}
  /** @customConstructor AssocArray.new */
  export class AssocArray extends zombie.entity.util.assoc.AssocArray<any, any> {}
  /** @customConstructor AssocEnumArray.new */
  export class AssocEnumArray extends zombie.entity.util.assoc.AssocEnumArray<any, any> {}
  /** @customConstructor AtomUI.new */
  export class AtomUI extends zombie.ui.AtomUI {}
  /** @customConstructor AtomUIMap.new */
  export class AtomUIMap extends zombie.ui.AtomUIMap {}
  /** @customConstructor AtomUIText.new */
  export class AtomUIText extends zombie.ui.AtomUIText {}
  /** @customConstructor AtomUITextEntry.new */
  export class AtomUITextEntry extends zombie.ui.AtomUITextEntry {}
  /** @customConstructor AtomUITexture.new */
  export class AtomUITexture extends zombie.ui.AtomUITexture {}
  /** @customConstructor AttachedItem.new */
  export class AttachedItem extends zombie.characters.AttachedItems.AttachedItem {}
  /** @customConstructor AttachedItems.new */
  export class AttachedItems extends zombie.characters.AttachedItems.AttachedItems {}
  /** @customConstructor AttachedLocation.new */
  export class AttachedLocation extends zombie.characters.AttachedItems.AttachedLocation {}
  /** @customConstructor AttachedLocationGroup.new */
  export class AttachedLocationGroup extends zombie.characters.AttachedItems.AttachedLocationGroup {}
  /** @customConstructor AttachedLocations.new */
  export class AttachedLocations extends zombie.characters.AttachedItems.AttachedLocations {}
  /** @customConstructor AttachedModelName.new */
  export class AttachedModelName extends zombie.characters.AttachedItems.AttachedModelName {}
  /** @customConstructor AttachedModelNames.new */
  export class AttachedModelNames extends zombie.characters.AttachedItems.AttachedModelNames {}
  /** @customConstructor AttachmentEditorState.new */
  export class AttachmentEditorState extends zombie.gameStates.AttachmentEditorState {}
  /** @customConstructor AttachmentsHandler.new */
  export class AttachmentsHandler extends zombie.iso.worldgen.attachments.AttachmentsHandler {}
  /** @customConstructor AttackFlags.new */
  export class AttackFlags extends zombie.network.fields.AttackVars$AttackFlags {}
  /** @customConstructor AttackState.new */
  export class AttackState extends zombie.ai.states.AttackState {}
  /** @customConstructor AttackVars.new */
  export class AttackVars extends zombie.network.fields.AttackVars {}
  /** @customConstructor Attribute.new */
  export class Attribute extends zombie.entity.components.attributes.Attribute {}
  /** @customConstructor AttributeContainer.new */
  export class AttributeContainer extends zombie.entity.components.attributes.AttributeContainer {}
  /** @customConstructor AttributeInstance.new */
  export class AttributeInstance extends zombie.entity.components.attributes.AttributeInstance<any, any> {}
  /** @customConstructor AttributeType.new */
  export class AttributeType extends zombie.entity.components.attributes.AttributeType {}
  /** @customConstructor AttributeUtil.new */
  export class AttributeUtil extends zombie.entity.components.attributes.AttributeUtil {}
  /** @customConstructor AttributeValueType.new */
  export class AttributeValueType extends zombie.entity.components.attributes.AttributeValueType {}
  /** @customConstructor AttributesScript.new */
  export class AttributesScript extends zombie.scripting.entity.components.attributes.AttributesScript {}
  /** @customConstructor AuthType.new */
  export class AuthType extends zombie.characters.NetworkUser$AuthType {}
  /** @customConstructor Authorization.new */
  export class Authorization extends zombie.vehicles.BaseVehicle$Authorization {}
  /** @customConstructor BallisticsController.new */
  export class BallisticsController extends zombie.core.physics.BallisticsController {}
  /** @customConstructor BallisticsTarget.new */
  export class BallisticsTarget extends zombie.core.physics.BallisticsTarget {}
  /** @customConstructor BarricadeAble.new */
  export class BarricadeAble extends zombie.iso.objects.interfaces.BarricadeAble {}
  /** @customConstructor BaseAction.new */
  export class BaseAction extends zombie.characters.CharacterTimedActions.BaseAction {}
  /** @customConstructor BaseAmbientStreamManager.new */
  export class BaseAmbientStreamManager extends zombie.BaseAmbientStreamManager {}
  /** @customConstructor BaseAnimalBehavior.new */
  export class BaseAnimalBehavior extends zombie.characters.animals.behavior.BaseAnimalBehavior {}
  /** @customConstructor BaseCharacterSoundEmitter.new */
  export class BaseCharacterSoundEmitter extends zombie.characters.BaseCharacterSoundEmitter {}
  /** @customConstructor BaseCraftingLogic.new */
  export class BaseCraftingLogic extends zombie.entity.components.crafting.BaseCraftingLogic {}
  /** @customConstructor BaseGrappleable.new */
  export class BaseGrappleable extends zombie.core.skinnedmodel.BaseGrappleable {}
  /** @customConstructor BaseScriptObject.new */
  export class BaseScriptObject extends zombie.scripting.objects.BaseScriptObject {}
  /** @customConstructor BaseSoundBank.new */
  export class BaseSoundBank extends zombie.audio.BaseSoundBank {}
  /** @customConstructor BaseSoundEmitter.new */
  export class BaseSoundEmitter extends zombie.audio.BaseSoundEmitter {}
  /** @customConstructor BaseSoundManager.new */
  export class BaseSoundManager extends zombie.BaseSoundManager {}
  /** @customConstructor BaseTest.new */
  export class BaseTest extends zombie.entity.debug.EntityDebugTest$BaseTest {}
  /** @customConstructor BaseVehicle.new */
  export class BaseVehicle extends zombie.vehicles.BaseVehicle {}
  /** @customConstructor BaseVisual.new */
  export class BaseVisual extends zombie.core.skinnedmodel.visual.BaseVisual {}
  /** @customConstructor Basement.new */
  export class Basement extends zombie.SandboxOptions$Basement {}
  /** @customConstructor BasementSpawnLocation.new */
  export class BasementSpawnLocation extends zombie.basements.BasementSpawnLocation {}
  /** @customConstructor Basements.new */
  export class Basements extends zombie.basements.Basements {}
  /** @customConstructor BasementsPerMap.new */
  export class BasementsPerMap extends zombie.basements.BasementsPerMap {}
  /** @customConstructor BasementsV1.new */
  export class BasementsV1 extends zombie.basements.BasementsV1 {}
  /** @customConstructor BeardStyle.new */
  export class BeardStyle extends zombie.core.skinnedmodel.population.BeardStyle {}
  /** @customConstructor BeardStyles.new */
  export class BeardStyles extends zombie.core.skinnedmodel.population.BeardStyles {}
  /** @customConstructor BeginMode.new */
  export class BeginMode extends zombie.core.skinnedmodel.model.VertexBufferObject$BeginMode {}
  /** @customConstructor BehaviorResult.new */
  export class BehaviorResult extends zombie.pathfind.PathFindBehavior2$BehaviorResult {}
  /** @customConstructor BentFences.new */
  export class BentFences extends zombie.iso.BentFences {}
  /** @customConstructor BiomeMap.new */
  export class BiomeMap extends zombie.iso.worldgen.maps.BiomeMap {}
  /** @customConstructor BiomeMapEntry.new */
  export class BiomeMapEntry extends zombie.iso.worldgen.maps.BiomeMapEntry {}
  /** @customConstructor BitSet.new */
  export class BitSet extends zombie.entity.util.BitSet {}
  /** @customConstructor BlendDirection.new */
  export class BlendDirection extends zombie.iso.worldgen.blending.BlendDirection {}
  /** @customConstructor Blending.new */
  export class Blending extends zombie.iso.worldgen.blending.Blending {}
  /** @customConstructor Block.new */
  export class Block extends zombie.scripting.ScriptParser$Block {}
  /** @customConstructor BlockElement.new */
  export class BlockElement extends zombie.scripting.ScriptParser$BlockElement {}
  /** @customConstructor BloodBodyPartType.new */
  export class BloodBodyPartType extends zombie.characterTextures.BloodBodyPartType {}
  /** @customConstructor BloodClothingType.new */
  export class BloodClothingType extends zombie.characterTextures.BloodClothingType {}
  /** @customConstructor BodyDamage.new */
  export class BodyDamage extends zombie.characters.BodyDamage.BodyDamage {}
  /** @customConstructor BodyDamageSync.new */
  export class BodyDamageSync extends zombie.network.BodyDamageSync {}
  /** @customConstructor BodyLocation.new */
  export class BodyLocation extends zombie.characters.IsoGameCharacter$BodyLocation {}
  /** @customConstructor BodyLocationGroup.new */
  export class BodyLocationGroup extends zombie.characters.WornItems.BodyLocationGroup {}
  /** @customConstructor BodyLocations.new */
  export class BodyLocations extends zombie.characters.WornItems.BodyLocations {}
  /** @customConstructor BodyPart.new */
  export class BodyPart extends zombie.characters.BodyDamage.BodyPart {}
  /** @customConstructor BodyPartLast.new */
  export class BodyPartLast extends zombie.characters.BodyDamage.BodyPartLast {}
  /** @customConstructor BodyPartSyncPacket.new */
  export class BodyPartSyncPacket extends zombie.network.packets.BodyPartSyncPacket {}
  /** @customConstructor BodyPartType.new */
  export class BodyPartType extends zombie.characters.BodyDamage.BodyPartType {}
  /** @customConstructor BoneAxis.new */
  export class BoneAxis extends zombie.core.skinnedmodel.animation.BoneAxis {}
  /** @customConstructor BoneTransform.new */
  export class BoneTransform extends zombie.core.skinnedmodel.animation.BoneTransform {}
  /** @customConstructor Bool.new */
  export class Bool extends zombie.entity.components.attributes.AttributeType$Bool {}
  /** @customConstructor Boolean.new */
  export class Boolean extends zombie.util.lambda.Invokers$Params2$Boolean {}
  /** @customConstructor BooleanConfigOption.new */
  export class BooleanConfigOption extends zombie.config.BooleanConfigOption {}
  /** @customConstructor BooleanDebugOption.new */
  export class BooleanDebugOption extends zombie.gameStates.TileGeometryState$BooleanDebugOption {}
  /** @customConstructor BooleanGrid.new */
  export class BooleanGrid extends zombie.core.utils.BooleanGrid {}
  /** @customConstructor BooleanSandboxOption.new */
  export class BooleanSandboxOption extends zombie.SandboxOptions$BooleanSandboxOption {}
  /** @customConstructor BooleanServerOption.new */
  export class BooleanServerOption extends zombie.network.ServerOptions$BooleanServerOption {}
  /** @customConstructor Box.new */
  export class Box extends zombie.tileDepth.TileGeometryFile$Box {}
  /** @customConstructor BrokenFences.new */
  export class BrokenFences extends zombie.iso.BrokenFences {}
  /** @customConstructor BufferedRandomAccessFile.new */
  export class BufferedRandomAccessFile extends zombie.util.BufferedRandomAccessFile {}
  /** @customConstructor BufferedReader.new */
  export class BufferedReader extends java.io.BufferedReader {}
  /** @customConstructor BufferedWriter.new */
  export class BufferedWriter extends java.io.BufferedWriter {}
  /** @customConstructor Buffers.new */
  export class Buffers extends zombie.core.skinnedmodel.model.SkinningData$Buffers {}
  /** @customConstructor BuildLogic.new */
  export class BuildLogic extends zombie.entity.components.build.BuildLogic {}
  /** @customConstructor Builder.new */
  export class Builder extends zombie.entity.Family$Builder {}
  /** @customConstructor BuildingDef.new */
  export class BuildingDef extends zombie.iso.BuildingDef {}
  /** @customConstructor BuildingScore.new */
  export class BuildingScore extends zombie.iso.areas.BuildingScore {}
  /** @customConstructor BuildingSearchCriteria.new */
  export class BuildingSearchCriteria extends zombie.iso.IsoCell$BuildingSearchCriteria {}
  /** @customConstructor BulletVariables.new */
  export class BulletVariables extends zombie.core.physics.CarController$BulletVariables {}
  /** @customConstructor BurntToDeath.new */
  export class BurntToDeath extends zombie.ai.states.BurntToDeath {}
  /** @customConstructor Bush.new */
  export class Bush extends zombie.iso.worldgen.biomes.BiomeType$Bush {}
  /** @customConstructor Byte.new */
  export class Byte extends zombie.entity.components.attributes.AttributeType$Byte {}
  /** @customConstructor ByteBufferWriter.new */
  export class ByteBufferWriter extends zombie.core.network.ByteBufferWriter {}
  /** @customConstructor CGlobalObject.new */
  export class CGlobalObject extends zombie.globalObjects.CGlobalObject {}
  /** @customConstructor CGlobalObjectSystem.new */
  export class CGlobalObjectSystem extends zombie.globalObjects.CGlobalObjectSystem {}
  /** @customConstructor CGlobalObjects.new */
  export class CGlobalObjects extends zombie.globalObjects.CGlobalObjects {}
  /** @customConstructor CacheData.new */
  export class CacheData extends zombie.entity.components.crafting.recipe.CraftRecipeData$CacheData {}
  /** @customConstructor CachedRecipeComparator.new */
  export class CachedRecipeComparator extends zombie.entity.components.crafting.BaseCraftingLogic$CachedRecipeComparator {}
  /** @customConstructor CachedRecipeInfo.new */
  export class CachedRecipeInfo extends zombie.entity.components.crafting.BaseCraftingLogic$CachedRecipeInfo {}
  /** @customConstructor CallbackGetStrongTyped.new */
  export class CallbackGetStrongTyped extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackBool$CallbackGetStrongTyped {}
  /** @customConstructor CallbackSetStrongTyped.new */
  export class CallbackSetStrongTyped extends zombie.core.skinnedmodel.advancedanimation.AnimationVariableSlotCallbackInt$CallbackSetStrongTyped {}
  /** @customConstructor CallbackStackItem.new */
  export class CallbackStackItem extends zombie.util.lambda.Invokers$Params3$CallbackStackItem<any, any, any> {}
  /** @customConstructor Caller.new */
  export class Caller extends zombie.inventory.ItemPickInfo$Caller {}
  /** @customConstructor Capability.new */
  export class Capability extends zombie.characters.Capability {}
  /** @customConstructor CarController.new */
  export class CarController extends zombie.core.physics.CarController {}
  /** @customConstructor CellGetSquare.new */
  export class CellGetSquare extends zombie.iso.IsoGridSquare$CellGetSquare {}
  /** @customConstructor ChannelCategory.new */
  export class ChannelCategory extends zombie.radio.ChannelCategory {}
  /** @customConstructor CharDef.new */
  export class CharDef extends zombie.core.fonts.AngelCodeFont$CharDef {}
  /** @customConstructor CharDefTexture.new */
  export class CharDefTexture extends zombie.core.fonts.AngelCodeFont$CharDefTexture {}
  /** @customConstructor CharacterActionAnims.new */
  export class CharacterActionAnims extends zombie.characters.CharacterActionAnims {}
  /** @customConstructor CharacterMask.new */
  export class CharacterMask extends zombie.core.skinnedmodel.model.CharacterMask {}
  /** @customConstructor CharacterSoundEmitter.new */
  export class CharacterSoundEmitter extends zombie.characters.CharacterSoundEmitter {}
  /** @customConstructor CharacterTraits.new */
  export class CharacterTraits extends zombie.characters.traits.CharacterTraits {}
  /** @customConstructor ChatBase.new */
  export class ChatBase extends zombie.chat.ChatBase {}
  /** @customConstructor ChatElement.new */
  export class ChatElement extends zombie.chat.ChatElement {}
  /** @customConstructor ChatElementOwner.new */
  export class ChatElementOwner extends zombie.chat.ChatElementOwner {}
  /** @customConstructor ChatMessage.new */
  export class ChatMessage extends zombie.chat.ChatMessage {}
  /** @customConstructor ChatMode.new */
  export class ChatMode extends zombie.chat.ChatMode {}
  /** @customConstructor ChatSettings.new */
  export class ChatSettings extends zombie.chat.ChatSettings {}
  /** @customConstructor ChatTab.new */
  export class ChatTab extends zombie.chat.ChatTab {}
  /** @customConstructor ChatType.new */
  export class ChatType extends zombie.network.chat.ChatType {}
  /** @customConstructor Checks.new */
  export class Checks extends zombie.debug.DebugOptions$Checks {}
  /** @customConstructor ChecksumState.new */
  export class ChecksumState extends zombie.core.raknet.UdpConnection$ChecksumState {}
  /** @customConstructor ChooseGameInfo.new */
  export class ChooseGameInfo extends zombie.gameStates.ChooseGameInfo {}
  /** @customConstructor ChumData.new */
  export class ChumData extends zombie.iso.FishSchoolManager$ChumData {}
  /** @customConstructor Chunk.new */
  export class Chunk extends zombie.erosion.ErosionData$Chunk {}
  /** @customConstructor ChunkCoord.new */
  export class ChunkCoord extends zombie.iso.worldgen.utils.ChunkCoord {}
  /** @customConstructor ChunkData.new */
  export class ChunkData extends zombie.vispoly.VisibilityPolygon2$ChunkData {}
  /** @customConstructor ChunkGenerationStatus.new */
  export class ChunkGenerationStatus extends zombie.iso.enums.ChunkGenerationStatus {}
  /** @customConstructor ChunkLevelData.new */
  export class ChunkLevelData extends zombie.vispoly.VisibilityPolygon2$ChunkLevelData {}
  /** @customConstructor ChunkLevelsData.new */
  export class ChunkLevelsData extends zombie.iso.fboRenderChunk.FBORenderCutaways$ChunkLevelsData {}
  /** @customConstructor CircleIsoMarker.new */
  export class CircleIsoMarker extends zombie.iso.IsoMarkers$CircleIsoMarker {}
  /** @customConstructor CircleStencilShader.new */
  export class CircleStencilShader extends zombie.iso.IsoGridSquare$CircleStencilShader {}
  /** @customConstructor ClickObject.new */
  export class ClickObject extends zombie.iso.IsoObjectPicker$ClickObject {}
  /** @customConstructor ClientChunkRequest.new */
  export class ClientChunkRequest extends zombie.network.ClientChunkRequest {}
  /** @customConstructor ClientControls.new */
  export class ClientControls extends zombie.core.physics.CarController$ClientControls {}
  /** @customConstructor ClientServerMap.new */
  export class ClientServerMap extends zombie.network.ClientServerMap {}
  /** @customConstructor ClimateBool.new */
  export class ClimateBool extends zombie.iso.weather.ClimateManager$ClimateBool {}
  /** @customConstructor ClimateColor.new */
  export class ClimateColor extends zombie.iso.weather.ClimateManager$ClimateColor {}
  /** @customConstructor ClimateColorInfo.new */
  export class ClimateColorInfo extends zombie.iso.weather.ClimateColorInfo {}
  /** @customConstructor ClimateFloat.new */
  export class ClimateFloat extends zombie.iso.weather.ClimateManager$ClimateFloat {}
  /** @customConstructor ClimateForecaster.new */
  export class ClimateForecaster extends zombie.iso.weather.ClimateForecaster {}
  /** @customConstructor ClimateHistory.new */
  export class ClimateHistory extends zombie.iso.weather.ClimateHistory {}
  /** @customConstructor ClimateManager.new */
  export class ClimateManager extends zombie.iso.weather.ClimateManager {}
  /** @customConstructor ClimateMoon.new */
  export class ClimateMoon extends zombie.iso.weather.ClimateMoon {}
  /** @customConstructor ClimateNetAuth.new */
  export class ClimateNetAuth extends zombie.iso.weather.ClimateManager$ClimateNetAuth {}
  /** @customConstructor ClimateValues.new */
  export class ClimateValues extends zombie.iso.weather.ClimateValues {}
  /** @customConstructor ClimbDownSheetRopeState.new */
  export class ClimbDownSheetRopeState extends zombie.ai.states.ClimbDownSheetRopeState {}
  /** @customConstructor ClimbOverFenceState.new */
  export class ClimbOverFenceState extends zombie.ai.states.ClimbOverFenceState {}
  /** @customConstructor ClimbOverWallState.new */
  export class ClimbOverWallState extends zombie.ai.states.ClimbOverWallState {}
  /** @customConstructor ClimbSheetRopeState.new */
  export class ClimbSheetRopeState extends zombie.ai.states.ClimbSheetRopeState {}
  /** @customConstructor ClimbThroughWindowPositioningParams.new */
  export class ClimbThroughWindowPositioningParams extends zombie.ai.states.ClimbThroughWindowPositioningParams {}
  /** @customConstructor ClimbThroughWindowState.new */
  export class ClimbThroughWindowState extends zombie.ai.states.ClimbThroughWindowState {}
  /** @customConstructor Clipboard.new */
  export class Clipboard extends zombie.core.Clipboard {}
  /** @customConstructor Clipper.new */
  export class Clipper extends zombie.vehicles.Clipper {}
  /** @customConstructor ClipperOffset.new */
  export class ClipperOffset extends zombie.vehicles.ClipperOffset {}
  /** @customConstructor Clock.new */
  export class Clock extends zombie.ui.Clock {}
  /** @customConstructor CloseWindowState.new */
  export class CloseWindowState extends zombie.ai.states.CloseWindowState {}
  /** @customConstructor Clothing.new */
  export class Clothing extends zombie.inventory.types.Clothing {}
  /** @customConstructor ClothingItem.new */
  export class ClothingItem extends zombie.core.skinnedmodel.population.ClothingItem {}
  /** @customConstructor ClothingItemReference.new */
  export class ClothingItemReference extends zombie.core.skinnedmodel.population.ClothingItemReference {}
  /** @customConstructor ClothingPatch.new */
  export class ClothingPatch extends zombie.inventory.types.Clothing$ClothingPatch {}
  /** @customConstructor ClothingPatchFabricType.new */
  export class ClothingPatchFabricType extends zombie.inventory.types.Clothing$ClothingPatchFabricType {}
  /** @customConstructor ClothingWetness.new */
  export class ClothingWetness extends zombie.characters.ClothingWetness {}
  /** @customConstructor ColNfo.new */
  export class ColNfo extends zombie.core.Colors$ColNfo {}
  /** @customConstructor Color.new */
  export class Color extends zombie.core.Color {}
  /** @customConstructor ColorInfo.new */
  export class ColorInfo extends zombie.core.textures.ColorInfo {}
  /** @customConstructor ColorRGB.new */
  export class ColorRGB extends zombie.characters.HaloTextHelper$ColorRGB {}
  /** @customConstructor ColorSet.new */
  export class ColorSet extends zombie.core.Colors$ColorSet {}
  /** @customConstructor ColorStop.new */
  export class ColorStop extends zombie.worldMap.styles.WorldMapStyleLayer$ColorStop {}
  /** @customConstructor Colors.new */
  export class Colors extends zombie.core.Colors {}
  /** @customConstructor CombatDamageData.new */
  export class CombatDamageData extends zombie.core.physics.BallisticsTarget$CombatDamageData {}
  /** @customConstructor ComboItem.new */
  export class ComboItem extends zombie.inventory.types.ComboItem {}
  /** @customConstructor Component.new */
  export class Component extends zombie.entity.Component {}
  /** @customConstructor ComponentEvent.new */
  export class ComponentEvent extends zombie.entity.events.ComponentEvent {}
  /** @customConstructor ComponentEventType.new */
  export class ComponentEventType extends zombie.entity.events.ComponentEventType {}
  /** @customConstructor ComponentScript.new */
  export class ComponentScript extends zombie.scripting.entity.ComponentScript {}
  /** @customConstructor ComponentType.new */
  export class ComponentType extends zombie.entity.ComponentType {}
  /** @customConstructor ComponentUiScript.new */
  export class ComponentUiScript extends zombie.scripting.objects.XuiSkinScript$ComponentUiScript {}
  /** @customConstructor ComponentUiStyle.new */
  export class ComponentUiStyle extends zombie.scripting.ui.XuiSkin$ComponentUiStyle {}
  /** @customConstructor ConfigOption.new */
  export class ConfigOption extends zombie.config.ConfigOption {}
  /** @customConstructor ConnectToServerState.new */
  export class ConnectToServerState extends zombie.gameStates.ConnectToServerState {}
  /** @customConstructor ConnectionType.new */
  export class ConnectionType extends zombie.core.raknet.UdpConnection$ConnectionType {}
  /** @customConstructor Container.new */
  export class Container extends zombie.scripting.objects.VehicleScript$Container {}
  /** @customConstructor ContainerID.new */
  export class ContainerID extends zombie.network.fields.ContainerID {}
  /** @customConstructor ContainerOverlays.new */
  export class ContainerOverlays extends zombie.iso.ContainerOverlays {}
  /** @customConstructor ContainerType.new */
  export class ContainerType extends zombie.network.fields.ContainerID$ContainerType {}
  /** @customConstructor Core.new */
  export class Core extends zombie.core.Core {}
  /** @customConstructor CraftBench.new */
  export class CraftBench extends zombie.entity.components.crafting.CraftBench {}
  /** @customConstructor CraftBenchScript.new */
  export class CraftBenchScript extends zombie.scripting.entity.components.crafting.CraftBenchScript {}
  /** @customConstructor CraftLogic.new */
  export class CraftLogic extends zombie.entity.components.crafting.CraftLogic {}
  /** @customConstructor CraftLogicScript.new */
  export class CraftLogicScript extends zombie.scripting.entity.components.crafting.CraftLogicScript {}
  /** @customConstructor CraftMode.new */
  export class CraftMode extends zombie.entity.components.crafting.CraftMode {}
  /** @customConstructor CraftRecipe.new */
  export class CraftRecipe extends zombie.scripting.entity.components.crafting.CraftRecipe {}
  /** @customConstructor CraftRecipeComponent.new */
  export class CraftRecipeComponent extends zombie.entity.components.crafting.CraftRecipeComponent {}
  /** @customConstructor CraftRecipeComponentScript.new */
  export class CraftRecipeComponentScript extends zombie.scripting.entity.components.crafting.CraftRecipeComponentScript {}
  /** @customConstructor CraftRecipeData.new */
  export class CraftRecipeData extends zombie.entity.components.crafting.recipe.CraftRecipeData {}
  /** @customConstructor CraftRecipeManager.new */
  export class CraftRecipeManager extends zombie.entity.components.crafting.recipe.CraftRecipeManager {}
  /** @customConstructor CraftRecipeMonitor.new */
  export class CraftRecipeMonitor extends zombie.entity.components.crafting.CraftRecipeMonitor {}
  /** @customConstructor CraftRecipeSort.new */
  export class CraftRecipeSort extends zombie.entity.components.crafting.recipe.CraftRecipeSort {}
  /** @customConstructor CraftUtil.new */
  export class CraftUtil extends zombie.entity.components.crafting.CraftUtil {}
  /** @customConstructor CrawlingZombieTurnState.new */
  export class CrawlingZombieTurnState extends zombie.ai.states.CrawlingZombieTurnState {}
  /** @customConstructor Credit.new */
  export class Credit extends zombie.gameStates.MainScreenState$Credit {}
  /** @customConstructor CustomSandboxOption.new */
  export class CustomSandboxOption extends zombie.sandbox.CustomSandboxOption {}
  /** @customConstructor CutawayNoDepthShader.new */
  export class CutawayNoDepthShader extends zombie.iso.IsoGridSquare$CutawayNoDepthShader {}
  /** @customConstructor CutawayWall.new */
  export class CutawayWall extends zombie.iso.fboRenderChunk.FBORenderCutaways$CutawayWall {}
  /** @customConstructor Cylinder.new */
  export class Cylinder extends zombie.tileDepth.TileGeometryFile$Cylinder {}
  /** @customConstructor DBResult.new */
  export class DBResult extends zombie.network.DBResult {}
  /** @customConstructor DBTicket.new */
  export class DBTicket extends zombie.network.DBTicket {}
  /** @customConstructor DataCell.new */
  export class DataCell extends zombie.iso.areas.isoregion.data.DataCell {}
  /** @customConstructor DataChunk.new */
  export class DataChunk extends zombie.iso.areas.isoregion.data.DataChunk {}
  /** @customConstructor DataInputStream.new */
  export class DataInputStream extends java.io.DataInputStream {}
  /** @customConstructor DataOutputStream.new */
  export class DataOutputStream extends java.io.DataOutputStream {}
  /** @customConstructor DataPoint.new */
  export class DataPoint extends zombie.radio.StorySounds.DataPoint {}
  /** @customConstructor DayForecast.new */
  export class DayForecast extends zombie.iso.weather.ClimateForecaster$DayForecast {}
  /** @customConstructor DayInfo.new */
  export class DayInfo extends zombie.iso.weather.ClimateManager$DayInfo {}
  /** @customConstructor DeadCharacterPacket.new */
  export class DeadCharacterPacket extends zombie.network.packets.character.DeadCharacterPacket {}
  /** @customConstructor Debug.new */
  export class Debug extends zombie.erosion.ErosionConfig$Debug {}
  /** @customConstructor DebugChunkState.new */
  export class DebugChunkState extends zombie.gameStates.DebugChunkState {}
  /** @customConstructor DebugDrawSettings.new */
  export class DebugDrawSettings extends zombie.core.physics.RagdollControllerDebugRenderer$DebugDrawSettings {}
  /** @customConstructor DebugFlagsOG.new */
  export class DebugFlagsOG extends zombie.debug.options.Multiplayer$DebugFlagsOG {}
  /** @customConstructor DebugGlobalObjectState.new */
  export class DebugGlobalObjectState extends zombie.gameStates.DebugGlobalObjectState {}
  /** @customConstructor DebugLog.new */
  export class DebugLog extends zombie.debug.DebugLog {}
  /** @customConstructor DebugLogStream.new */
  export class DebugLogStream extends zombie.debug.DebugLogStream {}
  /** @customConstructor DebugOG.new */
  export class DebugOG extends zombie.debug.options.Multiplayer$DebugOG {}
  /** @customConstructor DebugOptions.new */
  export class DebugOptions extends zombie.debug.DebugOptions {}
  /** @customConstructor DebugType.new */
  export class DebugType extends zombie.debug.DebugType {}
  /** @customConstructor DeferedTextDraw.new */
  export class DeferedTextDraw extends zombie.ui.TextManager$DeferedTextDraw {}
  /** @customConstructor Descriptor.new */
  export class Descriptor extends zombie.SharedDescriptors$Descriptor {}
  /** @customConstructor DesignationZone.new */
  export class DesignationZone extends zombie.iso.areas.DesignationZone {}
  /** @customConstructor DesignationZoneAnimal.new */
  export class DesignationZoneAnimal extends zombie.iso.areas.DesignationZoneAnimal {}
  /** @customConstructor DeviceData.new */
  export class DeviceData extends zombie.radio.devices.DeviceData {}
  /** @customConstructor DeviceList.new */
  export class DeviceList extends zombie.fileSystem.DeviceList {}
  /** @customConstructor DevicePresets.new */
  export class DevicePresets extends zombie.radio.devices.DevicePresets {}
  /** @customConstructor Direction.new */
  export class Direction extends zombie.iso.worldgen.utils.Direction {}
  /** @customConstructor DirectionArrow.new */
  export class DirectionArrow extends zombie.iso.WorldMarkers$DirectionArrow {}
  /** @customConstructor Display.new */
  export class Display extends zombie.entity.components.attributes.Attribute$UI$Display {}
  /** @customConstructor DisplayAsBar.new */
  export class DisplayAsBar extends zombie.entity.components.attributes.Attribute$UI$DisplayAsBar {}
  /** @customConstructor Door.new */
  export class Door extends zombie.scripting.objects.VehicleScript$Door {}
  /** @customConstructor DoorLogic.new */
  export class DoorLogic extends zombie.audio.ObjectAmbientEmitters$DoorLogic {}
  /** @customConstructor DoorType.new */
  export class DoorType extends zombie.iso.objects.IsoDoor$DoorType {}
  /** @customConstructor Double.new */
  export class Double extends zombie.entity.components.attributes.AttributeInstance$Double {}
  /** @customConstructor DoubleConfigOption.new */
  export class DoubleConfigOption extends zombie.config.DoubleConfigOption {}
  /** @customConstructor DoubleConfigOption1.new */
  export class DoubleConfigOption1 extends zombie.iso.fboRenderChunk.FBORenderTracerEffects$DoubleConfigOption1 {}
  /** @customConstructor DoubleDebugOption.new */
  export class DoubleDebugOption extends zombie.gameStates.DebugChunkState$DoubleDebugOption {}
  /** @customConstructor DoubleSandboxOption.new */
  export class DoubleSandboxOption extends zombie.SandboxOptions$DoubleSandboxOption {}
  /** @customConstructor DoubleServerOption.new */
  export class DoubleServerOption extends zombie.network.ServerOptions$DoubleServerOption {}
  /** @customConstructor Drainable.new */
  export class Drainable extends zombie.inventory.types.Drainable {}
  /** @customConstructor DrainableComboItem.new */
  export class DrainableComboItem extends zombie.inventory.types.DrainableComboItem {}
  /** @customConstructor Drawer.new */
  export class Drawer extends zombie.worldMap.WorldMapRenderer$Drawer {}
  /** @customConstructor DryingLogic.new */
  export class DryingLogic extends zombie.entity.components.crafting.DryingLogic {}
  /** @customConstructor DryingSlot.new */
  export class DryingSlot extends zombie.entity.components.crafting.DryingLogic$DryingSlot {}
  /** @customConstructor DummyCharacterSoundEmitter.new */
  export class DummyCharacterSoundEmitter extends zombie.characters.DummyCharacterSoundEmitter {}
  /** @customConstructor DummySoundBank.new */
  export class DummySoundBank extends zombie.audio.DummySoundBank {}
  /** @customConstructor DummySoundEmitter.new */
  export class DummySoundEmitter extends zombie.audio.DummySoundEmitter {}
  /** @customConstructor DummySoundManager.new */
  export class DummySoundManager extends zombie.DummySoundManager {}
  /** @customConstructor DynamicRadioChannel.new */
  export class DynamicRadioChannel extends zombie.radio.scripting.DynamicRadioChannel {}
  /** @customConstructor EditVehicleState.new */
  export class EditVehicleState extends zombie.vehicles.EditVehicleState {}
  /** @customConstructor EffectLight.new */
  export class EffectLight extends zombie.core.skinnedmodel.model.ModelInstance$EffectLight {}
  /** @customConstructor Element.new */
  export class Element extends zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$Element {}
  /** @customConstructor EmitterType.new */
  export class EmitterType extends fmod.fmod.EmitterType {}
  /** @customConstructor EndType.new */
  export class EndType extends zombie.vehicles.ClipperOffset$EndType {}
  /** @customConstructor Energy.new */
  export class Energy extends zombie.entity.energy.Energy {}
  /** @customConstructor EnergyDefinitionScript.new */
  export class EnergyDefinitionScript extends zombie.scripting.objects.EnergyDefinitionScript {}
  /** @customConstructor EnergyType.new */
  export class EnergyType extends zombie.entity.energy.EnergyType {}
  /** @customConstructor EntityBucket.new */
  export class EntityBucket extends zombie.entity.EntityBucket {}
  /** @customConstructor EntityDebugTest.new */
  export class EntityDebugTest extends zombie.entity.debug.EntityDebugTest {}
  /** @customConstructor EntityDebugTestType.new */
  export class EntityDebugTestType extends zombie.entity.debug.EntityDebugTestType {}
  /** @customConstructor EntityEvent.new */
  export class EntityEvent extends zombie.entity.events.EntityEvent {}
  /** @customConstructor EntityEventType.new */
  export class EntityEventType extends zombie.entity.events.EntityEventType {}
  /** @customConstructor EntityPacketData.new */
  export class EntityPacketData extends zombie.entity.network.EntityPacketData {}
  /** @customConstructor EntityPacketType.new */
  export class EntityPacketType extends zombie.entity.network.EntityPacketType {}
  /** @customConstructor EntityScriptInfo.new */
  export class EntityScriptInfo extends zombie.entity.components.script.EntityScriptInfo {}
  /** @customConstructor EntityUiScript.new */
  export class EntityUiScript extends zombie.scripting.objects.XuiSkinScript$EntityUiScript {}
  /** @customConstructor EntityUiStyle.new */
  export class EntityUiStyle extends zombie.scripting.ui.XuiSkin$EntityUiStyle {}
  /** @customConstructor EntityValidator.new */
  export class EntityValidator extends zombie.entity.EntityBucket$EntityValidator {}
  /** @customConstructor Enum.new */
  export class Enum extends zombie.entity.components.attributes.AttributeInstance$Enum<any> {}
  /** @customConstructor EnumBitStore.new */
  export class EnumBitStore extends zombie.entity.util.enums.EnumBitStore<any> {}
  /** @customConstructor EnumConfigOption.new */
  export class EnumConfigOption extends zombie.config.EnumConfigOption {}
  /** @customConstructor EnumMap.new */
  export class EnumMap extends java.util.EnumMap<any, any> {}
  /** @customConstructor EnumSandboxOption.new */
  export class EnumSandboxOption extends zombie.SandboxOptions$EnumSandboxOption {}
  /** @customConstructor EnumServerOption.new */
  export class EnumServerOption extends zombie.network.ServerOptions$EnumServerOption {}
  /** @customConstructor EnumSet.new */
  export class EnumSet extends zombie.entity.components.attributes.AttributeInstance$EnumSet<any> {}
  /** @customConstructor EnumStringObj.new */
  export class EnumStringObj extends zombie.entity.components.attributes.EnumStringObj<any> {}
  /** @customConstructor EnumStringSet.new */
  export class EnumStringSet extends zombie.entity.components.attributes.AttributeType$EnumStringSet<any> {}
  /** @customConstructor ErosionConfig.new */
  export class ErosionConfig extends zombie.erosion.ErosionConfig {}
  /** @customConstructor ErosionData.new */
  export class ErosionData extends zombie.erosion.ErosionData {}
  /** @customConstructor ErosionMain.new */
  export class ErosionMain extends zombie.erosion.ErosionMain {}
  /** @customConstructor ErosionSeason.new */
  export class ErosionSeason extends zombie.erosion.season.ErosionSeason {}
  /** @customConstructor Event.new */
  export class Event extends zombie.Lua.Event {}
  /** @customConstructor EventSound.new */
  export class EventSound extends zombie.radio.StorySounds.EventSound {}
  /** @customConstructor EvolvedRecipe.new */
  export class EvolvedRecipe extends zombie.scripting.objects.EvolvedRecipe {}
  /** @customConstructor Existences.new */
  export class Existences extends zombie.network.packets.character.AnimalPacket$Existences {}
  /** @customConstructor ExitOption.new */
  export class ExitOption extends zombie.radio.scripting.RadioScript$ExitOption {}
  /** @customConstructor ExpandStyle.new */
  export class ExpandStyle extends zombie.core.Styles.FloatList$ExpandStyle {}
  /** @customConstructor ExplosionMode.new */
  export class ExplosionMode extends zombie.iso.objects.IsoTrap$ExplosionMode {}
  /** @customConstructor Exposer.new */
  export class Exposer extends zombie.Lua.LuaManager$Exposer {}
  /** @customConstructor FBORenderChunk.new */
  export class FBORenderChunk extends zombie.iso.fboRenderChunk.FBORenderChunk {}
  /** @customConstructor FBORenderCutaways.new */
  export class FBORenderCutaways extends zombie.iso.fboRenderChunk.FBORenderCutaways {}
  /** @customConstructor FBORenderLevels.new */
  export class FBORenderLevels extends zombie.iso.fboRenderChunk.FBORenderLevels {}
  /** @customConstructor FBORenderTracerEffects.new */
  export class FBORenderTracerEffects extends zombie.iso.fboRenderChunk.FBORenderTracerEffects {}
  /** @customConstructor FMODAudio.new */
  export class FMODAudio extends fmod.fmod.FMODAudio {}
  /** @customConstructor FMODDebugEventPlayer.new */
  export class FMODDebugEventPlayer extends fmod.fmod.FMODDebugEventPlayer {}
  /** @customConstructor FMODParameter.new */
  export class FMODParameter extends zombie.audio.FMODParameter {}
  /** @customConstructor FMODParameterList.new */
  export class FMODParameterList extends zombie.audio.FMODParameterList {}
  /** @customConstructor FMODSoundBank.new */
  export class FMODSoundBank extends fmod.fmod.FMODSoundBank {}
  /** @customConstructor FMODSoundEmitter.new */
  export class FMODSoundEmitter extends fmod.fmod.FMODSoundEmitter {}
  /** @customConstructor FaceInfo.new */
  export class FaceInfo extends zombie.entity.components.spriteconfig.SpriteConfigManager$FaceInfo {}
  /** @customConstructor FaceScript.new */
  export class FaceScript extends zombie.scripting.entity.components.spriteconfig.SpriteConfigScript$FaceScript {}
  /** @customConstructor Faction.new */
  export class Faction extends zombie.characters.Faction {}
  /** @customConstructor FakeDeadAttackState.new */
  export class FakeDeadAttackState extends zombie.ai.states.FakeDeadAttackState {}
  /** @customConstructor FakeDeadZombieState.new */
  export class FakeDeadZombieState extends zombie.ai.states.FakeDeadZombieState {}
  /** @customConstructor Family.new */
  export class Family extends zombie.entity.Family {}
  /** @customConstructor Feature.new */
  export class Feature extends zombie.iso.worldgen.biomes.Feature {}
  /** @customConstructor FeatureType.new */
  export class FeatureType extends zombie.iso.worldgen.biomes.FeatureType {}
  /** @customConstructor FileSeekMode.new */
  export class FileSeekMode extends zombie.fileSystem.FileSeekMode {}
  /** @customConstructor FileSystem.new */
  export class FileSystem extends zombie.fileSystem.FileSystem {}
  /** @customConstructor FileTask.new */
  export class FileTask extends zombie.fileSystem.FileTask {}
  /** @customConstructor FilterArgs.new */
  export class FilterArgs extends zombie.worldMap.styles.WorldMapStyleLayer$FilterArgs {}
  /** @customConstructor FilterMode.new */
  export class FilterMode extends zombie.entity.components.crafting.recipe.CraftRecipeManager$FilterMode {}
  /** @customConstructor FilterType.new */
  export class FilterType extends zombie.entity.components.fluids.FluidFilter$FilterType {}
  /** @customConstructor FishSchoolManager.new */
  export class FishSchoolManager extends zombie.iso.FishSchoolManager {}
  /** @customConstructor FishingStage.new */
  export class FishingStage extends zombie.ai.states.FishingState$FishingStage {}
  /** @customConstructor FishingState.new */
  export class FishingState extends zombie.ai.states.FishingState {}
  /** @customConstructor Fitness.new */
  export class Fitness extends zombie.characters.BodyDamage.Fitness {}
  /** @customConstructor FitnessExercise.new */
  export class FitnessExercise extends zombie.characters.BodyDamage.Fitness$FitnessExercise {}
  /** @customConstructor FitnessState.new */
  export class FitnessState extends zombie.ai.states.FitnessState {}
  /** @customConstructor Fixer.new */
  export class Fixer extends zombie.scripting.objects.Fixing$Fixer {}
  /** @customConstructor FixerSkill.new */
  export class FixerSkill extends zombie.scripting.objects.Fixing$FixerSkill {}
  /** @customConstructor Fixing.new */
  export class Fixing extends zombie.scripting.objects.Fixing {}
  /** @customConstructor FixingManager.new */
  export class FixingManager extends zombie.inventory.FixingManager {}
  /** @customConstructor Flags.new */
  export class Flags extends zombie.scripting.ScriptType$Flags {}
  /** @customConstructor Flare.new */
  export class Flare extends zombie.iso.weather.WorldFlares$Flare {}
  /** @customConstructor Float.new */
  export class Float extends zombie.entity.components.attributes.AttributeType$Float {}
  /** @customConstructor FloatGet.new */
  export class FloatGet extends zombie.core.math.PZMath$FloatGet<any> {}
  /** @customConstructor FloatList.new */
  export class FloatList extends zombie.core.Styles.FloatList {}
  /** @customConstructor FloatSet.new */
  export class FloatSet extends zombie.core.math.PZMath$FloatSet<any> {}
  /** @customConstructor FloatStop.new */
  export class FloatStop extends zombie.worldMap.styles.WorldMapStyleLayer$FloatStop {}
  /** @customConstructor Fluid.new */
  export class Fluid extends zombie.entity.components.fluids.Fluid {}
  /** @customConstructor FluidCategory.new */
  export class FluidCategory extends zombie.entity.components.fluids.FluidCategory {}
  /** @customConstructor FluidConsume.new */
  export class FluidConsume extends zombie.entity.components.fluids.FluidConsume {}
  /** @customConstructor FluidContainer.new */
  export class FluidContainer extends zombie.entity.components.fluids.FluidContainer {}
  /** @customConstructor FluidContainerScript.new */
  export class FluidContainerScript extends zombie.scripting.entity.components.fluids.FluidContainerScript {}
  /** @customConstructor FluidDefinitionScript.new */
  export class FluidDefinitionScript extends zombie.scripting.objects.FluidDefinitionScript {}
  /** @customConstructor FluidFilter.new */
  export class FluidFilter extends zombie.entity.components.fluids.FluidFilter {}
  /** @customConstructor FluidFilterScript.new */
  export class FluidFilterScript extends zombie.scripting.objects.FluidFilterScript {}
  /** @customConstructor FluidInstance.new */
  export class FluidInstance extends zombie.entity.components.fluids.FluidInstance {}
  /** @customConstructor FluidMatchMode.new */
  export class FluidMatchMode extends zombie.entity.components.crafting.FluidMatchMode {}
  /** @customConstructor FluidProperties.new */
  export class FluidProperties extends zombie.entity.components.fluids.FluidProperties {}
  /** @customConstructor FluidSample.new */
  export class FluidSample extends zombie.entity.components.fluids.FluidSample {}
  /** @customConstructor FluidScript.new */
  export class FluidScript extends zombie.scripting.entity.components.fluids.FluidContainerScript$FluidScript {}
  /** @customConstructor FluidType.new */
  export class FluidType extends zombie.entity.components.fluids.FluidType {}
  /** @customConstructor FluidUtil.new */
  export class FluidUtil extends zombie.entity.components.fluids.FluidUtil {}
  /** @customConstructor FontSize.new */
  export class FontSize extends zombie.chat.ChatSettings$FontSize {}
  /** @customConstructor Food.new */
  export class Food extends zombie.inventory.types.Food {}
  /** @customConstructor ForceHitReactionLocation.new */
  export class ForceHitReactionLocation extends zombie.core.physics.RagdollSettingsManager$ForceHitReactionLocation {}
  /** @customConstructor ForcedGenes.new */
  export class ForcedGenes extends zombie.characters.animals.datas.AnimalBreed$ForcedGenes {}
  /** @customConstructor ForecastValue.new */
  export class ForecastValue extends zombie.iso.weather.ClimateForecaster$ForecastValue {}
  /** @customConstructor Frame.new */
  export class Frame extends zombie.iso.IsoWorld$Frame {}
  /** @customConstructor FrameLightBlendStatus.new */
  export class FrameLightBlendStatus extends zombie.core.skinnedmodel.model.ModelInstance$FrameLightBlendStatus {}
  /** @customConstructor FrameLightInfo.new */
  export class FrameLightInfo extends zombie.core.skinnedmodel.model.ModelInstance$FrameLightInfo {}
  /** @customConstructor FrameState.new */
  export class FrameState extends zombie.iso.IsoCamera$FrameState {}
  /** @customConstructor FridgeHumLogic.new */
  export class FridgeHumLogic extends zombie.audio.ObjectAmbientEmitters$FridgeHumLogic {}
  /** @customConstructor FurnaceLogic.new */
  export class FurnaceLogic extends zombie.entity.components.crafting.FurnaceLogic {}
  /** @customConstructor FurnaceLogicScript.new */
  export class FurnaceLogicScript extends zombie.scripting.entity.components.crafting.FurnaceLogicScript {}
  /** @customConstructor FurnaceSlot.new */
  export class FurnaceSlot extends zombie.entity.components.crafting.FurnaceLogic$FurnaceSlot {}
  /** @customConstructor GameCharacterAIBrain.new */
  export class GameCharacterAIBrain extends zombie.ai.GameCharacterAIBrain {}
  /** @customConstructor GameClient.new */
  export class GameClient extends zombie.network.GameClient {}
  /** @customConstructor GameEntity.new */
  export class GameEntity extends zombie.entity.GameEntity {}
  /** @customConstructor GameEntityFactory.new */
  export class GameEntityFactory extends zombie.entity.GameEntityFactory {}
  /** @customConstructor GameEntityScript.new */
  export class GameEntityScript extends zombie.scripting.entity.GameEntityScript {}
  /** @customConstructor GameEntityTemplate.new */
  export class GameEntityTemplate extends zombie.scripting.entity.GameEntityTemplate {}
  /** @customConstructor GameEntityType.new */
  export class GameEntityType extends zombie.entity.GameEntityType {}
  /** @customConstructor GameEntityUtil.new */
  export class GameEntityUtil extends zombie.entity.util.GameEntityUtil {}
  /** @customConstructor GameKeyboard.new */
  export class GameKeyboard extends zombie.input.GameKeyboard {}
  /** @customConstructor GameLoadingState.new */
  export class GameLoadingState extends zombie.gameStates.GameLoadingState {}
  /** @customConstructor GameMode.new */
  export class GameMode extends zombie.radio.GameMode {}
  /** @customConstructor GameSound.new */
  export class GameSound extends zombie.audio.GameSound {}
  /** @customConstructor GameSoundClip.new */
  export class GameSoundClip extends zombie.audio.GameSoundClip {}
  /** @customConstructor GameSoundScript.new */
  export class GameSoundScript extends zombie.scripting.objects.GameSoundScript {}
  /** @customConstructor GameSounds.new */
  export class GameSounds extends zombie.GameSounds {}
  /** @customConstructor GameState.new */
  export class GameState extends zombie.gameStates.GameState {}
  /** @customConstructor GameStateMachine.new */
  export class GameStateMachine extends zombie.gameStates.GameStateMachine {}
  /** @customConstructor GameTime.new */
  export class GameTime extends zombie.GameTime {}
  /** @customConstructor GameVersion.new */
  export class GameVersion extends zombie.core.GameVersion {}
  /** @customConstructor GameWindow.new */
  export class GameWindow extends zombie.GameWindow {}
  /** @customConstructor GearInfo.new */
  export class GearInfo extends zombie.core.physics.CarController$GearInfo {}
  /** @customConstructor GenericDrawer.new */
  export class GenericDrawer extends zombie.core.textures.TextureDraw$GenericDrawer {}
  /** @customConstructor GenericSpriteRenderState.new */
  export class GenericSpriteRenderState extends zombie.core.sprite.GenericSpriteRenderState {}
  /** @customConstructor Geometry.new */
  export class Geometry extends zombie.tileDepth.TileGeometryFile$Geometry {}
  /** @customConstructor GeometryData.new */
  export class GeometryData extends zombie.core.Styles.GeometryData {}
  /** @customConstructor GetSquare.new */
  export class GetSquare extends zombie.iso.IsoGridSquare$GetSquare {}
  /** @customConstructor GibletType.new */
  export class GibletType extends zombie.iso.objects.IsoZombieGiblets$GibletType {}
  /** @customConstructor GlobalObject.new */
  export class GlobalObject extends zombie.Lua.LuaManager$GlobalObject {}
  /** @customConstructor GlobalObjectSystem.new */
  export class GlobalObjectSystem extends zombie.globalObjects.GlobalObjectSystem {}
  /** @customConstructor GrappleOffsetBehaviour.new */
  export class GrappleOffsetBehaviour extends zombie.core.skinnedmodel.advancedanimation.GrappleOffsetBehaviour {}
  /** @customConstructor Grass.new */
  export class Grass extends zombie.iso.worldgen.biomes.Grass {}
  /** @customConstructor GridPlane.new */
  export class GridPlane extends zombie.vehicles.UI3DScene$GridPlane {}
  /** @customConstructor GridSquareMarker.new */
  export class GridSquareMarker extends zombie.iso.WorldMarkers$GridSquareMarker {}
  /** @customConstructor HairStyle.new */
  export class HairStyle extends zombie.core.skinnedmodel.population.HairStyle {}
  /** @customConstructor HairStyles.new */
  export class HairStyles extends zombie.core.skinnedmodel.population.HairStyles {}
  /** @customConstructor HaloTextHelper.new */
  export class HaloTextHelper extends zombie.characters.HaloTextHelper {}
  /** @customConstructor HandWeapon.new */
  export class HandWeapon extends zombie.inventory.types.HandWeapon {}
  /** @customConstructor HandcraftLogic.new */
  export class HandcraftLogic extends zombie.entity.components.crafting.recipe.HandcraftLogic {}
  /** @customConstructor HashMap.new */
  export class HashMap extends java.util.HashMap<any, any> {}
  /** @customConstructor HitInfo.new */
  export class HitInfo extends zombie.network.fields.HitInfo {}
  /** @customConstructor HitReactionNetworkAI.new */
  export class HitReactionNetworkAI extends zombie.characters.HitReactionNetworkAI {}
  /** @customConstructor HitReactionSetting.new */
  export class HitReactionSetting extends zombie.core.physics.RagdollSettingsManager$HitReactionSetting {}
  /** @customConstructor HitVars.new */
  export class HitVars extends zombie.vehicles.BaseVehicle$HitVars {}
  /** @customConstructor HumanCorpse.new */
  export class HumanCorpse extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase$HumanCorpse {}
  /** @customConstructor HumanVisual.new */
  export class HumanVisual extends zombie.core.skinnedmodel.visual.HumanVisual {}
  /** @customConstructor Hygrometry.new */
  export class Hygrometry extends zombie.iso.worldgen.biomes.BiomeType$Hygrometry {}
  /** @customConstructor IAnimEventListener.new */
  export class IAnimEventListener extends zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListener {}
  /** @customConstructor IAnimEventListenerBoolean.new */
  export class IAnimEventListenerBoolean extends zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerBoolean {}
  /** @customConstructor IAnimEventListenerFloat.new */
  export class IAnimEventListenerFloat extends zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerFloat {}
  /** @customConstructor IAnimEventListenerNoParam.new */
  export class IAnimEventListenerNoParam extends zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerNoParam {}
  /** @customConstructor IAnimEventListenerSetVariableString.new */
  export class IAnimEventListenerSetVariableString extends zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerSetVariableString {}
  /** @customConstructor IAnimEventListenerString.new */
  export class IAnimEventListenerString extends zombie.core.skinnedmodel.advancedanimation.events.IAnimEventListenerString {}
  /** @customConstructor IAnimListener.new */
  export class IAnimListener extends zombie.core.skinnedmodel.animation.IAnimListener {}
  /** @customConstructor IAnimalVisual.new */
  export class IAnimalVisual extends zombie.core.skinnedmodel.visual.IAnimalVisual {}
  /** @customConstructor IAnimatable.new */
  export class IAnimatable extends zombie.core.skinnedmodel.advancedanimation.IAnimatable {}
  /** @customConstructor IAnimationVariableCallbackMap.new */
  export class IAnimationVariableCallbackMap extends zombie.core.skinnedmodel.advancedanimation.IAnimationVariableCallbackMap {}
  /** @customConstructor IAnimationVariableSlot.new */
  export class IAnimationVariableSlot extends zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSlot {}
  /** @customConstructor IAnimationVariableSource.new */
  export class IAnimationVariableSource extends zombie.core.skinnedmodel.advancedanimation.IAnimationVariableSource {}
  /** @customConstructor IBiome.new */
  export class IBiome extends zombie.iso.worldgen.biomes.IBiome {}
  /** @customConstructor IBucketListener.new */
  export class IBucketListener extends zombie.entity.IBucketListener {}
  /** @customConstructor ICallback.new */
  export class ICallback extends zombie.util.lambda.Invokers$Params1$ICallback<any> {}
  /** @customConstructor IChunkRegion.new */
  export class IChunkRegion extends zombie.iso.areas.isoregion.regions.IChunkRegion {}
  /** @customConstructor IDebugLogFormatter.new */
  export class IDebugLogFormatter extends zombie.debug.IDebugLogFormatter {}
  /** @customConstructor IDebugOption.new */
  export class IDebugOption extends zombie.debug.options.IDebugOption {}
  /** @customConstructor IDebugOptionGroup.new */
  export class IDebugOptionGroup extends zombie.debug.options.IDebugOptionGroup {}
  /** @customConstructor IDs.new */
  export class IDs extends zombie.core.opengl.Shader$Skinning$IDs {}
  /** @customConstructor IElementSpawner.new */
  export class IElementSpawner extends zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner$IElementSpawner {}
  /** @customConstructor IFile.new */
  export class IFile extends zombie.fileSystem.IFile {}
  /** @customConstructor IFileDevice.new */
  export class IFileDevice extends zombie.fileSystem.IFileDevice {}
  /** @customConstructor IFileTask2Callback.new */
  export class IFileTask2Callback extends zombie.fileSystem.IFileTask2Callback {}
  /** @customConstructor IFileTaskCallback.new */
  export class IFileTaskCallback extends zombie.fileSystem.IFileTaskCallback {}
  /** @customConstructor IGLBufferObject.new */
  export class IGLBufferObject extends zombie.core.VBO.IGLBufferObject {}
  /** @customConstructor IGLFramebufferObject.new */
  export class IGLFramebufferObject extends zombie.core.textures.IGLFramebufferObject {}
  /** @customConstructor IGrappleable.new */
  export class IGrappleable extends zombie.core.skinnedmodel.IGrappleable {}
  /** @customConstructor IHumanVisual.new */
  export class IHumanVisual extends zombie.core.skinnedmodel.visual.IHumanVisual {}
  /** @customConstructor IIdentifiable.new */
  export class IIdentifiable extends zombie.network.id.IIdentifiable {}
  /** @customConstructor ILighting.new */
  export class ILighting extends zombie.iso.IsoGridSquare$ILighting {}
  /** @customConstructor IModelAttachmentOwner.new */
  export class IModelAttachmentOwner extends zombie.scripting.objects.IModelAttachmentOwner {}
  /** @customConstructor IModelCamera.new */
  export class IModelCamera extends zombie.core.opengl.IModelCamera {}
  /** @customConstructor IMovable.new */
  export class IMovable extends zombie.network.fields.IMovable {}
  /** @customConstructor INetworkPacket.new */
  export class INetworkPacket extends zombie.network.packets.INetworkPacket {}
  /** @customConstructor IOScript.new */
  export class IOScript extends zombie.scripting.entity.components.crafting.CraftRecipe$IOScript {}
  /** @customConstructor IPooledObject.new */
  export class IPooledObject extends zombie.util.IPooledObject {}
  /** @customConstructor IReplace.new */
  export class IReplace extends zombie.text.templating.IReplace {}
  /** @customConstructor IReplaceProvider.new */
  export class IReplaceProvider extends zombie.text.templating.IReplaceProvider {}
  /** @customConstructor IShaderProgramListener.new */
  export class IShaderProgramListener extends zombie.core.opengl.IShaderProgramListener {}
  /** @customConstructor IStatePermissions.new */
  export class IStatePermissions extends zombie.ai.permission.IStatePermissions {}
  /** @customConstructor ITemplateBuilder.new */
  export class ITemplateBuilder extends zombie.text.templating.ITemplateBuilder {}
  /** @customConstructor ITexture.new */
  export class ITexture extends zombie.interfaces.ITexture {}
  /** @customConstructor IVersionHash.new */
  export class IVersionHash extends zombie.world.scripts.IVersionHash {}
  /** @customConstructor IWorldMapStyleFilter.new */
  export class IWorldMapStyleFilter extends zombie.worldMap.styles.WorldMapStyleLayer$IWorldMapStyleFilter {}
  /** @customConstructor IWorldMapSymbolListener.new */
  export class IWorldMapSymbolListener extends zombie.worldMap.symbols.IWorldMapSymbolListener {}
  /** @customConstructor IWorldRegion.new */
  export class IWorldRegion extends zombie.iso.areas.isoregion.regions.IWorldRegion {}
  /** @customConstructor IdleState.new */
  export class IdleState extends zombie.ai.states.IdleState {}
  /** @customConstructor ImageData.new */
  export class ImageData extends zombie.core.textures.ImageData {}
  /** @customConstructor ImageDataFrame.new */
  export class ImageDataFrame extends zombie.core.textures.ImageDataFrame {}
  /** @customConstructor ImagePyramid.new */
  export class ImagePyramid extends zombie.worldMap.ImagePyramid {}
  /** @customConstructor ImmutableArray.new */
  export class ImmutableArray extends zombie.entity.util.ImmutableArray<any> {}
  /** @customConstructor ImmutableColor.new */
  export class ImmutableColor extends zombie.core.ImmutableColor {}
  /** @customConstructor Imposter.new */
  export class Imposter extends zombie.characters.Imposter {}
  /** @customConstructor ImprovedFog.new */
  export class ImprovedFog extends zombie.iso.weather.fog.ImprovedFog {}
  /** @customConstructor ImprovedFogDrawer.new */
  export class ImprovedFogDrawer extends zombie.iso.weather.fog.ImprovedFogDrawer {}
  /** @customConstructor Input.new */
  export class Input extends zombie.core.input.Input {}
  /** @customConstructor InputFlag.new */
  export class InputFlag extends zombie.entity.components.crafting.InputFlag {}
  /** @customConstructor InputItemNode.new */
  export class InputItemNode extends zombie.entity.components.crafting.recipe.HandcraftLogic$InputItemNode {}
  /** @customConstructor InputScript.new */
  export class InputScript extends zombie.scripting.entity.components.crafting.InputScript {}
  /** @customConstructor InputScriptData.new */
  export class InputScriptData extends zombie.entity.components.crafting.recipe.CraftRecipeData$InputScriptData {}
  /** @customConstructor InstancedBuffer.new */
  export class InstancedBuffer extends zombie.core.rendering.InstancedBuffer {}
  /** @customConstructor Int.new */
  export class Int extends zombie.entity.components.attributes.AttributeType$Int {}
  /** @customConstructor IntegerConfigOption.new */
  export class IntegerConfigOption extends zombie.config.IntegerConfigOption {}
  /** @customConstructor IntegerDebugOption.new */
  export class IntegerDebugOption extends zombie.gameStates.DebugChunkState$IntegerDebugOption {}
  /** @customConstructor IntegerSandboxOption.new */
  export class IntegerSandboxOption extends zombie.SandboxOptions$IntegerSandboxOption {}
  /** @customConstructor IntegerServerOption.new */
  export class IntegerServerOption extends zombie.network.ServerOptions$IntegerServerOption {}
  /** @customConstructor InventoryContainer.new */
  export class InventoryContainer extends zombie.inventory.types.InventoryContainer {}
  /** @customConstructor InventoryItem.new */
  export class InventoryItem extends zombie.inventory.InventoryItem {}
  /** @customConstructor Invokers.new */
  export class Invokers extends zombie.util.lambda.Invokers {}
  /** @customConstructor IsoAnim.new */
  export class IsoAnim extends zombie.iso.sprite.IsoAnim {}
  /** @customConstructor IsoAnimal.new */
  export class IsoAnimal extends zombie.characters.animals.IsoAnimal {}
  /** @customConstructor IsoAnimalTrack.new */
  export class IsoAnimalTrack extends zombie.iso.objects.IsoAnimalTrack {}
  /** @customConstructor IsoBarbecue.new */
  export class IsoBarbecue extends zombie.iso.objects.IsoBarbecue {}
  /** @customConstructor IsoBarricade.new */
  export class IsoBarricade extends zombie.iso.objects.IsoBarricade {}
  /** @customConstructor IsoBrokenGlass.new */
  export class IsoBrokenGlass extends zombie.iso.objects.IsoBrokenGlass {}
  /** @customConstructor IsoBuilding.new */
  export class IsoBuilding extends zombie.iso.areas.IsoBuilding {}
  /** @customConstructor IsoButcherHook.new */
  export class IsoButcherHook extends zombie.iso.IsoButcherHook {}
  /** @customConstructor IsoCamera.new */
  export class IsoCamera extends zombie.iso.IsoCamera {}
  /** @customConstructor IsoCarBatteryCharger.new */
  export class IsoCarBatteryCharger extends zombie.iso.objects.IsoCarBatteryCharger {}
  /** @customConstructor IsoCell.new */
  export class IsoCell extends zombie.iso.IsoCell {}
  /** @customConstructor IsoChunk.new */
  export class IsoChunk extends zombie.iso.IsoChunk {}
  /** @customConstructor IsoChunkLevel.new */
  export class IsoChunkLevel extends zombie.iso.IsoChunkLevel {}
  /** @customConstructor IsoChunkMap.new */
  export class IsoChunkMap extends zombie.iso.IsoChunkMap {}
  /** @customConstructor IsoChunkRegion.new */
  export class IsoChunkRegion extends zombie.iso.areas.isoregion.regions.IsoChunkRegion {}
  /** @customConstructor IsoClothingDryer.new */
  export class IsoClothingDryer extends zombie.iso.objects.IsoClothingDryer {}
  /** @customConstructor IsoClothingWasher.new */
  export class IsoClothingWasher extends zombie.iso.objects.IsoClothingWasher {}
  /** @customConstructor IsoCombinationWasherDryer.new */
  export class IsoCombinationWasherDryer extends zombie.iso.objects.IsoCombinationWasherDryer {}
  /** @customConstructor IsoCompost.new */
  export class IsoCompost extends zombie.iso.objects.IsoCompost {}
  /** @customConstructor IsoCurtain.new */
  export class IsoCurtain extends zombie.iso.objects.IsoCurtain {}
  /** @customConstructor IsoDeadBody.new */
  export class IsoDeadBody extends zombie.iso.objects.IsoDeadBody {}
  /** @customConstructor IsoDeadBodyOG.new */
  export class IsoDeadBodyOG extends zombie.debug.options.Multiplayer$DebugFlagsOG$IsoDeadBodyOG {}
  /** @customConstructor IsoDirectionFrame.new */
  export class IsoDirectionFrame extends zombie.iso.sprite.IsoDirectionFrame {}
  /** @customConstructor IsoDirectionSet.new */
  export class IsoDirectionSet extends zombie.iso.IsoDirectionSet {}
  /** @customConstructor IsoDirections.new */
  export class IsoDirections extends zombie.iso.IsoDirections {}
  /** @customConstructor IsoDoor.new */
  export class IsoDoor extends zombie.iso.objects.IsoDoor {}
  /** @customConstructor IsoDummyCameraCharacter.new */
  export class IsoDummyCameraCharacter extends zombie.characters.IsoDummyCameraCharacter {}
  /** @customConstructor IsoFeedingTrough.new */
  export class IsoFeedingTrough extends zombie.iso.objects.IsoFeedingTrough {}
  /** @customConstructor IsoFire.new */
  export class IsoFire extends zombie.iso.objects.IsoFire {}
  /** @customConstructor IsoFireManager.new */
  export class IsoFireManager extends zombie.iso.objects.IsoFireManager {}
  /** @customConstructor IsoFireplace.new */
  export class IsoFireplace extends zombie.iso.objects.IsoFireplace {}
  /** @customConstructor IsoFlagType.new */
  export class IsoFlagType extends zombie.iso.SpriteDetails.IsoFlagType {}
  /** @customConstructor IsoGameCharacter.new */
  export class IsoGameCharacter extends zombie.characters.IsoGameCharacter {}
  /** @customConstructor IsoGameCharacterOG.new */
  export class IsoGameCharacterOG extends zombie.debug.options.Multiplayer$DebugFlagsOG$IsoGameCharacterOG {}
  /** @customConstructor IsoGenerator.new */
  export class IsoGenerator extends zombie.iso.objects.IsoGenerator {}
  /** @customConstructor IsoGridOcclusionData.new */
  export class IsoGridOcclusionData extends zombie.iso.IsoGridOcclusionData {}
  /** @customConstructor IsoGridSquare.new */
  export class IsoGridSquare extends zombie.iso.IsoGridSquare {}
  /** @customConstructor IsoGridSquareCollisionData.new */
  export class IsoGridSquareCollisionData extends zombie.iso.IsoGridSquareCollisionData {}
  /** @customConstructor IsoHeatSource.new */
  export class IsoHeatSource extends zombie.iso.IsoHeatSource {}
  /** @customConstructor IsoHutch.new */
  export class IsoHutch extends zombie.iso.objects.IsoHutch {}
  /** @customConstructor IsoJukebox.new */
  export class IsoJukebox extends zombie.iso.objects.IsoJukebox {}
  /** @customConstructor IsoLightSource.new */
  export class IsoLightSource extends zombie.iso.IsoLightSource {}
  /** @customConstructor IsoLightSwitch.new */
  export class IsoLightSwitch extends zombie.iso.objects.IsoLightSwitch {}
  /** @customConstructor IsoLivingCharacter.new */
  export class IsoLivingCharacter extends zombie.characters.IsoLivingCharacter {}
  /** @customConstructor IsoLot.new */
  export class IsoLot extends zombie.iso.IsoLot {}
  /** @customConstructor IsoLuaMover.new */
  export class IsoLuaMover extends zombie.iso.IsoLuaMover {}
  /** @customConstructor IsoMannequin.new */
  export class IsoMannequin extends zombie.iso.objects.IsoMannequin {}
  /** @customConstructor IsoMarker.new */
  export class IsoMarker extends zombie.iso.IsoMarkers$IsoMarker {}
  /** @customConstructor IsoMarkers.new */
  export class IsoMarkers extends zombie.iso.IsoMarkers {}
  /** @customConstructor IsoMetaCell.new */
  export class IsoMetaCell extends zombie.iso.IsoMetaCell {}
  /** @customConstructor IsoMetaChunk.new */
  export class IsoMetaChunk extends zombie.iso.IsoMetaChunk {}
  /** @customConstructor IsoMetaGrid.new */
  export class IsoMetaGrid extends zombie.iso.IsoMetaGrid {}
  /** @customConstructor IsoMolotovCocktail.new */
  export class IsoMolotovCocktail extends zombie.iso.objects.IsoMolotovCocktail {}
  /** @customConstructor IsoMovingObject.new */
  export class IsoMovingObject extends zombie.iso.IsoMovingObject {}
  /** @customConstructor IsoObject.new */
  export class IsoObject extends zombie.iso.IsoObject {}
  /** @customConstructor IsoObjectFactory.new */
  export class IsoObjectFactory extends zombie.iso.IsoObject$IsoObjectFactory {}
  /** @customConstructor IsoObjectPicker.new */
  export class IsoObjectPicker extends zombie.iso.IsoObjectPicker {}
  /** @customConstructor IsoObjectType.new */
  export class IsoObjectType extends zombie.iso.SpriteDetails.IsoObjectType {}
  /** @customConstructor IsoPlayer.new */
  export class IsoPlayer extends zombie.characters.IsoPlayer {}
  /** @customConstructor IsoPuddles.new */
  export class IsoPuddles extends zombie.iso.IsoPuddles {}
  /** @customConstructor IsoPuddlesGeometry.new */
  export class IsoPuddlesGeometry extends zombie.iso.IsoPuddlesGeometry {}
  /** @customConstructor IsoPushableObject.new */
  export class IsoPushableObject extends zombie.iso.IsoPushableObject {}
  /** @customConstructor IsoRadio.new */
  export class IsoRadio extends zombie.iso.objects.IsoRadio {}
  /** @customConstructor IsoRainSplash.new */
  export class IsoRainSplash extends zombie.iso.objects.IsoRainSplash {}
  /** @customConstructor IsoRaindrop.new */
  export class IsoRaindrop extends zombie.iso.objects.IsoRaindrop {}
  /** @customConstructor IsoRegionLog.new */
  export class IsoRegionLog extends zombie.iso.areas.isoregion.IsoRegionsLogger$IsoRegionLog {}
  /** @customConstructor IsoRegionLogType.new */
  export class IsoRegionLogType extends zombie.iso.areas.isoregion.IsoRegionLogType {}
  /** @customConstructor IsoRegions.new */
  export class IsoRegions extends zombie.iso.areas.isoregion.IsoRegions {}
  /** @customConstructor IsoRegionsLogger.new */
  export class IsoRegionsLogger extends zombie.iso.areas.isoregion.IsoRegionsLogger {}
  /** @customConstructor IsoRegionsRenderer.new */
  export class IsoRegionsRenderer extends zombie.iso.areas.isoregion.IsoRegionsRenderer {}
  /** @customConstructor IsoRoom.new */
  export class IsoRoom extends zombie.iso.areas.IsoRoom {}
  /** @customConstructor IsoRoomLight.new */
  export class IsoRoomLight extends zombie.iso.IsoRoomLight {}
  /** @customConstructor IsoSprite.new */
  export class IsoSprite extends zombie.iso.sprite.IsoSprite {}
  /** @customConstructor IsoSpriteGrid.new */
  export class IsoSpriteGrid extends zombie.iso.sprite.IsoSpriteGrid {}
  /** @customConstructor IsoSpriteInstance.new */
  export class IsoSpriteInstance extends zombie.iso.sprite.IsoSpriteInstance {}
  /** @customConstructor IsoSpriteManager.new */
  export class IsoSpriteManager extends zombie.iso.sprite.IsoSpriteManager {}
  /** @customConstructor IsoStackedWasherDryer.new */
  export class IsoStackedWasherDryer extends zombie.iso.objects.IsoStackedWasherDryer {}
  /** @customConstructor IsoStove.new */
  export class IsoStove extends zombie.iso.objects.IsoStove {}
  /** @customConstructor IsoSurvivor.new */
  export class IsoSurvivor extends zombie.characters.IsoSurvivor {}
  /** @customConstructor IsoTelevision.new */
  export class IsoTelevision extends zombie.iso.objects.IsoTelevision {}
  /** @customConstructor IsoThumpable.new */
  export class IsoThumpable extends zombie.iso.objects.IsoThumpable {}
  /** @customConstructor IsoTrap.new */
  export class IsoTrap extends zombie.iso.objects.IsoTrap {}
  /** @customConstructor IsoTree.new */
  export class IsoTree extends zombie.iso.objects.IsoTree {}
  /** @customConstructor IsoUtils.new */
  export class IsoUtils extends zombie.iso.IsoUtils {}
  /** @customConstructor IsoWaterGeometry.new */
  export class IsoWaterGeometry extends zombie.iso.IsoWaterGeometry {}
  /** @customConstructor IsoWaveSignal.new */
  export class IsoWaveSignal extends zombie.iso.objects.IsoWaveSignal {}
  /** @customConstructor IsoWeatherFX.new */
  export class IsoWeatherFX extends zombie.iso.weather.fx.IsoWeatherFX {}
  /** @customConstructor IsoWheelieBin.new */
  export class IsoWheelieBin extends zombie.iso.objects.IsoWheelieBin {}
  /** @customConstructor IsoWindow.new */
  export class IsoWindow extends zombie.iso.objects.IsoWindow {}
  /** @customConstructor IsoWindowFrame.new */
  export class IsoWindowFrame extends zombie.iso.objects.IsoWindowFrame {}
  /** @customConstructor IsoWorld.new */
  export class IsoWorld extends zombie.iso.IsoWorld {}
  /** @customConstructor IsoWorldInventoryObject.new */
  export class IsoWorldInventoryObject extends zombie.iso.objects.IsoWorldInventoryObject {}
  /** @customConstructor IsoWorldRegion.new */
  export class IsoWorldRegion extends zombie.iso.areas.isoregion.regions.IsoWorldRegion {}
  /** @customConstructor IsoZombie.new */
  export class IsoZombie extends zombie.characters.IsoZombie {}
  /** @customConstructor IsoZombieGiblets.new */
  export class IsoZombieGiblets extends zombie.iso.objects.IsoZombieGiblets {}
  /** @customConstructor Item.new */
  export class Item extends zombie.scripting.objects.Item {}
  /** @customConstructor ItemApplyMode.new */
  export class ItemApplyMode extends zombie.entity.components.crafting.ItemApplyMode {}
  /** @customConstructor ItemConfig.new */
  export class ItemConfig extends zombie.scripting.itemConfig.ItemConfig {}
  /** @customConstructor ItemConfigException.new */
  export class ItemConfigException extends zombie.scripting.itemConfig.ItemConfig$ItemConfigException {}
  /** @customConstructor ItemContainer.new */
  export class ItemContainer extends zombie.inventory.ItemContainer {}
  /** @customConstructor ItemDataList.new */
  export class ItemDataList extends zombie.entity.components.crafting.recipe.ItemDataList {}
  /** @customConstructor ItemFilter.new */
  export class ItemFilter extends zombie.inventory.ItemFilter {}
  /** @customConstructor ItemFilterScript.new */
  export class ItemFilterScript extends zombie.scripting.objects.ItemFilterScript {}
  /** @customConstructor ItemPickInfo.new */
  export class ItemPickInfo extends zombie.inventory.ItemPickInfo {}
  /** @customConstructor ItemPickerContainer.new */
  export class ItemPickerContainer extends zombie.inventory.ItemPickerJava$ItemPickerContainer {}
  /** @customConstructor ItemPickerItem.new */
  export class ItemPickerItem extends zombie.inventory.ItemPickerJava$ItemPickerItem {}
  /** @customConstructor ItemPickerJava.new */
  export class ItemPickerJava extends zombie.inventory.ItemPickerJava {}
  /** @customConstructor ItemPickerRoom.new */
  export class ItemPickerRoom extends zombie.inventory.ItemPickerJava$ItemPickerRoom {}
  /** @customConstructor ItemPickerUpgradeWeapons.new */
  export class ItemPickerUpgradeWeapons extends zombie.inventory.ItemPickerJava$ItemPickerUpgradeWeapons {}
  /** @customConstructor ItemRecipe.new */
  export class ItemRecipe extends zombie.scripting.objects.ItemRecipe {}
  /** @customConstructor ItemReplacement.new */
  export class ItemReplacement extends zombie.scripting.objects.ItemReplacement {}
  /** @customConstructor ItemSpawner.new */
  export class ItemSpawner extends zombie.inventory.ItemSpawner {}
  /** @customConstructor ItemState.new */
  export class ItemState extends zombie.core.znet.SteamWorkshopItem$ItemState {}
  /** @customConstructor ItemType.new */
  export class ItemType extends zombie.inventory.ItemType {}
  /** @customConstructor ItemVisual.new */
  export class ItemVisual extends zombie.core.skinnedmodel.visual.ItemVisual {}
  /** @customConstructor ItemVisuals.new */
  export class ItemVisuals extends zombie.core.skinnedmodel.visual.ItemVisuals {}
  /** @customConstructor Iterator.new */
  export class Iterator extends java.util.Iterator<any> {}
  /** @customConstructor JobType.new */
  export class JobType extends zombie.iso.IsoChunk$JobType {}
  /** @customConstructor JoinType.new */
  export class JoinType extends zombie.vehicles.ClipperOffset$JoinType {}
  /** @customConstructor Joypad.new */
  export class Joypad extends zombie.input.JoypadManager$Joypad {}
  /** @customConstructor JoypadManager.new */
  export class JoypadManager extends zombie.input.JoypadManager {}
  /** @customConstructor KahluaUtil.new */
  export class KahluaUtil extends se.krka.kahlua.vm.KahluaUtil {}
  /** @customConstructor Key.new */
  export class Key extends zombie.inventory.types.Key {}
  /** @customConstructor KeyNamer.new */
  export class KeyNamer extends zombie.inventory.ItemPickerJava$KeyNamer {}
  /** @customConstructor KeyRing.new */
  export class KeyRing extends zombie.inventory.types.KeyRing {}
  /** @customConstructor Keyboard.new */
  export class Keyboard extends org.lwjglx.input.Keyboard {}
  /** @customConstructor Keyframe.new */
  export class Keyframe extends zombie.core.skinnedmodel.animation.Keyframe {}
  /** @customConstructor KnownBlockedEdges.new */
  export class KnownBlockedEdges extends zombie.ai.KnownBlockedEdges {}
  /** @customConstructor Landscape.new */
  export class Landscape extends zombie.iso.worldgen.biomes.BiomeType$Landscape {}
  /** @customConstructor Language.new */
  export class Language extends zombie.core.Language {}
  /** @customConstructor Layout.new */
  export class Layout extends zombie.ui.ObjectTooltip$Layout {}
  /** @customConstructor LayoutItem.new */
  export class LayoutItem extends zombie.ui.ObjectTooltip$LayoutItem {}
  /** @customConstructor LightBar.new */
  export class LightBar extends zombie.scripting.objects.VehicleScript$LightBar {}
  /** @customConstructor LightInfo.new */
  export class LightInfo extends zombie.characters.IsoGameCharacter$LightInfo {}
  /** @customConstructor Lighting.new */
  export class Lighting extends zombie.iso.IsoGridSquare$Lighting {}
  /** @customConstructor Line.new */
  export class Line extends zombie.iso.WorldMarkers$Line {}
  /** @customConstructor LinkedHashMap.new */
  export class LinkedHashMap extends java.util.LinkedHashMap<any, any> {}
  /** @customConstructor LinkedList.new */
  export class LinkedList extends java.util.LinkedList<any> {}
  /** @customConstructor Literature.new */
  export class Literature extends zombie.inventory.types.Literature {}
  /** @customConstructor LiveAnimNode.new */
  export class LiveAnimNode extends zombie.core.skinnedmodel.advancedanimation.LiveAnimNode {}
  /** @customConstructor LoadingQueueState.new */
  export class LoadingQueueState extends zombie.gameStates.LoadingQueueState {}
  /** @customConstructor Location.new */
  export class Location extends zombie.characters.IsoGameCharacter$Location {}
  /** @customConstructor LogSeverity.new */
  export class LogSeverity extends zombie.debug.LogSeverity {}
  /** @customConstructor Long.new */
  export class Long extends zombie.entity.components.attributes.AttributeInstance$Long {}
  /** @customConstructor LosUtil.new */
  export class LosUtil extends zombie.iso.LosUtil {}
  /** @customConstructor LotHeader.new */
  export class LotHeader extends zombie.iso.LotHeader {}
  /** @customConstructor LuaCall.new */
  export class LuaCall extends zombie.entity.components.lua.LuaComponent$LuaCall {}
  /** @customConstructor LuaComponent.new */
  export class LuaComponent extends zombie.entity.components.lua.LuaComponent {}
  /** @customConstructor LuaComponentScript.new */
  export class LuaComponentScript extends zombie.scripting.entity.components.lua.LuaComponentScript {}
  /** @customConstructor LuaEnvironment.new */
  export class LuaEnvironment extends zombie.vehicles.EditVehicleState$LuaEnvironment {}
  /** @customConstructor LuaEventManager.new */
  export class LuaEventManager extends zombie.Lua.LuaEventManager {}
  /** @customConstructor LuaFileWriter.new */
  export class LuaFileWriter extends zombie.Lua.LuaManager$GlobalObject$LuaFileWriter {}
  /** @customConstructor LuaManager.new */
  export class LuaManager extends zombie.Lua.LuaManager {}
  /** @customConstructor LuaTimedAction.new */
  export class LuaTimedAction extends zombie.characters.CharacterTimedActions.LuaTimedAction {}
  /** @customConstructor LuaTimedActionNew.new */
  export class LuaTimedActionNew extends zombie.characters.CharacterTimedActions.LuaTimedActionNew {}
  /** @customConstructor LungeState.new */
  export class LungeState extends zombie.ai.states.LungeState {}
  /** @customConstructor MPClientStatistic.new */
  export class MPClientStatistic extends zombie.core.raknet.UdpConnection$MPClientStatistic {}
  /** @customConstructor MainScreenState.new */
  export class MainScreenState extends zombie.gameStates.MainScreenState {}
  /** @customConstructor MannequinScript.new */
  export class MannequinScript extends zombie.scripting.objects.MannequinScript {}
  /** @customConstructor MannequinZone.new */
  export class MannequinZone extends zombie.iso.objects.IsoMannequin$MannequinZone {}
  /** @customConstructor Map.new */
  export class Map extends zombie.SandboxOptions$Map {}
  /** @customConstructor MapFiles.new */
  export class MapFiles extends zombie.iso.MapFiles {}
  /** @customConstructor MapGroups.new */
  export class MapGroups extends zombie.MapGroups {}
  /** @customConstructor MapItem.new */
  export class MapItem extends zombie.inventory.types.MapItem {}
  /** @customConstructor MapKnowledge.new */
  export class MapKnowledge extends zombie.ai.MapKnowledge {}
  /** @customConstructor MapObjects.new */
  export class MapObjects extends zombie.Lua.MapObjects {}
  /** @customConstructor MashingLogic.new */
  export class MashingLogic extends zombie.entity.components.crafting.MashingLogic {}
  /** @customConstructor MashingLogicScript.new */
  export class MashingLogicScript extends zombie.scripting.entity.components.crafting.MashingLogicScript {}
  /** @customConstructor Mask.new */
  export class Mask extends zombie.core.textures.Mask {}
  /** @customConstructor MasterVolume.new */
  export class MasterVolume extends zombie.audio.GameSound$MasterVolume {}
  /** @customConstructor Material.new */
  export class Material extends zombie.audio.parameters.ParameterMeleeHitSurface$Material {}
  /** @customConstructor MaterialType.new */
  export class MaterialType extends zombie.iso.enums.MaterialType {}
  /** @customConstructor Math.new */
  export class Math extends java.lang.Math {}
  /** @customConstructor Matrix4fObjectPool.new */
  export class Matrix4fObjectPool extends zombie.vehicles.BaseVehicle$Matrix4fObjectPool {}
  /** @customConstructor MediaData.new */
  export class MediaData extends zombie.radio.media.MediaData {}
  /** @customConstructor MediaLineData.new */
  export class MediaLineData extends zombie.radio.media.MediaData$MediaLineData {}
  /** @customConstructor MediaNameSorter.new */
  export class MediaNameSorter extends zombie.radio.media.RecordedMedia$MediaNameSorter {}
  /** @customConstructor MeshAssetParams.new */
  export class MeshAssetParams extends zombie.core.skinnedmodel.model.ModelMesh$MeshAssetParams {}
  /** @customConstructor MetaCell.new */
  export class MetaCell extends zombie.iso.IsoWorld$MetaCell {}
  /** @customConstructor MetaCellPresence.new */
  export class MetaCellPresence extends zombie.iso.enums.MetaCellPresence {}
  /** @customConstructor MetaEntity.new */
  export class MetaEntity extends zombie.entity.MetaEntity {}
  /** @customConstructor MetaObject.new */
  export class MetaObject extends zombie.iso.MetaObject {}
  /** @customConstructor MetaTagComponent.new */
  export class MetaTagComponent extends zombie.entity.meta.MetaTagComponent {}
  /** @customConstructor Metabolics.new */
  export class Metabolics extends zombie.characters.BodyDamage.Metabolics {}
  /** @customConstructor MinMaxPosition.new */
  export class MinMaxPosition extends zombie.vehicles.BaseVehicle$MinMaxPosition {}
  /** @customConstructor MipMapLevel.new */
  export class MipMapLevel extends zombie.core.textures.MipMapLevel {}
  /** @customConstructor Mod.new */
  export class Mod extends zombie.gameStates.ChooseGameInfo$Mod {}
  /** @customConstructor ModAnimations.new */
  export class ModAnimations extends zombie.core.skinnedmodel.ModelManager$ModAnimations {}
  /** @customConstructor ModData.new */
  export class ModData extends zombie.world.moddata.ModData {}
  /** @customConstructor ModalDialog.new */
  export class ModalDialog extends zombie.ui.ModalDialog {}
  /** @customConstructor Model.new */
  export class Model extends zombie.core.skinnedmodel.model.Model {}
  /** @customConstructor ModelAssetParams.new */
  export class ModelAssetParams extends zombie.core.skinnedmodel.model.Model$ModelAssetParams {}
  /** @customConstructor ModelAttachment.new */
  export class ModelAttachment extends zombie.scripting.objects.ModelAttachment {}
  /** @customConstructor ModelInfo.new */
  export class ModelInfo extends zombie.vehicles.BaseVehicle$ModelInfo {}
  /** @customConstructor ModelInstance.new */
  export class ModelInstance extends zombie.core.skinnedmodel.model.ModelInstance {}
  /** @customConstructor ModelInstanceRenderData.new */
  export class ModelInstanceRenderData extends zombie.core.skinnedmodel.model.ModelInstanceRenderData {}
  /** @customConstructor ModelInstanceRenderDataList.new */
  export class ModelInstanceRenderDataList extends zombie.core.skinnedmodel.model.ModelInstanceRenderDataList {}
  /** @customConstructor ModelInstanceTextureCreator.new */
  export class ModelInstanceTextureCreator extends zombie.core.skinnedmodel.model.ModelInstanceTextureCreator {}
  /** @customConstructor ModelInstanceTextureInitializer.new */
  export class ModelInstanceTextureInitializer extends zombie.core.skinnedmodel.model.ModelInstanceTextureInitializer {}
  /** @customConstructor ModelManager.new */
  export class ModelManager extends zombie.core.skinnedmodel.ModelManager {}
  /** @customConstructor ModelMesh.new */
  export class ModelMesh extends zombie.core.skinnedmodel.model.ModelMesh {}
  /** @customConstructor ModelScript.new */
  export class ModelScript extends zombie.scripting.objects.ModelScript {}
  /** @customConstructor ModelSlot.new */
  export class ModelSlot extends zombie.core.skinnedmodel.ModelManager$ModelSlot {}
  /** @customConstructor ModelSlotRenderData.new */
  export class ModelSlotRenderData extends zombie.core.skinnedmodel.model.ModelSlotRenderData {}
  /** @customConstructor ModelWeaponPart.new */
  export class ModelWeaponPart extends zombie.scripting.objects.ModelWeaponPart {}
  /** @customConstructor Moodle.new */
  export class Moodle extends zombie.characters.Moodles.Moodle {}
  /** @customConstructor MoodleType.new */
  export class MoodleType extends zombie.characters.Moodles.MoodleType {}
  /** @customConstructor Moodles.new */
  export class Moodles extends zombie.characters.Moodles.Moodles {}
  /** @customConstructor MoodlesUI.new */
  export class MoodlesUI extends zombie.ui.MoodlesUI {}
  /** @customConstructor MostTested.new */
  export class MostTested extends zombie.core.properties.PropertyContainer$MostTested {}
  /** @customConstructor Mouse.new */
  export class Mouse extends zombie.input.Mouse {}
  /** @customConstructor MovableRecipe.new */
  export class MovableRecipe extends zombie.scripting.objects.MovableRecipe {}
  /** @customConstructor MoveDeltaModifiers.new */
  export class MoveDeltaModifiers extends zombie.characters.MoveDeltaModifiers {}
  /** @customConstructor Moveable.new */
  export class Moveable extends zombie.inventory.types.Moveable {}
  /** @customConstructor MovementType.new */
  export class MovementType extends zombie.audio.parameters.ParameterCharacterMovementSpeed$MovementType {}
  /** @customConstructor Mover.new */
  export class Mover extends zombie.ai.astar.Mover {}
  /** @customConstructor MultiStageBuilding.new */
  export class MultiStageBuilding extends zombie.iso.MultiStageBuilding {}
  /** @customConstructor Multiplayer.new */
  export class Multiplayer extends zombie.debug.options.Multiplayer {}
  /** @customConstructor MultiplierConfig.new */
  export class MultiplierConfig extends zombie.SandboxOptions$MultiplierConfig {}
  /** @customConstructor MusicIntensityConfig.new */
  export class MusicIntensityConfig extends zombie.audio.MusicIntensityConfig {}
  /** @customConstructor MusicIntensityEvent.new */
  export class MusicIntensityEvent extends zombie.audio.MusicIntensityEvent {}
  /** @customConstructor MusicIntensityEvents.new */
  export class MusicIntensityEvents extends zombie.audio.MusicIntensityEvents {}
  /** @customConstructor MusicThreatConfig.new */
  export class MusicThreatConfig extends zombie.audio.MusicThreatConfig {}
  /** @customConstructor MusicThreatStatus.new */
  export class MusicThreatStatus extends zombie.audio.MusicThreatStatus {}
  /** @customConstructor MusicThreatStatuses.new */
  export class MusicThreatStatuses extends zombie.audio.MusicThreatStatuses {}
  /** @customConstructor NPCData.new */
  export class NPCData extends zombie.pathfind.PathFindBehavior2$NPCData {}
  /** @customConstructor NestBox.new */
  export class NestBox extends zombie.iso.objects.IsoHutch$NestBox {}
  /** @customConstructor NetTimedAction.new */
  export class NetTimedAction extends zombie.core.NetTimedAction {}
  /** @customConstructor NetTimedActionPacket.new */
  export class NetTimedActionPacket extends zombie.network.packets.NetTimedActionPacket {}
  /** @customConstructor NetworkAIParams.new */
  export class NetworkAIParams extends zombie.network.NetworkAIParams {}
  /** @customConstructor NetworkCharacterAI.new */
  export class NetworkCharacterAI extends zombie.characters.NetworkCharacterAI {}
  /** @customConstructor NetworkTeleport.new */
  export class NetworkTeleport extends zombie.characters.NetworkTeleport {}
  /** @customConstructor NetworkTeleportDebug.new */
  export class NetworkTeleportDebug extends zombie.characters.NetworkTeleport$NetworkTeleportDebug {}
  /** @customConstructor NetworkUser.new */
  export class NetworkUser extends zombie.characters.NetworkUser {}
  /** @customConstructor NewHealthPanel.new */
  export class NewHealthPanel extends zombie.ui.NewHealthPanel {}
  /** @customConstructor NineGridTexture.new */
  export class NineGridTexture extends zombie.chat.NineGridTexture {}
  /** @customConstructor NoCircleStencilShader.new */
  export class NoCircleStencilShader extends zombie.iso.IsoGridSquare$NoCircleStencilShader {}
  /** @customConstructor NodeLayerPair.new */
  export class NodeLayerPair extends zombie.core.utils.TransitionNodeProxy$NodeLayerPair {}
  /** @customConstructor NonBlockingHashMap.new */
  export class NonBlockingHashMap extends zombie.core.Collections.NonBlockingHashMap<any, any> {}
  /** @customConstructor NonPvpZone.new */
  export class NonPvpZone extends zombie.iso.areas.NonPvpZone {}
  /** @customConstructor Numeric.new */
  export class Numeric extends zombie.entity.components.attributes.AttributeType$Numeric<any, any> {}
  /** @customConstructor Nutrition.new */
  export class Nutrition extends zombie.characters.BodyDamage.Nutrition {}
  /** @customConstructor OSValidator.new */
  export class OSValidator extends zombie.GameWindow$OSValidator {}
  /** @customConstructor ObjectAmbientEmitters.new */
  export class ObjectAmbientEmitters extends zombie.audio.ObjectAmbientEmitters {}
  /** @customConstructor ObjectDebuggerLua.new */
  export class ObjectDebuggerLua extends zombie.debug.objects.ObjectDebuggerLua {}
  /** @customConstructor ObjectID.new */
  export class ObjectID extends zombie.network.id.ObjectID {}
  /** @customConstructor ObjectInfo.new */
  export class ObjectInfo extends zombie.entity.components.spriteconfig.SpriteConfigManager$ObjectInfo {}
  /** @customConstructor ObjectPool.new */
  export class ObjectPool extends zombie.popman.ObjectPool<any> {}
  /** @customConstructor ObjectRenderEffects.new */
  export class ObjectRenderEffects extends zombie.iso.objects.ObjectRenderEffects {}
  /** @customConstructor ObjectRenderInfo.new */
  export class ObjectRenderInfo extends zombie.iso.fboRenderChunk.ObjectRenderInfo {}
  /** @customConstructor ObjectTooltip.new */
  export class ObjectTooltip extends zombie.ui.ObjectTooltip {}
  /** @customConstructor Observation.new */
  export class Observation extends zombie.characters.traits.ObservationFactory$Observation {}
  /** @customConstructor ObservationFactory.new */
  export class ObservationFactory extends zombie.characters.traits.ObservationFactory {}
  /** @customConstructor ObserverCallback.new */
  export class ObserverCallback extends zombie.asset.Asset$ObserverCallback {}
  /** @customConstructor OccluderType.new */
  export class OccluderType extends zombie.iso.IsoGridOcclusionData$OccluderType {}
  /** @customConstructor OcclusionFilter.new */
  export class OcclusionFilter extends zombie.iso.IsoGridOcclusionData$OcclusionFilter {}
  /** @customConstructor OnceEvery.new */
  export class OnceEvery extends zombie.core.utils.OnceEvery {}
  /** @customConstructor OpenWindowState.new */
  export class OpenWindowState extends zombie.ai.states.OpenWindowState {}
  /** @customConstructor OreLevel.new */
  export class OreLevel extends zombie.iso.worldgen.biomes.BiomeType$OreLevel {}
  /** @customConstructor OrphanStructures.new */
  export class OrphanStructures extends zombie.iso.fboRenderChunk.FBORenderCutaways$OrphanStructures {}
  /** @customConstructor Outfit.new */
  export class Outfit extends zombie.core.skinnedmodel.population.Outfit {}
  /** @customConstructor OutlineShader.new */
  export class OutlineShader extends zombie.iso.IsoObject$OutlineShader {}
  /** @customConstructor OutputEntree.new */
  export class OutputEntree extends zombie.entity.components.crafting.recipe.OutputMapper$OutputEntree {}
  /** @customConstructor OutputFlag.new */
  export class OutputFlag extends zombie.entity.components.crafting.OutputFlag {}
  /** @customConstructor OutputMapper.new */
  export class OutputMapper extends zombie.entity.components.crafting.recipe.OutputMapper {}
  /** @customConstructor OutputScript.new */
  export class OutputScript extends zombie.scripting.entity.components.crafting.OutputScript {}
  /** @customConstructor OutputScriptData.new */
  export class OutputScriptData extends zombie.entity.components.crafting.recipe.CraftRecipeData$OutputScriptData {}
  /** @customConstructor Ownership.new */
  export class Ownership extends zombie.popman.Ownership {}
  /** @customConstructor PVPEvent.new */
  export class PVPEvent extends zombie.network.PVPLogTool$PVPEvent {}
  /** @customConstructor PVPLogTool.new */
  export class PVPLogTool extends zombie.network.PVPLogTool {}
  /** @customConstructor PZArrayList.new */
  export class PZArrayList extends zombie.util.list.PZArrayList<any> {}
  /** @customConstructor PZCalendar.new */
  export class PZCalendar extends zombie.util.PZCalendar {}
  /** @customConstructor PZFileformat.new */
  export class PZFileformat extends zombie.core.textures.Texture$PZFileformat {}
  /** @customConstructor PZMath.new */
  export class PZMath extends zombie.core.math.PZMath {}
  /** @customConstructor PZUnmodifiableList.new */
  export class PZUnmodifiableList extends zombie.util.list.PZUnmodifiableList<any> {}
  /** @customConstructor PackFile.new */
  export class PackFile extends zombie.gameStates.ChooseGameInfo$PackFile {}
  /** @customConstructor PacketGroup.new */
  export class PacketGroup extends zombie.entity.network.PacketGroup {}
  /** @customConstructor PacketType.new */
  export class PacketType extends zombie.network.PacketTypes$PacketType {}
  /** @customConstructor ParameterCharacterMovementSpeed.new */
  export class ParameterCharacterMovementSpeed extends zombie.audio.parameters.ParameterCharacterMovementSpeed {}
  /** @customConstructor ParameterTypes.new */
  export class ParameterTypes extends zombie.core.rendering.ShaderParameter$ParameterTypes {}
  /** @customConstructor Params0.new */
  export class Params0 extends zombie.util.lambda.Invokers$Params0 {}
  /** @customConstructor Params1.new */
  export class Params1 extends zombie.util.lambda.Invokers$Params1 {}
  /** @customConstructor Params2.new */
  export class Params2 extends zombie.util.lambda.Invokers$Params2 {}
  /** @customConstructor Params3.new */
  export class Params3 extends zombie.util.lambda.Invokers$Params3 {}
  /** @customConstructor Params4.new */
  export class Params4 extends zombie.util.lambda.Invokers$Params4 {}
  /** @customConstructor Params5.new */
  export class Params5 extends zombie.util.lambda.Invokers$Params5 {}
  /** @customConstructor Part.new */
  export class Part extends zombie.core.skinnedmodel.model.CharacterMask$Part {}
  /** @customConstructor Parts.new */
  export class Parts extends zombie.entity.components.parts.Parts {}
  /** @customConstructor PartsScript.new */
  export class PartsScript extends zombie.scripting.entity.components.parts.PartsScript {}
  /** @customConstructor Passenger.new */
  export class Passenger extends zombie.scripting.objects.VehicleScript$Passenger {}
  /** @customConstructor Path.new */
  export class Path extends zombie.ai.astar.Path {}
  /** @customConstructor PathFindBehavior2.new */
  export class PathFindBehavior2 extends zombie.pathfind.PathFindBehavior2 {}
  /** @customConstructor PathFindState.new */
  export class PathFindState extends zombie.ai.states.PathFindState {}
  /** @customConstructor PathFindState2.new */
  export class PathFindState2 extends zombie.pathfind.PathFindState2 {}
  /** @customConstructor PathNode.new */
  export class PathNode extends zombie.pathfind.PathNode {}
  /** @customConstructor PerObjectLogic.new */
  export class PerObjectLogic extends zombie.audio.ObjectAmbientEmitters$PerObjectLogic {}
  /** @customConstructor PerPlayerRender.new */
  export class PerPlayerRender extends zombie.iso.IsoCell$PerPlayerRender {}
  /** @customConstructor PerformanceProfileProbe.new */
  export class PerformanceProfileProbe extends zombie.core.profiling.PerformanceProfileProbe {}
  /** @customConstructor PerformanceSettings.new */
  export class PerformanceSettings extends zombie.core.PerformanceSettings {}
  /** @customConstructor Perk.new */
  export class Perk extends zombie.characters.skills.PerkFactory$Perk {}
  /** @customConstructor PerkFactory.new */
  export class PerkFactory extends zombie.characters.skills.PerkFactory {}
  /** @customConstructor PerkInfo.new */
  export class PerkInfo extends zombie.characters.IsoGameCharacter$PerkInfo {}
  /** @customConstructor Perks.new */
  export class Perks extends zombie.characters.skills.PerkFactory$Perks {}
  /** @customConstructor PhysicsMesh.new */
  export class PhysicsMesh extends zombie.vehicles.UI3DScene$PhysicsMesh {}
  /** @customConstructor PhysicsShape.new */
  export class PhysicsShape extends zombie.scripting.objects.VehicleScript$PhysicsShape {}
  /** @customConstructor PhysicsShapeScript.new */
  export class PhysicsShapeScript extends zombie.scripting.objects.PhysicsShapeScript {}
  /** @customConstructor Plane.new */
  export class Plane extends zombie.tileDepth.TileGeometryFile$Plane {}
  /** @customConstructor PlaneObjectPool.new */
  export class PlaneObjectPool extends zombie.vehicles.UI3DScene$PlaneObjectPool {}
  /** @customConstructor Plant.new */
  export class Plant extends zombie.iso.worldgen.biomes.BiomeType$Plant {}
  /** @customConstructor PlayerActionsState.new */
  export class PlayerActionsState extends zombie.ai.states.PlayerActionsState {}
  /** @customConstructor PlayerAimState.new */
  export class PlayerAimState extends zombie.ai.states.PlayerAimState {}
  /** @customConstructor PlayerCamera.new */
  export class PlayerCamera extends zombie.iso.PlayerCamera {}
  /** @customConstructor PlayerData.new */
  export class PlayerData extends zombie.core.skinnedmodel.model.ModelInstance$PlayerData {}
  /** @customConstructor PlayerEmoteState.new */
  export class PlayerEmoteState extends zombie.ai.states.PlayerEmoteState {}
  /** @customConstructor PlayerExtState.new */
  export class PlayerExtState extends zombie.ai.states.PlayerExtState {}
  /** @customConstructor PlayerFallDownState.new */
  export class PlayerFallDownState extends zombie.ai.states.PlayerFallDownState {}
  /** @customConstructor PlayerFallingState.new */
  export class PlayerFallingState extends zombie.ai.states.PlayerFallingState {}
  /** @customConstructor PlayerGetUpState.new */
  export class PlayerGetUpState extends zombie.ai.states.PlayerGetUpState {}
  /** @customConstructor PlayerHitReactionPVPState.new */
  export class PlayerHitReactionPVPState extends zombie.ai.states.PlayerHitReactionPVPState {}
  /** @customConstructor PlayerHitReactionState.new */
  export class PlayerHitReactionState extends zombie.ai.states.PlayerHitReactionState {}
  /** @customConstructor PlayerHomingPoint.new */
  export class PlayerHomingPoint extends zombie.iso.WorldMarkers$PlayerHomingPoint {}
  /** @customConstructor PlayerKnockedDown.new */
  export class PlayerKnockedDown extends zombie.ai.states.PlayerKnockedDown {}
  /** @customConstructor PlayerOnGroundState.new */
  export class PlayerOnGroundState extends zombie.ai.states.PlayerOnGroundState {}
  /** @customConstructor PlayerPacket.new */
  export class PlayerPacket extends zombie.network.packets.character.PlayerPacket {}
  /** @customConstructor PlayerRenderSettings.new */
  export class PlayerRenderSettings extends zombie.core.opengl.RenderSettings$PlayerRenderSettings {}
  /** @customConstructor PlayerSearchMode.new */
  export class PlayerSearchMode extends zombie.iso.SearchMode$PlayerSearchMode {}
  /** @customConstructor PlayerSitOnFurnitureState.new */
  export class PlayerSitOnFurnitureState extends zombie.ai.states.PlayerSitOnFurnitureState {}
  /** @customConstructor PlayerSitOnGroundState.new */
  export class PlayerSitOnGroundState extends zombie.ai.states.PlayerSitOnGroundState {}
  /** @customConstructor PlayerStrafeState.new */
  export class PlayerStrafeState extends zombie.ai.states.PlayerStrafeState {}
  /** @customConstructor Point.new */
  export class Point extends zombie.iso.WorldMarkers$Point {}
  /** @customConstructor PointOfInterest.new */
  export class PointOfInterest extends zombie.iso.fboRenderChunk.FBORenderCutaways$PointOfInterest {}
  /** @customConstructor PointOnPath.new */
  export class PointOnPath extends zombie.pathfind.PathFindBehavior2$PointOnPath {}
  /** @customConstructor PoisonEffect.new */
  export class PoisonEffect extends zombie.entity.components.fluids.PoisonEffect {}
  /** @customConstructor PoisonInfo.new */
  export class PoisonInfo extends zombie.entity.components.fluids.PoisonInfo {}
  /** @customConstructor Polygon.new */
  export class Polygon extends zombie.tileDepth.TileGeometryFile$Polygon {}
  /** @customConstructor PolygonEditor.new */
  export class PolygonEditor extends zombie.vehicles.UI3DScene$PolygonEditor {}
  /** @customConstructor Pool.new */
  export class Pool extends zombie.util.Pool<any> {}
  /** @customConstructor PoolReference.new */
  export class PoolReference extends zombie.util.Pool$PoolReference {}
  /** @customConstructor PoolStacks.new */
  export class PoolStacks extends zombie.util.Pool$PoolStacks {}
  /** @customConstructor Position.new */
  export class Position extends zombie.scripting.objects.VehicleScript$Position {}
  /** @customConstructor Position3D.new */
  export class Position3D extends zombie.characters.Position3D {}
  /** @customConstructor Predicate.new */
  export class Predicate extends zombie.entity.util.Predicate<any> {}
  /** @customConstructor PredicateIterable.new */
  export class PredicateIterable extends zombie.entity.util.Predicate$PredicateIterable<any> {}
  /** @customConstructor PredicateIterator.new */
  export class PredicateIterator extends zombie.entity.util.Predicate$PredicateIterator<any> {}
  /** @customConstructor PredictionTypes.new */
  export class PredictionTypes extends zombie.network.NetworkVariables$PredictionTypes {}
  /** @customConstructor PresetEntry.new */
  export class PresetEntry extends zombie.radio.devices.PresetEntry {}
  /** @customConstructor ProceduralItem.new */
  export class ProceduralItem extends zombie.inventory.ItemPickerJava$ProceduralItem {}
  /** @customConstructor Profession.new */
  export class Profession extends zombie.characters.professions.ProfessionFactory$Profession {}
  /** @customConstructor ProfessionFactory.new */
  export class ProfessionFactory extends zombie.characters.professions.ProfessionFactory {}
  /** @customConstructor PropertyContainer.new */
  export class PropertyContainer extends zombie.core.properties.PropertyContainer {}
  /** @customConstructor PuddlesDirection.new */
  export class PuddlesDirection extends zombie.iso.IsoGridSquare$PuddlesDirection {}
  /** @customConstructor PuddlesFloat.new */
  export class PuddlesFloat extends zombie.iso.IsoPuddles$PuddlesFloat {}
  /** @customConstructor PyramidTexture.new */
  export class PyramidTexture extends zombie.worldMap.ImagePyramid$PyramidTexture {}
  /** @customConstructor QuadConsumer.new */
  export class QuadConsumer extends zombie.util.lambda.QuadConsumer<any, any, any, any> {}
  /** @customConstructor QuaternionfObjectPool.new */
  export class QuaternionfObjectPool extends zombie.vehicles.BaseVehicle$QuaternionfObjectPool {}
  /** @customConstructor QueuedEvent.new */
  export class QueuedEvent extends zombie.Lua.LuaEventManager$QueuedEvent {}
  /** @customConstructor RBBar.new */
  export class RBBar extends zombie.randomizedWorld.randomizedBuilding.RBBar {}
  /** @customConstructor RBBarn.new */
  export class RBBarn extends zombie.randomizedWorld.randomizedBuilding.RBBarn {}
  /** @customConstructor RBBasic.new */
  export class RBBasic extends zombie.randomizedWorld.randomizedBuilding.RBBasic {}
  /** @customConstructor RBBurnt.new */
  export class RBBurnt extends zombie.randomizedWorld.randomizedBuilding.RBBurnt {}
  /** @customConstructor RBBurntCorpse.new */
  export class RBBurntCorpse extends zombie.randomizedWorld.randomizedBuilding.RBBurntCorpse {}
  /** @customConstructor RBBurntFireman.new */
  export class RBBurntFireman extends zombie.randomizedWorld.randomizedBuilding.RBBurntFireman {}
  /** @customConstructor RBCafe.new */
  export class RBCafe extends zombie.randomizedWorld.randomizedBuilding.RBCafe {}
  /** @customConstructor RBClinic.new */
  export class RBClinic extends zombie.randomizedWorld.randomizedBuilding.RBClinic {}
  /** @customConstructor RBDorm.new */
  export class RBDorm extends zombie.randomizedWorld.randomizedBuilding.RBDorm {}
  /** @customConstructor RBGunstoreSiege.new */
  export class RBGunstoreSiege extends zombie.randomizedWorld.randomizedBuilding.RBGunstoreSiege {}
  /** @customConstructor RBHairSalon.new */
  export class RBHairSalon extends zombie.randomizedWorld.randomizedBuilding.RBHairSalon {}
  /** @customConstructor RBHeatBreakAfternoon.new */
  export class RBHeatBreakAfternoon extends zombie.randomizedWorld.randomizedBuilding.RBHeatBreakAfternoon {}
  /** @customConstructor RBJackieJaye.new */
  export class RBJackieJaye extends zombie.randomizedWorld.randomizedBuilding.RBJackieJaye {}
  /** @customConstructor RBJoanHartford.new */
  export class RBJoanHartford extends zombie.randomizedWorld.randomizedBuilding.RBJoanHartford {}
  /** @customConstructor RBJudge.new */
  export class RBJudge extends zombie.randomizedWorld.randomizedBuilding.RBJudge {}
  /** @customConstructor RBKateAndBaldspot.new */
  export class RBKateAndBaldspot extends zombie.randomizedWorld.randomizedBuilding.RBKateAndBaldspot {}
  /** @customConstructor RBLooted.new */
  export class RBLooted extends zombie.randomizedWorld.randomizedBuilding.RBLooted {}
  /** @customConstructor RBMayorWestPoint.new */
  export class RBMayorWestPoint extends zombie.randomizedWorld.randomizedBuilding.RBMayorWestPoint {}
  /** @customConstructor RBNolans.new */
  export class RBNolans extends zombie.randomizedWorld.randomizedBuilding.RBNolans {}
  /** @customConstructor RBOffice.new */
  export class RBOffice extends zombie.randomizedWorld.randomizedBuilding.RBOffice {}
  /** @customConstructor RBOther.new */
  export class RBOther extends zombie.randomizedWorld.randomizedBuilding.RBOther {}
  /** @customConstructor RBPileOCrepe.new */
  export class RBPileOCrepe extends zombie.randomizedWorld.randomizedBuilding.RBPileOCrepe {}
  /** @customConstructor RBPizzaWhirled.new */
  export class RBPizzaWhirled extends zombie.randomizedWorld.randomizedBuilding.RBPizzaWhirled {}
  /** @customConstructor RBPoliceSiege.new */
  export class RBPoliceSiege extends zombie.randomizedWorld.randomizedBuilding.RBPoliceSiege {}
  /** @customConstructor RBReverend.new */
  export class RBReverend extends zombie.randomizedWorld.randomizedBuilding.RBReverend {}
  /** @customConstructor RBSafehouse.new */
  export class RBSafehouse extends zombie.randomizedWorld.randomizedBuilding.RBSafehouse {}
  /** @customConstructor RBSchool.new */
  export class RBSchool extends zombie.randomizedWorld.randomizedBuilding.RBSchool {}
  /** @customConstructor RBShopLooted.new */
  export class RBShopLooted extends zombie.randomizedWorld.randomizedBuilding.RBShopLooted {}
  /** @customConstructor RBSpiffo.new */
  export class RBSpiffo extends zombie.randomizedWorld.randomizedBuilding.RBSpiffo {}
  /** @customConstructor RBStripclub.new */
  export class RBStripclub extends zombie.randomizedWorld.randomizedBuilding.RBStripclub {}
  /** @customConstructor RBTrashed.new */
  export class RBTrashed extends zombie.randomizedWorld.randomizedBuilding.RBTrashed {}
  /** @customConstructor RBTwiggy.new */
  export class RBTwiggy extends zombie.randomizedWorld.randomizedBuilding.RBTwiggy {}
  /** @customConstructor RBWoodcraft.new */
  export class RBWoodcraft extends zombie.randomizedWorld.randomizedBuilding.RBWoodcraft {}
  /** @customConstructor RDSBandPractice.new */
  export class RDSBandPractice extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSBandPractice {}
  /** @customConstructor RDSBanditRaid.new */
  export class RDSBanditRaid extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSBanditRaid {}
  /** @customConstructor RDSBathroomZed.new */
  export class RDSBathroomZed extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSBathroomZed {}
  /** @customConstructor RDSBedroomZed.new */
  export class RDSBedroomZed extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSBedroomZed {}
  /** @customConstructor RDSBleach.new */
  export class RDSBleach extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSBleach {}
  /** @customConstructor RDSCorpsePsycho.new */
  export class RDSCorpsePsycho extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSCorpsePsycho {}
  /** @customConstructor RDSDeadDrunk.new */
  export class RDSDeadDrunk extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSDeadDrunk {}
  /** @customConstructor RDSDevouredByRats.new */
  export class RDSDevouredByRats extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSDevouredByRats {}
  /** @customConstructor RDSFootballNight.new */
  export class RDSFootballNight extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSFootballNight {}
  /** @customConstructor RDSGrouchos.new */
  export class RDSGrouchos extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSGrouchos {}
  /** @customConstructor RDSGunmanInBathroom.new */
  export class RDSGunmanInBathroom extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSGunmanInBathroom {}
  /** @customConstructor RDSGunslinger.new */
  export class RDSGunslinger extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSGunslinger {}
  /** @customConstructor RDSHenDo.new */
  export class RDSHenDo extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSHenDo {}
  /** @customConstructor RDSHockeyPsycho.new */
  export class RDSHockeyPsycho extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSHockeyPsycho {}
  /** @customConstructor RDSHouseParty.new */
  export class RDSHouseParty extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSHouseParty {}
  /** @customConstructor RDSPokerNight.new */
  export class RDSPokerNight extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSPokerNight {}
  /** @customConstructor RDSPoliceAtHouse.new */
  export class RDSPoliceAtHouse extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSPoliceAtHouse {}
  /** @customConstructor RDSPrisonEscape.new */
  export class RDSPrisonEscape extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSPrisonEscape {}
  /** @customConstructor RDSPrisonEscapeWithPolice.new */
  export class RDSPrisonEscapeWithPolice extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSPrisonEscapeWithPolice {}
  /** @customConstructor RDSRPGNight.new */
  export class RDSRPGNight extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSRPGNight {}
  /** @customConstructor RDSRatInfested.new */
  export class RDSRatInfested extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSRatInfested {}
  /** @customConstructor RDSRatKing.new */
  export class RDSRatKing extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSRatKing {}
  /** @customConstructor RDSRatWar.new */
  export class RDSRatWar extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSRatWar {}
  /** @customConstructor RDSResourceGarage.new */
  export class RDSResourceGarage extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSResourceGarage {}
  /** @customConstructor RDSSkeletonPsycho.new */
  export class RDSSkeletonPsycho extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSSkeletonPsycho {}
  /** @customConstructor RDSSpecificProfession.new */
  export class RDSSpecificProfession extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSSpecificProfession {}
  /** @customConstructor RDSStagDo.new */
  export class RDSStagDo extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSStagDo {}
  /** @customConstructor RDSStudentNight.new */
  export class RDSStudentNight extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSStudentNight {}
  /** @customConstructor RDSSuicidePact.new */
  export class RDSSuicidePact extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSSuicidePact {}
  /** @customConstructor RDSTinFoilHat.new */
  export class RDSTinFoilHat extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSTinFoilHat {}
  /** @customConstructor RDSZombieLockedBathroom.new */
  export class RDSZombieLockedBathroom extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSZombieLockedBathroom {}
  /** @customConstructor RDSZombiesEating.new */
  export class RDSZombiesEating extends zombie.randomizedWorld.randomizedDeadSurvivor.RDSZombiesEating {}
  /** @customConstructor RGBAf.new */
  export class RGBAf extends zombie.worldMap.styles.WorldMapStyleLayer$RGBAf {}
  /** @customConstructor RVSAmbulanceCrash.new */
  export class RVSAmbulanceCrash extends zombie.randomizedWorld.randomizedVehicleStory.RVSAmbulanceCrash {}
  /** @customConstructor RVSAnimalOnRoad.new */
  export class RVSAnimalOnRoad extends zombie.randomizedWorld.randomizedVehicleStory.RVSAnimalOnRoad {}
  /** @customConstructor RVSAnimalTrailerOnRoad.new */
  export class RVSAnimalTrailerOnRoad extends zombie.randomizedWorld.randomizedVehicleStory.RVSAnimalTrailerOnRoad {}
  /** @customConstructor RVSBanditRoad.new */
  export class RVSBanditRoad extends zombie.randomizedWorld.randomizedVehicleStory.RVSBanditRoad {}
  /** @customConstructor RVSBurntCar.new */
  export class RVSBurntCar extends zombie.randomizedWorld.randomizedVehicleStory.RVSBurntCar {}
  /** @customConstructor RVSCarCrash.new */
  export class RVSCarCrash extends zombie.randomizedWorld.randomizedVehicleStory.RVSCarCrash {}
  /** @customConstructor RVSCarCrashCorpse.new */
  export class RVSCarCrashCorpse extends zombie.randomizedWorld.randomizedVehicleStory.RVSCarCrashCorpse {}
  /** @customConstructor RVSCarCrashDeer.new */
  export class RVSCarCrashDeer extends zombie.randomizedWorld.randomizedVehicleStory.RVSCarCrashDeer {}
  /** @customConstructor RVSChangingTire.new */
  export class RVSChangingTire extends zombie.randomizedWorld.randomizedVehicleStory.RVSChangingTire {}
  /** @customConstructor RVSConstructionSite.new */
  export class RVSConstructionSite extends zombie.randomizedWorld.randomizedVehicleStory.RVSConstructionSite {}
  /** @customConstructor RVSCrashHorde.new */
  export class RVSCrashHorde extends zombie.randomizedWorld.randomizedVehicleStory.RVSCrashHorde {}
  /** @customConstructor RVSDeadEnd.new */
  export class RVSDeadEnd extends zombie.randomizedWorld.randomizedVehicleStory.RVSDeadEnd {}
  /** @customConstructor RVSFlippedCrash.new */
  export class RVSFlippedCrash extends zombie.randomizedWorld.randomizedVehicleStory.RVSFlippedCrash {}
  /** @customConstructor RVSHerdOnRoad.new */
  export class RVSHerdOnRoad extends zombie.randomizedWorld.randomizedVehicleStory.RVSHerdOnRoad {}
  /** @customConstructor RVSPlonkies.new */
  export class RVSPlonkies extends zombie.randomizedWorld.randomizedVehicleStory.RVSPlonkies {}
  /** @customConstructor RVSPoliceBlockade.new */
  export class RVSPoliceBlockade extends zombie.randomizedWorld.randomizedVehicleStory.RVSPoliceBlockade {}
  /** @customConstructor RVSPoliceBlockadeShooting.new */
  export class RVSPoliceBlockadeShooting extends zombie.randomizedWorld.randomizedVehicleStory.RVSPoliceBlockadeShooting {}
  /** @customConstructor RVSRegionalProfessionVehicle.new */
  export class RVSRegionalProfessionVehicle extends zombie.randomizedWorld.randomizedVehicleStory.RVSRegionalProfessionVehicle {}
  /** @customConstructor RVSRichJerk.new */
  export class RVSRichJerk extends zombie.randomizedWorld.randomizedVehicleStory.RVSRichJerk {}
  /** @customConstructor RVSRoadKill.new */
  export class RVSRoadKill extends zombie.randomizedWorld.randomizedVehicleStory.RVSRoadKill {}
  /** @customConstructor RVSRoadKillSmall.new */
  export class RVSRoadKillSmall extends zombie.randomizedWorld.randomizedVehicleStory.RVSRoadKillSmall {}
  /** @customConstructor RVSTrailerCrash.new */
  export class RVSTrailerCrash extends zombie.randomizedWorld.randomizedVehicleStory.RVSTrailerCrash {}
  /** @customConstructor RVSUtilityVehicle.new */
  export class RVSUtilityVehicle extends zombie.randomizedWorld.randomizedVehicleStory.RVSUtilityVehicle {}
  /** @customConstructor RZJackieJaye.new */
  export class RZJackieJaye extends zombie.randomizedWorld.randomizedZoneStory.RZJackieJaye {}
  /** @customConstructor RZSAttachedAnimal.new */
  export class RZSAttachedAnimal extends zombie.randomizedWorld.randomizedZoneStory.RZSAttachedAnimal {}
  /** @customConstructor RZSBBQParty.new */
  export class RZSBBQParty extends zombie.randomizedWorld.randomizedZoneStory.RZSBBQParty {}
  /** @customConstructor RZSBaseball.new */
  export class RZSBaseball extends zombie.randomizedWorld.randomizedZoneStory.RZSBaseball {}
  /** @customConstructor RZSBeachParty.new */
  export class RZSBeachParty extends zombie.randomizedWorld.randomizedZoneStory.RZSBeachParty {}
  /** @customConstructor RZSBurntWreck.new */
  export class RZSBurntWreck extends zombie.randomizedWorld.randomizedZoneStory.RZSBurntWreck {}
  /** @customConstructor RZSBuryingCamp.new */
  export class RZSBuryingCamp extends zombie.randomizedWorld.randomizedZoneStory.RZSBuryingCamp {}
  /** @customConstructor RZSCampsite.new */
  export class RZSCampsite extends zombie.randomizedWorld.randomizedZoneStory.RZSCampsite {}
  /** @customConstructor RZSCharcoalBurner.new */
  export class RZSCharcoalBurner extends zombie.randomizedWorld.randomizedZoneStory.RZSCharcoalBurner {}
  /** @customConstructor RZSDean.new */
  export class RZSDean extends zombie.randomizedWorld.randomizedZoneStory.RZSDean {}
  /** @customConstructor RZSDuke.new */
  export class RZSDuke extends zombie.randomizedWorld.randomizedZoneStory.RZSDuke {}
  /** @customConstructor RZSEscapedAnimal.new */
  export class RZSEscapedAnimal extends zombie.randomizedWorld.randomizedZoneStory.RZSEscapedAnimal {}
  /** @customConstructor RZSEscapedHerd.new */
  export class RZSEscapedHerd extends zombie.randomizedWorld.randomizedZoneStory.RZSEscapedHerd {}
  /** @customConstructor RZSFishingTrip.new */
  export class RZSFishingTrip extends zombie.randomizedWorld.randomizedZoneStory.RZSFishingTrip {}
  /** @customConstructor RZSForestCamp.new */
  export class RZSForestCamp extends zombie.randomizedWorld.randomizedZoneStory.RZSForestCamp {}
  /** @customConstructor RZSForestCampEaten.new */
  export class RZSForestCampEaten extends zombie.randomizedWorld.randomizedZoneStory.RZSForestCampEaten {}
  /** @customConstructor RZSFrankHemingway.new */
  export class RZSFrankHemingway extends zombie.randomizedWorld.randomizedZoneStory.RZSFrankHemingway {}
  /** @customConstructor RZSHermitCamp.new */
  export class RZSHermitCamp extends zombie.randomizedWorld.randomizedZoneStory.RZSHermitCamp {}
  /** @customConstructor RZSHillbillyHoedown.new */
  export class RZSHillbillyHoedown extends zombie.randomizedWorld.randomizedZoneStory.RZSHillbillyHoedown {}
  /** @customConstructor RZSHogWild.new */
  export class RZSHogWild extends zombie.randomizedWorld.randomizedZoneStory.RZSHogWild {}
  /** @customConstructor RZSHunterCamp.new */
  export class RZSHunterCamp extends zombie.randomizedWorld.randomizedZoneStory.RZSHunterCamp {}
  /** @customConstructor RZSKirstyKormick.new */
  export class RZSKirstyKormick extends zombie.randomizedWorld.randomizedZoneStory.RZSKirstyKormick {}
  /** @customConstructor RZSMurderScene.new */
  export class RZSMurderScene extends zombie.randomizedWorld.randomizedZoneStory.RZSMurderScene {}
  /** @customConstructor RZSMusicFest.new */
  export class RZSMusicFest extends zombie.randomizedWorld.randomizedZoneStory.RZSMusicFest {}
  /** @customConstructor RZSMusicFestStage.new */
  export class RZSMusicFestStage extends zombie.randomizedWorld.randomizedZoneStory.RZSMusicFestStage {}
  /** @customConstructor RZSNastyMattress.new */
  export class RZSNastyMattress extends zombie.randomizedWorld.randomizedZoneStory.RZSNastyMattress {}
  /** @customConstructor RZSOccultActivity.new */
  export class RZSOccultActivity extends zombie.randomizedWorld.randomizedZoneStory.RZSOccultActivity {}
  /** @customConstructor RZSOldFirepit.new */
  export class RZSOldFirepit extends zombie.randomizedWorld.randomizedZoneStory.RZSOldFirepit {}
  /** @customConstructor RZSOldShelter.new */
  export class RZSOldShelter extends zombie.randomizedWorld.randomizedZoneStory.RZSOldShelter {}
  /** @customConstructor RZSOrphanedFawn.new */
  export class RZSOrphanedFawn extends zombie.randomizedWorld.randomizedZoneStory.RZSOrphanedFawn {}
  /** @customConstructor RZSRangerSmith.new */
  export class RZSRangerSmith extends zombie.randomizedWorld.randomizedZoneStory.RZSRangerSmith {}
  /** @customConstructor RZSRockerParty.new */
  export class RZSRockerParty extends zombie.randomizedWorld.randomizedZoneStory.RZSRockerParty {}
  /** @customConstructor RZSSadCamp.new */
  export class RZSSadCamp extends zombie.randomizedWorld.randomizedZoneStory.RZSSadCamp {}
  /** @customConstructor RZSSexyTime.new */
  export class RZSSexyTime extends zombie.randomizedWorld.randomizedZoneStory.RZSSexyTime {}
  /** @customConstructor RZSSirTwiggy.new */
  export class RZSSirTwiggy extends zombie.randomizedWorld.randomizedZoneStory.RZSSirTwiggy {}
  /** @customConstructor RZSSurvivalistCamp.new */
  export class RZSSurvivalistCamp extends zombie.randomizedWorld.randomizedZoneStory.RZSSurvivalistCamp {}
  /** @customConstructor RZSTragicPicnic.new */
  export class RZSTragicPicnic extends zombie.randomizedWorld.randomizedZoneStory.RZSTragicPicnic {}
  /** @customConstructor RZSTrapperCamp.new */
  export class RZSTrapperCamp extends zombie.randomizedWorld.randomizedZoneStory.RZSTrapperCamp {}
  /** @customConstructor RZSVanCamp.new */
  export class RZSVanCamp extends zombie.randomizedWorld.randomizedZoneStory.RZSVanCamp {}
  /** @customConstructor RZSWasteDump.new */
  export class RZSWasteDump extends zombie.randomizedWorld.randomizedZoneStory.RZSWasteDump {}
  /** @customConstructor RZSWaterPump.new */
  export class RZSWaterPump extends zombie.randomizedWorld.randomizedZoneStory.RZSWaterPump {}
  /** @customConstructor RadarPanel.new */
  export class RadarPanel extends zombie.ui.RadarPanel {}
  /** @customConstructor RadialMenu.new */
  export class RadialMenu extends zombie.ui.RadialMenu {}
  /** @customConstructor RadialProgressBar.new */
  export class RadialProgressBar extends zombie.ui.RadialProgressBar {}
  /** @customConstructor Radio.new */
  export class Radio extends zombie.inventory.types.Radio {}
  /** @customConstructor RadioAPI.new */
  export class RadioAPI extends zombie.radio.RadioAPI {}
  /** @customConstructor RadioBroadCast.new */
  export class RadioBroadCast extends zombie.radio.scripting.RadioBroadCast {}
  /** @customConstructor RadioChannel.new */
  export class RadioChannel extends zombie.radio.scripting.RadioChannel {}
  /** @customConstructor RadioData.new */
  export class RadioData extends zombie.radio.RadioData {}
  /** @customConstructor RadioLine.new */
  export class RadioLine extends zombie.radio.scripting.RadioLine {}
  /** @customConstructor RadioScript.new */
  export class RadioScript extends zombie.radio.scripting.RadioScript {}
  /** @customConstructor RadioScriptManager.new */
  export class RadioScriptManager extends zombie.radio.scripting.RadioScriptManager {}
  /** @customConstructor RagdollAnchor.new */
  export class RagdollAnchor extends zombie.scripting.objects.RagdollAnchor {}
  /** @customConstructor RagdollBodyPart.new */
  export class RagdollBodyPart extends zombie.core.physics.RagdollBodyPart {}
  /** @customConstructor RagdollConstraint.new */
  export class RagdollConstraint extends zombie.scripting.objects.RagdollConstraint {}
  /** @customConstructor RagdollController.new */
  export class RagdollController extends zombie.core.physics.RagdollController {}
  /** @customConstructor RagdollControllerDebugRenderer.new */
  export class RagdollControllerDebugRenderer extends zombie.core.physics.RagdollControllerDebugRenderer {}
  /** @customConstructor RagdollScript.new */
  export class RagdollScript extends zombie.scripting.objects.RagdollScript {}
  /** @customConstructor RagdollSetting.new */
  export class RagdollSetting extends zombie.core.physics.RagdollSettingsManager$RagdollSetting {}
  /** @customConstructor RagdollSettingsManager.new */
  export class RagdollSettingsManager extends zombie.core.physics.RagdollSettingsManager {}
  /** @customConstructor RagdollStateData.new */
  export class RagdollStateData extends zombie.core.physics.RagdollStateData {}
  /** @customConstructor RainManager.new */
  export class RainManager extends zombie.iso.objects.RainManager {}
  /** @customConstructor RakNetPeerInterface.new */
  export class RakNetPeerInterface extends zombie.core.raknet.RakNetPeerInterface {}
  /** @customConstructor RandomData.new */
  export class RandomData extends zombie.core.skinnedmodel.population.Outfit$RandomData {}
  /** @customConstructor RandomGenerator.new */
  export class RandomGenerator extends zombie.scripting.itemConfig.RandomGenerator<any> {}
  /** @customConstructor RandomizedBuildingBase.new */
  export class RandomizedBuildingBase extends zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase {}
  /** @customConstructor RandomizedDeadSurvivorBase.new */
  export class RandomizedDeadSurvivorBase extends zombie.randomizedWorld.randomizedDeadSurvivor.RandomizedDeadSurvivorBase {}
  /** @customConstructor RandomizedVehicleStoryBase.new */
  export class RandomizedVehicleStoryBase extends zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase {}
  /** @customConstructor RandomizedWorldBase.new */
  export class RandomizedWorldBase extends zombie.randomizedWorld.RandomizedWorldBase {}
  /** @customConstructor RandomizedZoneStoryBase.new */
  export class RandomizedZoneStoryBase extends zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase {}
  /** @customConstructor Randomizer.new */
  export class Randomizer extends zombie.scripting.itemConfig.Randomizer {}
  /** @customConstructor Ray.new */
  export class Ray extends zombie.vehicles.UI3DScene$Ray {}
  /** @customConstructor RayObjectPool.new */
  export class RayObjectPool extends zombie.vehicles.UI3DScene$RayObjectPool {}
  /** @customConstructor Recipe.new */
  export class Recipe extends zombie.scripting.objects.Recipe {}
  /** @customConstructor RecipeManager.new */
  export class RecipeManager extends zombie.inventory.RecipeManager {}
  /** @customConstructor RecipeMonitor.new */
  export class RecipeMonitor extends zombie.inventory.recipemanager.RecipeMonitor {}
  /** @customConstructor RecordedMedia.new */
  export class RecordedMedia extends zombie.radio.media.RecordedMedia {}
  /** @customConstructor Remove.new */
  export class Remove extends zombie.Lua.Event$Remove {}
  /** @customConstructor RenderArgs.new */
  export class RenderArgs extends zombie.worldMap.styles.WorldMapStyleLayer$RenderArgs {}
  /** @customConstructor RenderData.new */
  export class RenderData extends zombie.core.textures.TextureDraw$RenderData {}
  /** @customConstructor RenderEffectType.new */
  export class RenderEffectType extends zombie.iso.objects.RenderEffectType {}
  /** @customConstructor RenderSettings.new */
  export class RenderSettings extends zombie.core.opengl.RenderSettings {}
  /** @customConstructor RenderTarget.new */
  export class RenderTarget extends zombie.core.rendering.RenderTarget {}
  /** @customConstructor RenderTexture.new */
  export class RenderTexture extends zombie.core.rendering.RenderTexture {}
  /** @customConstructor ReplaceProviderCharacter.new */
  export class ReplaceProviderCharacter extends zombie.text.templating.ReplaceProviderCharacter {}
  /** @customConstructor RequestState.new */
  export class RequestState extends zombie.network.GameClient$RequestState {}
  /** @customConstructor RequiredSkill.new */
  export class RequiredSkill extends zombie.scripting.entity.components.crafting.CraftRecipe$RequiredSkill {}
  /** @customConstructor Resource.new */
  export class Resource extends zombie.entity.components.resources.Resource {}
  /** @customConstructor ResourceBlueprint.new */
  export class ResourceBlueprint extends zombie.entity.components.resources.ResourceBlueprint {}
  /** @customConstructor ResourceChannel.new */
  export class ResourceChannel extends zombie.entity.components.resources.ResourceChannel {}
  /** @customConstructor ResourceEnergy.new */
  export class ResourceEnergy extends zombie.entity.components.resources.ResourceEnergy {}
  /** @customConstructor ResourceFlag.new */
  export class ResourceFlag extends zombie.entity.components.resources.ResourceFlag {}
  /** @customConstructor ResourceFluid.new */
  export class ResourceFluid extends zombie.entity.components.resources.ResourceFluid {}
  /** @customConstructor ResourceGroup.new */
  export class ResourceGroup extends zombie.entity.components.resources.ResourceGroup {}
  /** @customConstructor ResourceIO.new */
  export class ResourceIO extends zombie.entity.components.resources.ResourceIO {}
  /** @customConstructor ResourceItem.new */
  export class ResourceItem extends zombie.entity.components.resources.ResourceItem {}
  /** @customConstructor ResourceType.new */
  export class ResourceType extends zombie.entity.components.resources.ResourceType {}
  /** @customConstructor Resources.new */
  export class Resources extends zombie.entity.components.resources.Resources {}
  /** @customConstructor Result.new */
  export class Result extends zombie.scripting.objects.Recipe$Result {}
  /** @customConstructor ResultBiggestSound.new */
  export class ResultBiggestSound extends zombie.WorldSoundManager$ResultBiggestSound {}
  /** @customConstructor ResultLight.new */
  export class ResultLight extends zombie.iso.IsoGridSquare$ResultLight {}
  /** @customConstructor RingBuffer.new */
  export class RingBuffer extends zombie.core.SpriteRenderer$RingBuffer {}
  /** @customConstructor Road.new */
  export class Road extends zombie.iso.worldgen.roads.Road {}
  /** @customConstructor RoadConfig.new */
  export class RoadConfig extends zombie.iso.worldgen.roads.RoadConfig {}
  /** @customConstructor RoadDirection.new */
  export class RoadDirection extends zombie.iso.worldgen.roads.RoadDirection {}
  /** @customConstructor RoadEdge.new */
  export class RoadEdge extends zombie.iso.worldgen.roads.RoadEdge {}
  /** @customConstructor RoadGenerator.new */
  export class RoadGenerator extends zombie.iso.worldgen.roads.RoadGenerator {}
  /** @customConstructor RoadNexus.new */
  export class RoadNexus extends zombie.iso.worldgen.roads.RoadNexus {}
  /** @customConstructor Role.new */
  export class Role extends zombie.characters.Role {}
  /** @customConstructor RoofProperties.new */
  export class RoofProperties extends zombie.core.properties.RoofProperties {}
  /** @customConstructor RoomDef.new */
  export class RoomDef extends zombie.iso.RoomDef {}
  /** @customConstructor RoomRect.new */
  export class RoomRect extends zombie.iso.RoomDef$RoomRect {}
  /** @customConstructor Rule.new */
  export class Rule extends zombie.iso.worldgen.rules.Rule {}
  /** @customConstructor Rules.new */
  export class Rules extends zombie.iso.worldgen.rules.Rules {}
  /** @customConstructor RuntimeAnimationScript.new */
  export class RuntimeAnimationScript extends zombie.core.skinnedmodel.runtime.RuntimeAnimationScript {}
  /** @customConstructor SCButton.new */
  export class SCButton extends zombie.ui.SpeedControls$SCButton {}
  /** @customConstructor SDFShader.new */
  export class SDFShader extends zombie.core.opengl.SDFShader {}
  /** @customConstructor SGlobalObject.new */
  export class SGlobalObject extends zombie.globalObjects.SGlobalObject {}
  /** @customConstructor SGlobalObjectSystem.new */
  export class SGlobalObjectSystem extends zombie.globalObjects.SGlobalObjectSystem {}
  /** @customConstructor SGlobalObjects.new */
  export class SGlobalObjects extends zombie.globalObjects.SGlobalObjects {}
  /** @customConstructor SLSoundManager.new */
  export class SLSoundManager extends zombie.radio.StorySounds.SLSoundManager {}
  /** @customConstructor SafeHouse.new */
  export class SafeHouse extends zombie.iso.areas.SafeHouse {}
  /** @customConstructor Safety.new */
  export class Safety extends zombie.characters.Safety {}
  /** @customConstructor SandboxOption.new */
  export class SandboxOption extends zombie.SandboxOptions$SandboxOption {}
  /** @customConstructor SandboxOptions.new */
  export class SandboxOptions extends zombie.SandboxOptions {}
  /** @customConstructor ScreenElement.new */
  export class ScreenElement extends zombie.gameStates.MainScreenState$ScreenElement {}
  /** @customConstructor ScriptLoadMode.new */
  export class ScriptLoadMode extends zombie.scripting.ScriptLoadMode {}
  /** @customConstructor ScriptManager.new */
  export class ScriptManager extends zombie.scripting.ScriptManager {}
  /** @customConstructor ScriptModule.new */
  export class ScriptModule extends zombie.scripting.objects.ScriptModule {}
  /** @customConstructor ScriptParser.new */
  export class ScriptParser extends zombie.scripting.ScriptParser {}
  /** @customConstructor ScriptType.new */
  export class ScriptType extends zombie.scripting.ScriptType {}
  /** @customConstructor SealedFluidProperties.new */
  export class SealedFluidProperties extends zombie.entity.components.fluids.SealedFluidProperties {}
  /** @customConstructor SeamEditorState.new */
  export class SeamEditorState extends zombie.gameStates.SeamEditorState {}
  /** @customConstructor SeamFile.new */
  export class SeamFile extends zombie.seams.SeamFile {}
  /** @customConstructor SeamManager.new */
  export class SeamManager extends zombie.seams.SeamManager {}
  /** @customConstructor SearchMode.new */
  export class SearchMode extends zombie.iso.SearchMode {}
  /** @customConstructor SearchModeFloat.new */
  export class SearchModeFloat extends zombie.iso.SearchMode$SearchModeFloat {}
  /** @customConstructor Season.new */
  export class Season extends zombie.erosion.ErosionConfig$Season {}
  /** @customConstructor SeatingFile.new */
  export class SeatingFile extends zombie.seating.SeatingFile {}
  /** @customConstructor SeatingManager.new */
  export class SeatingManager extends zombie.seating.SeatingManager {}
  /** @customConstructor Seeds.new */
  export class Seeds extends zombie.erosion.ErosionConfig$Seeds {}
  /** @customConstructor SelectorBucket.new */
  export class SelectorBucket extends zombie.scripting.itemConfig.SelectorBucket {}
  /** @customConstructor SelectorBucketScript.new */
  export class SelectorBucketScript extends zombie.scripting.itemConfig.script.SelectorBucketScript {}
  /** @customConstructor SelectorType.new */
  export class SelectorType extends zombie.scripting.itemConfig.enums.SelectorType {}
  /** @customConstructor Server.new */
  export class Server extends zombie.network.Server {}
  /** @customConstructor ServerChatMessage.new */
  export class ServerChatMessage extends zombie.chat.ServerChatMessage {}
  /** @customConstructor ServerOption.new */
  export class ServerOption extends zombie.network.ServerOptions$ServerOption {}
  /** @customConstructor ServerOptions.new */
  export class ServerOptions extends zombie.network.ServerOptions {}
  /** @customConstructor ServerSettings.new */
  export class ServerSettings extends zombie.network.ServerSettings {}
  /** @customConstructor ServerSettingsManager.new */
  export class ServerSettingsManager extends zombie.network.ServerSettingsManager {}
  /** @customConstructor ServerVehicleState.new */
  export class ServerVehicleState extends zombie.vehicles.BaseVehicle$ServerVehicleState {}
  /** @customConstructor Shader.new */
  export class Shader extends zombie.core.opengl.Shader {}
  /** @customConstructor ShaderBufferData.new */
  export class ShaderBufferData extends zombie.core.rendering.ShaderBufferData {}
  /** @customConstructor ShaderParameter.new */
  export class ShaderParameter extends zombie.core.rendering.ShaderParameter {}
  /** @customConstructor ShaderProgram.new */
  export class ShaderProgram extends zombie.core.opengl.ShaderProgram {}
  /** @customConstructor ShaderPropertyBlock.new */
  export class ShaderPropertyBlock extends zombie.core.rendering.ShaderPropertyBlock {}
  /** @customConstructor ShaderUnit.new */
  export class ShaderUnit extends zombie.core.opengl.ShaderUnit {}
  /** @customConstructor ShadowParams.new */
  export class ShadowParams extends zombie.iso.objects.ShadowParams {}
  /** @customConstructor SharedDescriptors.new */
  export class SharedDescriptors extends zombie.SharedDescriptors {}
  /** @customConstructor SharedSkeleAnimationRepository.new */
  export class SharedSkeleAnimationRepository extends zombie.core.skinnedmodel.animation.sharedskele.SharedSkeleAnimationRepository {}
  /** @customConstructor SharedSkeleAnimationTrack.new */
  export class SharedSkeleAnimationTrack extends zombie.core.skinnedmodel.animation.sharedskele.SharedSkeleAnimationTrack {}
  /** @customConstructor SharedStrings.new */
  export class SharedStrings extends zombie.util.SharedStrings {}
  /** @customConstructor SharedVertexBufferObjects.new */
  export class SharedVertexBufferObjects extends zombie.core.opengl.SharedVertexBufferObjects {}
  /** @customConstructor Short.new */
  export class Short extends zombie.entity.components.attributes.AttributeInstance$Short {}
  /** @customConstructor ShortList.new */
  export class ShortList extends zombie.core.Styles.ShortList {}
  /** @customConstructor SideOfLine.new */
  export class SideOfLine extends zombie.core.math.PZMath$SideOfLine {}
  /** @customConstructor Signals.new */
  export class Signals extends zombie.entity.components.signals.Signals {}
  /** @customConstructor SignalsScript.new */
  export class SignalsScript extends zombie.scripting.entity.components.signals.SignalsScript {}
  /** @customConstructor SimpleDateFormat.new */
  export class SimpleDateFormat extends java.text.SimpleDateFormat {}
  /** @customConstructor SimulationState.new */
  export class SimulationState extends zombie.core.physics.RagdollController$SimulationState {}
  /** @customConstructor SituatedType.new */
  export class SituatedType extends zombie.scripting.itemConfig.enums.SituatedType {}
  /** @customConstructor SkeletonBone.new */
  export class SkeletonBone extends zombie.core.skinnedmodel.model.SkeletonBone {}
  /** @customConstructor Skin.new */
  export class Skin extends zombie.scripting.objects.VehicleScript$Skin {}
  /** @customConstructor Skinning.new */
  export class Skinning extends zombie.core.opengl.Shader$Skinning {}
  /** @customConstructor SkinningBone.new */
  export class SkinningBone extends zombie.core.skinnedmodel.model.SkinningBone {}
  /** @customConstructor SkinningBoneHierarchy.new */
  export class SkinningBoneHierarchy extends zombie.core.skinnedmodel.model.SkinningBoneHierarchy {}
  /** @customConstructor SkinningData.new */
  export class SkinningData extends zombie.core.skinnedmodel.model.SkinningData {}
  /** @customConstructor SleepingEvent.new */
  export class SleepingEvent extends zombie.ai.sadisticAIDirector.SleepingEvent {}
  /** @customConstructor SleepingEventData.new */
  export class SleepingEventData extends zombie.ai.sadisticAIDirector.SleepingEventData {}
  /** @customConstructor SliceY.new */
  export class SliceY extends zombie.iso.SliceY {}
  /** @customConstructor SlopedSurface.new */
  export class SlopedSurface extends zombie.iso.fboRenderChunk.FBORenderCutaways$SlopedSurface {}
  /** @customConstructor SmashWindowState.new */
  export class SmashWindowState extends zombie.ai.states.SmashWindowState {}
  /** @customConstructor Sound.new */
  export class Sound extends zombie.characters.animals.datas.AnimalBreed$Sound {}
  /** @customConstructor SoundManager.new */
  export class SoundManager extends zombie.SoundManager {}
  /** @customConstructor SoundTimelineScript.new */
  export class SoundTimelineScript extends zombie.scripting.objects.SoundTimelineScript {}
  /** @customConstructor Sounds.new */
  export class Sounds extends zombie.scripting.objects.VehicleScript$Sounds {}
  /** @customConstructor Source.new */
  export class Source extends zombie.scripting.objects.Recipe$Source {}
  /** @customConstructor SpawnOrigin.new */
  export class SpawnOrigin extends zombie.gameStates.ChooseGameInfo$SpawnOrigin {}
  /** @customConstructor SpeedChecker.new */
  export class SpeedChecker extends zombie.characters.NetworkCharacterAI$SpeedChecker {}
  /** @customConstructor SpeedControls.new */
  export class SpeedControls extends zombie.ui.SpeedControls {}
  /** @customConstructor SpriteConfig.new */
  export class SpriteConfig extends zombie.entity.components.spriteconfig.SpriteConfig {}
  /** @customConstructor SpriteConfigManager.new */
  export class SpriteConfigManager extends zombie.entity.components.spriteconfig.SpriteConfigManager {}
  /** @customConstructor SpriteConfigScript.new */
  export class SpriteConfigScript extends zombie.scripting.entity.components.spriteconfig.SpriteConfigScript {}
  /** @customConstructor SpriteModel.new */
  export class SpriteModel extends zombie.iso.SpriteModel {}
  /** @customConstructor SpriteModelEditorState.new */
  export class SpriteModelEditorState extends zombie.gameStates.SpriteModelEditorState {}
  /** @customConstructor SpriteModelManager.new */
  export class SpriteModelManager extends zombie.spriteModel.SpriteModelManager {}
  /** @customConstructor SpriteModelsFile.new */
  export class SpriteModelsFile extends zombie.iso.SpriteModelsFile {}
  /** @customConstructor SpriteRenderState.new */
  export class SpriteRenderState extends zombie.core.sprite.SpriteRenderState {}
  /** @customConstructor SpriteRenderer.new */
  export class SpriteRenderer extends zombie.core.SpriteRenderer {}
  /** @customConstructor Square.new */
  export class Square extends zombie.erosion.ErosionData$Square {}
  /** @customConstructor SquareCoord.new */
  export class SquareCoord extends zombie.iso.worldgen.utils.SquareCoord {}
  /** @customConstructor Stack.new */
  export class Stack extends java.util.Stack<any> {}
  /** @customConstructor StackTraceContainer.new */
  export class StackTraceContainer extends zombie.debug.StackTraceContainer {}
  /** @customConstructor Stage.new */
  export class Stage extends zombie.iso.MultiStageBuilding$Stage {}
  /** @customConstructor StaggerBackState.new */
  export class StaggerBackState extends zombie.ai.states.StaggerBackState {}
  /** @customConstructor StartAnimTrackParameters.new */
  export class StartAnimTrackParameters extends zombie.core.skinnedmodel.animation.StartAnimTrackParameters {}
  /** @customConstructor StartMode.new */
  export class StartMode extends zombie.entity.components.crafting.StartMode {}
  /** @customConstructor Stash.new */
  export class Stash extends zombie.core.stash.Stash {}
  /** @customConstructor StashBuilding.new */
  export class StashBuilding extends zombie.core.stash.StashBuilding {}
  /** @customConstructor StashSystem.new */
  export class StashSystem extends zombie.core.stash.StashSystem {}
  /** @customConstructor State.new */
  export class State extends zombie.asset.Asset$State {}
  /** @customConstructor StateAction.new */
  export class StateAction extends zombie.gameStates.GameStateMachine$StateAction {}
  /** @customConstructor StateEat.new */
  export class StateEat extends zombie.characters.animals.VirtualAnimalState$StateEat {}
  /** @customConstructor StateFollow.new */
  export class StateFollow extends zombie.characters.animals.VirtualAnimalState$StateFollow {}
  /** @customConstructor StateInfo.new */
  export class StateInfo extends zombie.core.skinnedmodel.advancedanimation.AnimatedModel$StateInfo {}
  /** @customConstructor StateMachine.new */
  export class StateMachine extends zombie.ai.StateMachine {}
  /** @customConstructor StateMoveFromEat.new */
  export class StateMoveFromEat extends zombie.characters.animals.VirtualAnimalState$StateMoveFromEat {}
  /** @customConstructor StateMoveFromSleep.new */
  export class StateMoveFromSleep extends zombie.characters.animals.VirtualAnimalState$StateMoveFromSleep {}
  /** @customConstructor StateMoveToEat.new */
  export class StateMoveToEat extends zombie.characters.animals.VirtualAnimalState$StateMoveToEat {}
  /** @customConstructor StateMoveToSleep.new */
  export class StateMoveToSleep extends zombie.characters.animals.VirtualAnimalState$StateMoveToSleep {}
  /** @customConstructor StateSleep.new */
  export class StateSleep extends zombie.characters.animals.VirtualAnimalState$StateSleep {}
  /** @customConstructor Stats.new */
  export class Stats extends zombie.characters.Stats {}
  /** @customConstructor SteamFriend.new */
  export class SteamFriend extends zombie.core.znet.SteamFriend {}
  /** @customConstructor SteamUGCDetails.new */
  export class SteamUGCDetails extends zombie.core.znet.SteamUGCDetails {}
  /** @customConstructor SteamWorkshopItem.new */
  export class SteamWorkshopItem extends zombie.core.znet.SteamWorkshopItem {}
  /** @customConstructor Step.new */
  export class Step extends zombie.ai.astar.Path$Step {}
  /** @customConstructor Stop.new */
  export class Stop extends zombie.worldMap.styles.WorldMapStyleLayer$Stop {}
  /** @customConstructor StoryEmitter.new */
  export class StoryEmitter extends zombie.radio.StorySounds.StoryEmitter {}
  /** @customConstructor StorySound.new */
  export class StorySound extends zombie.radio.StorySounds.StorySound {}
  /** @customConstructor StorySoundEvent.new */
  export class StorySoundEvent extends zombie.radio.StorySounds.StorySoundEvent {}
  /** @customConstructor StrLerpVal.new */
  export class StrLerpVal extends zombie.iso.weather.WeatherPeriod$StrLerpVal {}
  /** @customConstructor String.new */
  export class String extends zombie.entity.components.attributes.AttributeInstance$String {}
  /** @customConstructor StringConfigOption.new */
  export class StringConfigOption extends zombie.config.StringConfigOption {}
  /** @customConstructor StringDebugOption.new */
  export class StringDebugOption extends zombie.gameStates.DebugChunkState$StringDebugOption {}
  /** @customConstructor StringDrawer.new */
  export class StringDrawer extends zombie.ui.TextManager$StringDrawer {}
  /** @customConstructor StringListScript.new */
  export class StringListScript extends zombie.scripting.objects.StringListScript {}
  /** @customConstructor StringSandboxOption.new */
  export class StringSandboxOption extends zombie.SandboxOptions$StringSandboxOption {}
  /** @customConstructor StringServerOption.new */
  export class StringServerOption extends zombie.network.ServerOptions$StringServerOption {}
  /** @customConstructor StyleInfoScript.new */
  export class StyleInfoScript extends zombie.scripting.objects.XuiSkinScript$StyleInfoScript {}
  /** @customConstructor SubLayerSlot.new */
  export class SubLayerSlot extends zombie.core.skinnedmodel.advancedanimation.AdvancedAnimator$SubLayerSlot {}
  /** @customConstructor SubTexture.new */
  export class SubTexture extends zombie.fileSystem.FileSystem$SubTexture {}
  /** @customConstructor SubTextureInfo.new */
  export class SubTextureInfo extends zombie.core.textures.TexturePackPage$SubTextureInfo {}
  /** @customConstructor SubstateSlot.new */
  export class SubstateSlot extends zombie.ai.StateMachine$SubstateSlot {}
  /** @customConstructor SurroundVehicle.new */
  export class SurroundVehicle extends zombie.vehicles.SurroundVehicle {}
  /** @customConstructor SurvivorDesc.new */
  export class SurvivorDesc extends zombie.characters.SurvivorDesc {}
  /** @customConstructor SurvivorFactory.new */
  export class SurvivorFactory extends zombie.characters.SurvivorFactory {}
  /** @customConstructor SurvivorGroup.new */
  export class SurvivorGroup extends zombie.characters.SurvivorGroup {}
  /** @customConstructor SurvivorType.new */
  export class SurvivorType extends zombie.characters.SurvivorFactory$SurvivorType {}
  /** @customConstructor SwipeStatePlayer.new */
  export class SwipeStatePlayer extends zombie.ai.states.SwipeStatePlayer {}
  /** @customConstructor SwitchSeat.new */
  export class SwitchSeat extends zombie.scripting.objects.VehicleScript$Passenger$SwitchSeat {}
  /** @customConstructor SyncPlayerStatsPacket.new */
  export class SyncPlayerStatsPacket extends zombie.network.packets.SyncPlayerStatsPacket {}
  /** @customConstructor SystemDisabler.new */
  export class SystemDisabler extends zombie.SystemDisabler {}
  /** @customConstructor Temperature.new */
  export class Temperature extends zombie.iso.weather.Temperature {}
  /** @customConstructor TemplateText.new */
  export class TemplateText extends zombie.text.templating.TemplateText {}
  /** @customConstructor TentAmbianceLogic.new */
  export class TentAmbianceLogic extends zombie.audio.ObjectAmbientEmitters$TentAmbianceLogic {}
  /** @customConstructor TermsOfServiceState.new */
  export class TermsOfServiceState extends zombie.gameStates.TermsOfServiceState {}
  /** @customConstructor TestComponent.new */
  export class TestComponent extends zombie.entity.components.test.TestComponent {}
  /** @customConstructor TestComponentScript.new */
  export class TestComponentScript extends zombie.scripting.entity.components.test.TestComponentScript {}
  /** @customConstructor TestEnum.new */
  export class TestEnum extends zombie.entity.components.attributes.TestEnum {}
  /** @customConstructor TestResults.new */
  export class TestResults extends zombie.iso.LosUtil$TestResults {}
  /** @customConstructor TextAlign.new */
  export class TextAlign extends zombie.scripting.ui.TextAlign {}
  /** @customConstructor TextDrawHorizontal.new */
  export class TextDrawHorizontal extends zombie.ui.TextDrawHorizontal {}
  /** @customConstructor TextDrawObject.new */
  export class TextDrawObject extends zombie.ui.TextDrawObject {}
  /** @customConstructor TextManager.new */
  export class TextManager extends zombie.ui.TextManager {}
  /** @customConstructor TextServerOption.new */
  export class TextServerOption extends zombie.network.ServerOptions$TextServerOption {}
  /** @customConstructor Texture.new */
  export class Texture extends zombie.core.textures.Texture {}
  /** @customConstructor TextureAssetParams.new */
  export class TextureAssetParams extends zombie.core.textures.Texture$TextureAssetParams {}
  /** @customConstructor TextureDraw.new */
  export class TextureDraw extends zombie.core.textures.TextureDraw {}
  /** @customConstructor TextureFBO.new */
  export class TextureFBO extends zombie.core.textures.TextureFBO {}
  /** @customConstructor TextureID.new */
  export class TextureID extends zombie.core.textures.TextureID {}
  /** @customConstructor TextureIDAssetParams.new */
  export class TextureIDAssetParams extends zombie.core.textures.TextureID$TextureIDAssetParams {}
  /** @customConstructor TexturePack.new */
  export class TexturePack extends zombie.GameWindow$TexturePack {}
  /** @customConstructor TexturePackPage.new */
  export class TexturePackPage extends zombie.core.textures.TexturePackPage {}
  /** @customConstructor TexturePackTextures.new */
  export class TexturePackTextures extends zombie.fileSystem.FileSystem$TexturePackTextures {}
  /** @customConstructor TextureScaling.new */
  export class TextureScaling extends zombie.worldMap.styles.WorldMapStyleLayer$TextureScaling {}
  /** @customConstructor TextureStop.new */
  export class TextureStop extends zombie.worldMap.styles.WorldMapStyleLayer$TextureStop {}
  /** @customConstructor ThermalNode.new */
  export class ThermalNode extends zombie.characters.BodyDamage.Thermoregulator$ThermalNode {}
  /** @customConstructor Thermoregulator.new */
  export class Thermoregulator extends zombie.characters.BodyDamage.Thermoregulator {}
  /** @customConstructor ThumpState.new */
  export class ThumpState extends zombie.ai.states.ThumpState {}
  /** @customConstructor Thumpable.new */
  export class Thumpable extends zombie.iso.objects.interfaces.Thumpable {}
  /** @customConstructor ThunderCloud.new */
  export class ThunderCloud extends zombie.iso.weather.ThunderStorm$ThunderCloud {}
  /** @customConstructor ThunderStorm.new */
  export class ThunderStorm extends zombie.iso.weather.ThunderStorm {}
  /** @customConstructor Tile.new */
  export class Tile extends zombie.seams.SeamFile$Tile {}
  /** @customConstructor TileDef.new */
  export class TileDef extends zombie.gameStates.ChooseGameInfo$TileDef {}
  /** @customConstructor TileDepthTexture.new */
  export class TileDepthTexture extends zombie.tileDepth.TileDepthTexture {}
  /** @customConstructor TileDepthTextureAssignmentManager.new */
  export class TileDepthTextureAssignmentManager extends zombie.tileDepth.TileDepthTextureAssignmentManager {}
  /** @customConstructor TileDepthTextureManager.new */
  export class TileDepthTextureManager extends zombie.tileDepth.TileDepthTextureManager {}
  /** @customConstructor TileDepthTextures.new */
  export class TileDepthTextures extends zombie.tileDepth.TileDepthTextures {}
  /** @customConstructor TileGeometryFile.new */
  export class TileGeometryFile extends zombie.tileDepth.TileGeometryFile {}
  /** @customConstructor TileGeometryManager.new */
  export class TileGeometryManager extends zombie.tileDepth.TileGeometryManager {}
  /** @customConstructor TileGeometryState.new */
  export class TileGeometryState extends zombie.gameStates.TileGeometryState {}
  /** @customConstructor TileGroup.new */
  export class TileGroup extends zombie.iso.worldgen.biomes.TileGroup {}
  /** @customConstructor TileInfo.new */
  export class TileInfo extends zombie.entity.components.spriteconfig.SpriteConfigManager$TileInfo {}
  /** @customConstructor TileOverlays.new */
  export class TileOverlays extends zombie.iso.TileOverlays {}
  /** @customConstructor TileScript.new */
  export class TileScript extends zombie.scripting.entity.components.spriteconfig.SpriteConfigScript$TileScript {}
  /** @customConstructor Tiles.new */
  export class Tiles extends zombie.tileDepth.TileSeamManager$Tiles {}
  /** @customConstructor Tileset.new */
  export class Tileset extends zombie.seams.SeamFile$Tileset {}
  /** @customConstructor TilesetDepthTexture.new */
  export class TilesetDepthTexture extends zombie.tileDepth.TilesetDepthTexture {}
  /** @customConstructor Time.new */
  export class Time extends zombie.erosion.ErosionConfig$Time {}
  /** @customConstructor TimeMode.new */
  export class TimeMode extends zombie.entity.components.crafting.TimeMode {}
  /** @customConstructor TimedActionScript.new */
  export class TimedActionScript extends zombie.scripting.objects.TimedActionScript {}
  /** @customConstructor TorchInfo.new */
  export class TorchInfo extends zombie.characters.IsoGameCharacter$TorchInfo {}
  /** @customConstructor Trait.new */
  export class Trait extends zombie.characters.traits.TraitFactory$Trait {}
  /** @customConstructor TraitCollection.new */
  export class TraitCollection extends zombie.characters.traits.TraitCollection {}
  /** @customConstructor TraitFactory.new */
  export class TraitFactory extends zombie.characters.traits.TraitFactory {}
  /** @customConstructor TraitSlot.new */
  export class TraitSlot extends zombie.characters.traits.TraitCollection$TraitSlot {}
  /** @customConstructor TransactionState.new */
  export class TransactionState extends zombie.core.Transaction$TransactionState {}
  /** @customConstructor Transform.new */
  export class Transform extends zombie.core.physics.Transform {}
  /** @customConstructor TransformPool.new */
  export class TransformPool extends zombie.vehicles.BaseVehicle$TransformPool {}
  /** @customConstructor TransitionNodeProxy.new */
  export class TransitionNodeProxy extends zombie.core.utils.TransitionNodeProxy {}
  /** @customConstructor TransitionNodeProxyData.new */
  export class TransitionNodeProxyData extends zombie.core.utils.TransitionNodeProxy$TransitionNodeProxyData {}
  /** @customConstructor Translator.new */
  export class Translator extends zombie.core.Translator {}
  /** @customConstructor TransmissionNumber.new */
  export class TransmissionNumber extends zombie.vehicles.TransmissionNumber {}
  /** @customConstructor TreeAmbianceLogic.new */
  export class TreeAmbianceLogic extends zombie.audio.ObjectAmbientEmitters$TreeAmbianceLogic {}
  /** @customConstructor TreeShader.new */
  export class TreeShader extends zombie.iso.objects.IsoTree$TreeShader {}
  /** @customConstructor TreeSoundManager.new */
  export class TreeSoundManager extends zombie.audio.TreeSoundManager {}
  /** @customConstructor Trigger.new */
  export class Trigger extends zombie.iso.zones.Trigger {}
  /** @customConstructor TwistableBoneTransform.new */
  export class TwistableBoneTransform extends zombie.core.skinnedmodel.animation.TwistableBoneTransform {}
  /** @customConstructor Type.new */
  export class Type extends zombie.core.opengl.ShaderUnit$Type {}
  /** @customConstructor UI.new */
  export class UI extends zombie.entity.components.attributes.Attribute$UI {}
  /** @customConstructor UI3DModel.new */
  export class UI3DModel extends zombie.ui.UI3DModel {}
  /** @customConstructor UI3DScene.new */
  export class UI3DScene extends zombie.vehicles.UI3DScene {}
  /** @customConstructor UIDebugConsole.new */
  export class UIDebugConsole extends zombie.ui.UIDebugConsole {}
  /** @customConstructor UIElement.new */
  export class UIElement extends zombie.ui.UIElement {}
  /** @customConstructor UIElementInterface.new */
  export class UIElementInterface extends zombie.ui.UIElementInterface {}
  /** @customConstructor UIFont.new */
  export class UIFont extends zombie.ui.UIFont {}
  /** @customConstructor UIManager.new */
  export class UIManager extends zombie.ui.UIManager {}
  /** @customConstructor UINineGrid.new */
  export class UINineGrid extends zombie.ui.UINineGrid {}
  /** @customConstructor UITextBox2.new */
  export class UITextBox2 extends zombie.ui.UITextBox2 {}
  /** @customConstructor UITextEntryInterface.new */
  export class UITextEntryInterface extends zombie.ui.UITextEntryInterface {}
  /** @customConstructor UITransition.new */
  export class UITransition extends zombie.ui.UITransition {}
  /** @customConstructor UIWorldMap.new */
  export class UIWorldMap extends zombie.worldMap.UIWorldMap {}
  /** @customConstructor UIWorldMapV1.new */
  export class UIWorldMapV1 extends zombie.worldMap.UIWorldMapV1 {}
  /** @customConstructor UIWorldMapV2.new */
  export class UIWorldMapV2 extends zombie.worldMap.UIWorldMapV2 {}
  /** @customConstructor UInt4.new */
  export class UInt4 extends zombie.core.skinnedmodel.model.UInt4 {}
  /** @customConstructor UdpConnection.new */
  export class UdpConnection extends zombie.core.raknet.UdpConnection {}
  /** @customConstructor UdpEngine.new */
  export class UdpEngine extends zombie.core.raknet.UdpEngine {}
  /** @customConstructor UiConfig.new */
  export class UiConfig extends zombie.entity.components.ui.UiConfig {}
  /** @customConstructor UiConfigScript.new */
  export class UiConfigScript extends zombie.scripting.entity.components.ui.UiConfigScript {}
  /** @customConstructor Uniform.new */
  export class Uniform extends zombie.core.opengl.ShaderProgram$Uniform {}
  /** @customConstructor UniqueRecipe.new */
  export class UniqueRecipe extends zombie.scripting.objects.UniqueRecipe {}
  /** @customConstructor Updater.new */
  export class Updater extends zombie.network.BodyDamageSync$Updater {}
  /** @customConstructor Userlog.new */
  export class Userlog extends zombie.network.Userlog {}
  /** @customConstructor UserlogType.new */
  export class UserlogType extends zombie.network.Userlog$UserlogType {}
  /** @customConstructor ValidCanPerformRecipeComparator.new */
  export class ValidCanPerformRecipeComparator extends zombie.entity.components.crafting.recipe.CraftRecipeSort$ValidCanPerformRecipeComparator {}
  /** @customConstructor ValidRecipeComparator.new */
  export class ValidRecipeComparator extends zombie.entity.components.crafting.recipe.CraftRecipeSort$ValidRecipeComparator {}
  /** @customConstructor Value.new */
  export class Value extends zombie.scripting.ScriptParser$Value {}
  /** @customConstructor Vbo.new */
  export class Vbo extends zombie.core.skinnedmodel.model.VertexBufferObject$Vbo {}
  /** @customConstructor Vector.new */
  export class Vector extends java.util.Vector<any> {}
  /** @customConstructor Vector2.new */
  export class Vector2 extends zombie.iso.Vector2 {}
  /** @customConstructor Vector2ObjectPool.new */
  export class Vector2ObjectPool extends zombie.vehicles.BaseVehicle$Vector2ObjectPool {}
  /** @customConstructor Vector2fObjectPool.new */
  export class Vector2fObjectPool extends zombie.vehicles.BaseVehicle$Vector2fObjectPool {}
  /** @customConstructor Vector3.new */
  export class Vector3 extends zombie.core.math.Vector3 {}
  /** @customConstructor Vector3fObjectPool.new */
  export class Vector3fObjectPool extends zombie.vehicles.BaseVehicle$Vector3fObjectPool {}
  /** @customConstructor Vector4.new */
  export class Vector4 extends zombie.core.skinnedmodel.Vector4 {}
  /** @customConstructor Vector4fObjectPool.new */
  export class Vector4fObjectPool extends zombie.vehicles.BaseVehicle$Vector4fObjectPool {}
  /** @customConstructor VectorPosAlign.new */
  export class VectorPosAlign extends zombie.scripting.ui.VectorPosAlign {}
  /** @customConstructor VehicleDistribution.new */
  export class VehicleDistribution extends zombie.inventory.ItemPickerJava$VehicleDistribution {}
  /** @customConstructor VehicleDoor.new */
  export class VehicleDoor extends zombie.vehicles.VehicleDoor {}
  /** @customConstructor VehicleEngineRPM.new */
  export class VehicleEngineRPM extends zombie.vehicles.VehicleEngineRPM {}
  /** @customConstructor VehicleGauge.new */
  export class VehicleGauge extends zombie.ui.VehicleGauge {}
  /** @customConstructor VehicleHit.new */
  export class VehicleHit extends zombie.network.packets.hit.VehicleHit {}
  /** @customConstructor VehicleLight.new */
  export class VehicleLight extends zombie.vehicles.VehicleLight {}
  /** @customConstructor VehiclePart.new */
  export class VehiclePart extends zombie.vehicles.VehiclePart {}
  /** @customConstructor VehiclePartModel.new */
  export class VehiclePartModel extends zombie.scripting.objects.VehiclePartModel {}
  /** @customConstructor VehiclePoly.new */
  export class VehiclePoly extends zombie.pathfind.VehiclePoly {}
  /** @customConstructor VehicleScript.new */
  export class VehicleScript extends zombie.scripting.objects.VehicleScript {}
  /** @customConstructor VehicleStorySpawnData.new */
  export class VehicleStorySpawnData extends zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawnData {}
  /** @customConstructor VehicleStorySpawner.new */
  export class VehicleStorySpawner extends zombie.randomizedWorld.randomizedVehicleStory.VehicleStorySpawner {}
  /** @customConstructor VehicleTemplate.new */
  export class VehicleTemplate extends zombie.scripting.objects.VehicleTemplate {}
  /** @customConstructor VehicleType.new */
  export class VehicleType extends zombie.vehicles.VehicleType {}
  /** @customConstructor VehicleTypeDefinition.new */
  export class VehicleTypeDefinition extends zombie.vehicles.VehicleType$VehicleTypeDefinition {}
  /** @customConstructor VehicleWindow.new */
  export class VehicleWindow extends zombie.vehicles.VehicleWindow {}
  /** @customConstructor VehicleZone.new */
  export class VehicleZone extends zombie.iso.zones.VehicleZone {}
  /** @customConstructor VertexArray.new */
  export class VertexArray extends zombie.core.skinnedmodel.model.VertexBufferObject$VertexArray {}
  /** @customConstructor VertexBufferObject.new */
  export class VertexBufferObject extends zombie.core.skinnedmodel.model.VertexBufferObject {}
  /** @customConstructor VertexElement.new */
  export class VertexElement extends zombie.core.skinnedmodel.model.VertexBufferObject$VertexElement {}
  /** @customConstructor VertexFormat.new */
  export class VertexFormat extends zombie.core.skinnedmodel.model.VertexBufferObject$VertexFormat {}
  /** @customConstructor VertexPositionNormalTangentTexture.new */
  export class VertexPositionNormalTangentTexture extends zombie.core.skinnedmodel.model.VertexPositionNormalTangentTexture {}
  /** @customConstructor VertexPositionNormalTangentTextureSkin.new */
  export class VertexPositionNormalTangentTextureSkin extends zombie.core.skinnedmodel.model.VertexPositionNormalTangentTextureSkin {}
  /** @customConstructor VertexType.new */
  export class VertexType extends zombie.core.skinnedmodel.model.VertexBufferObject$VertexType {}
  /** @customConstructor VideoTexture.new */
  export class VideoTexture extends zombie.core.textures.VideoTexture {}
  /** @customConstructor VirtualAnimal.new */
  export class VirtualAnimal extends zombie.characters.animals.VirtualAnimal {}
  /** @customConstructor VirtualAnimalState.new */
  export class VirtualAnimalState extends zombie.characters.animals.VirtualAnimalState {}
  /** @customConstructor VirtualZombieManager.new */
  export class VirtualZombieManager extends zombie.VirtualZombieManager {}
  /** @customConstructor VisibilityPolygon2.new */
  export class VisibilityPolygon2 extends zombie.vispoly.VisibilityPolygon2 {}
  /** @customConstructor VisibilityWall.new */
  export class VisibilityWall extends zombie.vispoly.VisibilityPolygon2$VisibilityWall {}
  /** @customConstructor VisionResult.new */
  export class VisionResult extends zombie.iso.IsoObject$VisionResult {}
  /** @customConstructor VoiceStyle.new */
  export class VoiceStyle extends zombie.core.skinnedmodel.population.VoiceStyle {}
  /** @customConstructor VoiceStyles.new */
  export class VoiceStyles extends zombie.core.skinnedmodel.population.VoiceStyles {}
  /** @customConstructor WGChunk.new */
  export class WGChunk extends zombie.iso.worldgen.WGChunk {}
  /** @customConstructor WGParams.new */
  export class WGParams extends zombie.iso.worldgen.WGParams {}
  /** @customConstructor WGUtils.new */
  export class WGUtils extends zombie.iso.worldgen.WGUtils {}
  /** @customConstructor WalkTowardState.new */
  export class WalkTowardState extends zombie.ai.states.WalkTowardState {}
  /** @customConstructor WallShaderTexRender.new */
  export class WallShaderTexRender extends zombie.core.SpriteRenderer$WallShaderTexRender {}
  /** @customConstructor WallShaper.new */
  export class WallShaper extends zombie.iso.sprite.shapers.WallShaper {}
  /** @customConstructor War.new */
  export class War extends zombie.network.WarManager$War {}
  /** @customConstructor WarManager.new */
  export class WarManager extends zombie.network.WarManager {}
  /** @customConstructor WaterDripLogic.new */
  export class WaterDripLogic extends zombie.audio.ObjectAmbientEmitters$WaterDripLogic {}
  /** @customConstructor WaveSignalDevice.new */
  export class WaveSignalDevice extends zombie.radio.devices.WaveSignalDevice {}
  /** @customConstructor WeaponPart.new */
  export class WeaponPart extends zombie.inventory.types.WeaponPart {}
  /** @customConstructor WeaponType.new */
  export class WeaponType extends zombie.inventory.types.WeaponType {}
  /** @customConstructor WeatherParticleDrawer.new */
  export class WeatherParticleDrawer extends zombie.iso.weather.fx.WeatherParticleDrawer {}
  /** @customConstructor WeatherPeriod.new */
  export class WeatherPeriod extends zombie.iso.weather.WeatherPeriod {}
  /** @customConstructor WeatherStage.new */
  export class WeatherStage extends zombie.iso.weather.WeatherPeriod$WeatherStage {}
  /** @customConstructor Wheel.new */
  export class Wheel extends zombie.scripting.objects.VehicleScript$Wheel {}
  /** @customConstructor WheelInfo.new */
  export class WheelInfo extends zombie.vehicles.BaseVehicle$WheelInfo {}
  /** @customConstructor Window.new */
  export class Window extends zombie.scripting.objects.VehicleScript$Window {}
  /** @customConstructor WindowLogic.new */
  export class WindowLogic extends zombie.audio.ObjectAmbientEmitters$WindowLogic {}
  /** @customConstructor WindowType.new */
  export class WindowType extends zombie.iso.objects.IsoWindow$WindowType {}
  /** @customConstructor WorldFlares.new */
  export class WorldFlares extends zombie.iso.weather.WorldFlares {}
  /** @customConstructor WorldMap.new */
  export class WorldMap extends zombie.worldMap.WorldMap {}
  /** @customConstructor WorldMapBaseSymbol.new */
  export class WorldMapBaseSymbol extends zombie.worldMap.symbols.WorldMapBaseSymbol {}
  /** @customConstructor WorldMapBaseSymbolV1.new */
  export class WorldMapBaseSymbolV1 extends zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapBaseSymbolV1 {}
  /** @customConstructor WorldMapBaseSymbolV2.new */
  export class WorldMapBaseSymbolV2 extends zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapBaseSymbolV2 {}
  /** @customConstructor WorldMapBooleanOption.new */
  export class WorldMapBooleanOption extends zombie.worldMap.WorldMapRenderer$WorldMapBooleanOption {}
  /** @customConstructor WorldMapCell.new */
  export class WorldMapCell extends zombie.worldMap.WorldMapCell {}
  /** @customConstructor WorldMapData.new */
  export class WorldMapData extends zombie.worldMap.WorldMapData {}
  /** @customConstructor WorldMapDoubleOption.new */
  export class WorldMapDoubleOption extends zombie.worldMap.WorldMapRenderer$WorldMapDoubleOption {}
  /** @customConstructor WorldMapFeature.new */
  export class WorldMapFeature extends zombie.worldMap.WorldMapFeature {}
  /** @customConstructor WorldMapGridSquareMarker.new */
  export class WorldMapGridSquareMarker extends zombie.worldMap.markers.WorldMapGridSquareMarker {}
  /** @customConstructor WorldMapGridSquareMarkerV1.new */
  export class WorldMapGridSquareMarkerV1 extends zombie.worldMap.markers.WorldMapMarkersV1$WorldMapGridSquareMarkerV1 {}
  /** @customConstructor WorldMapImages.new */
  export class WorldMapImages extends zombie.worldMap.WorldMapImages {}
  /** @customConstructor WorldMapLineStyleLayerV1.new */
  export class WorldMapLineStyleLayerV1 extends zombie.worldMap.styles.WorldMapStyleV1$WorldMapLineStyleLayerV1 {}
  /** @customConstructor WorldMapMarker.new */
  export class WorldMapMarker extends zombie.worldMap.markers.WorldMapMarker {}
  /** @customConstructor WorldMapMarkerV1.new */
  export class WorldMapMarkerV1 extends zombie.worldMap.markers.WorldMapMarkersV1$WorldMapMarkerV1 {}
  /** @customConstructor WorldMapMarkers.new */
  export class WorldMapMarkers extends zombie.worldMap.markers.WorldMapMarkers {}
  /** @customConstructor WorldMapMarkersV1.new */
  export class WorldMapMarkersV1 extends zombie.worldMap.markers.WorldMapMarkersV1 {}
  /** @customConstructor WorldMapPolygonStyleLayerV1.new */
  export class WorldMapPolygonStyleLayerV1 extends zombie.worldMap.styles.WorldMapStyleV1$WorldMapPolygonStyleLayerV1 {}
  /** @customConstructor WorldMapRenderer.new */
  export class WorldMapRenderer extends zombie.worldMap.WorldMapRenderer {}
  /** @customConstructor WorldMapStyle.new */
  export class WorldMapStyle extends zombie.worldMap.styles.WorldMapStyle {}
  /** @customConstructor WorldMapStyleLayer.new */
  export class WorldMapStyleLayer extends zombie.worldMap.styles.WorldMapStyleLayer {}
  /** @customConstructor WorldMapStyleLayerV1.new */
  export class WorldMapStyleLayerV1 extends zombie.worldMap.styles.WorldMapStyleV1$WorldMapStyleLayerV1 {}
  /** @customConstructor WorldMapStyleV1.new */
  export class WorldMapStyleV1 extends zombie.worldMap.styles.WorldMapStyleV1 {}
  /** @customConstructor WorldMapSymbolCollisions.new */
  export class WorldMapSymbolCollisions extends zombie.worldMap.symbols.WorldMapSymbolCollisions {}
  /** @customConstructor WorldMapSymbolNetworkInfo.new */
  export class WorldMapSymbolNetworkInfo extends zombie.worldMap.network.WorldMapSymbolNetworkInfo {}
  /** @customConstructor WorldMapSymbolType.new */
  export class WorldMapSymbolType extends zombie.worldMap.symbols.WorldMapSymbols$WorldMapSymbolType {}
  /** @customConstructor WorldMapSymbols.new */
  export class WorldMapSymbols extends zombie.worldMap.symbols.WorldMapSymbols {}
  /** @customConstructor WorldMapSymbolsV1.new */
  export class WorldMapSymbolsV1 extends zombie.worldMap.symbols.WorldMapSymbolsV1 {}
  /** @customConstructor WorldMapSymbolsV2.new */
  export class WorldMapSymbolsV2 extends zombie.worldMap.symbols.WorldMapSymbolsV2 {}
  /** @customConstructor WorldMapTextSymbol.new */
  export class WorldMapTextSymbol extends zombie.worldMap.symbols.WorldMapTextSymbol {}
  /** @customConstructor WorldMapTextSymbolV1.new */
  export class WorldMapTextSymbolV1 extends zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextSymbolV1 {}
  /** @customConstructor WorldMapTextSymbolV2.new */
  export class WorldMapTextSymbolV2 extends zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapTextSymbolV2 {}
  /** @customConstructor WorldMapTextureStyleLayerV1.new */
  export class WorldMapTextureStyleLayerV1 extends zombie.worldMap.styles.WorldMapStyleV1$WorldMapTextureStyleLayerV1 {}
  /** @customConstructor WorldMapTextureSymbol.new */
  export class WorldMapTextureSymbol extends zombie.worldMap.symbols.WorldMapTextureSymbol {}
  /** @customConstructor WorldMapTextureSymbolV1.new */
  export class WorldMapTextureSymbolV1 extends zombie.worldMap.symbols.WorldMapSymbolsV1$WorldMapTextureSymbolV1 {}
  /** @customConstructor WorldMapTextureSymbolV2.new */
  export class WorldMapTextureSymbolV2 extends zombie.worldMap.symbols.WorldMapSymbolsV2$WorldMapTextureSymbolV2 {}
  /** @customConstructor WorldMapVisited.new */
  export class WorldMapVisited extends zombie.worldMap.WorldMapVisited {}
  /** @customConstructor WorldMarkers.new */
  export class WorldMarkers extends zombie.iso.WorldMarkers {}
  /** @customConstructor WorldSound.new */
  export class WorldSound extends zombie.WorldSoundManager$WorldSound {}
  /** @customConstructor WorldSoundEmitter.new */
  export class WorldSoundEmitter extends zombie.AmbientStreamManager$WorldSoundEmitter {}
  /** @customConstructor WorldSoundManager.new */
  export class WorldSoundManager extends zombie.WorldSoundManager {}
  /** @customConstructor WornItem.new */
  export class WornItem extends zombie.characters.WornItems.WornItem {}
  /** @customConstructor WornItems.new */
  export class WornItems extends zombie.characters.WornItems.WornItems {}
  /** @customConstructor WrappedBuffer.new */
  export class WrappedBuffer extends zombie.core.utils.WrappedBuffer {}
  /** @customConstructor XP.new */
  export class XP extends zombie.characters.IsoGameCharacter$XP {}
  /** @customConstructor XPMultiplier.new */
  export class XPMultiplier extends zombie.characters.IsoGameCharacter$XPMultiplier {}
  /** @customConstructor XRow.new */
  export class XRow extends zombie.scripting.entity.components.spriteconfig.SpriteConfigScript$XRow {}
  /** @customConstructor XuiAutoApply.new */
  export class XuiAutoApply extends zombie.scripting.ui.XuiAutoApply {}
  /** @customConstructor XuiBoolean.new */
  export class XuiBoolean extends zombie.scripting.ui.XuiScript$XuiBoolean {}
  /** @customConstructor XuiColor.new */
  export class XuiColor extends zombie.scripting.ui.XuiScript$XuiColor {}
  /** @customConstructor XuiColorsScript.new */
  export class XuiColorsScript extends zombie.scripting.objects.XuiColorsScript {}
  /** @customConstructor XuiConfigScript.new */
  export class XuiConfigScript extends zombie.scripting.objects.XuiConfigScript {}
  /** @customConstructor XuiDouble.new */
  export class XuiDouble extends zombie.scripting.ui.XuiLuaStyle$XuiDouble {}
  /** @customConstructor XuiFloat.new */
  export class XuiFloat extends zombie.scripting.ui.XuiScript$XuiFloat {}
  /** @customConstructor XuiFontType.new */
  export class XuiFontType extends zombie.scripting.ui.XuiLuaStyle$XuiFontType {}
  /** @customConstructor XuiFunction.new */
  export class XuiFunction extends zombie.scripting.ui.XuiScript$XuiFunction {}
  /** @customConstructor XuiInteger.new */
  export class XuiInteger extends zombie.scripting.ui.XuiScript$XuiInteger {}
  /** @customConstructor XuiLayoutScript.new */
  export class XuiLayoutScript extends zombie.scripting.objects.XuiLayoutScript {}
  /** @customConstructor XuiLuaStyle.new */
  export class XuiLuaStyle extends zombie.scripting.ui.XuiLuaStyle {}
  /** @customConstructor XuiManager.new */
  export class XuiManager extends zombie.scripting.ui.XuiManager {}
  /** @customConstructor XuiReference.new */
  export class XuiReference extends zombie.scripting.ui.XuiReference {}
  /** @customConstructor XuiScript.new */
  export class XuiScript extends zombie.scripting.ui.XuiScript {}
  /** @customConstructor XuiScriptType.new */
  export class XuiScriptType extends zombie.scripting.ui.XuiScriptType {}
  /** @customConstructor XuiSkin.new */
  export class XuiSkin extends zombie.scripting.ui.XuiSkin {}
  /** @customConstructor XuiSkinScript.new */
  export class XuiSkinScript extends zombie.scripting.objects.XuiSkinScript {}
  /** @customConstructor XuiSpacing.new */
  export class XuiSpacing extends zombie.scripting.ui.XuiScript$XuiSpacing {}
  /** @customConstructor XuiString.new */
  export class XuiString extends zombie.scripting.ui.XuiLuaStyle$XuiString {}
  /** @customConstructor XuiStringList.new */
  export class XuiStringList extends zombie.scripting.ui.XuiScript$XuiStringList {}
  /** @customConstructor XuiTableCellScript.new */
  export class XuiTableCellScript extends zombie.scripting.ui.XuiTableScript$XuiTableCellScript {}
  /** @customConstructor XuiTableColumnScript.new */
  export class XuiTableColumnScript extends zombie.scripting.ui.XuiTableScript$XuiTableColumnScript {}
  /** @customConstructor XuiTableRowScript.new */
  export class XuiTableRowScript extends zombie.scripting.ui.XuiTableScript$XuiTableRowScript {}
  /** @customConstructor XuiTableScript.new */
  export class XuiTableScript extends zombie.scripting.ui.XuiTableScript {}
  /** @customConstructor XuiTextAlign.new */
  export class XuiTextAlign extends zombie.scripting.ui.XuiScript$XuiTextAlign {}
  /** @customConstructor XuiTexture.new */
  export class XuiTexture extends zombie.scripting.ui.XuiScript$XuiTexture {}
  /** @customConstructor XuiTranslateString.new */
  export class XuiTranslateString extends zombie.scripting.ui.XuiLuaStyle$XuiTranslateString {}
  /** @customConstructor XuiUnit.new */
  export class XuiUnit extends zombie.scripting.ui.XuiScript$XuiUnit {}
  /** @customConstructor XuiVar.new */
  export class XuiVar extends zombie.scripting.ui.XuiLuaStyle$XuiVar<any, any> {}
  /** @customConstructor XuiVarType.new */
  export class XuiVarType extends zombie.scripting.ui.XuiVarType {}
  /** @customConstructor XuiVector.new */
  export class XuiVector extends zombie.scripting.ui.XuiScript$XuiVector {}
  /** @customConstructor XuiVectorPosAlign.new */
  export class XuiVectorPosAlign extends zombie.scripting.ui.XuiScript$XuiVectorPosAlign {}
  /** @customConstructor ZLayer.new */
  export class ZLayer extends zombie.scripting.entity.components.spriteconfig.SpriteConfigScript$ZLayer {}
  /** @customConstructor ZLogger.new */
  export class ZLogger extends zombie.core.logger.ZLogger {}
  /** @customConstructor ZNetStatistics.new */
  export class ZNetStatistics extends zombie.core.znet.ZNetStatistics {}
  /** @customConstructor ZombieConfig.new */
  export class ZombieConfig extends zombie.SandboxOptions$ZombieConfig {}
  /** @customConstructor ZombieFallDownState.new */
  export class ZombieFallDownState extends zombie.ai.states.ZombieFallDownState {}
  /** @customConstructor ZombieGetDownState.new */
  export class ZombieGetDownState extends zombie.ai.states.ZombieGetDownState {}
  /** @customConstructor ZombieGetUpState.new */
  export class ZombieGetUpState extends zombie.ai.states.ZombieGetUpState {}
  /** @customConstructor ZombieIdleState.new */
  export class ZombieIdleState extends zombie.ai.states.ZombieIdleState {}
  /** @customConstructor ZombieLore.new */
  export class ZombieLore extends zombie.SandboxOptions$ZombieLore {}
  /** @customConstructor ZombieOnGroundState.new */
  export class ZombieOnGroundState extends zombie.ai.states.ZombieOnGroundState {}
  /** @customConstructor ZombiePopulationRenderer.new */
  export class ZombiePopulationRenderer extends zombie.popman.ZombiePopulationRenderer {}
  /** @customConstructor ZombieReanimateState.new */
  export class ZombieReanimateState extends zombie.ai.states.ZombieReanimateState {}
  /** @customConstructor ZombieSittingState.new */
  export class ZombieSittingState extends zombie.ai.states.ZombieSittingState {}
  /** @customConstructor ZombieSound.new */
  export class ZombieSound extends zombie.characters.IsoZombie$ZombieSound {}
  /** @customConstructor ZomboidBitFlag.new */
  export class ZomboidBitFlag extends zombie.ZomboidBitFlag {}
  /** @customConstructor ZomboidRadio.new */
  export class ZomboidRadio extends zombie.radio.ZomboidRadio {}
  /** @customConstructor Zone.new */
  export class Zone extends zombie.iso.zones.Zone {}
  /** @customConstructor ZoneData.new */
  export class ZoneData extends zombie.iso.FishSchoolManager$ZoneData {}
  /** @customConstructor ZoneGenerator.new */
  export class ZoneGenerator extends zombie.iso.worldgen.zones.ZoneGenerator {}
  /** @customConstructor ZoneGeometryType.new */
  export class ZoneGeometryType extends zombie.iso.zones.ZoneGeometryType {}
  /** @customConstructor ZoneType.new */
  export class ZoneType extends zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase$ZoneType {}
  /** @customConstructor engineStateTypes.new */
  export class engineStateTypes extends zombie.vehicles.BaseVehicle$engineStateTypes {}
  /** @customConstructor renderTiles.new */
  export class renderTiles extends zombie.iso.IsoCell$s_performance$renderTiles {}
  /** @customConstructor s_performance.new */
  export class s_performance extends zombie.iso.IsoCell$s_performance {}
  /** @customConstructor vector2.new */
  export class vector2 extends zombie.core.math.PZMath$UnitTests$vector2 {}
  /** @customConstructor xp_Award.new */
  export class xp_Award extends zombie.scripting.entity.components.crafting.CraftRecipe$xp_Award {}

  export type AbstractList = java.util.AbstractList<any>
  export type Appendable = java.lang.Appendable
  export type ArrayDeque = java.util.ArrayDeque<any>
  export type AttributedCharacterIterator = java.text.AttributedCharacterIterator
  export type Audio = fmod.fmod.Audio
  export type BiConsumer = java.util._function_.BiConsumer<any, any>
  export type BiFunction = java.util._function_.BiFunction<any, any, any>
  export type BooleanSupplier = java.util._function_.BooleanSupplier
  export type Buffer = org.lwjgl.glfw.GLFWImage$Buffer
  export type BufferedImage = java.awt.image.BufferedImage
  export type BufferedInputStream = java.io.BufferedInputStream
  export type ByteBuffer = java.nio.ByteBuffer
  export type CRC32 = java.util.zip.CRC32
  export type Calendar = java.util.Calendar
  export type CharBuffer = java.nio.CharBuffer
  export type CharSequence = java.lang.CharSequence
  export type Charset = java.nio.charset.Charset
  export type Class = java.lang.Class<any>
  export type ClassDebugInformation = se.krka.kahlua.integration.expose.ClassDebugInformation
  export type Collection = java.util.Collection<any>
  export type Comparator = java.util.Comparator<any>
  export type CompletableFuture = java.util.concurrent.CompletableFuture<any>
  export type ConcurrentLinkedQueue = java.util.concurrent.ConcurrentLinkedQueue<any>
  export type Constructor = java.lang.reflect.Constructor<any>
  export type Consumer = java.util._function_.Consumer<any>
  export type Controller = org.lwjglx.input.Controller
  export type Coroutine = se.krka.kahlua.vm.Coroutine
  export type Cursor = org.lwjglx.input.Cursor
  export type DataInput = java.io.DataInput
  export type Date = java.util.Date
  export type DateFormat = java.text.DateFormat
  export type DateFormatSymbols = java.text.DateFormatSymbols
  export type Entry = java.util.Map$Entry<any, any>
  export type EnumDesc = java.lang.Enum$EnumDesc<any>
  export type Enumeration = java.util.Enumeration<any>
  export type Exception = java.lang.Exception
  export type FMODFootstep = fmod.fmod.FMODFootstep
  export type FMODVoice = fmod.fmod.FMODVoice
  export type FMOD_STUDIO_PARAMETER_DESCRIPTION = fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION
  export type FMOD_STUDIO_PARAMETER_ID = fmod.fmod.FMOD_STUDIO_PARAMETER_ID
  export type Field = java.lang.reflect.Field
  export type FieldPosition = java.text.FieldPosition
  export type File = java.io.File
  export type FileChannel = java.nio.channels.FileChannel
  export type FileDescriptor = java.io.FileDescriptor
  export type FloatBuffer = java.nio.FloatBuffer
  export type Function = java.util._function_.Function<any, any>
  export type GregorianCalendar = java.util.GregorianCalendar
  export type HashSet = java.util.HashSet<any>
  export type ImDrawData = imgui.ImDrawData
  export type ImmutableSet = com.google.common.collect.ImmutableSet<any>
  export type InetSocketAddress = java.net.InetSocketAddress
  export type InputStream = java.io.InputStream
  export type IntBuffer = java.nio.IntBuffer
  export type IntFunction = java.util._function_.IntFunction<any>
  export type Iterable = java.lang.Iterable<any>
  export type J2SEPlatform = se.krka.kahlua.j2se.J2SEPlatform
  export type KahluaConverterManager = se.krka.kahlua.converter.KahluaConverterManager
  export type KahluaTable = se.krka.kahlua.vm.KahluaTable
  export type KahluaTableImpl = se.krka.kahlua.j2se.KahluaTableImpl
  export type KahluaThread = se.krka.kahlua.vm.KahluaThread
  export type KeyEventQueue = org.lwjglx.input.KeyEventQueue
  export type List = java.util.List<any>
  export type ListIterator = java.util.ListIterator<any>
  export type LocalDateTime = java.time.LocalDateTime
  export type Locale = java.util.Locale
  export type LuaCallFrame = se.krka.kahlua.vm.LuaCallFrame
  export type LuaCaller = se.krka.kahlua.integration.LuaCaller
  export type LuaClosure = se.krka.kahlua.vm.LuaClosure
  export type Matrix2dc = org.joml.Matrix2dc
  export type Matrix2fc = org.joml.Matrix2fc
  export type Matrix3dc = org.joml.Matrix3dc
  export type Matrix3f = org.lwjgl.util.vector.Matrix3f
  export type Matrix3fc = org.joml.Matrix3fc
  export type Matrix3x2fc = org.joml.Matrix3x2fc
  export type Matrix4dc = org.joml.Matrix4dc
  export type Matrix4f = org.lwjgl.util.vector.Matrix4f
  export type Matrix4fc = org.joml.Matrix4fc
  export type Matrix4x3fc = org.joml.Matrix4x3fc
  export type Method = java.lang.reflect.Method
  export type Number = java.lang.Number
  export type NumberFormat = java.text.NumberFormat
  export type ObjectInput = java.io.ObjectInput
  export type ObjectOutput = java.io.ObjectOutput
  export type ObjectOutputStream = java.io.ObjectOutputStream
  export type Optional = java.util.Optional<any>
  export type OutputStream = java.io.OutputStream
  export type ParsePosition = java.text.ParsePosition
  export type Platform = se.krka.kahlua.vm.Platform
  export type PrintStream = java.io.PrintStream
  export type PrintWriter = java.io.PrintWriter
  export type Prototype = se.krka.kahlua.vm.Prototype
  export type Quaternion = org.lwjgl.util.vector.Quaternion
  export type Quaternionf = org.joml.Quaternionf
  export type Quaternionfc = org.joml.Quaternionfc
  export type Random = java.util.Random
  export type RandomAccessFile = java.io.RandomAccessFile
  export type Raster = java.awt.image.Raster
  export type ReadableColor = org.lwjgl.util.ReadableColor
  export type Reader = java.io.Reader
  export type Rectangle = org.lwjgl.util.Rectangle
  export type ReentrantLock = java.util.concurrent.locks.ReentrantLock
  export type Runnable = java.lang.Runnable
  export type Set = java.util.Set<any>
  export type Spliterator = java.util.Spliterator<any>
  export type StackTraceElement = java.lang.StackTraceElement
  export type Stream = java.util.stream.Stream<any>
  export type StringBuffer = java.lang.StringBuffer
  export type StringBuilder = java.lang.StringBuilder
  export type Supplier = java.util._function_.Supplier<any>
  export type TFloatArrayList = gnu.trove.list.array.TFloatArrayList
  export type THashMap = gnu.trove.map.hash.THashMap<any, any>
  export type THashSet = gnu.trove.set.hash.THashSet<any>
  export type TIntArrayList = gnu.trove.list.array.TIntArrayList
  export type TLongObjectIterator = gnu.trove.iterator.TLongObjectIterator<any>
  export type TLongObjectMap = gnu.trove.map.TLongObjectMap<any>
  export type TLongObjectProcedure = gnu.trove.procedure.TLongObjectProcedure<any>
  export type TLongProcedure = gnu.trove.procedure.TLongProcedure
  export type TLongSet = gnu.trove.set.TLongSet
  export type TObjectFunction = gnu.trove._function_.TObjectFunction<any, any>
  export type TObjectObjectProcedure = gnu.trove.procedure.TObjectObjectProcedure<any, any>
  export type TObjectProcedure = gnu.trove.procedure.TObjectProcedure<any>
  export type TShortObjectHashMap = gnu.trove.map.hash.TShortObjectHashMap<any>
  export type Thread = java.lang.Thread
  export type ThreadLocal = java.lang.ThreadLocal<any>
  export type Throwable = java.lang.Throwable
  export type TimeZone = java.util.TimeZone
  export type ToDoubleFunction = java.util._function_.ToDoubleFunction<any>
  export type ToIntFunction = java.util._function_.ToIntFunction<any>
  export type ToLongFunction = java.util._function_.ToLongFunction<any>
  export type URI = java.net.URI
  export type UUID = java.util.UUID
  export type UnaryOperator = java.util._function_.UnaryOperator<any>
  export type Vector2d = org.joml.Vector2d
  export type Vector2dc = org.joml.Vector2dc
  export type Vector2f = org.lwjgl.util.vector.Vector2f
  export type Vector2fc = org.joml.Vector2fc
  export type Vector2i = org.joml.Vector2i
  export type Vector2ic = org.joml.Vector2ic
  export type Vector3d = org.joml.Vector3d
  export type Vector3dc = org.joml.Vector3dc
  export type Vector3f = org.lwjgl.util.vector.Vector3f
  export type Vector3fc = org.joml.Vector3fc
  export type Vector3i = org.joml.Vector3i
  export type Vector3ic = org.joml.Vector3ic
  export type Vector4f = org.lwjgl.util.vector.Vector4f
  export type Writer = java.io.Writer

  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoGridSquare arg0, int arg1): void
   */
  export function AddNoiseToken(arg0: zombie.iso.IsoGridSquare, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, int arg1, int arg2): void
   */
  export function AddWorldSound(arg0: zombie.characters.IsoPlayer, arg1: number, arg2: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (long arg0, String arg1, int arg2, String arg3): void
   */
  export function InvMngGetItem(arg0: number, arg1: string, arg2: number, arg3: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (long arg0, int arg1, String arg2): void
   */
  export function InvMngRemoveItem(arg0: number, arg1: number, arg2: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function proceedFactionMessage(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function processAdminChatMessage(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function processSafehouseMessage(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function SendCommandToServer(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (double arg0): number
   *  - (double arg0, double arg1): number
   */
  export function ZombRand(arg0: number, arg1?: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (double arg0, double arg1): number
   */
  export function ZombRandBetween(arg0: number, arg1: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, float arg1): number
   */
  export function ZombRandFloat(arg0: number, arg1: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Faction arg0, String arg1): void
   */
  export function acceptFactionInvite(arg0: zombie.characters.Faction, arg1: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (SafeHouse arg0, String arg1, IsoPlayer arg2): void
   */
  export function acceptSafehouseInvite(arg0: zombie.iso.areas.SafeHouse, arg1: string, arg2: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, IsoPlayer arg1, boolean arg2): void
   */
  export function acceptTrading(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function activateJoypadOnSteamDeck(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function activateSteamOverlayToWebPage(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function activateSteamOverlayToWorkshop(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function activateSteamOverlayToWorkshopItem(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function activateSteamOverlayToWorkshopUser(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function addAllBurntVehicles(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function addAllSmashedVehicles(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   *  - (Predicate arg0): void
   */
  export function addAllVehicles(arg0?: java.util._function_.Predicate<zombie.scripting.objects.VehicleScript>): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoCell arg0, int arg1, int arg2, int arg3, String arg4, AnimalBreed arg5): zombie.characters.animals.IsoAnimal
   *  - (IsoCell arg0, int arg1, int arg2, int arg3, String arg4, AnimalBreed arg5, boolean arg6): zombie.characters.animals.IsoAnimal
   */
  export function addAnimal(arg0: zombie.iso.IsoCell, arg1: number, arg2: number, arg3: number, arg4: string, arg5: zombie.characters.animals.datas.AnimalBreed, arg6?: boolean): zombie.characters.animals.IsoAnimal;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, int arg2, int arg3, int arg4, float arg5, float arg6, float arg7, float arg8): void
   */
  export function addAreaHighlight(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function addCarCrash(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.vehicles.BaseVehicle
   */
  export function addPhysicsObject(): zombie.vehicles.BaseVehicle;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function addRole(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, int arg2): void
   */
  export function addTicket(arg0: string, arg1: string, arg2: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2): void
   */
  export function addUserlog(arg0: string, arg1: string, arg2: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function addVariableToSyncList(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1, int arg2, int arg3): zombie.vehicles.BaseVehicle
   */
  export function addVehicle(arg0: string, arg1: number, arg2: number, arg3: number): zombie.vehicles.BaseVehicle;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, IsoDirections arg1, Integer arg2, IsoGridSquare arg3): zombie.vehicles.BaseVehicle
   */
  export function addVehicleDebug(arg0: string, arg1: zombie.iso.IsoDirections, arg2: number, arg3: zombie.iso.IsoGridSquare): zombie.vehicles.BaseVehicle;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): void
   */
  export function addVirtualZombie(arg0: number, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, int arg2): void
   */
  export function addWarningPoint(arg0: string, arg1: string, arg2: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, int arg2, int arg3, String arg4, Integer arg5): java.util.ArrayList<zombie.characters.IsoZombie>
   *  - (int arg0, int arg1, int arg2, int arg3, String arg4, Integer arg5, boolean arg6, boolean arg7, boolean arg8, boolean arg9, boolean arg10, boolean arg11, float arg12): java.util.ArrayList<zombie.characters.IsoZombie>
   */
  export function addZombiesInOutfit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: string, arg5: number, arg6?: boolean, arg7?: boolean, arg8?: boolean, arg9?: boolean, arg10?: boolean, arg11?: boolean, arg12?: number): java.util.ArrayList<zombie.characters.IsoZombie>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function assaultPlayer(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): void
   */
  export function attachTrailerToPlayerVehicle(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function backToSinglePlayer(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function breakpoint(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function cacheFileExists(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, Object arg1): void
   */
  export function callLua(arg0: string, arg1: any): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, Object arg1): boolean
   */
  export function callLuaBool(arg0: string, arg1: any): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, ArrayList arg1): java.util.ArrayList<any>
   */
  export function callLuaReturn(arg0: string, arg1: java.util.ArrayList<any>): java.util.ArrayList<any>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function canConnect(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function canInviteFriends(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function canModifyPlayerScoreboard(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function canSeePlayerStats(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, InventoryItem arg1, String arg2): number
   */
  export function changeItemTypeTransaction(arg0: zombie.characters.IsoPlayer, arg1: zombie.inventory.InventoryItem, arg2: string): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (UdpConnection arg0): void
   */
  export function checkModsNeedUpdate(arg0: zombie.core.raknet.UdpConnection): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, Capability arg1): boolean
   */
  export function checkPermissions(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.Capability): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function checkPlayerCanUseChat(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2): boolean
   */
  export function checkPlayerExistsInDatabase(arg0: string, arg1: string, arg2: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function checkSaveFileExists(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function checkSaveFolderExists(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function checkSavePlayerExists(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function checkStringPattern(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function clearPVPEvents(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1): zombie.scripting.objects.Item
   */
  export function cloneItemType(arg0: string, arg1: string): zombie.scripting.objects.Item;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0): void
   */
  export function configureLighting(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function connectToServerStateCallback(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1): void
   */
  export function connectionManagerLog(arg0: string, arg1: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (KahluaTable arg0): se.krka.kahlua.vm.KahluaTable
   */
  export function convertToPZNetTable(arg0: se.krka.kahlua.vm.KahluaTable): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (KahluaTable arg0): se.krka.kahlua.vm.KahluaTable
   *  - (KahluaTable arg0, KahluaTable arg1): se.krka.kahlua.vm.KahluaTable
   */
  export function copyTable(arg0: se.krka.kahlua.vm.KahluaTable, arg1?: se.krka.kahlua.vm.KahluaTable): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, float arg1, float arg2, float arg3, boolean arg4, String arg5, KahluaTable arg6): number
   */
  export function createBuildAction(arg0: zombie.characters.IsoPlayer, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: string, arg6: se.krka.kahlua.vm.KahluaTable): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, float arg1, float arg2, float arg3, int arg4): void
   */
  export function createHordeFromTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, int arg2, int arg3, int arg4, int arg5, int arg6): void
   */
  export function createHordeInAreaTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, InventoryItem arg1, ItemContainer arg2, ItemContainer arg3): number
   */
  export function createItemTransaction(arg0: zombie.characters.IsoPlayer, arg1: zombie.inventory.InventoryItem, arg2: zombie.inventory.ItemContainer, arg3: zombie.inventory.ItemContainer): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, InventoryItem arg1, ItemContainer arg2, ItemContainer arg3, String arg4, float arg5, float arg6, float arg7): number
   */
  export function createItemTransactionWithPosData(arg0: zombie.characters.IsoPlayer, arg1: zombie.inventory.InventoryItem, arg2: zombie.inventory.ItemContainer, arg3: zombie.inventory.ItemContainer, arg4: string, arg5: number, arg6: number, arg7: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2, String arg3, String arg4): zombie.scripting.objects.Item
   */
  export function createNewScriptItem(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string): zombie.scripting.objects.Item;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1): zombie.core.textures.Texture
   */
  export function createQRCodeTex(arg0: string, arg1: string): zombie.core.textures.Texture;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoGridSquare arg0, int arg1): zombie.iso.objects.IsoDeadBody
   */
  export function createRandomDeadBody(arg0: zombie.iso.IsoGridSquare, arg1: number): zombie.iso.objects.IsoDeadBody;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function createRegionFile(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function createStory(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, IsoGridSquare arg1): void
   */
  export function createTile(arg0: string, arg1: zombie.iso.IsoGridSquare): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function createWorld(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, float arg1, float arg2, SurvivorDesc arg3, int arg4, IsoDirections arg5): zombie.characters.IsoZombie
   */
  export function createZombie(arg0: number, arg1: number, arg2: number, arg3: zombie.characters.SurvivorDesc, arg4: number, arg5: zombie.iso.IsoDirections): zombie.characters.IsoZombie;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): void
   */
  export function debugFullyStreamedIn(arg0: number, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0): void
   *  - (Object arg0, int arg1): void
   */
  export function debugLuaTable(arg0: any, arg1?: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Double arg0): void
   */
  export function debugSetRoomType(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function deleteAllGameModeSaves(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2): void
   */
  export function deletePlayerFromDatabase(arg0: string, arg1: string, arg2: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function deletePlayerSave(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function deleteRole(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function deleteSandboxPreset(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function deleteSave(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function disconnect(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (KahluaTable arg0): void
   */
  export function doChallenge(arg0: se.krka.kahlua.vm.KahluaTable): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): void
   */
  export function doKeyPress(arg0: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function doLuaDebuggerAction(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (KahluaTable arg0): void
   */
  export function doTutorial(arg0: se.krka.kahlua.vm.KahluaTable): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (UIElement arg0, int arg1, float arg2, float arg3, float arg4): void
   */
  export function drawOverheadMap(arg0: zombie.ui.UIElement, arg1: number, arg2: number, arg3: number, arg4: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (NetTimedAction arg0, long arg1, String arg2, String arg3): void
   */
  export function emulateAnimEvent(arg0: zombie.core.NetTimedAction, arg1: number, arg2: string, arg3: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (NetTimedAction arg0, long arg1, String arg2, String arg3): void
   */
  export function emulateAnimEventOnce(arg0: zombie.core.NetTimedAction, arg1: number, arg2: string, arg3: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function endFileInput(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function endFileOutput(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function endHelicopter(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function endTextFileInput(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, KahluaTable arg1): void
   */
  export function executeQuery(arg0: string, arg1: se.krka.kahlua.vm.KahluaTable): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0): number
   */
  export function fastfloor(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function fileExists(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Short arg0): void
   */
  export function focusOnTab(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (GameState arg0): void
   */
  export function forceChangeState(arg0: zombie.gameStates.GameState): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function forceDisconnect(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function forceSnowCheck(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function generateSecretKey(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getAbsoluteSaveFolderName(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getAccessLevel(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (byte arg0): number
   */
  export function getActionDuration(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<string>
   */
  export function getActivatedMods(): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<zombie.characters.animals.AnimalDefinitions>
   */
  export function getAllAnimalsDefinitions(): java.util.ArrayList<zombie.characters.animals.AnimalDefinitions>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<string>
   */
  export function getAllBeardStyles(): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (InventoryItem arg0): java.util.ArrayList<string>
   */
  export function getAllDecalNamesForItem(arg0: zombie.inventory.InventoryItem): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): java.util.ArrayList<string>
   */
  export function getAllHairStyles(arg0: boolean): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<zombie.scripting.objects.Item>
   */
  export function getAllItems(): java.util.ArrayList<zombie.scripting.objects.Item>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): se.krka.kahlua.vm.KahluaTable
   */
  export function getAllItemsForBodyLocation(arg0: string): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): java.util.ArrayList<string>
   */
  export function getAllOutfits(arg0: boolean): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<zombie.scripting.objects.Recipe>
   */
  export function getAllRecipes(): java.util.ArrayList<zombie.scripting.objects.Recipe>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.List<java.io.BufferedReader>
   */
  export function getAllSavedPlayers(): java.util.List<java.io.BufferedReader>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<string>
   */
  export function getAllVehicles(): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<zombie.core.skinnedmodel.population.VoiceStyle>
   */
  export function getAllVoiceStyles(): java.util.ArrayList<zombie.core.skinnedmodel.population.VoiceStyle>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.BaseAmbientStreamManager
   */
  export function getAmbientStreamManager(): zombie.BaseAmbientStreamManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoGameCharacter arg0): java.util.ArrayList<zombie.characters.animals.AnimalTracks>
   */
  export function getAndFindNearestTracks(arg0: zombie.characters.IsoGameCharacter): java.util.ArrayList<zombie.characters.animals.AnimalTracks>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): zombie.characters.animals.IsoAnimal
   */
  export function getAnimal(arg0: number): zombie.characters.animals.IsoAnimal;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): zombie.characters.animals.AnimalChunk
   */
  export function getAnimalChunk(arg0: number, arg1: number): zombie.characters.animals.AnimalChunk;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.gameStates.AnimationViewerState
   */
  export function getAnimationViewerState(): zombie.gameStates.AnimationViewerState;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.gameStates.AttachmentEditorState
   */
  export function getAttachmentEditorState(): zombie.gameStates.AttachmentEditorState;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.audio.BaseSoundBank
   */
  export function getBaseSoundBank(): zombie.audio.BaseSoundBank;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.core.skinnedmodel.population.BeardStyles
   */
  export function getBeardStylesInstance(): zombie.core.skinnedmodel.population.BeardStyles;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.characters.IsoGameCharacter
   */
  export function getBehaviourDebugPlayer(): zombie.characters.IsoGameCharacter;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.core.GameVersion
   */
  export function getBreakModGameVersion(): zombie.core.GameVersion;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getButtonCount(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Coroutine arg0): number
   */
  export function getCallframeTop(arg0: se.krka.kahlua.vm.Coroutine): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getCameraOffX(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getCameraOffY(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<zombie.characters.Capability>
   */
  export function getCapabilities(): java.util.ArrayList<zombie.characters.Capability>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.iso.IsoCell
   */
  export function getCell(): zombie.iso.IsoCell;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getCellMaxX(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getCellMaxY(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getCellMinX(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getCellMinY(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getCellSizeInChunks(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getCellSizeInSquares(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getChunkSizeInSquares(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0, int arg1): java.lang.reflect.Field
   */
  export function getClassField(arg0: any, arg1: number): java.lang.reflect.Field;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0, Field arg1): any
   */
  export function getClassFieldVal(arg0: any, arg1: java.lang.reflect.Field): any;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0, int arg1): java.lang.reflect.Method
   */
  export function getClassFunction(arg0: any, arg1: number): java.lang.reflect.Method;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): zombie.core.textures.Texture
   */
  export function getClientLoadingScreen(arg0: number): zombie.core.textures.Texture;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getClientUsername(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.iso.weather.ClimateManager
   */
  export function getClimateManager(): zombie.iso.weather.ClimateManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.iso.weather.ClimateMoon
   */
  export function getClimateMoon(): zombie.iso.weather.ClimateMoon;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<zombie.characters.IsoPlayer>
   */
  export function getConnectedPlayers(): java.util.ArrayList<zombie.characters.IsoPlayer>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getControllerAxisCount(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): number
   */
  export function getControllerAxisValue(arg0: number, arg1: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getControllerButtonCount(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getControllerCount(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): number
   */
  export function getControllerDeadZone(arg0: number, arg1: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): string
   */
  export function getControllerGUID(arg0: number): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): string
   */
  export function getControllerName(arg0: number): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getControllerPovX(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getControllerPovY(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.core.Core
   */
  export function getCore(): zombie.core.Core;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Coroutine arg0, int arg1): se.krka.kahlua.vm.LuaCallFrame
   */
  export function getCoroutineCallframeStack(arg0: se.krka.kahlua.vm.Coroutine, arg1: number): se.krka.kahlua.vm.LuaCallFrame;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Coroutine arg0, int arg1): any
   */
  export function getCoroutineObjStack(arg0: se.krka.kahlua.vm.Coroutine, arg1: number): any;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Coroutine arg0, int arg1): any
   */
  export function getCoroutineObjStackWithBase(arg0: se.krka.kahlua.vm.Coroutine, arg1: number): any;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Coroutine arg0): number
   */
  export function getCoroutineTop(arg0: se.krka.kahlua.vm.Coroutine): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.Coroutine
   */
  export function getCurrentCoroutine(): se.krka.kahlua.vm.Coroutine;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getCurrentSaveName(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getCurrentUserProfileName(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getCurrentUserSteamID(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2, String arg3, String arg4, String arg5, boolean arg6): void
   */
  export function getCustomizationData(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function getDBSchema(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function getDebug(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.debug.DebugOptions
   */
  export function getDebugOptions(): zombie.debug.DebugOptions;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoGameCharacter arg0, IsoObject arg1): zombie.iso.IsoDirections
   */
  export function getDirectionTo(arg0: zombie.characters.IsoGameCharacter, arg1: zombie.iso.IsoObject): zombie.iso.IsoDirections;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.vehicles.EditVehicleState
   */
  export function getEditVehicleState(): zombie.vehicles.EditVehicleState;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.erosion.ErosionMain
   */
  export function getErosion(): zombie.erosion.ErosionMain;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.Stack<zombie.scripting.objects.EvolvedRecipe>
   */
  export function getEvolvedRecipes(): java.util.Stack<zombie.scripting.objects.EvolvedRecipe>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<string>
   */
  export function getFMODEventPathList(): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.audio.BaseSoundBank
   */
  export function getFMODSoundBank(): zombie.audio.BaseSoundBank;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.characters.IsoGameCharacter
   */
  export function getFakeAttacker(): zombie.characters.IsoGameCharacter;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): java.io.DataInputStream
   */
  export function getFileInput(arg0: string): java.io.DataInputStream;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): java.io.DataOutputStream
   */
  export function getFileOutput(arg0: string): java.io.DataOutputStream;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, boolean arg1): java.io.BufferedReader
   */
  export function getFileReader(arg0: string, arg1: boolean): java.io.BufferedReader;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getFileSeparator(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, boolean arg1, boolean arg2): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter
   */
  export function getFileWriter(arg0: string, arg1: boolean, arg2: boolean): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (LuaCallFrame arg0): string
   */
  export function getFilenameOfCallframe(arg0: se.krka.kahlua.vm.LuaCallFrame): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (LuaClosure arg0): string
   */
  export function getFilenameOfClosure(arg0: se.krka.kahlua.vm.LuaClosure): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (LuaClosure arg0): number
   */
  export function getFirstLineOfClosure(arg0: se.krka.kahlua.vm.LuaClosure): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getFriendsList(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getFullSaveDirectoryTable(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.network.GameClient
   */
  export function getGameClient(): zombie.network.GameClient;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): java.io.DataInputStream
   */
  export function getGameFilesInput(arg0: string): java.io.DataInputStream;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): java.io.BufferedReader
   */
  export function getGameFilesTextInput(arg0: string): java.io.BufferedReader;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getGameSpeed(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.GameTime
   */
  export function getGameTime(): zombie.GameTime;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getGameVersion(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getGametimeTimestamp(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.core.skinnedmodel.population.HairStyles
   */
  export function getHairStylesInstance(): zombie.core.skinnedmodel.population.HairStyles;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getHourMinute(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, int arg2): zombie.iso.objects.IsoHutch
   */
  export function getHutch(arg0: number, arg1: number, arg2: number): zombie.iso.objects.IsoHutch;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<zombie.entity.GameEntity>
   */
  export function getIsoEntitiesDebug(): java.util.ArrayList<zombie.entity.GameEntity>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.iso.IsoMarkers
   */
  export function getIsoMarkers(): zombie.iso.IsoMarkers;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.scripting.objects.Item
   */
  export function getItem(arg0: string): zombie.scripting.objects.Item;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): number
   */
  export function getItemActualWeight(arg0: string): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): number
   */
  export function getItemConditionMax(arg0: string): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): number
   */
  export function getItemCount(arg0: string): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getItemDisplayName(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getItemEvolvedRecipeName(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getItemFoodType(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getItemName(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getItemNameFromFullType(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getItemStaticModel(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.core.textures.Texture
   */
  export function getItemTex(arg0: string): zombie.core.textures.Texture;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getItemText(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getItemTextureName(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (byte arg0): number
   */
  export function getItemTransactionDuration(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): number
   */
  export function getItemWeight(arg0: string): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadAButton(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadAimingAxisX(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadAimingAxisY(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadBButton(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadBackButton(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadLBumper(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadLeftStickButton(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadMovementAxisX(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadMovementAxisY(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadRBumper(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadRightStickButton(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadStartButton(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadXButton(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getJoypadYButton(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): number
   */
  export function getKeyCode(arg0: string): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): string
   */
  export function getKeyName(arg0: number): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getLastPlayedDate(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.List<string>
   */
  export function getLastStandPlayerFileNames(): java.util.List<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getLastStandPlayersDirectory(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getLatestSave(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (LuaCallFrame arg0): number
   */
  export function getLineNumber(arg0: se.krka.kahlua.vm.LuaCallFrame): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): string
   */
  export function getLoadedLua(arg0: number): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getLoadedLuaCount(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Coroutine arg0): number
   *  - (LuaCallFrame arg0): number
   */
  export function getLocalVarCount(arg0: se.krka.kahlua.vm.Coroutine | se.krka.kahlua.vm.LuaCallFrame): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Coroutine arg0, int arg1): string
   *  - (LuaCallFrame arg0, int arg1): string
   */
  export function getLocalVarName(arg0: se.krka.kahlua.vm.Coroutine | se.krka.kahlua.vm.LuaCallFrame, arg1: number): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Coroutine arg0, int arg1): number
   */
  export function getLocalVarStack(arg0: se.krka.kahlua.vm.Coroutine, arg1: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (LuaCallFrame arg0, int arg1): number
   */
  export function getLocalVarStackIndex(arg0: se.krka.kahlua.vm.LuaCallFrame, arg1: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<string>
   */
  export function getLotDirectories(): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getLuaDebuggerErrorCount(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<string>
   */
  export function getLuaDebuggerErrors(): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<string>
   */
  export function getLuaStackTrace(): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getMPStatus(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getMapDirectoryTable(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): java.util.ArrayList<string>
   */
  export function getMapFoldersForMod(arg0: string): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): se.krka.kahlua.vm.KahluaTable
   */
  export function getMapInfo(arg0: string): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getMaxActivePlayers(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getMaxPlayers(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getMaximumWorldLevel(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Method arg0, int arg1): string
   */
  export function getMethodParameter(arg0: java.lang.reflect.Method, arg1: number): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Method arg0): number
   */
  export function getMethodParameterCount(arg0: java.lang.reflect.Method): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getMinimumWorldLevel(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getModDirectoryTable(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, boolean arg2): java.io.BufferedReader
   */
  export function getModFileReader(arg0: string, arg1: string, arg2: boolean): java.io.BufferedReader;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, boolean arg2, boolean arg3): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter
   */
  export function getModFileWriter(arg0: string, arg1: string, arg2: boolean, arg3: boolean): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.gameStates.ChooseGameInfo$Mod
   */
  export function getModInfo(arg0: string): zombie.gameStates.ChooseGameInfo$Mod;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.gameStates.ChooseGameInfo$Mod
   */
  export function getModInfoByID(arg0: string): zombie.gameStates.ChooseGameInfo$Mod;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.List<string>
   */
  export function getMods(): java.util.List<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getMouseX(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getMouseXScaled(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getMouseY(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getMouseYScaled(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getMyDocumentFolder(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getNumActivePlayers(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0): number
   */
  export function getNumClassFields(arg0: any): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0): number
   */
  export function getNumClassFunctions(arg0: any): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<zombie.characters.IsoPlayer>
   */
  export function getOnlinePlayers(): java.util.ArrayList<zombie.characters.IsoPlayer>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getOnlineUsername(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): se.krka.kahlua.vm.KahluaTable
   */
  export function getPacketCounts(arg0: number): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.core.PerformanceSettings
   */
  export function getPerformance(): zombie.core.PerformanceSettings;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.characters.IsoPlayer
   */
  export function getPlayer(): zombie.characters.IsoPlayer;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): zombie.characters.IsoPlayer
   */
  export function getPlayerByOnlineID(arg0: number): zombie.characters.IsoPlayer;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.characters.IsoPlayer
   */
  export function getPlayerFromUsername(arg0: string): zombie.characters.IsoPlayer;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): se.krka.kahlua.vm.KahluaTable
   */
  export function getPlayerInfo(arg0: zombie.characters.IsoPlayer): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getPlayerScreenHeight(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getPlayerScreenLeft(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getPlayerScreenTop(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): number
   */
  export function getPlayerScreenWidth(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getPublicServersList(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.iso.IsoPuddles
   */
  export function getPuddlesManager(): zombie.iso.IsoPuddles;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.radio.RadioAPI
   */
  export function getRadioAPI(): zombie.radio.RadioAPI;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getRadioText(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Language arg0): java.util.ArrayList<string>
   */
  export function getRadioTranslators(arg0: zombie.core.Language): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.core.physics.RagdollSettingsManager
   */
  export function getRagdollSettingsManager(): zombie.core.physics.RagdollSettingsManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getRandomUUID(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getRecipeDisplayName(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getReconnectCountdownTimer(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function getRemotePlayModeActive(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.core.SpriteRenderer
   */
  export function getRenderer(): zombie.core.SpriteRenderer;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<zombie.characters.Role>
   */
  export function getRoles(): java.util.ArrayList<zombie.characters.Role>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.radio.StorySounds.SLSoundManager
   */
  export function getSLSoundManager(): zombie.radio.StorySounds.SLSoundManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, boolean arg1, boolean arg2): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter
   */
  export function getSandboxFileWriter(arg0: string, arg1: boolean, arg2: boolean): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.SandboxOptions
   */
  export function getSandboxOptions(): zombie.SandboxOptions;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.List<string>
   */
  export function getSandboxPresets(): java.util.List<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): java.util.ArrayList<java.io.File>
   */
  export function getSaveDirectory(arg0: string): java.util.ArrayList<java.io.File>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getSaveDirectoryTable(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): se.krka.kahlua.vm.KahluaTable
   */
  export function getSaveInfo(arg0: string): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (File arg0): string
   */
  export function getSaveName(arg0: java.io.File): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.scripting.ScriptManager
   */
  export function getScriptManager(): zombie.scripting.ScriptManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.gameStates.SeamEditorState
   */
  export function getSeamEditorState(): zombie.gameStates.SeamEditorState;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.iso.SearchMode
   */
  export function getSearchMode(): zombie.iso.SearchMode;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getServerAddressFromArgs(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getServerIP(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getServerList(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getServerListFile(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function getServerModData(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getServerName(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.network.ServerOptions
   */
  export function getServerOptions(): zombie.network.ServerOptions;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getServerPasswordFromArgs(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): string
   */
  export function getServerPort(): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): number
   */
  export function getServerSavedWorldVersion(arg0: string): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.network.ServerSettingsManager
   */
  export function getServerSettingsManager(): zombie.network.ServerSettingsManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getServerSpawnRegions(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getServerStatistic(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function getServerStatisticEnable(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getShortenedFilename(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.ai.sadisticAIDirector.SleepingEvent
   */
  export function getSleepingEvent(): zombie.ai.sadisticAIDirector.SleepingEvent;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.BaseSoundManager
   */
  export function getSoundManager(): zombie.BaseSoundManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): zombie.characters.IsoPlayer
   */
  export function getSpecificPlayer(arg0: number): zombie.characters.IsoPlayer;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.iso.sprite.IsoSprite
   */
  export function getSprite(arg0: string): zombie.iso.sprite.IsoSprite;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.iso.sprite.IsoSpriteManager
   */
  export function getSpriteManager(arg0: string): zombie.iso.sprite.IsoSpriteManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.gameStates.SpriteModelEditorState
   */
  export function getSpriteModelEditorState(): zombie.gameStates.SpriteModelEditorState;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (double arg0, double arg1, double arg2): zombie.iso.IsoGridSquare
   */
  export function getSquare(arg0: number, arg1: number, arg2: number): zombie.iso.IsoGridSquare;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): se.krka.kahlua.vm.KahluaTable
   */
  export function getMPStatistics(): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.core.textures.Texture
   */
  export function getSteamAvatarFromSteamID(arg0: string): zombie.core.textures.Texture;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.core.textures.Texture
   */
  export function getSteamAvatarFromUsername(arg0: string): zombie.core.textures.Texture;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getSteamIDFromUsername(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function getSteamModeActive(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getSteamProfileNameFromSteamID(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getSteamProfileNameFromUsername(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function getSteamScoreboard(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<string>
   */
  export function getSteamWorkshopItemIDs(): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): java.util.ArrayList<zombie.gameStates.ChooseGameInfo$Mod>
   */
  export function getSteamWorkshopItemMods(arg0: string): java.util.ArrayList<zombie.gameStates.ChooseGameInfo$Mod>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<zombie.core.znet.SteamWorkshopItem>
   */
  export function getSteamWorkshopStagedItems(): java.util.ArrayList<zombie.core.znet.SteamWorkshopItem>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function getStreamModeActive(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1): void
   */
  export function getTableResult(arg0: string, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   *  - (String arg0, Object arg1): string
   *  - (String arg0, Object arg1, Object arg2): string
   *  - (String arg0, Object arg1, Object arg2, Object arg3): string
   *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4): string
   */
  export function getText(arg0: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.ui.TextManager
   */
  export function getTextManager(): zombie.ui.TextManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function getTextMediaEN(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   *  - (String arg0, Object arg1): string
   *  - (String arg0, Object arg1, Object arg2): string
   *  - (String arg0, Object arg1, Object arg2, Object arg3): string
   *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4): string
   */
  export function getTextOrNull(arg0: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.core.textures.Texture
   */
  export function getTexture(arg0: string): zombie.core.textures.Texture;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1): zombie.core.textures.Texture
   */
  export function getTextureFromSaveDir(arg0: string, arg1: string): zombie.core.textures.Texture;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function getTickets(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.gameStates.TileGeometryState
   */
  export function getTileGeometryState(): zombie.gameStates.TileGeometryState;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getTimeInMillis(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getTimestamp(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function getTimestampMs(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Language arg0): java.util.ArrayList<string>
   */
  export function getTranslatorCredits(arg0: zombie.core.Language): java.util.ArrayList<string>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<zombie.characters.NetworkUser>
   */
  export function getUsers(): java.util.ArrayList<zombie.characters.NetworkUser>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): zombie.vehicles.BaseVehicle
   */
  export function getVehicleById(arg0: number): zombie.vehicles.BaseVehicle;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (BaseVehicle arg0): se.krka.kahlua.vm.KahluaTable
   */
  export function getVehicleInfo(arg0: zombie.vehicles.BaseVehicle): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, int arg2): zombie.iso.zones.VehicleZone
   */
  export function getVehicleZoneAt(arg0: number, arg1: number, arg2: number): zombie.iso.zones.VehicleZone;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1, int arg2): zombie.core.textures.VideoTexture
   */
  export function getVideo(arg0: string, arg1: number, arg2: number): zombie.core.textures.VideoTexture;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.core.skinnedmodel.population.VoiceStyles
   */
  export function getVoiceStylesInstance(): zombie.core.skinnedmodel.population.VoiceStyles;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.network.WarManager$War
   */
  export function getWarNearest(): zombie.network.WarManager$War;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): java.util.ArrayList<zombie.network.WarManager$War>
   */
  export function getWars(): java.util.ArrayList<zombie.network.WarManager$War>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.iso.IsoWorld
   */
  export function getWorld(): zombie.iso.IsoWorld;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.iso.WorldMarkers
   */
  export function getWorldMarkers(): zombie.iso.WorldMarkers;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.WorldSoundManager
   */
  export function getWorldSoundManager(): zombie.WorldSoundManager;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoZombie arg0): se.krka.kahlua.vm.KahluaTable
   */
  export function getZombieInfo(arg0: zombie.characters.IsoZombie): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.radio.ZomboidRadio
   */
  export function getZomboidRadio(): zombie.radio.ZomboidRadio;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, int arg2): zombie.iso.zones.Zone
   */
  export function getZone(arg0: number, arg1: number, arg2: number): zombie.iso.zones.Zone;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, int arg2): java.util.ArrayList<zombie.iso.zones.Zone>
   */
  export function getZones(arg0: number, arg1: number, arg2: number): java.util.ArrayList<zombie.iso.zones.Zone>;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1): boolean
   */
  export function hasBreakpoint(arg0: string, arg1: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (KahluaTable arg0, Object arg1): boolean
   */
  export function hasDataBreakpoint(arg0: se.krka.kahlua.vm.KahluaTable, arg1: any): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (KahluaTable arg0, Object arg1): boolean
   */
  export function hasDataReadBreakpoint(arg0: se.krka.kahlua.vm.KahluaTable, arg1: any): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1): boolean
   */
  export function hasItemTag(arg0: string, arg1: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function haveAccess(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function initUISystem(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.inventory.InventoryItem
   *  - (Item arg0): zombie.inventory.InventoryItem
   *  - (String arg0, float arg1): zombie.inventory.InventoryItem
   */
  export function instanceItem(arg0: string | zombie.scripting.objects.Item, arg1?: number): zombie.inventory.InventoryItem;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0, String arg1): boolean
   */
  export function _instanceof_(arg0: any, arg1: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function invalidateLighting(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function inviteFriend(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function is64bit(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function isAccessLevel(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (byte arg0): boolean
   */
  export function isActionDone(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (byte arg0): boolean
   */
  export function isActionRejected(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isAdmin(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isAltKeyDown(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isClient(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isControllerConnected(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isCoopHost(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isCtrlKeyDown(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1): boolean
   */
  export function isCurrentExecutionPoint(arg0: string, arg1: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isDebugEnabled(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isDemo(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isDesktopOpenSupported(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isFloatingGamepadTextInputVisible(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isGamePaused(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isIngameState(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function isItemFood(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, float arg1): boolean
   */
  export function isItemFresh(arg0: string, arg1: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (InventoryItem arg0, ItemContainer arg1, ItemContainer arg2, String arg3): boolean
   */
  export function isItemTransactionConsistent(arg0: zombie.inventory.InventoryItem, arg1: zombie.inventory.ItemContainer, arg2: zombie.inventory.ItemContainer, arg3: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (byte arg0): boolean
   */
  export function isItemTransactionDone(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (byte arg0): boolean
   */
  export function isItemTransactionRejected(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadConnected(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadDown(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadLBPressed(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadLTPressed(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadLeft(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadLeftStickButtonPressed(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): boolean
   */
  export function isJoypadPressed(arg0: number, arg1: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadRBPressed(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadRTPressed(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadRight(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadRightStickButtonPressed(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isJoypadUp(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   *  - (String arg0): boolean
   */
  export function isKeyDown(arg0: number | string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   *  - (String arg0): boolean
   */
  export function isKeyPressed(arg0: number | string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Mod arg0): boolean
   */
  export function isModActive(arg0: zombie.gameStates.ChooseGameInfo$Mod): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isMouseButtonDown(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isMouseButtonPressed(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isMultiplayer(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   */
  export function isPlaystationController(arg0: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isPublicServerListAllowed(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isQuitCooldown(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isServer(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isServerSoftReset(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isShiftKeyDown(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isShowConnectionInfo(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isShowServerInfo(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0): boolean
   */
  export function isSoundPlaying(arg0: any): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isSteamOverlayEnabled(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isSteamRunningOnSteamDeck(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isSystemLinux(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isSystemMacOS(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isSystemWindows(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0, String arg1): boolean
   */
  export function istype(arg0: any, arg1: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function isValidSteamID(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function isValidUserName(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function isXBOXController(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.iso.areas.isoregion.IsoRegionsRenderer
   */
  export function isoRegionsRenderer(): zombie.iso.areas.isoregion.IsoRegionsRenderer;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, float arg1, float arg2, float arg3): number
   */
  export function isoToScreenX(arg0: number, arg1: number, arg2: number, arg3: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, float arg1, float arg2, float arg3): number
   */
  export function isoToScreenY(arg0: number, arg1: number, arg2: number, arg3: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (List arg0, int arg1): any
   */
  export function javaListRemoveAt(arg0: java.util.List<any>, arg1: number): any;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2): zombie.core.skinnedmodel.model.Model
   */
  export function loadSkinnedZomboidModel(arg0: string, arg1: string, arg2: string): zombie.core.skinnedmodel.model.Model;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2): zombie.core.skinnedmodel.model.Model
   */
  export function loadStaticZomboidModel(arg0: string, arg1: string, arg2: string): zombie.core.skinnedmodel.model.Model;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2): zombie.core.skinnedmodel.model.Model
   */
  export function loadVehicleModel(arg0: string, arg1: string, arg2: string): zombie.core.skinnedmodel.model.Model;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2, String arg3, boolean arg4): zombie.core.skinnedmodel.model.Model
   */
  export function loadZomboidModel(arg0: string, arg1: string, arg2: string, arg3: string, arg4: boolean): zombie.core.skinnedmodel.model.Model;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Coroutine arg0, int arg1): string
   */
  export function localVarName(arg0: se.krka.kahlua.vm.Coroutine, arg1: number): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (DebugType arg0, String arg1): void
   */
  export function log(arg0: zombie.debug.DebugType, arg1: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function luaDebug(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1): void
   */
  export function manipulateSavefile(arg0: string, arg1: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1): string
   */
  export function moduleDotType(arg0: string, arg1: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2): void
   */
  export function networkUserAction(arg0: string, arg1: string, arg2: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function openUrl(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function pauseSoundAndMusic(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2, String arg3, boolean arg4): void
   */
  export function ping(arg0: string, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, IsoGridSquare arg1): void
   */
  export function playServerSound(arg0: string, arg1: zombie.iso.IsoGridSquare): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function proceedPM(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function processGeneralMessage(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function processSayMessage(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function processShoutMessage(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (ArrayList arg0, LuaClosure arg1, Object arg2): void
   */
  export function querySteamWorkshopItemDetails(arg0: java.util.ArrayList<string>, arg1: se.krka.kahlua.vm.LuaClosure, arg2: any): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function queueCharEvent(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): void
   */
  export function queueKeyEvent(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1): void
   */
  export function rainConfig(arg0: string, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function reactivateJoypadAfterResetLua(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): void
   */
  export function refreshAnimSets(arg0: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function reloadActionGroups(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function reloadControllerConfigFiles(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function reloadEngineRPM(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function reloadEntitiesDebug(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (GameEntity arg0): void
   */
  export function reloadEntityDebug(arg0: zombie.entity.GameEntity): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (GameEntity arg0): void
   */
  export function reloadEntityFromScriptDebug(arg0: zombie.entity.GameEntity): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function reloadEntityScripts(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function reloadLuaFile(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function reloadModelsMatching(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (ScriptType arg0): void
   */
  export function reloadScripts(arg0: zombie.scripting.ScriptType): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function reloadServerLuaFile(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function reloadSoundFiles(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function reloadVehicleTextures(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function reloadVehicles(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function reloadXui(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (byte arg0, boolean arg1): void
   */
  export function removeAction(arg0: number, arg1: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): void
   */
  export function removeAnimal(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (byte arg0, boolean arg1): void
   */
  export function removeItemTransaction(arg0: number, arg1: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): void
   */
  export function removeTicket(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2): void
   */
  export function removeUserlog(arg0: string, arg1: string, arg2: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2): boolean
   */
  export function renameSavefile(arg0: string, arg1: string, arg2: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, int arg8): void
   */
  export function renderIsoCircle(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, int arg8): void
   */
  export function renderIsoRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9): void
   */
  export function renderLine(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (ItemContainer arg0, InventoryItem arg1, InventoryItem arg2): void
   */
  export function replaceItemInContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.inventory.InventoryItem, arg2: zombie.inventory.InventoryItem): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2): string
   */
  export function replaceWith(arg0: string, arg1: string, arg2: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function requestPVPEvents(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function requestPacketCounts(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function requestRoles(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, IsoPlayer arg1): void
   */
  export function requestTrading(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function requestUserlog(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function requestUsers(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): any
   */
  export function require(arg0: string): any;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function resetRegionFile(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function resumeSoundAndMusic(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function revertToKeyboardAndMouse(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): string
   */
  export function sanitizeWorldName(arg0: string): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): void
   */
  export function save(arg0: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): void
   */
  export function saveControllerSettings(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function saveGame(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function saveModsFile(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function scoreboardUpdate(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, float arg1, float arg2, float arg3): number
   */
  export function screenToIsoX(arg0: number, arg1: number, arg2: number, arg3: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, float arg1, float arg2, float arg3): number
   */
  export function screenToIsoY(arg0: number, arg1: number, arg2: number, arg3: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoAnimal arg0, IsoPlayer arg1, BaseVehicle arg2): void
   *  - (IsoDeadBody arg0, IsoPlayer arg1, BaseVehicle arg2): void
   */
  export function sendAddAnimalFromHandsInTrailer(arg0: zombie.characters.animals.IsoAnimal | zombie.iso.objects.IsoDeadBody, arg1: zombie.characters.IsoPlayer, arg2: zombie.vehicles.BaseVehicle): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoAnimal arg0, IsoPlayer arg1, BaseVehicle arg2): void
   *  - (IsoDeadBody arg0, IsoPlayer arg1, BaseVehicle arg2): void
   */
  export function sendAddAnimalInTrailer(arg0: zombie.characters.animals.IsoAnimal | zombie.iso.objects.IsoDeadBody, arg1: zombie.characters.IsoPlayer, arg2: zombie.vehicles.BaseVehicle): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (ItemContainer arg0, InventoryItem arg1): void
   */
  export function sendAddItemToContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.inventory.InventoryItem): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (ItemContainer arg0, ArrayList arg1): void
   */
  export function sendAddItemsToContainer(arg0: zombie.inventory.ItemContainer, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoAnimal arg0): void
   */
  export function sendAnimalGenome(arg0: zombie.characters.animals.IsoAnimal): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoAnimal arg0, IsoPlayer arg1, IsoObject arg2, boolean arg3): void
   */
  export function sendAttachAnimalToPlayer(arg0: zombie.characters.animals.IsoAnimal, arg1: zombie.characters.IsoPlayer, arg2: zombie.iso.IsoObject, arg3: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoAnimal arg0, IsoPlayer arg1, IsoObject arg2, boolean arg3): void
   */
  export function sendAttachAnimalToTree(arg0: zombie.characters.animals.IsoAnimal, arg1: zombie.characters.IsoPlayer, arg2: zombie.iso.IsoObject, arg3: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoDeadBody arg0, IsoPlayer arg1): void
   */
  export function sendButcherAnimal(arg0: zombie.iso.objects.IsoDeadBody, arg1: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, KahluaTable arg2): void
   *  - (IsoPlayer arg0, String arg1, String arg2, KahluaTable arg3): void
   */
  export function sendClientCommand(arg0: string | zombie.characters.IsoPlayer, arg1: string, arg2: se.krka.kahlua.vm.KahluaTable | string, arg3?: se.krka.kahlua.vm.KahluaTable): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, String arg1, InventoryItem arg2): void
   */
  export function sendClothing(arg0: zombie.characters.IsoPlayer, arg1: string, arg2: zombie.inventory.InventoryItem): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): void
   */
  export function sendDamage(arg0: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoGridSquare arg0, int arg1, String arg2): void
   */
  export function sendDebugStory(arg0: zombie.iso.IsoGridSquare, arg1: number, arg2: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): void
   */
  export function sendEquip(arg0: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, String arg1): void
   */
  export function sendEvent(arg0: zombie.characters.IsoPlayer, arg1: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Faction arg0, IsoPlayer arg1, String arg2): void
   */
  export function sendFactionInvite(arg0: zombie.characters.Faction, arg1: zombie.characters.IsoPlayer, arg2: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoAnimal arg0, IsoPlayer arg1, InventoryItem arg2): void
   */
  export function sendFeedAnimalFromHand(arg0: zombie.characters.animals.IsoAnimal, arg1: zombie.characters.IsoPlayer, arg2: zombie.inventory.InventoryItem): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1): void
   */
  export function sendGoogleAuth(arg0: string, arg1: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, String arg1, String arg2, String arg3, boolean arg4, boolean arg5, boolean arg6, boolean arg7): void
   */
  export function sendHitPlayer(arg0: zombie.characters.IsoPlayer, arg1: string, arg2: string, arg3: string, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoGameCharacter arg0, String arg1, boolean arg2, String arg3, String arg4, boolean arg5): void
   */
  export function sendHitVehicle(arg0: zombie.characters.IsoGameCharacter, arg1: string, arg2: boolean, arg3: string, arg4: string, arg5: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): void
   */
  export function sendHumanVisual(arg0: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoAnimal arg0, IsoPlayer arg1, IsoObject arg2, InventoryItem arg3): void
   */
  export function sendHutchGrabAnimal(arg0: zombie.characters.animals.IsoAnimal, arg1: zombie.characters.IsoPlayer, arg2: zombie.iso.IsoObject, arg3: zombie.inventory.InventoryItem): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoAnimal arg0, IsoPlayer arg1, IsoObject arg2, InventoryItem arg3): void
   */
  export function sendHutchGrabCorpseAction(arg0: zombie.characters.animals.IsoAnimal, arg1: zombie.characters.IsoPlayer, arg2: zombie.iso.IsoObject, arg3: zombie.inventory.InventoryItem): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoAnimal arg0, IsoPlayer arg1, IsoObject arg2): void
   */
  export function sendHutchRemoveAnimalAction(arg0: zombie.characters.animals.IsoAnimal, arg1: zombie.characters.IsoPlayer, arg2: zombie.iso.IsoObject): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, ArrayList arg1, IsoPlayer arg2, String arg3, String arg4): boolean
   */
  export function sendItemListNet(arg0: zombie.characters.IsoPlayer, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>, arg2: zombie.characters.IsoPlayer, arg3: string, arg4: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (InventoryItem arg0): void
   */
  export function sendItemStats(arg0: zombie.inventory.InventoryItem): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoObject arg0, ItemContainer arg1): void
   */
  export function sendItemsInContainer(arg0: zombie.iso.IsoObject, arg1: zombie.inventory.ItemContainer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): void
   */
  export function sendPersonalColor(arg0: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoAnimal arg0, IsoPlayer arg1, AnimalInventoryItem arg2): void
   */
  export function sendPickupAnimal(arg0: zombie.characters.animals.IsoAnimal, arg1: zombie.characters.IsoPlayer, arg2: zombie.inventory.types.AnimalInventoryItem): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function sendPing(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): void
   */
  export function sendPlayerEffects(arg0: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): void
   */
  export function sendPlayerExtraInfo(arg0: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): void
   */
  export function sendPlayerStatsChange(arg0: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoAnimal arg0, IsoPlayer arg1, BaseVehicle arg2, AnimalInventoryItem arg3): void
   *  - (IsoDeadBody arg0, IsoPlayer arg1, BaseVehicle arg2, AnimalInventoryItem arg3): void
   */
  export function sendRemoveAndGrabAnimalFromTrailer(arg0: zombie.characters.animals.IsoAnimal | zombie.iso.objects.IsoDeadBody, arg1: zombie.characters.IsoPlayer, arg2: zombie.vehicles.BaseVehicle, arg3: zombie.inventory.types.AnimalInventoryItem): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoAnimal arg0, IsoPlayer arg1, BaseVehicle arg2): void
   */
  export function sendRemoveAnimalFromTrailer(arg0: zombie.characters.animals.IsoAnimal, arg1: zombie.characters.IsoPlayer, arg2: zombie.vehicles.BaseVehicle): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (ItemContainer arg0, InventoryItem arg1): void
   */
  export function sendRemoveItemFromContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.inventory.InventoryItem): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (ItemContainer arg0, ArrayList arg1): void
   */
  export function sendRemoveItemsFromContainer(arg0: zombie.inventory.ItemContainer, arg1: java.util.ArrayList<zombie.inventory.InventoryItem>): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (ItemContainer arg0, InventoryItem arg1, InventoryItem arg2): void
   */
  export function sendReplaceItemInContainer(arg0: zombie.inventory.ItemContainer, arg1: zombie.inventory.InventoryItem, arg2: zombie.inventory.InventoryItem): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, String arg1): void
   */
  export function sendRequestInventory(arg0: number, arg1: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (SafeHouse arg0, String arg1): void
   */
  export function sendSafehouseChangeMember(arg0: zombie.iso.areas.SafeHouse, arg1: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (SafeHouse arg0, String arg1): void
   */
  export function sendSafehouseChangeOwner(arg0: zombie.iso.areas.SafeHouse, arg1: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (SafeHouse arg0, String arg1, boolean arg2): void
   */
  export function sendSafehouseChangeRespawn(arg0: zombie.iso.areas.SafeHouse, arg1: string, arg2: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (SafeHouse arg0, String arg1): void
   */
  export function sendSafehouseChangeTitle(arg0: zombie.iso.areas.SafeHouse, arg1: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoGridSquare arg0, IsoPlayer arg1, String arg2): void
   */
  export function sendSafehouseClaim(arg0: zombie.iso.IsoGridSquare, arg1: zombie.characters.IsoPlayer, arg2: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (SafeHouse arg0, IsoPlayer arg1, String arg2): void
   */
  export function sendSafehouseInvite(arg0: zombie.iso.areas.SafeHouse, arg1: zombie.characters.IsoPlayer, arg2: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (SafeHouse arg0): void
   */
  export function sendSafehouseRelease(arg0: zombie.iso.areas.SafeHouse): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1, int arg2, int arg3, int arg4, String arg5): void
   */
  export function sendSafezoneClaim(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2, String arg3, boolean arg4, int arg5, String arg6): void
   */
  export function sendSecretKey(arg0: string, arg1: string, arg2: string, arg3: string, arg4: boolean, arg5: number, arg6: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, KahluaTable arg2): void
   *  - (IsoPlayer arg0, String arg1, String arg2, KahluaTable arg3): void
   */
  export function sendServerCommand(arg0: string | zombie.characters.IsoPlayer, arg1: string, arg2: se.krka.kahlua.vm.KahluaTable | string, arg3?: se.krka.kahlua.vm.KahluaTable): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (BaseVehicle arg0, IsoGameCharacter arg1, int arg2, int arg3): void
   */
  export function sendSwitchSeat(arg0: zombie.vehicles.BaseVehicle, arg1: zombie.characters.IsoGameCharacter, arg2: number, arg3: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, byte arg1): void
   */
  export function sendSyncPlayerFields(arg0: zombie.characters.IsoPlayer, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): void
   */
  export function sendVisual(arg0: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, String arg1, State arg2): void
   */
  export function sendWarManagerUpdate(arg0: number, arg1: string, arg2: zombie.network.WarManager$State): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2, String arg3, String arg4, String arg5, String arg6, boolean arg7, boolean arg8, int arg9, String arg10): void
   */
  export function serverConnect(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: string, arg6: string, arg7: boolean, arg8: boolean, arg9: number, arg10: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function serverConnectCoop(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): boolean
   */
  export function serverFileExists(arg0: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): void
   */
  export function setActivePlayer(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function setAdmin(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, int arg2): void
   */
  export function setAggroTarget(arg0: number, arg1: number, arg2: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): void
   */
  export function setBehaviorStep(arg0: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, float arg2): void
   */
  export function setControllerDeadZone(arg0: number, arg1: number, arg2: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): void
   */
  export function setDebugToggleControllerPluggedIn(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1): void
   */
  export function setDefaultRoleFor(arg0: string, arg1: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): void
   */
  export function setGameSpeed(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, String arg2, String arg3, boolean arg4): void
   */
  export function setModelMetaData(arg0: string, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): void
   */
  export function setMouseXY(arg0: number, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, IsoPlayer arg2, String arg3): void
   */
  export function setPlayerJoypad(arg0: number, arg1: number, arg2: zombie.characters.IsoPlayer, arg3: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): void
   */
  export function setPlayerMouse(arg0: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, boolean arg1): void
   */
  export function setPlayerMovementActive(arg0: number, arg1: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, int arg1): void
   */
  export function setProgressBarValue(arg0: zombie.characters.IsoPlayer, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0): void
   */
  export function setPuddles(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1, int arg2): void
   */
  export function setSavefilePlayer1(arg0: string, arg1: string, arg2: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): void
   */
  export function setServerStatisticEnable(arg0: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): void
   */
  export function setShowConnectionInfo(arg0: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): void
   */
  export function setShowPausedMessage(arg0: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): void
   */
  export function setShowServerInfo(arg0: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function setSpawnRegion(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Double... arg0): void
   */
  export function setZoomLevels(arg0: number[]): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Role arg0, String arg1, Color arg2, KahluaTable arg3): void
   */
  export function setupRole(arg0: zombie.characters.Role, arg1: string, arg2: zombie.core.Color, arg3: se.krka.kahlua.vm.KahluaTable): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function showAnimationViewer(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function showAttachmentEditor(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function showChunkDebugger(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function showDebugInfoInChat(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function showFolderInDesktop(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function showGlobalObjectDebugger(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function showSeamEditor(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function showSpriteModelEditor(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0, int arg1, int arg2, int arg3, int arg4): boolean
   */
  export function showSteamFloatingGamepadTextInput(arg0: boolean, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0, boolean arg1, String arg2, int arg3, String arg4): boolean
   */
  export function showSteamGamepadTextInput(arg0: boolean, arg1: boolean, arg2: string, arg3: number, arg4: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function showVehicleEditor(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   */
  export function showWorldMapEditor(arg0: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, String arg2): void
   */
  export function showWrongChatTabMessage(arg0: number, arg1: number, arg2: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoObject arg0): void
   */
  export function sledgeDestroy(arg0: zombie.iso.IsoObject): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, float arg1, float arg2, float arg3, float arg4, int arg5): void
   */
  export function spawnHorde(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1): boolean
   */
  export function spawnpointsExistsForMod(arg0: string, arg1: string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, InventoryItem arg1, IsoGridSquare arg2, KahluaTable arg3): number
   */
  export function startFishingAction(arg0: zombie.characters.IsoPlayer, arg1: zombie.inventory.InventoryItem, arg2: zombie.iso.IsoGridSquare, arg3: se.krka.kahlua.vm.KahluaTable): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): zombie.network.Server
   */
  export function steamGetInternetServerDetails(arg0: number): zombie.network.Server;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function steamReleaseInternetServersRequest(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): number
   */
  export function steamGetInternetServersCount(): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function steamRequestInternetServersList(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1): boolean
   */
  export function steamRequestServerDetails(arg0: string, arg1: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1): boolean
   */
  export function steamRequestServerRules(arg0: string, arg1: number): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function stepForward(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Object arg0): void
   */
  export function stopFire(arg0: any): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function stopPing(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function stopSendSecretKey(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (long arg0): void
   */
  export function stopSound(arg0: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0): void
   */
  export function syncVisuals(arg0: zombie.characters.IsoPlayer): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1): string
   */
  export function tabToX(arg0: string, arg1: number): string;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   *  - (String arg0): void
   */
  export function takeScreenshot(arg0?: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function testHelicopter(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function testSound(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (KahluaTable arg0, Object arg1): void
   */
  export function timSort(arg0: se.krka.kahlua.vm.KahluaTable, arg1: any): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (double arg0): number
   */
  export function toInt(arg0: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (KahluaTable arg0, Object arg1): void
   */
  export function toggleBreakOnChange(arg0: se.krka.kahlua.vm.KahluaTable, arg1: any): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (KahluaTable arg0, Object arg1): void
   */
  export function toggleBreakOnRead(arg0: se.krka.kahlua.vm.KahluaTable, arg1: any): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, int arg1): void
   */
  export function toggleBreakpoint(arg0: string, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Mod arg0, boolean arg1): void
   */
  export function toggleModActive(arg0: zombie.gameStates.ChooseGameInfo$Mod, arg1: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function toggleVehicleRenderToTexture(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, IsoPlayer arg1, InventoryItem arg2): void
   */
  export function tradingUISendAddItem(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: zombie.inventory.InventoryItem): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, IsoPlayer arg1, InventoryItem arg2): void
   */
  export function tradingUISendRemoveItem(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: zombie.inventory.InventoryItem): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (IsoPlayer arg0, IsoPlayer arg1, int arg2): void
   */
  export function tradingUISendUpdateState(arg0: zombie.characters.IsoPlayer, arg1: zombie.characters.IsoPlayer, arg2: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (HashMap arg0): se.krka.kahlua.vm.KahluaTable
   */
  export function transformIntoKahluaTable(arg0: java.util.HashMap<any, any>): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, UIElement arg1, float arg2, float arg3): number
   */
  export function translatePointXInOverheadMapToWindow(arg0: number, arg1: zombie.ui.UIElement, arg2: number, arg3: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, UIElement arg1, float arg2, float arg3): number
   */
  export function translatePointXInOverheadMapToWorld(arg0: number, arg1: zombie.ui.UIElement, arg2: number, arg3: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, UIElement arg1, float arg2, float arg3): number
   */
  export function translatePointYInOverheadMapToWindow(arg0: number, arg1: zombie.ui.UIElement, arg2: number, arg3: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (float arg0, UIElement arg1, float arg2, float arg3): number
   */
  export function translatePointYInOverheadMapToWorld(arg0: number, arg1: zombie.ui.UIElement, arg2: number, arg3: number): number;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1, float arg2, float arg3): void
   */
  export function transmitBigWaterSplash(arg0: number, arg1: number, arg2: number, arg3: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): void
   *  - (String arg0, Object arg1): void
   *  - (String arg0, Object arg1, Object arg2): void
   *  - (String arg0, Object arg1, Object arg2, Object arg3): void
   *  - (String arg0, Object arg1, Object arg2, Object arg3, Object arg4): void
   */
  export function triggerEvent(arg0: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0): zombie.core.textures.Texture
   */
  export function tryGetTexture(arg0: string): zombie.core.textures.Texture;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, boolean arg1, boolean arg2): void
   */
  export function updateChatSettings(arg0: string, arg1: boolean, arg2: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): void
   */
  export function updateFire(): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): void
   */
  export function useStaticErosionRand(arg0: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (boolean arg0): void
   */
  export function useTextureFiltering(arg0: boolean): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0): boolean
   *  - (String arg0): boolean
   */
  export function wasKeyDown(arg0: number | string): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): boolean
   */
  export function wasMouseActiveMoreRecentlyThanJoypad(): boolean;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (String arg0, String arg1): void
   */
  export function writeLog(arg0: string, arg1: string): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): void
   */
  export function zpopClearZombies(arg0: number, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (Empty): zombie.popman.ZombiePopulationRenderer
   */
  export function zpopNewRenderer(): zombie.popman.ZombiePopulationRenderer;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): void
   */
  export function zpopSpawnNow(arg0: number, arg1: number): void;
  /**
   * @noSelf
   *
   * Method Parameters: 
   *  - (int arg0, int arg1): void
   */
  export function zpopSpawnTimeToZero(arg0: number, arg1: number): void;
  export function addEventListener(id: string, listener: any): void;
  export function removeEventListener(id: string, listener: any): void;

/////////////////////////////////////////////
// [PARTIAL] : lua.client.api.partial.d.ts //
/////////////////////////////////////////////

  // [lua/client/Animals/CAnimals_Interact.d.ts]
  export abstract class CAnimals_Interact extends lua.client.Animals.CAnimals_Interact {}

  // [lua/client/Animals/CButcherHook_Interact.d.ts]
  export abstract class CButcherHook_Interact extends lua.client.Animals.CButcherHook_Interact {}

  // [lua/client/Animals/CHutch_Interact.d.ts]
  export abstract class CHutch_Interact extends lua.client.Animals.CHutch_Interact {}

  // [lua/client/Bed/CBed_Interact.d.ts]
  export abstract class CBed_Interact extends lua.client.Bed.CBed_Interact {}

  // [lua/client/BuildingObjects/ISUI/ISBuildMenu.d.ts]
  export abstract class ISBuildMenu extends lua.client.BuildingObjects.ISUI.ISBuildMenu {}

  // [lua/client/BuildingObjects/ISUI/ISInventoryBuildMenu.d.ts]
  export abstract class ISInventoryBuildMenu extends lua.client.BuildingObjects.ISUI.ISInventoryBuildMenu {}

  // [lua/client/BuildingObjects/ISUI/ISPaintMenu.d.ts]
  export abstract class ISPaintMenu extends lua.client.BuildingObjects.ISUI.ISPaintMenu {}

  // [lua/client/BuildingObjects/TimedActions/ISBuildAction.d.ts]
  /** @customConstructor ISBuildAction:new */
  export class ISBuildAction extends lua.client.BuildingObjects.TimedActions.ISBuildAction {}

  // [lua/client/Camping/CCampfireGlobalObject.d.ts]
  /** @customConstructor CCampfireGlobalObject:new */
  export class CCampfireGlobalObject extends lua.client.Camping.CCampfireGlobalObject {}

  // [lua/client/Camping/CCampfireSystem.d.ts]
  /** @customConstructor CCampfireSystem:new */
  export class CCampfireSystem extends lua.client.Camping.CCampfireSystem {}

  // [lua/client/Camping/ISUI/ISCampingInfoWindow.d.ts]
  /** @customConstructor ISCampingInfoWindow:new */
  export class ISCampingInfoWindow extends lua.client.Camping.ISUI.ISCampingInfoWindow {}

  // [lua/client/Camping/ISUI/ISCampingMenu.d.ts]
  export abstract class ISCampingMenu extends lua.client.Camping.ISUI.ISCampingMenu {}

  // [lua/client/Chat/ISAlert.d.ts]
  /** @customConstructor ISAlert:new */
  export class ISAlert extends lua.client.Chat.ISAlert {}

  // [lua/client/Chat/ISChat.d.ts]
  /** @customConstructor ISChat:new */
  export class ISChat extends lua.client.Chat.ISChat {}

  // [lua/client/Context/ISContextManager.d.ts]
  export abstract class ISContextManager extends lua.client.Context.ISContextManager {}

  // [lua/client/Context/ISMenuContext.d.ts]
  export abstract class ISMenuContext extends lua.client.Context.ISMenuContext {}

  // [lua/client/Context/ISMenuContextBuild.d.ts]
  export abstract class ISMenuContextBuild extends lua.client.Context.ISMenuContextBuild {}

  // [lua/client/Context/ISMenuContextInventory.d.ts]
  export abstract class ISMenuContextInventory extends lua.client.Context.ISMenuContextInventory {}

  // [lua/client/Context/ISMenuContextWorld.d.ts]
  export abstract class ISMenuContextWorld extends lua.client.Context.ISMenuContextWorld {}

  // [lua/client/Context/ISMenuElement.d.ts]
  export abstract class ISMenuElement extends lua.client.Context.ISMenuElement {}

  // [lua/client/Context/World/TestMarkers.d.ts]
  export abstract class TestMarkers extends lua.client.Context.World.TestMarkers {}

  // [lua/client/DebugUIs/AdminContextMenu.d.ts]
  export abstract class AdminContextMenu extends lua.client.DebugUIs.AdminContextMenu {}

  // [lua/client/DebugUIs/AnimationClipViewer.d.ts]
  /** @customConstructor AnimationClipViewer:new */
  export class AnimationClipViewer extends lua.client.DebugUIs.AnimationClipViewer {}
  /** @customConstructor AnimationClipViewer_ListBox:new */
  export class AnimationClipViewer_ListBox extends lua.client.DebugUIs.AnimationClipViewer_ListBox {}
  /** @customConstructor AnimationClipViewer_OptionsPanel:new */
  export class AnimationClipViewer_OptionsPanel extends lua.client.DebugUIs.AnimationClipViewer_OptionsPanel {}
  /** @customConstructor AnimationClipViewer_Scene:new */
  export class AnimationClipViewer_Scene extends lua.client.DebugUIs.AnimationClipViewer_Scene {}
  /** @customConstructor AnimationClipViewer_SoundBar:new */
  export class AnimationClipViewer_SoundBar extends lua.client.DebugUIs.AnimationClipViewer_SoundBar {}
  /** @customConstructor AnimationClipViewer_SoundPanel:new */
  export class AnimationClipViewer_SoundPanel extends lua.client.DebugUIs.AnimationClipViewer_SoundPanel {}
  /** @customConstructor AnimationClipViewer_Timeline:new */
  export class AnimationClipViewer_Timeline extends lua.client.DebugUIs.AnimationClipViewer_Timeline {}
  /** @noSelf */
  export const AnimationViewerState_InitUI: () => any;

  // [lua/client/DebugUIs/AttachmentEditorUI.d.ts]
  /** @customConstructor AttachmentEditorUI:new */
  export class AttachmentEditorUI extends lua.client.DebugUIs.AttachmentEditorUI {}
  /** @customConstructor AttachmentEditorUI_EditAttachment:new */
  export class AttachmentEditorUI_EditAttachment extends lua.client.DebugUIs.AttachmentEditorUI_EditAttachment {}
  /** @customConstructor AttachmentEditorUI_EditPanel:new */
  export class AttachmentEditorUI_EditPanel extends lua.client.DebugUIs.AttachmentEditorUI_EditPanel {}
  /** @customConstructor AttachmentEditorUI_ListBox:new */
  export class AttachmentEditorUI_ListBox extends lua.client.DebugUIs.AttachmentEditorUI_ListBox {}
  /** @customConstructor AttachmentEditorUI_Scene:new */
  export class AttachmentEditorUI_Scene extends lua.client.DebugUIs.AttachmentEditorUI_Scene {}
  /** @customConstructor AttachmentEditorUI_SwitchView:new */
  export class AttachmentEditorUI_SwitchView extends lua.client.DebugUIs.AttachmentEditorUI_SwitchView {}
  /** @customConstructor AttachmentEditorUI_WorldAttachmentPanel:new */
  export class AttachmentEditorUI_WorldAttachmentPanel extends lua.client.DebugUIs
    .AttachmentEditorUI_WorldAttachmentPanel {}
  /** @noSelf */
  export const AttachmentEditorState_InitUI: () => any;

  // [lua/client/DebugUIs/BrushTool/BrushToolChooseTileUI.d.ts]
  /** @customConstructor BrushToolChooseTileUI:new */
  export class BrushToolChooseTileUI extends lua.client.DebugUIs.BrushTool.BrushToolChooseTileUI {}
  /** @customConstructor BrushToolTilePickerList:new */
  export class BrushToolTilePickerList extends lua.client.DebugUIs.BrushTool.BrushToolTilePickerList {}

  // [lua/client/DebugUIs/BrushTool/BrushToolManager.d.ts]
  /** @customConstructor BrushToolManager:new */
  export class BrushToolManager extends lua.client.DebugUIs.BrushTool.BrushToolManager {}

  // [lua/client/DebugUIs/BrushTool/FireBrushUI.d.ts]
  /** @customConstructor FireBrushUI:new */
  export class FireBrushUI extends lua.client.DebugUIs.BrushTool.FireBrushUI {}

  // [lua/client/DebugUIs/DebugChunkState/DebugChunkState_ObjectAtCursorPanel.d.ts]
  /** @customConstructor DebugChunkState_ObjectAtCursorPanel:new */
  export class DebugChunkState_ObjectAtCursorPanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkState_ObjectAtCursorPanel {}

  // [lua/client/DebugUIs/DebugChunkState/DebugChunkState_ObjectPickerPanel.d.ts]
  /** @customConstructor DebugChunkState_ObjectPickerPanel:new */
  export class DebugChunkState_ObjectPickerPanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkState_ObjectPickerPanel {}

  // [lua/client/DebugUIs/DebugChunkState/DebugChunkState_ObjectProperties.d.ts]
  /** @customConstructor DebugChunkStateUI_ObjPropsHandler:new */
  export class DebugChunkStateUI_ObjPropsHandler extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_ObjPropsHandler {}
  /** @customConstructor DebugChunkStateUI_ObjPropsPanel:new */
  export class DebugChunkStateUI_ObjPropsPanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_ObjPropsPanel {}

  // [lua/client/DebugUIs/DebugChunkState/DebugChunkState_SquarePanel.d.ts]
  /** @customConstructor DebugChunkStateUI_SquarePanel:new */
  export class DebugChunkStateUI_SquarePanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_SquarePanel {}
  /** @customConstructor DebugChunkStateUI_SquarePropsHandler:new */
  export class DebugChunkStateUI_SquarePropsHandler extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_SquarePropsHandler {}

  // [lua/client/DebugUIs/DebugChunkState/DebugChunkState_Tools.d.ts]
  /** @customConstructor DebugChunkStateUI_DragCameraTool:new */
  export class DebugChunkStateUI_DragCameraTool extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_DragCameraTool {}
  /** @customConstructor DebugChunkStateUI_Tool:new */
  export class DebugChunkStateUI_Tool extends lua.client.DebugUIs.DebugChunkState.DebugChunkStateUI_Tool {}

  // [lua/client/DebugUIs/DebugChunkState/DebugChunkState_VehicleStoryPanel.d.ts]
  /** @customConstructor DebugChunkState_VehicleStoryPanel:new */
  export class DebugChunkState_VehicleStoryPanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkState_VehicleStoryPanel {}

  // [lua/client/DebugUIs/DebugChunkState/DebugChunkStateUI.d.ts]
  /** @customConstructor DebugChunkStateUI:new */
  export class DebugChunkStateUI extends lua.client.DebugUIs.DebugChunkState.DebugChunkStateUI {}
  /** @customConstructor DebugChunkStateUI_OptionsPanel:new */
  export class DebugChunkStateUI_OptionsPanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_OptionsPanel {}
  /** @customConstructor DebugChunkStateUI_SpritePopupPanel:new */
  export class DebugChunkStateUI_SpritePopupPanel extends lua.client.DebugUIs.DebugChunkState
    .DebugChunkStateUI_SpritePopupPanel {}

  // [lua/client/DebugUIs/DebugChunkState/ISSectionedPanel.d.ts]
  /** @customConstructor ISSectionedPanel:new */
  export class ISSectionedPanel extends lua.client.DebugUIs.DebugChunkState.ISSectionedPanel {}
  /** @customConstructor ISSectionedPanel_Section:new */
  export class ISSectionedPanel_Section extends lua.client.DebugUIs.DebugChunkState.ISSectionedPanel_Section {}

  // [lua/client/DebugUIs/DebugContextMenu.d.ts]
  export abstract class DebugContextMenu extends lua.client.DebugUIs.DebugContextMenu {}

  // [lua/client/DebugUIs/DebugErrorsWindow.d.ts]
  /** @customConstructor DebugErrorsWindow:new */
  export class DebugErrorsWindow extends lua.client.DebugUIs.DebugErrorsWindow {}

  // [lua/client/DebugUIs/DebuggerContextMenu.d.ts]
  /** @customConstructor DebuggerContextMenu:new */
  export class DebuggerContextMenu extends lua.client.DebugUIs.DebuggerContextMenu {}
  /** @noSelf */
  export const getDebuggerContextMenu: () => any;

  // [lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_PropertiesPanel.d.ts]
  /** @customConstructor DebugGlobalObjectState_BasePropertiesPanel:new */
  export class DebugGlobalObjectState_BasePropertiesPanel extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectState_BasePropertiesPanel {}
  /** @customConstructor DebugGlobalObjectState_GlobalObjectPanel:new */
  export class DebugGlobalObjectState_GlobalObjectPanel extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectState_GlobalObjectPanel {}
  /** @customConstructor DebugGlobalObjectState_IsoObjectPanel:new */
  export class DebugGlobalObjectState_IsoObjectPanel extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectState_IsoObjectPanel {}
  /** @customConstructor DebugGlobalObjectState_PropertiesPanel:new */
  export class DebugGlobalObjectState_PropertiesPanel extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectState_PropertiesPanel {}
  /** @customConstructor DebugGlobalObjectState_SystemPanel:new */
  export class DebugGlobalObjectState_SystemPanel extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectState_SystemPanel {}

  // [lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectState_Tools.d.ts]
  /** @customConstructor DebugGlobalObjectStateUI_DragCameraTool:new */
  export class DebugGlobalObjectStateUI_DragCameraTool extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectStateUI_DragCameraTool {}
  /** @customConstructor DebugGlobalObjectStateUI_Tool:new */
  export class DebugGlobalObjectStateUI_Tool extends lua.client.DebugUIs.DebugGlobalObjectState
    .DebugGlobalObjectStateUI_Tool {}

  // [lua/client/DebugUIs/DebugGlobalObjectState/DebugGlobalObjectStateUI.d.ts]
  /** @customConstructor DebugGlobalObjectStateUI:new */
  export class DebugGlobalObjectStateUI extends lua.client.DebugUIs.DebugGlobalObjectState.DebugGlobalObjectStateUI {}

  // [lua/client/DebugUIs/DebugLogSettings.d.ts]
  /** @customConstructor DebugLogSettings:new */
  export class DebugLogSettings extends lua.client.DebugUIs.DebugLogSettings {}

  // [lua/client/DebugUIs/DebugMenu/Anims/FloatArrayPlotter.d.ts]
  /** @customConstructor FloatArrayPlotter:new */
  export class FloatArrayPlotter extends lua.client.DebugUIs.DebugMenu.Anims.FloatArrayPlotter {}

  // [lua/client/DebugUIs/DebugMenu/Anims/ISAnimDebugMonitor.d.ts]
  /** @customConstructor ISAnimDebugMonitor:new */
  export class ISAnimDebugMonitor extends lua.client.DebugUIs.DebugMenu.Anims.ISAnimDebugMonitor {}

  // [lua/client/DebugUIs/DebugMenu/Anims/ISAnimLoggerOutput.d.ts]
  /** @customConstructor ISAnimLoggerOutput:new */
  export class ISAnimLoggerOutput extends lua.client.DebugUIs.DebugMenu.Anims.ISAnimLoggerOutput {}

  // [lua/client/DebugUIs/DebugMenu/Audio/ISAudioDebugPanel.d.ts]
  /** @customConstructor ISAudioDebugPanel:new */
  export class ISAudioDebugPanel extends lua.client.DebugUIs.DebugMenu.Audio.ISAudioDebugPanel {}

  // [lua/client/DebugUIs/DebugMenu/Audio/ISFMODEventPlayerPanel.d.ts]
  /** @customConstructor ISFMODEventPlayerPanel:new */
  export class ISFMODEventPlayerPanel extends lua.client.DebugUIs.DebugMenu.Audio.ISFMODEventPlayerPanel {}
  /** @customConstructor ISFMODEventPlayerParameterEditor:new */
  export class ISFMODEventPlayerParameterEditor extends lua.client.DebugUIs.DebugMenu.Audio
    .ISFMODEventPlayerParameterEditor {}

  // [lua/client/DebugUIs/DebugMenu/Audio/ISMusicIntensityEventsPanel.d.ts]
  /** @customConstructor ISMusicIntensityEventsPanel:new */
  export class ISMusicIntensityEventsPanel extends lua.client.DebugUIs.DebugMenu.Audio.ISMusicIntensityEventsPanel {}

  // [lua/client/DebugUIs/DebugMenu/Audio/ISMusicThreatStatusPanel.d.ts]
  /** @customConstructor ISMusicThreatStatusPanel:new */
  export class ISMusicThreatStatusPanel extends lua.client.DebugUIs.DebugMenu.Audio.ISMusicThreatStatusPanel {}

  // [lua/client/DebugUIs/DebugMenu/Base/ISDebugPanelBase.d.ts]
  /** @customConstructor ISDebugPanelBase:new */
  export class ISDebugPanelBase extends lua.client.DebugUIs.DebugMenu.Base.ISDebugPanelBase {}

  // [lua/client/DebugUIs/DebugMenu/Base/ISDebugSubPanelBase.d.ts]
  /** @customConstructor ISDebugSubPanelBase:new */
  export class ISDebugSubPanelBase extends lua.client.DebugUIs.DebugMenu.Base.ISDebugSubPanelBase {}

  // [lua/client/DebugUIs/DebugMenu/Climate/ClimateColorsDebug.d.ts]
  /** @customConstructor ClimateColorsDebug:new */
  export class ClimateColorsDebug extends lua.client.DebugUIs.DebugMenu.Climate.ClimateColorsDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/ClimateControlDebug.d.ts]
  /** @customConstructor ClimateControlDebug:new */
  export class ClimateControlDebug extends lua.client.DebugUIs.DebugMenu.Climate.ClimateControlDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/ClimateDebug.d.ts]
  /** @customConstructor ClimateDebug:new */
  export class ClimateDebug extends lua.client.DebugUIs.DebugMenu.Climate.ClimateDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/ClimateOptionsDebug.d.ts]
  /** @customConstructor ClimateOptionsDebug:new */
  export class ClimateOptionsDebug extends lua.client.DebugUIs.DebugMenu.Climate.ClimateOptionsDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/ClimDebuggersPanel.d.ts]
  /** @customConstructor ClimDebuggersPanel:new */
  export class ClimDebuggersPanel extends lua.client.DebugUIs.DebugMenu.Climate.ClimDebuggersPanel {}

  // [lua/client/DebugUIs/DebugMenu/Climate/DailyValuesDebug.d.ts]
  /** @customConstructor DailyValuesDebug:new */
  export class DailyValuesDebug extends lua.client.DebugUIs.DebugMenu.Climate.DailyValuesDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/ForecasterDebug.d.ts]
  /** @customConstructor ForecasterDebug:new */
  export class ForecasterDebug extends lua.client.DebugUIs.DebugMenu.Climate.ForecasterDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/NewFogDebug.d.ts]
  /** @customConstructor NewFogDebug:new */
  export class NewFogDebug extends lua.client.DebugUIs.DebugMenu.Climate.NewFogDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/PlayerClimateDebug.d.ts]
  /** @customConstructor PlayerClimateDebug:new */
  export class PlayerClimateDebug extends lua.client.DebugUIs.DebugMenu.Climate.PlayerClimateDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/PopupColorEdit.d.ts]
  /** @customConstructor PopupColorEdit:new */
  export class PopupColorEdit extends lua.client.DebugUIs.DebugMenu.Climate.PopupColorEdit {}

  // [lua/client/DebugUIs/DebugMenu/Climate/ThermoDebug.d.ts]
  /** @customConstructor ThermoDebug:new */
  export class ThermoDebug extends lua.client.DebugUIs.DebugMenu.Climate.ThermoDebug {}
  export abstract class ThermoDebug extends lua.client.DebugUIs.DebugMenu.Climate.ThermoDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/ThunderDebug.d.ts]
  /** @customConstructor ThunderDebug:new */
  export class ThunderDebug extends lua.client.DebugUIs.DebugMenu.Climate.ThunderDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/ValuePlotter.d.ts]
  /** @customConstructor ValuePlotter:new */
  export class ValuePlotter extends lua.client.DebugUIs.DebugMenu.Climate.ValuePlotter {}

  // [lua/client/DebugUIs/DebugMenu/Climate/WeatherFXDebug.d.ts]
  /** @customConstructor WeatherFXDebug:new */
  export class WeatherFXDebug extends lua.client.DebugUIs.DebugMenu.Climate.WeatherFXDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/WeatherPeriodDebug.d.ts]
  /** @customConstructor WeatherPeriodDebug:new */
  export class WeatherPeriodDebug extends lua.client.DebugUIs.DebugMenu.Climate.WeatherPeriodDebug {}

  // [lua/client/DebugUIs/DebugMenu/Climate/WindDebug.d.ts]
  /** @customConstructor WindDebug:new */
  export class WindDebug extends lua.client.DebugUIs.DebugMenu.Climate.WindDebug {}

  // [lua/client/DebugUIs/DebugMenu/Entity/ISEntitiesDebugWindow.d.ts]
  /** @customConstructor ISEntitiesDebugWindow:new */
  export class ISEntitiesDebugWindow extends lua.client.DebugUIs.DebugMenu.Entity.ISEntitiesDebugWindow {}

  // [lua/client/DebugUIs/DebugMenu/Entity/ISEntityInstancesPanel.d.ts]
  /** @customConstructor ISEntityInstancesPanel:new */
  export class ISEntityInstancesPanel extends lua.client.DebugUIs.DebugMenu.Entity.ISEntityInstancesPanel {}

  // [lua/client/DebugUIs/DebugMenu/Entity/ISEntityScriptsPanel.d.ts]
  /** @customConstructor ISEntityScriptsPanel:new */
  export class ISEntityScriptsPanel extends lua.client.DebugUIs.DebugMenu.Entity.ISEntityScriptsPanel {}

  // [lua/client/DebugUIs/DebugMenu/Entity/ISEntityViewPanel.d.ts]
  /** @customConstructor ISEntityViewPanel:new */
  export class ISEntityViewPanel extends lua.client.DebugUIs.DebugMenu.Entity.ISEntityViewPanel {}

  // [lua/client/DebugUIs/DebugMenu/Entity/ISEntityViewWindow.d.ts]
  /** @customConstructor ISEntityViewWindow:new */
  export class ISEntityViewWindow extends lua.client.DebugUIs.DebugMenu.Entity.ISEntityViewWindow {}

  // [lua/client/DebugUIs/DebugMenu/Fluids/ISFluidCategoriesViewPanel.d.ts]
  /** @customConstructor ISFluidCategoriesViewPanel:new */
  export class ISFluidCategoriesViewPanel extends lua.client.DebugUIs.DebugMenu.Fluids.ISFluidCategoriesViewPanel {}

  // [lua/client/DebugUIs/DebugMenu/Fluids/ISFluidDebugWindow.d.ts]
  /** @customConstructor ISFluidDebugWindow:new */
  export class ISFluidDebugWindow extends lua.client.DebugUIs.DebugMenu.Fluids.ISFluidDebugWindow {}

  // [lua/client/DebugUIs/DebugMenu/Fluids/ISFluidItemsViewPanel.d.ts]
  /** @customConstructor ISFluidItemsViewPanel:new */
  export class ISFluidItemsViewPanel extends lua.client.DebugUIs.DebugMenu.Fluids.ISFluidItemsViewPanel {}

  // [lua/client/DebugUIs/DebugMenu/Fluids/ISFluidMixerViewPanel.d.ts]
  /** @customConstructor ISFluidMixerViewPanel:new */
  export class ISFluidMixerViewPanel extends lua.client.DebugUIs.DebugMenu.Fluids.ISFluidMixerViewPanel {}

  // [lua/client/DebugUIs/DebugMenu/Fluids/ISFluidOverviewPanel.d.ts]
  /** @customConstructor ISFluidOverviewPanel:new */
  export class ISFluidOverviewPanel extends lua.client.DebugUIs.DebugMenu.Fluids.ISFluidOverviewPanel {}

  // [lua/client/DebugUIs/DebugMenu/Fluids/ISFluidViewPanel.d.ts]
  /** @customConstructor ISFluidViewPanel:new */
  export class ISFluidViewPanel extends lua.client.DebugUIs.DebugMenu.Fluids.ISFluidViewPanel {}

  // [lua/client/DebugUIs/DebugMenu/General/ISBulletTracerEffect.d.ts]
  /** @customConstructor ISBulletTracerEffect:new */
  export class ISBulletTracerEffect extends lua.client.DebugUIs.DebugMenu.General.ISBulletTracerEffect {}

  // [lua/client/DebugUIs/DebugMenu/General/ISCheatPanelUI.d.ts]
  /** @customConstructor ISCheatPanelUI:new */
  export class ISCheatPanelUI extends lua.client.DebugUIs.DebugMenu.General.ISCheatPanelUI {}

  // [lua/client/DebugUIs/DebugMenu/General/ISDebugBlood.d.ts]
  /** @customConstructor ISDebugBlood:new */
  export class ISDebugBlood extends lua.client.DebugUIs.DebugMenu.General.ISDebugBlood {}

  // [lua/client/DebugUIs/DebugMenu/General/ISGameDebugPanel.d.ts]
  /** @customConstructor ISGameDebugPanel:new */
  export class ISGameDebugPanel extends lua.client.DebugUIs.DebugMenu.General.ISGameDebugPanel {}

  // [lua/client/DebugUIs/DebugMenu/General/ISGeneralCheats.d.ts]
  /** @customConstructor ISGeneralCheats:new */
  export class ISGeneralCheats extends lua.client.DebugUIs.DebugMenu.General.ISGeneralCheats {}

  // [lua/client/DebugUIs/DebugMenu/General/ISGeneralDebug.d.ts]
  /** @customConstructor ISGeneralDebug:new */
  export class ISGeneralDebug extends lua.client.DebugUIs.DebugMenu.General.ISGeneralDebug {}

  // [lua/client/DebugUIs/DebugMenu/General/ISSearchMode.d.ts]
  /** @customConstructor ISSearchMode:new */
  export class ISSearchMode extends lua.client.DebugUIs.DebugMenu.General.ISSearchMode {}

  // [lua/client/DebugUIs/DebugMenu/General/ISStatsAndBody.d.ts]
  /** @customConstructor ISStatsAndBody:new */
  export class ISStatsAndBody extends lua.client.DebugUIs.DebugMenu.General.ISStatsAndBody {}

  // [lua/client/DebugUIs/DebugMenu/GlobalModData/GlobalModData.d.ts]
  /** @customConstructor GlobalModDataDebug:new */
  export class GlobalModDataDebug extends lua.client.DebugUIs.DebugMenu.GlobalModData.GlobalModDataDebug {}

  // [lua/client/DebugUIs/DebugMenu/GlobalModData/GlobalModDataTest.d.ts]

  // [lua/client/DebugUIs/DebugMenu/ISDebugMenu.d.ts]
  /** @customConstructor ISDebugMenu:new */
  export class ISDebugMenu extends lua.client.DebugUIs.DebugMenu.ISDebugMenu {}
  /** @noSelf */
  export const doNewUIDebug: () => any;

  // [lua/client/DebugUIs/DebugMenu/ISDebugUtils.d.ts]
  export abstract class ISDebugUtils extends lua.client.DebugUIs.DebugMenu.ISDebugUtils {}

  // [lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionDebug.d.ts]
  /** @customConstructor IsoRegionDebug:new */
  export class IsoRegionDebug extends lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionDebug {}

  // [lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionDetails.d.ts]
  /** @customConstructor IsoRegionDetails:new */
  export class IsoRegionDetails extends lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionDetails {}

  // [lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionLogWindow.d.ts]
  /** @customConstructor IsoRegionLogWindow:new */
  export class IsoRegionLogWindow extends lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionLogWindow {}

  // [lua/client/DebugUIs/DebugMenu/IsoRegions/IsoRegionsWindow.d.ts]
  /** @customConstructor IsoRegionsWindow:new */
  export class IsoRegionsWindow extends lua.client.DebugUIs.DebugMenu.IsoRegions.IsoRegionsWindow {}
  /** @noSelf */
  export const newIsoRegionsWindow: () => any;

  // [lua/client/DebugUIs/DebugMenu/Physics/DebugRagdollPanel.d.ts]
  /** @customConstructor DebugRagdollPanel:new */
  export class DebugRagdollPanel extends lua.client.DebugUIs.DebugMenu.Physics.DebugRagdollPanel {}

  // [lua/client/DebugUIs/DebugMenu/Physics/ForceHitReactionPanel.d.ts]
  /** @customConstructor ForceHitReactionPanel:new */
  export class ForceHitReactionPanel extends lua.client.DebugUIs.DebugMenu.Physics.ForceHitReactionPanel {}

  // [lua/client/DebugUIs/DebugMenu/Physics/HitReactionSettingsPanel.d.ts]
  /** @customConstructor HitReactionSettingsPanel:new */
  export class HitReactionSettingsPanel extends lua.client.DebugUIs.DebugMenu.Physics.HitReactionSettingsPanel {}

  // [lua/client/DebugUIs/DebugMenu/Physics/RagdollSettingsPanel.d.ts]
  /** @customConstructor RagdollSettingsPanel:new */
  export class RagdollSettingsPanel extends lua.client.DebugUIs.DebugMenu.Physics.RagdollSettingsPanel {}

  // [lua/client/DebugUIs/DebugMenu/Player/ISCharacterDebugUI.d.ts]
  /** @customConstructor ISCharacterDebugUI:new */
  export class ISCharacterDebugUI extends lua.client.DebugUIs.DebugMenu.Player.ISCharacterDebugUI {}

  // [lua/client/DebugUIs/DebugMenu/Puddles/PuddlesControl.d.ts]
  /** @customConstructor PuddlesControl:new */
  export class PuddlesControl extends lua.client.DebugUIs.DebugMenu.Puddles.PuddlesControl {}

  // [lua/client/DebugUIs/DebugMenu/Puddles/PuddlesPeriodDebug.d.ts]
  /** @customConstructor PuddlesPeriodDebug:new */
  export class PuddlesPeriodDebug extends lua.client.DebugUIs.DebugMenu.Puddles.PuddlesPeriodDebug {}

  // [lua/client/DebugUIs/DebugMenu/radio/RadioScriptDebugger.d.ts]
  /** @customConstructor RadioScriptDebugger:new */
  export class RadioScriptDebugger extends lua.client.DebugUIs.DebugMenu.radio.RadioScriptDebugger {}

  // [lua/client/DebugUIs/DebugMenu/radio/ZomboidRadioDebug.d.ts]
  /** @customConstructor ZomboidRadioDebug:new */
  export class ZomboidRadioDebug extends lua.client.DebugUIs.DebugMenu.radio.ZomboidRadioDebug {}

  // [lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeDbgWindow.d.ts]
  /** @customConstructor ISCraftRecipeDbgWindow:new */
  export class ISCraftRecipeDbgWindow extends lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeDbgWindow {}

  // [lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeIconsPanel.d.ts]
  /** @customConstructor ISCraftRecipeIconsPanel:new */
  export class ISCraftRecipeIconsPanel extends lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeIconsPanel {}

  // [lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeMonitor.d.ts]
  /** @customConstructor ISCraftRecipeMonitor:new */
  export class ISCraftRecipeMonitor extends lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeMonitor {}

  // [lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeOverviewPanel.d.ts]
  /** @customConstructor ISCraftRecipeOverviewPanel:new */
  export class ISCraftRecipeOverviewPanel extends lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeOverviewPanel {}

  // [lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeQueriesPanel.d.ts]
  /** @customConstructor ISCraftRecipeQueriesPanel:new */
  export class ISCraftRecipeQueriesPanel extends lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeQueriesPanel {}

  // [lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeTagsDebugPanel.d.ts]
  /** @customConstructor ISCraftRecipeTagsDebugPanel:new */
  export class ISCraftRecipeTagsDebugPanel extends lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeTagsDebugPanel {}

  // [lua/client/DebugUIs/DebugMenu/Recipes/ISCraftRecipeTagsPanel.d.ts]
  /** @customConstructor ISCraftRecipeTagsPanel:new */
  export class ISCraftRecipeTagsPanel extends lua.client.DebugUIs.DebugMenu.Recipes.ISCraftRecipeTagsPanel {}

  // [lua/client/DebugUIs/DebugMenu/Recipes/ISRecipeMonitor.d.ts]
  /** @customConstructor ISRecipeMonitor:new */
  export class ISRecipeMonitor extends lua.client.DebugUIs.DebugMenu.Recipes.ISRecipeMonitor {}

  // [lua/client/DebugUIs/DebugMenu/Scripts/ISScriptsDebugWindow.d.ts]
  /** @customConstructor ISScriptsDebugWindow:new */
  export class ISScriptsDebugWindow extends lua.client.DebugUIs.DebugMenu.Scripts.ISScriptsDebugWindow {}

  // [lua/client/DebugUIs/DebugMenu/Scripts/ISScriptViewPanel.d.ts]
  /** @customConstructor ISScriptViewPanel:new */
  export class ISScriptViewPanel extends lua.client.DebugUIs.DebugMenu.Scripts.ISScriptViewPanel {}

  // [lua/client/DebugUIs/DebugMenu/Scripts/ISScriptViewWindow.d.ts]
  /** @customConstructor ISScriptViewWindow:new */
  export class ISScriptViewWindow extends lua.client.DebugUIs.DebugMenu.Scripts.ISScriptViewWindow {}

  // [lua/client/DebugUIs/DebugMenu/Scripts/ISStringListView.d.ts]
  /** @customConstructor ISStringListView:new */
  export class ISStringListView extends lua.client.DebugUIs.DebugMenu.Scripts.ISStringListView {}
  export abstract class ISStringListViewNode extends lua.client.DebugUIs.DebugMenu.Scripts.ISStringListViewNode {}

  // [lua/client/DebugUIs/DebugMenu/Statistic/ISGameStatisticPanel.d.ts]
  /** @customConstructor ISGameStatisticPanel:new */
  export class ISGameStatisticPanel extends lua.client.DebugUIs.DebugMenu.Statistic.ISGameStatisticPanel {}

  // [lua/client/DebugUIs/DebugMenu/Statistic/StatisticChart.d.ts]
  /** @customConstructor StatisticChart:new */
  export class StatisticChart extends lua.client.DebugUIs.DebugMenu.Statistic.StatisticChart {}

  // [lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartDiskOperations.d.ts]
  /** @customConstructor StatisticChartDiskOperations:new */
  export class StatisticChartDiskOperations extends lua.client.DebugUIs.DebugMenu.Statistic
    .StatisticChartDiskOperations {}

  // [lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartMemory.d.ts]
  /** @customConstructor StatisticChartMemory:new */
  export class StatisticChartMemory extends lua.client.DebugUIs.DebugMenu.Statistic.StatisticChartMemory {}

  // [lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartPackets.d.ts]
  /** @customConstructor StatisticChartPackets:new */
  export class StatisticChartPackets extends lua.client.DebugUIs.DebugMenu.Statistic.StatisticChartPackets {}

  // [lua/client/DebugUIs/DebugMenu/Statistic/StatisticChartUpdatePeriod.d.ts]
  /** @customConstructor StatisticChartUpdatePeriod:new */
  export class StatisticChartUpdatePeriod extends lua.client.DebugUIs.DebugMenu.Statistic.StatisticChartUpdatePeriod {}

  // [lua/client/DebugUIs/DebugMenu/UnitTests/UnitTestsDebug.d.ts]
  /** @customConstructor UnitTestsDebug:new */
  export class UnitTestsDebug extends lua.client.DebugUIs.DebugMenu.UnitTests.UnitTestsDebug {}

  // [lua/client/DebugUIs/DebugMenu/UnitTests/UnitTestsTimedActionsPanel.d.ts]
  /** @customConstructor UnitTestsTimedActionsPanel:new */
  export class UnitTestsTimedActionsPanel extends lua.client.DebugUIs.DebugMenu.UnitTests.UnitTestsTimedActionsPanel {}
  export abstract class UnitTestsTimedActionsPanelTestResults extends lua.client.DebugUIs.DebugMenu.UnitTests
    .UnitTestsTimedActionsPanelTestResults {}

  // [lua/client/DebugUIs/DebugMenu/WorldFlares/WorldFlaresDebug.d.ts]
  /** @customConstructor WorldFlaresDebug:new */
  export class WorldFlaresDebug extends lua.client.DebugUIs.DebugMenu.WorldFlares.WorldFlaresDebug {}

  // [lua/client/DebugUIs/DebugMenu/Xui/XuiDebugLayoutWindow.d.ts]
  /** @customConstructor XuiDebugLayoutWindow:new */
  export class XuiDebugLayoutWindow extends lua.client.DebugUIs.DebugMenu.Xui.XuiDebugLayoutWindow {}

  // [lua/client/DebugUIs/DebugMenu/Xui/XuiDebugWindow.d.ts]
  /** @customConstructor XuiDebugWindow:new */
  export class XuiDebugWindow extends lua.client.DebugUIs.DebugMenu.Xui.XuiDebugWindow {}

  // [lua/client/DebugUIs/DebugMenu/Xui/XuiTestWindow.d.ts]
  /** @customConstructor XuiTestWindow:new */
  export class XuiTestWindow extends lua.client.DebugUIs.DebugMenu.Xui.XuiTestWindow {}

  // [lua/client/DebugUIs/DebugOptionsWindow.d.ts]
  /** @customConstructor DebugOptionsWindow:new */
  export class DebugOptionsWindow extends lua.client.DebugUIs.DebugOptionsWindow {}

  // [lua/client/DebugUIs/DebugScenarios.d.ts]
  /** @customConstructor DebugScenarios:new */
  export class DebugScenarios extends lua.client.DebugUIs.DebugScenarios {}
  /** @noSelf */
  export const doDebugScenarios: () => any;

  // [lua/client/DebugUIs/DebugToolstrip.d.ts]
  /** @customConstructor DebugToolstrip:new */
  export class DebugToolstrip extends lua.client.DebugUIs.DebugToolstrip {}

  // [lua/client/DebugUIs/DeviceInspector.d.ts]
  /** @customConstructor DeviceInspector:new */
  export class DeviceInspector extends lua.client.DebugUIs.DeviceInspector {}

  // [lua/client/DebugUIs/ISAttachedItemsUI.d.ts]
  /** @customConstructor ISAttachedItemsUI:new */
  export class ISAttachedItemsUI extends lua.client.DebugUIs.ISAttachedItemsUI {}

  // [lua/client/DebugUIs/ISDebugAnimationTextUI.d.ts]
  /** @customConstructor ISDebugAnimationTextUI:new */
  export class ISDebugAnimationTextUI extends lua.client.DebugUIs.ISDebugAnimationTextUI {}

  // [lua/client/DebugUIs/ISExtAnimListDebugUI.d.ts]
  /** @customConstructor ISExtAnimListDebugUI:new */
  export class ISExtAnimListDebugUI extends lua.client.DebugUIs.ISExtAnimListDebugUI {}

  // [lua/client/DebugUIs/ISFastTeleportMove.d.ts]
  export abstract class ISFastTeleportMove extends lua.client.DebugUIs.ISFastTeleportMove {}

  // [lua/client/DebugUIs/ISLootStressTestUI.d.ts]
  /** @customConstructor ISLootStreetTestUI:new */
  export class ISLootStreetTestUI extends lua.client.DebugUIs.ISLootStreetTestUI {}

  // [lua/client/DebugUIs/ISRemoveItemTool.d.ts]
  /** @customConstructor ISRemoveItemTool:new */
  export class ISRemoveItemTool extends lua.client.DebugUIs.ISRemoveItemTool {}

  // [lua/client/DebugUIs/ISRunningDebugUI.d.ts]
  /** @customConstructor ISRunningDebugUI:new */
  export class ISRunningDebugUI extends lua.client.DebugUIs.ISRunningDebugUI {}

  // [lua/client/DebugUIs/ISSpawnHordeUI.d.ts]
  /** @customConstructor ISSpawnHordeUI:new */
  export class ISSpawnHordeUI extends lua.client.DebugUIs.ISSpawnHordeUI {}

  // [lua/client/DebugUIs/ISSpawnPointsEditor.d.ts]
  /** @customConstructor ISSpawnPointsEditor:new */
  export class ISSpawnPointsEditor extends lua.client.DebugUIs.ISSpawnPointsEditor {}

  // [lua/client/DebugUIs/ISSpawnVehicleUI.d.ts]
  /** @customConstructor ISSpawnVehicleUI:new */
  export class ISSpawnVehicleUI extends lua.client.DebugUIs.ISSpawnVehicleUI {}

  // [lua/client/DebugUIs/ISTeleportDebugUI.d.ts]
  /** @customConstructor ISTeleportDebugUI:new */
  export class ISTeleportDebugUI extends lua.client.DebugUIs.ISTeleportDebugUI {}

  // [lua/client/DebugUIs/ISTilesPickerDebugUI.d.ts]
  /** @customConstructor ISTilesPickerDebugUI:new */
  export class ISTilesPickerDebugUI extends lua.client.DebugUIs.ISTilesPickerDebugUI {}
  /** @customConstructor ISTilesPickerTilesList:new */
  export class ISTilesPickerTilesList extends lua.client.DebugUIs.ISTilesPickerTilesList {}

  // [lua/client/DebugUIs/ISTriggerThunderUI.d.ts]
  /** @customConstructor ISTriggerThunderUI:new */
  export class ISTriggerThunderUI extends lua.client.DebugUIs.ISTriggerThunderUI {}

  // [lua/client/DebugUIs/LuaDebugger.d.ts]
  /** @customConstructor LuaDebugger:new */
  export class LuaDebugger extends lua.client.DebugUIs.LuaDebugger {}

  // [lua/client/DebugUIs/LuaDebugOutput.d.ts]
  /** @customConstructor LuaDebugOutput:new */
  export class LuaDebugOutput extends lua.client.DebugUIs.LuaDebugOutput {}

  // [lua/client/DebugUIs/LuaFileBrowser.d.ts]
  /** @customConstructor LuaFileBrowser:new */
  export class LuaFileBrowser extends lua.client.DebugUIs.LuaFileBrowser {}
  /** @customConstructor LuaFileBrowserList:new */
  export class LuaFileBrowserList extends lua.client.DebugUIs.LuaFileBrowserList {}

  // [lua/client/DebugUIs/LuaThreadWindow.d.ts]
  /** @customConstructor LuaThreadWindow:new */
  export class LuaThreadWindow extends lua.client.DebugUIs.LuaThreadWindow {}

  // [lua/client/DebugUIs/MPDebugger.d.ts]
  /** @customConstructor MPDebugger:new */
  export class MPDebugger extends lua.client.DebugUIs.MPDebugger {}

  // [lua/client/DebugUIs/ObjectViewer.d.ts]
  /** @customConstructor ObjectViewer:new */
  export class ObjectViewer extends lua.client.DebugUIs.ObjectViewer {}

  // [lua/client/DebugUIs/SeamEditor/SeamEditorUI_SeamTileList.d.ts]
  /** @customConstructor SeamEditorUI_SeamTileList:new */
  export class SeamEditorUI_SeamTileList extends lua.client.DebugUIs.SeamEditor.SeamEditorUI_SeamTileList {}

  // [lua/client/DebugUIs/SeamEditor/SeamEditorUI_TileList.d.ts]
  /** @customConstructor SeamEditorUI_TileList:new */
  export class SeamEditorUI_TileList extends lua.client.DebugUIs.SeamEditor.SeamEditorUI_TileList {}

  // [lua/client/DebugUIs/SeamEditor/SeamEditorUI_TileList2.d.ts]
  /** @customConstructor SeamEditorUI_TileList2:new */
  export class SeamEditorUI_TileList2 extends lua.client.DebugUIs.SeamEditor.SeamEditorUI_TileList2 {}

  // [lua/client/DebugUIs/SeamEditor/SeamEditorUI.d.ts]
  /** @customConstructor SeamEditorUI:new */
  export class SeamEditorUI extends lua.client.DebugUIs.SeamEditor.SeamEditorUI {}
  /** @customConstructor SeamEditorUI_OptionsPanel:new */
  export class SeamEditorUI_OptionsPanel extends lua.client.DebugUIs.SeamEditor.SeamEditorUI_OptionsPanel {}
  /** @customConstructor SeamEditorUI_Scene:new */
  export class SeamEditorUI_Scene extends lua.client.DebugUIs.SeamEditor.SeamEditorUI_Scene {}
  /** @customConstructor SeamEditorUI_TilePicker:new */
  export class SeamEditorUI_TilePicker extends lua.client.DebugUIs.SeamEditor.SeamEditorUI_TilePicker {}
  /** @customConstructor SeamEditorUI_TilePicker2:new */
  export class SeamEditorUI_TilePicker2 extends lua.client.DebugUIs.SeamEditor.SeamEditorUI_TilePicker2 {}
  /** @noSelf */
  export const SeamEditorUI_InitUI: () => any;

  // [lua/client/DebugUIs/SourceWindow.d.ts]
  /** @customConstructor SourceWindow:new */
  export class SourceWindow extends lua.client.DebugUIs.SourceWindow {}

  // [lua/client/DebugUIs/SpriteModelEditor.d.ts]
  /** @customConstructor SpriteModelEditor:new */
  export class SpriteModelEditor extends lua.client.DebugUIs.SpriteModelEditor {}
  /** @customConstructor SpriteModelEditor_ListBox:new */
  export class SpriteModelEditor_ListBox extends lua.client.DebugUIs.SpriteModelEditor_ListBox {}
  /** @customConstructor SpriteModelEditor_OptionsPanel:new */
  export class SpriteModelEditor_OptionsPanel extends lua.client.DebugUIs.SpriteModelEditor_OptionsPanel {}
  /** @customConstructor SpriteModelEditor_Scene:new */
  export class SpriteModelEditor_Scene extends lua.client.DebugUIs.SpriteModelEditor_Scene {}
  /** @customConstructor SpriteModelEditor_TileList:new */
  export class SpriteModelEditor_TileList extends lua.client.DebugUIs.SpriteModelEditor_TileList {}
  /** @customConstructor SpriteModelEditor_TilePicker:new */
  export class SpriteModelEditor_TilePicker extends lua.client.DebugUIs.SpriteModelEditor_TilePicker {}
  /** @noSelf */
  export const SpriteModelEditor_InitUI: () => any;

  // [lua/client/DebugUIs/StashDebug.d.ts]
  /** @customConstructor StashDebug:new */
  export class StashDebug extends lua.client.DebugUIs.StashDebug {}

  // [lua/client/DebugUIs/StreamMapWindow.d.ts]
  /** @customConstructor StreamMapWindow:new */
  export class StreamMapWindow extends lua.client.DebugUIs.StreamMapWindow {}

  // [lua/client/DebugUIs/TextureViewer.d.ts]
  /** @customConstructor TextureWindow:new */
  export class TextureWindow extends lua.client.DebugUIs.TextureWindow {}

  // [lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_EditMode.d.ts]
  /** @customConstructor TileGeometryEditor_BoxPanel:new */
  export class TileGeometryEditor_BoxPanel extends lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor_BoxPanel {}
  /** @customConstructor TileGeometryEditor_CylinderPanel:new */
  export class TileGeometryEditor_CylinderPanel extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_CylinderPanel {}
  /** @customConstructor TileGeometryEditor_DepthTexturePanel:new */
  export class TileGeometryEditor_DepthTexturePanel extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_DepthTexturePanel {}
  /** @customConstructor TileGeometryEditor_EditMode:new */
  export class TileGeometryEditor_EditMode extends lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor_EditMode {}
  /** @customConstructor TileGeometryEditor_EditMode_Geometry:new */
  export class TileGeometryEditor_EditMode_Geometry extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_EditMode_Geometry {}
  /** @customConstructor TileGeometryEditor_EditMode_SceneTiles:new */
  export class TileGeometryEditor_EditMode_SceneTiles extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_EditMode_SceneTiles {}
  /** @customConstructor TileGeometryEditor_EditMode_Seating:new */
  export class TileGeometryEditor_EditMode_Seating extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_EditMode_Seating {}
  /** @customConstructor TileGeometryEditor_GeometryListBox:new */
  export class TileGeometryEditor_GeometryListBox extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_GeometryListBox {}
  /** @customConstructor TileGeometryEditor_ListBox:new */
  export class TileGeometryEditor_ListBox extends lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor_ListBox {}
  /** @customConstructor TileGeometryEditor_PropertiesPanel:new */
  export class TileGeometryEditor_PropertiesPanel extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_PropertiesPanel {}
  /** @customConstructor TileGeometryEditor_SeatingListBox:new */
  export class TileGeometryEditor_SeatingListBox extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_SeatingListBox {}
  /** @customConstructor TileGeometryEditor_SeatingPropertiesPanel:new */
  export class TileGeometryEditor_SeatingPropertiesPanel extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_SeatingPropertiesPanel {}
  /** @customConstructor TileGeometryEditor_TilePicker3:new */
  export class TileGeometryEditor_TilePicker3 extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_TilePicker3 {}

  // [lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_SceneTiles.d.ts]
  /** @customConstructor TileGeometryEditor_SceneTiles:new */
  export class TileGeometryEditor_SceneTiles extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_SceneTiles {}

  // [lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_TileList.d.ts]
  /** @customConstructor TileGeometryEditor_TileList:new */
  export class TileGeometryEditor_TileList extends lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor_TileList {}

  // [lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_TileList2.d.ts]
  /** @customConstructor TileGeometryEditor_TileList2:new */
  export class TileGeometryEditor_TileList2 extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_TileList2 {}

  // [lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_TileList3.d.ts]
  /** @customConstructor TileGeometryEditor_TileList3:new */
  export class TileGeometryEditor_TileList3 extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_TileList3 {}

  // [lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor_Tools.d.ts]
  /** @customConstructor TileGeometryEditor_AddTileTool:new */
  export class TileGeometryEditor_AddTileTool extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_AddTileTool {}
  /** @customConstructor TileGeometryEditor_DepthRectTool:new */
  export class TileGeometryEditor_DepthRectTool extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_DepthRectTool {}
  /** @customConstructor TileGeometryEditor_EditPolygonTool:new */
  export class TileGeometryEditor_EditPolygonTool extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_EditPolygonTool {}
  /** @customConstructor TileGeometryEditor_GizmoTool:new */
  export class TileGeometryEditor_GizmoTool extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_GizmoTool {}
  /** @customConstructor TileGeometryEditor_GizmoTool_ResizeBox:new */
  export class TileGeometryEditor_GizmoTool_ResizeBox extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_GizmoTool_ResizeBox {}
  /** @customConstructor TileGeometryEditor_GizmoTool_ResizeCylinder:new */
  export class TileGeometryEditor_GizmoTool_ResizeCylinder extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_GizmoTool_ResizeCylinder {}
  /** @customConstructor TileGeometryEditor_GizmoTool_Rotate:new */
  export class TileGeometryEditor_GizmoTool_Rotate extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_GizmoTool_Rotate {}
  /** @customConstructor TileGeometryEditor_GizmoTool_Scale:new */
  export class TileGeometryEditor_GizmoTool_Scale extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_GizmoTool_Scale {}
  /** @customConstructor TileGeometryEditor_GizmoTool_SetSurface:new */
  export class TileGeometryEditor_GizmoTool_SetSurface extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_GizmoTool_SetSurface {}
  /** @customConstructor TileGeometryEditor_GizmoTool_Translate:new */
  export class TileGeometryEditor_GizmoTool_Translate extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_GizmoTool_Translate {}
  /** @customConstructor TileGeometryEditor_MoveTileTool:new */
  export class TileGeometryEditor_MoveTileTool extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_MoveTileTool {}
  /** @customConstructor TileGeometryEditor_Tool:new */
  export class TileGeometryEditor_Tool extends lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor_Tool {}

  // [lua/client/DebugUIs/TileGeometryEditor/TileGeometryEditor.d.ts]
  /** @customConstructor TileGeometryEditor:new */
  export class TileGeometryEditor extends lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor {}
  /** @customConstructor TileGeometryEditor_OptionsPanel:new */
  export class TileGeometryEditor_OptionsPanel extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_OptionsPanel {}
  /** @customConstructor TileGeometryEditor_Scene:new */
  export class TileGeometryEditor_Scene extends lua.client.DebugUIs.TileGeometryEditor.TileGeometryEditor_Scene {}
  /** @customConstructor TileGeometryEditor_SwitchView:new */
  export class TileGeometryEditor_SwitchView extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_SwitchView {}
  /** @customConstructor TileGeometryEditor_TilePicker:new */
  export class TileGeometryEditor_TilePicker extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_TilePicker {}
  /** @customConstructor TileGeometryEditor_TilePicker2:new */
  export class TileGeometryEditor_TilePicker2 extends lua.client.DebugUIs.TileGeometryEditor
    .TileGeometryEditor_TilePicker2 {}
  /** @noSelf */
  export const TileGeometryEditor_InitUI: () => any;

  // [lua/client/DebugUIs/WatchWindow.d.ts]
  /** @customConstructor WatchWindow:new */
  export class WatchWindow extends lua.client.DebugUIs.WatchWindow {}

  // [lua/client/Entity/ISEntityUI.d.ts]
  export abstract class ISEntityUI extends lua.client.Entity.ISEntityUI {}

  // [lua/client/Entity/ISEntityUtilUI.d.ts]
  export abstract class ISEntityUtilUI extends lua.client.Entity.ISEntityUtilUI {}

  // [lua/client/Entity/ISUI/BuildRecipe/ISBuildPanel.d.ts]
  /** @customConstructor ISBuildPanel:new */
  export class ISBuildPanel extends lua.client.Entity.ISUI.BuildRecipe.ISBuildPanel {}

  // [lua/client/Entity/ISUI/BuildRecipe/ISBuildRecipePanel.d.ts]
  /** @customConstructor ISBuildRecipePanel:new */
  export class ISBuildRecipePanel extends lua.client.Entity.ISUI.BuildRecipe.ISBuildRecipePanel {}

  // [lua/client/Entity/ISUI/BuildRecipe/ISBuildWidgetIngredientsInputs.d.ts]
  /** @customConstructor ISBuildWidgetIngredientsInputs:new */
  export class ISBuildWidgetIngredientsInputs extends lua.client.Entity.ISUI.BuildRecipe
    .ISBuildWidgetIngredientsInputs {}

  // [lua/client/Entity/ISUI/BuildRecipe/ISWidgetBuildControl.d.ts]
  /** @customConstructor ISWidgetBuildControl:new */
  export class ISWidgetBuildControl extends lua.client.Entity.ISUI.BuildRecipe.ISWidgetBuildControl {}

  // [lua/client/Entity/ISUI/Components/Crafting/ISButcherHookCraftPanel.d.ts]
  /** @customConstructor ISButcherHookCraftPanel:new */
  export class ISButcherHookCraftPanel extends lua.client.Entity.ISUI.Components.Crafting.ISButcherHookCraftPanel {}

  // [lua/client/Entity/ISUI/Components/Crafting/ISButcherHookProcessorPanel.d.ts]
  /** @customConstructor ISButcherHookProcessorPanel:new */
  export class ISButcherHookProcessorPanel extends lua.client.Entity.ISUI.Components.Crafting
    .ISButcherHookProcessorPanel {}

  // [lua/client/Entity/ISUI/Components/Crafting/ISCraftBenchPanel.d.ts]
  /** @customConstructor ISCraftBenchPanel:new */
  export class ISCraftBenchPanel extends lua.client.Entity.ISUI.Components.Crafting.ISCraftBenchPanel {}

  // [lua/client/Entity/ISUI/Components/Crafting/ISCraftLogicPanel.d.ts]
  /** @customConstructor ISCraftLogicPanel:new */
  export class ISCraftLogicPanel extends lua.client.Entity.ISUI.Components.Crafting.ISCraftLogicPanel {}

  // [lua/client/Entity/ISUI/Components/Crafting/ISFurnaceLogicPanel.d.ts]
  /** @customConstructor ISFurnaceLogicPanel:new */
  export class ISFurnaceLogicPanel extends lua.client.Entity.ISUI.Components.Crafting.ISFurnaceLogicPanel {}

  // [lua/client/Entity/ISUI/Components/Crafting/ISMashingLogicPanel.d.ts]
  /** @customConstructor ISMashingLogicPanel:new */
  export class ISMashingLogicPanel extends lua.client.Entity.ISUI.Components.Crafting.ISMashingLogicPanel {}

  // [lua/client/Entity/ISUI/Components/ISBaseComponentPanel.d.ts]
  /** @customConstructor ISBaseComponentPanel:new */
  export class ISBaseComponentPanel extends lua.client.Entity.ISUI.Components.ISBaseComponentPanel {}

  // [lua/client/Entity/ISUI/Components/ISTestComponentPanel.d.ts]
  /** @customConstructor ISTestComponentPanel:new */
  export class ISTestComponentPanel extends lua.client.Entity.ISUI.Components.ISTestComponentPanel {}

  // [lua/client/Entity/ISUI/Controls/ISComponentsListPanel.d.ts]
  /** @customConstructor ISComponentsListPanel:new */
  export class ISComponentsListPanel extends lua.client.Entity.ISUI.Controls.ISComponentsListPanel {}

  // [lua/client/Entity/ISUI/Controls/ISComponentsTabPanel.d.ts]
  /** @customConstructor ISComponentsTabPanel:new */
  export class ISComponentsTabPanel extends lua.client.Entity.ISUI.Controls.ISComponentsTabPanel {}

  // [lua/client/Entity/ISUI/Controls/ISEnergyBar.d.ts]
  /** @customConstructor ISEnergyBar:new */
  export class ISEnergyBar extends lua.client.Entity.ISUI.Controls.ISEnergyBar {}

  // [lua/client/Entity/ISUI/Controls/ISEnergySlot.d.ts]
  /** @customConstructor ISEnergySlot:new */
  export class ISEnergySlot extends lua.client.Entity.ISUI.Controls.ISEnergySlot {}

  // [lua/client/Entity/ISUI/Controls/ISEnergySlotPanel.d.ts]
  /** @customConstructor ISEnergySlotPanel:new */
  export class ISEnergySlotPanel extends lua.client.Entity.ISUI.Controls.ISEnergySlotPanel {}

  // [lua/client/Entity/ISUI/Controls/ISFluidSlot.d.ts]
  /** @customConstructor ISFluidSlot:new */
  export class ISFluidSlot extends lua.client.Entity.ISUI.Controls.ISFluidSlot {}

  // [lua/client/Entity/ISUI/Controls/ISFluidSlotPanel.d.ts]
  /** @customConstructor ISFluidSlotPanel:new */
  export class ISFluidSlotPanel extends lua.client.Entity.ISUI.Controls.ISFluidSlotPanel {}

  // [lua/client/Entity/ISUI/Controls/ISGroupBox.d.ts]
  /** @customConstructor ISGroupBox:new */
  export class ISGroupBox extends lua.client.Entity.ISUI.Controls.ISGroupBox {}

  // [lua/client/Entity/ISUI/Controls/ISItemSlot.d.ts]
  /** @customConstructor ISItemSlot:new */
  export class ISItemSlot extends lua.client.Entity.ISUI.Controls.ISItemSlot {}

  // [lua/client/Entity/ISUI/Controls/ISItemSlotPanel.d.ts]
  /** @customConstructor ISItemSlotPanel:new */
  export class ISItemSlotPanel extends lua.client.Entity.ISUI.Controls.ISItemSlotPanel {}

  // [lua/client/Entity/ISUI/Controls/ISTableLayout.d.ts]
  /** @customConstructor ISTableLayout:new */
  export class ISTableLayout extends lua.client.Entity.ISUI.Controls.ISTableLayout {}
  /** @customConstructor ISTableLayoutCell:new */
  export class ISTableLayoutCell extends lua.client.Entity.ISUI.Controls.ISTableLayoutCell {}
  /** @customConstructor ISTableLayoutColumn:new */
  export class ISTableLayoutColumn extends lua.client.Entity.ISUI.Controls.ISTableLayoutColumn {}
  /** @customConstructor ISTableLayoutRow:new */
  export class ISTableLayoutRow extends lua.client.Entity.ISUI.Controls.ISTableLayoutRow {}

  // [lua/client/Entity/ISUI/Controls/ISVendorSpiral.d.ts]
  /** @customConstructor ISVendorSpiral:new */
  export class ISVendorSpiral extends lua.client.Entity.ISUI.Controls.ISVendorSpiral {}

  // [lua/client/Entity/ISUI/Controls/ISWidgetComponentHeader.d.ts]
  /** @customConstructor ISWidgetComponentHeader:new */
  export class ISWidgetComponentHeader extends lua.client.Entity.ISUI.Controls.ISWidgetComponentHeader {}

  // [lua/client/Entity/ISUI/Controls/ISWidgetCraftControl.d.ts]
  /** @customConstructor ISWidgetCraftControl:new */
  export class ISWidgetCraftControl extends lua.client.Entity.ISUI.Controls.ISWidgetCraftControl {}

  // [lua/client/Entity/ISUI/Controls/ISWidgetCraftDebug.d.ts]
  /** @customConstructor ISWidgetCraftDebug:new */
  export class ISWidgetCraftDebug extends lua.client.Entity.ISUI.Controls.ISWidgetCraftDebug {}

  // [lua/client/Entity/ISUI/Controls/ISWidgetCraftProgress.d.ts]
  /** @customConstructor ISWidgetCraftProgress:new */
  export class ISWidgetCraftProgress extends lua.client.Entity.ISUI.Controls.ISWidgetCraftProgress {}

  // [lua/client/Entity/ISUI/Controls/ISWidgetEntityDebug.d.ts]
  /** @customConstructor ISWidgetEntityDebug:new */
  export class ISWidgetEntityDebug extends lua.client.Entity.ISUI.Controls.ISWidgetEntityDebug {}

  // [lua/client/Entity/ISUI/Controls/ISWidgetEntityHeader.d.ts]
  /** @customConstructor ISWidgetEntityHeader:new */
  export class ISWidgetEntityHeader extends lua.client.Entity.ISUI.Controls.ISWidgetEntityHeader {}

  // [lua/client/Entity/ISUI/Controls/ISWidgetRecipeSelect.d.ts]
  /** @customConstructor ISWidgetRecipeSelect:new */
  export class ISWidgetRecipeSelect extends lua.client.Entity.ISUI.Controls.ISWidgetRecipeSelect {}

  // [lua/client/Entity/ISUI/Controls/ISWidgetTitleHeader.d.ts]
  /** @customConstructor ISWidgetTitleHeader:new */
  export class ISWidgetTitleHeader extends lua.client.Entity.ISUI.Controls.ISWidgetTitleHeader {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISCraftInputItems.d.ts]
  /** @customConstructor ISCraftInputItemNode:new */
  export class ISCraftInputItemNode extends lua.client.Entity.ISUI.CraftRecipe.ISCraftInputItemNode {}
  /** @customConstructor ISCraftInputItems:new */
  export class ISCraftInputItems extends lua.client.Entity.ISUI.CraftRecipe.ISCraftInputItems {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISCraftInventoryPanel.d.ts]
  /** @customConstructor ISCraftInventoryPanel:new */
  export class ISCraftInventoryPanel extends lua.client.Entity.ISUI.CraftRecipe.ISCraftInventoryPanel {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISCraftRecipeInfoBox.d.ts]
  /** @customConstructor ISCraftRecipeInfoBox:new */
  export class ISCraftRecipeInfoBox extends lua.client.Entity.ISUI.CraftRecipe.ISCraftRecipeInfoBox {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISCraftRecipePanel.d.ts]
  /** @customConstructor ISCraftRecipePanel:new */
  export class ISCraftRecipePanel extends lua.client.Entity.ISUI.CraftRecipe.ISCraftRecipePanel {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISCraftRecipeTooltip.d.ts]
  /** @customConstructor ISCraftRecipeTooltip:new */
  export class ISCraftRecipeTooltip extends lua.client.Entity.ISUI.CraftRecipe.ISCraftRecipeTooltip {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISHandCraftPanel.d.ts]
  /** @customConstructor ISHandCraftPanel:new */
  export class ISHandCraftPanel extends lua.client.Entity.ISUI.CraftRecipe.ISHandCraftPanel {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISTiledIconListBox.d.ts]
  /** @customConstructor ISTiledIconListBox:new */
  export class ISTiledIconListBox extends lua.client.Entity.ISUI.CraftRecipe.ISTiledIconListBox {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISTiledIconPanel.d.ts]
  /** @customConstructor ISTiledIconPanel:new */
  export class ISTiledIconPanel extends lua.client.Entity.ISUI.CraftRecipe.ISTiledIconPanel {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetAutoToggle.d.ts]
  /** @customConstructor ISWidgetAutoToggle:new */
  export class ISWidgetAutoToggle extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetAutoToggle {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetHandCraftControl.d.ts]
  /** @customConstructor ISWidgetHandCraftControl:new */
  export class ISWidgetHandCraftControl extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetHandCraftControl {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetIngredients.d.ts]
  /** @customConstructor ISWidgetIngredients:new */
  export class ISWidgetIngredients extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetIngredients {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetIngredientsInputs.d.ts]
  /** @customConstructor ISWidgetIngredientsInputs:new */
  export class ISWidgetIngredientsInputs extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetIngredientsInputs {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetIngredientsOutputs.d.ts]
  /** @customConstructor ISWidgetIngredientsOutputs:new */
  export class ISWidgetIngredientsOutputs extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetIngredientsOutputs {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetInput.d.ts]
  /** @customConstructor ISWidgetInput:new */
  export class ISWidgetInput extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetInput {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetOutput.d.ts]
  /** @customConstructor ISWidgetOutput:new */
  export class ISWidgetOutput extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetOutput {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipeCategories.d.ts]
  /** @customConstructor ISWidgetRecipeCategories:new */
  export class ISWidgetRecipeCategories extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetRecipeCategories {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipeFilterPanel.d.ts]
  /** @customConstructor ISWidgetRecipeFilterPanel:new */
  export class ISWidgetRecipeFilterPanel extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetRecipeFilterPanel {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipeListPanel.d.ts]
  /** @customConstructor ISWidgetRecipeListPanel:new */
  export class ISWidgetRecipeListPanel extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetRecipeListPanel {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipesPanel.d.ts]
  /** @customConstructor ISWidgetRecipesPanel:new */
  export class ISWidgetRecipesPanel extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetRecipesPanel {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetRecipeTools.d.ts]
  /** @customConstructor ISWidgetRecipeTools:new */
  export class ISWidgetRecipeTools extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetRecipeTools {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetTooltipInput.d.ts]
  /** @customConstructor ISWidgetTooltipInput:new */
  export class ISWidgetTooltipInput extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetTooltipInput {}

  // [lua/client/Entity/ISUI/CraftRecipe/ISWidgetTooltipOutput.d.ts]
  /** @customConstructor ISWidgetTooltipOutput:new */
  export class ISWidgetTooltipOutput extends lua.client.Entity.ISUI.CraftRecipe.ISWidgetTooltipOutput {}

  // [lua/client/Entity/ISUI/ISBaseEntityWindow.d.ts]
  /** @customConstructor ISBaseEntityWindow:new */
  export class ISBaseEntityWindow extends lua.client.Entity.ISUI.ISBaseEntityWindow {}

  // [lua/client/Entity/ISUI/ISEntityBuildMenu.d.ts]
  export abstract class ISEntityBuildMenu extends lua.client.Entity.ISUI.ISEntityBuildMenu {}

  // [lua/client/Entity/ISUI/Layouts/ISBaseStockingLayout.d.ts]
  /** @customConstructor ISBaseStockingLayout:new */
  export class ISBaseStockingLayout extends lua.client.Entity.ISUI.Layouts.ISBaseStockingLayout {}

  // [lua/client/Entity/ISUI/Layouts/ISBaseVendingLayout.d.ts]
  /** @customConstructor ISBaseVendingLayout:new */
  export class ISBaseVendingLayout extends lua.client.Entity.ISUI.Layouts.ISBaseVendingLayout {}

  // [lua/client/Entity/ISUI/Layouts/ISPartsLayout.d.ts]
  /** @customConstructor ISPartsLayout:new */
  export class ISPartsLayout extends lua.client.Entity.ISUI.Layouts.ISPartsLayout {}

  // [lua/client/Entity/ISUI/Layouts/ISSodaStockingLayout.d.ts]
  /** @customConstructor ISSodaStockingLayout:new */
  export class ISSodaStockingLayout extends lua.client.Entity.ISUI.Layouts.ISSodaStockingLayout {}

  // [lua/client/Entity/ISUI/Layouts/ISSodaVendingLayout.d.ts]
  /** @customConstructor ISSodaVendingLayout:new */
  export class ISSodaVendingLayout extends lua.client.Entity.ISUI.Layouts.ISSodaVendingLayout {}

  // [lua/client/Entity/ISUI/Layouts/ISVendorStockingLayout.d.ts]
  /** @customConstructor ISVendorStockingLayout:new */
  export class ISVendorStockingLayout extends lua.client.Entity.ISUI.Layouts.ISVendorStockingLayout {}

  // [lua/client/Entity/ISUI/Layouts/ISVendorVendingLayout.d.ts]
  /** @customConstructor ISVendorVendingLayout:new */
  export class ISVendorVendingLayout extends lua.client.Entity.ISUI.Layouts.ISVendorVendingLayout {}

  // [lua/client/Entity/ISUI/Windows/ISEntityTabWindow.d.ts]
  /** @customConstructor ISEntityTabWindow:new */
  export class ISEntityTabWindow extends lua.client.Entity.ISUI.Windows.ISEntityTabWindow {}

  // [lua/client/Entity/ISUI/Windows/ISEntityWindow.d.ts]
  /** @customConstructor ISEntityWindow:new */
  export class ISEntityWindow extends lua.client.Entity.ISUI.Windows.ISEntityWindow {}

  // [lua/client/erosion/debug/DebugDemoTime.d.ts]

  // [lua/client/erosion/debug/Point2D.d.ts]
  export abstract class Point2D extends lua.client.erosion.debug.Point2D {}

  // [lua/client/Farming/CFarming_Interact.d.ts]
  export abstract class CFarming_Interact extends lua.client.Farming.CFarming_Interact {}

  // [lua/client/Farming/CFarmingSystem.d.ts]
  /** @customConstructor CFarmingSystem:new */
  export class CFarmingSystem extends lua.client.Farming.CFarmingSystem {}

  // [lua/client/Farming/CPlantGlobalObject.d.ts]
  /** @customConstructor CPlantGlobalObject:new */
  export class CPlantGlobalObject extends lua.client.Farming.CPlantGlobalObject {}

  // [lua/client/Farming/ISUI/ISFarmingInfo.d.ts]
  /** @customConstructor ISFarmingInfo:new */
  export class ISFarmingInfo extends lua.client.Farming.ISUI.ISFarmingInfo {}
  export abstract class compost_rgb extends lua.client.Farming.ISUI.compost_rgb {}
  export abstract class disease extends lua.client.Farming.ISUI.disease {}
  export abstract class disease_rgb extends lua.client.Farming.ISUI.disease_rgb {}
  export abstract class fertilizer_rgb extends lua.client.Farming.ISUI.fertilizer_rgb {}
  export abstract class health_rgb extends lua.client.Farming.ISUI.health_rgb {}
  export abstract class nowateredsince_rgb extends lua.client.Farming.ISUI.nowateredsince_rgb {}
  export abstract class title_rgb extends lua.client.Farming.ISUI.title_rgb {}
  export abstract class water_rgb extends lua.client.Farming.ISUI.water_rgb {}
  export abstract class waterbar_rgb extends lua.client.Farming.ISUI.waterbar_rgb {}

  // [lua/client/Farming/ISUI/ISFarmingMenu.d.ts]
  export abstract class ISFarmingMenu extends lua.client.Farming.ISUI.ISFarmingMenu {}

  // [lua/client/Farming/ISUI/ISFarmingWindow.d.ts]
  /** @customConstructor ISFarmingWindow:new */
  export class ISFarmingWindow extends lua.client.Farming.ISUI.ISFarmingWindow {}

  // [lua/client/Farming/TimedActions/ISPlantInfoAction.d.ts]
  /** @customConstructor ISPlantInfoAction:new */
  export class ISPlantInfoAction extends lua.client.Farming.TimedActions.ISPlantInfoAction {}

  // [lua/client/FeedingTrough/CFeedingTroughGlobalObject.d.ts]
  /** @customConstructor CFeedingTroughGlobalObject:new */
  export class CFeedingTroughGlobalObject extends lua.client.FeedingTrough.CFeedingTroughGlobalObject {}

  // [lua/client/FeedingTrough/CFeedingTroughSystem.d.ts]
  /** @customConstructor CFeedingTroughSystem:new */
  export class CFeedingTroughSystem extends lua.client.FeedingTrough.CFeedingTroughSystem {}

  // [lua/client/FeedingTrough/ISUI/ISFeedingTroughMenu.d.ts]
  export abstract class ISFeedingTroughMenu extends lua.client.FeedingTrough.ISUI.ISFeedingTroughMenu {}

  // [lua/client/FeedingTrough/ISUI/ISFeedingTroughUI.d.ts]
  /** @customConstructor ISFeedingTroughUI:new */
  export class ISFeedingTroughUI extends lua.client.FeedingTrough.ISUI.ISFeedingTroughUI {}

  // [lua/client/Fishing/FishingDebugWindow.d.ts]
  /** @customConstructor FishingDebugWindow:new */
  export class FishingDebugWindow extends lua.client.Fishing.FishingDebugWindow {}

  // [lua/client/Fishing/FishingHandler.d.ts]
  /** @noSelf */
  export const OnGameStart: () => any;

  // [lua/client/Fishing/FishingStates.d.ts]
  /** @noSelf */
  export const start: () => any;
  /** @noSelf */
  export const stop: () => any;
  /** @noSelf */
  export const update: () => any;

  // [lua/client/Fishing/TensionUI.d.ts]
  /** @customConstructor undefined:new */
  export class undefined extends lua.client.Fishing.undefined {}

  // [lua/client/Fluids/ISFluidBar.d.ts]
  /** @customConstructor ISFluidBar:new */
  export class ISFluidBar extends lua.client.Fluids.ISFluidBar {}

  // [lua/client/Fluids/ISFluidContainerPanel.d.ts]
  /** @customConstructor ISFluidContainerPanel:new */
  export class ISFluidContainerPanel extends lua.client.Fluids.ISFluidContainerPanel {}

  // [lua/client/Fluids/ISFluidInfoUI.d.ts]
  /** @customConstructor ISFluidInfoUI:new */
  export class ISFluidInfoUI extends lua.client.Fluids.ISFluidInfoUI {}

  // [lua/client/Fluids/ISFluidPanelAction.d.ts]
  /** @customConstructor ISFluidPanelAction:new */
  export class ISFluidPanelAction extends lua.client.Fluids.ISFluidPanelAction {}

  // [lua/client/Fluids/ISFluidTransferUI.d.ts]
  /** @customConstructor ISFluidTransferUI:new */
  export class ISFluidTransferUI extends lua.client.Fluids.ISFluidTransferUI {}

  // [lua/client/Foraging/forageClient.d.ts]
  export abstract class forageClient extends lua.client.Foraging.forageClient {}
  export abstract class forageData extends lua.client.Foraging.forageData {}

  // [lua/client/Foraging/ISAnimalTracksFinder.d.ts]
  export abstract class ISAnimalTracksFinder extends lua.client.Foraging.ISAnimalTracksFinder {}

  // [lua/client/Foraging/ISAnimalTracksMenu.d.ts]
  export abstract class ISAnimalTracksMenu extends lua.client.Foraging.ISAnimalTracksMenu {}

  // [lua/client/Foraging/ISBaseIcon.d.ts]
  /** @customConstructor ISBaseIcon:new */
  export class ISBaseIcon extends lua.client.Foraging.ISBaseIcon {}

  // [lua/client/Foraging/ISForageIcon.d.ts]
  /** @customConstructor ISForageIcon:new */
  export class ISForageIcon extends lua.client.Foraging.ISForageIcon {}

  // [lua/client/Foraging/ISSearchManager.d.ts]
  /** @customConstructor ISSearchManager:new */
  export class ISSearchManager extends lua.client.Foraging.ISSearchManager {}

  // [lua/client/Foraging/ISSearchWindow.d.ts]
  /** @customConstructor ISSearchWindow:new */
  export class ISSearchWindow extends lua.client.Foraging.ISSearchWindow {}

  // [lua/client/Foraging/ISStashIcon.d.ts]
  /** @customConstructor ISStashIcon:new */
  export class ISStashIcon extends lua.client.Foraging.ISStashIcon {}

  // [lua/client/Foraging/ISWorldItemIcon.d.ts]
  /** @customConstructor ISWorldItemIcon:new */
  export class ISWorldItemIcon extends lua.client.Foraging.ISWorldItemIcon {}

  // [lua/client/Foraging/ISWorldItemIconTrack.d.ts]
  /** @customConstructor ISWorldItemIconTrack:new */
  export class ISWorldItemIconTrack extends lua.client.Foraging.ISWorldItemIconTrack {}

  // [lua/client/Foraging/ISZoneDisplay.d.ts]
  /** @customConstructor ISZoneDisplay:new */
  export class ISZoneDisplay extends lua.client.Foraging.ISZoneDisplay {}

  // [lua/client/Hotbar/ISHotbar.d.ts]
  /** @customConstructor ISHotbar:new */
  export class ISHotbar extends lua.client.Hotbar.ISHotbar {}

  // [lua/client/ISUI/AdminPanel/ISAddNonPvpZoneUI.d.ts]
  /** @customConstructor ISAddNonPvpZoneUI:new */
  export class ISAddNonPvpZoneUI extends lua.client.ISUI.AdminPanel.ISAddNonPvpZoneUI {}

  // [lua/client/ISUI/AdminPanel/ISAddSafeZoneUI.d.ts]
  /** @customConstructor ISAddSafeZoneUI:new */
  export class ISAddSafeZoneUI extends lua.client.ISUI.AdminPanel.ISAddSafeZoneUI {}

  // [lua/client/ISUI/AdminPanel/ISAdminMessage.d.ts]
  /** @customConstructor ISAdminMessage:new */
  export class ISAdminMessage extends lua.client.ISUI.AdminPanel.ISAdminMessage {}

  // [lua/client/ISUI/AdminPanel/ISAdminPanelUI.d.ts]
  /** @customConstructor ISAdminPanelUI:new */
  export class ISAdminPanelUI extends lua.client.ISUI.AdminPanel.ISAdminPanelUI {}

  // [lua/client/ISUI/AdminPanel/ISAdminPowerUI.d.ts]
  /** @customConstructor ISAdminPowerUI:new */
  export class ISAdminPowerUI extends lua.client.ISUI.AdminPanel.ISAdminPowerUI {}

  // [lua/client/ISUI/AdminPanel/ISAdminTicketsUI.d.ts]
  /** @customConstructor ISAdminTicketsUI:new */
  export class ISAdminTicketsUI extends lua.client.ISUI.AdminPanel.ISAdminTicketsUI {}

  // [lua/client/ISUI/AdminPanel/ISAdminWeather.d.ts]
  /** @customConstructor ISAdminWeather:new */
  export class ISAdminWeather extends lua.client.ISUI.AdminPanel.ISAdminWeather {}

  // [lua/client/ISUI/AdminPanel/ISAdmPanelClimate.d.ts]
  /** @customConstructor ISAdmPanelClimate:new */
  export class ISAdmPanelClimate extends lua.client.ISUI.AdminPanel.ISAdmPanelClimate {}

  // [lua/client/ISUI/AdminPanel/ISAdmPanelWeather.d.ts]
  /** @customConstructor ISAdmPanelWeather:new */
  export class ISAdmPanelWeather extends lua.client.ISUI.AdminPanel.ISAdmPanelWeather {}

  // [lua/client/ISUI/AdminPanel/ISFactionsList.d.ts]
  /** @customConstructor ISFactionsList:new */
  export class ISFactionsList extends lua.client.ISUI.AdminPanel.ISFactionsList {}

  // [lua/client/ISUI/AdminPanel/ISItemEditorUI.d.ts]
  /** @customConstructor ISItemEditorUI:new */
  export class ISItemEditorUI extends lua.client.ISUI.AdminPanel.ISItemEditorUI {}

  // [lua/client/ISUI/AdminPanel/ISItemEditPanel.d.ts]
  /** @customConstructor ISItemEditPanel:new */
  export class ISItemEditPanel extends lua.client.ISUI.AdminPanel.ISItemEditPanel {}

  // [lua/client/ISUI/AdminPanel/ISItemsListTable.d.ts]
  /** @customConstructor ISItemsListTable:new */
  export class ISItemsListTable extends lua.client.ISUI.AdminPanel.ISItemsListTable {}

  // [lua/client/ISUI/AdminPanel/ISItemsListViewer.d.ts]
  /** @customConstructor ISItemsListViewer:new */
  export class ISItemsListViewer extends lua.client.ISUI.AdminPanel.ISItemsListViewer {}

  // [lua/client/ISUI/AdminPanel/ISLootLog.d.ts]
  /** @customConstructor ISLootLog:new */
  export class ISLootLog extends lua.client.ISUI.AdminPanel.ISLootLog {}

  // [lua/client/ISUI/AdminPanel/ISMiniScoreboardUI.d.ts]
  /** @customConstructor ISMiniScoreboardUI:new */
  export class ISMiniScoreboardUI extends lua.client.ISUI.AdminPanel.ISMiniScoreboardUI {}

  // [lua/client/ISUI/AdminPanel/ISModalEditRole.d.ts]
  /** @customConstructor ISModalEditRole:new */
  export class ISModalEditRole extends lua.client.ISUI.AdminPanel.ISModalEditRole {}

  // [lua/client/ISUI/AdminPanel/ISPacketCounts.d.ts]
  /** @customConstructor ISPacketCounts:new */
  export class ISPacketCounts extends lua.client.ISUI.AdminPanel.ISPacketCounts {}
  /** @customConstructor ISPacketCountsList:new */
  export class ISPacketCountsList extends lua.client.ISUI.AdminPanel.ISPacketCountsList {}

  // [lua/client/ISUI/AdminPanel/ISPVPLogToolUI.d.ts]
  /** @customConstructor ISPVPLogToolUI:new */
  export class ISPVPLogToolUI extends lua.client.ISUI.AdminPanel.ISPVPLogToolUI {}

  // [lua/client/ISUI/AdminPanel/ISPvpZonePanel.d.ts]
  /** @customConstructor ISPvpZonePanel:new */
  export class ISPvpZonePanel extends lua.client.ISUI.AdminPanel.ISPvpZonePanel {}

  // [lua/client/ISUI/AdminPanel/ISRolesList.d.ts]
  /** @customConstructor ISRolesList:new */
  export class ISRolesList extends lua.client.ISUI.AdminPanel.ISRolesList {}

  // [lua/client/ISUI/AdminPanel/ISSafehousesList.d.ts]
  /** @customConstructor ISSafehousesList:new */
  export class ISSafehousesList extends lua.client.ISUI.AdminPanel.ISSafehousesList {}

  // [lua/client/ISUI/AdminPanel/ISServerOptions.d.ts]
  /** @customConstructor ISServerOptions:new */
  export class ISServerOptions extends lua.client.ISUI.AdminPanel.ISServerOptions {}

  // [lua/client/ISUI/AdminPanel/ISServerOptionsChange.d.ts]
  /** @customConstructor ISServerOptionsChange:new */
  export class ISServerOptionsChange extends lua.client.ISUI.AdminPanel.ISServerOptionsChange {}

  // [lua/client/ISUI/AdminPanel/ISServerSandboxOptionsUI.d.ts]
  /** @customConstructor ISServerSandboxOptionsUI:new */
  export class ISServerSandboxOptionsUI extends lua.client.ISUI.AdminPanel.ISServerSandboxOptionsUI {}

  // [lua/client/ISUI/AdminPanel/ISStatisticsUI.d.ts]
  /** @customConstructor ISStatisticsPanel:new */
  export class ISStatisticsPanel extends lua.client.ISUI.AdminPanel.ISStatisticsPanel {}
  /** @customConstructor ISStatisticsUI:new */
  export class ISStatisticsUI extends lua.client.ISUI.AdminPanel.ISStatisticsUI {}

  // [lua/client/ISUI/AdminPanel/ISUsersList.d.ts]
  /** @customConstructor ISUsersList:new */
  export class ISUsersList extends lua.client.ISUI.AdminPanel.ISUsersList {}

  // [lua/client/ISUI/AdminPanel/ISWhitelistModifyRow.d.ts]
  /** @customConstructor ISWhitelistModifyRow:new */
  export class ISWhitelistModifyRow extends lua.client.ISUI.AdminPanel.ISWhitelistModifyRow {}

  // [lua/client/ISUI/AdminPanel/ISWhitelistTable.d.ts]
  /** @customConstructor ISWhitelistTable:new */
  export class ISWhitelistTable extends lua.client.ISUI.AdminPanel.ISWhitelistTable {}

  // [lua/client/ISUI/AdminPanel/ISWhitelistViewer.d.ts]
  /** @customConstructor ISWhitelistViewer:new */
  export class ISWhitelistViewer extends lua.client.ISUI.AdminPanel.ISWhitelistViewer {}

  // [lua/client/ISUI/AdminPanel/LootZed/ISLootZed.d.ts]
  /** @customConstructor ISLootZed:new */
  export class ISLootZed extends lua.client.ISUI.AdminPanel.LootZed.ISLootZed {}

  // [lua/client/ISUI/AdminPanel/LootZed/SpawnRateChecker.d.ts]
  export abstract class LootZedTool extends lua.client.ISUI.AdminPanel.LootZed.LootZedTool {}

  // [lua/client/ISUI/AdminPanel/ZoneEditor/ISMultiplayerZoneEditor.d.ts]
  /** @customConstructor ISMultiplayerZoneEditor:new */
  export class ISMultiplayerZoneEditor extends lua.client.ISUI.AdminPanel.ZoneEditor.ISMultiplayerZoneEditor {}
  /** @customConstructor ISMultiplayerZoneEditor_ButtonPanel:new */
  export class ISMultiplayerZoneEditor_ButtonPanel extends lua.client.ISUI.AdminPanel.ZoneEditor
    .ISMultiplayerZoneEditor_ButtonPanel {}

  // [lua/client/ISUI/AdminPanel/ZoneEditor/MultiplayerZoneEditorMode_NonPVP.d.ts]
  /** @customConstructor MultiplayerZoneEditorMode_NonPVP:new */
  export class MultiplayerZoneEditorMode_NonPVP extends lua.client.ISUI.AdminPanel.ZoneEditor
    .MultiplayerZoneEditorMode_NonPVP {}

  // [lua/client/ISUI/AdminPanel/ZoneEditor/MultiplayerZoneEditorMode_Safehouse.d.ts]
  /** @customConstructor MultiplayerZoneEditorMode_Safehouse:new */
  export class MultiplayerZoneEditorMode_Safehouse extends lua.client.ISUI.AdminPanel.ZoneEditor
    .MultiplayerZoneEditorMode_Safehouse {}
  /** @customConstructor MultiplayerZoneEditorMode_Safehouse_Confirm:new */
  export class MultiplayerZoneEditorMode_Safehouse_Confirm extends lua.client.ISUI.AdminPanel.ZoneEditor
    .MultiplayerZoneEditorMode_Safehouse_Confirm {}
  /** @customConstructor MultiplayerZoneEditorMode_Safehouse_Details:new */
  export class MultiplayerZoneEditorMode_Safehouse_Details extends lua.client.ISUI.AdminPanel.ZoneEditor
    .MultiplayerZoneEditorMode_Safehouse_Details {}

  // [lua/client/ISUI/AdminPanel/ZoneEditor/MultiplayerZoneEditorMode.d.ts]
  /** @customConstructor MultiplayerZoneEditorMode:new */
  export class MultiplayerZoneEditorMode extends lua.client.ISUI.AdminPanel.ZoneEditor.MultiplayerZoneEditorMode {}

  // [lua/client/ISUI/Animal/ISAddDesignationAnimalZoneUI.d.ts]
  /** @customConstructor ISAddDesignationAnimalZoneUI:new */
  export class ISAddDesignationAnimalZoneUI extends lua.client.ISUI.Animal.ISAddDesignationAnimalZoneUI {}

  // [lua/client/ISUI/Animal/ISAnimalBehaviorDebugUI.d.ts]
  /** @customConstructor ISAnimalBehaviorDebugUI:new */
  export class ISAnimalBehaviorDebugUI extends lua.client.ISUI.Animal.ISAnimalBehaviorDebugUI {}

  // [lua/client/ISUI/Animal/ISAnimalContextMenu.d.ts]
  export abstract class AnimalContextMenu extends lua.client.ISUI.Animal.AnimalContextMenu {}

  // [lua/client/ISUI/Animal/ISAnimalGenomeUI.d.ts]
  /** @customConstructor ISAnimalGenomeUI:new */
  export class ISAnimalGenomeUI extends lua.client.ISUI.Animal.ISAnimalGenomeUI {}

  // [lua/client/ISUI/Animal/ISAnimalTracksUI.d.ts]
  /** @customConstructor ISAnimalTracksUI:new */
  export class ISAnimalTracksUI extends lua.client.ISUI.Animal.ISAnimalTracksUI {}

  // [lua/client/ISUI/Animal/ISAnimalUI.d.ts]
  /** @customConstructor ISAnimalAvatar:new */
  export class ISAnimalAvatar extends lua.client.ISUI.Animal.ISAnimalAvatar {}
  /** @customConstructor ISAnimalUI:new */
  export class ISAnimalUI extends lua.client.ISUI.Animal.ISAnimalUI {}

  // [lua/client/ISUI/Animal/ISAnimalZoneFirstInfo.d.ts]
  /** @customConstructor ISAnimalZoneFirstInfo:new */
  export class ISAnimalZoneFirstInfo extends lua.client.ISUI.Animal.ISAnimalZoneFirstInfo {}

  // [lua/client/ISUI/Animal/ISButcherHookUI.d.ts]
  /** @customConstructor ISButcherHookUI:new */
  export class ISButcherHookUI extends lua.client.ISUI.Animal.ISButcherHookUI {}

  // [lua/client/ISUI/Animal/ISButcheringDebugUI.d.ts]
  /** @customConstructor ISButcheringDebugUI:new */
  export class ISButcheringDebugUI extends lua.client.ISUI.Animal.ISButcheringDebugUI {}

  // [lua/client/ISUI/Animal/ISDesignationAnimalZoneUI.d.ts]
  /** @customConstructor ISDesignationZoneAnimalZoneUI:new */
  export class ISDesignationZoneAnimalZoneUI extends lua.client.ISUI.Animal.ISDesignationZoneAnimalZoneUI {}

  // [lua/client/ISUI/BodyParts/ISBodyPartPanel.d.ts]
  /** @customConstructor ISBodyPartPanel:new */
  export class ISBodyPartPanel extends lua.client.ISUI.BodyParts.ISBodyPartPanel {}

  // [lua/client/ISUI/Building/ISBuildWindow.d.ts]
  /** @customConstructor ISBuildWindow:new */
  export class ISBuildWindow extends lua.client.ISUI.Building.ISBuildWindow {}

  // [lua/client/ISUI/Building/ISBuildWindowHeader.d.ts]
  /** @customConstructor ISBuildWindowHeader:new */
  export class ISBuildWindowHeader extends lua.client.ISUI.Building.ISBuildWindowHeader {}

  // [lua/client/ISUI/Crafting/ISHandcraftWindow.d.ts]
  /** @customConstructor ISHandcraftWindow:new */
  export class ISHandcraftWindow extends lua.client.ISUI.Crafting.ISHandcraftWindow {}

  // [lua/client/ISUI/Crafting/ISHandcraftWindowHeader.d.ts]
  /** @customConstructor ISHandcraftWindowHeader:new */
  export class ISHandcraftWindowHeader extends lua.client.ISUI.Crafting.ISHandcraftWindowHeader {}

  // [lua/client/ISUI/Fireplace/ISKnob.d.ts]
  /** @customConstructor ISKnob:new */
  export class ISKnob extends lua.client.ISUI.Fireplace.ISKnob {}

  // [lua/client/ISUI/Fireplace/ISMicrowaveUI.d.ts]
  /** @customConstructor ISMicrowaveUI:new */
  export class ISMicrowaveUI extends lua.client.ISUI.Fireplace.ISMicrowaveUI {}

  // [lua/client/ISUI/Fireplace/ISOvenUI.d.ts]
  /** @customConstructor ISOvenUI:new */
  export class ISOvenUI extends lua.client.ISUI.Fireplace.ISOvenUI {}

  // [lua/client/ISUI/FPS.d.ts]
  export abstract class ISFPS extends lua.client.ISUI.ISFPS {}

  // [lua/client/ISUI/Hutch/ISHutchMenu.d.ts]
  export abstract class ISHutchMenu extends lua.client.ISUI.Hutch.ISHutchMenu {}

  // [lua/client/ISUI/Hutch/ISHutchUI.d.ts]
  /** @customConstructor ISHutch3DModel:new */
  export class ISHutch3DModel extends lua.client.ISUI.Hutch.ISHutch3DModel {}
  /** @customConstructor ISHutchNestBox:new */
  export class ISHutchNestBox extends lua.client.ISUI.Hutch.ISHutchNestBox {}
  /** @customConstructor ISHutchRoost:new */
  export class ISHutchRoost extends lua.client.ISUI.Hutch.ISHutchRoost {}
  /** @customConstructor ISHutchUI:new */
  export class ISHutchUI extends lua.client.ISUI.Hutch.ISHutchUI {}

  // [lua/client/ISUI/InterpolationPeriodDebug.d.ts]
  /** @customConstructor InterpolationPeriodDebug:new */
  export class InterpolationPeriodDebug extends lua.client.ISUI.InterpolationPeriodDebug {}

  // [lua/client/ISUI/InterpolationPlayerPeriodDebug.d.ts]
  /** @customConstructor InterpolationPlayerPeriodDebug:new */
  export class InterpolationPlayerPeriodDebug extends lua.client.ISUI.InterpolationPlayerPeriodDebug {}

  // [lua/client/ISUI/IS9Patch.d.ts]
  /** @customConstructor IS9Patch:new */
  export class IS9Patch extends lua.client.ISUI.IS9Patch {}

  // [lua/client/ISUI/ISAddGeneticDisorderUIU.d.ts]
  /** @customConstructor ISAddGeneticDisorderUI:new */
  export class ISAddGeneticDisorderUI extends lua.client.ISUI.ISAddGeneticDisorderUI {}

  // [lua/client/ISUI/ISAlarmClockDialog.d.ts]
  /** @customConstructor ISAlarmClockDialog:new */
  export class ISAlarmClockDialog extends lua.client.ISUI.ISAlarmClockDialog {}

  // [lua/client/ISUI/ISBackButtonWheel.d.ts]
  /** @customConstructor ISBackButtonWheel:new */
  export class ISBackButtonWheel extends lua.client.ISUI.ISBackButtonWheel {}

  // [lua/client/ISUI/ISBBQInfoWindow.d.ts]
  /** @customConstructor ISBBQInfoWindow:new */
  export class ISBBQInfoWindow extends lua.client.ISUI.ISBBQInfoWindow {}

  // [lua/client/ISUI/ISBBQMenu.d.ts]
  export abstract class ISBBQMenu extends lua.client.ISUI.ISBBQMenu {}

  // [lua/client/ISUI/ISBombTimerDialog.d.ts]
  /** @customConstructor ISBombTimerDialog:new */
  export class ISBombTimerDialog extends lua.client.ISUI.ISBombTimerDialog {}

  // [lua/client/ISUI/ISButton.d.ts]
  /** @customConstructor ISButton:new */
  export class ISButton extends lua.client.ISUI.ISButton {}

  // [lua/client/ISUI/ISButtonPrompt.d.ts]
  /** @customConstructor ISButtonPrompt:new */
  export class ISButtonPrompt extends lua.client.ISUI.ISButtonPrompt {}

  // [lua/client/ISUI/ISCollapsableModalRichText.d.ts]
  /** @customConstructor ISCollapsableModalRichText:new */
  export class ISCollapsableModalRichText extends lua.client.ISUI.ISCollapsableModalRichText {}

  // [lua/client/ISUI/ISCollapsableWindow.d.ts]
  /** @customConstructor ISCollapsableWindow:new */
  export class ISCollapsableWindow extends lua.client.ISUI.ISCollapsableWindow {}

  // [lua/client/ISUI/ISCollapsableWindowJoypad.d.ts]
  /** @customConstructor ISCollapsableWindowJoypad:new */
  export class ISCollapsableWindowJoypad extends lua.client.ISUI.ISCollapsableWindowJoypad {}

  // [lua/client/ISUI/ISColorPicker.d.ts]
  /** @customConstructor ISColorPicker:new */
  export class ISColorPicker extends lua.client.ISUI.ISColorPicker {}

  // [lua/client/ISUI/ISColorPickerHSB.d.ts]
  /** @customConstructor ISColorPickerHSB:new */
  export class ISColorPickerHSB extends lua.client.ISUI.ISColorPickerHSB {}

  // [lua/client/ISUI/ISComboBox.d.ts]
  /** @customConstructor ISComboBox:new */
  export class ISComboBox extends lua.client.ISUI.ISComboBox {}
  /** @customConstructor ISComboBoxEditor:new */
  export class ISComboBoxEditor extends lua.client.ISUI.ISComboBoxEditor {}
  /** @customConstructor ISComboBoxPopup:new */
  export class ISComboBoxPopup extends lua.client.ISUI.ISComboBoxPopup {}

  // [lua/client/ISUI/ISConfirmMonitorSettingsDialog.d.ts]
  /** @customConstructor ISConfirmMonitorSettingsDialog:new */
  export class ISConfirmMonitorSettingsDialog extends lua.client.ISUI.ISConfirmMonitorSettingsDialog {}

  // [lua/client/ISUI/ISContextMenu.d.ts]
  /** @customConstructor ISContextMenu:new */
  export class ISContextMenu extends lua.client.ISUI.ISContextMenu {}

  // [lua/client/ISUI/ISControllerTestPanel.d.ts]
  /** @customConstructor ISControllerTestPanel:new */
  export class ISControllerTestPanel extends lua.client.ISUI.ISControllerTestPanel {}

  // [lua/client/ISUI/ISCraftingCategoryUI.d.ts]
  /** @customConstructor ISCraftingCategoryUI:new */
  export class ISCraftingCategoryUI extends lua.client.ISUI.ISCraftingCategoryUI {}

  // [lua/client/ISUI/ISCraftingUI.d.ts]
  /** @customConstructor ISCraftingIngredientIconPanel:new */
  export class ISCraftingIngredientIconPanel extends lua.client.ISUI.ISCraftingIngredientIconPanel {}
  /** @customConstructor ISCraftingUI:new */
  export class ISCraftingUI extends lua.client.ISUI.ISCraftingUI {}

  // [lua/client/ISUI/ISDebugAvatarUI.d.ts]
  /** @customConstructor ISDebugAvatarUI:new */
  export class ISDebugAvatarUI extends lua.client.ISUI.ISDebugAvatarUI {}

  // [lua/client/ISUI/ISDemoPopup.d.ts]
  /** @customConstructor ISDemoPopup:new */
  export class ISDemoPopup extends lua.client.ISUI.ISDemoPopup {}
  /** @noSelf */
  export const DoDemoPopup: () => any;

  // [lua/client/ISUI/ISDesignationZonePanel.d.ts]
  /** @customConstructor ISDesignationZonePanel:new */
  export class ISDesignationZonePanel extends lua.client.ISUI.ISDesignationZonePanel {}

  // [lua/client/ISUI/ISDigitalCode.d.ts]
  /** @customConstructor ISDigitalCode:new */
  export class ISDigitalCode extends lua.client.ISUI.ISDigitalCode {}

  // [lua/client/ISUI/ISDPadWheels.d.ts]
  export abstract class ISDPadWheels extends lua.client.ISUI.ISDPadWheels {}

  // [lua/client/ISUI/ISDuplicateKeybindDialog.d.ts]
  /** @customConstructor ISDuplicateKeybindDialog:new */
  export class ISDuplicateKeybindDialog extends lua.client.ISUI.ISDuplicateKeybindDialog {}

  // [lua/client/ISUI/ISEmoteRadialMenu.d.ts]
  /** @customConstructor ISEmoteRadialMenu:new */
  export class ISEmoteRadialMenu extends lua.client.ISUI.ISEmoteRadialMenu {}

  // [lua/client/ISUI/ISEquippedItem.d.ts]
  /** @customConstructor ISEquippedItem:new */
  export class ISEquippedItem extends lua.client.ISUI.ISEquippedItem {}
  /** @customConstructor ISMapPopup:new */
  export class ISMapPopup extends lua.client.ISUI.ISMapPopup {}
  /** @customConstructor ISMoveablesIconPopup:new */
  export class ISMoveablesIconPopup extends lua.client.ISUI.ISMoveablesIconPopup {}

  // [lua/client/ISUI/ISFirearmRadialMenu.d.ts]
  /** @customConstructor ISFirearmRadialMenu:new */
  export class ISFirearmRadialMenu extends lua.client.ISUI.ISFirearmRadialMenu {}

  // [lua/client/ISUI/ISFireplaceInfoWindow.d.ts]
  /** @customConstructor ISFireplaceInfoWindow:new */
  export class ISFireplaceInfoWindow extends lua.client.ISUI.ISFireplaceInfoWindow {}

  // [lua/client/ISUI/ISFireplaceMenu.d.ts]
  export abstract class ISFireplaceMenu extends lua.client.ISUI.ISFireplaceMenu {}

  // [lua/client/ISUI/ISFishingUI.d.ts]
  /** @customConstructor ISFishingUI:new */
  export class ISFishingUI extends lua.client.ISUI.ISFishingUI {}

  // [lua/client/ISUI/ISFitnessUI.d.ts]
  /** @customConstructor ISFitnessUI:new */
  export class ISFitnessUI extends lua.client.ISUI.ISFitnessUI {}

  // [lua/client/ISUI/ISGameLoadingUI.d.ts]
  /** @customConstructor ISGameLoadingUI:new */
  export class ISGameLoadingUI extends lua.client.ISUI.ISGameLoadingUI {}

  // [lua/client/ISUI/ISGameSoundVolumeControl.d.ts]
  /** @customConstructor ISGameSoundVolumeControl:new */
  export class ISGameSoundVolumeControl extends lua.client.ISUI.ISGameSoundVolumeControl {}

  // [lua/client/ISUI/ISGarmentUI.d.ts]
  /** @customConstructor ISGarmentUI:new */
  export class ISGarmentUI extends lua.client.ISUI.ISGarmentUI {}

  // [lua/client/ISUI/ISGeneratorInfoWindow.d.ts]
  /** @customConstructor ISGeneratorInfoWindow:new */
  export class ISGeneratorInfoWindow extends lua.client.ISUI.ISGeneratorInfoWindow {}

  // [lua/client/ISUI/ISGradientBar.d.ts]
  /** @customConstructor ISGradientBar:new */
  export class ISGradientBar extends lua.client.ISUI.ISGradientBar {}

  // [lua/client/ISUI/ISImage.d.ts]
  /** @customConstructor ISImage:new */
  export class ISImage extends lua.client.ISUI.ISImage {}

  // [lua/client/ISUI/ISInfoContainer.d.ts]
  /** @customConstructor ISInfoContainer:new */
  export class ISInfoContainer extends lua.client.ISUI.ISInfoContainer {}

  // [lua/client/ISUI/ISInventoryItem.d.ts]
  export abstract class ISInventoryItem extends lua.client.ISUI.ISInventoryItem {}

  // [lua/client/ISUI/ISInventoryPage.d.ts]
  /** @customConstructor ISInventoryPage:new */
  export class ISInventoryPage extends lua.client.ISUI.ISInventoryPage {}

  // [lua/client/ISUI/ISInventoryPane.d.ts]
  /** @customConstructor ISInventoryPane:new */
  export class ISInventoryPane extends lua.client.ISUI.ISInventoryPane {}
  export abstract class ISInventoryPaneDraggedItems extends lua.client.ISUI.ISInventoryPaneDraggedItems {}

  // [lua/client/ISUI/ISInventoryPaneContextMenu.d.ts]
  export abstract class ISInventoryPaneContextMenu extends lua.client.ISUI.ISInventoryPaneContextMenu {}

  // [lua/client/ISUI/ISJoystickButtonRadialMenu.d.ts]
  export abstract class ISJoystickButtonRadialMenu extends lua.client.ISUI.ISJoystickButtonRadialMenu {}

  // [lua/client/ISUI/ISLabel.d.ts]
  /** @customConstructor ISLabel:new */
  export class ISLabel extends lua.client.ISUI.ISLabel {}

  // [lua/client/ISUI/ISLayoutManager.d.ts]
  export abstract class ISLayoutManager extends lua.client.ISUI.ISLayoutManager {}

  // [lua/client/ISUI/ISLcdBar.d.ts]
  /** @customConstructor ISLcdBar:new */
  export class ISLcdBar extends lua.client.ISUI.ISLcdBar {}

  // [lua/client/ISUI/ISLightSourceRadialMenu.d.ts]
  /** @customConstructor ISLightSourceRadialMenu:new */
  export class ISLightSourceRadialMenu extends lua.client.ISUI.ISLightSourceRadialMenu {}

  // [lua/client/ISUI/ISLiteratureUI.d.ts]
  /** @customConstructor ISLiteratureGrowingList:new */
  export class ISLiteratureGrowingList extends lua.client.ISUI.ISLiteratureGrowingList {}
  /** @customConstructor ISLiteratureList:new */
  export class ISLiteratureList extends lua.client.ISUI.ISLiteratureList {}
  /** @customConstructor ISLiteratureMediaList:new */
  export class ISLiteratureMediaList extends lua.client.ISUI.ISLiteratureMediaList {}
  /** @customConstructor ISLiteratureUI:new */
  export class ISLiteratureUI extends lua.client.ISUI.ISLiteratureUI {}

  // [lua/client/ISUI/ISMakeUpUI.d.ts]
  /** @customConstructor ISMakeUpUI:new */
  export class ISMakeUpUI extends lua.client.ISUI.ISMakeUpUI {}

  // [lua/client/ISUI/ISMegaVolumeControl.d.ts]
  /** @customConstructor ISMegaVolumeControl:new */
  export class ISMegaVolumeControl extends lua.client.ISUI.ISMegaVolumeControl {}

  // [lua/client/ISUI/ISModalDialog.d.ts]
  /** @customConstructor ISModalDialog:new */
  export class ISModalDialog extends lua.client.ISUI.ISModalDialog {}

  // [lua/client/ISUI/ISModalRichText.d.ts]
  /** @customConstructor ISModalRichText:new */
  export class ISModalRichText extends lua.client.ISUI.ISModalRichText {}

  // [lua/client/ISUI/ISMouseDrag.d.ts]
  export abstract class ISMouseDrag extends lua.client.ISUI.ISMouseDrag {}

  // [lua/client/ISUI/ISMoveableInfoWindow.d.ts]
  /** @customConstructor ISMoveableInfoWindow:new */
  export class ISMoveableInfoWindow extends lua.client.ISUI.ISMoveableInfoWindow {}

  // [lua/client/ISUI/ISNewsUpdate.d.ts]
  /** @customConstructor ISNewsUpdate:new */
  export class ISNewsUpdate extends lua.client.ISUI.ISNewsUpdate {}

  // [lua/client/ISUI/ISOnScreenKeyboard.d.ts]
  /** @customConstructor ISOnScreenKeyboard:new */
  export class ISOnScreenKeyboard extends lua.client.ISUI.ISOnScreenKeyboard {}
  /** @customConstructor OnScreenKeyboardEntry:new */
  export class OnScreenKeyboardEntry extends lua.client.ISUI.OnScreenKeyboardEntry {}
  /** @customConstructor OnScreenKeyboardPanel:new */
  export class OnScreenKeyboardPanel extends lua.client.ISUI.OnScreenKeyboardPanel {}
  export abstract class OnScreenKeyboard extends lua.client.ISUI.OnScreenKeyboard {}

  // [lua/client/ISUI/ISOptionPanel.d.ts]
  /** @customConstructor ISOptionPanel:new */
  export class ISOptionPanel extends lua.client.ISUI.ISOptionPanel {}

  // [lua/client/ISUI/ISPanel.d.ts]
  /** @customConstructor ISPanel:new */
  export class ISPanel extends lua.client.ISUI.ISPanel {}

  // [lua/client/ISUI/ISPanelJoypad.d.ts]
  /** @customConstructor ISPanelJoypad:new */
  export class ISPanelJoypad extends lua.client.ISUI.ISPanelJoypad {}

  // [lua/client/ISUI/ISPauseModListUI.d.ts]
  /** @customConstructor ISPauseModListUI:new */
  export class ISPauseModListUI extends lua.client.ISUI.ISPauseModListUI {}
  export abstract class PauseBuggedModList extends lua.client.ISUI.PauseBuggedModList {}

  // [lua/client/ISUI/ISPostDeathUI.d.ts]
  /** @customConstructor ISPostDeathUI:new */
  export class ISPostDeathUI extends lua.client.ISUI.ISPostDeathUI {}

  // [lua/client/ISUI/ISPrintMediaTextPanel.d.ts]
  /** @customConstructor ISPrintMediaMap:new */
  export class ISPrintMediaMap extends lua.client.ISUI.ISPrintMediaMap {}
  /** @customConstructor ISPrintMediaTextPanel:new */
  export class ISPrintMediaTextPanel extends lua.client.ISUI.ISPrintMediaTextPanel {}

  // [lua/client/ISUI/ISProgressBar.d.ts]
  /** @customConstructor ISProgressBar:new */
  export class ISProgressBar extends lua.client.ISUI.ISProgressBar {}

  // [lua/client/ISUI/ISRadialMenu.d.ts]
  /** @customConstructor ISRadialMenu:new */
  export class ISRadialMenu extends lua.client.ISUI.ISRadialMenu {}

  // [lua/client/ISUI/ISRadialProgressBar.d.ts]
  /** @customConstructor ISRadialProgressBar:new */
  export class ISRadialProgressBar extends lua.client.ISUI.ISRadialProgressBar {}

  // [lua/client/ISUI/ISRadioButtons.d.ts]
  /** @customConstructor ISRadioButtons:new */
  export class ISRadioButtons extends lua.client.ISUI.ISRadioButtons {}

  // [lua/client/ISUI/ISRadioOption.d.ts]
  /** @customConstructor ISRadioOption:new */
  export class ISRadioOption extends lua.client.ISUI.ISRadioOption {}

  // [lua/client/ISUI/ISRainPanel.d.ts]
  /** @customConstructor ISRainPanel:new */
  export class ISRainPanel extends lua.client.ISUI.ISRainPanel {}
  /** @noSelf */
  export const addRainPanel: () => any;

  // [lua/client/ISUI/ISRect.d.ts]
  /** @customConstructor ISRect:new */
  export class ISRect extends lua.client.ISUI.ISRect {}

  // [lua/client/ISUI/ISResizeableButton.d.ts]
  /** @customConstructor ISResizableButton:new */
  export class ISResizableButton extends lua.client.ISUI.ISResizableButton {}

  // [lua/client/ISUI/ISResizeWidget.d.ts]
  /** @customConstructor ISResizeWidget:new */
  export class ISResizeWidget extends lua.client.ISUI.ISResizeWidget {}

  // [lua/client/ISUI/ISRichTextBox.d.ts]
  /** @customConstructor ISRichTextBox:new */
  export class ISRichTextBox extends lua.client.ISUI.ISRichTextBox {}

  // [lua/client/ISUI/ISRichTextPanel.d.ts]
  /** @customConstructor ISRichTextPanel:new */
  export class ISRichTextPanel extends lua.client.ISUI.ISRichTextPanel {}

  // [lua/client/ISUI/ISScrollBar.d.ts]
  /** @customConstructor ISScrollBar:new */
  export class ISScrollBar extends lua.client.ISUI.ISScrollBar {}

  // [lua/client/ISUI/ISScrollingListBox.d.ts]
  /** @customConstructor ISScrollingListBox:new */
  export class ISScrollingListBox extends lua.client.ISUI.ISScrollingListBox {}

  // [lua/client/ISUI/ISServerDisconnectUI.d.ts]
  /** @customConstructor ISServerDisconnectUI:new */
  export class ISServerDisconnectUI extends lua.client.ISUI.ISServerDisconnectUI {}

  // [lua/client/ISUI/ISServerSavingMessage.d.ts]
  /** @customConstructor ISServerSavingMessage:new */
  export class ISServerSavingMessage extends lua.client.ISUI.ISServerSavingMessage {}

  // [lua/client/ISUI/ISSetKeybindDialog.d.ts]
  /** @customConstructor ISSetKeybindDialog:new */
  export class ISSetKeybindDialog extends lua.client.ISUI.ISSetKeybindDialog {}

  // [lua/client/ISUI/ISSleepDialog.d.ts]
  /** @customConstructor ISSleepDialog:new */
  export class ISSleepDialog extends lua.client.ISUI.ISSleepDialog {}

  // [lua/client/ISUI/ISSleepingUI.d.ts]
  /** @customConstructor ISSleepingUI:new */
  export class ISSleepingUI extends lua.client.ISUI.ISSleepingUI {}

  // [lua/client/ISUI/ISSpinBox.d.ts]
  /** @customConstructor ISSpinBox:new */
  export class ISSpinBox extends lua.client.ISUI.ISSpinBox {}

  // [lua/client/ISUI/ISTabPanel.d.ts]
  /** @customConstructor ISTabPanel:new */
  export class ISTabPanel extends lua.client.ISUI.ISTabPanel {}

  // [lua/client/ISUI/ISTabPanelPaginated.d.ts]
  /** @customConstructor ISTabPanelPaginated:new */
  export class ISTabPanelPaginated extends lua.client.ISUI.ISTabPanelPaginated {}

  // [lua/client/ISUI/ISTermsOfServiceUI.d.ts]
  /** @customConstructor ISTermsOfServiceUI:new */
  export class ISTermsOfServiceUI extends lua.client.ISUI.ISTermsOfServiceUI {}

  // [lua/client/ISUI/ISTextBox.d.ts]
  /** @customConstructor ISTextBox:new */
  export class ISTextBox extends lua.client.ISUI.ISTextBox {}

  // [lua/client/ISUI/ISTextEntryBox.d.ts]
  /** @customConstructor ISTextEntryBox:new */
  export class ISTextEntryBox extends lua.client.ISUI.ISTextEntryBox {}

  // [lua/client/ISUI/ISTickBox.d.ts]
  /** @customConstructor ISTickBox:new */
  export class ISTickBox extends lua.client.ISUI.ISTickBox {}

  // [lua/client/ISUI/ISToolTip.d.ts]
  /** @customConstructor ISToolTip:new */
  export class ISToolTip extends lua.client.ISUI.ISToolTip {}

  // [lua/client/ISUI/ISToolTipInv.d.ts]
  /** @customConstructor ISToolTipInv:new */
  export class ISToolTipInv extends lua.client.ISUI.ISToolTipInv {}

  // [lua/client/ISUI/ISTradingUI.d.ts]
  /** @customConstructor ISTradingUI:new */
  export class ISTradingUI extends lua.client.ISUI.ISTradingUI {}

  // [lua/client/ISUI/ISTradingUIHistorial.d.ts]
  /** @customConstructor ISTradingUIHistorical:new */
  export class ISTradingUIHistorical extends lua.client.ISUI.ISTradingUIHistorical {}

  // [lua/client/ISUI/ISUI3DModel.d.ts]
  /** @customConstructor ISUI3DModel:new */
  export class ISUI3DModel extends lua.client.ISUI.ISUI3DModel {}

  // [lua/client/ISUI/ISUIElement.d.ts]
  /** @customConstructor ISUIElement:new */
  export class ISUIElement extends lua.client.ISUI.ISUIElement {}

  // [lua/client/ISUI/ISUIElementJoypad.d.ts]
  /** @customConstructor ISUIElementJoypad:new */
  export class ISUIElementJoypad extends lua.client.ISUI.ISUIElementJoypad {}

  // [lua/client/ISUI/ISUIEmoteConfig.d.ts]
  /** @customConstructor ISUIEmoteConfig:new */
  export class ISUIEmoteConfig extends lua.client.ISUI.ISUIEmoteConfig {}

  // [lua/client/ISUI/ISUIHandler.d.ts]
  export abstract class ISUIHandler extends lua.client.ISUI.ISUIHandler {}

  // [lua/client/ISUI/ISUIWriteJournal.d.ts]
  /** @customConstructor ISUIWriteJournal:new */
  export class ISUIWriteJournal extends lua.client.ISUI.ISUIWriteJournal {}

  // [lua/client/ISUI/ISVehicleAnimalUI.d.ts]
  /** @customConstructor ISVehicleAnimal3DModel:new */
  export class ISVehicleAnimal3DModel extends lua.client.ISUI.ISVehicleAnimal3DModel {}
  /** @customConstructor ISVehicleAnimalUI:new */
  export class ISVehicleAnimalUI extends lua.client.ISUI.ISVehicleAnimalUI {}

  // [lua/client/ISUI/ISVehicleConfirmBox.d.ts]
  /** @customConstructor ISVehicleConfirmBox:new */
  export class ISVehicleConfirmBox extends lua.client.ISUI.ISVehicleConfirmBox {}
  /** @customConstructor ISVehiclePartListBox:new */
  export class ISVehiclePartListBox extends lua.client.ISUI.ISVehiclePartListBox {}

  // [lua/client/ISUI/ISVersionWaterMark.d.ts]
  /** @customConstructor WaterMarkUI:new */
  export class WaterMarkUI extends lua.client.ISUI.WaterMarkUI {}
  export abstract class ISVersionWaterMark extends lua.client.ISUI.ISVersionWaterMark {}

  // [lua/client/ISUI/ISVolumeControl.d.ts]
  /** @customConstructor ISVolumeControl:new */
  export class ISVolumeControl extends lua.client.ISUI.ISVolumeControl {}

  // [lua/client/ISUI/ISVolumeIndicator.d.ts]
  /** @customConstructor ISVolumeIndicator:new */
  export class ISVolumeIndicator extends lua.client.ISUI.ISVolumeIndicator {}

  // [lua/client/ISUI/ISWarManagerUI.d.ts]
  /** @customConstructor ISWarManagerUI:new */
  export class ISWarManagerUI extends lua.client.ISUI.ISWarManagerUI {}

  // [lua/client/ISUI/ISWindow.d.ts]
  /** @customConstructor ISWindow:new */
  export class ISWindow extends lua.client.ISUI.ISWindow {}

  // [lua/client/ISUI/ISWorldObjectContextMenu.d.ts]
  export abstract class ISWorldObjectContextMenu extends lua.client.ISUI.ISWorldObjectContextMenu {}

  // [lua/client/ISUI/ISXuiBuilder.d.ts]
  export abstract class ISXuiBuilder extends lua.client.ISUI.ISXuiBuilder {}
  export abstract class ISXuiFunctions extends lua.client.ISUI.ISXuiFunctions {}

  // [lua/client/ISUI/ISXuiSkin.d.ts]
  export abstract class ISXuiSkin extends lua.client.ISUI.ISXuiSkin {}
  export abstract class ISXuiSkinFunctions extends lua.client.ISUI.ISXuiSkinFunctions {}

  // [lua/client/ISUI/ISXuiTableLayout.d.ts]
  /** @customConstructor ISXuiTableLayout:new */
  export class ISXuiTableLayout extends lua.client.ISUI.ISXuiTableLayout {}
  /** @customConstructor ISXuiTableLayoutCell:new */
  export class ISXuiTableLayoutCell extends lua.client.ISUI.ISXuiTableLayoutCell {}
  /** @customConstructor ISXuiTableLayoutColumn:new */
  export class ISXuiTableLayoutColumn extends lua.client.ISUI.ISXuiTableLayoutColumn {}
  /** @customConstructor ISXuiTableLayoutRow:new */
  export class ISXuiTableLayoutRow extends lua.client.ISUI.ISXuiTableLayoutRow {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditor.d.ts]
  /** @customConstructor WorldMapEditor:new */
  export class WorldMapEditor extends lua.client.ISUI.Maps.Editor.WorldMapEditor {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorListBox.d.ts]
  /** @customConstructor WorldMapEditorListBox:new */
  export class WorldMapEditorListBox extends lua.client.ISUI.Maps.Editor.WorldMapEditorListBox {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorLocationControl.d.ts]
  /** @customConstructor WorldMapEditorLocationControl:new */
  export class WorldMapEditorLocationControl extends lua.client.ISUI.Maps.Editor.WorldMapEditorLocationControl {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Annotations.d.ts]
  /** @customConstructor WorldMapEditorMode_Annotations:new */
  export class WorldMapEditorMode_Annotations extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Annotations {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Bounds.d.ts]
  /** @customConstructor WorldMapEditorMode_Bounds:new */
  export class WorldMapEditorMode_Bounds extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Bounds {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorMode_DataFiles.d.ts]
  /** @customConstructor WorldMapEditorMode_DataFiles:new */
  export class WorldMapEditorMode_DataFiles extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode_DataFiles {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Maps.d.ts]
  /** @customConstructor WorldMapEditorMode_Maps:new */
  export class WorldMapEditorMode_Maps extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Maps {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Stashes.d.ts]
  /** @customConstructor WorldMapEditorMode_Stashes:new */
  export class WorldMapEditorMode_Stashes extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Stashes {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorMode_Style.d.ts]
  /** @customConstructor WorldMapEditorMode_Style:new */
  export class WorldMapEditorMode_Style extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode_Style {}
  /** @customConstructor WorldMapStyleEditor:new */
  export class WorldMapStyleEditor extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor {}
  /** @customConstructor WorldMapStyleEditor_ColorStopsPanel:new */
  export class WorldMapStyleEditor_ColorStopsPanel extends lua.client.ISUI.Maps.Editor
    .WorldMapStyleEditor_ColorStopsPanel {}
  /** @customConstructor WorldMapStyleEditor_FilterPanel:new */
  export class WorldMapStyleEditor_FilterPanel extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor_FilterPanel {}
  /** @customConstructor WorldMapStyleEditor_PolygonLayerPanel:new */
  export class WorldMapStyleEditor_PolygonLayerPanel extends lua.client.ISUI.Maps.Editor
    .WorldMapStyleEditor_PolygonLayerPanel {}
  /** @customConstructor WorldMapStyleEditor_TabPanel:new */
  export class WorldMapStyleEditor_TabPanel extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor_TabPanel {}
  /** @customConstructor WorldMapStyleEditor_TextureLayerPanel:new */
  export class WorldMapStyleEditor_TextureLayerPanel extends lua.client.ISUI.Maps.Editor
    .WorldMapStyleEditor_TextureLayerPanel {}
  /** @customConstructor WorldMapStyleEditor_TexturePanel:new */
  export class WorldMapStyleEditor_TexturePanel extends lua.client.ISUI.Maps.Editor.WorldMapStyleEditor_TexturePanel {}
  /** @customConstructor WorldMapStyleEditor_TextureStopsPanel:new */
  export class WorldMapStyleEditor_TextureStopsPanel extends lua.client.ISUI.Maps.Editor
    .WorldMapStyleEditor_TextureStopsPanel {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorMode.d.ts]
  /** @customConstructor WorldMapEditorMode:new */
  export class WorldMapEditorMode extends lua.client.ISUI.Maps.Editor.WorldMapEditorMode {}

  // [lua/client/ISUI/Maps/Editor/WorldMapEditorResizer.d.ts]
  /** @customConstructor WorldMapEditorResizer:new */
  export class WorldMapEditorResizer extends lua.client.ISUI.Maps.Editor.WorldMapEditorResizer {}

  // [lua/client/ISUI/Maps/ISMap.d.ts]
  /** @customConstructor ISMap:new */
  export class ISMap extends lua.client.ISUI.Maps.ISMap {}
  /** @customConstructor ISMapWrapper:new */
  export class ISMapWrapper extends lua.client.ISUI.Maps.ISMapWrapper {}

  // [lua/client/ISUI/Maps/ISMapDefinitions.d.ts]
  export abstract class LootMaps extends lua.client.ISUI.Maps.LootMaps {}
  export abstract class MapUtils extends lua.client.ISUI.Maps.MapUtils {}
  export abstract class PrintMediaMaps extends lua.client.ISUI.Maps.PrintMediaMaps {}

  // [lua/client/ISUI/Maps/ISMiniMap.d.ts]
  /** @customConstructor ISMiniMapInner:new */
  export class ISMiniMapInner extends lua.client.ISUI.Maps.ISMiniMapInner {}
  /** @customConstructor ISMiniMapOuter:new */
  export class ISMiniMapOuter extends lua.client.ISUI.Maps.ISMiniMapOuter {}
  /** @customConstructor ISMiniMapTitleBar:new */
  export class ISMiniMapTitleBar extends lua.client.ISUI.Maps.ISMiniMapTitleBar {}
  export abstract class ISMiniMap extends lua.client.ISUI.Maps.ISMiniMap {}

  // [lua/client/ISUI/Maps/ISTextBoxMap.d.ts]
  /** @customConstructor ISTextBoxMap:new */
  export class ISTextBoxMap extends lua.client.ISUI.Maps.ISTextBoxMap {}

  // [lua/client/ISUI/Maps/ISWorldMap.d.ts]
  /** @customConstructor ISWorldMap:new */
  export class ISWorldMap extends lua.client.ISUI.Maps.ISWorldMap {}
  /** @customConstructor ISWorldMapButtonPanel:new */
  export class ISWorldMapButtonPanel extends lua.client.ISUI.Maps.ISWorldMapButtonPanel {}
  /** @customConstructor WorldMapOptions:new */
  export class WorldMapOptions extends lua.client.ISUI.Maps.WorldMapOptions {}

  // [lua/client/ISUI/Maps/ISWorldMapKey.d.ts]
  /** @customConstructor ISWorldMapKey:new */
  export class ISWorldMapKey extends lua.client.ISUI.Maps.ISWorldMapKey {}

  // [lua/client/ISUI/Maps/ISWorldMapSharing.d.ts]
  /** @customConstructor ISWorldMapSharing:new */
  export class ISWorldMapSharing extends lua.client.ISUI.Maps.ISWorldMapSharing {}
  /** @customConstructor ISWorldMapSharing_PanelPlayers:new */
  export class ISWorldMapSharing_PanelPlayers extends lua.client.ISUI.Maps.ISWorldMapSharing_PanelPlayers {}

  // [lua/client/ISUI/Maps/ISWorldMapSymbols.d.ts]
  /** @customConstructor ISWorldMapSymbols:new */
  export class ISWorldMapSymbols extends lua.client.ISUI.Maps.ISWorldMapSymbols {}
  /** @customConstructor ISWorldMapSymbolsTabPanel:new */
  export class ISWorldMapSymbolsTabPanel extends lua.client.ISUI.Maps.ISWorldMapSymbolsTabPanel {}
  /** @customConstructor ISWorldMapSymbolTool:new */
  export class ISWorldMapSymbolTool extends lua.client.ISUI.Maps.ISWorldMapSymbolTool {}
  /** @customConstructor ISWorldMapSymbolTool_AddNote:new */
  export class ISWorldMapSymbolTool_AddNote extends lua.client.ISUI.Maps.ISWorldMapSymbolTool_AddNote {}
  /** @customConstructor ISWorldMapSymbolTool_AddSymbol:new */
  export class ISWorldMapSymbolTool_AddSymbol extends lua.client.ISUI.Maps.ISWorldMapSymbolTool_AddSymbol {}
  /** @customConstructor ISWorldMapSymbolTool_EditNote:new */
  export class ISWorldMapSymbolTool_EditNote extends lua.client.ISUI.Maps.ISWorldMapSymbolTool_EditNote {}
  /** @customConstructor ISWorldMapSymbolTool_MoveAnnotation:new */
  export class ISWorldMapSymbolTool_MoveAnnotation extends lua.client.ISUI.Maps.ISWorldMapSymbolTool_MoveAnnotation {}
  /** @customConstructor ISWorldMapSymbolTool_RemoveAnnotation:new */
  export class ISWorldMapSymbolTool_RemoveAnnotation extends lua.client.ISUI.Maps
    .ISWorldMapSymbolTool_RemoveAnnotation {}
  /** @customConstructor ISWorldMapSymbolTool_Sharing:new */
  export class ISWorldMapSymbolTool_Sharing extends lua.client.ISUI.Maps.ISWorldMapSymbolTool_Sharing {}

  // [lua/client/ISUI/PlayerData/ISPlayerData.d.ts]
  export abstract class ISPlayerData extends lua.client.ISUI.PlayerData.ISPlayerData {}
  /** @noSelf */
  export const destroyAllPlayerData: () => any;

  // [lua/client/ISUI/PlayerData/ISPlayerDataObject.d.ts]
  /** @customConstructor ISPlayerDataObject:new */
  export class ISPlayerDataObject extends lua.client.ISUI.PlayerData.ISPlayerDataObject {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsAddXPUI.d.ts]
  /** @customConstructor ISPlayerStatsAddXPUI:new */
  export class ISPlayerStatsAddXPUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsAddXPUI {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsChooseAccessLevel.d.ts]
  /** @customConstructor ISPlayerStatsChooseAccessLevelUI:new */
  export class ISPlayerStatsChooseAccessLevelUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsChooseAccessLevelUI {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsChooseProfessionUI.d.ts]
  /** @customConstructor ISPlayerStatsChooseProfessionUI:new */
  export class ISPlayerStatsChooseProfessionUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsChooseProfessionUI {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsChooseTraitUI.d.ts]
  /** @customConstructor ISPlayerStatsChooseTraitUI:new */
  export class ISPlayerStatsChooseTraitUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsChooseTraitUI {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsManageInvUI.d.ts]
  /** @customConstructor ISPlayerStatsManageInvUI:new */
  export class ISPlayerStatsManageInvUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsManageInvUI {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsSuspicionActivityUI.d.ts]
  /** @customConstructor ISPlayerStatsSuspicionActivityUI:new */
  export class ISPlayerStatsSuspicionActivityUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsSuspicionActivityUI {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsUI.d.ts]
  /** @customConstructor ISPlayerStatsUI:new */
  export class ISPlayerStatsUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsUI {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsUserlogUI.d.ts]
  /** @customConstructor ISPlayerStatsUserlogUI:new */
  export class ISPlayerStatsUserlogUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsUserlogUI {}

  // [lua/client/ISUI/PlayerStats/ISPlayerStatsWarningPointUI.d.ts]
  /** @customConstructor ISPlayerStatsWarningPointUI:new */
  export class ISPlayerStatsWarningPointUI extends lua.client.ISUI.PlayerStats.ISPlayerStatsWarningPointUI {}

  // [lua/client/ISUI/PrintMedia/ISPrintMediaInfo.d.ts]
  /** @customConstructor ISPrintMediaInfo:new */
  export class ISPrintMediaInfo extends lua.client.ISUI.PrintMedia.ISPrintMediaInfo {}
  /** @customConstructor ISPrintMediaSetInfo:new */
  export class ISPrintMediaSetInfo extends lua.client.ISUI.PrintMedia.ISPrintMediaSetInfo {}

  // [lua/client/ISUI/PrintMedia/ISPrintMediaPage.d.ts]
  /** @customConstructor ISPrintMediaPage:new */
  export class ISPrintMediaPage extends lua.client.ISUI.PrintMedia.ISPrintMediaPage {}
  /** @customConstructor ISPrintMediaRichText:new */
  export class ISPrintMediaRichText extends lua.client.ISUI.PrintMedia.ISPrintMediaRichText {}

  // [lua/client/ISUI/PrintMedia/ISPrintMediaPanel.d.ts]
  /** @customConstructor ISPrintMediaListBox:new */
  export class ISPrintMediaListBox extends lua.client.ISUI.PrintMedia.ISPrintMediaListBox {}
  /** @customConstructor ISPrintMediaPanel:new */
  export class ISPrintMediaPanel extends lua.client.ISUI.PrintMedia.ISPrintMediaPanel {}

  // [lua/client/ISUI/PrintMedia/PrintMediaEntries.d.ts]
  export abstract class PrintMediaEntries extends lua.client.ISUI.PrintMedia.PrintMediaEntries {}

  // [lua/client/ISUI/PrintMedia/PrintMediaManager.d.ts]
  /** @customConstructor PrintMediaManager:new */
  export class PrintMediaManager extends lua.client.ISUI.PrintMedia.PrintMediaManager {}
  /** @noSelf */
  export const doPrintMediaDebug: () => any;

  // [lua/client/ISUI/RichTextLayout.d.ts]
  /** @customConstructor ISRichTextLayout:new */
  export class ISRichTextLayout extends lua.client.ISUI.ISRichTextLayout {}

  // [lua/client/ISUI/SpeedControlsHandler.d.ts]
  export abstract class SpeedControlsHandler extends lua.client.ISUI.SpeedControlsHandler {}

  // [lua/client/ISUI/UserPanel/ISCreateFactionTagUI.d.ts]
  /** @customConstructor ISCreateFactionTagUI:new */
  export class ISCreateFactionTagUI extends lua.client.ISUI.UserPanel.ISCreateFactionTagUI {}

  // [lua/client/ISUI/UserPanel/ISCreateFactionUI.d.ts]
  /** @customConstructor ISCreateFactionUI:new */
  export class ISCreateFactionUI extends lua.client.ISUI.UserPanel.ISCreateFactionUI {}

  // [lua/client/ISUI/UserPanel/ISFactionAddPlayerUI.d.ts]
  /** @customConstructor ISFactionAddPlayerUI:new */
  export class ISFactionAddPlayerUI extends lua.client.ISUI.UserPanel.ISFactionAddPlayerUI {}

  // [lua/client/ISUI/UserPanel/ISFactionUI.d.ts]
  /** @customConstructor ISFactionUI:new */
  export class ISFactionUI extends lua.client.ISUI.UserPanel.ISFactionUI {}

  // [lua/client/ISUI/UserPanel/ISSafehouseAddPlayerUI.d.ts]
  /** @customConstructor ISSafehouseAddPlayerUI:new */
  export class ISSafehouseAddPlayerUI extends lua.client.ISUI.UserPanel.ISSafehouseAddPlayerUI {}

  // [lua/client/ISUI/UserPanel/ISSafehouseUI.d.ts]
  /** @customConstructor ISSafehouseUI:new */
  export class ISSafehouseUI extends lua.client.ISUI.UserPanel.ISSafehouseUI {}

  // [lua/client/ISUI/UserPanel/ISTicketsUI.d.ts]
  /** @customConstructor ISTicketsUI:new */
  export class ISTicketsUI extends lua.client.ISUI.UserPanel.ISTicketsUI {}

  // [lua/client/ISUI/UserPanel/ISUserPanelUI.d.ts]
  /** @customConstructor ISUserPanelUI:new */
  export class ISUserPanelUI extends lua.client.ISUI.UserPanel.ISUserPanelUI {}

  // [lua/client/ISUI/WelcomeMessageB42.d.ts]
  /** @customConstructor WelcomeMessageUI:new */
  export class WelcomeMessageUI extends lua.client.ISUI.WelcomeMessageUI {}
  export abstract class WelcomeMessageB42 extends lua.client.ISUI.WelcomeMessageB42 {}

  // [lua/client/ISUI/ZombiePopulationWindow.d.ts]
  /** @customConstructor ZombiePopulationWindow:new */
  export class ZombiePopulationWindow extends lua.client.ISUI.ZombiePopulationWindow {}
  /** @noSelf */
  export const newZombiePopulationWindow: () => any;

  // [lua/client/JoyPad/ISJoypadDebugUI.d.ts]
  /** @customConstructor ISJoypadDebugUI:new */
  export class ISJoypadDebugUI extends lua.client.JoyPad.ISJoypadDebugUI {}

  // [lua/client/JoyPad/ISJoypadDisconnectedUI.d.ts]
  /** @customConstructor ISJoypadDisconnectedUI:new */
  export class ISJoypadDisconnectedUI extends lua.client.JoyPad.ISJoypadDisconnectedUI {}

  // [lua/client/JoyPad/ISJoyPadListBox.d.ts]
  /** @customConstructor ISJoypadListBox:new */
  export class ISJoypadListBox extends lua.client.JoyPad.ISJoypadListBox {}

  // [lua/client/LastStand/AReallyCDDAy.d.ts]
  export abstract class CDDA extends lua.client.LastStand.CDDA {}

  // [lua/client/LastStand/AStormIsComing.d.ts]
  export abstract class AStormIsComing extends lua.client.LastStand.AStormIsComing {}

  // [lua/client/LastStand/Challenge1.d.ts]
  export abstract class Challenge1 extends lua.client.LastStand.Challenge1 {}

  // [lua/client/LastStand/Challenge2.d.ts]
  export abstract class Challenge2 extends lua.client.LastStand.Challenge2 {}

  // [lua/client/LastStand/EightMonthsLater.d.ts]
  export abstract class EightMonthsLater extends lua.client.LastStand.EightMonthsLater {}

  // [lua/client/LastStand/Insomnia.d.ts]
  export abstract class InsomniaChallenge extends lua.client.LastStand.InsomniaChallenge {}
  /** @noSelf */
  export const injectInsomnia: () => any;
  /** @noSelf */
  export const removeInsomnia: () => any;

  // [lua/client/LastStand/ISUI/ISChallenge2PlayerUpWindow.d.ts]
  /** @customConstructor ISChallenge2PlayerUpWindow:new */
  export class ISChallenge2PlayerUpWindow extends lua.client.LastStand.ISUI.ISChallenge2PlayerUpWindow {}

  // [lua/client/LastStand/ISUI/ISChallenge2UpgradeTab.d.ts]
  /** @customConstructor ISChallenge2UpgradeTab:new */
  export class ISChallenge2UpgradeTab extends lua.client.LastStand.ISUI.ISChallenge2UpgradeTab {}

  // [lua/client/LastStand/ISUI/ISChallenge2VariousItemWindow.d.ts]
  /** @customConstructor ISChallenge2VariousItemWindow:new */
  export class ISChallenge2VariousItemWindow extends lua.client.LastStand.ISUI.ISChallenge2VariousItemWindow {}

  // [lua/client/LastStand/ISUI/ISChallenge2WeaponRepairWindow.d.ts]
  /** @customConstructor ISChallenge2WeaponRepairWindow:new */
  export class ISChallenge2WeaponRepairWindow extends lua.client.LastStand.ISUI.ISChallenge2WeaponRepairWindow {}

  // [lua/client/LastStand/ISUI/ISChallenge2WeaponUpWindow.d.ts]
  /** @customConstructor ISChallenge2WeaponUpWindow:new */
  export class ISChallenge2WeaponUpWindow extends lua.client.LastStand.ISUI.ISChallenge2WeaponUpWindow {}

  // [lua/client/LastStand/Kingsmouth.d.ts]
  export abstract class Kingsmouth extends lua.client.LastStand.Kingsmouth {}

  // [lua/client/LastStand/LastStandPlayerFile.d.ts]
  export abstract class LastStandPlayerFile extends lua.client.LastStand.LastStandPlayerFile {}

  // [lua/client/LastStand/LastStandSetup.d.ts]
  export abstract class LastStandData extends lua.client.LastStand.LastStandData {}
  /** @noSelf */
  export const doLastStandDraw: () => any;
  /** @noSelf */
  export const doLastStandInit: () => any;
  /** @noSelf */
  export const preLoadLastStandInit: () => any;

  // [lua/client/LastStand/OpeningHours.d.ts]
  export abstract class OpeningHours extends lua.client.LastStand.OpeningHours {}

  // [lua/client/LastStand/Studio.d.ts]
  export abstract class Studio extends lua.client.LastStand.Studio {}

  // [lua/client/LastStand/TheDescendingFog.d.ts]
  export abstract class TheDescendingFog extends lua.client.LastStand.TheDescendingFog {}

  // [lua/client/LastStand/WinterIsComing.d.ts]
  export abstract class WinterIsComing extends lua.client.LastStand.WinterIsComing {}

  // [lua/client/LastStand/YouHaveOneDay.d.ts]
  export abstract class YouHaveOneDay extends lua.client.LastStand.YouHaveOneDay {}

  // [lua/client/Map/CGlobalObject.d.ts]
  /** @customConstructor CGlobalObject:new */
  export class CGlobalObject extends lua.client.Map.CGlobalObject {}

  // [lua/client/Map/CGlobalObjectSystem.d.ts]
  /** @customConstructor CGlobalObjectSystem:new */
  export class CGlobalObjectSystem extends lua.client.Map.CGlobalObjectSystem {}

  // [lua/client/Mining/DiggingUtil.d.ts]
  export abstract class DiggingUtil extends lua.client.Mining.DiggingUtil {}

  // [lua/client/Moveables/ISMoveablesIconToolTip.d.ts]
  /** @customConstructor ISMoveablesIconToolTip:new */
  export class ISMoveablesIconToolTip extends lua.client.Moveables.ISMoveablesIconToolTip {}

  // [lua/client/Music/MusicChoices.d.ts]
  export abstract class MusicChoices extends lua.client.Music.MusicChoices {}

  // [lua/client/NPCs/UI/CharacterInfoPage.d.ts]
  /** @customConstructor CharacterInfoPage:new */
  export class CharacterInfoPage extends lua.client.NPCs.UI.CharacterInfoPage {}

  // [lua/client/NPCs/UI/TeamOverview.d.ts]
  /** @customConstructor TeamOverview:new */
  export class TeamOverview extends lua.client.NPCs.UI.TeamOverview {}

  // [lua/client/NPCs/UI/TeamPicker.d.ts]
  /** @customConstructor TeamPicker:new */
  export class TeamPicker extends lua.client.NPCs.UI.TeamPicker {}

  // [lua/client/OptionScreens/BootstrapConnectPopup.d.ts]
  /** @customConstructor BootstrapConnectPopup:new */
  export class BootstrapConnectPopup extends lua.client.OptionScreens.BootstrapConnectPopup {}

  // [lua/client/OptionScreens/CharacterCreationHeader.d.ts]
  /** @customConstructor CharacterCreationHeader:new */
  export class CharacterCreationHeader extends lua.client.OptionScreens.CharacterCreationHeader {}

  // [lua/client/OptionScreens/CharacterCreationMain.d.ts]
  /** @customConstructor CharacterCreationMain:new */
  export class CharacterCreationMain extends lua.client.OptionScreens.CharacterCreationMain {}
  /** @customConstructor CharacterCreationMainCharacterPanel:new */
  export class CharacterCreationMainCharacterPanel extends lua.client.OptionScreens
    .CharacterCreationMainCharacterPanel {}
  /** @customConstructor CharacterCreationMainPresetPanel:new */
  export class CharacterCreationMainPresetPanel extends lua.client.OptionScreens.CharacterCreationMainPresetPanel {}

  // [lua/client/OptionScreens/CharacterCreationProfession.d.ts]
  /** @customConstructor CharacterCreationProfession:new */
  export class CharacterCreationProfession extends lua.client.OptionScreens.CharacterCreationProfession {}
  export abstract class BCRC extends lua.client.OptionScreens.BCRC {}

  // [lua/client/OptionScreens/ConnectToServer.d.ts]
  /** @customConstructor ConnectToServer:new */
  export class ConnectToServer extends lua.client.OptionScreens.ConnectToServer {}

  // [lua/client/OptionScreens/CoopCharacterCreation.d.ts]
  /** @customConstructor CoopCharacterCreation:new */
  export class CoopCharacterCreation extends lua.client.OptionScreens.CoopCharacterCreation {}

  // [lua/client/OptionScreens/CoopCharacterCreationMain.d.ts]
  /** @customConstructor CoopCharacterCreationMain:new */
  export class CoopCharacterCreationMain extends lua.client.OptionScreens.CoopCharacterCreationMain {}

  // [lua/client/OptionScreens/CoopCharacterCreationProfession.d.ts]
  /** @customConstructor CoopCharacterCreationProfession:new */
  export class CoopCharacterCreationProfession extends lua.client.OptionScreens.CoopCharacterCreationProfession {}

  // [lua/client/OptionScreens/CoopMapSpawnSelect.d.ts]
  /** @customConstructor CoopMapSpawnSelect:new */
  export class CoopMapSpawnSelect extends lua.client.OptionScreens.CoopMapSpawnSelect {}

  // [lua/client/OptionScreens/CoopOptionsScreen.d.ts]
  /** @customConstructor CoopOptionsScreen:new */
  export class CoopOptionsScreen extends lua.client.OptionScreens.CoopOptionsScreen {}
  /** @customConstructor CoopOptionsScreenPanel:new */
  export class CoopOptionsScreenPanel extends lua.client.OptionScreens.CoopOptionsScreenPanel {}
  export abstract class CoopConnection extends lua.client.OptionScreens.CoopConnection {}

  // [lua/client/OptionScreens/CoopUserName.d.ts]
  /** @customConstructor CoopUserName:new */
  export class CoopUserName extends lua.client.OptionScreens.CoopUserName {}

  // [lua/client/OptionScreens/InviteFriends.d.ts]
  /** @customConstructor InviteFriends:new */
  export class InviteFriends extends lua.client.OptionScreens.InviteFriends {}

  // [lua/client/OptionScreens/ISGameSounds.d.ts]
  /** @customConstructor ISGameSounds:new */
  export class ISGameSounds extends lua.client.OptionScreens.ISGameSounds {}

  // [lua/client/OptionScreens/ISModsNagPanel.d.ts]
  /** @customConstructor ISModsNagPanel:new */
  export class ISModsNagPanel extends lua.client.OptionScreens.ISModsNagPanel {}

  // [lua/client/OptionScreens/ISScoreboard.d.ts]
  /** @customConstructor ISScoreboard:new */
  export class ISScoreboard extends lua.client.OptionScreens.ISScoreboard {}

  // [lua/client/OptionScreens/LastStandChallenge.d.ts]
  export abstract class LastStandChallenge extends lua.client.OptionScreens.LastStandChallenge {}

  // [lua/client/OptionScreens/LastStandPlayerSelect.d.ts]
  /** @customConstructor LastStandPlayerSelect:new */
  export class LastStandPlayerSelect extends lua.client.OptionScreens.LastStandPlayerSelect {}

  // [lua/client/OptionScreens/LoadGameScreen.d.ts]
  /** @customConstructor LoadGameScreen:new */
  export class LoadGameScreen extends lua.client.OptionScreens.LoadGameScreen {}
  /** @noSelf */
  export const LoadGameScreen_onModsModified: () => any;

  // [lua/client/OptionScreens/MainOptions.d.ts]
  /** @customConstructor MainOptions:new */
  export class MainOptions extends lua.client.OptionScreens.MainOptions {}

  // [lua/client/OptionScreens/MainScreen.d.ts]
  /** @customConstructor MainScreen:new */
  export class MainScreen extends lua.client.OptionScreens.MainScreen {}

  // [lua/client/OptionScreens/MapsOrder.d.ts]
  export abstract class IgnoredMap extends lua.client.OptionScreens.IgnoredMap {}
  export abstract class MapsOrder extends lua.client.OptionScreens.MapsOrder {}

  // [lua/client/OptionScreens/MapSpawnSelect.d.ts]
  /** @customConstructor MapSpawnSelect:new */
  export class MapSpawnSelect extends lua.client.OptionScreens.MapSpawnSelect {}
  /** @customConstructor MapSpawnSelectImage:new */
  export class MapSpawnSelectImage extends lua.client.OptionScreens.MapSpawnSelectImage {}
  /** @customConstructor MapSpawnSelectInfoPanel:new */
  export class MapSpawnSelectInfoPanel extends lua.client.OptionScreens.MapSpawnSelectInfoPanel {}
  /** @customConstructor MapSpawnSelectListBox:new */
  export class MapSpawnSelectListBox extends lua.client.OptionScreens.MapSpawnSelectListBox {}

  // [lua/client/OptionScreens/ModMoreInfo.d.ts]
  /** @customConstructor ModMoreInfo:new */
  export class ModMoreInfo extends lua.client.OptionScreens.ModMoreInfo {}

  // [lua/client/OptionScreens/ModSelector/ISModsHelpPanel.d.ts]
  /** @customConstructor ISModsHelpPanel:new */
  export class ISModsHelpPanel extends lua.client.OptionScreens.ModSelector.ISModsHelpPanel {}

  // [lua/client/OptionScreens/ModSelector/MapOrderListBox.d.ts]
  /** @customConstructor undefined:new */
  export class undefined extends lua.client.OptionScreens.ModSelector.undefined {}

  // [lua/client/OptionScreens/ModSelector/MapOrderUI.d.ts]
  /** @customConstructor undefined:new */
  export class undefined extends lua.client.OptionScreens.ModSelector.undefined {}

  // [lua/client/OptionScreens/ModSelector/MissedModsPanel.d.ts]
  /** @customConstructor undefined:new */
  export class undefined extends lua.client.OptionScreens.ModSelector.undefined {}

  // [lua/client/OptionScreens/ModSelector/ModInfoPanel.d.ts]
  /** @customConstructor ModInfoPanel:new */
  export class ModInfoPanel extends lua.client.OptionScreens.ModSelector.ModInfoPanel {}

  // [lua/client/OptionScreens/ModSelector/ModInfoPanelDesc.d.ts]
  /** @customConstructor undefined:new */
  export class undefined extends lua.client.OptionScreens.ModSelector.undefined {}
  /** @noSelf */
  export const createChildren: () => any;
  /** @noSelf */
  export const render: () => any;

  // [lua/client/OptionScreens/ModSelector/ModInfoPanelInteractionParam.d.ts]
  /** @customConstructor undefined:new */
  export class undefined extends lua.client.OptionScreens.ModSelector.undefined {}

  // [lua/client/OptionScreens/ModSelector/ModInfoPanelParam.d.ts]
  /** @customConstructor undefined:new */
  export class undefined extends lua.client.OptionScreens.ModSelector.undefined {}

  // [lua/client/OptionScreens/ModSelector/ModInfoPanelThumbnail.d.ts]
  /** @customConstructor undefined:new */
  export class undefined extends lua.client.OptionScreens.ModSelector.undefined {}

  // [lua/client/OptionScreens/ModSelector/ModInfoPanelTitle.d.ts]
  /** @customConstructor undefined:new */
  export class undefined extends lua.client.OptionScreens.ModSelector.undefined {}

  // [lua/client/OptionScreens/ModSelector/ModListBox.d.ts]
  /** @customConstructor undefined:new */
  export class undefined extends lua.client.OptionScreens.ModSelector.undefined {}

  // [lua/client/OptionScreens/ModSelector/ModListPanel.d.ts]
  /** @customConstructor undefined:new */
  export class undefined extends lua.client.OptionScreens.ModSelector.undefined {}

  // [lua/client/OptionScreens/ModSelector/ModListPresets.d.ts]
  /** @customConstructor ModListPresets:new */
  export class ModListPresets extends lua.client.OptionScreens.ModSelector.ModListPresets {}

  // [lua/client/OptionScreens/ModSelector/ModLoadOrderPanel.d.ts]
  /** @customConstructor undefined:new */
  export class undefined extends lua.client.OptionScreens.ModSelector.undefined {}

  // [lua/client/OptionScreens/ModSelector/ModOrderListBox.d.ts]
  /** @customConstructor undefined:new */
  export class undefined extends lua.client.OptionScreens.ModSelector.undefined {}

  // [lua/client/OptionScreens/ModSelector/ModSelector.d.ts]
  /** @customConstructor ModSelector:new */
  export class ModSelector extends lua.client.OptionScreens.ModSelector.ModSelector {}
  /** @noSelf */
  export const ModSelector_onModsModified: () => any;

  // [lua/client/OptionScreens/ModSelector/ModSelectorModel.d.ts]
  /** @noSelf */
  export const acceptChanges: () => any;
  /** @noSelf */
  export const checkMapConflicts: () => any;
  /** @noSelf */
  export const getActiveMods: () => any;
  /** @noSelf */
  export const getAllMapsInOrder: () => any;
  /** @noSelf */
  export const loadModDataFromFile: () => any;
  /** @noSelf */
  export const refreshMods: () => any;
  /** @noSelf */
  export const reloadMods: () => any;
  /** @noSelf */
  export const saveModDataToFile: () => any;

  // [lua/client/OptionScreens/MultiplayerScreen.d.ts]
  /** @customConstructor MultiplayerScreen:new */
  export class MultiplayerScreen extends lua.client.OptionScreens.MultiplayerScreen {}

  // [lua/client/OptionScreens/NewGameScreen.d.ts]
  /** @customConstructor NewGameScreen:new */
  export class NewGameScreen extends lua.client.OptionScreens.NewGameScreen {}

  // [lua/client/OptionScreens/PublicServerList.d.ts]
  /** @customConstructor PublicServerList:new */
  export class PublicServerList extends lua.client.OptionScreens.PublicServerList {}
  /** @noSelf */
  export const OnConnected: () => any;

  // [lua/client/OptionScreens/SandboxOptions.d.ts]
  /** @customConstructor SandboxOptionsScreen:new */
  export class SandboxOptionsScreen extends lua.client.OptionScreens.SandboxOptionsScreen {}

  // [lua/client/OptionScreens/ServerConnectPopup.d.ts]
  /** @customConstructor ServerConnectPopup:new */
  export class ServerConnectPopup extends lua.client.OptionScreens.ServerConnectPopup {}

  // [lua/client/OptionScreens/ServerList.d.ts]
  /** @customConstructor ServerList:new */
  export class ServerList extends lua.client.OptionScreens.ServerList {}

  // [lua/client/OptionScreens/ServerSettingsScreen.d.ts]
  /** @customConstructor BaseServerSettingsPanel:new */
  export class BaseServerSettingsPanel extends lua.client.OptionScreens.BaseServerSettingsPanel {}
  /** @customConstructor ServerSettingsScreen:new */
  export class ServerSettingsScreen extends lua.client.OptionScreens.ServerSettingsScreen {}
  /** @customConstructor SpawnRegionsNameFilePanel:new */
  export class SpawnRegionsNameFilePanel extends lua.client.OptionScreens.SpawnRegionsNameFilePanel {}
  /** @customConstructor undefined:new */
  export class undefined extends lua.client.OptionScreens.undefined {}
  export abstract class DefaultServerSettings extends lua.client.OptionScreens.DefaultServerSettings {}
  /** @noSelf */
  export const aboutToShow: () => any;
  /** @noSelf */
  export const create: () => any;
  /** @noSelf */
  export const onButtonCancel: () => any;
  /** @noSelf */
  export const onButtonMods: () => any;
  /** @noSelf */
  export const onButtonNext: () => any;

  // [lua/client/OptionScreens/ServerToolbox.d.ts]
  /** @customConstructor ServerToolbox:new */
  export class ServerToolbox extends lua.client.OptionScreens.ServerToolbox {}

  // [lua/client/OptionScreens/ServerWorkshopItemScreen.d.ts]
  /** @customConstructor ServerWorkshopItemScreen:new */
  export class ServerWorkshopItemScreen extends lua.client.OptionScreens.ServerWorkshopItemScreen {}

  // [lua/client/OptionScreens/WorkshopSubmitScreen.d.ts]
  /** @customConstructor WorkshopSubmitScreen:new */
  export class WorkshopSubmitScreen extends lua.client.OptionScreens.WorkshopSubmitScreen {}

  // [lua/client/OptionScreens/WorldSelect.d.ts]
  /** @customConstructor WorldSelect:new */
  export class WorldSelect extends lua.client.OptionScreens.WorldSelect {}

  // [lua/client/PZAPI/ModOptions.d.ts]
  /** @noSelf */
  export const load: () => any;
  /** @noSelf */
  export const save: () => any;

  // [lua/client/RadioCom/ISRadioAction.d.ts]
  /** @customConstructor ISRadioAction:new */
  export class ISRadioAction extends lua.client.RadioCom.ISRadioAction {}

  // [lua/client/RadioCom/ISRadioInteractions.d.ts]
  export abstract class ISRadioInteractions extends lua.client.RadioCom.ISRadioInteractions {}

  // [lua/client/RadioCom/ISRadioWindow.d.ts]
  /** @customConstructor ISRadioWindow:new */
  export class ISRadioWindow extends lua.client.RadioCom.ISRadioWindow {}

  // [lua/client/RadioCom/ISUIRadio/ISBatteryStatusDisplay.d.ts]
  /** @customConstructor ISBatteryStatusDisplay:new */
  export class ISBatteryStatusDisplay extends lua.client.RadioCom.ISUIRadio.ISBatteryStatusDisplay {}

  // [lua/client/RadioCom/ISUIRadio/ISItemDropBox.d.ts]
  /** @customConstructor ISItemDropBox:new */
  export class ISItemDropBox extends lua.client.RadioCom.ISUIRadio.ISItemDropBox {}

  // [lua/client/RadioCom/ISUIRadio/ISLedLight.d.ts]
  /** @customConstructor ISLedLight:new */
  export class ISLedLight extends lua.client.RadioCom.ISUIRadio.ISLedLight {}

  // [lua/client/RadioCom/ISUIRadio/ISSineWaveDisplay.d.ts]
  /** @customConstructor ISSineWaveDisplay:new */
  export class ISSineWaveDisplay extends lua.client.RadioCom.ISUIRadio.ISSineWaveDisplay {}

  // [lua/client/RadioCom/ISUIRadio/ISSliderPanel.d.ts]
  /** @customConstructor ISSliderPanel:new */
  export class ISSliderPanel extends lua.client.RadioCom.ISUIRadio.ISSliderPanel {}

  // [lua/client/RadioCom/ISUIRadio/ISSpeakerButton.d.ts]
  /** @customConstructor ISSpeakerButton:new */
  export class ISSpeakerButton extends lua.client.RadioCom.ISUIRadio.ISSpeakerButton {}

  // [lua/client/RadioCom/ISUIRadio/ISVolumeBar.d.ts]
  /** @customConstructor ISVolumeBar:new */
  export class ISVolumeBar extends lua.client.RadioCom.ISUIRadio.ISVolumeBar {}

  // [lua/client/RadioCom/RadioWindowModules/RWM.d.ts]
  /** @customConstructor RWM:new */
  export class RWM extends lua.client.RadioCom.RadioWindowModules.RWM {}

  // [lua/client/RadioCom/RadioWindowModules/RWMChannel.d.ts]
  /** @customConstructor RWMChannel:new */
  export class RWMChannel extends lua.client.RadioCom.RadioWindowModules.RWMChannel {}

  // [lua/client/RadioCom/RadioWindowModules/RWMChannelTV.d.ts]
  /** @customConstructor RWMChannelTV:new */
  export class RWMChannelTV extends lua.client.RadioCom.RadioWindowModules.RWMChannelTV {}

  // [lua/client/RadioCom/RadioWindowModules/RWMElement.d.ts]
  /** @customConstructor RWMElement:new */
  export class RWMElement extends lua.client.RadioCom.RadioWindowModules.RWMElement {}

  // [lua/client/RadioCom/RadioWindowModules/RWMGeneral.d.ts]
  /** @customConstructor RWMGeneral:new */
  export class RWMGeneral extends lua.client.RadioCom.RadioWindowModules.RWMGeneral {}

  // [lua/client/RadioCom/RadioWindowModules/RWMGridPower.d.ts]
  /** @customConstructor RWMGridPower:new */
  export class RWMGridPower extends lua.client.RadioCom.RadioWindowModules.RWMGridPower {}

  // [lua/client/RadioCom/RadioWindowModules/RWMMedia.d.ts]
  /** @customConstructor RWMMedia:new */
  export class RWMMedia extends lua.client.RadioCom.RadioWindowModules.RWMMedia {}

  // [lua/client/RadioCom/RadioWindowModules/RWMMicrophone.d.ts]
  /** @customConstructor RWMMicrophone:new */
  export class RWMMicrophone extends lua.client.RadioCom.RadioWindowModules.RWMMicrophone {}

  // [lua/client/RadioCom/RadioWindowModules/RWMPanel.d.ts]
  /** @customConstructor RWMPanel:new */
  export class RWMPanel extends lua.client.RadioCom.RadioWindowModules.RWMPanel {}

  // [lua/client/RadioCom/RadioWindowModules/RWMPower.d.ts]
  /** @customConstructor RWMPower:new */
  export class RWMPower extends lua.client.RadioCom.RadioWindowModules.RWMPower {}

  // [lua/client/RadioCom/RadioWindowModules/RWMSignal.d.ts]
  /** @customConstructor RWMSignal:new */
  export class RWMSignal extends lua.client.RadioCom.RadioWindowModules.RWMSignal {}

  // [lua/client/RadioCom/RadioWindowModules/RWMSubEditPreset.d.ts]
  /** @customConstructor RWMSubEditPreset:new */
  export class RWMSubEditPreset extends lua.client.RadioCom.RadioWindowModules.RWMSubEditPreset {}

  // [lua/client/RadioCom/RadioWindowModules/RWMTestPane.d.ts]
  /** @customConstructor RWMTestPane:new */
  export class RWMTestPane extends lua.client.RadioCom.RadioWindowModules.RWMTestPane {}

  // [lua/client/RadioCom/RadioWindowModules/RWMVolume.d.ts]
  /** @customConstructor RWMVolume:new */
  export class RWMVolume extends lua.client.RadioCom.RadioWindowModules.RWMVolume {}

  // [lua/client/RadioCom/StoryLineSounds/ISSLEvent.d.ts]
  /** @customConstructor ISSLEvent:new */
  export class ISSLEvent extends lua.client.RadioCom.StoryLineSounds.ISSLEvent {}

  // [lua/client/RadioCom/StoryLineSounds/ISSLFrame.d.ts]
  /** @customConstructor ISSLFrame:new */
  export class ISSLFrame extends lua.client.RadioCom.StoryLineSounds.ISSLFrame {}

  // [lua/client/RadioCom/StoryLineSounds/ISSLManager.d.ts]
  /** @customConstructor ISSLManager:new */
  export class ISSLManager extends lua.client.RadioCom.StoryLineSounds.ISSLManager {}

  // [lua/client/RadioCom/StoryLineSounds/ISSLSounds.d.ts]
  /** @customConstructor ISSLSounds:new */
  export class ISSLSounds extends lua.client.RadioCom.StoryLineSounds.ISSLSounds {}

  // [lua/client/RadioCom/StoryLineSounds/StorySoundDebug.d.ts]
  /** @customConstructor ISStorySoundsDebug:new */
  export class ISStorySoundsDebug extends lua.client.RadioCom.StoryLineSounds.ISStorySoundsDebug {}

  // [lua/client/RainBarrel/CRainBarrelGlobalObject.d.ts]
  /** @customConstructor CRainBarrelGlobalObject:new */
  export class CRainBarrelGlobalObject extends lua.client.RainBarrel.CRainBarrelGlobalObject {}

  // [lua/client/RainBarrel/CRainBarrelSystem.d.ts]
  /** @customConstructor CRainBarrelSystem:new */
  export class CRainBarrelSystem extends lua.client.RainBarrel.CRainBarrelSystem {}

  // [lua/client/RecordedMedia/ISMediaInfo.d.ts]
  /** @customConstructor ISMediaInfo:new */
  export class ISMediaInfo extends lua.client.RecordedMedia.ISMediaInfo {}

  // [lua/client/Seasons/ISUI/ISWeather.d.ts]
  /** @customConstructor ISWeather:new */
  export class ISWeather extends lua.client.Seasons.ISUI.ISWeather {}

  // [lua/client/SurvivalGuide/ISTutorialPageInfo.d.ts]
  /** @customConstructor ISTutorialPageInfo:new */
  export class ISTutorialPageInfo extends lua.client.SurvivalGuide.ISTutorialPageInfo {}
  /** @customConstructor ISTutorialSetInfo:new */
  export class ISTutorialSetInfo extends lua.client.SurvivalGuide.ISTutorialSetInfo {}

  // [lua/client/SurvivalGuide/ISTutorialPanel.d.ts]
  /** @customConstructor ISSurvivalGuideListBox:new */
  export class ISSurvivalGuideListBox extends lua.client.SurvivalGuide.ISSurvivalGuideListBox {}
  /** @customConstructor ISSurvivalGuideRichText:new */
  export class ISSurvivalGuideRichText extends lua.client.SurvivalGuide.ISSurvivalGuideRichText {}
  /** @customConstructor ISSurvivalGuideRightPanel:new */
  export class ISSurvivalGuideRightPanel extends lua.client.SurvivalGuide.ISSurvivalGuideRightPanel {}
  /** @customConstructor ISTutorialPanel:new */
  export class ISTutorialPanel extends lua.client.SurvivalGuide.ISTutorialPanel {}

  // [lua/client/SurvivalGuide/SurvivalGuideEntries.d.ts]
  export abstract class SurvivalGuideEntries extends lua.client.SurvivalGuide.SurvivalGuideEntries {}

  // [lua/client/SurvivalGuide/SurvivalGuideManager.d.ts]
  /** @customConstructor SurvivalGuideManager:new */
  export class SurvivalGuideManager extends lua.client.SurvivalGuide.SurvivalGuideManager {}
  /** @noSelf */
  export const doSurvivalGuide: () => any;

  // [lua/client/Tests/MapObjectTests.d.ts]
  /** @noSelf */
  export const MapObjectTestCampfire: () => any;
  /** @noSelf */
  export const MapObjectTestFarming: () => any;
  /** @noSelf */
  export const MapObjectTestRainBarrel: () => any;

  // [lua/client/Tests/RecipeTests.d.ts]
  /** @noSelf */
  export const RecipeTestAll: () => any;
  /** @noSelf */
  export const RecipeTestAvailableItems: () => any;
  /** @noSelf */
  export const RecipeTestNumberOfTimes: () => any;
  /** @noSelf */
  export const RecipeTestSelectedItem: () => any;

  // [lua/client/Tests/RecipeUtils.d.ts]
  export abstract class RecipeUtils extends lua.client.Tests.RecipeUtils {}

  // [lua/client/Tests/TimedActionsTests.d.ts]
  export abstract class TimedActionTests extends lua.client.Tests.TimedActionTests {}

  // [lua/client/TimedActions/Animal/ISCheckAnimalInsideTrailer.d.ts]
  /** @customConstructor ISCheckAnimalInsideTrailer:new */
  export class ISCheckAnimalInsideTrailer extends lua.client.TimedActions.Animal.ISCheckAnimalInsideTrailer {}

  // [lua/client/TimedActions/Animal/ISGetHutchInfo.d.ts]
  /** @customConstructor ISGetHutchInfo:new */
  export class ISGetHutchInfo extends lua.client.TimedActions.Animal.ISGetHutchInfo {}

  // [lua/client/TimedActions/Animal/ISInspectAnimalTrackAction.d.ts]
  /** @customConstructor ISInspectAnimalTrackAction:new */
  export class ISInspectAnimalTrackAction extends lua.client.TimedActions.Animal.ISInspectAnimalTrackAction {}

  // [lua/client/TimedActions/ISBBQInfoAction.d.ts]
  /** @customConstructor ISBBQInfoAction:new */
  export class ISBBQInfoAction extends lua.client.TimedActions.ISBBQInfoAction {}

  // [lua/client/TimedActions/ISCampingInfoAction.d.ts]
  /** @customConstructor ISCampingInfoAction:new */
  export class ISCampingInfoAction extends lua.client.TimedActions.ISCampingInfoAction {}

  // [lua/client/TimedActions/ISClimbOverFence.d.ts]
  /** @customConstructor ISClimbOverFence:new */
  export class ISClimbOverFence extends lua.client.TimedActions.ISClimbOverFence {}

  // [lua/client/TimedActions/ISClimbSheetRopeAction.d.ts]
  /** @customConstructor ISClimbSheetRopeAction:new */
  export class ISClimbSheetRopeAction extends lua.client.TimedActions.ISClimbSheetRopeAction {}

  // [lua/client/TimedActions/ISClimbThroughWindow.d.ts]
  /** @customConstructor ISClimbThroughWindow:new */
  export class ISClimbThroughWindow extends lua.client.TimedActions.ISClimbThroughWindow {}

  // [lua/client/TimedActions/ISClothingExtraAction.d.ts]
  /** @customConstructor ISClothingExtraAction:new */
  export class ISClothingExtraAction extends lua.client.TimedActions.ISClothingExtraAction {}

  // [lua/client/TimedActions/ISDetachItemHotbar.d.ts]
  /** @customConstructor ISDetachItemHotbar:new */
  export class ISDetachItemHotbar extends lua.client.TimedActions.ISDetachItemHotbar {}

  // [lua/client/TimedActions/ISDigStairsAction.d.ts]
  /** @customConstructor ISDigStairsAction:new */
  export class ISDigStairsAction extends lua.client.TimedActions.ISDigStairsAction {}

  // [lua/client/TimedActions/ISFireplaceInfoAction.d.ts]
  /** @customConstructor ISFireplaceInfoAction:new */
  export class ISFireplaceInfoAction extends lua.client.TimedActions.ISFireplaceInfoAction {}

  // [lua/client/TimedActions/ISGeneratorInfoAction.d.ts]
  /** @customConstructor ISGeneratorInfoAction:new */
  export class ISGeneratorInfoAction extends lua.client.TimedActions.ISGeneratorInfoAction {}

  // [lua/client/TimedActions/ISGrabItemAction.d.ts]
  /** @customConstructor ISGrabItemAction:new */
  export class ISGrabItemAction extends lua.client.TimedActions.ISGrabItemAction {}

  // [lua/client/TimedActions/ISInventoryTransferAction.d.ts]
  /** @customConstructor ISInventoryTransferAction:new */
  export class ISInventoryTransferAction extends lua.client.TimedActions.ISInventoryTransferAction {}

  // [lua/client/TimedActions/ISMedicalCheckAction.d.ts]
  /** @customConstructor ISMedicalCheckAction:new */
  export class ISMedicalCheckAction extends lua.client.TimedActions.ISMedicalCheckAction {}

  // [lua/client/TimedActions/ISOpenContainerTimedAction.d.ts]
  /** @customConstructor ISOpenContainerTimedAction:new */
  export class ISOpenContainerTimedAction extends lua.client.TimedActions.ISOpenContainerTimedAction {}

  // [lua/client/TimedActions/ISOvenUITimedAction.d.ts]
  /** @customConstructor ISOvenUITimedAction:new */
  export class ISOvenUITimedAction extends lua.client.TimedActions.ISOvenUITimedAction {}

  // [lua/client/TimedActions/ISPickAxeGroundCoverItem.d.ts]
  /** @customConstructor ISPickAxeGroundCoverItem:new */
  export class ISPickAxeGroundCoverItem extends lua.client.TimedActions.ISPickAxeGroundCoverItem {}

  // [lua/client/TimedActions/ISQueueActionsAction.d.ts]
  /** @customConstructor ISQueueActionsAction:new */
  export class ISQueueActionsAction extends lua.client.TimedActions.ISQueueActionsAction {}

  // [lua/client/TimedActions/ISReadWorldMap.d.ts]
  /** @customConstructor ISReadWorldMap:new */
  export class ISReadWorldMap extends lua.client.TimedActions.ISReadWorldMap {}

  // [lua/client/TimedActions/ISTimedActionQueue.d.ts]
  /** @customConstructor ISTimedActionQueue:new */
  export class ISTimedActionQueue extends lua.client.TimedActions.ISTimedActionQueue {}

  // [lua/client/TimedActions/WalkToTimedAction.d.ts]
  /** @customConstructor ISWalkToTimedAction:new */
  export class ISWalkToTimedAction extends lua.client.TimedActions.ISWalkToTimedAction {}

  // [lua/client/TimedActions/WalkToTimedActionF.d.ts]
  /** @customConstructor ISWalkToTimedActionF:new */
  export class ISWalkToTimedActionF extends lua.client.TimedActions.ISWalkToTimedActionF {}

  // [lua/client/Traps/CTrapGlobalObject.d.ts]
  /** @customConstructor CTrapGlobalObject:new */
  export class CTrapGlobalObject extends lua.client.Traps.CTrapGlobalObject {}

  // [lua/client/Traps/CTrapSystem.d.ts]
  /** @customConstructor CTrapSystem:new */
  export class CTrapSystem extends lua.client.Traps.CTrapSystem {}

  // [lua/client/Tutorial/ISUI/TutorialFocus.d.ts]
  /** @customConstructor TutorialFocus:new */
  export class TutorialFocus extends lua.client.Tutorial.ISUI.TutorialFocus {}

  // [lua/client/Tutorial/ISUI/TutorialMessage.d.ts]
  /** @customConstructor TutorialMessage:new */
  export class TutorialMessage extends lua.client.Tutorial.ISUI.TutorialMessage {}

  // [lua/client/Tutorial/Steps.d.ts]
  /** @customConstructor BandageStep:new */
  export class BandageStep extends lua.client.Tutorial.BandageStep {}
  /** @customConstructor FightStep:new */
  export class FightStep extends lua.client.Tutorial.FightStep {}
  /** @customConstructor InventoryLootingStep:new */
  export class InventoryLootingStep extends lua.client.Tutorial.InventoryLootingStep {}
  /** @customConstructor InventoryUseStep:new */
  export class InventoryUseStep extends lua.client.Tutorial.InventoryUseStep {}
  /** @customConstructor ShotgunStep:new */
  export class ShotgunStep extends lua.client.Tutorial.ShotgunStep {}
  /** @customConstructor SneakStep:new */
  export class SneakStep extends lua.client.Tutorial.SneakStep {}
  /** @customConstructor WalkToAdjacent:new */
  export class WalkToAdjacent extends lua.client.Tutorial.WalkToAdjacent {}
  /** @customConstructor WelcomeStep:new */
  export class WelcomeStep extends lua.client.Tutorial.WelcomeStep {}
  export abstract class TutorialTests extends lua.client.Tutorial.TutorialTests {}

  // [lua/client/Tutorial/Tutorial1.d.ts]
  export abstract class Tutorial1 extends lua.client.Tutorial.Tutorial1 {}

  // [lua/client/Tutorial/TutorialSetup.d.ts]
  export abstract class TutorialData extends lua.client.Tutorial.TutorialData {}
  /** @noSelf */
  export const doTutorialDraw: () => any;
  /** @noSelf */
  export const doTutorialInit: () => any;
  /** @noSelf */
  export const preLoadTutorialInit: () => any;

  // [lua/client/Tutorial/TutorialStep.d.ts]
  /** @customConstructor TutorialStep:new */
  export class TutorialStep extends lua.client.Tutorial.TutorialStep {}

  // [lua/client/Vehicles/ISUI/EditVehicleState.d.ts]
  /** @customConstructor EditVehicleState_EditPhysics_PhysicsMeshPanel:new */
  export class EditVehicleState_EditPhysics_PhysicsMeshPanel extends lua.client.Vehicles.ISUI
    .EditVehicleState_EditPhysics_PhysicsMeshPanel {}
  /** @customConstructor EditVehicleUI:new */
  export class EditVehicleUI extends lua.client.Vehicles.ISUI.EditVehicleUI {}
  /** @customConstructor EditVehicleUI_EditArea:new */
  export class EditVehicleUI_EditArea extends lua.client.Vehicles.ISUI.EditVehicleUI_EditArea {}
  /** @customConstructor EditVehicleUI_EditAttachment:new */
  export class EditVehicleUI_EditAttachment extends lua.client.Vehicles.ISUI.EditVehicleUI_EditAttachment {}
  /** @customConstructor EditVehicleUI_EditChassis:new */
  export class EditVehicleUI_EditChassis extends lua.client.Vehicles.ISUI.EditVehicleUI_EditChassis {}
  /** @customConstructor EditVehicleUI_EditPanel:new */
  export class EditVehicleUI_EditPanel extends lua.client.Vehicles.ISUI.EditVehicleUI_EditPanel {}
  /** @customConstructor EditVehicleUI_EditPart:new */
  export class EditVehicleUI_EditPart extends lua.client.Vehicles.ISUI.EditVehicleUI_EditPart {}
  /** @customConstructor EditVehicleUI_EditPassenger:new */
  export class EditVehicleUI_EditPassenger extends lua.client.Vehicles.ISUI.EditVehicleUI_EditPassenger {}
  /** @customConstructor EditVehicleUI_EditPhysics:new */
  export class EditVehicleUI_EditPhysics extends lua.client.Vehicles.ISUI.EditVehicleUI_EditPhysics {}
  /** @customConstructor EditVehicleUI_EditWheel:new */
  export class EditVehicleUI_EditWheel extends lua.client.Vehicles.ISUI.EditVehicleUI_EditWheel {}
  /** @customConstructor EditVehicleUI_ListBox:new */
  export class EditVehicleUI_ListBox extends lua.client.Vehicles.ISUI.EditVehicleUI_ListBox {}
  /** @customConstructor EditVehicleUI_Scene:new */
  export class EditVehicleUI_Scene extends lua.client.Vehicles.ISUI.EditVehicleUI_Scene {}
  /** @customConstructor EditVehicleUI_SwitchView:new */
  export class EditVehicleUI_SwitchView extends lua.client.Vehicles.ISUI.EditVehicleUI_SwitchView {}
  /** @noSelf */
  export const EditVehicleState_InitUI: () => any;

  // [lua/client/Vehicles/ISUI/ISCarMechanicsOverlay.d.ts]
  export abstract class ISCarMechanicsOverlay extends lua.client.Vehicles.ISUI.ISCarMechanicsOverlay {}

  // [lua/client/Vehicles/ISUI/ISLightbarUI.d.ts]
  /** @customConstructor ISLightbarUI:new */
  export class ISLightbarUI extends lua.client.Vehicles.ISUI.ISLightbarUI {}

  // [lua/client/Vehicles/ISUI/ISUI3DScene.d.ts]
  /** @customConstructor ISUI3DScene:new */
  export class ISUI3DScene extends lua.client.Vehicles.ISUI.ISUI3DScene {}

  // [lua/client/Vehicles/ISUI/ISUIVehicleModel.d.ts]
  /** @customConstructor ISUIVehicleModel:new */
  export class ISUIVehicleModel extends lua.client.Vehicles.ISUI.ISUIVehicleModel {}

  // [lua/client/Vehicles/ISUI/ISVehicleACUI.d.ts]
  /** @customConstructor ISVehicleACUI:new */
  export class ISVehicleACUI extends lua.client.Vehicles.ISUI.ISVehicleACUI {}

  // [lua/client/Vehicles/ISUI/ISVehicleAngles.d.ts]
  /** @customConstructor ISVehicleAngles:new */
  export class ISVehicleAngles extends lua.client.Vehicles.ISUI.ISVehicleAngles {}

  // [lua/client/Vehicles/ISUI/ISVehicleBloodUI.d.ts]
  /** @customConstructor ISVehicleBloodUI:new */
  export class ISVehicleBloodUI extends lua.client.Vehicles.ISUI.ISVehicleBloodUI {}

  // [lua/client/Vehicles/ISUI/ISVehicleColor.d.ts]
  /** @customConstructor ISVehicleHSV:new */
  export class ISVehicleHSV extends lua.client.Vehicles.ISUI.ISVehicleHSV {}

  // [lua/client/Vehicles/ISUI/ISVehicleDashboard.d.ts]
  /** @customConstructor ISVehicleDashboard:new */
  export class ISVehicleDashboard extends lua.client.Vehicles.ISUI.ISVehicleDashboard {}

  // [lua/client/Vehicles/ISUI/ISVehicleGauge.d.ts]
  /** @customConstructor ISVehicleGauge:new */
  export class ISVehicleGauge extends lua.client.Vehicles.ISUI.ISVehicleGauge {}

  // [lua/client/Vehicles/ISUI/ISVehicleMechanics.d.ts]
  /** @customConstructor ISVehicleMechanics:new */
  export class ISVehicleMechanics extends lua.client.Vehicles.ISUI.ISVehicleMechanics {}

  // [lua/client/Vehicles/ISUI/ISVehicleMenu.d.ts]
  export abstract class ISVehicleMenu extends lua.client.Vehicles.ISUI.ISVehicleMenu {}

  // [lua/client/Vehicles/ISUI/ISVehiclePartMenu.d.ts]
  export abstract class ISVehiclePartMenu extends lua.client.Vehicles.ISUI.ISVehiclePartMenu {}

  // [lua/client/Vehicles/ISUI/ISVehicleRegulator.d.ts]
  export abstract class ISVehicleRegulator extends lua.client.Vehicles.ISUI.ISVehicleRegulator {}

  // [lua/client/Vehicles/ISUI/ISVehicleRoadtripDebug.d.ts]
  /** @customConstructor ISVehicleRoadtripDebug:new */
  export class ISVehicleRoadtripDebug extends lua.client.Vehicles.ISUI.ISVehicleRoadtripDebug {}

  // [lua/client/Vehicles/ISUI/ISVehicleSeatUI.d.ts]
  /** @customConstructor ISVehicleSeatUI:new */
  export class ISVehicleSeatUI extends lua.client.Vehicles.ISUI.ISVehicleSeatUI {}
  export abstract class ImageScale extends lua.client.Vehicles.ISUI.ImageScale {}
  export abstract class SeatOffsetX extends lua.client.Vehicles.ISUI.SeatOffsetX {}
  export abstract class SeatOffsetY extends lua.client.Vehicles.ISUI.SeatOffsetY {}

  // [lua/client/Vehicles/ISVehicleTrailerUtils.d.ts]
  export abstract class ISVehicleTrailerUtils extends lua.client.Vehicles.ISVehicleTrailerUtils {}

  // [lua/client/Vehicles/TimedActions/ISAttachTrailerToVehicle.d.ts]
  /** @customConstructor ISAttachTrailerToVehicle:new */
  export class ISAttachTrailerToVehicle extends lua.client.Vehicles.TimedActions.ISAttachTrailerToVehicle {}

  // [lua/client/Vehicles/TimedActions/ISConfigHeadlight.d.ts]
  /** @customConstructor ISConfigHeadlight:new */
  export class ISConfigHeadlight extends lua.client.Vehicles.TimedActions.ISConfigHeadlight {}

  // [lua/client/Vehicles/TimedActions/ISDetachTrailerFromVehicle.d.ts]
  /** @customConstructor ISDetachTrailerFromVehicle:new */
  export class ISDetachTrailerFromVehicle extends lua.client.Vehicles.TimedActions.ISDetachTrailerFromVehicle {}

  // [lua/client/Vehicles/TimedActions/ISEnterVehicle.d.ts]
  /** @customConstructor ISEnterVehicle:new */
  export class ISEnterVehicle extends lua.client.Vehicles.TimedActions.ISEnterVehicle {}

  // [lua/client/Vehicles/TimedActions/ISExitVehicle.d.ts]
  /** @customConstructor ISExitVehicle:new */
  export class ISExitVehicle extends lua.client.Vehicles.TimedActions.ISExitVehicle {}

  // [lua/client/Vehicles/TimedActions/ISHorn.d.ts]
  /** @customConstructor ISHorn:new */
  export class ISHorn extends lua.client.Vehicles.TimedActions.ISHorn {}

  // [lua/client/Vehicles/TimedActions/ISLightbarUITimedAction.d.ts]
  /** @customConstructor ISLightbarUITimedAction:new */
  export class ISLightbarUITimedAction extends lua.client.Vehicles.TimedActions.ISLightbarUITimedAction {}

  // [lua/client/Vehicles/TimedActions/ISOpenMechanicsUIAction.d.ts]
  /** @customConstructor ISOpenMechanicsUIAction:new */
  export class ISOpenMechanicsUIAction extends lua.client.Vehicles.TimedActions.ISOpenMechanicsUIAction {}

  // [lua/client/Vehicles/TimedActions/ISPathFindAction.d.ts]
  /** @customConstructor ISPathFindAction:new */
  export class ISPathFindAction extends lua.client.Vehicles.TimedActions.ISPathFindAction {}

  // [lua/client/Vehicles/TimedActions/ISStopVehicle.d.ts]
  /** @customConstructor ISStopVehicle:new */
  export class ISStopVehicle extends lua.client.Vehicles.TimedActions.ISStopVehicle {}

  // [lua/client/Vehicles/TimedActions/ISSwitchVehicleSeat.d.ts]
  /** @customConstructor ISSwitchVehicleSeat:new */
  export class ISSwitchVehicleSeat extends lua.client.Vehicles.TimedActions.ISSwitchVehicleSeat {}

  // [lua/client/XpSystem/ISUI/ISCharacterInfo.d.ts]
  /** @customConstructor ISCharacterInfo:new */
  export class ISCharacterInfo extends lua.client.XpSystem.ISUI.ISCharacterInfo {}

  // [lua/client/XpSystem/ISUI/ISCharacterInfoWindow.d.ts]
  /** @customConstructor ISCharacterInfoWindow:new */
  export class ISCharacterInfoWindow extends lua.client.XpSystem.ISUI.ISCharacterInfoWindow {}

  // [lua/client/XpSystem/ISUI/ISCharacterProtection.d.ts]
  /** @customConstructor ISCharacterProtection:new */
  export class ISCharacterProtection extends lua.client.XpSystem.ISUI.ISCharacterProtection {}

  // [lua/client/XpSystem/ISUI/ISCharacterScreen.d.ts]
  /** @customConstructor ISCharacterScreen:new */
  export class ISCharacterScreen extends lua.client.XpSystem.ISUI.ISCharacterScreen {}
  /** @customConstructor ISCharacterScreenAvatar:new */
  export class ISCharacterScreenAvatar extends lua.client.XpSystem.ISUI.ISCharacterScreenAvatar {}

  // [lua/client/XpSystem/ISUI/ISClothingInsPanel.d.ts]
  /** @customConstructor ISClothingInsPanel:new */
  export class ISClothingInsPanel extends lua.client.XpSystem.ISUI.ISClothingInsPanel {}

  // [lua/client/XpSystem/ISUI/ISHealthPanel.d.ts]
  /** @customConstructor HealthPanelAction:new */
  export class HealthPanelAction extends lua.client.XpSystem.ISUI.HealthPanelAction {}
  /** @customConstructor ISHealthBodyPartListBox:new */
  export class ISHealthBodyPartListBox extends lua.client.XpSystem.ISUI.ISHealthBodyPartListBox {}
  /** @customConstructor ISHealthBodyPartPanel:new */
  export class ISHealthBodyPartPanel extends lua.client.XpSystem.ISUI.ISHealthBodyPartPanel {}
  /** @customConstructor ISHealthPanel:new */
  export class ISHealthPanel extends lua.client.XpSystem.ISUI.ISHealthPanel {}
  /** @customConstructor ISNewHealthPanel:new */
  export class ISNewHealthPanel extends lua.client.XpSystem.ISUI.ISNewHealthPanel {}

  // [lua/client/XpSystem/ISUI/ISSkillProgressBar.d.ts]
  /** @customConstructor ISSkillProgressBar:new */
  export class ISSkillProgressBar extends lua.client.XpSystem.ISUI.ISSkillProgressBar {}


/////////////////////////////////////////////
// [PARTIAL] : lua.server.api.partial.d.ts //
/////////////////////////////////////////////

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
  export abstract class Recipe extends lua.server.Recipe {}

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


/////////////////////////////////////////////
// [PARTIAL] : lua.shared.api.partial.d.ts //
/////////////////////////////////////////////

  // [lua/shared/ActionManager.d.ts]
  export abstract class Actions extends lua.shared.Actions {}

  // [lua/shared/BuildingObjects/TimedActions/ISInsertLightSourceFuelAction.d.ts]
  /** @customConstructor ISInsertLightSourceFuelAction:new */
  export class ISInsertLightSourceFuelAction extends lua.shared.BuildingObjects.TimedActions
    .ISInsertLightSourceFuelAction {}

  // [lua/shared/BuildingObjects/TimedActions/ISMultiStageBuild.d.ts]
  /** @customConstructor ISMultiStageBuild:new */
  export class ISMultiStageBuild extends lua.shared.BuildingObjects.TimedActions.ISMultiStageBuild {}

  // [lua/shared/BuildingObjects/TimedActions/ISPaintAction.d.ts]
  /** @customConstructor ISPaintAction:new */
  export class ISPaintAction extends lua.shared.BuildingObjects.TimedActions.ISPaintAction {}

  // [lua/shared/BuildingObjects/TimedActions/ISPaintSignAction.d.ts]
  /** @customConstructor ISPaintSignAction:new */
  export class ISPaintSignAction extends lua.shared.BuildingObjects.TimedActions.ISPaintSignAction {}

  // [lua/shared/BuildingObjects/TimedActions/ISPlasterAction.d.ts]
  /** @customConstructor ISPlasterAction:new */
  export class ISPlasterAction extends lua.shared.BuildingObjects.TimedActions.ISPlasterAction {}

  // [lua/shared/BuildingObjects/TimedActions/ISRemoveLightSourceFuelAction.d.ts]
  /** @customConstructor ISRemoveLightSourceFuelAction:new */
  export class ISRemoveLightSourceFuelAction extends lua.shared.BuildingObjects.TimedActions
    .ISRemoveLightSourceFuelAction {}

  // [lua/shared/BuildingObjects/TimedActions/ISShovelGround.d.ts]
  /** @customConstructor ISShovelGround:new */
  export class ISShovelGround extends lua.shared.BuildingObjects.TimedActions.ISShovelGround {}

  // [lua/shared/BuildingObjects/TimedActions/ISToggleLightSourceAction.d.ts]
  /** @customConstructor ISToggleLightSourceAction:new */
  export class ISToggleLightSourceAction extends lua.shared.BuildingObjects.TimedActions.ISToggleLightSourceAction {}

  // [lua/shared/BuildingObjects/TimedActions/ISWallpaperAction.d.ts]
  /** @customConstructor ISWallpaperAction:new */
  export class ISWallpaperAction extends lua.shared.BuildingObjects.TimedActions.ISWallpaperAction {}

  // [lua/shared/Camping/TimedActions/ISAddFuelAction.d.ts]
  /** @customConstructor ISAddFuelAction:new */
  export class ISAddFuelAction extends lua.shared.Camping.TimedActions.ISAddFuelAction {}

  // [lua/shared/Camping/TimedActions/ISLightFromKindle.d.ts]
  /** @customConstructor ISLightFromKindle:new */
  export class ISLightFromKindle extends lua.shared.Camping.TimedActions.ISLightFromKindle {}

  // [lua/shared/Camping/TimedActions/ISLightFromLiterature.d.ts]
  /** @customConstructor ISLightFromLiterature:new */
  export class ISLightFromLiterature extends lua.shared.Camping.TimedActions.ISLightFromLiterature {}

  // [lua/shared/Camping/TimedActions/ISLightFromPetrol.d.ts]
  /** @customConstructor ISLightFromPetrol:new */
  export class ISLightFromPetrol extends lua.shared.Camping.TimedActions.ISLightFromPetrol {}

  // [lua/shared/Camping/TimedActions/ISPutOutCampfireAction.d.ts]
  /** @customConstructor ISPutOutCampfireAction:new */
  export class ISPutOutCampfireAction extends lua.shared.Camping.TimedActions.ISPutOutCampfireAction {}

  // [lua/shared/Camping/TimedActions/ISRemoveCampfireAction.d.ts]
  /** @customConstructor ISRemoveCampfireAction:new */
  export class ISRemoveCampfireAction extends lua.shared.Camping.TimedActions.ISRemoveCampfireAction {}

  // [lua/shared/defines.d.ts]
  export abstract class ZombiePopulationMultiplier extends lua.shared.ZombiePopulationMultiplier {}
  export abstract class ZombiePopulationMultiplierTable extends lua.shared.ZombiePopulationMultiplierTable {}
  export abstract class ZombiePopulationPeakMultiplier extends lua.shared.ZombiePopulationPeakMultiplier {}
  export abstract class ZombiePopulationStartMultiplier extends lua.shared.ZombiePopulationStartMultiplier {}
  export abstract class ZomboidGlobals extends lua.shared.ZomboidGlobals {}

  // [lua/shared/Definitions/animal/AnimalAvatarDefinition.d.ts]
  export abstract class AnimalAvatarDefinition extends lua.shared.Definitions.animal.AnimalAvatarDefinition {}

  // [lua/shared/Definitions/animal/ButcheringUtil.d.ts]
  export abstract class ButcheringUtil extends lua.shared.Definitions.animal.ButcheringUtil {}

  // [lua/shared/Definitions/ClothingRecipesDefinitions.d.ts]
  export abstract class ClothingRecipesDefinitions extends lua.shared.Definitions.ClothingRecipesDefinitions {}

  // [lua/shared/Definitions/DefaultClothing.d.ts]
  export abstract class DefaultClothing extends lua.shared.Definitions.DefaultClothing {}

  // [lua/shared/Definitions/FitnessExercises.d.ts]
  export abstract class FitnessExercises extends lua.shared.Definitions.FitnessExercises {}

  // [lua/shared/Definitions/RandomTintDefinitions.d.ts]
  export abstract class RandomTint extends lua.shared.Definitions.RandomTint {}

  // [lua/shared/Entity/TimedActions/ISCraftAnimAction.d.ts]
  /** @customConstructor ISCraftAnimAction:new */
  export class ISCraftAnimAction extends lua.shared.Entity.TimedActions.ISCraftAnimAction {}

  // [lua/shared/Entity/TimedActions/ISGenericCraftStart.d.ts]
  /** @customConstructor ISGenericCraftStart:new */
  export class ISGenericCraftStart extends lua.shared.Entity.TimedActions.ISGenericCraftStart {}

  // [lua/shared/Entity/TimedActions/ISHandcraftAction.d.ts]
  /** @customConstructor ISHandcraftAction:new */
  export class ISHandcraftAction extends lua.shared.Entity.TimedActions.ISHandcraftAction {}

  // [lua/shared/Entity/TimedActions/ISItemSlotAddAction.d.ts]
  /** @customConstructor ISItemSlotAddAction:new */
  export class ISItemSlotAddAction extends lua.shared.Entity.TimedActions.ISItemSlotAddAction {}

  // [lua/shared/Entity/TimedActions/ISItemSlotRemoveAction.d.ts]
  /** @customConstructor ISItemSlotRemoveAction:new */
  export class ISItemSlotRemoveAction extends lua.shared.Entity.TimedActions.ISItemSlotRemoveAction {}

  // [lua/shared/Entity/TimedActions/ISStartCraftProcessorAction.d.ts]
  /** @customConstructor ISStartCraftProcessorAction:new */
  export class ISStartCraftProcessorAction extends lua.shared.Entity.TimedActions.ISStartCraftProcessorAction {}

  // [lua/shared/Farming/TimedActions/ISCurePlantAction.d.ts]
  /** @customConstructor ISCurePlantAction:new */
  export class ISCurePlantAction extends lua.shared.Farming.TimedActions.ISCurePlantAction {}

  // [lua/shared/Farming/TimedActions/ISFertilizeAction.d.ts]
  /** @customConstructor ISFertilizeAction:new */
  export class ISFertilizeAction extends lua.shared.Farming.TimedActions.ISFertilizeAction {}

  // [lua/shared/Farming/TimedActions/ISHarvestPlantAction.d.ts]
  /** @customConstructor ISHarvestPlantAction:new */
  export class ISHarvestPlantAction extends lua.shared.Farming.TimedActions.ISHarvestPlantAction {}

  // [lua/shared/Farming/TimedActions/ISPlowAction.d.ts]
  /** @customConstructor ISPlowAction:new */
  export class ISPlowAction extends lua.shared.Farming.TimedActions.ISPlowAction {}

  // [lua/shared/Farming/TimedActions/ISSeedActionNew.d.ts]
  /** @customConstructor ISSeedActionNew:new */
  export class ISSeedActionNew extends lua.shared.Farming.TimedActions.ISSeedActionNew {}

  // [lua/shared/Farming/TimedActions/ISShovelAction.d.ts]
  /** @customConstructor ISShovelAction:new */
  export class ISShovelAction extends lua.shared.Farming.TimedActions.ISShovelAction {}

  // [lua/shared/Farming/TimedActions/ISWaterPlantAction.d.ts]
  /** @customConstructor ISWaterPlantAction:new */
  export class ISWaterPlantAction extends lua.shared.Farming.TimedActions.ISWaterPlantAction {}

  // [lua/shared/FeedingTrough/TimedActions/ISAddWaterToTrough.d.ts]
  /** @customConstructor ISAddWaterToTrough:new */
  export class ISAddWaterToTrough extends lua.shared.FeedingTrough.TimedActions.ISAddWaterToTrough {}

  // [lua/shared/FeedingTrough/TimedActions/ISEmptyWaterInTrough.d.ts]
  /** @customConstructor ISEmptyWaterInTrough:new */
  export class ISEmptyWaterInTrough extends lua.shared.FeedingTrough.TimedActions.ISEmptyWaterInTrough {}

  // [lua/shared/Fishing/fishing_properties.d.ts]
  /** @noSelf */
  export const clearLures: () => any;
  /** @noSelf */
  export const initFishSizeData: () => any;

  // [lua/shared/Fishing/FishingUtils.d.ts]
  /** @noSelf */
  export const getTimeParams: () => any;
  /** @noSelf */
  export const getWeatherParams: () => any;

  // [lua/shared/Fluids/ISFluidContainer.d.ts]
  /** @customConstructor ISFluidContainer:new */
  export class ISFluidContainer extends lua.shared.Fluids.ISFluidContainer {}

  // [lua/shared/Fluids/ISFluidEmptyAction.d.ts]
  /** @customConstructor ISFluidEmptyAction:new */
  export class ISFluidEmptyAction extends lua.shared.Fluids.ISFluidEmptyAction {}

  // [lua/shared/Fluids/ISFluidTransferAction.d.ts]
  /** @customConstructor ISFluidTransferAction:new */
  export class ISFluidTransferAction extends lua.shared.Fluids.ISFluidTransferAction {}

  // [lua/shared/Fluids/ISFluidUtil.d.ts]
  export abstract class ISFluidUtil extends lua.shared.Fluids.ISFluidUtil {}

  // [lua/shared/Foraging/Categories/Ammo.d.ts]

  // [lua/shared/Foraging/Categories/Animals.d.ts]

  // [lua/shared/Foraging/Categories/Berries.d.ts]

  // [lua/shared/Foraging/Categories/Clothing.d.ts]

  // [lua/shared/Foraging/Categories/DeadAnimals.d.ts]

  // [lua/shared/Foraging/Categories/ForestGoods.d.ts]

  // [lua/shared/Foraging/Categories/ForestRarities.d.ts]

  // [lua/shared/Foraging/Categories/Fruits.d.ts]

  // [lua/shared/Foraging/Categories/Herbs.d.ts]

  // [lua/shared/Foraging/Categories/Insects.d.ts]

  // [lua/shared/Foraging/Categories/Junk.d.ts]

  // [lua/shared/Foraging/Categories/Medical.d.ts]

  // [lua/shared/Foraging/Categories/MedicinalPlants.d.ts]

  // [lua/shared/Foraging/Categories/Mushrooms.d.ts]

  // [lua/shared/Foraging/Categories/Stones.d.ts]

  // [lua/shared/Foraging/Categories/Vegetables.d.ts]

  // [lua/shared/Foraging/Categories/WildPlants.d.ts]

  // [lua/shared/Foraging/forageCategories.d.ts]
  export abstract class forageCategories extends lua.shared.Foraging.forageCategories {}

  // [lua/shared/Foraging/forageDefinitions.d.ts]
  export abstract class forageDefaultDefs extends lua.shared.Foraging.forageDefaultDefs {}
  export abstract class forageDefs extends lua.shared.Foraging.forageDefs {}

  // [lua/shared/Foraging/forageSkills.d.ts]
  export abstract class forageSkills extends lua.shared.Foraging.forageSkills {}
  export abstract class forageZones extends lua.shared.Foraging.forageZones {}

  // [lua/shared/Foraging/forageSystem.d.ts]
  export abstract class forageSystem extends lua.shared.Foraging.forageSystem {}

  // [lua/shared/Foraging/forageZones.d.ts]
  export abstract class forageZones extends lua.shared.Foraging.forageZones {}

  // [lua/shared/Foraging/ISForageAction.d.ts]
  /** @customConstructor ISForageAction:new */
  export class ISForageAction extends lua.shared.Foraging.ISForageAction {}

  // [lua/shared/Foraging/scavenges.d.ts]
  export abstract class scavenges extends lua.shared.Foraging.scavenges {}

  // [lua/shared/ISBaseObject.d.ts]
  /** @customConstructor ISBaseObject:new */
  export class ISBaseObject extends lua.shared.ISBaseObject.ISBaseObject {}

  // [lua/shared/iwbumstempmodelcompat.d.ts]
  /** @noSelf */
  export const getDir: () => any;

  // [lua/shared/JoyPad/JoyPadSetup.d.ts]
  /** @customConstructor JoypadControllerData:new */
  export class JoypadControllerData extends lua.shared.JoyPad.JoypadControllerData {}
  /** @customConstructor JoypadData:new */
  export class JoypadData extends lua.shared.JoyPad.JoypadData {}
  export abstract class joypad extends lua.shared.JoyPad.joypad {}
  export abstract class Joypad extends lua.shared.JoyPad.Joypad {}
  export abstract class JoypadState extends lua.shared.JoyPad.JoypadState {}

  // [lua/shared/keyBinding.d.ts]
  export abstract class keyBinding extends lua.shared.keyBinding {}

  // [lua/shared/Logs/ISLogSystem.d.ts]
  export abstract class ISLogSystem extends lua.shared.Logs.ISLogSystem {}

  // [lua/shared/Logs/ISPerkLog.d.ts]
  export abstract class ISPerkLog extends lua.shared.Logs.ISPerkLog {}

  // [lua/shared/luautils.d.ts]
  export abstract class luautils extends lua.shared.luautils {}

  // [lua/shared/Moveables/ISMoveableDefinitions.d.ts]
  export abstract class ISMoveableDefinitions extends lua.shared.Moveables.ISMoveableDefinitions {}

  // [lua/shared/Moveables/ISMoveablesAction.d.ts]
  /** @customConstructor ISMoveablesAction:new */
  export class ISMoveablesAction extends lua.shared.Moveables.ISMoveablesAction {}

  // [lua/shared/Moveables/ISMoveableSpriteProps.d.ts]
  export abstract class InfoPanelFlags extends lua.shared.Moveables.InfoPanelFlags {}
  export abstract class ISMoveableSpriteProps extends lua.shared.Moveables.ISMoveableSpriteProps {}
  export abstract class ISThumpableSpriteProps extends lua.shared.Moveables.ISThumpableSpriteProps {}
  export abstract class SpriteGridCache extends lua.shared.Moveables.SpriteGridCache {}

  // [lua/shared/Moveables/ISMoveableTools.d.ts]
  export abstract class ISMoveableTools extends lua.shared.Moveables.ISMoveableTools {}

  // [lua/shared/NPCs/MainCreationMethods.d.ts]
  export abstract class BaseGameCharacterDetails extends lua.shared.NPCs.BaseGameCharacterDetails {}

  // [lua/shared/PrintMedia/PrintMediaDefinitions.d.ts]
  export abstract class PrintMediaDefinitions extends lua.shared.PrintMedia.PrintMediaDefinitions {}

  // [lua/shared/ProceduralBasements/basements.d.ts]
  /** @noSelf */
  export const loadMapBasementLuaFiles: () => any;

  // [lua/shared/RecordedMedia/ISRecordedMedia.d.ts]
  export abstract class ISRecordedMedia extends lua.shared.RecordedMedia.ISRecordedMedia {}

  // [lua/shared/SoundBanks/SoundBanks.d.ts]
  export abstract class ambientSoundTable extends lua.shared.SoundBanks.ambientSoundTable {}
  export abstract class baseSoundTable extends lua.shared.SoundBanks.baseSoundTable {}
  export abstract class footStepTable extends lua.shared.SoundBanks.footStepTable {}
  export abstract class globalSoundTable extends lua.shared.SoundBanks.globalSoundTable {}
  export abstract class voiceTable extends lua.shared.SoundBanks.voiceTable {}
  /** @noSelf */
  export const doLoadSoundbanks: () => any;

  // [lua/shared/SpawnRegions.d.ts]
  export abstract class SpawnRegionMgr extends lua.shared.SpawnRegionMgr {}

  // [lua/shared/StashDescriptions/StashUtil.d.ts]
  export abstract class StashUtil extends lua.shared.StashDescriptions.StashUtil {}

  // [lua/shared/TimedActions/Animals/ISAddAnimalInTrailer.d.ts]
  /** @customConstructor ISAddAnimalInTrailer:new */
  export class ISAddAnimalInTrailer extends lua.shared.TimedActions.Animals.ISAddAnimalInTrailer {}

  // [lua/shared/TimedActions/Animals/ISAttachAnimalToPlayer.d.ts]
  /** @customConstructor ISAttachAnimalToPlayer:new */
  export class ISAttachAnimalToPlayer extends lua.shared.TimedActions.Animals.ISAttachAnimalToPlayer {}

  // [lua/shared/TimedActions/Animals/ISAttachAnimalToTree.d.ts]
  /** @customConstructor ISAttachAnimalToTree:new */
  export class ISAttachAnimalToTree extends lua.shared.TimedActions.Animals.ISAttachAnimalToTree {}

  // [lua/shared/TimedActions/Animals/ISButcherAnimal.d.ts]
  /** @customConstructor ISButcherAnimal:new */
  export class ISButcherAnimal extends lua.shared.TimedActions.Animals.ISButcherAnimal {}

  // [lua/shared/TimedActions/Animals/ISCutAnimalOnHook.d.ts]
  /** @customConstructor ISCutAnimalOnHook:new */
  export class ISCutAnimalOnHook extends lua.shared.TimedActions.Animals.ISCutAnimalOnHook {}

  // [lua/shared/TimedActions/Animals/ISFeedAnimalFromHand.d.ts]
  /** @customConstructor ISFeedAnimalFromHand:new */
  export class ISFeedAnimalFromHand extends lua.shared.TimedActions.Animals.ISFeedAnimalFromHand {}

  // [lua/shared/TimedActions/Animals/ISGatherBloodFromAnimal.d.ts]
  /** @customConstructor ISGatherBloodFromAnimal:new */
  export class ISGatherBloodFromAnimal extends lua.shared.TimedActions.Animals.ISGatherBloodFromAnimal {}

  // [lua/shared/TimedActions/Animals/ISGetAnimalBones.d.ts]
  /** @customConstructor ISGetAnimalBones:new */
  export class ISGetAnimalBones extends lua.shared.TimedActions.Animals.ISGetAnimalBones {}

  // [lua/shared/TimedActions/Animals/ISGiveWaterToAnimal.d.ts]
  /** @customConstructor ISGiveWaterToAnimal:new */
  export class ISGiveWaterToAnimal extends lua.shared.TimedActions.Animals.ISGiveWaterToAnimal {}

  // [lua/shared/TimedActions/Animals/ISHutchCleanFloor.d.ts]
  /** @customConstructor ISHutchCleanFloor:new */
  export class ISHutchCleanFloor extends lua.shared.TimedActions.Animals.ISHutchCleanFloor {}

  // [lua/shared/TimedActions/Animals/ISHutchCleanNest.d.ts]
  /** @customConstructor ISHutchCleanNest:new */
  export class ISHutchCleanNest extends lua.shared.TimedActions.Animals.ISHutchCleanNest {}

  // [lua/shared/TimedActions/Animals/ISHutchGrabAnimal.d.ts]
  /** @customConstructor ISHutchGrabAnimal:new */
  export class ISHutchGrabAnimal extends lua.shared.TimedActions.Animals.ISHutchGrabAnimal {}

  // [lua/shared/TimedActions/Animals/ISHutchGrabCorpseAction.d.ts]
  /** @customConstructor ISHutchGrabCorpseAction:new */
  export class ISHutchGrabCorpseAction extends lua.shared.TimedActions.Animals.ISHutchGrabCorpseAction {}

  // [lua/shared/TimedActions/Animals/ISHutchGrabEgg.d.ts]
  /** @customConstructor ISHutchGrabEgg:new */
  export class ISHutchGrabEgg extends lua.shared.TimedActions.Animals.ISHutchGrabEgg {}

  // [lua/shared/TimedActions/Animals/ISKillAnimal.d.ts]
  /** @customConstructor ISKillAnimal:new */
  export class ISKillAnimal extends lua.shared.TimedActions.Animals.ISKillAnimal {}

  // [lua/shared/TimedActions/Animals/ISLureAnimal.d.ts]
  /** @customConstructor ISLureAnimal:new */
  export class ISLureAnimal extends lua.shared.TimedActions.Animals.ISLureAnimal {}

  // [lua/shared/TimedActions/Animals/ISMilkAnimal.d.ts]
  /** @customConstructor ISMilkAnimal:new */
  export class ISMilkAnimal extends lua.shared.TimedActions.Animals.ISMilkAnimal {}

  // [lua/shared/TimedActions/Animals/ISOpenAnimalInfo.d.ts]
  /** @customConstructor ISOpenAnimalInfo:new */
  export class ISOpenAnimalInfo extends lua.shared.TimedActions.Animals.ISOpenAnimalInfo {}

  // [lua/shared/TimedActions/Animals/ISOpenButcherHookUI.d.ts]
  /** @customConstructor ISOpenButcherHookUI:new */
  export class ISOpenButcherHookUI extends lua.shared.TimedActions.Animals.ISOpenButcherHookUI {}

  // [lua/shared/TimedActions/Animals/ISPetAnimal.d.ts]
  /** @customConstructor ISPetAnimal:new */
  export class ISPetAnimal extends lua.shared.TimedActions.Animals.ISPetAnimal {}

  // [lua/shared/TimedActions/Animals/ISPickupAnimal.d.ts]
  /** @customConstructor ISPickupAnimal:new */
  export class ISPickupAnimal extends lua.shared.TimedActions.Animals.ISPickupAnimal {}

  // [lua/shared/TimedActions/Animals/ISPutAnimalInHutch.d.ts]
  /** @customConstructor ISPutAnimalInHutch:new */
  export class ISPutAnimalInHutch extends lua.shared.TimedActions.Animals.ISPutAnimalInHutch {}

  // [lua/shared/TimedActions/Animals/ISPutAnimalOnHook.d.ts]
  /** @customConstructor ISPutAnimalOnHook:new */
  export class ISPutAnimalOnHook extends lua.shared.TimedActions.Animals.ISPutAnimalOnHook {}

  // [lua/shared/TimedActions/Animals/ISRemoveAnimalFromHook.d.ts]
  /** @customConstructor ISRemoveAnimalFromHook:new */
  export class ISRemoveAnimalFromHook extends lua.shared.TimedActions.Animals.ISRemoveAnimalFromHook {}

  // [lua/shared/TimedActions/Animals/ISRemoveAnimalFromTrailer.d.ts]
  /** @customConstructor ISRemoveAnimalFromTrailer:new */
  export class ISRemoveAnimalFromTrailer extends lua.shared.TimedActions.Animals.ISRemoveAnimalFromTrailer {}

  // [lua/shared/TimedActions/Animals/ISRemoveHeadFromAnimal.d.ts]
  /** @customConstructor ISRemoveHeadFromAnimal:new */
  export class ISRemoveHeadFromAnimal extends lua.shared.TimedActions.Animals.ISRemoveHeadFromAnimal {}

  // [lua/shared/TimedActions/Animals/ISRemoveLeatherFromAnimal.d.ts]
  /** @customConstructor ISRemoveLeatherFromAnimal:new */
  export class ISRemoveLeatherFromAnimal extends lua.shared.TimedActions.Animals.ISRemoveLeatherFromAnimal {}

  // [lua/shared/TimedActions/Animals/ISRemoveMeatFromAnimal.d.ts]
  /** @customConstructor ISRemoveMeatFromAnimal:new */
  export class ISRemoveMeatFromAnimal extends lua.shared.TimedActions.Animals.ISRemoveMeatFromAnimal {}

  // [lua/shared/TimedActions/Animals/ISShearAnimal.d.ts]
  /** @customConstructor ISShearAnimal:new */
  export class ISShearAnimal extends lua.shared.TimedActions.Animals.ISShearAnimal {}

  // [lua/shared/TimedActions/Animals/ISToggleHutchDoor.d.ts]
  /** @customConstructor ISToggleHutchDoor:new */
  export class ISToggleHutchDoor extends lua.shared.TimedActions.Animals.ISToggleHutchDoor {}

  // [lua/shared/TimedActions/Animals/ISToggleHutchEggHatchDoor.d.ts]
  /** @customConstructor ISToggleHutchEggHatchDoor:new */
  export class ISToggleHutchEggHatchDoor extends lua.shared.TimedActions.Animals.ISToggleHutchEggHatchDoor {}

  // [lua/shared/TimedActions/Fishing/TimedActions/AddChumToWaterAction.d.ts]
  /** @customConstructor AddChumToWaterAction:new */
  export class AddChumToWaterAction extends lua.shared.TimedActions.Fishing.TimedActions.AddChumToWaterAction {}

  // [lua/shared/TimedActions/Fishing/TimedActions/AIAttachLureAction.d.ts]
  /** @customConstructor AIAttachLureAction:new */
  export class AIAttachLureAction extends lua.shared.TimedActions.Fishing.TimedActions.AIAttachLureAction {}

  // [lua/shared/TimedActions/Fishing/TimedActions/AIRemoveLureAction.d.ts]
  /** @customConstructor AIRemoveLureAction:new */
  export class AIRemoveLureAction extends lua.shared.TimedActions.Fishing.TimedActions.AIRemoveLureAction {}

  // [lua/shared/TimedActions/Fishing/TimedActions/CreateChumFromGroundSandAction.d.ts]
  /** @customConstructor CreateChumFromGroundSandAction:new */
  export class CreateChumFromGroundSandAction extends lua.shared.TimedActions.Fishing.TimedActions
    .CreateChumFromGroundSandAction {}

  // [lua/shared/TimedActions/Fishing/TimedActions/ISAddBaitToFishNetAction.d.ts]
  /** @customConstructor ISAddBaitToFishNetAction:new */
  export class ISAddBaitToFishNetAction extends lua.shared.TimedActions.Fishing.TimedActions.ISAddBaitToFishNetAction {}

  // [lua/shared/TimedActions/Fishing/TimedActions/ISChangeFishingRodEquip.d.ts]
  /** @customConstructor ISChangeFishingRodEquip:new */
  export class ISChangeFishingRodEquip extends lua.shared.TimedActions.Fishing.TimedActions.ISChangeFishingRodEquip {}

  // [lua/shared/TimedActions/Fishing/TimedActions/ISCheckFishingNetAction.d.ts]
  /** @customConstructor ISCheckFishingNetAction:new */
  export class ISCheckFishingNetAction extends lua.shared.TimedActions.Fishing.TimedActions.ISCheckFishingNetAction {}

  // [lua/shared/TimedActions/Fishing/TimedActions/ISPickupFishAction.d.ts]
  /** @customConstructor ISPickupFishAction:new */
  export class ISPickupFishAction extends lua.shared.TimedActions.Fishing.TimedActions.ISPickupFishAction {}

  // [lua/shared/TimedActions/ISActivateCarBatteryChargerAction.d.ts]
  /** @customConstructor ISActivateCarBatteryChargerAction:new */
  export class ISActivateCarBatteryChargerAction extends lua.shared.TimedActions.ISActivateCarBatteryChargerAction {}

  // [lua/shared/TimedActions/ISActivateGenerator.d.ts]
  /** @customConstructor ISActivateGenerator:new */
  export class ISActivateGenerator extends lua.shared.TimedActions.ISActivateGenerator {}

  // [lua/shared/TimedActions/ISAddCompost.d.ts]
  /** @customConstructor ISAddCompost:new */
  export class ISAddCompost extends lua.shared.TimedActions.ISAddCompost {}

  // [lua/shared/TimedActions/ISAddFuel.d.ts]
  /** @customConstructor ISAddFuel:new */
  export class ISAddFuel extends lua.shared.TimedActions.ISAddFuel {}

  // [lua/shared/TimedActions/ISAddItemInRecipe.d.ts]
  /** @customConstructor ISAddItemInRecipe:new */
  export class ISAddItemInRecipe extends lua.shared.TimedActions.ISAddItemInRecipe {}

  // [lua/shared/TimedActions/ISAddSheetAction.d.ts]
  /** @customConstructor ISAddSheetAction:new */
  export class ISAddSheetAction extends lua.shared.TimedActions.ISAddSheetAction {}

  // [lua/shared/TimedActions/ISAddSheetRope.d.ts]
  /** @customConstructor ISAddSheetRope:new */
  export class ISAddSheetRope extends lua.shared.TimedActions.ISAddSheetRope {}

  // [lua/shared/TimedActions/ISAddTakeDispenserBottle.d.ts]
  /** @customConstructor ISAddTakeDispenserBottle:new */
  export class ISAddTakeDispenserBottle extends lua.shared.TimedActions.ISAddTakeDispenserBottle {}

  // [lua/shared/TimedActions/ISAddWaterFromItemAction.d.ts]
  /** @customConstructor ISAddWaterFromItemAction:new */
  export class ISAddWaterFromItemAction extends lua.shared.TimedActions.ISAddWaterFromItemAction {}

  // [lua/shared/TimedActions/ISApplyBandage.d.ts]
  /** @customConstructor ISApplyBandage:new */
  export class ISApplyBandage extends lua.shared.TimedActions.ISApplyBandage {}

  // [lua/shared/TimedActions/ISApplyMakeUp.d.ts]
  /** @customConstructor ISApplyMakeUp:new */
  export class ISApplyMakeUp extends lua.shared.TimedActions.ISApplyMakeUp {}

  // [lua/shared/TimedActions/ISAttachItemHotbar.d.ts]
  /** @customConstructor ISAttachItemHotbar:new */
  export class ISAttachItemHotbar extends lua.shared.TimedActions.ISAttachItemHotbar {}

  // [lua/shared/TimedActions/ISBarricadeAction.d.ts]
  /** @customConstructor ISBarricadeAction:new */
  export class ISBarricadeAction extends lua.shared.TimedActions.ISBarricadeAction {}

  // [lua/shared/TimedActions/ISBaseTimedAction.d.ts]
  /** @customConstructor ISBaseTimedAction:new */
  export class ISBaseTimedAction extends lua.shared.TimedActions.ISBaseTimedAction {}

  // [lua/shared/TimedActions/ISBBQAddFuel.d.ts]
  /** @customConstructor ISBBQAddFuel:new */
  export class ISBBQAddFuel extends lua.shared.TimedActions.ISBBQAddFuel {}

  // [lua/shared/TimedActions/ISBBQExtinguish.d.ts]
  /** @customConstructor ISBBQExtinguish:new */
  export class ISBBQExtinguish extends lua.shared.TimedActions.ISBBQExtinguish {}

  // [lua/shared/TimedActions/ISBBQInsertPropaneTank.d.ts]
  /** @customConstructor ISBBQInsertPropaneTank:new */
  export class ISBBQInsertPropaneTank extends lua.shared.TimedActions.ISBBQInsertPropaneTank {}

  // [lua/shared/TimedActions/ISBBQLightFromKindle.d.ts]
  /** @customConstructor ISBBQLightFromKindle:new */
  export class ISBBQLightFromKindle extends lua.shared.TimedActions.ISBBQLightFromKindle {}

  // [lua/shared/TimedActions/ISBBQLightFromLiterature.d.ts]
  /** @customConstructor ISBBQLightFromLiterature:new */
  export class ISBBQLightFromLiterature extends lua.shared.TimedActions.ISBBQLightFromLiterature {}

  // [lua/shared/TimedActions/ISBBQLightFromPetrol.d.ts]
  /** @customConstructor ISBBQLightFromPetrol:new */
  export class ISBBQLightFromPetrol extends lua.shared.TimedActions.ISBBQLightFromPetrol {}

  // [lua/shared/TimedActions/ISBBQRemovePropaneTank.d.ts]
  /** @customConstructor ISBBQRemovePropaneTank:new */
  export class ISBBQRemovePropaneTank extends lua.shared.TimedActions.ISBBQRemovePropaneTank {}

  // [lua/shared/TimedActions/ISBBQToggle.d.ts]
  /** @customConstructor ISBBQToggle:new */
  export class ISBBQToggle extends lua.shared.TimedActions.ISBBQToggle {}

  // [lua/shared/TimedActions/ISBurnCorpseAction.d.ts]
  /** @customConstructor ISBurnCorpseAction:new */
  export class ISBurnCorpseAction extends lua.shared.TimedActions.ISBurnCorpseAction {}

  // [lua/shared/TimedActions/ISBuryCorpse.d.ts]
  /** @customConstructor ISBuryCorpse:new */
  export class ISBuryCorpse extends lua.shared.TimedActions.ISBuryCorpse {}

  // [lua/shared/TimedActions/ISChopTreeAction.d.ts]
  /** @customConstructor ISChopTreeAction:new */
  export class ISChopTreeAction extends lua.shared.TimedActions.ISChopTreeAction {}

  // [lua/shared/TimedActions/ISCleanBandage.d.ts]
  /** @customConstructor ISCleanBandage:new */
  export class ISCleanBandage extends lua.shared.TimedActions.ISCleanBandage {}

  // [lua/shared/TimedActions/ISCleanBlood.d.ts]
  /** @customConstructor ISCleanBlood:new */
  export class ISCleanBlood extends lua.shared.TimedActions.ISCleanBlood {}

  // [lua/shared/TimedActions/ISCleanBurn.d.ts]
  /** @customConstructor ISCleanBurn:new */
  export class ISCleanBurn extends lua.shared.TimedActions.ISCleanBurn {}

  // [lua/shared/TimedActions/ISCleanGraffiti.d.ts]
  /** @customConstructor ISCleanGraffiti:new */
  export class ISCleanGraffiti extends lua.shared.TimedActions.ISCleanGraffiti {}

  // [lua/shared/TimedActions/ISClearAshes.d.ts]
  /** @customConstructor ISClearAshes:new */
  export class ISClearAshes extends lua.shared.TimedActions.ISClearAshes {}

  // [lua/shared/TimedActions/ISComfreyCataplasm.d.ts]
  /** @customConstructor ISComfreyCataplasm:new */
  export class ISComfreyCataplasm extends lua.shared.TimedActions.ISComfreyCataplasm {}

  // [lua/shared/TimedActions/ISConnectCarBatteryToChargerAction.d.ts]
  /** @customConstructor ISConnectCarBatteryToChargerAction:new */
  export class ISConnectCarBatteryToChargerAction extends lua.shared.TimedActions.ISConnectCarBatteryToChargerAction {}

  // [lua/shared/TimedActions/ISConsolidateDrainable.d.ts]
  /** @customConstructor ISConsolidateDrainable:new */
  export class ISConsolidateDrainable extends lua.shared.TimedActions.ISConsolidateDrainable {}

  // [lua/shared/TimedActions/ISCraftAction.d.ts]
  /** @customConstructor ISCraftAction:new */
  export class ISCraftAction extends lua.shared.TimedActions.ISCraftAction {}

  // [lua/shared/TimedActions/ISCutHair.d.ts]
  /** @customConstructor ISCutHair:new */
  export class ISCutHair extends lua.shared.TimedActions.ISCutHair {}

  // [lua/shared/TimedActions/ISDestroyStuffAction.d.ts]
  /** @customConstructor ISDestroyStuffAction:new */
  export class ISDestroyStuffAction extends lua.shared.TimedActions.ISDestroyStuffAction {}

  // [lua/shared/TimedActions/ISDisinfect.d.ts]
  /** @customConstructor ISDisinfect:new */
  export class ISDisinfect extends lua.shared.TimedActions.ISDisinfect {}

  // [lua/shared/TimedActions/ISDismantleAction.d.ts]
  /** @customConstructor ISDismantleAction:new */
  export class ISDismantleAction extends lua.shared.TimedActions.ISDismantleAction {}

  // [lua/shared/TimedActions/ISDrinkFluidAction.d.ts]
  /** @customConstructor ISDrinkFluidAction:new */
  export class ISDrinkFluidAction extends lua.shared.TimedActions.ISDrinkFluidAction {}

  // [lua/shared/TimedActions/ISDrinkFromBottle.d.ts]
  /** @customConstructor ISDrinkFromBottle:new */
  export class ISDrinkFromBottle extends lua.shared.TimedActions.ISDrinkFromBottle {}

  // [lua/shared/TimedActions/ISDropCorpseAction.d.ts]
  /** @customConstructor ISDropCorpseAction:new */
  export class ISDropCorpseAction extends lua.shared.TimedActions.ISDropCorpseAction {}

  // [lua/shared/TimedActions/ISDropWorldItemAction.d.ts]
  /** @customConstructor ISDropWorldItemAction:new */
  export class ISDropWorldItemAction extends lua.shared.TimedActions.ISDropWorldItemAction {}

  // [lua/shared/TimedActions/ISDryMyself.d.ts]
  /** @customConstructor ISDryMyself:new */
  export class ISDryMyself extends lua.shared.TimedActions.ISDryMyself {}

  // [lua/shared/TimedActions/ISDumpContentsAction.d.ts]
  /** @customConstructor ISDumpContentsAction:new */
  export class ISDumpContentsAction extends lua.shared.TimedActions.ISDumpContentsAction {}

  // [lua/shared/TimedActions/ISDumpWaterAction.d.ts]
  /** @customConstructor ISDumpWaterAction:new */
  export class ISDumpWaterAction extends lua.shared.TimedActions.ISDumpWaterAction {}

  // [lua/shared/TimedActions/ISDyeHair.d.ts]
  /** @customConstructor ISDyeHair:new */
  export class ISDyeHair extends lua.shared.TimedActions.ISDyeHair {}

  // [lua/shared/TimedActions/ISEatFoodAction.d.ts]
  /** @customConstructor ISEatFoodAction:new */
  export class ISEatFoodAction extends lua.shared.TimedActions.ISEatFoodAction {}

  // [lua/shared/TimedActions/ISEjectMagazine.d.ts]
  /** @customConstructor ISEjectMagazine:new */
  export class ISEjectMagazine extends lua.shared.TimedActions.ISEjectMagazine {}

  // [lua/shared/TimedActions/ISEmptyRainBarrelAction.d.ts]
  /** @customConstructor ISEmptyRainBarrelAction:new */
  export class ISEmptyRainBarrelAction extends lua.shared.TimedActions.ISEmptyRainBarrelAction {}

  // [lua/shared/TimedActions/ISEquipHeavyItem.d.ts]
  /** @customConstructor ISEquipHeavyItem:new */
  export class ISEquipHeavyItem extends lua.shared.TimedActions.ISEquipHeavyItem {}

  // [lua/shared/TimedActions/ISEquipWeaponAction.d.ts]
  /** @customConstructor ISEquipWeaponAction:new */
  export class ISEquipWeaponAction extends lua.shared.TimedActions.ISEquipWeaponAction {}

  // [lua/shared/TimedActions/ISFillGrave.d.ts]
  /** @customConstructor ISFillGrave:new */
  export class ISFillGrave extends lua.shared.TimedActions.ISFillGrave {}

  // [lua/shared/TimedActions/ISFireplaceAddFuel.d.ts]
  /** @customConstructor ISFireplaceAddFuel:new */
  export class ISFireplaceAddFuel extends lua.shared.TimedActions.ISFireplaceAddFuel {}

  // [lua/shared/TimedActions/ISFireplaceExtinguish.d.ts]
  /** @customConstructor ISFireplaceExtinguish:new */
  export class ISFireplaceExtinguish extends lua.shared.TimedActions.ISFireplaceExtinguish {}

  // [lua/shared/TimedActions/ISFireplaceLightFromKindle.d.ts]
  /** @customConstructor ISFireplaceLightFromKindle:new */
  export class ISFireplaceLightFromKindle extends lua.shared.TimedActions.ISFireplaceLightFromKindle {}

  // [lua/shared/TimedActions/ISFireplaceLightFromLiterature.d.ts]
  /** @customConstructor ISFireplaceLightFromLiterature:new */
  export class ISFireplaceLightFromLiterature extends lua.shared.TimedActions.ISFireplaceLightFromLiterature {}

  // [lua/shared/TimedActions/ISFireplaceLightFromPetrol.d.ts]
  /** @customConstructor ISFireplaceLightFromPetrol:new */
  export class ISFireplaceLightFromPetrol extends lua.shared.TimedActions.ISFireplaceLightFromPetrol {}

  // [lua/shared/TimedActions/ISFitnessAction.d.ts]
  /** @customConstructor ISFitnessAction:new */
  export class ISFitnessAction extends lua.shared.TimedActions.ISFitnessAction {}

  // [lua/shared/TimedActions/ISFixAction.d.ts]
  /** @customConstructor ISFixAction:new */
  export class ISFixAction extends lua.shared.TimedActions.ISFixAction {}

  // [lua/shared/TimedActions/ISFixGenerator.d.ts]
  /** @customConstructor ISFixGenerator:new */
  export class ISFixGenerator extends lua.shared.TimedActions.ISFixGenerator {}

  // [lua/shared/TimedActions/ISFixVehiclePartAction.d.ts]
  /** @customConstructor ISFixVehiclePartAction:new */
  export class ISFixVehiclePartAction extends lua.shared.TimedActions.ISFixVehiclePartAction {}

  // [lua/shared/TimedActions/ISGarlicCataplasm.d.ts]
  /** @customConstructor ISGarlicCataplasm:new */
  export class ISGarlicCataplasm extends lua.shared.TimedActions.ISGarlicCataplasm {}

  // [lua/shared/TimedActions/ISGetCompost.d.ts]
  /** @customConstructor ISGetCompost:new */
  export class ISGetCompost extends lua.shared.TimedActions.ISGetCompost {}

  // [lua/shared/TimedActions/ISGetOnBedAction.d.ts]
  /** @customConstructor ISGetOnBedAction:new */
  export class ISGetOnBedAction extends lua.shared.TimedActions.ISGetOnBedAction {}

  // [lua/shared/TimedActions/ISGrabCorpseAction.d.ts]
  /** @customConstructor ISGrabCorpseAction:new */
  export class ISGrabCorpseAction extends lua.shared.TimedActions.ISGrabCorpseAction {}

  // [lua/shared/TimedActions/ISHurricaneLanternExtinguish.d.ts]
  /** @customConstructor ISHurricaneLanternExtinguish:new */
  export class ISHurricaneLanternExtinguish extends lua.shared.TimedActions.ISHurricaneLanternExtinguish {}

  // [lua/shared/TimedActions/ISInsertMagazine.d.ts]
  /** @customConstructor ISInsertMagazine:new */
  export class ISInsertMagazine extends lua.shared.TimedActions.ISInsertMagazine {}

  // [lua/shared/TimedActions/ISLightActions.d.ts]
  /** @customConstructor ISLightActions:new */
  export class ISLightActions extends lua.shared.TimedActions.ISLightActions {}

  // [lua/shared/TimedActions/ISLitCandleExtinguish.d.ts]
  /** @customConstructor ISLitCandleExtinguish:new */
  export class ISLitCandleExtinguish extends lua.shared.TimedActions.ISLitCandleExtinguish {}

  // [lua/shared/TimedActions/ISLoadBulletsInMagazine.d.ts]
  /** @customConstructor ISLoadBulletsInMagazine:new */
  export class ISLoadBulletsInMagazine extends lua.shared.TimedActions.ISLoadBulletsInMagazine {}

  // [lua/shared/TimedActions/ISLockDoor.d.ts]
  /** @customConstructor ISLockDoor:new */
  export class ISLockDoor extends lua.shared.TimedActions.ISLockDoor {}

  // [lua/shared/TimedActions/ISOpenCloseCurtain.d.ts]
  /** @customConstructor ISOpenCloseCurtain:new */
  export class ISOpenCloseCurtain extends lua.shared.TimedActions.ISOpenCloseCurtain {}

  // [lua/shared/TimedActions/ISOpenCloseDoor.d.ts]
  /** @customConstructor ISOpenCloseDoor:new */
  export class ISOpenCloseDoor extends lua.shared.TimedActions.ISOpenCloseDoor {}

  // [lua/shared/TimedActions/ISOpenCloseWindow.d.ts]
  /** @customConstructor ISOpenCloseWindow:new */
  export class ISOpenCloseWindow extends lua.shared.TimedActions.ISOpenCloseWindow {}

  // [lua/shared/TimedActions/ISPadlockAction.d.ts]
  /** @customConstructor ISPadlockAction:new */
  export class ISPadlockAction extends lua.shared.TimedActions.ISPadlockAction {}

  // [lua/shared/TimedActions/ISPadlockByCodeAction.d.ts]
  /** @customConstructor ISPadlockByCodeAction:new */
  export class ISPadlockByCodeAction extends lua.shared.TimedActions.ISPadlockByCodeAction {}

  // [lua/shared/TimedActions/ISPickupBrokenGlass.d.ts]
  /** @customConstructor ISPickupBrokenGlass:new */
  export class ISPickupBrokenGlass extends lua.shared.TimedActions.ISPickupBrokenGlass {}

  // [lua/shared/TimedActions/ISPickupDung.d.ts]
  /** @customConstructor ISPickupDung:new */
  export class ISPickupDung extends lua.shared.TimedActions.ISPickupDung {}

  // [lua/shared/TimedActions/ISPickUpGroundCoverItem.d.ts]
  /** @customConstructor ISPickUpGroundCoverItem:new */
  export class ISPickUpGroundCoverItem extends lua.shared.TimedActions.ISPickUpGroundCoverItem {}
  export abstract class GroundCoverItems extends lua.shared.TimedActions.GroundCoverItems {}

  // [lua/shared/TimedActions/ISPlaceCarBatteryChargerAction.d.ts]
  /** @customConstructor ISPlaceCarBatteryChargerAction:new */
  export class ISPlaceCarBatteryChargerAction extends lua.shared.TimedActions.ISPlaceCarBatteryChargerAction {}

  // [lua/shared/TimedActions/ISPlaceTrap.d.ts]
  /** @customConstructor ISPlaceTrap:new */
  export class ISPlaceTrap extends lua.shared.TimedActions.ISPlaceTrap {}

  // [lua/shared/TimedActions/ISPlantainCataplasm.d.ts]
  /** @customConstructor ISPlantainCataplasm:new */
  export class ISPlantainCataplasm extends lua.shared.TimedActions.ISPlantainCataplasm {}

  // [lua/shared/TimedActions/ISPlugGenerator.d.ts]
  /** @customConstructor ISPlugGenerator:new */
  export class ISPlugGenerator extends lua.shared.TimedActions.ISPlugGenerator {}

  // [lua/shared/TimedActions/ISPlumbItem.d.ts]
  /** @customConstructor ISPlumbItem:new */
  export class ISPlumbItem extends lua.shared.TimedActions.ISPlumbItem {}

  // [lua/shared/TimedActions/ISPutOutFire.d.ts]
  /** @customConstructor ISPutOutFire:new */
  export class ISPutOutFire extends lua.shared.TimedActions.ISPutOutFire {}

  // [lua/shared/TimedActions/ISRackFirearm.d.ts]
  /** @customConstructor ISRackFirearm:new */
  export class ISRackFirearm extends lua.shared.TimedActions.ISRackFirearm {}

  // [lua/shared/TimedActions/ISReadABook.d.ts]
  /** @customConstructor ISReadABook:new */
  export class ISReadABook extends lua.shared.TimedActions.ISReadABook {}

  // [lua/shared/TimedActions/ISReloadWeaponAction.d.ts]
  /** @customConstructor ISReloadWeaponAction:new */
  export class ISReloadWeaponAction extends lua.shared.TimedActions.ISReloadWeaponAction {}

  // [lua/shared/TimedActions/ISRemoveBrokenGlass.d.ts]
  /** @customConstructor ISRemoveBrokenGlass:new */
  export class ISRemoveBrokenGlass extends lua.shared.TimedActions.ISRemoveBrokenGlass {}

  // [lua/shared/TimedActions/ISRemoveBullet.d.ts]
  /** @customConstructor ISRemoveBullet:new */
  export class ISRemoveBullet extends lua.shared.TimedActions.ISRemoveBullet {}

  // [lua/shared/TimedActions/ISRemoveBush.d.ts]
  /** @customConstructor ISRemoveBush:new */
  export class ISRemoveBush extends lua.shared.TimedActions.ISRemoveBush {}

  // [lua/shared/TimedActions/ISRemoveCarBatteryFromChargerAction.d.ts]
  /** @customConstructor ISRemoveCarBatteryFromChargerAction:new */
  export class ISRemoveCarBatteryFromChargerAction extends lua.shared.TimedActions
    .ISRemoveCarBatteryFromChargerAction {}

  // [lua/shared/TimedActions/ISRemoveGlass.d.ts]
  /** @customConstructor ISRemoveGlass:new */
  export class ISRemoveGlass extends lua.shared.TimedActions.ISRemoveGlass {}

  // [lua/shared/TimedActions/ISRemoveGrass.d.ts]
  /** @customConstructor ISRemoveGrass:new */
  export class ISRemoveGrass extends lua.shared.TimedActions.ISRemoveGrass {}

  // [lua/shared/TimedActions/ISRemovePatch.d.ts]
  /** @customConstructor ISRemovePatch:new */
  export class ISRemovePatch extends lua.shared.TimedActions.ISRemovePatch {}

  // [lua/shared/TimedActions/ISRemoveSheetAction.d.ts]
  /** @customConstructor ISRemoveSheetAction:new */
  export class ISRemoveSheetAction extends lua.shared.TimedActions.ISRemoveSheetAction {}

  // [lua/shared/TimedActions/ISRemoveSheetRope.d.ts]
  /** @customConstructor ISRemoveSheetRope:new */
  export class ISRemoveSheetRope extends lua.shared.TimedActions.ISRemoveSheetRope {}

  // [lua/shared/TimedActions/ISRemoveWeaponUpgrade.d.ts]
  /** @customConstructor ISRemoveWeaponUpgrade:new */
  export class ISRemoveWeaponUpgrade extends lua.shared.TimedActions.ISRemoveWeaponUpgrade {}

  // [lua/shared/TimedActions/ISRepairClothing.d.ts]
  /** @customConstructor ISRepairClothing:new */
  export class ISRepairClothing extends lua.shared.TimedActions.ISRepairClothing {}

  // [lua/shared/TimedActions/ISRestAction.d.ts]
  /** @customConstructor ISRestAction:new */
  export class ISRestAction extends lua.shared.TimedActions.ISRestAction {}

  // [lua/shared/TimedActions/ISScything.d.ts]
  /** @customConstructor ISScything:new */
  export class ISScything extends lua.shared.TimedActions.ISScything {}

  // [lua/shared/TimedActions/ISSetComboWasherDryerMode.d.ts]
  /** @customConstructor ISSetComboWasherDryerMode:new */
  export class ISSetComboWasherDryerMode extends lua.shared.TimedActions.ISSetComboWasherDryerMode {}

  // [lua/shared/TimedActions/ISSitOnChairAction.d.ts]
  /** @customConstructor ISSitOnChairAction:new */
  export class ISSitOnChairAction extends lua.shared.TimedActions.ISSitOnChairAction {}

  // [lua/shared/TimedActions/ISSitOnGround.d.ts]
  /** @customConstructor ISSitOnGround:new */
  export class ISSitOnGround extends lua.shared.TimedActions.ISSitOnGround {}

  // [lua/shared/TimedActions/ISSmashWindow.d.ts]
  /** @customConstructor ISSmashWindow:new */
  export class ISSmashWindow extends lua.shared.TimedActions.ISSmashWindow {}

  // [lua/shared/TimedActions/ISSplint.d.ts]
  /** @customConstructor ISSplint:new */
  export class ISSplint extends lua.shared.TimedActions.ISSplint {}

  // [lua/shared/TimedActions/ISStitch.d.ts]
  /** @customConstructor ISStitch:new */
  export class ISStitch extends lua.shared.TimedActions.ISStitch {}

  // [lua/shared/TimedActions/ISStopAlarmClockAction.d.ts]
  /** @customConstructor ISStopAlarmClockAction:new */
  export class ISStopAlarmClockAction extends lua.shared.TimedActions.ISStopAlarmClockAction {}

  // [lua/shared/TimedActions/ISTakeCarBatteryChargerAction.d.ts]
  /** @customConstructor ISTakeCarBatteryChargerAction:new */
  export class ISTakeCarBatteryChargerAction extends lua.shared.TimedActions.ISTakeCarBatteryChargerAction {}

  // [lua/shared/TimedActions/ISTakeFuel.d.ts]
  /** @customConstructor ISTakeFuel:new */
  export class ISTakeFuel extends lua.shared.TimedActions.ISTakeFuel {}

  // [lua/shared/TimedActions/ISTakeGenerator.d.ts]
  /** @customConstructor ISTakeGenerator:new */
  export class ISTakeGenerator extends lua.shared.TimedActions.ISTakeGenerator {}

  // [lua/shared/TimedActions/ISTakePillAction.d.ts]
  /** @customConstructor ISTakePillAction:new */
  export class ISTakePillAction extends lua.shared.TimedActions.ISTakePillAction {}

  // [lua/shared/TimedActions/ISTakeTrap.d.ts]
  /** @customConstructor ISTakeTrap:new */
  export class ISTakeTrap extends lua.shared.TimedActions.ISTakeTrap {}

  // [lua/shared/TimedActions/ISTakeWaterAction.d.ts]
  /** @customConstructor ISTakeWaterAction:new */
  export class ISTakeWaterAction extends lua.shared.TimedActions.ISTakeWaterAction {}

  // [lua/shared/TimedActions/ISToggleClothingDryer.d.ts]
  /** @customConstructor ISToggleClothingDryer:new */
  export class ISToggleClothingDryer extends lua.shared.TimedActions.ISToggleClothingDryer {}

  // [lua/shared/TimedActions/ISToggleClothingWasher.d.ts]
  /** @customConstructor ISToggleClothingWasher:new */
  export class ISToggleClothingWasher extends lua.shared.TimedActions.ISToggleClothingWasher {}

  // [lua/shared/TimedActions/ISToggleComboWasherDryer.d.ts]
  /** @customConstructor ISToggleComboWasherDryer:new */
  export class ISToggleComboWasherDryer extends lua.shared.TimedActions.ISToggleComboWasherDryer {}

  // [lua/shared/TimedActions/ISToggleLightAction.d.ts]
  /** @customConstructor ISToggleLightAction:new */
  export class ISToggleLightAction extends lua.shared.TimedActions.ISToggleLightAction {}

  // [lua/shared/TimedActions/ISToggleStoveAction.d.ts]
  /** @customConstructor ISToggleStoveAction:new */
  export class ISToggleStoveAction extends lua.shared.TimedActions.ISToggleStoveAction {}

  // [lua/shared/TimedActions/ISTransferAction.d.ts]
  /** @customConstructor ISTransferAction:new */
  export class ISTransferAction extends lua.shared.TimedActions.ISTransferAction {}

  // [lua/shared/TimedActions/ISTransferWaterAction.d.ts]
  /** @customConstructor ISTransferWaterAction:new */
  export class ISTransferWaterAction extends lua.shared.TimedActions.ISTransferWaterAction {}

  // [lua/shared/TimedActions/ISTrimBeard.d.ts]
  /** @customConstructor ISTrimBeard:new */
  export class ISTrimBeard extends lua.shared.TimedActions.ISTrimBeard {}

  // [lua/shared/TimedActions/ISUnbarricadeAction.d.ts]
  /** @customConstructor ISUnbarricadeAction:new */
  export class ISUnbarricadeAction extends lua.shared.TimedActions.ISUnbarricadeAction {}

  // [lua/shared/TimedActions/ISUnequipAction.d.ts]
  /** @customConstructor ISUnequipAction:new */
  export class ISUnequipAction extends lua.shared.TimedActions.ISUnequipAction {}

  // [lua/shared/TimedActions/ISUnloadBulletsFromFirearm.d.ts]
  /** @customConstructor ISUnloadBulletsFromFirearm:new */
  export class ISUnloadBulletsFromFirearm extends lua.shared.TimedActions.ISUnloadBulletsFromFirearm {}

  // [lua/shared/TimedActions/ISUnloadBulletsFromMagazine.d.ts]
  /** @customConstructor ISUnloadBulletsFromMagazine:new */
  export class ISUnloadBulletsFromMagazine extends lua.shared.TimedActions.ISUnloadBulletsFromMagazine {}

  // [lua/shared/TimedActions/ISUpgradeWeapon.d.ts]
  /** @customConstructor ISUpgradeWeapon:new */
  export class ISUpgradeWeapon extends lua.shared.TimedActions.ISUpgradeWeapon {}

  // [lua/shared/TimedActions/ISWaitWhileGettingUp.d.ts]
  /** @customConstructor ISWaitWhileGettingUp:new */
  export class ISWaitWhileGettingUp extends lua.shared.TimedActions.ISWaitWhileGettingUp {}

  // [lua/shared/TimedActions/ISWakeOtherPlayer.d.ts]
  /** @customConstructor ISWakeOtherPlayer:new */
  export class ISWakeOtherPlayer extends lua.shared.TimedActions.ISWakeOtherPlayer {}

  // [lua/shared/TimedActions/ISWashClothing.d.ts]
  /** @customConstructor ISWashClothing:new */
  export class ISWashClothing extends lua.shared.TimedActions.ISWashClothing {}

  // [lua/shared/TimedActions/ISWashYourself.d.ts]
  /** @customConstructor ISWashYourself:new */
  export class ISWashYourself extends lua.shared.TimedActions.ISWashYourself {}

  // [lua/shared/TimedActions/ISWearClothing.d.ts]
  /** @customConstructor ISWearClothing:new */
  export class ISWearClothing extends lua.shared.TimedActions.ISWearClothing {}
  export abstract class WearClothingAnimations extends lua.shared.TimedActions.WearClothingAnimations {}

  // [lua/shared/TimedActions/ISWringClothing.d.ts]
  /** @customConstructor ISWringClothing:new */
  export class ISWringClothing extends lua.shared.TimedActions.ISWringClothing {}

  // [lua/shared/TimedActions/ISWriteSomething.d.ts]
  /** @customConstructor ISWriteSomething:new */
  export class ISWriteSomething extends lua.shared.TimedActions.ISWriteSomething {}

  // [lua/shared/Traps/TimedActions/ISAddBaitAction.d.ts]
  /** @customConstructor ISAddBaitAction:new */
  export class ISAddBaitAction extends lua.shared.Traps.TimedActions.ISAddBaitAction {}

  // [lua/shared/Traps/TimedActions/ISCheckTrapAction.d.ts]
  /** @customConstructor ISCheckTrapAction:new */
  export class ISCheckTrapAction extends lua.shared.Traps.TimedActions.ISCheckTrapAction {}

  // [lua/shared/Traps/TimedActions/ISRemoveBaitAction.d.ts]
  /** @customConstructor ISRemoveBaitAction:new */
  export class ISRemoveBaitAction extends lua.shared.Traps.TimedActions.ISRemoveBaitAction {}

  // [lua/shared/Traps/TimedActions/ISRemoveTrapAction.d.ts]
  /** @customConstructor ISRemoveTrapAction:new */
  export class ISRemoveTrapAction extends lua.shared.Traps.TimedActions.ISRemoveTrapAction {}

  // [lua/shared/Traps/TrapSystem.d.ts]
  export abstract class TrapSystem extends lua.shared.Traps.TrapSystem {}

  // [lua/shared/Util/AdjacentFreeTileFinder.d.ts]
  export abstract class AdjacentFreeTileFinder extends lua.shared.Util.AdjacentFreeTileFinder {}

  // [lua/shared/Util/BuildingHelper.d.ts]
  export abstract class BuildingHelper extends lua.shared.Util.BuildingHelper {}

  // [lua/shared/Util/ISPriorityTable.d.ts]
  export abstract class ISPriorityTable extends lua.shared.Util.ISPriorityTable {}

  // [lua/shared/Util/LuaList.d.ts]
  /** @customConstructor LuaList:new */
  export class LuaList extends lua.shared.Util.LuaList {}

  // [lua/shared/Util/LuaNet.d.ts]
  export abstract class LuaNet extends lua.shared.Util.LuaNet {}

  // [lua/shared/Util/StringReplacer.d.ts]
  export abstract class StringReplacer extends lua.shared.Util.StringReplacer {}

  // [lua/shared/Vehicles/TimedActions/ISAddGasolineToVehicle.d.ts]
  /** @customConstructor ISAddGasolineToVehicle:new */
  export class ISAddGasolineToVehicle extends lua.shared.Vehicles.TimedActions.ISAddGasolineToVehicle {}

  // [lua/shared/Vehicles/TimedActions/ISCloseVehicleDoor.d.ts]
  /** @customConstructor ISCloseVehicleDoor:new */
  export class ISCloseVehicleDoor extends lua.shared.Vehicles.TimedActions.ISCloseVehicleDoor {}

  // [lua/shared/Vehicles/TimedActions/ISDeflateTire.d.ts]
  /** @customConstructor ISDeflateTire:new */
  export class ISDeflateTire extends lua.shared.Vehicles.TimedActions.ISDeflateTire {}

  // [lua/shared/Vehicles/TimedActions/ISHotwireVehicle.d.ts]
  /** @customConstructor ISHotwireVehicle:new */
  export class ISHotwireVehicle extends lua.shared.Vehicles.TimedActions.ISHotwireVehicle {}

  // [lua/shared/Vehicles/TimedActions/ISInflateTire.d.ts]
  /** @customConstructor ISInflateTire:new */
  export class ISInflateTire extends lua.shared.Vehicles.TimedActions.ISInflateTire {}

  // [lua/shared/Vehicles/TimedActions/ISInstallVehiclePart.d.ts]
  /** @customConstructor ISInstallVehiclePart:new */
  export class ISInstallVehiclePart extends lua.shared.Vehicles.TimedActions.ISInstallVehiclePart {}

  // [lua/shared/Vehicles/TimedActions/ISLockDoors.d.ts]
  /** @customConstructor ISLockDoors:new */
  export class ISLockDoors extends lua.shared.Vehicles.TimedActions.ISLockDoors {}

  // [lua/shared/Vehicles/TimedActions/ISLockVehicleDoor.d.ts]
  /** @customConstructor ISLockVehicleDoor:new */
  export class ISLockVehicleDoor extends lua.shared.Vehicles.TimedActions.ISLockVehicleDoor {}

  // [lua/shared/Vehicles/TimedActions/ISOpenCloseVehicleWindow.d.ts]
  /** @customConstructor ISOpenCloseVehicleWindow:new */
  export class ISOpenCloseVehicleWindow extends lua.shared.Vehicles.TimedActions.ISOpenCloseVehicleWindow {}

  // [lua/shared/Vehicles/TimedActions/ISOpenVehicleDoor.d.ts]
  /** @customConstructor ISOpenVehicleDoor:new */
  export class ISOpenVehicleDoor extends lua.shared.Vehicles.TimedActions.ISOpenVehicleDoor {}

  // [lua/shared/Vehicles/TimedActions/ISRefuelFromGasPump.d.ts]
  /** @customConstructor ISRefuelFromGasPump:new */
  export class ISRefuelFromGasPump extends lua.shared.Vehicles.TimedActions.ISRefuelFromGasPump {}

  // [lua/shared/Vehicles/TimedActions/ISRemoveBurntVehicle.d.ts]
  /** @customConstructor ISRemoveBurntVehicle:new */
  export class ISRemoveBurntVehicle extends lua.shared.Vehicles.TimedActions.ISRemoveBurntVehicle {}

  // [lua/shared/Vehicles/TimedActions/ISRepairEngine.d.ts]
  /** @customConstructor ISRepairEngine:new */
  export class ISRepairEngine extends lua.shared.Vehicles.TimedActions.ISRepairEngine {}

  // [lua/shared/Vehicles/TimedActions/ISRepairLightbar.d.ts]
  /** @customConstructor ISRepairLightbar:new */
  export class ISRepairLightbar extends lua.shared.Vehicles.TimedActions.ISRepairLightbar {}

  // [lua/shared/Vehicles/TimedActions/ISShutOffVehicleEngine.d.ts]
  /** @customConstructor ISShutOffVehicleEngine:new */
  export class ISShutOffVehicleEngine extends lua.shared.Vehicles.TimedActions.ISShutOffVehicleEngine {}

  // [lua/shared/Vehicles/TimedActions/ISSmashVehicleWindow.d.ts]
  /** @customConstructor ISSmashVehicleWindow:new */
  export class ISSmashVehicleWindow extends lua.shared.Vehicles.TimedActions.ISSmashVehicleWindow {}

  // [lua/shared/Vehicles/TimedActions/ISStartVehicleEngine.d.ts]
  /** @customConstructor ISStartVehicleEngine:new */
  export class ISStartVehicleEngine extends lua.shared.Vehicles.TimedActions.ISStartVehicleEngine {}

  // [lua/shared/Vehicles/TimedActions/ISTakeEngineParts.d.ts]
  /** @customConstructor ISTakeEngineParts:new */
  export class ISTakeEngineParts extends lua.shared.Vehicles.TimedActions.ISTakeEngineParts {}

  // [lua/shared/Vehicles/TimedActions/ISTakeGasolineFromVehicle.d.ts]
  /** @customConstructor ISTakeGasolineFromVehicle:new */
  export class ISTakeGasolineFromVehicle extends lua.shared.Vehicles.TimedActions.ISTakeGasolineFromVehicle {}

  // [lua/shared/Vehicles/TimedActions/ISUninstallVehiclePart.d.ts]
  /** @customConstructor ISUninstallVehiclePart:new */
  export class ISUninstallVehiclePart extends lua.shared.Vehicles.TimedActions.ISUninstallVehiclePart {}

  // [lua/shared/Vehicles/TimedActions/ISUnlockVehicleDoor.d.ts]
  /** @customConstructor ISUnlockVehicleDoor:new */
  export class ISUnlockVehicleDoor extends lua.shared.Vehicles.TimedActions.ISUnlockVehicleDoor {}

  // [lua/shared/Vehicles/TimedActions/ISWashVehicle.d.ts]
  /** @customConstructor ISWashVehicle:new */
  export class ISWashVehicle extends lua.shared.Vehicles.TimedActions.ISWashVehicle {}

}
