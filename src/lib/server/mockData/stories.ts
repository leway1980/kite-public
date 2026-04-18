import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';
const AI_APPLICATIONS_UUID = 'c0000005-0000-4000-8000-000000000005';

// ─── Stories synthesized 2026-04-18 by pipeline (auto-generated) ───

const aiNewsStories: Story[] = [
	{
		id: 'aiNews-3',
		cluster_number: 3,
		unique_domains: 2,
		number_of_titles: 2,
		category: 'AI 動態',
		title: 'Gemini 整合 Google Photos 個人化生圖，Nano Banana 2 模型登場',
		short_summary: 'Google 的 Gemini app 推出「個人智慧」（Personal Intelligence）功能，可從使用者的 Google Photos 抓取個人照片，結合全新 Nano Banana 2 影像生成模型，產出客製化的 AI 生圖結果。這代表 AI 助理正從「通用工具」轉向「個人化代理」的新階段。對台灣高中教師而言，當 AI 能讀取個人資料來生成內容，隱私邊界與教室使用政策的討論就更加迫切，學生個資保護的數位素養課程需要同步更新。',
		emoji: '🖼️',
		did_you_know: 'Nano Banana 是 Google 為 Gemini 開發的輕量化影像生成模型系列，版本 2 在個人化影像任務上有顯著提升。此功能涉及個人資料授權，使用者需明確同意後 Gemini 才能存取相片庫，代表 Google 在個人化與隱私之間採取的明確「同意優先」設計哲學。',
		talking_points: [
			'Google 推出「Personal Intelligence」功能，允許 Gemini 存取 Google Photos 個人照片庫生成客製圖像',
			'搭配全新 Nano Banana 2 模型，可依個人照片風格生成高品質客製化圖像',
			'功能需使用者明確同意才可啟用，採「同意優先」設計避免隱私爭議',
			'The Verge 與 blog.google 雙平台同步報導，顯示 Google 積極向主流媒體推廣',
			'教師需思考：AI 助理結合個人資料的「個人化生圖」是否應在校園使用，值得訂定明確規範',
		],
		quote: 'Google\'s Personal Intelligence feature, which lets Gemini pull data from apps like Google Photos to offer responses tailored to you, can now use that data and its Nano Banana 2 image model to create images.',
		quote_attribution: 'The Verge, 2026-04-16',
		quote_source_url: 'https://www.theverge.com/tech/913202/gemini-personal-intelligence-images-nano-banana',
		quote_source_domain: 'theverge.com',
		perspectives: [
			{
				text: '從科技媒體角度（The Verge）：強調 Personal Intelligence 功能讓 Gemini 能讀取個人 Photos，創造「因人而異」的生圖體驗，視為 AI 個人化的重要里程碑——用戶不再需要手動上傳參考圖，AI 直接記住你的視覺風格。',
				sources: [
					{
						name: 'The Verge',
						url: 'https://www.theverge.com/tech/913202/gemini-personal-intelligence-images-nano-banana',
					},
				],
			},
			{
				text: '從 Google 官方角度（blog.google）：著重展示功能範例圖，強調 Nano Banana 2 的影像品質與個人化應用情境，定位為 Gemini app 的日常創作工具，吸引消費者日常使用。',
				sources: [
					{
						name: 'blog.google',
						url: 'https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence-nano-banana/',
					},
				],
			},
			{
				text: '從教育隱私政策角度：AI 存取個人相片庫進行生成，代表個資使用範疇擴大。台灣校園若使用 Gemini，需評估學生個資被模型讀取的風險，並在課程中討論「個人化」與「隱私」之間的取捨。',
				sources: [
					{
						name: 'blog.google',
						url: 'https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence-nano-banana/',
					},
				],
			},
		],
		articles: [
			{
				title: 'Gemini can now pull from Google Photos to generate personalized images',
				link: 'https://www.theverge.com/tech/913202/gemini-personal-intelligence-images-nano-banana',
				domain: 'theverge.com',
				date: '2026-04-16',
			},
			{
				title: 'New ways to create personalized images in the Gemini app',
				link: 'https://blog.google/innovation-and-ai/products/gemini-app/personal-intelligence-nano-banana/',
				domain: 'blog.google',
				date: '2026-04-16',
			},
		],
		domains: [
			{ name: 'theverge.com' },
			{ name: 'blog.google' },
		],
	},
	{
		id: 'aiNews-7',
		cluster_number: 7,
		unique_domains: 2,
		number_of_titles: 2,
		category: 'AI 動態',
		title: 'Google 發布 Gemini 3.1 Flash TTS：細粒度音訊標籤精確控制 AI 語音表達',
		short_summary: 'Google DeepMind 與 Google 同步發布 Gemini 3.1 Flash TTS，這是新一代語音生成模型，引入「細粒度音訊標籤」（granular audio tags），讓開發者可精確控制語氣、停頓、語速等表達細節，使 AI 語音達到「導演級」的可控表達性。對台灣高中教師而言，高度擬真的 AI 語音將衝擊語言學習工具與有聲教材製作，更重要的是：辨別真人錄音與 AI 合成語音的能力，應成為媒體素養課程的新核心內容。',
		emoji: '🎙️',
		did_you_know: 'TTS（Text-to-Speech）技術近年突破最大瓶頸是「韻律自然度」。Gemini 3.1 Flash TTS 的 granular audio tags 讓使用者可以在文字中插入標籤，指示「這裡要用驚訝的語氣停頓 0.5 秒」，類似導演給演員的舞台指示——這在過去需要人工後製才能實現。',
		talking_points: [
			'Google DeepMind 發布 Gemini 3.1 Flash TTS，支援細粒度音訊標籤精確指定語音表達風格',
			'DeepMind 研究部門與 blog.google 同步發布，顯示此為 Google 跨部門重點推廣的模型',
			'「表達性語音生成」（expressive audio generation）讓 AI 配音技術門檻大幅降低',
			'教師可用於製作個人化有聲教材，但也需提防深偽語音（deepfake audio）在學生間的濫用',
			'語音辨別（真人 vs AI 合成）應成為台灣媒體素養課程的新必要內容',
		],
		quote: 'Our newest audio model introduces granular audio tags that give you precise control to direct AI speech for expressive audio generation.',
		quote_attribution: 'Google DeepMind, 2026-04-15',
		quote_source_url: 'https://deepmind.google/blog/gemini-3-1-flash-tts-the-next-generation-of-expressive-ai-speech/',
		quote_source_domain: 'deepmind.google',
		perspectives: [
			{
				text: '從技術研究角度（DeepMind）：強調 granular audio tags 是核心創新，讓語音生成從「輸入文字得到語音」進化為「可腳本化的表達性語音導演系統」，賦予開發者前所未有的細粒度控制權。',
				sources: [
					{
						name: 'Google DeepMind',
						url: 'https://deepmind.google/blog/gemini-3-1-flash-tts-the-next-generation-of-expressive-ai-speech/',
					},
				],
			},
			{
				text: '從產品推廣角度（blog.google）：著重展示 Gemini 3.1 Flash TTS 的品牌定位，與 Gemini 模型家族整合，吸引企業開發者將表達性 AI 語音嵌入語言學習、客服、教育等產品。',
				sources: [
					{
						name: 'blog.google',
						url: 'https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-flash-tts/',
					},
				],
			},
			{
				text: '從教育與媒體素養角度：表達性 AI 語音可大幅降低語言教材錄製成本，但也提高深偽語音辨別難度。台灣教師應思考如何在課程中加入「這段語音是否真人發音」的辨識訓練，將其納入數位素養架構。',
				sources: [
					{
						name: 'Google DeepMind',
						url: 'https://deepmind.google/blog/gemini-3-1-flash-tts-the-next-generation-of-expressive-ai-speech/',
					},
				],
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
		id: 'aiNews-5',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'OpenAI 發布 GPT-Rosalind：專為生命科學加速藥物開發與基因組學推理',
		short_summary: 'OpenAI 推出 GPT-Rosalind，這是專為生命科學研究設計的前沿推理模型，主打加速藥物開發、基因組學分析、蛋白質推理與科學研究工作流程。模型以現代生物學先驅 Rosalind Franklin 命名，彰顯 AI 在生命科學的戰略方向。台灣高中生物科教師應了解：AI 與生科研究的深度整合已不是未來式，學生未來進入相關領域時，AI 協作將是基本能力，課程應提早進行概念鋪陳。（單源權威）',
		emoji: '🧬',
		did_you_know: 'GPT-Rosalind 以 Rosalind Franklin（1920-1958）命名，她拍攝的 X 射線晶體學照片直接促成 DNA 雙螺旋結構的發現，但在當時未獲應有認可。OpenAI 以此命名，既是致敬，也隱含「讓被低估的科學智慧再次發揮作用」的寓意。',
		talking_points: [
			'OpenAI 推出 GPT-Rosalind，定位為生命科學領域的「前沿推理模型」（frontier reasoning model）',
			'主要應用場景：藥物開發、基因組學分析、蛋白質結構推理、科學研究工作流程自動化',
			'此模型代表 AI 公司從「通用模型」向「垂直領域專用模型」發展的加速趨勢',
			'台灣生技產業若採用此類工具，高中生物科課程與大學先修的準備方向將需調整',
			'模型以 Rosalind Franklin 命名，提供教師引導學生討論科學史與性別平權的切入點',
		],
		quote: 'OpenAI introduces GPT-Rosalind, a frontier reasoning model built to accelerate drug discovery, genomics analysis, protein reasoning, and scientific research workflows.',
		quote_attribution: 'OpenAI, 2026-04-16',
		quote_source_url: 'https://openai.com/index/introducing-gpt-rosalind',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '從 OpenAI 策略角度：GPT-Rosalind 代表從通用 AI 到生命科學垂直應用的策略轉向，將推理能力針對性地優化於蛋白質、基因組等科學推理任務，與 DeepMind AlphaFold 等工具形成競合關係。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/introducing-gpt-rosalind',
					},
				],
			},
			{
				text: '從教育政策角度：生命科學 AI 工具的普及，要求台灣高中生物課程思考如何讓學生理解「AI 輔助科學研究」的方式，而非僅學習傳統實驗方法——AI 協助解讀基因序列與蛋白質結構將成為未來生科人才的基本技能。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/introducing-gpt-rosalind',
					},
				],
			},
			{
				text: '從科學民主化角度：以科學先驅命名的 AI 模型固然有正面意義，但也引發討論：AI 生科工具是否真能讓更多研究者受益，或只是讓擁有高額 API 預算的大型機構更具競爭優勢？',
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
		title: 'OpenAI 啟動 1000 萬美元 API 補助，主要資安企業加入網路防禦生態系',
		short_summary: 'OpenAI 宣布「Trusted Access for Cyber」計畫，提供 1000 萬美元的 API 使用金給主要資安企業，讓其使用 GPT-5.4-Cyber 強化全球網路防禦能力。此舉代表 AI 公司開始將「AI 主動防禦」視為企業社會責任。對台灣高中資訊科技教師而言，AI 在網路安全領域的角色正從「威脅放大器」轉向「防禦工具」，AI 的雙用途本質（攻防兩端皆可用）值得納入資安倫理課程的討論框架。（單源權威）',
		emoji: '🛡️',
		did_you_know: 'GPT-5.4-Cyber 是 OpenAI 為資安任務特別調校的版本，針對漏洞偵測、惡意程式分析、威脅情報整合等資安工作流程優化。這是 AI 公司建立「AI for Security」垂直能力的明確訊號，也意味著資安人員未來需要同時具備傳統資安與 AI 提示工程的複合技能。',
		talking_points: [
			'OpenAI 提供 1000 萬美元 API 補助給資安企業，透過「Trusted Access for Cyber」計畫',
			'主要資安廠商和企業加入，使用專用的 GPT-5.4-Cyber 強化網路防禦',
			'此計畫定位 OpenAI 為「防禦性 AI 生態系的推動者」，不只是 AI 工具供應商',
			'台灣資訊科技課程可借此討論 AI 在防禦與攻擊兩端的雙重角色（dual-use AI）',
			'補助計畫模式也可啟發台灣教育部思考如何補助學校取得 AI 授權',
		],
		quote: 'Leading security firms and enterprises join OpenAI\'s Trusted Access for Cyber, using GPT-5.4-Cyber and $10M in API grants to strengthen global cyber defense.',
		quote_attribution: 'OpenAI, 2026-04-16',
		quote_source_url: 'https://openai.com/index/accelerating-cyber-defense-ecosystem',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '從 OpenAI 策略角度：資安是 AI 少數能明確展示「AI 是解決方案而非問題」的領域。此計畫讓 OpenAI 在政府與企業客戶面前建立「負責任 AI」形象，同時擴大 GPT-5.4-Cyber 的市場滲透率。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/accelerating-cyber-defense-ecosystem',
					},
				],
			},
			{
				text: '從資安教育角度：AI 資安工具的普及意味著未來資安人才需要同時理解 AI 模型運作與傳統網路安全知識。台灣高中資訊科技課程需要提早規劃這種跨域能力的培養路徑，而非等到大學才接觸。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/accelerating-cyber-defense-ecosystem',
					},
				],
			},
			{
				text: '從批判角度：AI 同樣可以用來發動更精密的網路攻擊（自動化 spear phishing、漏洞探索）。OpenAI 補助防禦端固然是好事，但 AI 雙用途困境未解——這正是資安倫理課的核心討論題材，教師可將此事件作為案例引導學生辯論。',
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
		id: 'aiNews-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'Google 在 Chrome 推出 AI Mode：瀏覽器內直接啟動 AI 問答式網頁探索',
		short_summary: 'Google 在 Chrome 瀏覽器內推出 AI Mode，讓使用者不需跳離網頁就能透過 AI 問答方式探索網路內容。這代表 AI 助理正從獨立 app 融合進瀏覽器的每一個角落，改變傳統「搜尋-點擊-閱讀」的網頁瀏覽模式。台灣高中教師應思考，當 AI 成為學生閱讀網頁的「中介層」，如何確保學生仍然具備直接閱讀原始資料、判斷資訊來源的批判閱讀能力。（單源權威）',
		emoji: '🌐',
		did_you_know: 'Chrome 的 AI Mode 是 Google「AI Overviews」策略的延伸。AI Overviews 在搜尋結果頁面顯示 AI 摘要；AI Mode 更進一步，可在任何網頁上直接啟動對話式 AI 探索，代表 Google 將整個瀏覽行為都納入 AI 輔助的範疇。',
		talking_points: [
			'Google 在 Chrome 瀏覽器推出 AI Mode，支援在任何網頁直接啟動 AI 問答式探索',
			'使用者可在瀏覽任何網頁時直接詢問 AI，無需跳轉至搜尋頁面',
			'此功能代表 AI 從「搜尋引擎」滲透到整個瀏覽行為，改變資訊取用模式',
			'教師需思考：學生使用 AI Mode 查資料時，如何維持閱讀原文、評估來源的批判能力？',
			'Chrome AI Mode 與 Edge Copilot 直接競爭，加速 AI 瀏覽器功能普及化',
		],
		quote: 'A new way to explore the web with AI Mode in Chrome',
		quote_attribution: 'blog.google, 2026-04-16',
		quote_source_url: 'https://blog.google/products-and-platforms/products/search/ai-mode-chrome/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '從 Google 官方角度：AI Mode 是 Google 將 AI 融入所有產品的系統性策略之一，目標是讓使用者「在任何地方都能得到 AI 協助」，強化 Chrome 在瀏覽器 AI 功能競賽中的市場地位。',
				sources: [
					{
						name: 'blog.google',
						url: 'https://blog.google/products-and-platforms/products/search/ai-mode-chrome/',
					},
				],
			},
			{
				text: '從教育使用角度：當學生在 Chrome 查資料時，AI Mode 會進一步過濾和重新表述資訊，學生可能從未接觸原始文章。這種「AI 中介」閱讀模式對批判思考和資訊素養教育提出新挑戰，需要在課程中明確因應。',
				sources: [
					{
						name: 'blog.google',
						url: 'https://blog.google/products-and-platforms/products/search/ai-mode-chrome/',
					},
				],
			},
			{
				text: '從資訊生態角度：AI Mode 進一步壓縮網頁流量——使用者若透過 AI 直接得到答案，原始來源網站的點擊率將繼續下降，對新聞媒體、教育內容平台的商業模式形成長期壓力。',
				sources: [
					{
						name: 'blog.google',
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
		id: 'aiNews-4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'OpenAI Codex app 升級：加入電腦操控、瀏覽器、圖像生成與記憶功能',
		short_summary: 'OpenAI 更新 macOS 與 Windows 版 Codex app，新增電腦操控（computer use）、應用內瀏覽、圖像生成、記憶功能與插件支援，讓開發者工作流程大幅整合。這標誌著「AI 編程助理」正演進為「全功能 AI 開發代理」。對台灣資訊科技教師而言，學生未來接觸的 AI 輔助程式開發工具將全面升級，課程設計需要提早思考「人機協作開發」的教學架構，以及哪些程式設計基礎知識在代理時代仍不可替代。（單源權威）',
		emoji: '💻',
		did_you_know: 'Codex 是 OpenAI 最早的程式碼生成模型（2021年），是 GitHub Copilot 的技術基礎。這次 app 升級是 Codex 從「程式碼補全工具」進化為「全功能開發代理平台」的重要里程碑，也是 OpenAI 與 GitHub Copilot、Cursor、Claude Code 等競品直接對決的關鍵動作。',
		talking_points: [
			'Codex app 新增 computer use（電腦操控）能力，可直接操作桌面環境執行開發任務',
			'新增應用內瀏覽（in-app browsing）、圖像生成、記憶（memory）與插件（plugins）',
			'同時支援 macOS 和 Windows，降低開發者使用門檻並擴大市場覆蓋',
			'AI 開發工具從「程式碼補全」升級為「全流程代理」，影響資訊課程的教學目標設定',
			'教師需重新思考：哪些程式設計基礎能力在 AI 代理普及後仍不可替代？',
		],
		quote: 'The updated Codex app for macOS and Windows adds computer use, in-app browsing, image generation, memory, and plugins to accelerate developer workflows.',
		quote_attribution: 'OpenAI, 2026-04-16',
		quote_source_url: 'https://openai.com/index/codex-for-almost-everything',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '從 OpenAI 官方角度：Codex app 的功能擴充代表 OpenAI 將開發者工具定位為「全能 AI 代理平台」，讓 Codex 從單一程式碼補全工具，轉型為可執行複雜多步驟開發任務的完整代理夥伴。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/codex-for-almost-everything',
					},
				],
			},
			{
				text: '從教育應用角度：當 AI 工具可以操控電腦、瀏覽網頁、生成圖像並記住使用偏好，「教學生如何寫程式」的定義需要更新——重點應轉向「如何有效描述需求、審查 AI 輸出、維護系統可靠性」等高階能力。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/codex-for-almost-everything',
					},
				],
			},
			{
				text: '從競爭格局角度：Codex app 的升級直接挑戰 GitHub Copilot、Cursor、Claude Code 等 AI 開發工具，加速市場整合。對教師選用哪套工具帶入課堂，也形成新的選擇壓力——功能越來越趨同，差異化越來越難以評估。',
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
		id: 'aiNews-8',
		cluster_number: 8,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'OpenAI Agents SDK 進化：原生沙盒執行與模型原生掛載，支援安全長時任務',
		short_summary: 'OpenAI 更新 Agents SDK，引入原生沙盒執行（native sandbox execution）與模型原生掛載（model-native harness），讓開發者可以構建跨檔案、跨工具的安全長時間運行代理。這是 AI 代理技術基礎設施的重要升級。台灣高中資訊科技教師應了解，AI 代理的安全執行框架正在成熟，「沙盒安全性」與「長時任務監控」是未來課程討論 AI 代理時不可迴避的核心概念。（單源權威）',
		emoji: '🤖',
		did_you_know: '「沙盒執行」（sandbox execution）在電腦科學中是指在隔離環境中執行程式碼，確保其無法影響宿主系統。OpenAI 將此技術引入 AI 代理，讓代理可以執行複雜程式碼但不會意外破壞生產環境——這是「AI 代理從概念走向可靠部署」的關鍵安全機制。',
		talking_points: [
			'Agents SDK 新增原生沙盒執行，讓 AI 代理可安全執行程式碼而不影響宿主環境',
			'模型原生掛載（model-native harness）讓不同模型可以更無縫協作完成複雜任務',
			'支援「長時間運行代理」（long-running agents），突破單次對話的任務長度限制',
			'跨檔案、跨工具的代理能力，讓 AI 能處理更複雜的多步驟工作流程',
			'AI 代理安全性框架的討論（沙盒、邊界、監控）應納入高中資訊科技 AI 倫理課程',
		],
		quote: 'OpenAI updates the Agents SDK with native sandbox execution and a model-native harness, helping developers build secure, long-running agents across files and tools.',
		quote_attribution: 'OpenAI, 2026-04-15',
		quote_source_url: 'https://openai.com/index/the-next-evolution-of-the-agents-sdk',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '從技術角度：Agents SDK 的沙盒與模型掛載升級，代表 OpenAI 正在標準化 AI 代理的部署基礎設施，讓 AI 代理從「實驗室概念」走向「生產環境可靠工具」的關鍵一步。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/the-next-evolution-of-the-agents-sdk',
					},
				],
			},
			{
				text: '從教育科技角度：隨著 AI 代理工具成熟，學校資訊系統可能開始評估引入 AI 代理協助行政工作。了解沙盒安全性與代理運行邊界，將成為學校 IT 管理人員的新必備知識。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/the-next-evolution-of-the-agents-sdk',
					},
				],
			},
			{
				text: '從 AI 安全角度：「長時間運行代理」雖功能強大，但帶來監控挑戰——AI 代理在無人監督下長時間執行任務時，如何確保其行為符合預期？這是 AI 對齊研究（AI alignment）的核心問題，也是高中課程可以討論的入門案例。',
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
		id: 'aiApplications-5',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		title: 'Anthropic 發布 Claude Opus 4.7：最強推理與代理編程旗艦，HN 1937 點熱議',
		short_summary: 'Anthropic 正式發布 Claude Opus 4.7，在 Hacker News 獲得 1937 點與 1423 則討論，是近期 AI 模型發布中最受開發者社群關注的一次。Opus 4.7 定位為 Anthropic 最強推理與代理編程模型。台灣高中教師在思考引入 AI 輔助教學時，了解主流模型的實際能力與開發者社群評價，有助於做出更有根據的工具選擇，而非只依賴廠商的官方規格數據。（單源權威）',
		emoji: '🧠',
		did_you_know: 'Hacker News 上 1937 點的討論熱度使 Claude Opus 4.7 發布文進入「HN 史上最熱門 AI 模型發布」前列。1423 則留言的討論量，相當於一個小型研討會的知識密度——社群實測反饋往往比官方 benchmark 更能反映真實使用場景。',
		talking_points: [
			'Claude Opus 4.7 在 Hacker News 獲得 1937 點與 1423 則留言，顯示極高的開發者關注度',
			'定位為 Anthropic「最具能力的推理與代理編程模型」（most capable model for reasoning and agentic coding）',
			'代理編程能力強調多步驟複雜任務的自主完成能力，是 AI 編程工具的重要進展',
			'開發者社群討論重點：實際測試表現、定價合理性、與 GPT-5 / Gemini Ultra 的比較',
			'教師選擇 AI 工具時，開發者社群的實測討論比官方規格更具實際參考價值',
		],
		quote: 'Claude Opus 4.7 — Claude\'s most capable model for reasoning and agentic coding.',
		quote_attribution: 'Anthropic, 2026-04-16',
		quote_source_url: 'https://www.anthropic.com/news/claude-opus-4-7',
		quote_source_domain: 'anthropic.com',
		perspectives: [
			{
				text: '從 Anthropic 官方角度：Opus 4.7 是 Anthropic 推理能力的旗艦展示，重點強調代理編程場景的超越性能，代表 Anthropic 在「AI 代理」賽道的重要戰略佈局，直接挑戰 OpenAI 的代理能力主導地位。',
				sources: [
					{
						name: 'Anthropic',
						url: 'https://www.anthropic.com/news/claude-opus-4-7',
					},
				],
			},
			{
				text: '從開發者社群角度：1423 則 HN 留言顯示開發者對 Opus 4.7 的真實期待與疑問——社群討論涵蓋定價合理性、上下文視窗長度、與競品的實際差距，提供比官方 benchmark 更貼近實際使用的評估資訊。',
				sources: [
					{
						name: 'Anthropic',
						url: 'https://www.anthropic.com/news/claude-opus-4-7',
					},
				],
			},
			{
				text: '從教育工具選擇角度：Opus 4.7 的高社群熱度代表它將快速被整合進開源工具和教育平台，進入教室的可能性很高。教師在選用 AI 工具時，追蹤這類社群討論有助於提早了解工具的真實優缺點。',
				sources: [
					{
						name: 'Anthropic',
						url: 'https://www.anthropic.com/news/claude-opus-4-7',
					},
				],
			},
		],
		articles: [
			{
				title: 'Claude Opus 4.7',
				link: 'https://www.anthropic.com/news/claude-opus-4-7',
				domain: 'anthropic.com',
				date: '2026-04-16',
			},
		],
		domains: [
			{ name: 'anthropic.com' },
		],
	},
	{
		id: 'aiApplications-1',
		cluster_number: 1,
		unique_domains: 4,
		number_of_titles: 4,
		category: 'AI 熱門應用',
		title: 'Claude Design 發布：Anthropic Labs 推出設計代理，同日 Qwen3 筆電端擊敗 Opus 4.7',
		short_summary: 'Anthropic Labs 發布 Claude Design 設計代理，在 Hacker News 獲得 952 點關注。同日，技術部落客 simonwillison.net 的測試顯示，開源的 Qwen3.6-35B-A3B 在個人筆電上執行的繪圖任務表現優於 Claude Opus 4.7，引發廣泛討論。這兩個訊號共同指向：AI 工具正快速多元化，且本地端小模型的能力已開始挑戰雲端旗艦模型，降低取得頂尖 AI 能力的成本門檻。',
		emoji: '🎨',
		did_you_know: 'Qwen3.6-35B-A3B 中的「A3B」意指 3B 的「活躍參數」（active parameters），透過混合專家架構（MoE）在低資源設備上實現接近大模型的推理能力。整個 35B 模型只有約 3B 參數在任意一次推理時被啟動，使其能在一般消費級筆記型電腦上流暢運行。',
		talking_points: [
			'Anthropic Labs 發布 Claude Design AI 設計代理，HN 獲 952 點討論，顯示設計工作者對 AI 代理的高度期待',
			'開源 Qwen3.6-35B-A3B（阿里巴巴）在筆電本地端的繪圖任務表現超越 Claude Opus 4.7',
			'MoE 架構讓本地端小模型（3B 活躍參數）在特定任務挑戰雲端旗艦模型，降低使用成本',
			'Agentic Dev Blog 推出由 Claude 每日策展的 AI 開發工具新聞平台',
			'教師觀點：本地端高性能模型的崛起，讓偏鄉學校不需雲端訂閱也有機會使用強力 AI——但仍需評估硬體門檻',
		],
		quote: 'Qwen3.6-35B-A3B on my laptop drew me a better pelican than Claude Opus 4.7',
		quote_attribution: 'simonwillison.net, 2026-04-16',
		quote_source_url: 'https://simonwillison.net/2026/Apr/16/qwen-beats-opus/',
		quote_source_domain: 'simonwillison.net',
		perspectives: [
			{
				text: '從 Anthropic Labs 官方角度：Claude Design 代表 Anthropic 將 Claude 擴展至設計應用場景，Lab 版本意味著功能前衛且持續迭代，社群的高熱度（952 點）印證設計工作者對 AI 代理工具的迫切需求。',
				sources: [
					{
						name: 'Anthropic',
						url: 'https://www.anthropic.com/news/claude-design-anthropic-labs',
					},
				],
			},
			{
				text: '從開源競爭角度（simonwillison.net）：Qwen3.6-35B 在個人筆電上擊敗 Opus 4.7 的繪圖任務，顯示開源模型已具備挑戰商用旗艦模型的能力。這對台灣學校而言是好消息：頂尖 AI 繪圖能力不再需要高額訂閱。',
				sources: [
					{
						name: 'simonwillison.net',
						url: 'https://simonwillison.net/2026/Apr/16/qwen-beats-opus/',
					},
				],
			},
			{
				text: '從教育普及角度：本地端高性能模型的崛起，為台灣偏鄉或預算有限的學校提供新的 AI 工具取得路徑，但需要具備足夠 GPU 記憶體的設備支援（通常需要 16GB VRAM 以上），仍存在硬體門檻。',
				sources: [
					{
						name: 'simonwillison.net',
						url: 'https://simonwillison.net/2026/Apr/16/qwen-beats-opus/',
					},
				],
			},
		],
		articles: [
			{
				title: 'Show HN: Agentic Dev – AI dev-tools news, curated daily by Claude',
				link: 'https://agenticdev.blog/',
				domain: 'agenticdev.blog',
				date: '2026-04-18',
			},
			{
				title: 'Claude Design',
				link: 'https://www.anthropic.com/news/claude-design-anthropic-labs',
				domain: 'anthropic.com',
				date: '2026-04-17',
			},
			{
				title: 'Qwen3.6-35B-A3B on my laptop drew me a better pelican than Claude Opus 4.7',
				link: 'https://simonwillison.net/2026/Apr/16/qwen-beats-opus/',
				domain: 'simonwillison.net',
				date: '2026-04-16',
			},
			{
				title: 'Claude Opus 4.7',
				link: 'https://www.producthunt.com/products/claude-opus-4-7',
				domain: 'producthunt.com',
				date: '2026-04-16',
			},
		],
		domains: [
			{ name: 'agenticdev.blog' },
			{ name: 'anthropic.com' },
			{ name: 'simonwillison.net' },
			{ name: 'producthunt.com' },
		],
	},
];

