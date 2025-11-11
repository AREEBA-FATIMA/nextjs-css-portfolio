from __future__ import annotations
from typing import Dict, Any, List
from .base_agent import get_openai_client
import json

SYSTEM_PROMPT = (
	"You help generate concise portfolio content. Return JSON only."
)


def generate_content(projects: List[Dict[str, Any]], profile_name: str) -> Dict[str, Any]:
	client = get_openai_client()
	if client is None:
		# Fallback basic content
		return {
			"hero_slides": [
				{"heading": "I am", "sub_heading": "Full Stack & AI-Driven Developer", "paragraph": f"{profile_name} builds intelligent apps.", "button_text": "Explore", "target_section": "work"}
			],
			"seo": {"title": f"{profile_name} Portfolio", "description": "Full Stack & AI-Driven Web Developer."}
		}

	prompt = (
		"Given this project list, create up to 3 short hero slides and one SEO title+description. "
		"Respond JSON: {hero_slides:[{heading,sub_heading,paragraph,button_text,target_section}], seo:{title,description}}\n"
		+ json.dumps(projects)[:4000]
	)
	resp = client.chat.completions.create(
		model="gpt-4o-mini",
		messages=[{"role": "system", "content": SYSTEM_PROMPT}, {"role": "user", "content": prompt}],
		temperature=0.5,
	)
	content = resp.choices[0].message.content if resp.choices else "{}"
	try:
		return json.loads(content)
	except Exception:
		return {"hero_slides": [], "seo": {}}
