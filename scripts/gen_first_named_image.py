"""Generate editorial portrait for FirstNamed section."""
import asyncio
import base64
import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv("/app/backend/.env")
from emergentintegrations.llm.chat import LlmChat, UserMessage  # noqa

OUT = Path("/app/frontend/public/generated")
OUT.mkdir(parents=True, exist_ok=True)

PROMPT = (
    "Editorial photograph, premium magazine style (Monocle / Kinfolk / Biograph). "
    "A single specialist — South Asian, around 40s, gender-neutral framing — seated at a minimal "
    "warm walnut desk in a quiet, designed private study. Not a hospital. Not clinical. "
    "The subject is NOT looking at camera. Gaze is downward and slightly to the left, calm and "
    "absorbed in reading or thought. Unhurried, contemplative expression. "
    "ENVIRONMENT: Designed private consultation space, NOT a medical room. Warm walnut desk, single "
    "well-placed brass / matte black desk lamp, large window to the right side of frame letting in "
    "warm late-afternoon natural light. Clean wall behind in off-white or warm grey. NO certificates "
    "on walls, no clutter. ONE quality object on desk: a closed leather notebook, a fountain pen, "
    "a glass of water. Nothing medical visible. "
    "LIGHTING: Single source — natural golden window light from the right side of the frame, slightly "
    "raking across the face and hands. The left side of the frame falls into a soft natural shadow "
    "(this is critical — it must be dark enough that white or amber text overlay sits cleanly on it). "
    "No flash. No studio lighting. No ring light. "
    "FRAMING: Wide composition. The subject occupies the right 55–60% of the frame. The left 40–45% "
    "is intentional negative space — darker, softer, designed to carry overlaid text. The subject is "
    "deliberately off-centre to the right. "
    "COLOUR & GRADING: Slightly desaturated, but warm tones (skin, walnut, window light) preserved as "
    "amber-warm. Cool tones reduced. Premium editorial film-grade — like a Monocle magazine photograph. "
    "ABSOLUTELY NOT: No white coat. No stethoscope. No scrubs. No hospital corridor. No clinical "
    "equipment. No smiling at camera. No stock-photo poses or hand gestures. No blue or green surgical "
    "anything. No group shots. No patient in frame. No medical signage. "
    "Aspect ratio: 16:9, cinematic landscape. Photorealistic, sharp, shallow depth of field on "
    "background, full sharpness on the subject's face and hands."
)


async def go():
    api_key = os.getenv("EMERGENT_LLM_KEY")
    chat = LlmChat(
        api_key=api_key,
        session_id="first-named-portrait-v2",
        system_message="You are a master editorial photographer producing premium magazine-grade photographs.",
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )
    msg = UserMessage(text=PROMPT)
    text, images = await chat.send_message_multimodal_response(msg)
    print(f"text preview: {(text or '')[:80]}")
    if not images:
        print("ERROR: no images returned")
        return
    img_bytes = base64.b64decode(images[0]["data"])
    out = OUT / "first-named-portrait.png"
    out.write_bytes(img_bytes)
    print(f"saved -> {out} ({len(img_bytes)} bytes)")


if __name__ == "__main__":
    asyncio.run(go())
