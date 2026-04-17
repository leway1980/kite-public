import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';

const aiNewsStories: Story[] = [
	{
		id: 's0000001-0000-4000-8000-000000000001',
		cluster_number: 1,
		unique_domains: 6,
		number_of_titles: 14,
		category: 'AI 動態',
		title: 'OpenAI 推出教育版 GPT 方案，對學術機構大幅降價',
		short_summary:
			'OpenAI 在 4 月中旬宣布推出專為 K-12 與高等教育機構設計的 ChatGPT Edu Plus 方案，每位學生授權價格較企業版降低約 60%，並內建教師儀表板、抄襲風險提示與資料留存在區域伺服器等功能。首批試辦名單涵蓋美、英、日、台等 12 國共 380 所學校。',
		emoji: '🎓',
		did_you_know:
			'OpenAI 表示教育版的對話內容預設不會用於訓練模型，且學生帳號無法匯出到外部平台，這是該公司首次在使用者協議層級提供此類隔離。',
		talking_points: [
			'ChatGPT Edu Plus 單席定價從原本的 USD 25/月降到 USD 10/月，教師席仍為 USD 25/月。',
			'內建「教師檢視模式」可查看學生與模型的互動摘要，但不能看原文。',
			'台灣有 3 所大學、11 所高中進入首波試辦名單，由教育部資科司協調資料在地化。',
			'競爭對手 Anthropic 與 Google 傳出也將在 Q2 跟進類似教育方案。',
		],
		quote: '我們希望讓教師成為 AI 課堂的駕駛員，而不是旁觀者。',
		quote_author: 'Sam Altman',
		quote_attribution: 'OpenAI 執行長，於 4 月 15 日線上記者會',
		quote_source_url: 'https://example.com/openai/edu-plus-announcement',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '教育科技業者認為此舉將快速壓縮中小型 AI 教學平台的毛利空間。',
				sources: [
					{ name: 'EdSurge', url: 'https://example.com/edsurge/edu-plus-analysis' },
					{ name: 'The Hechinger Report', url: 'https://example.com/hechinger/openai-pricing' },
				],
			},
			{
				text: '部分學者擔憂降價將降低學校導入門檻，但配套投資仍不足。',
				sources: [{ name: 'Times Higher Education', url: 'https://example.com/the/ai-literacy' }],
			},
			{
				text: '家長團體普遍支持資料在地化條款。',
				sources: [{ name: '親子天下', url: 'https://example.com/parenting/openai-tw' }],
			},
		],
		timeline: [
			{ date: '2026-04-10', date_iso: '2026-04-10', content: 'OpenAI 內部文件外流，顯示教育版方案已進入最終測試。' },
			{ date: '2026-04-15', date_iso: '2026-04-15', content: 'OpenAI 正式發表 ChatGPT Edu Plus。' },
		],
		primary_image: {
			url: 'https://placehold.co/600x400?text=OpenAI+Edu+Plus',
			caption: 'ChatGPT Edu Plus 教師儀表板示意圖',
			credit: 'OpenAI 新聞室',
		},
		articles: [
			{ title: 'OpenAI launches ChatGPT Edu Plus with steep discounts for schools', link: 'https://example.com/openai/edu-plus-launch', domain: 'openai.com', date: '2026-04-15' },
			{ title: '台灣 3 所大學入選 ChatGPT 教育版首波試辦', link: 'https://example.com/tw-news/chatgpt-edu-trial', domain: 'udn.com', date: '2026-04-16' },
			{ title: 'What ChatGPT Edu Plus means for K-12 classrooms', link: 'https://example.com/edsurge/edu-plus-k12', domain: 'edsurge.com', date: '2026-04-16' },
		],
		domains: [
			{ name: 'openai.com' },
			{ name: 'edsurge.com' },
			{ name: 'udn.com' },
			{ name: 'hechingerreport.org' },
		],
	},
	{
		id: 's0000001-0000-4000-8000-000000000002',
		cluster_number: 2,
		unique_domains: 5,
		number_of_titles: 9,
		category: 'AI 動態',
		title: 'Anthropic 發表 Claude 4.8，主打「長文本教材摘要」與教師工作流整合',
		short_summary:
			'Anthropic 於 4 月 14 日推出 Claude 4.8，主打 2M token 上下文窗口與針對教材文件格式（PDF、PPTX、LaTeX）的原生理解能力，並與 Canvas、Google Classroom 推出官方外掛。',
		emoji: '🧠',
		did_you_know:
			'Claude 4.8 在針對台灣高中國文範文的閱讀測驗中，繁體中文作答準確率較 4.7 版提升 8.3 個百分點。',
		talking_points: [
			'上下文窗口擴大到 2M tokens，可一次處理整學期的教科書。',
			'官方 Canvas 外掛提供「批註模式」與「提問模式」兩種互動方式。',
			'Anthropic 公布多語種 MMLU-Edu 新基準，Claude 4.8 在繁體中文組拿下 89.1 分。',
			'價格方面，教育折扣維持 30%，新增「學區授權」選項。',
		],
		quote: '教師要的不是更聰明的模型，而是能被他們掌控的模型。',
		quote_author: 'Dario Amodei',
		quote_attribution: 'Anthropic 共同創辦人，於 Claude 4.8 發表會',
		quote_source_url: 'https://example.com/anthropic/claude-4-8-keynote',
		quote_source_domain: 'anthropic.com',
		perspectives: [
			{
				text: '教師社群普遍肯定 Canvas 整合能省下批改時間。',
				sources: [{ name: 'EdSurge', url: 'https://example.com/edsurge/claude-canvas' }],
			},
			{
				text: 'AI 安全研究者指出 2M 上下文窗口會帶來新的提示注入風險。',
				sources: [
					{ name: "Simon Willison's Weblog", url: 'https://example.com/simonw/claude-48-injection' },
					{ name: 'The Register', url: 'https://example.com/theregister/claude-48-risks' },
				],
			},
		],
		timeline: [
			{ date: '2026-04-14', date_iso: '2026-04-14', content: 'Anthropic 發表 Claude 4.8 並同步開放 API。' },
			{ date: '2026-04-17', date_iso: '2026-04-17', content: 'Canvas 與 Google Classroom 官方外掛上架。' },
		],
		primary_image: {
			url: 'https://placehold.co/600x400?text=Claude+4.8',
			caption: 'Claude 4.8 Canvas 外掛批註模式示意',
			credit: 'Anthropic',
		},
		articles: [
			{ title: 'Claude 4.8 announced with 2M context and Canvas integration', link: 'https://example.com/anthropic/claude-4-8', domain: 'anthropic.com', date: '2026-04-14' },
			{ title: 'How teachers are testing Claude 4.8 in real classrooms', link: 'https://example.com/edsurge/claude-48-classroom', domain: 'edsurge.com', date: '2026-04-16' },
		],
		domains: [
			{ name: 'anthropic.com' },
			{ name: 'edsurge.com' },
			{ name: 'theregister.com' },
		],
	},
];

