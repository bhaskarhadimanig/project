"""
Regenerate the 3 Section 5 images per new detailed prompts.
Uses AMBER accent (#F5A524) on deep navy/near-black background.
Edge-to-edge composition, one hero element + one supporting, nothing else.
"""
import asyncio
import base64
import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv("/app/backend/.env")
from emergentintegrations.llm.chat import LlmChat, UserMessage  # noqa

OUT = Path("/app/frontend/public/generated")
OUT.mkdir(parents=True, exist_ok=True)

BASE = (
    "Premium minimalist UI mockup, edge-to-edge composition. Background is deep navy "
    "near-black (#08111F to #0A1628 subtle gradient) with very subtle ambient depth — no flat "
    "black voids. Single AMBER accent color (warm saffron-amber, around #F5A524 / #E8A23B) used "
    "EXACTLY ONCE per image on the most important element. No lime green, no yellow-green, no "
    "blue accents. Warm white type (#FFFFFF / #F5F1E8) for non-amber text. Modern Inter-style "
    "typography with tight tracking. Aspect ratio 16:10 cinematic. Photorealistic UI render. "
    "ZERO clutter — only the elements explicitly described, NOTHING else. No avatars, no extra "
    "icons, no extra UI chrome, no charts unless specified, no decorative shapes, no text outside "
    "what is described. Content fills the frame edge-to-edge with generous breathing room but "
    "absolutely no unused white-space. Premium feel — Linear / Stripe / Healthspan-grade. "
    "No brand logos, no watermarks, no human faces, no photography."
)

IMAGES = [
    {
        "name": "depth-visible.png",
        "prompt": (
            f"{BASE} "
            "CONTENT: A dark navy card showing a specialist match interface, edge-to-edge. "
            "LEFT HALF: One single large oversized cluster filter tag — a pill shape with amber "
            "stroke + soft amber background tint, containing the text 'Gut & Microbiome' in "
            "amber. The tag is the visual anchor — confidently large, like a selected chip. "
            "RIGHT HALF: A clean vertical list of exactly THREE specialist names in warm white "
            "Inter typography (e.g. 'Dr. Arjun Shah', 'Dr. Priya Menon', 'Dr. Rohan Kapur'). To "
            "the LEFT of each name is a small glowing amber dot (circular, with soft amber halo). "
            "No avatars. No subtitles. Just name + dot. "
            "CONNECTION: A very thin, faint amber line curves softly from the right edge of the "
            "cluster tag toward the middle of the name list — barely visible, suggesting the "
            "match flow. "
            "Nothing else in the frame. No icons, no UI chrome, no headings, no buttons, no "
            "background patterns. Deep navy fills the rest with subtle gradient depth."
        ),
    },
    {
        "name": "program-value.png",
        "prompt": (
            f"{BASE} "
            "CONTENT: A dark navy card with ONE dominant centered element — a structured program "
            "price tag composition. "
            "ELEMENT 1 (HERO): The number '₹45,000' rendered in HUGE confident warm-white sans-serif "
            "type, perfectly centered, with tight letterspacing. This is the single visual anchor. "
            "ELEMENT 2 (SUPPORT, directly below the price): A small line of amber uppercase "
            "letterspaced text — '12-WEEK CORE LONGEVITY PROTOCOL' — in warm saffron amber. Small, "
            "refined, secondary. "
            "ELEMENT 3 (SUPPORT, below that text): A single thin horizontal progress bar — about "
            "60–70% filled with warm amber, the rest in faint navy track. The bar is wide but "
            "thin, sleek. "
            "Nothing else exists in the frame. No charts, no extra numbers, no labels, no buttons, "
            "no surrounding cards. Deep navy fills the rest with very subtle ambient depth."
        ),
    },
    {
        "name": "head-start.png",
        "prompt": (
            f"{BASE} "
            "CONTENT: A dark navy card showing a clean stack of EXACTLY THREE resource rows, "
            "vertically arranged, edge-to-edge. "
            "EACH ROW: a thin horizontal line item — on the LEFT, a small minimalist document/file "
            "icon in warm amber (line-style, simple); on the RIGHT of the icon, the title in warm "
            "white Inter type. "
            "ROW 1 title: 'Longevity Program Guide' "
            "ROW 2 title: 'Functional Medicine Foundations' "
            "ROW 3 title: 'Cluster Protocol Frameworks' "
            "Each row has a subtle thin amber underline / divider beneath it (horizontal hairline). "
            "Behind the MIDDLE row, a soft amber glow radiates out — drawing the eye to the centre "
            "of the stack. "
            "No descriptions, no tags, no numbers, no extra UI elements, no headings. Deep navy "
            "fills the rest of the frame with subtle ambient depth. The composition reads like a "
            "minimal, premium folder of tools — handed to you, ready to open."
        ),
    },
]


async def gen_one(item):
    api_key = os.getenv("EMERGENT_LLM_KEY")
    chat = LlmChat(
        api_key=api_key,
        session_id=f"s5-amber-{item['name']}",
        system_message=(
            "You are a world-class minimalist product UI designer. You produce edge-to-edge "
            "premium dark-mode UI mockups with surgical economy — only the elements described, "
            "nothing extra, no clutter."
        ),
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(
        modalities=["image", "text"]
    )
    msg = UserMessage(text=item["prompt"])
    text, images = await chat.send_message_multimodal_response(msg)
    print(f"[{item['name']}] preview={(text or '')[:60]}")
    if not images:
        print(f"[{item['name']}] FAILED no images")
        return False
    out = OUT / item["name"]
    out.write_bytes(base64.b64decode(images[0]["data"]))
    print(f"[{item['name']}] saved -> {out} ({out.stat().st_size} bytes)")
    return True


async def main():
    # Run sequentially to avoid budget errors hitting all 3 in parallel
    for item in IMAGES:
        try:
            await gen_one(item)
        except Exception as e:
            print(f"[{item['name']}] EXCEPTION: {e}")


if __name__ == "__main__":
    asyncio.run(main())
