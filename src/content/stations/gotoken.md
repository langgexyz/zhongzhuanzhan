---
name: GoToken
name_en: GoToken
url: https://gotoken.cc/home
affiliate: https://gotoken.cc/home
models:
  - gpt-5-codex
  - gpt-5
priceNote_zh: 订阅 / 30 天，6 档：Mini $10 · Lite $20 · Plus $40 · Pro $60（推荐）· Max $100；周套餐 Pro Weekly $15 / 7d
priceNote_en: Subscription / 30 days, 6 tiers · Mini $10 · Lite $20 · Plus $40 · Pro $60 (recommended) · Max $100 · Pro Weekly $15 / 7d
short_zh: 订阅式 OpenAI Codex 多账号路由服务。三档 30 天套餐，按日 / 月配额双限制使用量，含实时用量追踪。
short_en: Subscription-based multi-account routing for OpenAI Codex. Three 30-day tiers with daily and monthly quota caps, plus real-time usage tracking.
tags: [codex-cli, codex, gpt-5, subscription]
status: active
billing: subscription
contact: "QQ 群: qm.qq.com/q/EkLffk7k7m"
prices_zh:
  GPT: $10–100 / 30 天（6 档套餐，每日 $15–150 配额）
prices_en:
  GPT: $10–100 / 30 days (6 tiers, daily $15–150 quota)
---

## 套餐（抓自 `/api/billing/storefront/catalog` 公开接口）

| 套餐 | 价格 | 周期 | 日配额 | 月 / 总配额 | 备注 |
|---|---:|---|---:|---:|---|
| Codex Mini | $10 | 30 天 | $15 | $450 | 入门 |
| Codex Lite | $20 | 30 天 | $30 | $900 | 个人开发 |
| Codex Plus | $40 | 30 天 | $60 | $1800 | 加量 |
| **Codex Pro** | **$60** | 30 天 | $90 | $2700 | **推荐**，团队 / 轻量商用 |
| Codex Max | $100 | 30 天 | $150 | $4500 | 大用量 |
| Codex Pro Weekly | $15 | 7 天 | $90 | $2700 | 周套餐 |

另有按余额充值产品 `$20 余额包`（直充 $20 等额信用）。**邀请返利 5%**（公开 referral program）。

## 接入方式

- 登录 https://gotoken.cc/login 后在控制台获取 base URL 与 API key
- 协议：OpenAI 兼容（Codex 客户端协议）
- 目标客户端：Codex CLI（OpenAI 官方 codex），亦兼容其他 OpenAI 协议客户端

## 计费方式

订阅制，30 天为一个周期；按账户日 / 月配额双重限制；不支持差价升级套餐（除 Codex Pro 含 credit rollover 外）。
