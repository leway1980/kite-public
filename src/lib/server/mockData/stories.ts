import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';
const AI_APPLICATIONS_UUID = 'c0000005-0000-4000-8000-000000000005';
const EDU_RESEARCH_UUID = 'c0000006-0000-4000-8000-000000000006';
const WORK_METHODS_UUID = 'c0000007-0000-4000-8000-000000000007';

// ─── Stories synthesized 2026-06-02 by pipeline (auto-generated) ───

const aiNewsStories: Story[] = [
	{
		id: '1ddad315-60cc-5254-9f3a-3d44501c2701',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '治理授權',
		title: 'OpenAI 劃清 AI 政策倡議邊界',
		short_summary: 'OpenAI 於 2026/6/1 公開說明 AI 政策與政治倡議立場，明確表態不捐給超級 PAC、候選人或選舉競選活動，也沒有員工自籌 PAC；員工捐款或建議應視為個人行為。公司並重申外部政治團體不得代言 OpenAI。這套「權責分線」回應近年 AI 政策高度政治化的環境，降低外界把個人關係或第三方發言誤讀為企業官方政策的風險，也為日後校方與政府採購、監管判斷提供更可追溯的治理依據。',
		emoji: '⚖️',
		did_you_know: 'OpenAI 說明即使高階主管與其配偶曾參與 LTF 支援，也只以個人身分進行，且公司並未指導該組織、也不掌握其作業。',
		talking_points: [
			'治理主體：OpenAI 直指 AI 治理應由政府、研究界、勞工、民間與公眾共同決定，不該由單一企業替代決策。',
			'政治捐款邊界：公司明言沒有捐超級 PAC、候選人或競選活動，也沒有員工自籌 PAC，降低政策議題被金流牽動的疑慮。',
			'立場分工：員工可個人捐款或提供建議，但需明確與公司名義分開，避免將個人政治傾向當作官方政策訊號。',
			'LTF 案例：Greg Brockman 及其妻 Anna 對 LTF 的支持被明確註明為個人行為，OpenAI 不主導也不透明監管該組織。',
			'透明倡議原則：OpenAI 要求 AI 倡議者清楚揭露代表對象與政策主張，主張避免 astroturfing 等遮蔽真實支持者的作法。',
		],
		quote: 'No outside political group speaks on OpenAI’s behalf.',
		quote_attribution: 'OpenAI, 2026-06-01',
		quote_source_url: 'https://openai.com/index/our-views-on-ai-policy-and-political-advocacy',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '企業治理角度：OpenAI 將對外倡議定義為公開主責範圍，目的是讓政策主張可被驗證與問責，避免將個人關係上升為公司決策訊號。',
				sources: [
					{
						name: 'OpenAI 官方部落格',
						url: 'https://openai.com/index/our-views-on-ai-policy-and-political-advocacy',
					},
				],
			},
			{
				text: '監管與採購角度：聲明不涉足超級 PAC 與候選人競選資金，讓校園與政府在評估 AI 供應商時，可更早把治理風險納入可比對條件，而不只看產品性能。',
				sources: [
					{
						name: 'OpenAI 官方部落格',
						url: 'https://openai.com/index/our-views-on-ai-policy-and-political-advocacy',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-01',
				date_iso: '2026-06-01',
				content: 'OpenAI 發布《Our views on AI policy and political advocacy》，明確宣示政治倡議邊界與透明原則。',
			},
		],
		articles: [
			{
				title: 'Our views on AI policy and political advocacy',
				link: 'https://openai.com/index/our-views-on-ai-policy-and-political-advocacy',
				domain: 'openai.com',
				date: '2026-06-01',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: '8fe3e06f-688e-5d48-b35d-39ca736eaeb2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '新工作模式',
		title: 'Gemini 協作重構 Google I/O 2026 製作流程',
		short_summary: 'Google 在 2026/6/1 發表的 I/O 2026 反思文指出，短片《Timmy TPU》與活動視覺並非純人工打磨，而是先以紙卡偶與簡易 3D 先行拍攝，再用 Gemini、Nano Banana、Gemini Omni 與 Google AI Studio 建立可驗證的生成流程。重點是把構想、測試、整合切成可重複運作的步驟，讓大型活動維持品牌質感的同時，縮短版本迭代與資產整備時間，形成較可維護的人機共作新模式。',
		emoji: '🎬',
		did_you_know: 'Google 為 Timmy TPU 專案在 AI Studio 內建了影格一致性測試工具，先大量比對 Nano Banana 的生成結果，再決定是否進入下一段序列生成，降低風格漂移與回修成本。',
		talking_points: [
			'AI 先發力：Google 在 I/O 2026 的 Timmy TPU 做了「紙偶拍攝＋AI 轉影像」流程，先保留設計意圖再交由模型加速產出。',
			'流程化驗證：團隊以 AI Studio 建立批次測試機制，先確認 Nano Banana 影格一致後才展開序列生成，減少人工逐格反覆。',
			'人機分工：原始鏡頭與3D 走位仍由導演與動畫團隊控制，Gemini Omni 負責將基礎動畫與 AI 風格影格融合，維持人工痕跡。',
			'視覺共創：I/O 2026 視覺識別採用四色漸層與透明交疊圖示，透過 AI 反覆試出方案後快速定稿，壓縮多輪調整時間。',
			'可複製作法：Google 將活動製作拆成可控節點，從素材採集、模型生成到品質檢查分段管理，讓規模化內容製作更接近軟體化流程。',
		],
		quote: 'We didn’t just make announcements about our innovations in AI at I/O — we used those tools to bring I/O to life, too.',
		quote_attribution: 'Google Blog, 2026-06-01',
		quote_source_url: 'https://blog.google/innovation-and-ai/technology/ai/io-2026-google-ai/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '這則內容把 AI 當作製作基礎設施而非炫技工具：真正改變的是版本管理、重複測試與整合節奏，適合高頻更新的活動宣傳團隊採用。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/ai/io-2026-google-ai/',
					},
				],
			},
			{
				text: '同時可看見「保留創作者主控權」的做法，讓品牌敘事仍由人定調並保留手作感，AI 主要承擔放大速度與一致性的工程工作。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/ai/io-2026-google-ai/',
					},
				],
			},
		],
		articles: [
			{
				title: 'How we used Gemini to build Google I/O 2026',
				link: 'https://blog.google/innovation-and-ai/technology/ai/io-2026-google-ai/',
				domain: 'blog.google',
				date: '2026-06-01',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
	{
		id: '93996d3a-d622-5d16-8326-042c55d4c774',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '產業動態',
		title: 'OpenAI密西根啟用1GW資料中心',
		short_summary: 'OpenAI於2026-06-01在密西根Saline舉行動土，宣布建設1GW資料中心The Barn。公司承諾基礎設施與用電成本皆由專案支付，不提高當地住戶電費，並採用閉迴路冷卻減少用水。專案預估創造2,500名工會建設職缺與450名永久職位，並帶動1,500縣域與1,000間接職缺；配合1,000萬美元社區中心投入與4,500萬美元Codex credits，顯示AI基建正在把算力擴張與地方就業、社區再投資連在一起。',
		emoji: '🏗️',
		did_you_know: 'The Barn在租約期間預估可帶來約1,000,000,000美元稅收，並列入當地、縣市與州級學校與公共服務支持項目。',
		talking_points: [
			'成本邊界：OpenAI明確承諾The Barn基礎設施與電力支出由專案負擔，明擬降低地方電費被動承擔風險。',
			'節能設計：專案採閉迴路冷卻，目標用水量控制在一般辦公大樓等量，回應AI機房高耗能印象。',
			'就業承諾：宣示將創造2,500個工會建設職缺、450個永久在地職位，另有1,500縣域與1,000間接職缺。',
			'公共回饋：OpenAI與夥伴共同投入1,000萬美元改善Saline社區運動中心，回應地方優先建設需求。',
			'人才入口：2026-2027學年提供最高4,500萬美元Codex credits，目標覆蓋40萬名18歲以上密西根高教與技職學員。',
		],
		quote: 'The infrastructure and energy needed for The Barn will be paid for by the project, and costs will not be passed on to local ratepayers.',
		quote_attribution: 'OpenAI, 2026-06-01',
		quote_source_url: 'https://openai.com/index/stargate-michigan-data-center',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: 'OpenAI版本強調「成本不外溢」與地方回饋，將AI建設定義為可審核治理流程，而非單純資本堆疊；其關鍵是讓在地反對聲浪可被制度化預先化解。',
				sources: [
					{
						name: 'OpenAI 官方部落格',
						url: 'https://openai.com/index/stargate-michigan-data-center',
					},
				],
			},
			{
				text: '州政府與地方角度在於授權條件成效：若企業自負成本並捐助公共設施，地方可在學校、社區服務與稅基間取得可量化回報，但後續治理仍依履約監測。',
				sources: [
					{
						name: '密西根州官方記錄（原文載明）',
						url: 'https://openai.com/index/stargate-michigan-data-center',
					},
				],
			},
			{
				text: '社區與勞工面向較聚焦長期落地：1GW建置確有2,500工會建設職位與訓練承諾，但是否能穩定轉為長期在地產能，關鍵在後續委外、維運與技能銜接安排。',
				sources: [
					{
						name: 'OpenAI 原文內部合作對象描述',
						url: 'https://openai.com/index/stargate-michigan-data-center',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-01',
				date_iso: '2026-06-01',
				content: 'OpenAI、密西根州長、地方與合作夥伴在Saline舉行動土，正式啟動The Barn 1GW資料中心。',
			},
		],
		articles: [
			{
				title: 'Building the infrastructure for the Intelligence Age in Michigan',
				link: 'https://openai.com/index/stargate-michigan-data-center',
				domain: 'openai.com',
				date: '2026-06-01',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: '36059706-3ce7-5304-8f89-3e00f07f471c',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '代理應用、資安信任、治理授權',
		title: 'OpenAI 進入 AWS 讓前線模型入企業流程',
		short_summary: 'OpenAI 於 2026 年 6 月 1 日宣布 frontier models 與 Codex 在 AWS 正式上線，企業可透過 Amazon Bedrock，在既有 AWS 的安全、治理、採購與帳務流程中導入高階模型。過去高階模型進入 production 常受合規與部署整合卡住，現在可直接沿用既有雲端治理架構加速轉換，重點由「是否能接上」轉為「如何以流程控管風險」。',
		emoji: '🚀',
		did_you_know: 'OpenAI 提到 Codex 目前每週已有超過 500 萬人使用。這次在 AWS 上的推出，關鍵是把高階模型與程式代理能力放入既有企業治理流程，而不是重新建一套平台。',
		talking_points: [
			'上線突破：OpenAI frontier models 與 Codex 於 2026/06/01 同步在 AWS GA，企業可用既有 AWS 授權與採購框架取得服務。',
			'安全邏輯：原文明確指出可沿用 AWS 的安全、合規、治理機制，降低企業因工具切換造成的風險評估與政策對接成本。',
			'代理流程化：Codex on Amazon Bedrock 可直接在團隊熟悉的環境做撰寫、審查、除錯與現代化，將部分工程工序轉成可編排代理流程。',
			'治理可複製：OpenAI 強調可同時在商用與 GovCloud 使用，讓高敏感作業也能以既有審核鏈快速完成試行與驗證。',
			'延展方向：OpenAI 提到將續擴大 Daybreak 及 Codex Security 等能力到 AWS，預期讓威脅建模、補丁驗證更早進入日常開發。',
		],
		quote: 'OpenAI on AWS is the start of a broader path for customers to bring frontier AI into the environments where they already build, govern, and ship.',
		quote_attribution: 'OpenAI, 2026-06-01',
		quote_source_url: 'https://openai.com/index/openai-frontier-models-and-codex-are-now-available-on-aws',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '從平台治理面看，這則訊息主軸在於「可治理」而非單純技術發表。企業是否導入高階模型，不再取決於另起流程，而是能否快速掛入現成控管鏈。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/openai-frontier-models-and-codex-are-now-available-on-aws',
					},
				],
			},
			{
				text: '從工作方法看，Codex 進 AWS 並非直接取代工程人力，而是讓程式開發中的反覆任務有代理參與空間，讓人機合作的節點從試驗室延伸到實際交付流程。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/openai-frontier-models-and-codex-are-now-available-on-aws',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-01',
				date_iso: '2026-06-01',
				content: 'OpenAI 宣布 frontier models 與 Codex 一般可用於 AWS，並透過 Amazon Bedrock 與 OpenAI on AWS、GovCloud 供應同時啟動。',
			},
		],
		articles: [
			{
				title: 'OpenAI frontier models and Codex are now available on AWS',
				link: 'https://openai.com/index/openai-frontier-models-and-codex-are-now-available-on-aws',
				domain: 'openai.com',
				date: '2026-06-01',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
];

const aiApplicationsStories: Story[] = [
	{
		id: 'f3058a02-2920-5c6d-9426-b4694b008197',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '新工作模式',
		title: 'Mistral Vibe：多步驟 coding 的長任務代理',
		short_summary: 'Product Hunt 上的 Mistral Vibe 被定位為可執行長時間且多步驟 coding 工作的 AI agent，重點在降低人工逐步拆解與監控工作量。該頁面同步顯示 5.0 分評價、3,900 名追蹤者與 39 則評論，且有 2026-02-05、2026-03-27 的發布時點，顯示此類代理式工具正從試玩階段走向可比較的工作流程產品。對教育與行政研發而言，關鍵在於它如何把繁瑣步驟封裝成可重複流程，而非只是一支聊天工具。',
		emoji: '🤖',
		did_you_know: '頁面上的產品標記同時給出 5.0 的滿分制評價、3900 名追蹤者及 39 則 review，這代表關注者主要關注其「長流程自動化」能力，而非單一對話回覆體驗。',
		talking_points: [
			'高關注初證據：Mistral Vibe 在 Product Hunt 的 follower 數達 3.9K，顯示在開發者社群中具初步口碑與採用討論基礎。',
			'長任務設計重點：頁面將其描述為 long-running、multi-step coding agent，對應可將多步驟工程任務轉成可交接、可監督的流程。',
			'品質訊號不等同穩定：5.0 的總評與 39 則 review 提供早期品質參考，但樣本規模仍小，仍需自行驗證跨專案穩定性。',
			'時間訊號：產品頁同時可見 2026-02-05 與 2026-03-27 的發布日期，反映快速上線與版本演進節奏。',
			'可遷移模式：若以學校專題開發為例，可把反覆人工作業改為工作流呼叫節點，降低師生在重複指令、反覆檢查上的時間耗損。',
		],
		quote: 'Launched on March 27th, 2026',
		quote_attribution: 'Product Hunt, 2026-06-01',
		quote_source_url: 'https://www.producthunt.com/products/mistral-7b',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '以市場導向平台視角看，Mistral Vibe 的價值先以產品成熟度與社群指標為主軸，重點是能否吸引開發者持續嘗試與回饋，而非立即證明教學成效。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/mistral-7b',
					},
				],
			},
			{
				text: '從教育與行政工作流程角度看，關鍵不是工具名氣，而是其多步驟代理能力能否形成可複製流程，尤其在跨學段專題、資源編排、作業批改等低值值重複作業能否降低人工監工成本。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/mistral-7b',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-02-05',
				date_iso: '2026-02-05',
				content: 'Mistral Vibe 相關頁面資訊顯示 2026-02-05 的上線/發布時點。',
			},
			{
				date: '2026-03-27',
				date_iso: '2026-03-27',
				content: '頁面再次標示 Launched on March 27th, 2026，顯示產品節點仍在更新。',
			},
		],
		articles: [
			{
				title: 'Mistral Vibe',
				link: 'https://www.producthunt.com/products/mistral-7b',
				domain: 'producthunt.com',
				date: '2026-06-01',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'bfb8643f-c593-58ab-befc-da6d870d4e25',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '新工作模式',
		title: 'R0Y OMNI 1.0 單一介面改寫投資報表流程',
		short_summary: 'Product Hunt 於 2026-05-31 上架 R0Y OMNI 1.0，主張以一套無程式介面完成更準確的投資儀表板與報表產出，取代傳統必須在 Excel、Python 與 Bloomberg 間來回切換的高門檻流程。對教育、行政與研究工作者來說，重點是學會用「整合式 AI 工作流」縮短重複整併時間，把精力放回決策與分析。',
		emoji: '📊',
		did_you_know: '產品說明中明確指出，舊流程需要在 Excel 建模、Python 筆記本與金融資料工具之間切換，R0Y 的訴求是用同一介面把步驟收斂。',
		talking_points: [
			'整合取代切工：R0Y 將建模、整理、視覺化與報表輸出集中在同一介面，對應過去需跨 Excel、Python 與 Bloomberg 操作的多工具拼接。',
			'效率承諾：條目訴求「更準確」的投資儀表板與報告，並以更快的產出流程作為差異化主張，關鍵是能否穩定降低人為錯誤與重工成本。',
			'門檻再設計：透過 no-code 介面設計，將技術門檻從程式能力轉成流程能力，符合非工程團隊需要快速複製的實務情境。',
			'教育可遷移：學校與研究團隊可把「單一入口產出」套用到預算、績效、專案追蹤或教學成效儀表板，減少部門間資料對接耗時。',
			'版本訊號：R0Y OMNI 1.0 在 2026-05-31 對外發布，顯示 AI 工具已從功能追加走向一體化工作型產品封裝。',
		],
		quote: 'R0Y stands out by combining everything into one intuitive, no-code interface.',
		quote_attribution: 'Product Hunt, 2026-05-31',
		quote_source_url: 'https://www.producthunt.com/products/r0y-ai-financial-studio',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '從產品頁角度，焦點是「整合」：用單介面壓低學習與切換成本，將財務報表製作視為可複用流程，而不是多工具串接。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/r0y-ai-financial-studio',
					},
				],
			},
			{
				text: '從教育現場角度，雖非課綱或政策議題，卻提供可借鏡的治理訊息：當流程被定義為產品能力時，跨單位共享模板與責任邊界更容易制度化。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/r0y-ai-financial-studio',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-31',
				date_iso: '2026-05-31',
				content: 'Product Hunt 記錄 R0Y OMNI 1.0 條目，主打以一體化無程式介面完成投資儀表板與報表生成。',
			},
		],
		articles: [
			{
				title: 'R0Y OMNI 1.0',
				link: 'https://www.producthunt.com/products/r0y-ai-financial-studio',
				domain: 'producthunt.com',
				date: '2026-05-31',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: '526c4104-8b54-5cb8-bd4e-0d278d00dc80',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用',
		title: 'Tokenwise 揭開 LLM 花費盲區',
		short_summary: 'Product Hunt 上架的 Tokenwise 被定位為「智慧 LLM 代理層」，核心在於讓開發者即時看見 API 呼叫的實際成本。產品可重新計算每筆請求的 token，套用最新計價，並回報輸入輸出、延遲與錯誤等指標，同步以模板做聚類建議。對已有大量 LLM 流量的服務方尤其重要，因為官方示例指出 1,000 美元/月花費下也可能節省到 30% 以上，代表資源管理可從「看結果」轉為「看即時成本」。',
		emoji: '🧮',
		did_you_know: 'Tokenwise 採 Cloudflare Workers 邊緣部署，回報中會加入每筆請求的 TTFT 與總延遲；創辦人另提及完整 prompt/回應預設不紀錄，避免額外隱私風險。',
		talking_points: [
			'成本可視化：Tokenwise 會逐筆重算輸入與輸出 token，套用最新價格表，協助將帳單誤差轉為可追溯的即時單筆資料。',
			'邊緣代理設計：以 Cloudflare Workers 運作，加入約 30～50 毫秒 p50 延遲，官方說明大頭延遲仍主要來自上游模型端，適合多數實務場景。',
			'節省效果定位：在 1,000 美元/月 AI 開銷下，若真的降 30% 會形成可觀節流，開發者因此特別關注大型專案的「每月節省」數據。',
			'新手也能受益：產品方指出新手浪費通常來自重試循環、過度使用大模型與 prompt 重複，工具可讓這些問題在第一筆請求後就被看見。',
			'治理彈性：可依模板、專案、標籤、端點分流進行篩選，甚至先預覽受影響範圍與預估流量再決定是否套用建議。',
		],
		quote: 'It\'s free to start, no card needed, so there\'s no real downside to plugging your first app in and seeing what happens.',
		quote_attribution: 'Product Hunt, 2026-05-31',
		quote_source_url: 'https://www.producthunt.com/products/tokenwise',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '從工程治理角度看，Tokenwise 把成本追蹤前置化：模型選型與重試行為不再只看最終月帳單，能更快修正流程，對資深團隊的可觀測性與責任歸屬是明顯加分。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/tokenwise',
					},
				],
			},
			{
				text: '從新手落地角度看，產品的價值不只是省錢，而是降低學習曲線。早期專案常看不見的成本浪費可被即時揭露，代表團隊可在第一版即修正策略，避免「先做出來再補洞」的高風險反覆。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/tokenwise',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-31',
				date_iso: '2026-05-31',
				content: 'Product Hunt 收錄 Tokenwise，標榜為可揭示 LLM API 過度支付來源的智慧代理層工具。',
			},
		],
		articles: [
			{
				title: 'Tokenwise',
				link: 'https://www.producthunt.com/products/tokenwise',
				domain: 'producthunt.com',
				date: '2026-05-31',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: '58553064-84da-5e3d-b829-50e382c19144',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '新觀念',
		title: 'Mac 內嵌 AI 補字改寫寫作工作流',
		short_summary: 'Product Hunt 上的 Typeahead 將 AI 寫作建議改成直接嵌入 macOS 的每一個文字欄位，使用者邊打字邊接受詞句補全，而非先在聊天介面產文再回貼。產品主打本機模型、可離線運作，寫作內容保留在裝置內，並採一次付費搭配終身免費更新。這表示文字類工作可從切換工具、重複貼上與改寫的零散流程，轉為原生環境中的持續寫作節奏，對教育行政、研究與知識工作者有較直接的可遷移意義。',
		emoji: '✍️',
		did_you_know: 'Typeahead 團隊在回應社群提問時指出，寫作與程式生成不同，輸出不只要有內容還要保有個人語氣，這也是它把焦點放在「你持續輸入、工具即時補字」而非讓代理自動接手整段文字的原因。',
		talking_points: [
			'流程降摩擦：Typeahead 在 macOS 全域文字欄位即時提供補字與接句建議，使用者可直接在原本寫作介面完成草稿，減少聊天工具來回切換造成的打斷。',
			'在地化隱私：產品宣稱可本機執行且支援離線，輸入內容停留在裝置內；對校務文稿、報告草案等需留意外流的場域，這是實務可感受的治理差異。',
			'商業模式改變：Typeahead 採一次購買與終身免費更新，不走一般 AI 寫作工具常見訂閱流程，對需要長期高頻撰寫的人力資源可降低續訂與權限維運負擔。',
			'寫作觀念分流：開發者回應時強調程式可交由代理驗證，但寫作重點在保留作者聲音，因此工具要協助『出拳時快、維持節奏』而非讓系統自動生成整段。',
			'體驗門檻：討論回應提到建議若稍有延遲就會破壞專注，顯示此類文本 AI 的核心不是功能名單，而是可持續不中斷的即時回饋與速度感。',
		],
		quote: 'For writing, we think augmentation beats automation, because the value lives in you staying the author.',
		quote_attribution: 'Product Hunt, 2026-05-30',
		quote_source_url: 'https://www.producthunt.com/products/typeahead',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '開發團隊主張文字 AI 應該是「與你共筆」，而非取代作者，核心價值在於保留個人語氣與主動權；這種定位對需要可追溯文件風格一致性的教育與行政寫作有直接啟發。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/typeahead',
					},
				],
			},
			{
				text: '討論串中的回饋將它與早期 Copilot 式寫作工具相比較，質疑其是否只是舊式輔助。爭點不在有無自動補文，而在輸入延遲與流程連續性是否足夠，折射使用者開始要求可即時接續的「低摩擦」體驗。',
				sources: [
					{
						name: 'Product Hunt 討論串',
						url: 'https://www.producthunt.com/products/typeahead',
					},
				],
			},
			{
				text: '從教育/研究實務角度看，這個案例不只是一款工具更新，而是提醒組織可先做「流程嵌入」：把 AI 放入現有軟體工作流，比導入全新代理平台更容易快速落地並降低轉換成本。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/typeahead',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-30',
				date_iso: '2026-05-30',
				content: 'Typeahead 於 Product Hunt 發表討論頁，說明其 macOS 全域內嵌補字、本機模型離線運行與一次付費終身更新的設計主張。',
			},
		],
		articles: [
			{
				title: 'Typeahead',
				link: 'https://www.producthunt.com/products/typeahead',
				domain: 'producthunt.com',
				date: '2026-05-30',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
];

const workMethodsStories: Story[] = [];

const aiEduStories: Story[] = [
	{
		id: 'e56b7fde-8a32-5675-95e2-6c0bd780d50f',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '治理授權',
		title: 'AI 精準執行的代價：伊朗案例警示人類判斷',
		short_summary: '這篇 2026 年 6 月 1 日的 Substack 觀點文，一方面宣布 2026 夏季 AI 直播課程規劃，提供每週主題與 10 週完整套裝兩種收費方式；另一方面以伊朗情境說明 AI 可放大執行與決策效率，但若指令缺乏制衡與回饋，就可能讓短期「成功」轉成難以收束的政策風險。對教育與行政工作者而言，關鍵不在工具本身，而在如何設計可被挑戰的人類判斷流程。',
		emoji: '⚖️',
		did_you_know: '文章同日公布「每週兩日夜間開班」資訊，報名模式為每週一主題每週 50 美元，10 週共 20 堂可一次收 400 美元，且提供直播與補看錄影。',
		talking_points: [
			'收費機制透明：作者規劃 2026 夏季 AI 課程，採每週 1 主題主軸，每週收費 50 美元；若一次購買 10 週共 20 堂，總價為 400 美元，直接量化學習投入。',
			'授課節奏設計：課程訂在週二與週四晚間直播，並保留錄影供缺席者補看，顯示課程運作已兼顧同步與非同步學習流程。',
			'AI 放大命題：文中明確將 AI 比喻為「最強放大器」，可放大既有權力、加速行政與戰術決策，但對「判斷品質」不具道德區分能力。',
			'伊朗警訊案例：作者以美方在伊朗行動中搭配 AI 的快速解構政府方式為例，指出精準執行在缺乏外界制衡時，可能演變為連鎖且難逆轉的政策失控。',
			'風險延展：當指令端拒絕同盟、外交與系統模擬結果，霍爾木茲海峽等地緣點會成為放大後的談判與供應鏈槓桿，顯示教育場域也需討論「誰下指令」與「可回溯機制」。',
		],
		quote: 'AI is the ultimate amplifier. It consolidates power, accelerates execution, and does not care what the mission is.',
		quote_attribution: 'Substack, 2026-06-01',
		quote_source_url: 'https://stefanbauschard.substack.com/p/perfectly-aligned-perfectly-catastrophic',
		quote_source_domain: 'stefanbauschard.substack.com',
		perspectives: [
			{
				text: '治理風險視角認為，AI 的核心威脅在於擴大錯誤決策的速度與範圍，短期戰術勝利可能換來中長期治理失序，重點是要補足指令回路與問責機制。',
				sources: [
					{
						name: 'Substack',
						url: 'https://stefanbauschard.substack.com/p/perfectly-aligned-perfectly-catastrophic',
					},
				],
			},
			{
				text: '學習實務視角則將同篇文章的論點轉成教育行動線，除了警示外部風險，也直接用課程設計回應，強調透過可追蹤的專題課程建立教師對 AI 決策邏輯的判讀能力。',
				sources: [
					{
						name: 'Substack',
						url: 'https://stefanbauschard.substack.com/p/perfectly-aligned-perfectly-catastrophic',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-01',
				date_iso: '2026-06-01',
				content: '作者發布夏季 AI 課程方案（週二、週四夜間直播，含錄影補看）並同時發表對伊朗情境下 AI 人類協同風險的治理警訊。',
			},
		],
		articles: [
			{
				title: 'Perfectly Aligned, Perfectly Catastrophic: AI, Human Judgment, and the Wicked Problem We Made in Iran',
				link: 'https://stefanbauschard.substack.com/p/perfectly-aligned-perfectly-catastrophic',
				domain: 'stefanbauschard.substack.com',
				date: '2026-06-01',
			},
		],
		domains: [
			{ name: 'stefanbauschard.substack.com' },
		],
	},
	{
		id: '83858ccb-abec-55b9-b2ce-7389d0c3f35b',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '治理授權',
		title: 'AI 只能加速，未必救回 OPM 合作市場',
		short_summary: 'Inside Higher Ed 指出，線上課程管理廠商（OPM）如 Coursera、iDesign 與 2U 近年大量導入 AI，集中在學生輔導、內容製作與行政支援，主張可提高作業效率。專家估計 AI 仍偏補充，不會單憑技術改變大學是否簽 OPM 合作的核心評估。報導也指出該市場持續收縮：新合作從 2021 年 141 件降到 2024 年 73 件。加上 2U、UMGC 的法規爭議與各州法規升溫，風險管理正取代 AI 熱點，成為高校選型主因。',
		emoji: '📉',
		did_you_know: '文章揭露 70% 左右的 OPM 已導入 AI 功能，但合作降溫仍持續，2021 年 141 件的新案到 2024 年只剩 73 件，顯示市場信心未因 AI 技術而回升。',
		talking_points: [
			'AI 佈局：文中提到 70% 的 OPM 已導入 AI，涵蓋教學內容、導學與線上客服流程，目標是壓低支援成本與提升反應速度。',
			'效率上限：Eduventures 分析認為 AI 僅能補強效率，無法改寫院校評估 OPM 合作時的整體報酬與風險權重。',
			'品牌風險：2022 年美國南加州大學前學生起訴 2U，主張其誇大排名吸引報名，說明品牌信任在 OPM 市場仍是重大瓶頸。',
			'法規壓力：2024 年 UMGC 與 Coursera 的分潤模型面臨爭議後，Minnesota、Ohio 已進一步立法，CA、FL、MA、NJ 也有相關法案提案。',
			'結構轉向：報導列舉新合作由 2021 年 141 件降到 2024 年 73 件，為 2016 年以來最低，越來越多學校改走自建線上學程系統。',
		],
		quote: '"I don’t see AI enabling growth. I see it being complementary,"',
		quote_attribution: 'Inside Higher Ed / Eduventures 資深分析師, 2026-06-01',
		quote_source_url: 'https://www.insidehighered.com/news/tech-innovation/artificial-intelligence/2026/06/01/will-ai-help-revive-stale-opm-market',
		quote_source_domain: 'insidehighered.com',
		perspectives: [
			{
				text: '從供應端視角看，AI 幫助 OPM 改善課程支援與作業效率，但仍難解決報名透明度與分潤倫理的疑慮，市場評價未必因此改善。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/tech-innovation/artificial-intelligence/2026/06/01/will-ai-help-revive-stale-opm-market',
					},
				],
			},
			{
				text: '從治理視角看，法規與補助揭露責任成為主軸，雖然聯邦層面政策落差存在，州法已先於多地落地，推升學校對 OPM 合作審核強度。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/tech-innovation/artificial-intelligence/2026/06/01/will-ai-help-revive-stale-opm-market',
					},
				],
			},
			{
				text: '從校務策略觀點看，當合作風險上升時，學校傾向將招生、導學與學習平台能力自建，OPM 可能由主要合作夥伴轉為可替代的局部服務。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/tech-innovation/artificial-intelligence/2026/06/01/will-ai-help-revive-stale-opm-market',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-01',
				date_iso: '2026-06-01',
				content: 'Inside Higher Ed 發文，總結 OPM AI 應用雖普及，卻仍主要是效率補強，未能扭轉合作市場下滑。',
			},
		],
		articles: [
			{
				title: 'Will AI Help Revive the ‘Stale’ OPM Market?',
				link: 'https://www.insidehighered.com/news/tech-innovation/artificial-intelligence/2026/06/01/will-ai-help-revive-stale-opm-market',
				domain: 'insidehighered.com',
				date: '2026-06-01',
			},
		],
		domains: [
			{ name: 'insidehighered.com' },
		],
	},
	{
		id: '56891340-9230-5390-84dc-6d34c47bfd57',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '研究證據',
		title: '四訊號即可優選 LLM 數學導師品質',
		short_summary: '這篇 2026-05-28 的 arXiv 工作論文，提出不需 RL 訓練、也不靠外部 LLM 評分的 LLM 數學導師評估方法。研究以 frozen 的 DeepSeek-R1-8B 對話輸出為對象，設計四訊號指標 TEI（Schoenfeld-Verify 比率、數學步驟密度、結束提問率、DTR 深度推理閘）與 TEI@N 選模流程，目標是用規則挑出較佳回應。摘要顯示在 pre-incorrect 情境下 N=8 可將改善率由59.0%提到81.9%，並用 one-shot 分類器標註 119,009 句導師句子；研究未揭露受測族群、國別與完整效果分佈區間，但清楚展示低成本自動化評估方向。',
		emoji: '🔍',
		did_you_know: '公開摘要指出 TEI 方案可把思考長度由1,764字降到119字（-93%），同時內容知識與教學知識準確率下滑達71%與80%，顯示效率上升伴隨可解讀性風險。注意：本研究為工作論文，研究設計偏機器人訊號比較，不宜直接推論因果。',
		talking_points: [
			'證據類型：本研究為 arXiv 工作論文，屬量化訊號實驗，使用 frozen 模型輸出與四項對話指標評估，不做 RL 訓練與外部 judge。',
			'數據佐證：公開摘要揭露 pre-incorrect 情境下 TEI@N（N=8）改善率由59.0%提升到81.9%，並以 one-shot 分類器處理 119,009 則 tutor 句子；但未揭露受試樣本組成與信賴區間。',
			'方法設計：TEI 結合 Schoenfeld-Verify 關鍵詞比率、步驟密度、ends-question 率與 DTR 深層思考閘，將四信號轉成可排序分數供候選回應篩選。',
			'效率訊號：研究主張於不更新權重下即能挑選高品質回應，對導入初期團隊可降低模型對齊與反覆人手審閱成本，適合先做「低成本試辦」。',
			'效能與風險：摘要同時記錄對齊 GRPO 對照中，思考字數明顯縮水但準確率下降，提示「較少思考」不必然代表「較佳導師品質」。',
		],
		quote: 'Selecting from N candidates with TEI (the TEI@$N$ rule) raises the improvement rate on pre-incorrect scenarios from 59.0% to 81.9% at N=8 on a frozen DeepSeek-R1-8B base, with no training and no external judge.',
		quote_attribution: 'arXiv, 2026-05-28',
		quote_source_url: 'https://arxiv.org/abs/2605.30666',
		quote_source_domain: 'arxiv.org',
		perspectives: [
			{
				text: '以作法角度看，TEI 提供的是一種快速上線前的導師回應擷取框架，適合教育平台先做風險可控的導入試算，不直接等同完整教學有效性驗證。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2605.30666',
					},
				],
			},
			{
				text: '資料完整性角度看，研究揭露部分效應很強，但未提供樣本族群與統計區間，對是否能外推到真實課堂情境仍屬延伸研究缺口，需對照文獻與實際試教。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2605.30666',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-28',
				date_iso: '2026-05-28',
				content: '《The Tutoring Effectiveness Index: Predicting LLM Math Tutor Quality from Four Conversation Signals》在 arXiv 提交並公開摘要。',
			},
		],
		articles: [
			{
				title: 'The Tutoring Effectiveness Index: Predicting LLM Math Tutor Quality from Four Conversation Signals',
				link: 'https://arxiv.org/abs/2605.30666',
				domain: 'arxiv.org',
				date: '2026-05-28',
			},
		],
		domains: [
			{ name: 'arxiv.org' },
		],
	},
	{
		id: 'e315abb6-b10b-5014-9af0-e9781a56a002',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '研究證據',
		title: '強化學習讓特教 LLM 助教更懂多重障礙',
		short_summary: 'arXiv 的工作論文提出 Special-R1，將強化學習對齊流程延伸到特別教育場景。研究以五種障礙輪廓建立雙軸提示詞（難度支援與障礙導向語氣），並用 persona-aware Thinking Reward 引導模型回應，在 690 場多回合對話中測試，顯示可同時兼顧多樣學習者需求。結果中 persona-aware Fit 從 6.75 提升 8.40，SPED-rubric Helpfulness 從 0.720 提升 0.768，且在 OpenLearnLM 外域測試維持接近最佳分數；但摘要未揭露受測學生國家與教育情境，外部效度仍待驗證。',
		emoji: '🧠',
		did_you_know: '研究提供的核心證據是多輪對話評測分數提升，主要比較的是模型版本差異而非學生學習成效。注意：本研究為工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：工作論文，採強化學習對齊框架與對話式評測實證，非 RCT，也未見問卷或臨床式追蹤設計。',
			'數據佐證：公開測試集為 690 場多輪對話，覆蓋 5 種障礙輪廓，且與 generic baseline、runner-up 進行指標對照。',
			'方法設計：兩維自適應提示詞同時調整難度支援與障礙特化教學風格，並以 persona-aware Thinking Reward 做模型回饋。',
			'量化結果：Full model 使 persona-aware Fit 從 6.75 升到 8.40（+1.65），SPED-rubric Helpfulness 從 0.720 提升到 0.768。',
			'外部效度：論文註記數學情境的特定學習障礙仍有弱點，且未披露受測受眾分布；摘要中特別提及可延伸多模態模組。',
			'治理提醒：方法在 OpenLearnLM 外域維持接近最強分數（8.53）但未揭露使用國家或年級資訊，跨場域導入仍需補齊風險與公平性檢核。',
		],
		quote: 'On a persona-augmented test set of 690 multi-turn dialogues, our full model raises persona-aware Fit from 6.75 (generic baseline) to 8.40 (+1.65) and SPED-rubric Helpfulness from 0.720 to 0.768.',
		quote_attribution: 'arXiv 研究頁, 2026-06-01',
		quote_source_url: 'https://arxiv.org/abs/2605.30670',
		quote_source_domain: 'arxiv.org',
		perspectives: [
			{
				text: '第一層訊號可讀為方法論驗證：提示詞工程與獎勵設計必須同時作用，才可能在同一模型上推升特教對話表現，否則單點調參效果有限。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2605.30670',
					},
				],
			},
			{
				text: '延伸研究缺口：目前仍止於對話分數與 benchmark 的技術效果，不足以直接外推到真實課室中的學習歷程、教學行政流程與公平性治理，需對照更多場景資料。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2605.30670',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-29',
				date_iso: '2026-05-29',
				content: '論文頁面顯示於 29 May 2026 送件至 arXiv，主題聚焦特別教育中的 LLM 導師對齊。',
			},
			{
				date: '2026-06-01',
				date_iso: '2026-06-01',
				content: '該篇摘要在 2026-06-01 被列入新訊息彙整，用作本次 cluster 的唯一原始來源。',
			},
		],
		articles: [
			{
				title: 'Reinforcement Learning for Special Education: Aligning LLM Tutors to Diverse Learners through Disability-Adaptive Training',
				link: 'https://arxiv.org/abs/2605.30670',
				domain: 'arxiv.org',
				date: '2026-06-01',
			},
		],
		domains: [
			{ name: 'arxiv.org' },
		],
	},
	{
		id: 'd11e8b01-be90-5963-9d21-c349726959a2',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '研究證據',
		title: '大學 GenAI 採用阻力有學科與職務差異',
		short_summary: '本研究以英國某 Russell Group 大學 272 名學術與專業服務（professional services）人員為樣本，透過問卷資料進行多方法分析，整合多項式羅吉斯迴歸（MLR）、結構方程模型（SEM）與開放題語意分群，檢驗學科與職務對生成式 AI 採用阻力的影響。研究發現，非 STEM 學術群體主要焦點是倫理與文化問題，尤其是學術誠信；STEM 與專業服務群體則更關注制度治理、規範與基礎設施限制。作者結論是，阻力並非只在個人態度，而是嵌入大學組織生態與知識規範，提示必須以角色分層設計治理與支援。',
		emoji: '🧪',
		did_you_know: '該研究時間點為英國某單一大學的橫斷式問卷研究，摘要未提供實驗追蹤、效果量、信賴區間或干預前後比較。公開摘要也未揭露 272 份問卷之外的持續追蹤資料。注意：本研究為橫斷式跨方法調查研究，不宜直接推論因果。',
		talking_points: [
			'證據類型：橫斷式跨方法觀察研究，核心為多方法問卷分析（MLR、SEM、語意分群），樣本包含 272 人，適合辨識關聯但不構成因果。',
			'數據佐證：研究樣本 272 人，涵蓋非 STEM、STEM 與 PS 三種角色；公開摘要未揭露追蹤期間、效果量、信賴區間與百分點差異。',
			'學術倫理張力：非 STEM 受訪者主要回報倫理與文化阻礙，特別聚焦學術誠信，顯示內容創作與評量流程的制度感受比工具操作更先被感知。',
			'治理與基礎設施：STEM 與專業服務端最常提到的則是治理結構、規範及基礎建設不足，暗示教學端與行政端需求型態不同。',
			'政策訊號：摘要建議大學不要只做泛化培訓，而是依學科與職務分層設計支援框架，將倫理、授權與基礎建設並列處理。',
		],
		quote: 'Generative Artificial Intelligence (GenAI) adoption barriers are deeply embedded in organizational ecosystems and epistemic norms, suggesting that universities must move beyond generalized training to develop role-specific governance and support frameworks.',
		quote_attribution: 'arXiv, 2026-05-27',
		quote_source_url: 'https://arxiv.org/abs/2603.27052',
		quote_source_domain: 'arxiv.org',
		perspectives: [
			{
				text: '論文把阻力歸因於組織生態與知識規範，與常見把問題歸結為個人數位能力不足的論調不同；實務上更像是治理分層設計不足，而非只靠補課程。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2603.27052',
					},
				],
			},
			{
				text: '跨角色差異是此研究的核心張力：非 STEM 重文化倫理、STEM/PS 重制度與基礎設施。若管理機制一體適用，將弱化關鍵族群的真實需求，可能造成政策落差。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2603.27052',
					},
				],
			},
			{
				text: '延伸研究缺口在於樣本僅限一所英國研究型大學，仍需跨國與跨校對照，才能判斷上述分群阻力是否具一般化，不宜直接推論到台灣各型大專院校。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/abs/2603.27052',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-03-27',
				date_iso: '2026-03-27',
				content: '投稿至 arXiv，首次版本 v1 上線（27 Mar 2026）。',
			},
			{
				date: '2026-05-27',
				date_iso: '2026-05-27',
				content: '發佈修訂版 v2（檔案大小由 418 KB 擴至 1,039 KB）。',
			},
		],
		articles: [
			{
				title: 'Multi-Level Barriers to Generative AI Adoption Across Disciplines and Professional Roles in Higher Education',
				link: 'https://arxiv.org/abs/2603.27052',
				domain: 'arxiv.org',
				date: '2026-05-27',
			},
		],
		domains: [
			{ name: 'arxiv.org' },
		],
	},
];

