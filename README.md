# HC5

## Support assistant

Configure `OPENROUTER_API_KEY` (preferred) or `GEMINI_API_KEY` for the website support assistant. These are server-side secrets; do not expose them with a `VITE_` prefix. `OPENROUTER_MODEL` and `GEMINI_MODEL` can optionally override the default models.

The assistant sends a visitor's question to the configured provider only after consent and answers from published website information. Visitors should not submit personal, medical, or appointment details.
