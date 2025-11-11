from __future__ import annotations
from typing import Dict, Any, List
from .base_agent import get_openai_client
import json


def generate_insights(contacts: List[Dict[str, Any]], projects: List[Dict[str, Any]]) -> Dict[str, Any]:
	client = get_openai_client()
	if client is None:
		return {
			"insights": [
				{"title": "Popular Interest", "description": "Most inquiries relate to collaborations and jobs."},
				{"title": "Top Project", "description": "Your latest portfolio gets the most clicks."}
			]
		}

	prompt = (
		"Create 3 short insights about portfolio traffic and contact trends. Respond JSON: {insights:[{title,description}]}\n"
		+ json.dumps({"contacts": contacts[:20], "projects": projects[:20]})
	)
	resp = client.chat.completions.create(
		model="gpt-4o-mini",
		messages=[{"role": "system", "content": "You summarize data succinctly as insights. JSON only."}, {"role": "user", "content": prompt}],
		temperature=0.2,
	)
	content = resp.choices[0].message.content if resp.choices else "{}"
	try:
		return json.loads(content)
	except Exception:
		return {"insights": []}
