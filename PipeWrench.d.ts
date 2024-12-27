/**  @noSelfInFile */
/// <reference path="reference.d.ts" />
// for type hinting
/// <reference path="server.d.ts" />
/// <reference path="client.d.ts" />
declare module '@asledgehammer/pipewrench' {
  // [JAVA-PARTIAL:START]

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
  export class AnimatedModelInstanceRenderData extends zombie.core.skinnedmodel.advancedanimation
    .AnimatedModel$AnimatedModelInstanceRenderData {}
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
  export class AnimationVariableReference extends zombie.core.skinnedmodel.advancedanimation
    .AnimationVariableReference {}
  /** @customConstructor AnimationVariableSlotCallbackBool.new */
  export class AnimationVariableSlotCallbackBool extends zombie.core.skinnedmodel.advancedanimation
    .AnimationVariableSlotCallbackBool {}
  /** @customConstructor AnimationVariableSlotCallbackFloat.new */
  export class AnimationVariableSlotCallbackFloat extends zombie.core.skinnedmodel.advancedanimation
    .AnimationVariableSlotCallbackFloat {}
  /** @customConstructor AnimationVariableSlotCallbackInt.new */
  export class AnimationVariableSlotCallbackInt extends zombie.core.skinnedmodel.advancedanimation
    .AnimationVariableSlotCallbackInt {}
  /** @customConstructor AnimationVariableSlotCallbackString.new */
  export class AnimationVariableSlotCallbackString extends zombie.core.skinnedmodel.advancedanimation
    .AnimationVariableSlotCallbackString {}
  /** @customConstructor AnimationVariableSlotGenerator.new */
  export class AnimationVariableSlotGenerator extends zombie.core.skinnedmodel.advancedanimation
    .AnimationVariableSource$AnimationVariableSlotGenerator {}
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

