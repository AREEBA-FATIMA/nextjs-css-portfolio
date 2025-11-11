from __future__ import annotations
from typing import List, Dict, Any
from .base_agent import get_openai_client
import json


def recommend_projects(projects: List[Dict[str, Any]], max_items: int = 3) -> List[Dict[str, Any]]:
	# Simple heuristic fallback: top by "order"
	sorted_local = sorted(projects, key=lambda p: p.get("order", 0))[:max_items]
	client = get_openai_client()
	if client is None:
		return sorted_local

	prompt = (
		"Given these projects, select the top few to highlight. Return JSON array of project indexes (0-based) with length up to "
		+ str(max_items) + ".\n" + json.dumps(projects[:10])
	)
	resp = client.chat.completions.create(
		model="gpt-4o-mini",
		messages=[{"role": "system", "content": "You select portfolio highlights. JSON only."}, {"role": "user", "content": prompt}],
		temperature=0.2,
	)
	content = resp.choices[0].message.content if resp.choices else "[]"
	try:
		indexes = json.loads(content)
		if not isinstance(indexes, list):
			return sorted_local
		return [projects[i] for i in indexes if isinstance(i, int) and 0 <= i < len(projects)]
	except Exception:
		return sorted_local
