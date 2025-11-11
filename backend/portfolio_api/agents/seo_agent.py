from __future__ import annotations
from typing import Dict, Any, List
from .base_agent import get_openai_client
import json


def analyze_seo(pages: List[Dict[str, Any]]) -> Dict[str, Any]:
	client = get_openai_client()
	if client is None:
		return {"keywords": ["Full Stack Developer", "Django", "Next.js", "AI Developer"], "suggestions": ["Add meta descriptions to key pages.", "Use structured data for projects."]}

	prompt = (
		"Suggest 5 SEO keywords and 3 meta improvements for a developer portfolio. Respond JSON: {keywords:[], suggestions:[]}\n"
		+ json.dumps(pages[:5])
	)
	resp = client.chat.completions.create(
		model="gpt-4o-mini",
		messages=[{"role": "system", "content": "You are an SEO assistant. JSON only."}, {"role": "user", "content": prompt}],
		temperature=0.3,
	)
	content = resp.choices[0].message.content if resp.choices else "{}"
	try:
		return json.loads(content)
	except Exception:
		return {"keywords": [], "suggestions": []}
