# Story Source Index

Use this file when another repo needs to trace an AI 教育週報 story back to
its public sources.

## Primary Lookup File

Read:

```text
static/data/story-source-index.latest.json
```

Search by any of these terms:

- `story-source-index`
- `sources`
- `citations`
- `evidence`
- `來源`
- `引用`
- story title
- story id
- category id
- source title
- source domain

Each story entry contains:

- `story_id`
- `title`
- `category_id`
- `category_name`
- `editorial_lens`
- `search_terms`
- `sources`

Each source has `roles`, `title`, `url`, `domain`, and `date`.

Role meanings:

- `article`: original clustered article source
- `perspective`: source linked from a perspective paragraph
- `quote`: quote source

## Fallback

If the JSON index is missing, read:

```text
src/lib/server/mockData/stories.ts
```

For each Story, source fields are:

- `articles`
- `perspectives.sources`
- `quote_source_url`

Category metadata is in:

```text
src/lib/server/mockData/categories.ts
```

Batch date and totals are in:

```text
src/lib/server/mockData/batch.ts
```

## Boundary

Only use public weekly content. Do not read private or ignored working files
such as `data/facebook_groups`, local handoff files, or agent scratch folders.

## Regeneration

After `stories.ts` changes, regenerate the lookup JSON from this repo root:

```bash
node scripts/build-story-source-index.mjs
```