const aiEduStories: Story[] = [
	{
		id: 's0000002-0000-4000-8000-000000000001',
		cluster_number: 1,
		unique_domains: 5,
		number_of_titles: 8,
		category: 'AI × 教育',
		title: '史丹佛大學公布「AI 助教」兩年追蹤研究：學生成績平均提升 12%，但寫作能力下滑',
		short_summary:
			'史丹佛教育研究院於 4 月 16 日發表針對北加州 24 所高中、共 3,800 名學生的兩年追蹤研究，顯示使用 AI 助教輔助作業的學生在數學與科學科目平均成績提升 12%，但英文寫作的獨立構思能力評分下降 9%。',
		emoji: '📊',
		did_you_know:
			'該研究是第一份橫跨完整兩個學年、將 AI 使用時數與個別學科分別交叉分析的大規模現場實驗。',
		talking_points: [
			'數理科成績明顯提升來自 AI 擅長拆解題目步驟與即時提供反饋。',
			'英文寫作下滑集中在「初稿構思」階段。',
			'研究者建議把 AI 使用切成「腳手架」與「生成」兩種模式。',
			'家長回饋顯示孩子在家作業時間平均減少 35 分鐘。',
		],
		quote: 'AI 不是作弊工具，但也不是萬用學習夥伴，它只是一種需要被教導如何使用的新媒介。',
		quote_author: 'Linda Chen',
		quote_attribution: '史丹佛教育研究院副院長，於研究發表會',
		quote_source_url: 'https://example.com/stanford-ed/ai-tutor-study',
		quote_source_domain: 'ed.stanford.edu',
		perspectives: [
			{
				text: '教師工會認為研究結果支持他們長期主張：AI 導入必須搭配教師培訓。',
				sources: [{ name: 'EdWeek', url: 'https://example.com/edweek/stanford-ai-response' }],
			},
			{
				text: 'EdTech 業者強調長期使用後的「AI 素養曲線」可能讓寫作能力回升。',
				sources: [
					{ name: 'EdSurge', url: 'https://example.com/edsurge/ai-literacy-curve' },
					{ name: 'TechCrunch', url: 'https://example.com/techcrunch/edtech-response' },
				],
			},
			{
				text: '台灣教育學者呼籲國教院啟動類似追蹤研究。',
				sources: [{ name: '聯合新聞網', url: 'https://example.com/udn/naer-ai-study' }],
			},
		],
		timeline: [
			{ date: '2024-03', date_iso: '2024-03-01', content: '研究計畫啟動。' },
			{ date: '2026-04-16', date_iso: '2026-04-16', content: '史丹佛公布完整兩年追蹤結果。' },
		],
		primary_image: {
			url: 'https://placehold.co/600x400?text=Stanford+Study',
			caption: '史丹佛研究：AI 助教對各科成績影響分布圖',
			credit: '史丹佛教育研究院',
		},
		articles: [
			{ title: 'Two-year study shows AI tutors boost STEM, hurt writing', link: 'https://example.com/stanford-ed/ai-study-release', domain: 'ed.stanford.edu', date: '2026-04-16' },
			{ title: "Teachers react to Stanford's sweeping AI tutor research", link: 'https://example.com/edweek/teacher-reaction', domain: 'edweek.org', date: '2026-04-17' },
			{ title: '史丹佛研究：AI 助教讓數理進步但寫作退步', link: 'https://example.com/udn/stanford-study-tw', domain: 'udn.com', date: '2026-04-17' },
		],
		domains: [
			{ name: 'ed.stanford.edu' },
			{ name: 'edweek.org' },
			{ name: 'edsurge.com' },
			{ name: 'udn.com' },
		],
	},
	{
		id: 's0000002-0000-4000-8000-000000000002',
		cluster_number: 2,
		unique_domains: 4,
		number_of_titles: 6,
		category: 'AI × 教育',
		title: '聯合國教科文組織發表《校園 AI 使用指引 2026》，首度納入「學生 AI 申訴權」',
		short_summary:
			'UNESCO 在 4 月 13 日更新《校園 AI 使用指引》，新版本新增「學生 AI 申訴權」條款——若學生對 AI 自動判分、分班建議有異議，學校必須在 7 天內提供人工覆核。',
		emoji: '🌍',
		did_you_know:
			'這是聯合國層級文件第一次將「演算法決策可申訴」寫進教育建議。',
		talking_points: [
			'學生 AI 申訴權：對 AI 的判分、分班、紀律建議有異議須 7 天內人工覆核。',
			'透明度條款：學校必須公告採用的 AI 系統名稱、版本與提供者。',
			'資料最小化：禁止將未成年學生的行為資料用於模型訓練。',
			'指引非強制性，但世界銀行教育貸款將把遵循情況納入審查。',
		],
		quote: '沒有申訴權的演算法，不該進入任何一間教室。',
		quote_author: 'Stefania Giannini',
		quote_attribution: 'UNESCO 教育助理總幹事，於指引發表記者會',
		quote_source_url: 'https://example.com/unesco/ai-guideline-2026',
		quote_source_domain: 'unesco.org',
		perspectives: [
			{
				text: '人權組織肯定申訴權條款。',
				sources: [{ name: 'Human Rights Watch', url: 'https://example.com/hrw/unesco-ai-guideline' }],
			},
			{
				text: '部分國家教育部擔憂 7 天覆核在資源有限的偏鄉學校不可行。',
				sources: [
					{ name: 'Times Higher Education', url: 'https://example.com/the/unesco-feasibility' },
					{ name: 'The Hechinger Report', url: 'https://example.com/hechinger/unesco-funding' },
				],
			},
		],
		timeline: [
			{ date: '2023-09', date_iso: '2023-09-01', content: 'UNESCO 發表第一版《校園 AI 使用指引》。' },
			{ date: '2026-04-13', date_iso: '2026-04-13', content: '2026 更新版發表。' },
		],
		primary_image: {
			url: 'https://placehold.co/600x400?text=UNESCO+AI+Guideline',
			caption: 'UNESCO《校園 AI 使用指引 2026》封面',
			credit: 'UNESCO',
		},
		articles: [
			{ title: 'UNESCO updates school AI guidelines with student appeal rights', link: 'https://example.com/unesco/press-ai-2026', domain: 'unesco.org', date: '2026-04-13' },
			{ title: 'Why the new UNESCO AI rules matter for classrooms worldwide', link: 'https://example.com/the/unesco-analysis', domain: 'timeshighereducation.com', date: '2026-04-14' },
		],
		domains: [
			{ name: 'unesco.org' },
			{ name: 'timeshighereducation.com' },
			{ name: 'hechingerreport.org' },
		],
	},
];