const aiClassroomStories: Story[] = [
	{
		id: 'b52402fb-2df1-5380-98b2-d7f4bd6f0054',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '教學流程',
		title: '教室可直接試用的每週 AI 免費工具盤點',
		short_summary: '在 2026-06-01 的更新中，該教學部落格把「每週免費 AI 工具」做為固定專欄，集中整理可直接進教室的資源，包含 TaleGenie.Ai、Caimpare AI，以及 The Conversation、Edutopia、Google Gemini 等關聯素材。文章不只列出工具名稱，也同時補上寫作韌性與資訊素養向度，讓教師不必到多個網站逐一搜集。對預算受限卻要持續補齊教材的教師，這類清單等同每週可複製的資源入口，能縮短備課與試用時間。  ',
		emoji: '🧰',
		did_you_know: '原文同時納入 TaleGenie.Ai、Caimpare AI，並加入 The Conversation 的寫作韌性觀點與 Edutopia 的「AI 時代批判識讀」建議；另外還附上 Gemini 視覺化貼文範例，含 28 個圖像樣本可直接做課堂示範。',
		talking_points: [
			'每週追蹤制：2026-06-01 起轉為每週固定欄位，快速彙整「可免費進教室」的 AI 新增名單，協助教師固定節奏補齊工具盤點。',
			'故事書製作：TaleGenie.Ai 被放入兒童故事創作清單，提供可免費使用的視覺化輸出，教師可直接拿來當語文與跨域題材起稿素材。',
			'工具整合：Caimpare AI 被標註為 AI 工具集合，重點是降低教師來回切換多平台的成本，對跨課程小組協作較有幫助。',
			'寫作韌性觀點：The Conversation 的「寫作改變大腦、面對挑戰」段落被加入「AI 年代的寫作助益」，可引導教師設計學習日誌或反思任務。',
			'資訊素養新點：Edutopia 的「AI 時代批判識讀五法」與 Gemini 的 28 則圖像樣本並列，形成從判斷到視覺化輸出的連結任務。',
		],
		quote: 'At least, for now, I’m going to make this a weekly feature which will highlight additions to THE BEST NEW – & FREE – ARTIFICIAL INTELLIGENCE TOOLS THAT COULD BE USED IN THE CLASSROOM:',
		quote_attribution: 'Edublogs（2026-06-01）',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/06/01/this-weeks-free-useful-artificial-intelligence-tools-for-the-classroom-154/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '文章的主體路線是效率導向：先建立可直接上手的工具入口，幫忙教師縮短搜尋與試用成本，偏向實作導向的「先動手」策略。',
				sources: [
					{
						name: 'edublogs',
						url: 'https://larryferlazzo.edublogs.org/2026/06/01/this-weeks-free-useful-artificial-intelligence-tools-for-the-classroom-154/',
					},
				],
			},
			{
				text: '與此相比，The Conversation 與 Edutopia 的連結顯示另一條重點：不只在工具層面，而是把寫作能力與批判識讀做為 AI 時代核心能力，這是不同於純推軟體的教學視角。',
				sources: [
					{
						name: 'The Conversation',
						url: 'https://theconversation.com',
					},
					{
						name: 'Edutopia',
						url: 'https://www.edutopia.org',
					},
				],
			},
			{
				text: 'Gemini 的視覺化素材線則偏向設計加速：重點在提示詞與版面模板，對時間有限班級實務有助，但教師仍需加上同儕討論與評量機制才是完整教學。',
				sources: [
					{
						name: 'Google Gemini',
						url: 'https://gemini.google.com',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-01',
				date_iso: '2026-06-01',
				content: '該文將內容定義為「每週免費 AI 教室工具」特輯，並更新多項可直接課堂應用的工具與教學資源。',
			},
		],
		articles: [
			{
				title: 'This Week’s Free & Useful Artificial Intelligence Tools For The Classroom',
				link: 'https://larryferlazzo.edublogs.org/2026/06/01/this-weeks-free-useful-artificial-intelligence-tools-for-the-classroom-154/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-06-01',
			},
		],
		domains: [
			{ name: 'larryferlazzo.edublogs.org' },
		],
	},
];

