<script lang="ts">
import { s } from '$lib/client/localization.svelte';
import type { Article, LocalizerFunction } from '$lib/types';
import { getCitedArticlesForText } from '$lib/utils/citationAggregator';
import { type CitationMapping, replaceWithNumberedCitations } from '$lib/utils/citationContext';
import { parseStructuredText } from '$lib/utils/textParsing';
import CitationText from './CitationText.svelte';
import SelectableText from './SelectableText.svelte';

// Props
interface Props {
	perspectives?: Array<{
		text: string;
		sources?: Array<{
			name: string;
			url: string;
		}>;
	}>;
	articles?: Article[];
	citationMapping?: CitationMapping;
	storyLocalizer?: LocalizerFunction;
	flashcardMode?: boolean;
	selectedWords?: Set<string>;
	selectedPhrases?: Map<string, { phrase: string; sections: Set<string> }>;
	shouldJiggle?: boolean;
	onWordClick?: (word: string, section?: string) => void;
}

let {
	perspectives = [],
	articles = [],
	citationMapping,
	storyLocalizer = s,
	flashcardMode = false,
	selectedWords = new Set(),
	shouldJiggle = false,
	onWordClick,
}: Props = $props();

// Convert citations in perspectives if mapping is available
const displayPerspectives = $derived.by(() => {
	if (!citationMapping) return perspectives;
	return perspectives.map((p) => ({
		...p,
		text: replaceWithNumberedCitations(p.text, citationMapping),
	}));
});

// Helper function to detect if text contains citations
function hasCitations(text: string): boolean {
	if (!text) return false;
	// Match citations like [domain#position], [common], [1], [2], etc.
	const citationPattern = /\[([^\]]+)\]/g;
	return citationPattern.test(text);
}

function sectionTitle(): string {
	const localized = storyLocalizer("section.perspectives");
	return localized && localized !== "section.perspectives" ? localized : "不同觀點";
}
</script>

<section class="mt-6">
  <h3 class="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
    {sectionTitle()}
  </h3>
  <div
    class="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3"
    role="list"
    aria-label={storyLocalizer("section.perspectives") || "不同觀點"}
  >
    {#each displayPerspectives as perspective}
      {@const parsed = parseStructuredText(perspective.text)}
      <div
        class="min-w-0 rounded-lg border border-gray-200 border-l-4 border-l-[#4B6BFB] bg-white p-5 shadow-sm dark:border-gray-700 dark:border-l-[#7EA2FF] dark:bg-gray-800/95"
        role="listitem"
      >
        {#if parsed.hasTitle}
          {@const titleCitations = getCitedArticlesForText(
            parsed.title!,
            citationMapping,
            articles,
          )}
          {@const contentCitations = getCitedArticlesForText(
            parsed.content,
            citationMapping,
            articles,
          )}
          <p class="mb-3 border-b border-gray-200 pb-2 text-base font-bold leading-relaxed text-gray-950 dark:border-gray-700 dark:text-white break-words" dir="auto">
            {#if flashcardMode}
              <SelectableText
                text={parsed.title!}
                {flashcardMode}
                {selectedWords}
                {shouldJiggle}
                {onWordClick}
                section="perspectives"
              />
            {:else}
              <CitationText
                text={parsed.title!}
                showFavicons={false}
                showNumbers={false}
                inline={true}
                articles={titleCitations.citedArticles}
                {citationMapping}
                {storyLocalizer}
              />
            {/if}
          </p>
          <p class="mb-3 text-base leading-8 text-gray-700 dark:text-gray-200" dir="auto">
            {#if flashcardMode}
              <SelectableText
                text={parsed.content}
                {flashcardMode}
                {selectedWords}
                {shouldJiggle}
                {onWordClick}
                section="perspectives"
              />
            {:else}
              <CitationText
                text={parsed.content}
                showFavicons={false}
                showNumbers={false}
                inline={true}
                articles={contentCitations.citedArticles}
                {citationMapping}
                {storyLocalizer}
              />
            {/if}
          </p>
        {:else}
          {@const contentCitations = getCitedArticlesForText(
            parsed.content,
            citationMapping,
            articles,
          )}
          <p class="mb-3 text-base leading-8 text-gray-700 dark:text-gray-200" dir="auto">
            {#if flashcardMode}
              <SelectableText
                text={parsed.content}
                {flashcardMode}
                {selectedWords}
                {shouldJiggle}
                {onWordClick}
                section="perspectives"
              />
            {:else}
              <CitationText
                text={parsed.content}
                showFavicons={false}
                showNumbers={false}
                inline={true}
                articles={contentCitations.citedArticles}
                {citationMapping}
                {storyLocalizer}
              />
            {/if}
          </p>
        {/if}

        {#if perspective.sources && perspective.sources.length > 0 && !hasCitations(perspective.text)}
          <div class="mt-4 flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-300">
            {#each perspective.sources as source, idx}
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 font-semibold text-[#183FDC] hover:border-blue-300 hover:bg-blue-100 dark:border-blue-900/70 dark:bg-blue-950/40 dark:text-[#8DB0FF] dark:hover:border-blue-700"
                dir="auto"
              >
                {source.name}
              </a>
              {#if idx < perspective.sources.length - 1}
                <span class="sr-only">, </span>
              {/if}
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>