const twEduStories: Story[] = [
	{
		id: 's0000003-0000-4000-8000-000000000001',
		cluster_number: 1,
		unique_domains: 5,
		number_of_titles: 11,
		category: '台灣教育政策',
		title: '教育部公布高中「AI 輔助教學」試辦學校名單，全國 42 校入列',
		short_summary:
			'教育部於 4 月 15 日公告 114 學年度高中 AI 輔助教學試辦計畫名單，全國共 42 校入選，將獲得每校 180 萬元教具補助與兩年師資培訓。',
		emoji: '🏫',
		did_you_know:
			'42 所入選學校中有 9 所位於非六都縣市，是為了避免 AI 教學資源過度集中都會區而設計的地區平衡配額。',
		talking_points: [
			'每校補助 180 萬元，可用於購置 AI 教學平台席次、教師共備時數費與硬體升級。',
			'試辦聚焦國、英、數三科形成性評量，不含總結性評量與學測模擬。',
			'計畫要求每校設置「AI 素養專責教師」。',
			'家長同意書為必備文件，學生可選擇退出但不影響成績。',
		],
		quote: '我們要試的不是 AI 能不能教，而是台灣的老師能不能在使用 AI 的同時守住教育的初衷。',
		quote_author: '鄭英耀',
		quote_attribution: '教育部長，於政策發布會',
		quote_source_url: 'https://example.com/edu/ai-trial-announcement',
		quote_source_domain: 'edu.tw',
		perspectives: [
			{
				text: '全國教師工會總聯合會肯定補助規模，但要求同步公布資安與個資規範。',
				sources: [{ name: '全國教師工會總聯合會', url: 'https://example.com/nftu/ai-trial-response' }],
			},
			{
				text: '家長團體擔憂學習資料流向國外雲端，要求資料留台。',
				sources: [
					{ name: '親子天下', url: 'https://example.com/parenting/ai-data-residency' },
					{ name: '人本教育基金會', url: 'https://example.com/hef/ai-trial-concerns' },
				],
			},
			{
				text: '未入選學校校長聯名反映遴選標準不夠透明。',
				sources: [{ name: '聯合新聞網', url: 'https://example.com/udn/ai-trial-transparency' }],
			},
		],
		timeline: [
			{ date: '2026-02-20', date_iso: '2026-02-20', content: '教育部發布試辦計畫徵件公告。' },
			{ date: '2026-04-15', date_iso: '2026-04-15', content: '教育部公布 42 校入選名單。' },
		],
		primary_image: {
			url: 'https://placehold.co/600x400?text=MOE+AI+Trial',
			caption: '教育部 AI 輔助教學試辦學校地區分布圖',
			credit: '教育部國教署',
		},
		articles: [
			{ title: '教育部公告高中 AI 輔助教學試辦 42 校', link: 'https://example.com/edu/ai-school-list', domain: 'edu.tw', date: '2026-04-15' },
			{ title: 'AI 進入教室！42 所高中雀屏中選，家長師怎麼看？', link: 'https://example.com/parenting/ai-school-trial', domain: 'parenting.com.tw', date: '2026-04-16' },
			{ title: '未選上的學校喊冤：遴選標準到底是什麼？', link: 'https://example.com/udn/ai-trial-fairness', domain: 'udn.com', date: '2026-04-17' },
		],
		domains: [
			{ name: 'edu.tw' },
			{ name: 'parenting.com.tw' },
			{ name: 'udn.com' },
			{ name: 'ltn.com.tw' },
		],
	},
	{
		id: 's0000003-0000-4000-8000-000000000002',
		cluster_number: 2,
		unique_domains: 4,
		number_of_titles: 7,
		category: '台灣教育政策',
		title: '國教院啟動 12 年國教課綱第二次微調，將「AI 素養」納入核心素養',
		short_summary:
			'國家教育研究院於 4 月 14 日公告啟動 12 年國教課綱第二次微調案，預計在國中、高中階段新增「AI 素養」作為核心素養項目。',
		emoji: '📚',
		did_you_know:
			'若本次微調通過，台灣將成為亞洲第一個把「AI 素養」明確寫進 K-12 核心素養的國家。',
		talking_points: [
			'AI 素養擬定義為三層能力：工具操作、批判判讀、倫理與風險評估。',
			'資訊科技領域增設「生成式 AI 原理」單元。',
			'科技領域修訂後將納入 AI 專題實作。',
			'國教院公開徵求意見至 5 月底。',
		],
		quote: '課綱不會追逐每一個技術流行，但我們不能讓下一代成為 AI 時代的文盲。',
		quote_author: '林從一',
		quote_attribution: '國家教育研究院院長，於微調案記者會',
		quote_source_url: 'https://example.com/naer/curriculum-ai',
		quote_source_domain: 'naer.edu.tw',
		perspectives: [
			{
				text: '高中資訊科教師反映現行師資缺口已逾 1,800 人。',
				sources: [{ name: '中華民國資訊科學教育學會', url: 'https://example.com/aise/teacher-shortage' }],
			},
			{
				text: '人文社會學者呼籲微調案應同步強化語文與哲學訓練。',
				sources: [
					{ name: '報導者', url: 'https://example.com/twreporter/ai-humanities' },
					{ name: '天下雜誌', url: 'https://example.com/cw/ai-curriculum-view' },
				],
			},
		],
		timeline: [
			{ date: '2025-09', date_iso: '2025-09-01', content: '108 課綱實施滿 7 年。' },
			{ date: '2026-04-14', date_iso: '2026-04-14', content: '國教院公告微調案啟動。' },
		],
		primary_image: {
			url: 'https://placehold.co/600x400?text=Curriculum+AI',
			caption: '12 年國教課綱 AI 素養架構示意圖',
			credit: '國家教育研究院',
		},
		articles: [
			{ title: '國教院啟動課綱微調，AI 素養擬列核心素養', link: 'https://example.com/naer/curriculum-release', domain: 'naer.edu.tw', date: '2026-04-14' },
			{ title: 'AI 素養入課綱 家長憂師資跟不上', link: 'https://example.com/ltn/ai-curriculum-parents', domain: 'ltn.com.tw', date: '2026-04-15' },
			{ title: '把 AI 素養寫進 12 年國教，台灣準備好了嗎？', link: 'https://example.com/twreporter/ai-ready', domain: 'twreporter.org', date: '2026-04-16' },
		],
		domains: [
			{ name: 'naer.edu.tw' },
			{ name: 'ltn.com.tw' },
			{ name: 'twreporter.org' },
			{ name: 'cw.com.tw' },
		],
	},
];

export const MOCK_STORIES_BY_CATEGORY: Record<string, Story[]> = {
	[AI_NEWS_UUID]: aiNewsStories,
	[AI_EDU_UUID]: aiEduStories,
	[TW_EDU_UUID]: twEduStories,
};

export function collectDomains(stories: Story[]): Domain[] {
	const seen = new Map<string, Domain>();
	for (const s of stories) {
		if (!s.domains) continue;
		for (const d of s.domains) {
			if (!seen.has(d.name)) seen.set(d.name, d);
		}
	}
	return Array.from(seen.values());
}
