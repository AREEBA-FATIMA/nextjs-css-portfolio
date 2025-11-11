from __future__ import annotations
import os
from typing import Any, Dict

try:
	from openai import OpenAI  # openai>=1.0.0
except Exception:  # pragma: no cover
	OpenAI = None  # type: ignore


def get_openai_client() -> Any:
	api_key = os.getenv("OPENAI_API_KEY", "")
	if not api_key or OpenAI is None:
		return None
	return OpenAI(api_key=api_key)
