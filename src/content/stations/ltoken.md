---
name: ltoken.shop
name_en: ltoken.shop
url: https://api.ltoken.shop/
models:
  - claude-opus-4-7
  - claude-opus-4-7-thinking
  - claude-opus-4-6
  - claude-opus-4-6-thinking
  - claude-sonnet-4-6
  - claude-sonnet-4-6-thinking
  - gpt-5.4-mini
  - gpt-5.3-codex
  - gpt-5.2
  - gpt-image-2
  - openai/gpt-oss-120b
  - openai/gpt-oss-20b
  - gemini-3.1-pro-preview
  - gemini-3-flash-preview
  - deepseek-v4-flash
  - moonshotai/kimi-k2.5
  - minimax-m2.5
  - z-ai/glm5.1
  - z-ai/glm5
  - z-ai/glm4.7
  - z-ai/glm4.5-air
  - qwen3.6-plus
  - qwen/qwen3.5-122b-a10b
  - qwen/qwen3.5-397b-a17b
  - qwen/qwen3-coder-480b-a35b-instruct
  - free-model
protocols: [OpenAI, Anthropic]
priceNote_zh: Claude 按次约 ¥0.02/次起，其余按 token ratio
priceNote_en: Claude per-request from ¥0.02/req, others by token ratio
promo_zh: 近期连续降价 — GPT 至原 85%、Claude 五折后再 50%（约 ¥0.02/次起）
promo_en: Active discount stack — GPT to 85% of previous prices; Claude reduced repeatedly to ~50% × 50% (from ~¥0.02/req)
short_zh: 基于 new-api 的中转站，28 个模型覆盖 Claude 4.x（含 thinking）、GPT-5 / gpt-oss、Gemini 3 / 3.1、DeepSeek V4、Kimi K2.5、MiniMax M2.5、GLM 4.5–5.1、Qwen 3.x–3.6。Claude 按次计费。
short_en: A new-api based relay listing 28 models — Claude 4.x (incl. thinking), GPT-5 + gpt-oss, Gemini 3 / 3.1, DeepSeek V4, Kimi K2.5, MiniMax M2.5, GLM 4.5–5.1, Qwen 3.x–3.6. Claude billed per request.
tags: [claude-code, claude, codex-cli, codex, cursor, gpt-5, gemini, deepseek, kimi, glm, qwen, minimax]
status: active
billing: hybrid
prices_zh:
  Claude: 按次（站方公告 sonnet 类约 ¥0.02/次，opus 类未公开）
  GPT: 按 token ratio — gpt-5.4-mini 0.5，gpt-5.3-codex / 5.2 视分组配置；最近降价至原 85%
  其他: GLM / gpt-oss 系列 ratio 0.25，free-model ratio 0.05
prices_en:
  Claude: 'Per-request (announcements: sonnet ~¥0.02/req, opus not disclosed)'
  GPT: 'Per-token ratio — gpt-5.4-mini 0.5, gpt-5.3-codex / 5.2 group-dependent; recently discounted to 85%'
  Other: GLM / gpt-oss ratio 0.25, free-model ratio 0.05
---

## 接入方式

- 协议：OpenAI 兼容 + Anthropic 原生（`supported_endpoint_types: ["anthropic", "openai"]`）
- 主入口：`https://api.ltoken.shop/v1`（OpenAI）、`/v1/messages`（Anthropic）
- 鉴权：`Authorization: Bearer <key>` 或 `x-api-key: <key>`
- backend：new-api 系（`x-new-api-version: v0.0.0`，标准 oneapi 兼容头）
- 号池组：`default` / `default-1` / `LDR` / `svip` / `vip` / `管理专属倍率`（auto group: `default`）

## 支持模型（抓自 `/api/pricing` 公开接口）

共 28 个模型，按 tag 分组：

**Claude (6)**：opus-4-7 / 4-7-thinking · opus-4-6 / 4-6-thinking · sonnet-4-6 / 4-6-thinking

**GPT (8)**：gpt-5.4-mini · gpt-5.3-codex · gpt-5.2 · gpt-image-2 · openai/gpt-oss-120b · openai/gpt-oss-20b

**Gemini (2)**：gemini-3.1-pro-preview · gemini-3-flash-preview

**Qwen (5)**：qwen3.6-plus · qwen/qwen3.5-122b-a10b · qwen/qwen3.5-397b-a17b · qwen/qwen3-coder-480b-a35b-instruct · free-model

**GLM (4)**：z-ai/glm5.1 · glm5 · glm4.7 · glm4.5-air

**其他 (3)**：moonshotai/kimi-k2.5 · minimax-m2.5 · deepseek-v4-flash

## 计费方式

new-api `quota_type` 决定：

| 模型类 | quota_type | 价格 |
|---|---|---|
| Claude opus-4-6 / 4-7 (含 thinking) | 1（按次） | `model_price` ≈ 0.161 |
| Claude sonnet-4-6 (含 thinking) | 1 | `model_price` ≈ 0.103 |
| gpt-5.4-mini | 0（按 token） | ratio 0.5 |
| gpt-5.3-codex / 5.2 | 0 | 视分组 |
| GLM / gpt-oss 系列 | 0 | ratio 0.25 |
| free-model | 0 | ratio 0.05 |

> 注：`model_price` 字段的换算单位由站方决定（USD 还是直接折 RMB），站方公告把 sonnet 类按次价格表述为约 **¥0.02/次**（降价后），可作参考。

## 站方公告（节选）

- `2026-05-18` GPT 已降价为原来的 85%
- `2026-05-13` Claude 降价至五折，又降价至原来一半，换算 ¥ 约 0.02/次
- `2026-05-11` GPT 已降价至原来的 0.6 倍
- 历史：Claude 按次收费上线，多次降价