const educationResearchStories: Story[] = [
	{
		id: '43ea9642-bdf5-50d7-9950-b3cc3863e987',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '非洲新創融資研究：外資主導與在地落差',
		short_summary: '這份 NBER 2026 工作論文將非洲整體創業生態納入分析，結合創業者問卷、激勵相容融資偏好實驗，以及創投交易與創辦人學經歷之配對資料，檢驗資金供給與創業成長機制。結果顯示新創偏好權益而非負債，但權益資金多由外資主導；超過 80% 的 VC 交易有外資，超過 60% 受資助創辦人具跨國學經歷。研究提醒：若本地股權資本薄弱與人才對外連結門檻高，資本市場會被外部資本結構放大，削弱在地新創形成。公開摘要未揭露受訪樣本數與追蹤期，臺灣在創業教育或創新政策設計時，可拿來當作「資本可得性」評估的風險訊號。',
		emoji: '🌍',
		did_you_know: '本研究明確揭示兩組量化訊號：80% 創投交易含外資，超過 60% 受資助者有國外學經歷；但摘要未揭露樣本總數與效果量。注意：本研究為觀察性工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：研究是工作論文，採跨方法設計，交叉使用非洲創業者問卷、激勵相容偏好實驗與創投交易紀錄。',
			'數據佐證：公開摘要可驗證 80% 的 VC 案件含外資、超過 60% 受資助者具跨國背景，但未揭露樣本數、追蹤期間與信賴區間。',
			'研究訊號：新創者普遍偏好股權融資；然而供給端若以外資為主，代表在地資本鏈較薄，可能造成創業資源往外部連結者集中。',
			'教學可行法：老師可設「融資偏好」情境課，先盤點創業提案所需資金類型，再讓學生比較股權與負債對控制權、償付壓力的影響。',
			'老師下一步可以怎麼做：要求學生建立「創業者背景×資本來源×決策結果」表，設兩組比較指標（跨國背景有無、外資比例），再以簡報辯論回報其成長風險假設。',
			'驗證提醒：在不加干預比較下只能談關聯。課程中可補上校內調查、長期追蹤與政策情境模擬，讓學生練習判讀研究外推限制，而非把研究結果直接套用。',
		],
		quote: 'Startups strongly prefer equity over debt, but equity is supplied mainly by foreign investors.',
		quote_attribution: 'NBER, 2026-06-02',
		quote_source_url: 'https://www.nber.org/papers/w35261#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '此研究將資本供給、創辦人跨國經驗與市場進入門檻連在一起，對教育決策者的意義是聚焦制度供給而非個人努力。單篇結果可作風險預警，但不足以直接下定論外資越高即必然扭曲創業品質。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35261#fromrss',
					},
				],
			},
			{
				text: '延伸研究缺口是可行性判讀的核心：目前沒有干預前後比較，亦未回報樣本數與統計誤差。對台灣而言，需配合本地創育政策與育成園區資料，才能判斷是否具有可移植性。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35261#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Startups in Africa',
				link: 'https://www.nber.org/papers/w35261#fromrss',
				domain: 'nber.org',
				date: '2026-06-02',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'bcb45178-5596-501a-b353-92b10ed70ebc',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '野火煙霧下照顧中斷，為何壓縮母親就業',
		short_summary: '這篇 NBER 工作論文以野火煙霧當作外生衝擊，採準實驗比較設計，將母親最小子女在校照顧依賴度不同的家庭分組，檢視停課與缺課對母親就業的即時影響。研究指出，照顧需求的間歇性增加會造成短期就業下滑，且需求若累積可能放大衝擊；然而摘要未揭露完整樣本量與量化估計。對校務與地方政策而言，這提醒停課治理不能只保教育流程，還要同步對接家庭照護支援。 ',
		emoji: '🏫',
		did_you_know: '研究顯示學校停課與缺課會快速推高家庭照護需求，若未同步接住家長支援缺口，母親就業容易出現波動。注意：本研究為準實驗研究，不宜直接推論普遍因果。',
		talking_points: [
			'證據類型：研究採準實驗，將野火煙霧當外生事件，依最小子女在校托育依賴度分組，比較母親就業的即時衝擊。',
			'數據佐證：公開摘要只提到煙霧提高停課與缺課，進而推高臨時照護需求；摘要未揭露樣本數、追蹤時段與效果量，無法直接推得信賴區間。',
			'關鍵機制：照顧需求是間歇型衝擊，短期缺口累積可能讓就業波動加深，提醒校方將停課支援設為持續機制而非一次公告。',
			'教師可做：停課後3日內完成家庭照顧需求回報，3到7日補完轉介與追蹤行程，讓導師掌握需臨時照顧支援的家庭。',
			'實務檢核：每週比對缺課日數、家庭照護壓力回報與母親出缺勤或轉職跡象，並以是否屬男性主導產業為分層條件觀察復元差異。',
		],
		quote: 'Smoke increases school closures and student absenteeism, generating caregiving demand.',
		quote_attribution: 'NBER, 2026-06-02',
		quote_source_url: 'https://www.nber.org/papers/w35264#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '研究聚焦在突發危機下的照護衝擊，核心訊號是停課與缺課會把就業壓力傳導到家庭，但若要跨情境應用，仍須補足台灣本地族群與不同學段的對照驗證。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35264#fromrss',
					},
				],
			},
			{
				text: '以外生煙霧事件降低選擇偏誤疑慮，但仍未提供全文可比的樣本與量化指標；政策層面可將「校務停課應變」與「家庭照護接續服務」做制度化，而非只做一次性的補課安排。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35264#fromrss',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-02',
				date_iso: '2026-06-02',
				content: 'NBER 發布工作論文 W35264，使用野火煙霧帶來的校務中斷作為外生衝擊，研究其對母親就業的影響。',
			},
		],
		articles: [
			{
				title: 'Where There’s Smoke: Stochastic Caregiving Shocks and Mothers’ Labor Market Outcomes',
				link: 'https://www.nber.org/papers/w35264#fromrss',
				domain: 'nber.org',
				date: '2026-06-02',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: '52120816-b76c-5fc1-8363-75a58a15ec50',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '墨西哥國小早期名次：認知與非認知長期影響',
		short_summary: '這份 2026 年 NBER 工作論文以墨西哥行政登錄資料為基礎，鎖定第三學段分數相近卻名次不同的學生，觀察早期名次是否影響後續軌跡。研究指出，高名次可預測高中關鍵考試表現較佳、可選學校更具選擇性，以及九年級自我認知、學習策略、責任感與團隊態度較佳。對台灣教師與校務而言，提示小學初段可同時追蹤認知與非認知訊號，早期即介入支持。公開摘要未揭露樣本數、追蹤期間與效果量。',
		emoji: '📊',
		did_you_know: '此研究觀察到第三年級排名較高者，在九年級報告的非認知項目（自我認知、學習策略、責任感與團隊態度）平均較佳；但摘要仍未揭露樣本與數據範圍。注意：本研究為觀察性研究，不宜直接推論因果。',
		talking_points: [
			'證據類型：NBER 工作論文，使用墨西哥行政登錄資料做觀察比較，對比第三年級成績相近但名次不同的學生。',
			'數據佐證：公開摘要未揭露樣本數、追蹤期間、效果量與信賴區間；只提供高名次組較佳認知與非認知結果的方向性結果。',
			'教學下一步：先建立個別成長檔案，回饋著重「本學期成長率」與目標完成率，降低學生只被班級名次框限的挫敗感。',
			'班級實務：每週追蹤學習策略、合作責任與自我效能指標，並與導師晤談紀錄連結，讓小學高風險學生有明確升級支持路徑。',
			'校務檢核：在不改變排名公開制度前提下，保留選課與輔導資料的縱向比較機制，觀察資源投入是否真的改善成績、升學與非認知差距。',
			'成效觀察：教師可用「升學決策準備度、學習投入、團隊合作」三維度做月檢核，檢驗早期介入是否縮短九年級前後的機會落差。',
		],
		quote: 'A higher third-grade rank increases performance on a high-stakes high school admission exam.',
		quote_attribution: 'National Bureau of Economic Research, 2026-06-02',
		quote_source_url: 'https://www.nber.org/papers/w35267#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '研究將早期名次視為可延伸至高中階段的訊號，提醒台灣可把小學段轉銜設計成「認知＋非認知」雙軌追蹤，但目前仍偏向關聯證據，需用在具體介入設計前。',
				sources: [
					{
						name: 'National Bureau of Economic Research',
						url: 'https://www.nber.org/papers/w35267#fromrss',
					},
				],
			},
			{
				text: '因僅一國資料且未揭露樣本規模與估計量化結果，外推到台灣教育脈絡時風險較高；建議先做在地化追蹤與對照研究，檢驗同機制是否穩定。',
				sources: [
					{
						name: 'National Bureau of Economic Research',
						url: 'https://www.nber.org/papers/w35267#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Persistent Effects of Early Academic Rank on Cognitive and Noncognitive Outcomes',
				link: 'https://www.nber.org/papers/w35267#fromrss',
				domain: 'nber.org',
				date: '2026-06-02',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: '29b354fb-cffa-5134-a4cf-40d85a0c582c',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '前沿課程與學生成果：德州7校追蹤',
		short_summary: '這篇 NBER 工作論文以七所德州公立大學為研究場域，整合 459,415 份課綱與學生學習成果資料，並導入 1.07 億筆學術文獻建立課程與「最新研究接近度」指標，並進行觀察式分析。結果顯示前沿知識暴露越高，學生完成率、平均GPA、升學意願與畢業後薪資都有較佳走勢，且修業時間更短。研究亦發現這些成效在學習基礎與家庭資源較高學生群組更明顯。對台灣教師與校務決策而言，這提供「課綱更新頻率」可作為成果管理變項的實證參考。',
		emoji: '🎓',
		did_you_know: '研究串接 459,415 份課綱、107,000,000 筆文獻與學生結果資料，發現前沿知識暴露與多項學習成果呈正向關聯。注意：本研究為觀察性研究，不宜直接推論因果關係。',
		talking_points: [
			'證據類型：觀察性研究。以 7 所德州公立大學 459,415 份課綱與學籍成果資料，透過課綱更新在入學前未被學生先行掌握的特性作為辨識線索。',
			'數據佐證：樣本來自 7 校、45.9 萬份課綱與 1.07 億篇文獻，結果指向完成率、GPA、升學率、薪資與修業時間的正向關聯；公開摘要未揭露效果量與信賴區間。',
			'老師可做法：每學期保留固定「新文獻導入日」，每門核心課至少安排2則近期研究與1則經典文獻對照，要求學生寫出更新重點與可行教學轉化。',
			'老師可做法：把課程任務設計為循環式：先用舊教材測現況，再加入前沿研究更新問題情境，最後以學生版本比較追蹤概念是否被修正，便於觀察學習成長。',
			'老師可做法：導入前先訂追蹤指標（完成率、GPA、補修率、修業時間），再依學習基礎與家庭背景分層檢視，避免只用整體均值解讀「前沿策略」成效。',
			'不要誤讀：研究機制可能受自我選課與資源差異牽動，不能直接替代台灣升學制度下的實際操作結論，需先做在地小規模試驗再擴大實施。',
		],
		quote: 'We study whether exposure to frontier knowledge in college affects student outcomes.',
		quote_attribution: 'NBER, 2026-06-02',
		quote_source_url: 'https://www.nber.org/papers/w35269#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '該研究有力指出：課程是否接近最新研究，可能影響學生投入與完成度。對教學設計者而言，最大價值在於把課綱更新變成可追蹤的制度指標。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35269#fromrss',
					},
				],
			},
			{
				text: '另一個要點是外部效度未定：單一在德州的高教情境與未揭露效果量，對台灣不同學段制度未必可直接類比。延伸研究缺口在於跨校系所、跨社經條件的對照。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35269#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Frontier Knowledge in College and Student Success',
				link: 'https://www.nber.org/papers/w35269#fromrss',
				domain: 'nber.org',
				date: '2026-06-02',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'e2366102-b3c9-5a43-a1b7-6f4fa3d5c825',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '居家照護詐欺起訴模型：3.4%支出可能可疑',
		short_summary: '該研究將2008年全量美國Medicare居家照護（home health）申報資料，與2009到2013年間九個聯邦司法區的起訴紀錄連結，建立機器學習模型去預測其餘85區的詐欺機率。結果估算2008年約有3.4%的居家照護支出（約5.2億美元）來自可疑詐欺，且被打擊的九區僅占40%支出卻承載65%疑似詐欺金額。研究價值在於示範行政資料如何轉成「先分群、再稽核」的治理邏輯，而非憑單一指標全面施壓。',
		emoji: '🧾',
		did_you_know: '九個受打擊司法區只佔居家照護支出40%，卻對應65%疑似詐欺金額，反映稽核可由高風險聚焦提效。注意：本研究為觀察性研究，不宜直接推論因果',
		talking_points: [
			'證據類型：觀察性研究，結合2008全量Medicare居家照護資料與2009-2013九區檢控紀錄，透過機器學習估算其餘85區HHA的詐欺機率。',
			'數據佐證：研究估算2008年約3.4%支出為可疑詐欺，約5.2億美元；詐欺風險在九個打擊區集中，該區域僅佔40%支出卻涵蓋65%可疑金額。',
			'核心訊號：詐欺HHA常有極高轉診量醫師作為來源，照護行為高度同質，服務對象反而較健康，顯示詐欺具有可監測行為模式。',
			'可行作法：以轉診來源、服務流程同質度、受照護者健康指標分層抽樣稽核，先查高分組，再人工覆核，可在有限資源下提升查核命中率。',
			'判讀邊界：研究未提供因果因果推論，只估計風險與分布；政策導入前需補上誤判率、抽查覆核比例與年度追蹤，避免模型結果被誤當裁量依據。',
		],
		quote: 'I estimate that in 2008, 3.4% of Medicare home health spending — about $520 million — was billed by fraudulent HHAs.',
		quote_attribution: 'NBER, 2026-06-02',
		quote_source_url: 'https://www.nber.org/papers/w35280#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '這篇研究著重的是風險分布與可疑群組識別，不是因果機制驗證；對治理有用的不是「誰一定詐欺」，而是「誰值得先查」，降低盲目全面稽核風險。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35280#fromrss',
					},
				],
			},
			{
				text: '延伸研究缺口在外推穩定度：模型依賴特定期間與司法區特徵，仍需跨年度與跨政策環境重測，否則難保在不同制度下仍維持命中率。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35280#fromrss',
					},
				],
			},
		],
		timeline: [
			{
				date: '2008-01-01',
				date_iso: '2008-01-01',
				content: '研究以2008年Medicare居家照護申報資料作為核心樣本，估算詐欺支出規模。',
			},
			{
				date: '2009-01-01',
				date_iso: '2009-01-01',
				content: '研究使用2009至2013年間九個聯邦司法區的起訴紀錄與其餘資料搭配訓練預測模型，外推至85個未納入起訴區域。',
			},
			{
				date: '2026-06-02',
				date_iso: '2026-06-02',
				content: 'NBER發布工作論文W35280，公開9.3?結果、詐欺分布與特徵線索。',
			},
		],
		articles: [
			{
				title: 'Medicare Home Health Fraud: How Much, Where, and Who?',
				link: 'https://www.nber.org/papers/w35280#fromrss',
				domain: 'nber.org',
				date: '2026-06-02',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
];

const twEduStories: Story[] = [
	{
		id: 'c2675c7f-1c69-55aa-9c85-8b79fce53e89',
		cluster_number: 4,
		unique_domains: 2,
		number_of_titles: 2,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '國立機構同步推：藝育數位課與教師進修招生',
		short_summary: '台北市國立臺灣藝術教育館與高雄師範大學5月陸續公告，前者補充《網路藝學園》數位課程資訊，後者辦理「115 年教師在職進修生命教育專長增能學分班」，皆列明函文依據與附件。對台灣學校與教師行政人員而言，這類公告可直接對接學校研修規畫與資源盤點，先比對文件條件與時程再做採用決策，有助降低行政接軌成本。',
		emoji: '📚',
		did_you_know: '兩篇公告都公開了可直接下載的 PDF 附件，且分別註明 115 年5月的函號：藝演字第1150300158號與高師大進字第1141004680號，對校方追蹤責任歸屬與申辦流程很有幫助。',
		talking_points: [
			'文號可追溯：藝術教育館公告明確註記「115 年5月29日藝演字第1150300158號函」，行政端可依該文號建立課程引進與驗證軌跡。',
			'素材先行：其發布內容為《網路藝學園》新數位課程，並附上課程海報與介紹，利於學校在未開課前先做資源適配與宣傳預估。',
			'進修有學分：高師大訴求「115 年教師在職進修生命教育專長增能學分班」，有助校內安排在職教師的研修時數與考核對應。',
			'時間順序明確：內文分別回溯到 2026-05-22 與 2026-05-29 的函文號，顯示先完成內部核可再集中對外公告的作法。',
			'來源差異可比：一篇偏藝術資源供給，一篇偏教師能力提升，代表地方與學術機構可透過不同管道提供同時可接軌的治理支援。',
		],
		quote: '一、依據國立高雄師範大學115年5月22日高師大進字第1141004680號函辦理。',
		quote_attribution: '國立高雄師範大學，2026-06-01',
		quote_source_url: 'https://www.tyc.edu.tw/News_Content.aspx?n=5143&s=1632981',
		quote_source_domain: 'tyc.edu.tw',
		perspectives: [
			{
				text: '台北端著重課程資源輸出，透過附件提供海報與介紹，主軸是把內容做好並推廣；高師大則聚焦在職教師學分機制，主軸是人才培育，兩者對學校可同時吸納但用途不同。',
				sources: [
					{
						name: '國立臺灣藝術教育館',
						url: 'https://www.doe.gov.taipei/News_Content.aspx?n=9AA0CC873BD001A2&s=69EC431383EC6C74',
					},
				],
			},
			{
				text: '兩篇都採「轉知」寫法並附公文依據，反映台灣教育訊息主要靠可追溯文件流，而非抽象政策宣示；學校若直接照抄標題，容易忽略招生名額、申請窗口與附件條件。',
				sources: [
					{
						name: '國立高雄師範大學',
						url: 'https://www.tyc.edu.tw/News_Content.aspx?n=5143&s=1632981',
					},
				],
			},
			{
				text: '這組訊號可被視為「內容端＋人力端」同時發力：藝術教育館偏補給現場教材素材，高師大偏補齊教師專能。對地方學校而言，最實際價值是同時改善教學素材與教師專長，而非單一政策綜效。',
				sources: [
					{
						name: '國立臺灣藝術教育館',
						url: 'https://www.doe.gov.taipei/News_Content.aspx?n=9AA0CC873BD001A2&s=69EC431383EC6C74',
					},
					{
						name: '國立高雄師範大學',
						url: 'https://www.tyc.edu.tw/News_Content.aspx?n=5143&s=1632981',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-22',
				date_iso: '2026-05-22',
				content: '高雄師範大學依高師大進字第1141004680號函文，推動「教師在職進修生命教育專長增能學分班」招生作業。',
			},
			{
				date: '2026-05-29',
				date_iso: '2026-05-29',
				content: '國立臺灣藝術教育館以藝演字第1150300158號函文，補充《網路藝學園》數位課程海報與介紹資料。',
			},
		],
		articles: [
			{
				title: '【轉知】國立臺灣藝術教育館「網路藝學園」新製作數位課程海報及介紹',
				link: 'https://www.doe.gov.taipei/News_Content.aspx?n=9AA0CC873BD001A2&s=69EC431383EC6C74',
				domain: 'doe.gov.taipei',
				date: '2026-06-01',
			},
			{
				title: '轉知國立高雄師範大學辦理「115年教師在職進修生命教育專長增能學分班」招生資訊',
				link: 'https://www.tyc.edu.tw/News_Content.aspx?n=5143&s=1632981',
				domain: 'tyc.edu.tw',
				date: '2026-06-01',
			},
		],
		domains: [
			{ name: 'doe.gov.taipei' },
			{ name: 'tyc.edu.tw' },
		],
	},
	{
		id: '56374ca7-5024-5d60-8a14-45ae45b3ee9e',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '跨學段限螢幕要保留輔具例外',
		short_summary: '這則報導提醒台灣學校行政與老師，若主張縮短學生螢幕使用時間，不能只靠一刀切禁用。文章以美國情境指出，輔助科技是許多有特殊需求學生完成學習與溝通的基本條件，且2021-2022年約17%學生受IDEA或Section 504保障；若政策沒有例外設計，限制措施可能同時壓縮權益與資源配置空間。隨著截至2026-04-02已有2州通過、12州提案相關法案，螢幕管理議題正快速擴張，做決策時更需要先處理例外標準。',
		emoji: '⚖️',
		did_you_know: '文章援引美國公會政府監督機關資料，提到2021-2022年間約17%學生符合IDEA或Section 504服務資格。也指出GAO認為學校在輔助科技推行上仍受限於師生對工具認知不足與科技更新速度過快。',
		talking_points: [
			'先訂例外機制：有IEP或Section 504計畫的學生，即使班級規範限制螢幕，仍應保有取得輔具設備的權利，否則會影響學習與溝通。',
			'先估算受影響比例：報導以2021-2022數據指出約17%學生受IDEA或504服務約束，單一政策影響面可擴及雙位數比例。',
			'州法推進加速：截至2026-04-02，Multistate統計有2州已通過螢幕限制、12州提出提案，限制風險不只局部現象而是擴散趨勢。',
			'勿只算『畫面時間』：原文提到輔助科技含語音辨識、筆握到健康監測裝置，不能以同一標準把學習、溝通、健康需求一概歸入禁用。',
			'治理成效關鍵在執行端：GAO指出許多學校缺少識讀輔具效益的能力與人力準備，政策若未配套訓練與流程，單靠縮時難解問題。',
		],
		quote: 'Any blanket policy runs the risk for further exasperating that challenge and could run afoul of the Individuals with Disabilities Education Act.',
		quote_attribution: 'Council of Parent Attorneys and Advocates（COPAA）, 2026-06-01',
		quote_source_url: 'https://www.k12dive.com/news/screen-time-limits-in-schools-need-nuanced-approach-experts-caution/821524/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '權益優先觀點認為，先談螢幕成癮防制前，必先確認特殊需求學生是否有法定支持路徑，否則政策會把學習補助直接抽掉，衝擊差異化照護。',
				sources: [
					{
						name: 'K-12 Dive',
						url: 'https://www.k12dive.com/news/screen-time-limits-in-schools-need-nuanced-approach-experts-caution/821524/',
					},
					{
						name: 'Council of Parent Attorneys and Advocates（COPAA）',
						url: 'https://www.k12dive.com/news/screen-time-limits-in-schools-need-nuanced-approach-experts-caution/821524/',
					},
				],
			},
			{
				text: '監理效率觀點則強調家長與立法者對過度用機焦慮，推動州法限時；但若不寫入可審核例外，校方容易同時面臨督導壓力與個案申訴。',
				sources: [
					{
						name: 'K-12 Dive',
						url: 'https://www.k12dive.com/news/screen-time-limits-in-schools-need-nuanced-approach-experts-caution/821524/',
					},
					{
						name: 'Multistate',
						url: 'https://www.k12dive.com/news/screen-time-limits-in-schools-need-nuanced-approach-experts-caution/821524/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2021-09-01',
				date_iso: '2021-09-01',
				content: 'Civil Rights Data Collection 顯示2021-2022學年度約17%學生符合IDEA或Section 504相關服務資源對象。',
			},
			{
				date: '2026-04-02',
				date_iso: '2026-04-02',
				content: '截至4月2日，兩州已通過學校螢幕限制法，另有12州正在推動相關提案。',
			},
			{
				date: '2026-06-01',
				date_iso: '2026-06-01',
				content: 'K-12 Dive 發布該則觀點報導，主張螢幕限制需保留輔助科技例外並避免一刀切。',
			},
		],
		articles: [
			{
				title: 'Screen time limits in schools call for nuanced approach, experts caution',
				link: 'https://www.k12dive.com/news/screen-time-limits-in-schools-need-nuanced-approach-experts-caution/821524/',
				domain: 'k12dive.com',
				date: '2026-06-01',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: 'bc9f2aa9-1643-5fac-a557-687c2c307b7e',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '跨學段治理訊號：美國特教資料、FAFSA與AI教室規則',
		short_summary: '對台灣校務管理者來說，這組消息提醒政策改變不只是紙上法規，而會直接碰到學校權責、師資與家長信任。美國在3/23提出特教資料修正、7/1生效專業學位新規，再到5/27後續的教室科技與AI辯論，形成行政、財務與安全並進的壓力鏈，最終影響的是教師人力穩定、弱勢學生權益追蹤與校務治理能力。',
		emoji: '⚖️',
		did_you_know: '美國目前14州已要求高中生填FAFSA，另外9州已正式施行，目的之一是避免學生因程序未完成而錯過可申請的高教補助。',
		talking_points: [
			'資料邊界爭議：3/23教育部提案刪除IDEA特教報告中的種族差異資料，州律師總檢與特教組織擔心會弱化歧視監測。',
			'師資風險訊號：7/1專業學位新規將教育學研究所排除在「專業」例外之外，可能提高校長、教師、輔導員等關鍵職位補充壓力。',
			'FAFSA推進力：目前有14州規定高中生填FAFSA，且9州已全面上路，目標是減少學生因程序漏填而失去資助。',
			'幼齡教室防線：5/27教師工會提出學前到二年級禁螢幕、禁學生端AI，將校園科技爭議集中在操作、專注與安全治理。',
			'資安與信任：文章指出Canvas事件讓家長對學校資料安全先產生戒心，資安通報與回應流程直接影響技術方案可否落地。',
		],
		quote: 'The Education Department\'s rule defining which graduate degrees are considered \'professional\' and therefore exempt from the new $100,000 federal student loan cap excluded graduate education programs.',
		quote_attribution: 'K12 Dive, 2026-06-01',
		quote_source_url: 'https://www.k12dive.com/news/week-in-review-6-1-2026/821542/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '政府面向政策面板上的重點是精簡績效資料與定義專業資格，目標偏向降低行政摩擦；但同時也暴露弱勢追蹤資料一旦被縮減，校本治理的公平性訊號會變弱。',
				sources: [
					{
						name: 'K12 Dive',
						url: 'https://www.k12dive.com/news/week-in-review-6-1-2026/821542/',
					},
				],
			},
			{
				text: '高教資助與招生策略側重擴大FAFSA申辦普及，與教師工會主張低齡班級限制螢幕與AI形成張力：一邊是資源可及性，一邊是安全與教學秩序風險。',
				sources: [
					{
						name: 'K12 Dive',
						url: 'https://www.k12dive.com/news/week-in-review-6-1-2026/821542/',
					},
				],
			},
			{
				text: '從資安事件看，教室科技討論不再是「能不能用」，而是「誰能在事故時承擔風險」。若缺少回應機制，家長信任會先崩，政策效益很難轉成校務成果。',
				sources: [
					{
						name: 'K12 Dive',
						url: 'https://www.k12dive.com/news/week-in-review-6-1-2026/821542/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-03-23',
				date_iso: '2026-03-23',
				content: '美國教育部發布提案，討論修改特殊教育績效資料報告（IDEA相關）中部分項目',
			},
			{
				date: '2026-05-27',
				date_iso: '2026-05-27',
				content: '美國教師工會主席對學前至二年級螢幕與學生端AI提出限制建議，推動十點提案',
			},
			{
				date: '2026-06-01',
				date_iso: '2026-06-01',
				content: 'K12 Dive 發布「Week In Review」聚合報導，整理本週美國教育政策與課室科技反彈',
			},
			{
				date: '2026-07-01',
				date_iso: '2026-07-01',
				content: '美國教育部關於什麼是「專業學位」之新規正式生效，涉及新一代聯邦學生貸款上限豁免範圍',
			},
		],
		articles: [
			{
				title: 'Week In Review: Federal policies and classroom tech face pushback',
				link: 'https://www.k12dive.com/news/week-in-review-6-1-2026/821542/',
				domain: 'k12dive.com',
				date: '2026-06-01',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: '56b78c28-f770-5252-976d-30ee33cf5567',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '組織運作',
		title: '工具間塞設備：半數學區每年2-3次停電',
		short_summary: '台灣學校管理者可直接借鏡：美國一項K-12調查顯示，設備長期擠在改造空間、走道櫃、地下室，導致近半學區每年有2到3次電力中斷，另20%更頻繁，5%至少每月一次。這不只是設備老舊問題，而是可視化與監測流程缺口使風險集中爆發；UPS、交換器和電話/網路若同區失效，整校即刻面臨教學停擺與安全溝通失能。',
		emoji: '🔌',
		did_you_know: '該調查揭示，約三分之一以上學區把設備放在改造教室或辦公空間，四成多分散在走道櫃，十個一間約有一間放在地下室，環境波動與空間瓶頸同步出現。',
		talking_points: [
			'空間配置風險：調查指出35%學區把核心設備放進改造教室或辦公區，41%分散在多個小櫃，10%在地下室，空間與溫濕度問題易同步累積。',
			'停電風險並不少見：半數學區每年有2到3次電力中斷，另有20%更頻繁，5%每月至少一次，足見供電弱點是常態管理問題。',
			'核心設備共置代價：UPS若失效，會拖垮伺服器與網路交換器，當校內電話依賴VoIP時，可能出現大面積無法通話與報修遲滯。',
			'DCIM未必落地：許多學區雖談導入DCIM，但約半數仍用試算表紀錄UPS與機櫃資訊，跨校區監控不到位導致問題難以提前預警。',
			'預算與更新節奏：九成學區仰賴E-Rate投入基礎設施，且約四分之三採2到5年升級一次，若未先補齊監測與維運，更新週期到點前的風險會累積放大。',
		],
		quote: 'When the UPS fails, that brings down everything attached to it, including servers and network switches.',
		quote_attribution: 'K12DIVE，2026-06-01',
		quote_source_url: 'https://www.k12dive.com/spons/how-to-solve-k-12s-it-broom-closet-problem/821448/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '產業觀點側重「DCIM」名義化：文章說明許多學區稱有導入，但真正到位的是手動流程；治理名目與數位監測能力之間仍有明顯落差。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/spons/how-to-solve-k-12s-it-broom-closet-problem/821448/',
					},
				],
			},
			{
				text: '現場治理觀點更關注風險連動：UPS、交換器與電話系統一旦共置，停電會同時衝擊行政與安全通訊，對台灣校務連結高度網路化的環境值得警訊。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/spons/how-to-solve-k-12s-it-broom-closet-problem/821448/',
					},
				],
			},
		],
		articles: [
			{
				title: 'How to solve K-12’s IT ‘broom closet’ problem',
				link: 'https://www.k12dive.com/spons/how-to-solve-k-12s-it-broom-closet-problem/821448/',
				domain: 'k12dive.com',
				date: '2026-06-01',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
];

export const MOCK_STORIES_BY_CATEGORY: Record<string, Story[]> = {
	[AI_NEWS_UUID]: aiNewsStories,
	[AI_APPLICATIONS_UUID]: aiApplicationsStories,
	[WORK_METHODS_UUID]: workMethodsStories,
	[AI_EDU_UUID]: aiEduStories,
	[AI_CLASSROOM_UUID]: aiClassroomStories,
	[EDU_RESEARCH_UUID]: educationResearchStories,
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