  /** @customConstructor CGlobalObjects.new */
  export class CGlobalObjects extends zombie.globalObjects.CGlobalObjects {}
  /** @customConstructor CacheData.new */
  export class CacheData extends zombie.entity.components.crafting.recipe.CraftRecipeData$CacheData {}
  /** @customConstructor CachedRecipeComparator.new */
  export class CachedRecipeComparator extends zombie.entity.components.crafting
    .BaseCraftingLogic$CachedRecipeComparator {}
  /** @customConstructor CachedRecipeInfo.new */
  export class CachedRecipeInfo extends zombie.entity.components.crafting.BaseCraftingLogic$CachedRecipeInfo {}
  /** @customConstructor CallbackGetStrongTyped.new */
  export class CallbackGetStrongTyped extends zombie.core.skinnedmodel.advancedanimation
    .AnimationVariableSlotCallbackBool$CallbackGetStrongTyped {}
  /** @customConstructor CallbackSetStrongTyped.new */
  export class CallbackSetStrongTyped extends zombie.core.skinnedmodel.advancedanimation
    .AnimationVariableSlotCallbackInt$CallbackSetStrongTyped {}
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
  export class CraftRecipeComponentScript extends zombie.scripting.entity.components.crafting
    .CraftRecipeComponentScript {}
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
  export class IAnimEventListenerBoolean extends zombie.core.skinnedmodel.advancedanimation.events
    .IAnimEventListenerBoolean {}
  /** @customConstructor IAnimEventListenerFloat.new */
  export class IAnimEventListenerFloat extends zombie.core.skinnedmodel.advancedanimation.events
    .IAnimEventListenerFloat {}
  /** @customConstructor IAnimEventListenerNoParam.new */
  export class IAnimEventListenerNoParam extends zombie.core.skinnedmodel.advancedanimation.events
    .IAnimEventListenerNoParam {}
  /** @customConstructor IAnimEventListenerSetVariableString.new */
  export class IAnimEventListenerSetVariableString extends zombie.core.skinnedmodel.advancedanimation.events
    .IAnimEventListenerSetVariableString {}
  /** @customConstructor IAnimEventListenerString.new */
  export class IAnimEventListenerString extends zombie.core.skinnedmodel.advancedanimation.events
    .IAnimEventListenerString {}
  /** @customConstructor IAnimListener.new */
  export class IAnimListener extends zombie.core.skinnedmodel.animation.IAnimListener {}
  /** @customConstructor IAnimalVisual.new */
  export class IAnimalVisual extends zombie.core.skinnedmodel.visual.IAnimalVisual {}
  /** @customConstructor IAnimatable.new */
  export class IAnimatable extends zombie.core.skinnedmodel.advancedanimation.IAnimatable {}
  /** @customConstructor IAnimationVariableCallbackMap.new */
  export class IAnimationVariableCallbackMap extends zombie.core.skinnedmodel.advancedanimation
    .IAnimationVariableCallbackMap {}
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
  export class IElementSpawner extends zombie.randomizedWorld.randomizedVehicleStory
    .VehicleStorySpawner$IElementSpawner {}
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
  /** @customConstructor MapSymbolDefinition.new */
  export class MapSymbolDefinition extends zombie.worldMap.symbols.MapSymbolDefinitions$MapSymbolDefinition {}
  /** @customConstructor MapSymbolDefinitions.new */
  export class MapSymbolDefinitions extends zombie.worldMap.symbols.MapSymbolDefinitions {}
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
  /** @customConstructor MiniMap.new */
  export class MiniMap extends zombie.worldMap.WorldMapSettings$MiniMap {}
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
  export class RDSPrisonEscapeWithPolice extends zombie.randomizedWorld.randomizedDeadSurvivor
    .RDSPrisonEscapeWithPolice {}
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
  export class RVSPoliceBlockadeShooting extends zombie.randomizedWorld.randomizedVehicleStory
    .RVSPoliceBlockadeShooting {}
  /** @customConstructor RVSRegionalProfessionVehicle.new */
  export class RVSRegionalProfessionVehicle extends zombie.randomizedWorld.randomizedVehicleStory
    .RVSRegionalProfessionVehicle {}
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
  export class RandomizedDeadSurvivorBase extends zombie.randomizedWorld.randomizedDeadSurvivor
    .RandomizedDeadSurvivorBase {}
  /** @customConstructor RandomizedVehicleStoryBase.new */
  export class RandomizedVehicleStoryBase extends zombie.randomizedWorld.randomizedVehicleStory
    .RandomizedVehicleStoryBase {}
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
  export class SharedSkeleAnimationRepository extends zombie.core.skinnedmodel.animation.sharedskele
    .SharedSkeleAnimationRepository {}
  /** @customConstructor SharedSkeleAnimationTrack.new */
  export class SharedSkeleAnimationTrack extends zombie.core.skinnedmodel.animation.sharedskele
    .SharedSkeleAnimationTrack {}
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
  /** @customConstructor UIWorldMapV3.new */
  export class UIWorldMapV3 extends zombie.worldMap.UIWorldMapV3 {}
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
  export class ValidCanPerformRecipeComparator extends zombie.entity.components.crafting.recipe
    .CraftRecipeSort$ValidCanPerformRecipeComparator {}
  /** @customConstructor ValidRecipeComparator.new */
  export class ValidRecipeComparator extends zombie.entity.components.crafting.recipe
    .CraftRecipeSort$ValidRecipeComparator {}
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
  export class VertexPositionNormalTangentTexture extends zombie.core.skinnedmodel.model
    .VertexPositionNormalTangentTexture {}
  /** @customConstructor VertexPositionNormalTangentTextureSkin.new */
  export class VertexPositionNormalTangentTextureSkin extends zombie.core.skinnedmodel.model
    .VertexPositionNormalTangentTextureSkin {}
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
  /** @customConstructor WorldMapClient.new */
  export class WorldMapClient extends zombie.worldMap.network.WorldMapClient {}
  /** @customConstructor WorldMapData.new */
  export class WorldMapData extends zombie.worldMap.WorldMapData {}
  /** @customConstructor WorldMapDoubleOption.new */
  export class WorldMapDoubleOption extends zombie.worldMap.WorldMapRenderer$WorldMapDoubleOption {}
  /** @customConstructor WorldMapEditorState.new */
  export class WorldMapEditorState extends zombie.worldMap.editor.WorldMapEditorState {}
  /** @customConstructor WorldMapFeature.new */
  export class WorldMapFeature extends zombie.worldMap.WorldMapFeature {}
  /** @customConstructor WorldMapGridSquareMarker.new */
  export class WorldMapGridSquareMarker extends zombie.worldMap.markers.WorldMapGridSquareMarker {}
  /** @customConstructor WorldMapGridSquareMarkerV1.new */
  export class WorldMapGridSquareMarkerV1 extends zombie.worldMap.markers
    .WorldMapMarkersV1$WorldMapGridSquareMarkerV1 {}
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
  /** @customConstructor WorldMapSettings.new */
  export class WorldMapSettings extends zombie.worldMap.WorldMapSettings {}
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

