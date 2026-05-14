# AI 教育週報公開前端

這個 repo 是公開週報站的前端與發布資料。公開內容由
`src/lib/server/mockData/` 與 `static/data/` 提供。

## 跨 repo 追來源

如果使用者要深掘某篇週報、找標題背後引用來源、或查報導出處，優先讀：

```text
STORY_SOURCE_INDEX.md
static/data/story-source-index.latest.json
```

搜尋關鍵字可用：

- story title
- story id
- category id
- source domain
- `story-source-index`
- `sources`
- `citations`
- `evidence`
- `來源`
- `引用`
- `出處`

JSON 裡每篇 story 的 `sources` 會列出 `article`、`perspective`、`quote`
三種來源角色。

## Fallback

若來源索引尚未產生，fallback 讀：

```text
src/lib/server/mockData/stories.ts
src/lib/server/mockData/categories.ts
src/lib/server/mockData/batch.ts
```

Story 的來源欄位是 `articles`、`perspectives.sources`、`quote_source_url`。

## 邊界

只讀公開週報資料。不要讀 `.claude/`、本機 handoff、私有工作檔或被 ignore
的暫存資料。
