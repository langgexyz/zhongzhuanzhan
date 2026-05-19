---
name: YunServer API
name_en: YunServer API
url: https://api.yunserver.cn/
affiliate: https://api.yunserver.cn/
models:
  - gpt-5.5
  - gpt-5.5-pro
  - gpt-5.4
  - gpt-5.4-pro
  - gpt-5.3-codex
  - claude-opus-4-7
  - claude-opus-4-6
  - gemini-3.1-pro-preview
  - gemini-3-pro-preview
  - deepseek-v4-pro
  - deepseek-v4-flash
  - kimi-k2.6
  - glm5.1
  - Qwen3.6-35B-A3B
  - minimax-m2.7
  - gpt-image-2
priceNote_zh: CNY 计费，GPT-5.5 ¥0.8 / 百万 tokens 起，GPT-5.4 ¥1.3 / 百万 tokens 起（2026-05-15 起）
priceNote_en: Priced in CNY. GPT-5.5 from ¥0.8 / 1M tokens, GPT-5.4 from ¥1.3 / 1M tokens (effective 2026-05-15)
short_zh: 基于 New API 的中转站，模型清单覆盖 GPT-5 系列、Claude 4、Gemini 3、DeepSeek V4、Kimi K2 等多个家族，OpenAI 兼容协议，CNY 计费。
short_en: A New-API-based relay covering GPT-5 series, Claude 4, Gemini 3, DeepSeek V4, Kimi K2 and more model families with an OpenAI-compatible API. Billed in CNY.
tags: [claude-code, codex-cli, cursor, claude, gpt-5, codex, gemini, deepseek, kimi]
status: active
since: 2026-04
billing: payg
prices_zh:
  GPT: ¥0.8 / M tokens 起 (5.5)
  Claude: 见站内
  Gemini: 见站内
prices_en:
  GPT: from ¥0.8 / 1M tokens (5.5)
  Claude: see site
  Gemini: see site
---

## 接入方式

- 协议：OpenAI 兼容
- Endpoint：`https://api.yunserver.cn/v1/chat/completions`
- 鉴权：`Authorization: Bearer <key>`
- 兼容客户端：Claude Code / Cursor / Codex CLI / Cherry Studio / Lobe Chat 等任何 OpenAI 协议客户端

## 支持模型

- **GPT**：gpt-5.5 / 5.5-pro / 5.4 / 5.4-pro / 5.3-codex
- **Claude**：claude-opus-4-7 / 4-6
- **Gemini**：gemini-3.1-pro-preview / 3-pro-preview
- **DeepSeek**：deepseek-v4-pro / flash / flash-h / flash-l
- **国产**：kimi-k2.6 / glm5.1 / Qwen3.6-35B-A3B / minimax-m2.7
- **图像**：gpt-image-2

## 计费方式

人民币结算，按模型 token 用量计费。详细价目以站内 `/pricing` 页为准。
