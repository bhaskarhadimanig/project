"""
One-shot generator for Section 5 "What This Changes" — 3 UI-style images.
Run: python /app/scripts/gen_section5_images.py
Saves PNGs to /app/frontend/public/generated/
"""
import asyncio
import base64
import os
import sys
from pathlib import Path

from dotenv import load_dotenv

load_dotenv("/app/backend/.env")

from emergentintegrations.llm.chat import LlmChat, UserMessage  # noqa: E402

OUT = Path("/app/frontend/public/generated")
OUT.mkdir(parents=True, exist_ok=True)

# Shared visual DNA — matches gethealthspan.com-inspired Supercore theme.
# Palette: deep navy #0A1628 background, lime-yellow #DAFF6B, cool blue #2563EB, white + muted white type.
BASE_STYLE = (
    "Ultra-clean, sophisticated, modern SaaS product UI mockup screenshot. "
    "Dark deep-navy background (#0A1628) with very subtle ambient glow. "
    "Accent color lime-yellow (#DAFF6B) for key data points, secondary cool blue (#2563EB) "
    "for complementary accents. White crisp Inter-style typography with generous spacing. "
    "Rounded-corner card containers with faint 1px white-alpha borders, soft inner glow, "
    "backdrop blur. Premium, calm, medical-grade feel — like Linear or Healthspan app. "
    "No brand logos, no watermarks, no human faces, no photography. Flat vector UI only. "
    "Composition centered, minimal, lots of negative space. 16:10 aspect. Photorealistic render quality."
)

IMAGES = [
    {
        "name": "depth-visible.png",
        "prompt": (
            f"{BASE_STYLE} "
            "Content: A specialist-discovery dashboard card. Top shows a search result listing "
            "three anonymous specialist profile rows (no faces, just abstract circle avatars in "
            "lime and blue) with tags like 'GUT · METABOLIC', 'HORMONAL · SLEEP', 'COGNITIVE'. "
            "Each row has a small lime-yellow 'match score' chip on the right (e.g. '96% MATCH'). "
            "At the top, a small pill-shaped search bar with the placeholder 'Find a specialist by cluster'. "
            "Below the list, a subtle wireframe map/graph of interconnected cluster dots linking specialists "
            "to patients with faint glowing lime lines. Clean, data-forward."
        ),
    },
    {
        "name": "program-value.png",
        "prompt": (
            f"{BASE_STYLE} "
            "Content: A program pricing and structure dashboard. Foreground: a tall vertical bar chart "
            "comparing two values — left bar labeled 'EPISODIC VISIT · ₹1,500' rendered short in muted "
            "white, right bar labeled '12-WEEK PROGRAM · ₹45,000' rendered tall in glowing lime-yellow "
            "with a soft glow at the top. Below the chart, a program-structure timeline card showing "
            "12 week dots in a horizontal row — 3 dots in lime (active), 9 dots in faint navy (upcoming), "
            "with week labels 'W1 · Intake', 'W4 · Protocol', 'W12 · Outcome'. Above the chart a tiny "
            "label reads 'PROGRAM ECONOMICS'. Calm, confident, clean."
        ),
    },
    {
        "name": "head-start.png",
        "prompt": (
            f"{BASE_STYLE} "
            "Content: A resource library / framework dashboard card. A 2×3 grid of six small document-style "
            "cards, each with a tiny lime-yellow icon at top-left, a title, and a subtitle. Titles: "
            "'Longevity Program Playbook', 'Functional Medicine Foundations', 'Gut Cluster Protocols', "
            "'Metabolic Programming Guide', 'Hormonal Pathway Map', 'Outcome Scoring Rubric'. Each card "
            "has a small 'OPEN' chevron icon. Above the grid a header label reads 'FOUNDER LIBRARY · 24 RESOURCES'. "
            "A faint lime-yellow accent line on the left edge of the whole panel. Premium, academic but "
            "modern. Looks like a Notion-meets-Linear knowledge dashboard."
        ),
    },
]


async def generate_one(item):
    api_key = os.getenv("EMERGENT_LLM_KEY")
    if not api_key:
        raise RuntimeError("EMERGENT_LLM_KEY missing from env")
    chat = LlmChat(
        api_key=api_key,
        session_id=f"section5-{item['name']}",
        system_message="You are a world-class product UI designer generating clean, minimal, dark-themed SaaS dashboard mockup images.",
    )
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(modalities=["image", "text"])

    msg = UserMessage(text=item["prompt"])
    text, images = await chat.send_message_multimodal_response(msg)
    print(f"[{item['name']}] text preview: {(text or '')[:80]}")
    if not images:
        print(f"[{item['name']}] ERROR: no images returned")
        return False
    img_bytes = base64.b64decode(images[0]["data"])
    out = OUT / item["name"]
    out.write_bytes(img_bytes)
    print(f"[{item['name']}] saved -> {out} ({len(img_bytes)} bytes)")
    return True


async def main():
    results = await asyncio.gather(*[generate_one(i) for i in IMAGES], return_exceptions=True)
    ok = sum(1 for r in results if r is True)
    print(f"\nDone: {ok}/{len(IMAGES)} images generated")
    for i, r in enumerate(results):
        if isinstance(r, Exception):
            print(f"  [{IMAGES[i]['name']}] EXCEPTION: {r}")


if __name__ == "__main__":
    asyncio.run(main())
