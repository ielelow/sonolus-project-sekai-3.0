import { windows } from '../../../../../../../../shared/src/engine/data/windows.mjs'
import { buckets } from '../../../../buckets.mjs'
import { effect } from '../../../../effect.mjs'
import { particle } from '../../../../particle.mjs'
import { skin } from '../../../../skin.mjs'
import { archetypes } from '../../../index.mjs'
import { TraceNote } from './TraceNote.mjs'

export class CriticalSlideTraceNote extends TraceNote {
    sprites = {
        left: skin.sprites.criticalTraceNoteLeft,
        middle: skin.sprites.criticalTraceNoteMiddle,
        right: skin.sprites.criticalTraceNoteRight,
        diamond: skin.sprites.criticalTraceNoteDiamond,
        fallback: skin.sprites.criticalTraceNoteFallback,
    }

    clips = {
        perfect: effect.clips.criticalTrace,
        fallback: effect.clips.normalPerfect,
    }

    effects = {
        circular: particle.effects.criticalTraceNoteCircular,
        circularFallback: particle.effects.criticalSlideTickNote,
        linear: particle.effects.criticalTraceNoteLinear,
        linearFallback: particle.effects.criticalNoteLinear,
    }

    laneEffects = {};

    windows = windows.slideTraceNote.critical

    bucket = buckets.criticalSlideTraceNote

    get slotEffect() {
        return archetypes.CriticalSlotEffect
    }

    get slotGlowEffect() {
        return archetypes.CriticalSlotGlowEffect
    }
}
