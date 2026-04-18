import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';
const AI_APPLICATIONS_UUID = 'c0000005-0000-4000-8000-000000000005';

// ─── Stories synthesized 2026-04-18 by pipeline (auto-generated) ───

const aiNewsStories: Story[] = [
	{
		id: 'aiNews-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'Google 推出 7 項 AI 旅遊功能，整合 Search 與 Pixel 裝置',
		short_summary: 'Google 在 2026 年夏季前推出 7 項旅遊輔助 AI 功能，涵蓋 Search、Google Maps 及 Pixel 手機。台灣教師應關注這波整合：AI 不再只是回答問題的工具，而是能主動規劃行程、辨識地標、即時翻譯功能的全場景助理。這種「AI 嵌入日常工作流」的趨勢，正是未來課堂數位工具設計的縮影，值得跨科教師共同討論 AI 輔助決策的倫理與便利的邊界。',
		emoji: '✈️',
		did_you_know: 'Google Search 的 AI Overview 功能每月已有超過 15 億使用者，旅遊規劃是使用率最高的情境之一。台灣每年出境旅客超過 1,300 萬次，AI 輔助旅遊工具的普及速度將遠快於課室想像。',
		talking_points: [
			'Google 一次推出 7 項 AI 旅遊功能，橫跨 Search、Maps、Pixel 手機三大平台',
			'功能包含 AI 行程規劃、農夫市集即時資訊、地標辨識等日常旅遊場景',
			'Pixel 手機整合 AI 功能可離線使用，反映 On-device AI 技術成熟',
			'這類 AI 輔助旅遊工具正從「搜尋引擎」轉型為「決策代理人」，對資訊素養教育有重要啟示',
		],
		quote: '7 ways to travel smarter this summer, with help from Google',
		quote_attribution: 'Google Blog, 2026-04-17',
		quote_source_url: 'https://blog.google/products-and-platforms/products/search/summer-travel-tips-google-search-ai/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '從科技整合角度：Google 將 AI 深度嵌入旅遊全流程，代表 AI 助理從「工具」演進為「全程陪伴的規劃夥伴」。教師可藉此討論 AI 如何改變人類做決定的方式，以及學生如何培養「與 AI 協作」而非「依賴 AI」的能力。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/products-and-platforms/products/search/summer-travel-tips-google-search-ai/',
					},
				],
			},
		],
		articles: [
			{
				title: '7 ways to travel smarter this summer, with help from Google',
				link: 'https://blog.google/products-and-platforms/products/search/summer-travel-tips-google-search-ai/',
				domain: 'blog.google',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
	{
		id: 'aiNews-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'Chrome 推出 AI Mode：瀏覽器內建 AI 對話取代傳統搜尋',
		short_summary: 'Google 在 Chrome 瀏覽器中正式推出 AI Mode，使用者可直接在瀏覽器側邊欄與 AI 對話，無需跳轉至搜尋頁面。台灣高中教師應了解：學生的資訊查找行為正在發生根本性改變——從「關鍵字搜尋→點擊連結→閱讀網頁」的流程，變成「直接向 AI 問答→取得整合摘要」。這影響學生的資訊素養培養、引用來源習慣，以及批判性思考的訓練方式，需要在課堂中重新設計資訊查核的練習活動。',
		emoji: '🌐',
		did_you_know: 'Chrome 全球用戶超過 30 億，是目前市佔率最高的瀏覽器。AI Mode 若全面推出，將是瀏覽器史上最大的互動模式轉型，影響規模遠超過搜尋引擎從目錄分類轉向關鍵字搜尋的那次變革。',
		talking_points: [
			'Chrome AI Mode 讓使用者直接在瀏覽器側邊欄進行 AI 對話，不需要開新分頁',
			'功能整合 Google 的 Gemini 模型，能讀取當前網頁內容並提供摘要與問答',
			'這是瀏覽器互動模式的根本性轉變：從「搜尋導航」變為「對話式探索」',
			'教師需思考：當 AI 成為預設的資訊中介，學生的閱讀理解與來源查核能力如何維持？',
		],
		quote: 'A new way to explore the web with AI Mode in Chrome',
		quote_attribution: 'Google Blog, 2026-04-16',
		quote_source_url: 'https://blog.google/products-and-platforms/products/search/ai-mode-chrome/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '從資訊素養角度：AI Mode 讓 Chrome 成為「AI 優先」的資訊入口，學生未來查資料時可能跳過原始網頁。教師需重新設計「查找資訊→評估來源→引用論證」的教學活動，確保 AI 輔助不會削弱學生獨立驗證資訊的能力。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/products-and-platforms/products/search/ai-mode-chrome/',
					},
				],
			},
		],
		articles: [
			{
				title: 'A new way to explore the web with AI Mode in Chrome',
				link: 'https://blog.google/products-and-platforms/products/search/ai-mode-chrome/',
				domain: 'blog.google',
				date: '2026-04-16',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
	{
		id: 'aiNews-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'Gemini 推出「個人化智慧」功能，AI 圖像生成結合個人記憶',
		short_summary: 'Google Gemini 應用程式新增「Personal Intelligence」功能，可根據使用者的個人照片、喜好與記憶，生成高度個人化的 AI 圖像。台灣教師值得關注的是：這類功能讓 AI 圖像生成從「輸入文字提示→生成圖片」，進化到「AI 了解你這個人→生成專屬內容」。在美術、國文、公民等課程中，這引發肖像權、個人資料使用授權以及 AI 創作著作權等重要議題，是跨科素養教育的好素材。',
		emoji: '🎨',
		did_you_know: 'Google 將這項功能命名為「Personal Intelligence」，強調 AI 將從「通用助理」演化為「認識你個人的私人助理」。這也讓人反思：當 AI 越來越「懂你」，我們對隱私的定義是否也需要隨之更新？',
		talking_points: [
			'Gemini Personal Intelligence 可讀取使用者個人照片與記憶，生成個人化圖像',
			'功能在 Gemini App 中推出，目前限定部分地區使用者',
			'個人化 AI 圖像生成引發肖像權與個人資料保護的法律問題',
			'教師可運用此案例教導學生「AI 使用條款授權範圍」與「個資同意的意義」',
		],
		quote: 'New ways to create personalized images in the Gemini app',
		quote_attribution: 'Google Blog, 2026-04-16',
		quote_source_url: 'https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence-nano-banana/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '從 AI 倫理角度：Personal Intelligence 讓 AI 圖像生成與個人記憶深度綁定，強化了「AI 是個人延伸」的感知。這在教育現場引發值得討論的問題：學生把自己的照片上傳給 AI 服務，授權範圍是什麼？這些資料如何被使用？需要在課堂中做數位公民教育。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence-nano-banana/',
					},
				],
			},
		],
		articles: [
			{
				title: 'New ways to create personalized images in the Gemini app',
				link: 'https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence-nano-banana/',
				domain: 'blog.google',
				date: '2026-04-16',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
	{
		id: 'aiNews-4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'OpenAI Codex 全面升級：加入電腦操作、圖像生成與記憶功能',
		short_summary: 'OpenAI 發布 Codex 應用程式重大更新，新增「電腦使用（computer use）」、程式內瀏覽、圖像生成、記憶功能及外掛程式支援，目標是加速開發者工作流程。台灣教師可從此案例觀察 AI 工具演化的速度：Codex 從最初的程式碼補全工具，已演化成能「看螢幕、操控電腦、記住你的偏好、搜尋網路」的全能 AI 工作代理。資訊科技教師應思考如何在課程中教學生「與 AI 協作開發」而非「被 AI 取代」。',
		emoji: '💻',
		did_you_know: 'OpenAI Codex 最早在 2021 年推出，是 GitHub Copilot 的底層模型。短短五年內，它從「自動完成程式碼片段」進化到「能自主操控電腦完成複雜任務」，這樣的演化速度是軟體工具史上罕見的。',
		talking_points: [
			'Codex 更新版支援 computer use（AI 直接操控電腦執行任務），突破純文字交互限制',
			'新增程式內瀏覽、圖像生成、跨任務記憶，讓 Codex 成為全功能 AI 開發代理',
			'外掛程式支援讓第三方工具能與 Codex 整合，形成開放生態系',
			'資訊科技教師應注意：AI 開發工具的能力邊界正在快速擴張，課程內容需持續更新',
		],
		quote: 'The updated Codex app adds computer use, in-app browsing, image generation, memory, and plugins to accelerate developer workflows.',
		quote_attribution: 'OpenAI, 2026-04-16',
		quote_source_url: 'https://openai.com/index/codex-for-almost-everything',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '從職涯教育角度：Codex 的快速進化讓「AI 是開發者的工具」變成「AI 本身就是開發者」的問題愈來愈真實。資訊科教師需帶學生思考：未來軟體工程師的核心競爭力是什麼？如何透過學習讓自己不被 AI 代理取代？',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/codex-for-almost-everything',
					},
				],
			},
		],
		articles: [
			{
				title: 'Codex for (almost) everything',
				link: 'https://openai.com/index/codex-for-almost-everything',
				domain: 'openai.com',
				date: '2026-04-16',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: 'aiNews-5',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'OpenAI 發布 GPT-Rosalind：專攻藥物開發與基因體學的 AI 推理模型',
		short_summary: 'OpenAI 推出生命科學專用 AI 模型 GPT-Rosalind，聚焦藥物研發、基因體分析、蛋白質推理與科學研究流程加速。台灣高中生物與化學教師應特別關注：這是 AI 從通用語言模型轉向「領域專業推理模型」的重要里程碑。GPT-Rosalind 以諾貝爾化學獎得主 Rosalind Franklin 命名，象徵 AI 在基礎科學研究的定位提升。教師可藉此介紹 AI 如何改變科學研究的工作流程，並引導學生思考未來生命科學家需具備哪些 AI 協作能力。',
		emoji: '🧬',
		did_you_know: 'GPT-Rosalind 以 DNA 雙螺旋結構共同發現者 Rosalind Franklin 命名。Franklin 在世時的貢獻長期遭到忽視，直到 2023 年才因為 CRISPR 相關研究獲得追授肯定。以她命名 AI 模型，某種程度是對科學史性別不平等的一種補償象徵。',
		talking_points: [
			'GPT-Rosalind 是 OpenAI 首個專為生命科學設計的前沿推理模型',
			'主要應用領域：藥物研發加速、基因體分析、蛋白質結構推理',
			'反映 AI 趨勢：從通用大模型轉向「垂直領域專業模型」的分化',
			'台灣生技製藥產業可望成為重要應用場景，帶動相關科系就業轉型',
			'教師可引導討論：AI 加速藥物研發是否會影響臨床試驗倫理與藥物安全標準？',
		],
		quote: 'OpenAI introduces GPT-Rosalind, a frontier reasoning model built to accelerate drug discovery, genomics analysis, protein reasoning, and scientific research workflows.',
		quote_attribution: 'OpenAI, 2026-04-16',
		quote_source_url: 'https://openai.com/index/introducing-gpt-rosalind',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '從科學教育角度：GPT-Rosalind 的出現意味著未來的生命科學研究者必須具備 AI 工具應用能力。高中生物課若能介紹 AI 蛋白質折疊（AlphaFold）、AI 基因分析的概念，將大幅提升學生進入相關領域的競爭力。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/introducing-gpt-rosalind',
					},
				],
			},
		],
		articles: [
			{
				title: 'Introducing GPT-Rosalind for life sciences research',
				link: 'https://openai.com/index/introducing-gpt-rosalind',
				domain: 'openai.com',
				date: '2026-04-16',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: 'aiNews-6',
		cluster_number: 6,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'OpenAI 投入 1000 萬美元 API 補助，推動 AI 資安防禦生態系',
		short_summary: 'OpenAI 宣布多家頂尖資安廠商加入「Trusted Access for Cyber」計畫，並提供 1000 萬美元 API 使用補助，讓這些公司使用 GPT-5.4-Cyber 模型強化全球網路防禦。台灣教師（尤其是資訊科技與公民教育教師）應關注：此舉代表 AI 正從「攻擊工具」轉型為「防禦基礎建設」的關鍵一環。台灣面臨頻繁的網路攻擊，AI 資安工具的普及對台灣的資安教育與人才培育有直接的政策意義。',
		emoji: '🛡️',
		did_you_know: 'OpenAI 這次提供的是 GPT-5.4-Cyber，一個針對資安情境微調的特製版本，並非市售的通用 GPT-5 模型。這反映 AI 公司對不同高風險領域（資安、醫療、法律）分別開發專用版本的趨勢，以降低濫用風險並提升專業可信度。',
		talking_points: [
			'OpenAI 提供 1000 萬美元 API 補助給加入 Trusted Access for Cyber 的資安廠商',
			'使用的模型為 GPT-5.4-Cyber，資安場景微調版，非市售通用模型',
			'多家業界領導資安公司與企業加入此計畫，形成 AI 資安聯盟',
			'台灣每年面臨數百萬次政府與關鍵基礎設施的網路攻擊，AI 防禦工具的重要性不言而喻',
			'資訊科教師可以此案例討論：AI 在網路攻防的雙重角色——既可被用來攻擊，也是防禦的利器',
		],
		quote: 'Leading security firms and enterprises join OpenAI\'s Trusted Access for Cyber, using GPT-5.4-Cyber and $10M in API grants to strengthen global cyber defense.',
		quote_attribution: 'OpenAI, 2026-04-16',
		quote_source_url: 'https://openai.com/index/accelerating-cyber-defense-ecosystem',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '從資安教育角度：OpenAI 以補助方式推動 AI 資安工具普及，代表 AI 防禦已從學術研究走向商業化。台灣資訊教育應加入「AI 資安意識」模組，讓學生了解 AI 如何識別威脅、自動回應攻擊，以及未來資安人才需要哪些 AI 協作技能。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/accelerating-cyber-defense-ecosystem',
					},
				],
			},
		],
		articles: [
			{
				title: 'Accelerating the cyber defense ecosystem that protects us all',
				link: 'https://openai.com/index/accelerating-cyber-defense-ecosystem',
				domain: 'openai.com',
				date: '2026-04-16',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: 'aiNews-7',
		cluster_number: 7,
		unique_domains: 2,
		number_of_titles: 2,
		category: 'AI 動態',
		title: 'Google 發布 Gemini 3.1 Flash TTS：AI 語音合成支援精細情緒標記',
		short_summary: 'Google DeepMind 推出 Gemini 3.1 Flash TTS（文字轉語音）模型，引入「細粒度音訊標記（granular audio tags）」技術，讓開發者能精確控制 AI 語音的語調、情緒、節奏與停頓。台灣教師應重視這項技術的教育應用潛力：高品質 AI 語音合成可用於製作課程有聲書、多國語言聽力教材、朗讀輔助工具，尤其對有閱讀障礙或視力障礙的學生有顯著幫助。同時，「deepfake 語音」的偽造風險也值得在媒體素養課程中討論。',
		emoji: '🎙️',
		did_you_know: 'TTS（Text-to-Speech）技術存在已超過 50 年，最早的電腦語音合成系統可追溯到 1960 年代的 IBM。然而 Gemini 3.1 Flash TTS 能做到的細緻情緒控制，是過去技術完全無法實現的——這背後是深度學習對人類語音韻律的深度模仿。',
		talking_points: [
			'Gemini 3.1 Flash TTS 引入細粒度音訊標記，可精確控制語調、情緒、停頓等語音特徵',
			'同時由 Google DeepMind 與 Google Blog 雙管道發布，顯示 Google 高度重視此技術',
			'教育應用：可製作情緒豐富的有聲教材、多語言朗讀工具，輔助聽障或閱讀障礙學生',
			'DeepFake 語音風險：高品質 AI 語音合成技術普及後，語音身分驗證與真偽辨別將成新課題',
		],
		quote: 'Our newest audio model introduces granular audio tags that give you precise control to direct AI speech for expressive audio generation.',
		quote_attribution: 'Google DeepMind, 2026-04-15',
		quote_source_url: 'https://deepmind.google/blog/gemini-3-1-flash-tts-the-next-generation-of-expressive-ai-speech/',
		quote_source_domain: 'deepmind.google',
		perspectives: [
			{
				text: '從教學工具角度：Gemini 3.1 Flash TTS 的情緒語音控制讓 AI 朗讀不再單調，教師可用來製作更生動的聽力教材，或讓不同語言學習情境有對應的語音風格。對特殊教育場景（如閱讀障礙、視障學生）的輔助潛力尤為值得探索。',
				sources: [
					{
						name: 'Google DeepMind',
						url: 'https://deepmind.google/blog/gemini-3-1-flash-tts-the-next-generation-of-expressive-ai-speech/',
					},
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-tts/',
					},
				],
			},
			{
				text: '從媒體素養角度：高品質 AI 語音合成技術讓聲音偽造的門檻大幅降低。教師應在課堂中討論：如何辨別 AI 生成的語音？語音身分驗證在未來的可靠性問題，以及學生應具備哪些媒體識讀技能？',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-tts/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-15',
				date_iso: '2026-04-15',
				content: 'Google DeepMind 與 Google Blog 同步發布 Gemini 3.1 Flash TTS 模型，宣布細粒度音訊標記技術',
			},
		],
		articles: [
			{
				title: 'Gemini 3.1 Flash TTS: the next generation of expressive AI speech',
				link: 'https://deepmind.google/blog/gemini-3-1-flash-tts-the-next-generation-of-expressive-ai-speech/',
				domain: 'deepmind.google',
				date: '2026-04-15',
			},
			{
				title: 'Gemini 3.1 Flash TTS: the next generation of expressive AI speech',
				link: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-tts/',
				domain: 'blog.google',
				date: '2026-04-15',
			},
		],
		domains: [
			{ name: 'deepmind.google' },
			{ name: 'blog.google' },
		],
	},
	{
		id: 'aiNews-8',
		cluster_number: 8,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'OpenAI Agents SDK 重大進化：原生沙箱執行讓 AI 代理更安全',
		short_summary: 'OpenAI 更新 Agents SDK，新增原生沙箱執行環境（native sandbox execution）與模型原生執行架構（model-native harness），讓開發者能建立更安全、能長時間執行的 AI 代理，支援跨檔案與跨工具操作。台灣教師（尤其是資訊科技與專題研究類教師）應關注：「AI 代理（AI Agent）」正成為 2026 年 AI 的核心形態——它不只是回答問題，而是能自主規劃並完成複雜任務的系統。理解 Agent 架構，有助於學生未來在職場中有效運用 AI 工具。',
		emoji: '🤖',
		did_you_know: '「沙箱（sandbox）」在電腦科學中是一種隔離執行環境，防止程式對外部系統造成意外影響。Agents SDK 加入原生沙箱，代表 OpenAI 正積極解決 AI 代理在執行真實任務時的安全性問題——這也是目前業界最關注的 AI 落地挑戰之一。',
		talking_points: [
			'Agents SDK 新增 native sandbox execution，AI 代理可在隔離環境中安全執行程式碼',
			'model-native harness 架構讓不同模型能更無縫地在代理框架中協作',
			'支援長時間執行任務（long-running agents），突破過去 AI 只能短暫互動的限制',
			'跨檔案、跨工具操作能力大幅提升，AI 代理可處理更複雜的現實工作流程',
			'資訊教師可引導學生討論：能自主執行任務的 AI 代理，帶來哪些新的倫理與控制問題？',
		],
		quote: 'OpenAI updates the Agents SDK with native sandbox execution and a model-native harness, helping developers build secure, long-running agents across files and tools.',
		quote_attribution: 'OpenAI, 2026-04-15',
		quote_source_url: 'https://openai.com/index/the-next-evolution-of-the-agents-sdk',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '從 AI 工具教育角度：AI Agent 已從概念進入實際開發工具生態，學生未來在職場中將大量接觸「代理式 AI」。資訊教育應加入 Agent 基礎概念課程，讓學生理解任務分解、工具呼叫、安全邊界等核心設計思維，而不只是學會用聊天介面。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/the-next-evolution-of-the-agents-sdk',
					},
				],
			},
		],
		articles: [
			{
				title: 'The next evolution of the Agents SDK',
				link: 'https://openai.com/index/the-next-evolution-of-the-agents-sdk',
				domain: 'openai.com',
				date: '2026-04-15',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
];

const aiApplicationsStories: Story[] = [
	{
		id: 'aiApplications-1',
		cluster_number: 1,
		unique_domains: 21,
		number_of_titles: 21,
		category: 'AI 熱門應用',
		title: '本週 AI 應用熱點：ChatGPT 整合 Excel、Claude 新設計語言、本地 LLM 生態崛起',
		short_summary: '本週 AI 應用市場動態密集：ChatGPT 推出 Excel 整合版本讓試算表直接對話；Anthropic 發布 Claude Design 設計語言，引發社群熱議（943 點讚）；本地 LLM 生態系的討論再次興起，有開發者主張停用 Ollama 改用更輕量方案；Claude 4.7 新版 tokenizer 成本分析獲 573 人關注。台灣教師可關注 ChatGPT for Excel 的直接教學應用潛力，以及 Claude 身分驗證政策對教育機構帳號管理的影響。',
		emoji: '🚀',
		did_you_know: '這週 Hacker News 上最受 AI 討論者關注的不是新模型發布，而是「Claude 4.7 tokenizer 成本分析」（573 點）和「Claude Design」（943 點）。這反映出 AI 開發社群的成熟度：大家開始關注成本效益和產品體驗，而非只追逐性能數字。',
		talking_points: [
			'ChatGPT for Excel 正式推出，使用者可直接在試算表中使用 ChatGPT 分析數據與公式',
			'Anthropic 發布 Claude Design 設計語言系統，獲 Hacker News 社群 943 點關注',
			'Claude 4.7 新版 tokenizer 成本分析顯示計費方式改變，開發者需重新估算 API 費用',
			'Claude.ai 與 API 發生服務中斷事件，引發 243 名用戶回報反映服務穩定性問題',
			'Anthropic 宣布部分情況下 Claude 需要進行身分驗證，教育機構需了解帳號管理政策',
		],
		quote: 'Claude Design',
		quote_attribution: 'Anthropic, 2026-04-17',
		quote_source_url: 'https://www.anthropic.com/news/claude-design-anthropic-labs',
		quote_source_domain: 'anthropic.com',
		perspectives: [
			{
				text: '從教學工具角度：ChatGPT for Excel 讓 AI 資料分析進入試算表，這對高中統計、經濟、社會學科有直接應用潛力。教師可設計讓學生用 AI 分析真實數據集的學習任務，培養數據思維與 AI 協作能力。',
				sources: [
					{
						name: 'ChatGPT (OpenAI)',
						url: 'https://chatgpt.com/apps/spreadsheets/',
					},
					{
						name: 'Anthropic',
						url: 'https://www.anthropic.com/news/claude-design-anthropic-labs',
					},
				],
			},
			{
				text: '從 AI 生態角度：simonwillison.net 的文章分析指出，本地執行的 Qwen3.6 模型在部分創意任務上表現優於 Claude Opus 4.7，顯示開源模型與商業模型的差距正在縮小。教師關注開源 LLM 的發展，有助於理解未來 AI 工具的多元化選擇。',
				sources: [
					{
						name: 'simonwillison.net',
						url: 'https://simonwillison.net/2026/Apr/16/qwen-beats-opus/',
					},
					{
						name: 'sleepingrobots.com',
						url: 'https://sleepingrobots.com/dreams/stop-using-ollama/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-15',
				date_iso: '2026-04-15',
				content: 'ChatGPT for Excel 正式上線；Claude 發生服務中斷事件；Anthropic 宣布身分驗證政策',
			},
			{
				date: '2026-04-16',
				date_iso: '2026-04-16',
				content: '開發者發布本地 LLM 生態與 Ollama 替代方案討論；simonwillison 分析 Qwen 模型表現',
			},
			{
				date: '2026-04-17',
				date_iso: '2026-04-17',
				content: 'Anthropic 發布 Claude Design 設計語言；Claude 4.7 tokenizer 成本分析獲社群高度關注',
			},
		],
		articles: [
			{
				title: 'Claude Design',
				link: 'https://www.anthropic.com/news/claude-design-anthropic-labs',
				domain: 'anthropic.com',
				date: '2026-04-17',
			},
			{
				title: 'Measuring Claude 4.7\'s tokenizer costs',
				link: 'https://www.claudecodecamp.com/p/i-measured-claude-4-7-s-new-tokenizer-here-s-what-it-costs-you',
				domain: 'claudecodecamp.com',
				date: '2026-04-17',
			},
			{
				title: 'ChatGPT for Excel',
				link: 'https://chatgpt.com/apps/spreadsheets/',
				domain: 'chatgpt.com',
				date: '2026-04-15',
			},
			{
				title: 'Elevated errors on Claude.ai, API, Claude Code',
				link: 'https://claudestatus.com/',
				domain: 'claudestatus.com',
				date: '2026-04-15',
			},
			{
				title: 'Claude may require identity verification in some cases',
				link: 'https://support.claude.com/en/articles/14328960-identity-verification-on-claude',
				domain: 'support.claude.com',
				date: '2026-04-15',
			},
			{
				title: 'Qwen3.6-35B-A3B on my laptop drew me a better pelican than Claude Opus 4.7',
				link: 'https://simonwillison.net/2026/Apr/16/qwen-beats-opus/',
				domain: 'simonwillison.net',
				date: '2026-04-16',
			},
			{
				title: 'The local LLM ecosystem doesn\'t need Ollama',
				link: 'https://sleepingrobots.com/dreams/stop-using-ollama/',
				domain: 'sleepingrobots.com',
				date: '2026-04-16',
			},
		],
		domains: [
			{ name: 'anthropic.com' },
			{ name: 'claudecodecamp.com' },
			{ name: 'chatgpt.com' },
			{ name: 'claudestatus.com' },
			{ name: 'support.claude.com' },
			{ name: 'simonwillison.net' },
			{ name: 'sleepingrobots.com' },
		],
	},
];

const aiEduStories: Story[] = [
	{
		id: 'aiEducation-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: 'MIT 頒發 Edgerton 教學獎：EECS 副教授以 AI 語言研究獲肯定',
		short_summary: 'MIT 宣布 2026 年 Edgerton Award 得主，其中電機工程與電腦科學（EECS）系副教授因在 AI 語言理解研究與教學上的傑出貢獻獲獎。Edgerton Award 是 MIT 頒給傑出年輕教師的重要獎項，強調研究、教學與服務的三重卓越。台灣高中教師可從這則新聞中獲得啟發：頂尖大學如何評估「AI 時代優秀教師」的標準？整合前沿研究與教學的能力，正成為全球教育體系中不可忽視的競爭力指標。',
		emoji: '🏆',
		did_you_know: 'MIT Edgerton Award 以 Harold \'Doc\' Edgerton 命名，他是高速攝影技術的發明者，也是 MIT 歷史上最受愛戴的教師之一。Edgerton 不只是傑出研究者，更以「讓複雜科學變得有趣易懂」聞名，這個精神與今日 AI 教育推廣的核心理念不謀而合。',
		talking_points: [
			'2026 年 MIT Edgerton Award 頒給 EECS 系副教授（AI 語言研究領域）與化學系副教授',
			'Edgerton Award 評量標準：研究卓越、教學創新、服務貢獻三項並重',
			'獲獎教師的 AI 語言研究直接應用於自然語言處理與教學技術開發',
			'此案例展示：AI 研究者同時具備優秀教學能力，是全球頂尖大學培養的複合型人才典範',
		],
		quote: 'The associate professors of EECS and chemistry, respectively, are honored for exceptional contributions to teaching, research, and service at MIT.',
		quote_attribution: 'MIT News, 2026-04-17',
		quote_source_url: 'https://news.mit.edu/2026/jacob-andreas-brett-mcguire-edgerton-award-winners-0417',
		quote_source_domain: 'news.mit.edu',
		perspectives: [
			{
				text: '從教師專業發展角度：MIT 對優秀教師的定義整合了研究、教學與服務，而非單獨強調其中一項。這對台灣高中教師有借鑑意義：AI 時代的優秀教師，應能持續追蹤領域前沿（研究素養）、設計有效學習經驗（教學能力）、並積極貢獻社群（服務精神）。',
				sources: [
					{
						name: 'MIT News',
						url: 'https://news.mit.edu/2026/jacob-andreas-brett-mcguire-edgerton-award-winners-0417',
					},
				],
			},
		],
		articles: [
			{
				title: 'Jacob Andreas and Brett McGuire named Edgerton Award winners',
				link: 'https://news.mit.edu/2026/jacob-andreas-brett-mcguire-edgerton-award-winners-0417',
				domain: 'news.mit.edu',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'news.mit.edu' },
		],
	},
	{
		id: 'aiEducation-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: 'MIT 校友創辦 OpenProtein.AI：將 AI 蛋白質設計工具開源給全球研究者',
		short_summary: '兩位 MIT 畢業的創業者共同創辦 OpenProtein.AI，將 AI 蛋白質工程設計工具以開源方式提供給全球生物學研究者，降低進入門檻。台灣生物教師與自然科教師應特別關注：這類平台讓高中生與大學生也能接觸到原本只有頂尖實驗室才有的 AI 生物工具，為台灣下一代的生命科學人才打開了新的學習路徑。教師可引導有興趣的學生進一步探索 AI 在蛋白質工程（如 AlphaFold）的應用，連結課綱中的生物科技與基因工程單元。',
		emoji: '🔬',
		did_you_know: '蛋白質折疊問題被認為是生命科學領域五十年來最難解的問題之一。2020 年 DeepMind 的 AlphaFold2 一舉解決這個問題，震驚科學界，並在 2024 年讓相關研究者獲得諾貝爾化學獎。OpenProtein.AI 正是站在這個科學突破的肩膀上，將工具平民化。',
		talking_points: [
			'OpenProtein.AI 由 MIT 校友創辦（Tristan Bepler 博士 \'20 與前 MIT 教授 Tim Lu 博士 \'07）',
			'提供開源 AI 蛋白質工程模型，讓無法負擔昂貴計算資源的研究者也能使用',
			'工具民主化的意義：頂尖實驗室的 AI 能力正在以開源方式向全球擴散',
			'台灣生技產業可直接受益，高中生物課可用此案例介紹 AI 驅動的生命科學研究趨勢',
		],
		quote: 'Founded by MIT alumni, OpenProtein.AI offers researchers open-source models and other tools for protein engineering.',
		quote_attribution: 'MIT News, 2026-04-17',
		quote_source_url: 'https://news.mit.edu/2026/bringing-ai-driven-protein-design-tools-everywhere-0417',
		quote_source_domain: 'news.mit.edu',
		perspectives: [
			{
				text: '從科學教育角度：OpenProtein.AI 的開源模式讓 AI 生命科學工具不再是大型研究機構的專利。高中生物教師可以介紹此平台作為「AI 民主化」的教育案例，並引導學生思考：開源科學工具如何加速全球知識擴散？台灣學生能如何參與這波浪潮？',
				sources: [
					{
						name: 'MIT News',
						url: 'https://news.mit.edu/2026/bringing-ai-driven-protein-design-tools-everywhere-0417',
					},
				],
			},
		],
		articles: [
			{
				title: 'Bringing AI-driven protein-design tools to biologists everywhere',
				link: 'https://news.mit.edu/2026/bringing-ai-driven-protein-design-tools-everywhere-0417',
				domain: 'news.mit.edu',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'news.mit.edu' },
		],
	},
	{
		id: 'aiEducation-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: '《自然》期刊：AI 擴散模型挑戰「內隱聯結測驗」的測量機制',
		short_summary: '發表於《Nature Human Behaviour》的大規模研究，使用「競速擴散模型（racing diffusion models）」分析超過 115,601 份內隱聯結測驗（IAT）資料，橫跨 39 個主題，對這一廣泛使用的心理測量工具的背後機制提出挑戰。台灣教師（尤其是社會、公民、心理學相關課程教師）應了解：IAT 是許多「無意識偏見」教育訓練的基礎工具；若其測量機制受到質疑，相關教育課程與人才評估方法都需要重新檢視，體現了 AI 分析工具對社會科學研究帶來的深遠影響。',
		emoji: '🧠',
		did_you_know: '內隱聯結測驗（IAT）自 1998 年發明以來，已有超過 2000 萬次線上測試紀錄，被廣泛用於測量對種族、性別、年齡的無意識偏見。許多企業的「多元共融（D&I）」培訓課程都以 IAT 為基礎，但其科學有效性長期存在爭議。這篇分析 11 萬份資料的大規模研究，是迄今最有力的機制質疑。',
		talking_points: [
			'研究分析 115,601 份 IAT（內隱聯結測驗）資料，樣本橫跨 39 個不同主題',
			'使用 racing diffusion models 這一 AI 分析方法，對 IAT 的測量機制提出系統性質疑',
			'發表在《Nature Human Behaviour》，屬於高影響力同儕審查期刊',
			'對教育意義：許多多元包容訓練課程以 IAT 為基礎，若機制有問題，需重新評估課程效度',
			'這個研究本身也展示了 AI 大規模數據分析如何推動社會科學研究方法論的進步',
		],
		quote: 'Using racing diffusion models to analyse 115,601 implicit association tests across 39 topics',
		quote_attribution: 'Nature Human Behaviour, 2026-04-16',
		quote_source_url: 'https://www.nature.com/articles/s41562-026-02439-y',
		quote_source_domain: 'nature.com',
		perspectives: [
			{
				text: '從研究方法論角度：這篇論文展示了 AI 分析技術（racing diffusion models）如何讓以前無法處理的超大規模心理學資料成為可能。教師可藉此告訴學生：AI 不只是應用工具，更是推進科學研究的方法論創新——這是 AI 時代研究者必須具備的新視野。',
				sources: [
					{
						name: 'Nature Human Behaviour',
						url: 'https://www.nature.com/articles/s41562-026-02439-y',
					},
				],
			},
		],
		articles: [
			{
				title: 'Challenging the mechanism for the implicit association test',
				link: 'https://www.nature.com/articles/s41562-026-02439-y',
				domain: 'nature.com',
				date: '2026-04-16',
			},
		],
		domains: [
			{ name: 'nature.com' },
		],
	},
];

const aiClassroomStories: Story[] = [];

const twEduStories: Story[] = [];

export const MOCK_STORIES_BY_CATEGORY: Record<string, Story[]> = {
	[AI_NEWS_UUID]: aiNewsStories,
	[AI_APPLICATIONS_UUID]: aiApplicationsStories,
	[AI_EDU_UUID]: aiEduStories,
	[AI_CLASSROOM_UUID]: aiClassroomStories,
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
