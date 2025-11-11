from __future__ import annotations
from typing import Dict, Any
from .base_agent import get_openai_client

SYSTEM_PROMPT = (
	"You are an assistant that classifies and summarizes inbound contact messages for a portfolio site. "
	"Return a short JSON with keys: sentiment (positive/negative/neutral), intent (job/collab/question/other), "
	"priority (1-10), is_spam (true/false), response_suggestion (one short paragraph)."
)


def analyze_contact_message(name: str, email: str, subject: str, message: str) -> Dict[str, Any]:
	client = get_openai_client()
	if client is None:
		# Fallback heuristic when no API key is set
		text = f"{subject} {message}".lower()
		is_spam = any(w in text for w in ["win money", "lottery", "crypto", "viagra"])  # naive
		intent = "question"
		if any(w in text for w in ["hire", "job", "position", "opportunity"]):
			intent = "job"
		elif any(w in text for w in ["partner", "collab", "collaboration"]):
			intent = "collab"
		priority = 9 if intent in ("job", "collab") else 5
		return {
			"sentiment": "neutral",
			"intent": intent,
			"priority": priority,
			"is_spam": is_spam,
			"response_suggestion": "Thanks for reaching out. I will review your message and reply shortly.",
		}

	prompt = (
		f"Name: {name}\nEmail: {email}\nSubject: {subject}\nMessage: {message}\n\n"
		"Respond ONLY with a compact JSON object with keys: sentiment, intent, priority, is_spam, response_suggestion."
	)

	# Using responses API (Chat Completions equivalent in OpenAI v1 client)
	resp = client.chat.completions.create(
		model="gpt-4o-mini",
		messages=[
			{"role": "system", "content": SYSTEM_PROMPT},
			{"role": "user", "content": prompt},
		],
		temperature=0.2,
	)
	content = resp.choices[0].message.content if resp.choices else "{}"
	import json
	try:
		parsed = json.loads(content)
	except Exception:
		parsed = {}

	return {
		"sentiment": parsed.get("sentiment", "neutral"),
		"intent": parsed.get("intent", "other"),
		"priority": int(parsed.get("priority", 5)) if str(parsed.get("priority", "")).isdigit() else 5,
		"is_spam": bool(parsed.get("is_spam", False)),
		"response_suggestion": parsed.get("response_suggestion", "Thanks for reaching out. I will reply soon."),
	}