  export type AbstractList = java.util.AbstractList<any>;
  export type Appendable = java.lang.Appendable;
  export type ArrayDeque = java.util.ArrayDeque<any>;
  export type AttributedCharacterIterator = java.text.AttributedCharacterIterator;
  export type Audio = fmod.fmod.Audio;
  export type BiConsumer = java.util._function_.BiConsumer<any, any>;
  export type BiFunction = java.util._function_.BiFunction<any, any, any>;
  export type BooleanSupplier = java.util._function_.BooleanSupplier;
  export type Buffer = org.lwjgl.glfw.GLFWImage$Buffer;
  export type BufferedImage = java.awt.image.BufferedImage;
  export type BufferedInputStream = java.io.BufferedInputStream;
  export type ByteBuffer = java.nio.ByteBuffer;
  export type CRC32 = java.util.zip.CRC32;
  export type Calendar = java.util.Calendar;
  export type CharBuffer = java.nio.CharBuffer;
  export type CharSequence = java.lang.CharSequence;
  export type Class = java.lang.Class<any>;
  export type ClassDebugInformation = se.krka.kahlua.integration.expose.ClassDebugInformation;
  export type Collection = java.util.Collection<any>;
  export type Comparator = java.util.Comparator<any>;
  export type CompletableFuture = java.util.concurrent.CompletableFuture<any>;
  export type ConcurrentLinkedQueue = java.util.concurrent.ConcurrentLinkedQueue<any>;
  export type Constructor = java.lang.reflect.Constructor<any>;
  export type Consumer = java.util._function_.Consumer<any>;
  export type Controller = org.lwjglx.input.Controller;
  export type Coroutine = se.krka.kahlua.vm.Coroutine;
  export type Cursor = org.lwjglx.input.Cursor;
  export type DataInput = java.io.DataInput;
  export type Date = java.util.Date;
  export type DateFormat = java.text.DateFormat;
  export type DateFormatSymbols = java.text.DateFormatSymbols;
  export type Entry = java.util.Map$Entry<any, any>;
  export type EnumDesc = java.lang.Enum$EnumDesc<any>;
  export type Enumeration = java.util.Enumeration<any>;
  export type Exception = java.lang.Exception;
  export type FMODFootstep = fmod.fmod.FMODFootstep;
  export type FMODVoice = fmod.fmod.FMODVoice;
  export type FMOD_STUDIO_PARAMETER_DESCRIPTION = fmod.fmod.FMOD_STUDIO_PARAMETER_DESCRIPTION;
  export type FMOD_STUDIO_PARAMETER_ID = fmod.fmod.FMOD_STUDIO_PARAMETER_ID;
  export type Field = java.lang.reflect.Field;
  export type FieldPosition = java.text.FieldPosition;
  export type File = java.io.File;
  export type FileChannel = java.nio.channels.FileChannel;
  export type FileDescriptor = java.io.FileDescriptor;
  export type FloatBuffer = java.nio.FloatBuffer;
  export type Function = java.util._function_.Function<any, any>;
  export type GregorianCalendar = java.util.GregorianCalendar;
  export type HashSet = java.util.HashSet<any>;
  export type ImDrawData = imgui.ImDrawData;
  export type ImmutableSet = com.google.common.collect.ImmutableSet<any>;
  export type InetSocketAddress = java.net.InetSocketAddress;
  export type InputStream = java.io.InputStream;
  export type IntBuffer = java.nio.IntBuffer;
  export type IntFunction = java.util._function_.IntFunction<any>;
  export type Iterable = java.lang.Iterable<any>;
  export type J2SEPlatform = se.krka.kahlua.j2se.J2SEPlatform;
  export type KahluaConverterManager = se.krka.kahlua.converter.KahluaConverterManager;
  export type KahluaTable = se.krka.kahlua.vm.KahluaTable;
  export type KahluaTableImpl = se.krka.kahlua.j2se.KahluaTableImpl;
  export type KahluaThread = se.krka.kahlua.vm.KahluaThread;
  export type KeyEventQueue = org.lwjglx.input.KeyEventQueue;
  export type List = java.util.List<any>;
  export type ListIterator = java.util.ListIterator<any>;
  export type LocalDateTime = java.time.LocalDateTime;
  export type Locale = java.util.Locale;
  export type LuaCallFrame = se.krka.kahlua.vm.LuaCallFrame;
  export type LuaCaller = se.krka.kahlua.integration.LuaCaller;
  export type LuaClosure = se.krka.kahlua.vm.LuaClosure;
  export type Matrix2dc = org.joml.Matrix2dc;
  export type Matrix2fc = org.joml.Matrix2fc;
  export type Matrix3dc = org.joml.Matrix3dc;
  export type Matrix3f = org.lwjgl.util.vector.Matrix3f;
  export type Matrix3fc = org.joml.Matrix3fc;
  export type Matrix3x2fc = org.joml.Matrix3x2fc;
  export type Matrix4dc = org.joml.Matrix4dc;
  export type Matrix4f = org.lwjgl.util.vector.Matrix4f;
  export type Matrix4fc = org.joml.Matrix4fc;
  export type Matrix4x3fc = org.joml.Matrix4x3fc;
  export type Method = java.lang.reflect.Method;
  export type Number = java.lang.Number;
  export type NumberFormat = java.text.NumberFormat;
  export type ObjectInput = java.io.ObjectInput;
  export type ObjectOutput = java.io.ObjectOutput;
  export type ObjectOutputStream = java.io.ObjectOutputStream;
  export type Optional = java.util.Optional<any>;
  export type OutputStream = java.io.OutputStream;
  export type ParsePosition = java.text.ParsePosition;
  export type Platform = se.krka.kahlua.vm.Platform;
  export type PrintStream = java.io.PrintStream;
  export type PrintWriter = java.io.PrintWriter;
  export type Prototype = se.krka.kahlua.vm.Prototype;
  export type Quaternion = org.lwjgl.util.vector.Quaternion;
  export type Quaternionf = org.joml.Quaternionf;
  export type Quaternionfc = org.joml.Quaternionfc;
  export type Random = java.util.Random;
  export type RandomAccessFile = java.io.RandomAccessFile;
  export type Raster = java.awt.image.Raster;
  export type ReadableColor = org.lwjgl.util.ReadableColor;
  export type Reader = java.io.Reader;
  export type Rectangle = org.lwjgl.util.Rectangle;
  export type ReentrantLock = java.util.concurrent.locks.ReentrantLock;
  export type Runnable = java.lang.Runnable;
  export type Set = java.util.Set<any>;
  export type Spliterator = java.util.Spliterator<any>;
  export type StackTraceElement = java.lang.StackTraceElement;
  export type Stream = java.util.stream.Stream<any>;
  export type StringBuffer = java.lang.StringBuffer;
  export type StringBuilder = java.lang.StringBuilder;
  export type Supplier = java.util._function_.Supplier<any>;
  export type TFloatArrayList = gnu.trove.list.array.TFloatArrayList;
  export type THashMap = gnu.trove.map.hash.THashMap<any, any>;
  export type THashSet = gnu.trove.set.hash.THashSet<any>;
  export type TIntArrayList = gnu.trove.list.array.TIntArrayList;
  export type TLongObjectIterator = gnu.trove.iterator.TLongObjectIterator<any>;
  export type TLongObjectMap = gnu.trove.map.TLongObjectMap<any>;
  export type TLongObjectProcedure = gnu.trove.procedure.TLongObjectProcedure<any>;
  export type TLongProcedure = gnu.trove.procedure.TLongProcedure;
  export type TLongSet = gnu.trove.set.TLongSet;
  export type TObjectFunction = gnu.trove._function_.TObjectFunction<any, any>;
  export type TObjectObjectProcedure = gnu.trove.procedure.TObjectObjectProcedure<any, any>;
  export type TObjectProcedure = gnu.trove.procedure.TObjectProcedure<any>;
  export type TShortObjectHashMap = gnu.trove.map.hash.TShortObjectHashMap<any>;
  export type Thread = java.lang.Thread;
  export type ThreadLocal = java.lang.ThreadLocal<any>;
  export type Throwable = java.lang.Throwable;
  export type TimeZone = java.util.TimeZone;
  export type ToDoubleFunction = java.util._function_.ToDoubleFunction<any>;
  export type ToIntFunction = java.util._function_.ToIntFunction<any>;
  export type ToLongFunction = java.util._function_.ToLongFunction<any>;
  export type URI = java.net.URI;
  export type UUID = java.util.UUID;
  export type UnaryOperator = java.util._function_.UnaryOperator<any>;
  export type Vector2d = org.joml.Vector2d;
  export type Vector2dc = org.joml.Vector2dc;
  export type Vector2f = org.lwjgl.util.vector.Vector2f;
  export type Vector2fc = org.joml.Vector2fc;
  export type Vector2i = org.joml.Vector2i;
  export type Vector2ic = org.joml.Vector2ic;
  export type Vector3d = org.joml.Vector3d;
  export type Vector3dc = org.joml.Vector3dc;
  export type Vector3f = org.lwjgl.util.vector.Vector3f;
  export type Vector3fc = org.joml.Vector3fc;
  export type Vector3i = org.joml.Vector3i;
  export type Vector3ic = org.joml.Vector3ic;
  export type Vector4f = org.lwjgl.util.vector.Vector4f;
  export type Writer = java.io.Writer;

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
  export function acceptSafehouseInvite(
    arg0: zombie.iso.areas.SafeHouse,
    arg1: string,
    arg2: zombie.characters.IsoPlayer,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (IsoPlayer arg0, IsoPlayer arg1, boolean arg2): void
   */
  export function acceptTrading(
    arg0: zombie.characters.IsoPlayer,
    arg1: zombie.characters.IsoPlayer,
    arg2: boolean,
  ): void;
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
  export function addAnimal(
    arg0: zombie.iso.IsoCell,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: string,
    arg5: zombie.characters.animals.datas.AnimalBreed,
    arg6?: boolean,
  ): zombie.characters.animals.IsoAnimal;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (int arg0, int arg1, int arg2, int arg3, int arg4, float arg5, float arg6, float arg7, float arg8): void
   */
  export function addAreaHighlight(
    arg0: number,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: number,
    arg5: number,
    arg6: number,
    arg7: number,
    arg8: number,
  ): void;
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
  export function addVehicleDebug(
    arg0: string,
    arg1: zombie.iso.IsoDirections,
    arg2: number,
    arg3: zombie.iso.IsoGridSquare,
  ): zombie.vehicles.BaseVehicle;
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
  export function addZombiesInOutfit(
    arg0: number,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: string,
    arg5: number,
    arg6?: boolean,
    arg7?: boolean,
    arg8?: boolean,
    arg9?: boolean,
    arg10?: boolean,
    arg11?: boolean,
    arg12?: number,
  ): java.util.ArrayList<zombie.characters.IsoZombie>;
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
  export function changeItemTypeTransaction(
    arg0: zombie.characters.IsoPlayer,
    arg1: zombie.inventory.InventoryItem,
    arg2: string,
  ): number;
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
  export function copyTable(
    arg0: se.krka.kahlua.vm.KahluaTable,
    arg1?: se.krka.kahlua.vm.KahluaTable,
  ): se.krka.kahlua.vm.KahluaTable;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (IsoPlayer arg0, float arg1, float arg2, float arg3, boolean arg4, String arg5, KahluaTable arg6): number
   */
  export function createBuildAction(
    arg0: zombie.characters.IsoPlayer,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: boolean,
    arg5: string,
    arg6: se.krka.kahlua.vm.KahluaTable,
  ): number;
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
  export function createHordeInAreaTo(
    arg0: number,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: number,
    arg5: number,
    arg6: number,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (IsoPlayer arg0, InventoryItem arg1, ItemContainer arg2, ItemContainer arg3): number
   */
  export function createItemTransaction(
    arg0: zombie.characters.IsoPlayer,
    arg1: zombie.inventory.InventoryItem,
    arg2: zombie.inventory.ItemContainer,
    arg3: zombie.inventory.ItemContainer,
  ): number;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (IsoPlayer arg0, InventoryItem arg1, ItemContainer arg2, ItemContainer arg3, String arg4, float arg5, float arg6, float arg7): number
   */
  export function createItemTransactionWithPosData(
    arg0: zombie.characters.IsoPlayer,
    arg1: zombie.inventory.InventoryItem,
    arg2: zombie.inventory.ItemContainer,
    arg3: zombie.inventory.ItemContainer,
    arg4: string,
    arg5: number,
    arg6: number,
    arg7: number,
  ): number;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (String arg0, String arg1, String arg2, String arg3, String arg4): zombie.scripting.objects.Item
   */
  export function createNewScriptItem(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: string,
  ): zombie.scripting.objects.Item;
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
  export function createZombie(
    arg0: number,
    arg1: number,
    arg2: number,
    arg3: zombie.characters.SurvivorDesc,
    arg4: number,
    arg5: zombie.iso.IsoDirections,
  ): zombie.characters.IsoZombie;
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
  export function drawOverheadMap(
    arg0: zombie.ui.UIElement,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: number,
  ): void;
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
  export function emulateAnimEventOnce(
    arg0: zombie.core.NetTimedAction,
    arg1: number,
    arg2: string,
    arg3: string,
  ): void;
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
  export function getAndFindNearestTracks(
    arg0: zombie.characters.IsoGameCharacter,
  ): java.util.ArrayList<zombie.characters.animals.AnimalTracks>;
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
  export function getCoroutineCallframeStack(
    arg0: se.krka.kahlua.vm.Coroutine,
    arg1: number,
  ): se.krka.kahlua.vm.LuaCallFrame;
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
  export function getCustomizationData(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: string,
    arg5: string,
    arg6: boolean,
  ): void;
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
  export function getDirectionTo(
    arg0: zombie.characters.IsoGameCharacter,
    arg1: zombie.iso.IsoObject,
  ): zombie.iso.IsoDirections;
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
  export function getFileWriter(
    arg0: string,
    arg1: boolean,
    arg2: boolean,
  ): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter;
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
  export function getLocalVarName(
    arg0: se.krka.kahlua.vm.Coroutine | se.krka.kahlua.vm.LuaCallFrame,
    arg1: number,
  ): string;
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
  export function getModFileWriter(
    arg0: string,
    arg1: string,
    arg2: boolean,
    arg3: boolean,
  ): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter;
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
  export function getSandboxFileWriter(
    arg0: string,
    arg1: boolean,
    arg2: boolean,
  ): zombie.Lua.LuaManager$GlobalObject$LuaFileWriter;
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
  export function instanceItem(
    arg0: string | zombie.scripting.objects.Item,
    arg1?: number,
  ): zombie.inventory.InventoryItem;
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
  export function isItemTransactionConsistent(
    arg0: zombie.inventory.InventoryItem,
    arg1: zombie.inventory.ItemContainer,
    arg2: zombie.inventory.ItemContainer,
    arg3: string,
  ): boolean;
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
  export function loadSkinnedZomboidModel(
    arg0: string,
    arg1: string,
    arg2: string,
  ): zombie.core.skinnedmodel.model.Model;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (String arg0, String arg1, String arg2): zombie.core.skinnedmodel.model.Model
   */
  export function loadStaticZomboidModel(
    arg0: string,
    arg1: string,
    arg2: string,
  ): zombie.core.skinnedmodel.model.Model;
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
  export function loadZomboidModel(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: boolean,
  ): zombie.core.skinnedmodel.model.Model;
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
  export function querySteamWorkshopItemDetails(
    arg0: java.util.ArrayList<string>,
    arg1: se.krka.kahlua.vm.LuaClosure,
    arg2: any,
  ): void;
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
  export function renderIsoCircle(
    arg0: number,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: number,
    arg5: number,
    arg6: number,
    arg7: number,
    arg8: number,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, int arg8): void
   */
  export function renderIsoRect(
    arg0: number,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: number,
    arg5: number,
    arg6: number,
    arg7: number,
    arg8: number,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (float arg0, float arg1, float arg2, float arg3, float arg4, float arg5, float arg6, float arg7, float arg8, float arg9): void
   */
  export function renderLine(
    arg0: number,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: number,
    arg5: number,
    arg6: number,
    arg7: number,
    arg8: number,
    arg9: number,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (ItemContainer arg0, InventoryItem arg1, InventoryItem arg2): void
   */
  export function replaceItemInContainer(
    arg0: zombie.inventory.ItemContainer,
    arg1: zombie.inventory.InventoryItem,
    arg2: zombie.inventory.InventoryItem,
  ): void;
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
  export function sendAddAnimalFromHandsInTrailer(
    arg0: zombie.characters.animals.IsoAnimal | zombie.iso.objects.IsoDeadBody,
    arg1: zombie.characters.IsoPlayer,
    arg2: zombie.vehicles.BaseVehicle,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (IsoAnimal arg0, IsoPlayer arg1, BaseVehicle arg2): void
   *  - (IsoDeadBody arg0, IsoPlayer arg1, BaseVehicle arg2): void
   */
  export function sendAddAnimalInTrailer(
    arg0: zombie.characters.animals.IsoAnimal | zombie.iso.objects.IsoDeadBody,
    arg1: zombie.characters.IsoPlayer,
    arg2: zombie.vehicles.BaseVehicle,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (ItemContainer arg0, InventoryItem arg1): void
   */
  export function sendAddItemToContainer(
    arg0: zombie.inventory.ItemContainer,
    arg1: zombie.inventory.InventoryItem,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (ItemContainer arg0, ArrayList arg1): void
   */
  export function sendAddItemsToContainer(
    arg0: zombie.inventory.ItemContainer,
    arg1: java.util.ArrayList<zombie.inventory.InventoryItem>,
  ): void;
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
  export function sendAttachAnimalToPlayer(
    arg0: zombie.characters.animals.IsoAnimal,
    arg1: zombie.characters.IsoPlayer,
    arg2: zombie.iso.IsoObject,
    arg3: boolean,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (IsoAnimal arg0, IsoPlayer arg1, IsoObject arg2, boolean arg3): void
   */
  export function sendAttachAnimalToTree(
    arg0: zombie.characters.animals.IsoAnimal,
    arg1: zombie.characters.IsoPlayer,
    arg2: zombie.iso.IsoObject,
    arg3: boolean,
  ): void;
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
  export function sendClientCommand(
    arg0: string | zombie.characters.IsoPlayer,
    arg1: string,
    arg2: se.krka.kahlua.vm.KahluaTable | string,
    arg3?: se.krka.kahlua.vm.KahluaTable,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (IsoPlayer arg0, String arg1, InventoryItem arg2): void
   */
  export function sendClothing(
    arg0: zombie.characters.IsoPlayer,
    arg1: string,
    arg2: zombie.inventory.InventoryItem,
  ): void;
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
  export function sendFactionInvite(
    arg0: zombie.characters.Faction,
    arg1: zombie.characters.IsoPlayer,
    arg2: string,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (IsoAnimal arg0, IsoPlayer arg1, InventoryItem arg2): void
   */
  export function sendFeedAnimalFromHand(
    arg0: zombie.characters.animals.IsoAnimal,
    arg1: zombie.characters.IsoPlayer,
    arg2: zombie.inventory.InventoryItem,
  ): void;
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
  export function sendHitPlayer(
    arg0: zombie.characters.IsoPlayer,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: boolean,
    arg5: boolean,
    arg6: boolean,
    arg7: boolean,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (IsoGameCharacter arg0, String arg1, boolean arg2, String arg3, String arg4, boolean arg5): void
   */
  export function sendHitVehicle(
    arg0: zombie.characters.IsoGameCharacter,
    arg1: string,
    arg2: boolean,
    arg3: string,
    arg4: string,
    arg5: boolean,
  ): void;
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
  export function sendHutchGrabAnimal(
    arg0: zombie.characters.animals.IsoAnimal,
    arg1: zombie.characters.IsoPlayer,
    arg2: zombie.iso.IsoObject,
    arg3: zombie.inventory.InventoryItem,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (IsoAnimal arg0, IsoPlayer arg1, IsoObject arg2, InventoryItem arg3): void
   */
  export function sendHutchGrabCorpseAction(
    arg0: zombie.characters.animals.IsoAnimal,
    arg1: zombie.characters.IsoPlayer,
    arg2: zombie.iso.IsoObject,
    arg3: zombie.inventory.InventoryItem,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (IsoAnimal arg0, IsoPlayer arg1, IsoObject arg2): void
   */
  export function sendHutchRemoveAnimalAction(
    arg0: zombie.characters.animals.IsoAnimal,
    arg1: zombie.characters.IsoPlayer,
    arg2: zombie.iso.IsoObject,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (IsoPlayer arg0, ArrayList arg1, IsoPlayer arg2, String arg3, String arg4): boolean
   */
  export function sendItemListNet(
    arg0: zombie.characters.IsoPlayer,
    arg1: java.util.ArrayList<zombie.inventory.InventoryItem>,
    arg2: zombie.characters.IsoPlayer,
    arg3: string,
    arg4: string,
  ): boolean;
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
  export function sendPickupAnimal(
    arg0: zombie.characters.animals.IsoAnimal,
    arg1: zombie.characters.IsoPlayer,
    arg2: zombie.inventory.types.AnimalInventoryItem,
  ): void;
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
  export function sendRemoveAndGrabAnimalFromTrailer(
    arg0: zombie.characters.animals.IsoAnimal | zombie.iso.objects.IsoDeadBody,
    arg1: zombie.characters.IsoPlayer,
    arg2: zombie.vehicles.BaseVehicle,
    arg3: zombie.inventory.types.AnimalInventoryItem,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (IsoAnimal arg0, IsoPlayer arg1, BaseVehicle arg2): void
   */
  export function sendRemoveAnimalFromTrailer(
    arg0: zombie.characters.animals.IsoAnimal,
    arg1: zombie.characters.IsoPlayer,
    arg2: zombie.vehicles.BaseVehicle,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (ItemContainer arg0, InventoryItem arg1): void
   */
  export function sendRemoveItemFromContainer(
    arg0: zombie.inventory.ItemContainer,
    arg1: zombie.inventory.InventoryItem,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (ItemContainer arg0, ArrayList arg1): void
   */
  export function sendRemoveItemsFromContainer(
    arg0: zombie.inventory.ItemContainer,
    arg1: java.util.ArrayList<zombie.inventory.InventoryItem>,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (ItemContainer arg0, InventoryItem arg1, InventoryItem arg2): void
   */
  export function sendReplaceItemInContainer(
    arg0: zombie.inventory.ItemContainer,
    arg1: zombie.inventory.InventoryItem,
    arg2: zombie.inventory.InventoryItem,
  ): void;
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
  export function sendSafehouseClaim(
    arg0: zombie.iso.IsoGridSquare,
    arg1: zombie.characters.IsoPlayer,
    arg2: string,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (SafeHouse arg0, IsoPlayer arg1, String arg2): void
   */
  export function sendSafehouseInvite(
    arg0: zombie.iso.areas.SafeHouse,
    arg1: zombie.characters.IsoPlayer,
    arg2: string,
  ): void;
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
  export function sendSafezoneClaim(
    arg0: string,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: number,
    arg5: string,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (String arg0, String arg1, String arg2, String arg3, boolean arg4, int arg5, String arg6): void
   */
  export function sendSecretKey(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: boolean,
    arg5: number,
    arg6: string,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (String arg0, String arg1, KahluaTable arg2): void
   *  - (IsoPlayer arg0, String arg1, String arg2, KahluaTable arg3): void
   */
  export function sendServerCommand(
    arg0: string | zombie.characters.IsoPlayer,
    arg1: string,
    arg2: se.krka.kahlua.vm.KahluaTable | string,
    arg3?: se.krka.kahlua.vm.KahluaTable,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (BaseVehicle arg0, IsoGameCharacter arg1, int arg2, int arg3): void
   */
  export function sendSwitchSeat(
    arg0: zombie.vehicles.BaseVehicle,
    arg1: zombie.characters.IsoGameCharacter,
    arg2: number,
    arg3: number,
  ): void;
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
  export function serverConnect(
    arg0: string,
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: string,
    arg5: string,
    arg6: string,
    arg7: boolean,
    arg8: boolean,
    arg9: number,
    arg10: string,
  ): void;
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
  export function setupRole(
    arg0: zombie.characters.Role,
    arg1: string,
    arg2: zombie.core.Color,
    arg3: se.krka.kahlua.vm.KahluaTable,
  ): void;
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
  export function showSteamFloatingGamepadTextInput(
    arg0: boolean,
    arg1: number,
    arg2: number,
    arg3: number,
    arg4: number,
  ): boolean;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (boolean arg0, boolean arg1, String arg2, int arg3, String arg4): boolean
   */
  export function showSteamGamepadTextInput(
    arg0: boolean,
    arg1: boolean,
    arg2: string,
    arg3: number,
    arg4: string,
  ): boolean;
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
  export function startFishingAction(
    arg0: zombie.characters.IsoPlayer,
    arg1: zombie.inventory.InventoryItem,
    arg2: zombie.iso.IsoGridSquare,
    arg3: se.krka.kahlua.vm.KahluaTable,
  ): number;
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
  export function tradingUISendAddItem(
    arg0: zombie.characters.IsoPlayer,
    arg1: zombie.characters.IsoPlayer,
    arg2: zombie.inventory.InventoryItem,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (IsoPlayer arg0, IsoPlayer arg1, InventoryItem arg2): void
   */
  export function tradingUISendRemoveItem(
    arg0: zombie.characters.IsoPlayer,
    arg1: zombie.characters.IsoPlayer,
    arg2: zombie.inventory.InventoryItem,
  ): void;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (IsoPlayer arg0, IsoPlayer arg1, int arg2): void
   */
  export function tradingUISendUpdateState(
    arg0: zombie.characters.IsoPlayer,
    arg1: zombie.characters.IsoPlayer,
    arg2: number,
  ): void;
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
  export function translatePointXInOverheadMapToWindow(
    arg0: number,
    arg1: zombie.ui.UIElement,
    arg2: number,
    arg3: number,
  ): number;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (float arg0, UIElement arg1, float arg2, float arg3): number
   */
  export function translatePointXInOverheadMapToWorld(
    arg0: number,
    arg1: zombie.ui.UIElement,
    arg2: number,
    arg3: number,
  ): number;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (float arg0, UIElement arg1, float arg2, float arg3): number
   */
  export function translatePointYInOverheadMapToWindow(
    arg0: number,
    arg1: zombie.ui.UIElement,
    arg2: number,
    arg3: number,
  ): number;
  /**
   * @noSelf
   *
   * Method Parameters:
   *  - (float arg0, UIElement arg1, float arg2, float arg3): number
   */
  export function translatePointYInOverheadMapToWorld(
    arg0: number,
    arg1: zombie.ui.UIElement,
    arg2: number,
    arg3: number,
  ): number;
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
  // [JAVA-PARTIAL:END]
  // [LUA-PARTIAL:START]

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

  // [lua/shared/Foraging/ISForageAction.d.ts]
  /** @customConstructor ISForageAction:new */
  export class ISForageAction extends lua.shared.Foraging.ISForageAction {}

  // [lua/shared/Foraging/scavenges.d.ts]

  // [lua/shared/ISBaseObject.d.ts]
  /** @customConstructor ISBaseObject:new */
  export class ISBaseObject extends lua.shared.ISBaseObject {}

  // [lua/shared/iwbumstempmodelcompat.d.ts]
  /** @noSelf */
  export const getDir: () => any;

  // [lua/shared/JoyPad/JoyPadSetup.d.ts]
  /** @customConstructor JoypadControllerData:new */
  export class JoypadControllerData extends lua.shared.JoyPad.JoypadControllerData {}
  /** @customConstructor JoypadData:new */
  export class JoypadData extends lua.shared.JoyPad.JoypadData {}
  export abstract class joypad extends lua.shared.JoyPad.joypad {}

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

  // [LUA-PARTIAL:END]
}