const aiEduStories: Story[] = [
	{
		id: 'aiEducation-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: 'MIT 校友創辦 OpenProtein.AI：開源 AI 蛋白質設計工具，讓全球生物研究者都能用',
		short_summary: 'MIT 博士校友創辦的 OpenProtein.AI 推出開源蛋白質設計工具，讓全球生物研究者不需頂尖實驗室資源也能運用 AI 進行蛋白質工程。這是 AI 工具「民主化」在生命科學領域的具體實例。台灣高中生物科教師可從此案例引導學生討論：開源 AI 工具如何改變科學研究的門檻，以及台灣生科人才需要培養哪些 AI 素養才能接軌國際趨勢。（單源權威）',
		emoji: '🔬',
		did_you_know: '蛋白質工程（protein engineering）是指透過修改蛋白質序列設計具有特定功能的新蛋白質，廣泛應用於新藥開發、生質材料、酵素設計等。傳統方法需要大量實驗迭代；OpenProtein.AI 的 AI 模型可大幅縮短「設計-預測-測試」的循環時間，是典型的 AI 加速科學研究案例。',
		talking_points: [
			'OpenProtein.AI 由 MIT 博士 Tristan Bepler（2020年畢業）與前 MIT 教授 Tim Lu（2007年）共同創辦',
			'提供開源模型與工具，讓全球生物研究者免費使用 AI 蛋白質設計能力',
			'「開源」策略讓頂尖學術工具不只限於資金雄厚的機構，體現科學民主化精神',
			'台灣高中生物科可引入此案例討論：AI 如何改變生命科學研究的方法論',
			'大學入學後，生科、化工、醫學系學生將在研究中直接使用此類 AI 工具，高中提早了解有助銜接',
		],
		quote: 'Founded by Tristan Bepler PhD \'20 and former MIT professor Tim Lu PhD \'07, OpenProtein.AI offers researchers open-source models and other tools for protein engineering.',
		quote_attribution: 'MIT News, 2026-04-17',
		quote_source_url: 'https://news.mit.edu/2026/bringing-ai-driven-protein-design-tools-everywhere-0417',
		quote_source_domain: 'news.mit.edu',
		perspectives: [
			{
				text: '從開源科學角度：OpenProtein.AI 的開源策略讓頂尖蛋白質設計 AI 工具脫離少數精英機構的壟斷，實現科學能力的民主化——這是「開源 AI + 科學研究」讓知識真正流動的典型正面案例。',
				sources: [
					{
						name: 'MIT News',
						url: 'https://news.mit.edu/2026/bringing-ai-driven-protein-design-tools-everywhere-0417',
					},
				],
			},
			{
				text: '從教育觀點：MIT 校友創業將學術研究成果直接轉化為開源工具的路徑，為台灣高中學生提供「學術研究如何影響產業與社會」的具體案例，適合融入生涯探索課程，啟發對研究型職涯的興趣。',
				sources: [
					{
						name: 'MIT News',
						url: 'https://news.mit.edu/2026/bringing-ai-driven-protein-design-tools-everywhere-0417',
					},
				],
			},
			{
				text: '從科學公平性角度：即使工具開源，使用它仍需具備生物資訊學與 AI 基礎知識。真正的科學民主化不只是工具免費，還需要教育系統培養能使用這些工具的人才——這正是高中教育在 AI 時代的新責任。',
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
		title: 'Nature 大型研究：11.5 萬份 IAT 測試揭示隱性偏見機制遠比想像中複雜',
		short_summary: '《Nature Human Behaviour》發布大型研究，運用競速擴散模型（racing diffusion models）分析超過 115,601 份內隱聯結測驗（IAT），橫跨 39 個主題，挑戰了 IAT 測試背後的傳統假設，顯示隱性偏見的形成機制比過去理論更為複雜。台灣高中心理健康教育與社會科課程可引用此研究，讓學生理解「大數據分析並非萬能，仍需要更精細的方法論才能得出可靠結論」。（單源權威）',
		emoji: '🧪',
		did_you_know: '內隱聯結測驗（IAT）是1998年哈佛大學開發的心理測量工具，透過測量對不同概念的反應速度差異，推測潛意識中的聯結強度，廣泛用於研究種族偏見、性別刻板印象等。台灣 Project Implicit 繁中版讓任何人都可以免費測試自己的隱性偏見，是課堂體驗式學習的好素材。',
		talking_points: [
			'研究分析 115,601 份 IAT 測試，橫跨 39 個主題，是迄今規模最大的 IAT 機制分析研究之一',
			'運用「競速擴散模型」（racing diffusion models）提供比傳統 IAT 分析更細緻的機制解釋',
			'研究挑戰現有 IAT 測試的理論假設，顯示隱性偏見形成路徑比原先理解更多元複雜',
			'發表於 Nature Human Behaviour（DOI: 10.1038/s41562-026-02439-y），屬頂級同儕審查期刊',
			'教育意義：引導學生討論「更多數據需要更精細方法才能轉化為可靠知識」的科學認識論',
		],
		quote: 'Using racing diffusion models to analyse 115,601 implicit association tests across 39 topics, LaFollette et al. challenge the mechanism for the implicit association test.',
		quote_attribution: 'Nature Human Behaviour, 2026-04-16',
		quote_source_url: 'https://www.nature.com/articles/s41562-026-02439-y',
		quote_source_domain: 'nature.com',
		perspectives: [
			{
				text: '從認知科學研究角度：競速擴散模型是認知神經科學的計算工具，此研究將其大規模應用於 IAT 分析是方法論創新，有助於更精確區分「反應速度」與「聯結強度」在偏見形成中的不同角色。',
				sources: [
					{
						name: 'Nature Human Behaviour',
						url: 'https://www.nature.com/articles/s41562-026-02439-y',
					},
				],
			},
			{
				text: '從教育批判思考角度：此研究適合高中社會科或心理健康課程——讓學生理解：大數據分析並非萬能，對既有理論的挑戰需要更精細的統計模型，而非只是堆疊更多數據量，培養對科學知識的批判閱讀能力。',
				sources: [
					{
						name: 'Nature Human Behaviour',
						url: 'https://www.nature.com/articles/s41562-026-02439-y',
					},
				],
			},
			{
				text: '從社會公平角度：若 IAT 的機制比過去認為的更複雜，則過去基於 IAT 結果制定的反偏見訓練課程可能需要重新評估其有效性。這對各國推動多元共融教育的政策設計具有直接的方法論含義。',
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
