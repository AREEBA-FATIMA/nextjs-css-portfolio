from __future__ import annotations
from typing import Dict
from .base_agent import get_openai_client


def draft_reply(name: str, subject: str, message: str) -> Dict[str, str]:
	client = get_openai_client()
	if client is None:
		return {"subject": f"Re: {subject}", "body": f"Hi {name},\n\nThanks for reaching out! I appreciate your message regarding '{subject}'. I'll review the details and get back to you soon.\n\nBest regards,\nAreeba"}

	prompt = (
		f"Create a brief, warm email reply to {name} about '{subject}'. Keep it under 120 words."
	)
	resp = client.chat.completions.create(
		model="gpt-4o-mini",
		messages=[{"role": "system", "content": "You write concise professional emails."}, {"role": "user", "content": prompt}],
		temperature=0.5,
	)
	body = resp.choices[0].message.content if resp.choices else "Thanks for your message—I'll get back to you soon."
	return {"subject": f"Re: {subject}", "body": body.strip()}
