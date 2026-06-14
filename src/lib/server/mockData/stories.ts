import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';
const AI_APPLICATIONS_UUID = 'c0000005-0000-4000-8000-000000000005';
const EDU_RESEARCH_UUID = 'c0000006-0000-4000-8000-000000000006';
const WORK_METHODS_UUID = 'c0000007-0000-4000-8000-000000000007';

// ─── Stories synthesized 2026-06-14 by pipeline (auto-generated) ───

const aiNewsStories: Story[] = [
	{
		id: '8b6a8449-e027-500f-aaf3-863df8f103db',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '研究證據',
		title: 'LLM 深度詛咒：規模放大未必更好',
		short_summary: '《The Curse of Depth in Large Language Models》（arXiv:2502.05795v5）為工作論文，關注大型語言模型深度與效能關係，提出「深度越深未必越好」的研究假設。就目前可用公開資訊而言，僅能確認題名、版本、DOI 與授權資料，未揭露樣本數、研究國家、方法類型（RCT／問卷／對照實驗）或主要量化結果，因此目前只能作為模型架構上「深度不必然等於更好」的早期論證，尚不足以作為直接因果判準。',
		emoji: '🧠',
		did_you_know: 'arXiv 版本標示為 v5，並以 DOI 10.48550/arXiv.2502.05795 對應，全文採用 CC BY-NC-SA 4.0 授權，有助於研究者重測與再利用，但這類早期稿件仍缺乏完整實驗揭露。注意：本研究為工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：該來源屬 arXiv 研究稿（工作論文），題名呈現模型深度與效能機制論證；目前未見完整抽樣設計、實驗條件或問卷/問診流程揭露。',
			'數據佐證：公開摘要未揭露樣本數、追蹤期間、效果量與信賴區間；論文主張是否成立、效益幅度多大，需查閱全文完整方法與結果表才可判讀。',
			'核心訊息：研究焦點集中在「Depth」與「Large Language Models」，提示產業在加速擴張參數時，模型深度可能出現邊界，而不只是越深越好。',
			'工作含意：若後續驗證成立，組織可把資源從盲目拉深模型，轉向可維護的架構設計與推理流程最佳化，以降低訓練與推論的邊際成本。',
			'可追溯性：來源已列 DOI 與授權條件，版本有 v5，具備可追蹤性；但未提供可直接對齊 KPI 的量化結果，需搭配後續對照實驗做決策。',
			'政策觀點：對模型治理而言，先有方法論清楚度比單一論文標題更關鍵；缺少資料與流程透明時，不宜將其直接當作產品導入門檻調整依據。',
		],
		quote: 'The Curse of Depth in Large Language Models',
		quote_attribution: 'arXiv, 2026-06-13',
		quote_source_url: 'https://arxiv.org/pdf/2502.05795',
		quote_source_domain: 'arxiv.org',
		perspectives: [
			{
				text: '此研究可視為對傳統「模型越深越好」觀點的挑戰，若成立可影響研究與工程端資源分配；但目前僅是題名層級訊息，仍不足以取代完整對照實驗。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/pdf/2502.05795',
					},
				],
			},
			{
				text: '延伸研究缺口明顯：未揭露樣本與實驗設計，導致結論可重現性與外推性不足。後續需以相同任務、不同架構條件下做多輪對照，才可判斷是否真為能力邊界。',
				sources: [
					{
						name: 'arXiv',
						url: 'https://arxiv.org/pdf/2502.05795',
					},
				],
			},
		],
		articles: [
			{
				title: 'The Curse of Depth in Large Language Models',
				link: 'https://arxiv.org/pdf/2502.05795',
				domain: 'arxiv.org',
				date: '2026-06-13',
			},
		],
		domains: [
			{ name: 'arxiv.org' },
		],
	},
	{
		id: 'f5b8724b-7c67-541b-8cc8-84af0d33218a',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '新工作模式',
		title: 'OpenAI 釋出三門課 搭建企業可複用 AI 工作流',
		short_summary: 'OpenAI 於 6 月 12 日推出三門 OpenAI Academy 課程：AI Foundations、Applied AI Foundations 與 Agents and Workflows，並由 BCG、Accenture、BBVA 共同參與。內容從 AI 基礎操作，進一步帶到可重複的流程規劃，最後導入代理輔助與人機覆核，讓團隊從偶發試用轉向標準化執行。對企業而言，重點不只是學會工具，而是縮短模型部署到可驗證價值的距離。',
		emoji: '🔄',
		did_you_know: '文章將三門課設計為「基礎→流程化→代理協作」遞進，並特別要求在執行中加入檢查點與人類覆核，用意在於讓 AI 工作結果可維護、可複製。',
		talking_points: [
			'課程分級設計：三門課分別對應 AI 基礎建立、可重複流程規劃、代理輔助執行，將學習路徑明確對應工作上線節奏。',
			'基礎先行而非炫技：AI Foundations 聚焦提示詞、背景資訊輸入、輸出回顧與責任使用，目標是改善日常任務品質與效率。',
			'流程化核心：Applied AI Foundations 要求學員規畫正確輸入、模型、工具、檢查點與人工校對，將零散技巧轉成可複用作業程序。',
			'代理合作新框架：Agents and Workflows 強調設定 context、輸出邊界與可回溯檢核，人類維持判斷關卡，避免全自動黑盒作業。',
			'產線可持續更新：課程由研究、產品、安全與部署團隊共同塑形，未來可隨模型與安全實務變化調整，避免一次性訓練失效。',
		],
		quote: 'Together, the courses take learners from improving one everyday task, to building a repeatable workflow plan, to practicing an agent-assisted workflow they can apply to future work.',
		quote_attribution: 'OpenAI, 2026-06-12',
		quote_source_url: 'https://openai.com/index/academy-courses-applying-ai-at-work',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: 'OpenAI 的角度偏向產品佈署治理：AI 價值不在單次互動，而在可回溯、可重複的人機流程，適合需要跨部門一致作法的組織快速擴散。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/academy-courses-applying-ai-at-work',
					},
				],
			},
			{
				text: '合作夥伴觀點是可實務落地：BCG、Accenture、BBVA 都將焦點放在流程、成本與審核機制上，顯示企業期待藉由課程降低導入門檻並穩定治理。',
				sources: [
					{
						name: 'BCG/Accenture/BBVA',
						url: 'https://openai.com/index/academy-courses-applying-ai-at-work',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-12',
				date_iso: '2026-06-12',
				content: 'OpenAI 發布三門新 OpenAI Academy 課程，宣告由基礎 AI 到代理協作流程的培訓路徑。',
			},
		],
		articles: [
			{
				title: 'New OpenAI Academy courses for the next era of work',
				link: 'https://openai.com/index/academy-courses-applying-ai-at-work',
				domain: 'openai.com',
				date: '2026-06-12',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: '3288f1dc-128e-5f86-9947-698e4729aff4',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '新工作模式',
		title: 'Preply用AI重塑外語課後回饋',
		short_summary: 'Preply 已把 OpenAI API 整合為「Lesson Insights」流程，讓每次1對1外語課結束後先轉錄逐字稿，再由 AI 自動產生文法、字彙與發音回饋。導師可少做大量課後整理，學員也能較快掌握進度。公司層級導入 ChatGPT Enterprise 之後，週活躍率從60%升到95%，顯示AI不只是加值功能，而是正式進入日常教學作業流程。',
		emoji: '🧩',
		did_you_know: 'Preply 是全球大型線上語言學習市集，導師規模超過10萬人、服務逾180國與90種語言；其員工端導入AI後的每週使用率上升到95%，代表大規模流程化已在進行中。',
		talking_points: [
			'流程自動化：每堂課結束後先轉為逐字稿，AI按文法、字彙、發音三類產生個別回饋與練習方向。',
			'導師工時轉移：平台先完成課後大量紀錄與摘要，導師可把時間集中在對話陪伴與下一次教學設計。',
			'組織採用：Preply 規模化導入 ChatGPT Enterprise，約600名員工參與，週活率由60%提升到95%。',
			'持續採用：Lesson Insights 已有超過70%導師主動使用，且滿意度達4.7/5，顯示工具已進入常態流程。',
			'權責設計：學員同意錄音與轉寫後，系統於課程末前自動生成摘要，保留可複核且可追溯的人機共作節點。',
		],
		quote: 'Language learning is fundamentally human. It requires conversation, confidence, motivation and cultural understanding.',
		quote_attribution: 'OpenAI（2026-06-12）',
		quote_source_url: 'https://openai.com/index/preply',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '從教學服務角度看，AI被放在行政與追蹤環節，而非替代語言教學本身，讓導師可保留情感陪伴與文化情境的核心價值。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/preply',
					},
				],
			},
			{
				text: '從組織運作角度看，從60%到95% 的高週活躍顯示行為改變，重點不再是單一功能亮點，而是把AI嵌進跨地區教育服務的日常節奏。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/preply',
					},
				],
			},
			{
				text: '從資料治理觀點看，逐字稿先取得授權並即時生成回饋，雖增加流程步驟，但可降低學習歷程黑箱化風險，提升對自動回饋的信任。',
				sources: [
					{
						name: 'Preply（OpenAI 站內案例）',
						url: 'https://openai.com/index/preply',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-12',
				date_iso: '2026-06-12',
				content: 'OpenAI 發佈 Preply 合作案例，說明 Lesson Insights 已導入課後流程並在企業內推行。',
			},
		],
		articles: [
			{
				title: 'How Preply combines AI and human tutors to personalize learning',
				link: 'https://openai.com/index/preply',
				domain: 'openai.com',
				date: '2026-06-12',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: '85bdba50-be5c-555b-9ccd-8e99404095c3',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '新工作模式',
		title: '維州社區投資：2,741 學徒與 1,500 萬美元節電計畫',
		short_summary: '維吉尼亞長期是 Google 的據點，但 AI 基礎建設擴張仍受在地技術人力與電力負擔限制。2026-06-11 公告顯示，Google 擴大社區投入：資助 ALLIANCE 電工職訓，至 2030 年再增 2,741 名學徒，並在能源端新增超過 500 MW 能源容量與 1,500 萬美元 Energy Impact Fund。這代表未來 AI 能力擴張，先決條件是讓地方有可維持的技術供應鏈與能源負載能力，而非只靠雲端服務本身。',
		emoji: '⚡',
		did_you_know: 'Google.org 在全美提出培育超過 30 萬名熟練工的目標，維州方案可視為其地方化版本；2026-06-11 的內容明確用 2,741 學徒、500 MW 能源與 1,500 萬美元三組指標，直接鎖定可操作成效。',
		talking_points: [
			'人才供應：Google 資助 ALLIANCE（etA）電力職訓，目標到 2030 年再新增 2,741 名學徒，優先補齊資料中心營運需要的電力技術工。',
			'既有據點：訊息指出維州已有 Reston 辦公室、Loudoun 與 Prince William 資料中心，本次投入以既有布局為起點，降低重建供應鏈時程。',
			'電力底盤：公告提及已投入超過 500 MW 新能源容量，將電力可得性前置於擴建決策，減少 AI 設備上線受電網波動影響。',
			'成本共感：Energy Impact Fund 規模 1,500 萬美元，資助住宅修繕、保溫與節能升級，目標同步降低居民月繳電費。',
			'新流程：把技能培育、電力擴建、住家節能補助綁為同一套社區策略，AI 設施擴張由此變成可複用的在地作業模式。',
		],
		quote: 'We’re helping build the state’s next-generation workforce and investing in energy programs.',
		quote_attribution: 'Google Blog, 2026-06-11',
		quote_source_url: 'https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/virginia-community-investments/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '企業面向：Google 將學徒培育與能源補助打包，表示 AI 擴張成功與否不只是技術題，而是先把地方供應鏈維修與人力能力建好。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/virginia-community-investments/',
					},
				],
			},
			{
				text: '治理面向：同時推進 500 MW 電力與社區節電補助，形成可量化的社會回饋機制，將企業增量投資與地方民眾電費壓力連在同一個政策流程。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/virginia-community-investments/',
					},
				],
			},
		],
		articles: [
			{
				title: 'Our new community investments in Virginia support local jobs and expand energy affordability',
				link: 'https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/virginia-community-investments/',
				domain: 'blog.google',
				date: '2026-06-11',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
];

const aiApplicationsStories: Story[] = [
	{
		id: '9cd11f30-109c-55a4-b301-dbeeccd67bcf',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '資安信任',
		title: 'CakewordAI：拍物件就能學語彙',
		short_summary: 'Product Hunt 於 2026-06-12 收錄 CakewordAI，孩子只要對準日常物件拍照，App 會即時切出貼紙並用學習語言與母語朗讀名稱，主打「生活即教材」。產品規格採 100% 本機端 AI：以 Apple Vision 識別、Apple Intelligence 翻譯與語音，不仰賴雲端運算；同時宣稱無帳號、無廣告、無資料收集與可離線使用。對想降低備課與隱私負擔的語文教學場景，有「低門檻試行」的參考價值。',
		emoji: '📸',
		did_you_know: '產品內建 Word Dex 的首波詞庫有 102 個日常物件，主題含 Food、Animals、Toys、Vehicles，並設計每約十二次快照會出現一次稀有的 shiny 目標，並搭配 streak、badge 等機制。',
		talking_points: [
			'即拍即學流程：拍照後即時切圖貼紙與發音，將杯子、玩偶、吉他等日常物件直接轉為詞彙卡，縮短傳統 flashcard 預先製卡作業。',
			'端側運算安全網：物件辨識走 Apple Vision，命名與翻譯走 on-device Apple Intelligence，整體推論在手機內完成，降低影像外傳與即時回傳成本。',
			'隱私承諾實作：官方直接宣稱 no account、no ads、no data collection，並以 no server 方式主張家中照片不離開裝置，對兒童 App 的法遵與家長溝通具示範價值。',
			'遊戲化留存機制：Word Dex 初始規劃 102 個詞彙，加入 streak、badge、collector level 與 catch-of-the-day，透過獎勵與稀有機率驅動兒童主動搜集。',
			'多語與採用策略：上線時支援英、德、西、法、義、葡、韓、日、中等多語言，並提供免費版無上限快照，降低學校或家庭試行初期的使用門檻。',
			'可持續營運議題：產品主張「paywall 不阻擋學習」，免費版維持完整體驗，核心價值被放在規模成長與用戶口碑，而非先行高額封鎖式付費。',
		],
		quote: 'There is no server. Which means: Photos of your home and your kid\'s stuff never leave the phone',
		quote_attribution: 'Product Hunt, 2026-06-12',
		quote_source_url: 'https://www.producthunt.com/products/cakewordai-snap-learn',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '教學實作角度看，這個設計把素材搜尋與卡片生成外包給手機視覺，教師可更快把時間放在語意延伸與回饋；但辨識錯誤時的修正機制仍是成效關鍵。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/cakewordai-snap-learn',
					},
				],
			},
			{
				text: '治理與隱私角度上，無帳號與離線運算是明顯亮點，能對抗兒童 App 常見的資料蒐集疑慮；但大規模導入仍要補齊學校端設備相容與家長告知流程。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/cakewordai-snap-learn',
					},
				],
			},
		],
		articles: [
			{
				title: 'CakewordAI',
				link: 'https://www.producthunt.com/products/cakewordai-snap-learn',
				domain: 'producthunt.com',
				date: '2026-06-12',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: '9be8931d-93b1-5685-8f00-fb4a1caaddf9',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '工作方法',
		title: 'Kimi K2.7 Code 打通程式與簡報交付',
		short_summary: 'Product Hunt 在 2026-06-12 公布 Kimi K2.7 Code，宣稱是 Kimi 最強的編碼模型版本。公告聚焦「可編輯 Notebooklm Slides」與設計級視覺輸出，並同步給出 24 小時免費試用與 48 小時簡報無限 nano banana 使用訊號，顯示編碼工具正往可直接輸出可交付成果的流程化方向發展，對知識工作與教育場域而言值得關注其跨流程替代力。',
		emoji: '🚀',
		did_you_know: '產品頁明示兩組明確條件：上線時可免費試用 24 小時，以及簡報場景在 48 小時內有無上限 nano banana 使用。對要驗證工具效益的單位而言，這形成低成本可回收的先導測試窗口。',
		talking_points: [
			'發布訊號：Product Hunt 在 2026-06-12 以討論帖形式推出 Kimi K2.7 Code，並以「most capable coding model yet」作為主張，代表本次主打的是版本定位與能量展示。',
			'流程整併：宣傳將核心賣點寫為「editable Notebooklm Slides」，可把程式產生內容直接接到可編輯簡報中，降低從開發到成果呈現的轉檔摩擦。',
			'設計輸出：描述中提到「Designer level infographic」，將視覺可讀性列入開發價值，提示這類 AI coding 用途正從純邏輯輸出轉向可交付作品品質。',
			'限時誘因：文中明訂「24 小時免費」與「48 小時無限 nano banana」，提供短週期擴散與驗證流程，也讓採購端可先用量化體驗取代長期承諾。',
			'社群擴散：貼文以 launch 支援導向語句結尾，配合討論頁機制，形成先導使用者與回饋共建的產品迭代節奏，利於早期功能修正。',
		],
		quote: 'Try it FREE (unlimited for next 24 hours)',
		quote_attribution: 'Product Hunt, 2026-06-12',
		quote_source_url: 'https://www.producthunt.com/products/kimi-ai-assistant',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品宣傳者以視覺化與試用誘因為主軸，核心是在最快時間吸引用戶把模型實作到簡報與提案流程，反映其訴求是降低交付阻力，而非先鋪陳模型規格細節。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/kimi-ai-assistant',
					},
				],
			},
			{
				text: '從教育採用者觀點，這則訊息可借鏡「從開發到發佈」的一段式流程，但因缺乏效能、資安、價格與穩定度數據，仍需內部先做 A/B 試點，再決定是否擴大應用。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/kimi-ai-assistant',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-12',
				date_iso: '2026-06-12',
				content: 'Product Hunt 上線 Kimi K2.7 Code 討論頁並定位為最新版本編碼模型的發布訊號。',
			},
			{
				date: '2026-06-12',
				date_iso: '2026-06-12',
				content: '同頁公告提供 24 小時免費試用與簡報場景 48 小時 nano banana 無上限，作為首波試用條件。',
			},
		],
		articles: [
			{
				title: 'Kimi K2.7 Code',
				link: 'https://www.producthunt.com/products/kimi-ai-assistant',
				domain: 'producthunt.com',
				date: '2026-06-12',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'c23c1d67-73d8-58f0-96aa-cb731ee2e427',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用',
		title: 'Qursor 以精準 UI 元件上下文降低 AI 改網頁失誤',
		short_summary: 'Product Hunt 在 2026-06-12 公開 Qursor，目標是解決 AI 代理改網頁時常見的元素定位錯誤與反覆描述問題。工具允許使用者直接點選指定 UI 元件，複製含 selector、class、樣式、字型與色值的結構化上下文後貼進 AI 對話，並可同時擷取 HTML/CSS/JSX 或下載素材。這將以截圖與口頭補充為主的流程，轉為可重複套用的低摩擦工作流，對前端維運與知識工作場景具可借鏡性。',
		emoji: '🧩',
		did_you_know: '貼文與回饋指出，單張 1440×720 截圖可能消耗數百 AI tokens；若每天重複 10 次到 15 次 UI 微調，成本會快速累積，而 Qursor 試圖透過結構化元素資訊降低這種消耗。',
		talking_points: [
			'痛點精準定位：Qursor 核心是先點選 UI 元件再複製可讀資訊，縮短「那個藍色按鈕在哪裡」的反覆描述，代理可直接對應到正確 target。',
			'成本型流程轉換：原先常見 1440×720 截圖配合補充說明，會再加上回合式溝通，現在可用單一提取結果直接交接，減少 token 與時間浪費。',
			'多格式交付：除了 CSS 樣式與類別，工具同時支援 HTML/CSS/JSX 擷取與 SVG/PNG/JPG 下載，讓設計修改與文件保存同時可追溯。',
			'字體色彩自動捕捉：工具會把字型與顏色一併帶入上下文，避免僅傳文字描述造成的視覺差異，對品牌一致性維護可直接落地。',
			'導入門檻設計：官方訴求免費方案每天 3 次，並提供 39 美元一次付費方案，對小團隊可先小規模試用再決定是否擴充。',
			'代理協作示例：貼文中特別提到讓客戶逐一標註欲修改元素，搭配 Qursor 提取上下文，可把多人對 UI 需求的歧義降到最低。',
		],
		quote: 'No vague screenshots. No burned credits.',
		quote_attribution: 'Product Hunt，2026-06-12',
		quote_source_url: 'https://www.producthunt.com/products/qursor',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '從產品發起端看，焦點在流程失效：代理若拿不到明確上下文就會改錯，真正可加值的是把 UI 指令標準化，而非再教更長的提示詞技巧。',
				sources: [
					{
						name: 'Product Hunt 官方頁面',
						url: 'https://www.producthunt.com/products/qursor',
					},
				],
			},
			{
				text: '社群回饋則補充實務痛點：過去常靠 Inspect + 截圖 + 原始碼拼接才能解釋需求，Qursor 的一站式提取讓多次來回與手動比對時間明顯下降。',
				sources: [
					{
						name: 'Product Hunt 留言串',
						url: 'https://www.producthunt.com/products/qursor',
					},
				],
			},
			{
				text: '從導入策略觀點，免費每天 3 次限制與 $39 方案形成「低風險試用—快速轉正」路徑，對想驗證 AI 協作效率的工作室可降低初始採用阻力。',
				sources: [
					{
						name: 'Product Hunt 產品頁',
						url: 'https://www.producthunt.com/products/qursor',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-12',
				date_iso: '2026-06-12',
				content: 'Product Hunt 上線 Qursor 專案頁並公開其核心功能：點選 UI 元件後複製 selectors、classes、樣式、字型與色值供 AI 代理使用。',
			},
		],
		articles: [
			{
				title: 'Qursor',
				link: 'https://www.producthunt.com/products/qursor',
				domain: 'producthunt.com',
				date: '2026-06-12',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: '6389d014-9157-5443-8fba-77954802e517',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '新工作模式',
		title: '本機優先 AI CLI 讓碎片時間變生產力',
		short_summary: 'Product Hunt 的 Bob\'s CLI 將 AI coding 從雲端流程改為本機可控的工作模式。產品主打「記住專案架構與對話」與 `bob chat`、`bob push`、`bob serve` 等指令，降低開發者在中斷後回到專案時的上下文重建成本。對同時要兼顧本業與副業的團隊而言，這種本機優先與零 API 成本思路，重點在於把時間浪費改成可預期的持續交付。',
		emoji: '⚡',
		did_you_know: '該篇產品頁目前顯示 245 位追蹤者，且文案明確宣示以本機執行、免費方案零 API 成本為賣點，屬於「工具定位先行」而非一般功能清單型介紹。',
		talking_points: [
			'碎片時間接續開發：文章以通勤、下班前、午休等時間段為主軸，透過保存專案上下文與上次對話，設計讓開發不中斷。',
			'本機優先降低門檻：它主張 AI 運行在使用者硬體，並提供免費方案零 API 成本，對預算有限的小團隊可直接形成試用優勢。',
			'行為記憶優化流程：產品強調會記錄開發者決策與作答偏好，再搭配對話分支與自動 code review，目標是減少任務切換後的回憶成本。',
			'一令收斂工作流：`bob push` 被設計為「stage、commit、push」的一體化動作，將傳統分散式發佈鏈簡化成可重複執行的終端指令。',
			'遠端協作新路徑：啟用 `bob serve` 後可於手機下令，桌機完成檔案處理與寫入，示範了本機資料與行動入口共存的開發協作模型。',
		],
		quote: 'You don\'t need to bet your livelihood to build something incredible. You just need a tool that multiplies the limited time you have.',
		quote_attribution: 'Product Hunt, 2026-06-12',
		quote_source_url: 'https://www.producthunt.com/products/bob-s-cli',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '此案例把「仍要上班」放在產品前提，與很多要求全職投入的 AI 工具敘事不同，重點在延長工作續航，而非重設人生節奏，對兼顧工作與副業的使用者有直接可借鏡價值。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/bob-s-cli',
					},
				],
			},
			{
				text: '它以「本機先行」對應雲端 API 成本與隱私風險，暗示在 AI 導入上可優先評估「資料留在本機」與「流程可持續」兩個條件，非只看模型精度。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/bob-s-cli',
					},
				],
			},
			{
				text: '產品把 CLI 與專案記憶整合為主張，將 AI 從靜態輔助工具變成開發節奏的一部分，對教育與研究工作的可遷移點在於：在低時間配額下仍維持可追蹤、可回溯的學習/產出流程。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/bob-s-cli',
					},
				],
			},
		],
		articles: [
			{
				title: 'Bob\'s CLI',
				link: 'https://www.producthunt.com/products/bob-s-cli',
				domain: 'producthunt.com',
				date: '2026-06-12',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'd44e4f88-2a9a-5e26-9da0-38167477876f',
		cluster_number: 6,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '工作方法',
		title: 'LocIn AI：把語調控管變成在地化工作流',
		short_summary: 'Product Hunt 的 LocIn AI 將在地化從傳統「字面翻譯」拉回到產品語氣與流程治理，強調可讓模型理解全域專案脈絡。團隊回應指出，工具會檢查未翻譯內容、缺漏鍵值、檔案結構與 placeholder 問題，並可在 CI 以 `--min-coverage` 固定最低翻譯比例。這代表多語產品可把人工校對與口吻一致性問題，轉為可追溯的自動化節點。',
		emoji: '🌐',
		did_you_know: '貼文中提供的實務清單提到 LocIn AI 會自動驗證 HTML 標籤與 placeholder 是否一致，也會比對翻譯長短與未翻譯字串，針對兩字按鈕等薄上下文情境降低語意走樣風險。',
		talking_points: [
			'核心痛點：產品在地化不只要「翻得對」，也要符合品牌語調與使用情境，否則會出現同一功能在不同語系像不同產品的失衡。',
			'做法轉向：LocIn AI 以 tone profile、術語表與專案內容串接模型推理，試圖補足兩字按鈕等上下文極薄情境的語意理解。',
			'品質守門：工具檢查未翻譯字串、缺鍵值、檔案結構錯誤與 placeholder mismatch，並確認 HTML 像 <strong>、<br> 是否保留。',
			'流程整併：討論中可見前線常用 spreadsheets、ChatGPT、DeepL、Crowdin、Lokalise 等分散工具，LocIn AI 主打把這些步驟收斂到一套工作流。',
			'工程控管：提供 `--min-coverage` 在 CI 的最小翻譯覆蓋率機制，將本地化品質要求前移到提交/整合階段，不必等到上線前再大量人工抽查。',
			'可信回饋：其團隊在 2026-06-11 的討論回覆中邀請試用與回報意見，顯示這類工具仍以現場迭代方式調整與整合實務場景。',
		],
		quote: 'Tone-aware is the part most localization tools quietly skip.',
		quote_attribution: 'Product Hunt, 2026-06-11',
		quote_source_url: 'https://www.producthunt.com/products/locin-ai',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '從產品語氣治理角度看，這類方案把重點放在「品牌一致性」而非只算字句正確，對出口型 SaaS 的體驗品質是可複製但容易被忽略的價值。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/locin-ai',
					},
				],
			},
			{
				text: '從工程作法看，創業者承認流程仍難以完美理解上下文，卻主張以專案資料與規則化檢核取代散裝翻譯工具，核心張力在於效率與品質風險的平衡。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/locin-ai',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-11',
				date_iso: '2026-06-11',
				content: 'Product Hunt 公開 LocIn AI 討論，團隊回應中補充品質檢核規格與 CI min-coverage 等工作流程設計。',
			},
		],
		articles: [
			{
				title: 'LocIn AI',
				link: 'https://www.producthunt.com/products/locin-ai',
				domain: 'producthunt.com',
				date: '2026-06-11',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
];

const workMethodsStories: Story[] = [
	{
		id: 'fcbe620d-4ea2-502f-9d0d-2a8d3d5c5ad5',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '工作方法',
		editorial_lens: '工作方法',
		title: 'Pyodide 套件改走 PyPI 供應鏈',
		short_summary: 'Pyodide 314.0 正式支援將符合 PyEmscripten 的 Python 套件直接上架至 PyPI，並在執行時安裝。過去 Pyodide 團隊必須維護、建置與寄存超過 300 個套件，導致新套件每次都需人工審查，成為明顯瓶頸。新流程讓套件維運轉為社群可持續供應，開發者可沿用既有 wheel 流程發佈，原文以 luau-wasm 276KB 套件示範可行性，對任何需要瀏覽器端 Python 生態的教學或工具團隊，代表可複製、可擴張的工作流更新。',
		emoji: '📦',
		did_you_know: '原文透露 Pyodide 過去維運負擔超過 300 套件，關鍵阻力在「新套件需手動審查」。新機制下只要建立適當 wheel 發佈流程，就能直接走 PyPI 生態，並透過 runtime 安裝縮短交付時間。',
		talking_points: [
			'流程改造：Pyodide 314.0 開放 PyPI 發佈 PyEmscripten wheel，讓套件安裝可在執行時完成，與 Linux/macOS/Windows 原生 wheel 流程接近一致，團隊協作效率可直接提升。',
			'原有人力負擔：原文明確提到維運團隊曾自建、編譯與托管超過 300 個套件，且每個新套件都要人工 review，維護成本極高。',
			'落地實證：示範套件 luau-wasm 僅 276KB，可由 GitHub Actions 產出並上傳後，在 Pyodide REPL 跑出實際程式，顯示機制非概念驗證而是可操作。',
			'關鍵時點：文件中提到 2026-04-21 PR 已著陸 PyPI，6/13 公開指出 Pyodide 314.0 已將能力導入，形成可追溯的制度時間線。',
			'方法論重點：將 wheel 命名、建置、發佈、安裝驗證寫入固定模板（含版本與工具如 cibuildwheel、micropip），可把「套件補齊」從個案動作轉為可交接的流程資產。',
		],
		quote: 'You can now publish Python packages built for Pyodide (or any Python runtime compatible with the PyEmscripten platform defined in PEP 783) directly to PyPI and install them at runtime.',
		quote_attribution: '技術部落格，2026-06-13',
		quote_source_url: 'https://simonwillison.net/2026/Jun/13/publishing-wasm-wheels/#atom-entries',
		quote_source_domain: 'simonwillison.net',
		perspectives: [
			{
				text: '這個改版把瓶頸從「平台要不要收進套件」變成「平台要怎麼控管質量」。工程團隊可把精力放在流程與相容性設計，而非逐包補齊。',
				sources: [
					{
						name: 'simonwillison.net',
						url: 'https://simonwillison.net/2026/Jun/13/publishing-wasm-wheels/#atom-entries',
					},
				],
			},
			{
				text: '教育科技團隊若以瀏覽器工具為核心產品，這是把套件生態從小團隊依賴轉為共建機制的典型案例，但實作上需保留自有 CI 與安全閘道，否則維運複雜度會轉移到下游。',
				sources: [
					{
						name: 'simonwillison.net',
						url: 'https://simonwillison.net/2026/Jun/13/publishing-wasm-wheels/#atom-entries',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-03-09',
				date_iso: '2026-03-09',
				content: '作者提到先前在 3 月 9 日完成 Luau 相關 WebAssembly 研究試作，作為後續封裝實驗素材。',
			},
			{
				date: '2026-04-21',
				date_iso: '2026-04-21',
				content: 'PyPI 針對 PyEmscripten 平台之支援 PR 在此日上線。',
			},
			{
				date: '2026-06-13',
				date_iso: '2026-06-13',
				content: 'Pyodide 314.0 發表，明確認可直接將 PyEmscripten 版套件上傳 PyPI 並執行時安裝。',
			},
		],
		articles: [
			{
				title: 'Publishing WASM wheels to PyPI for use with Pyodide',
				link: 'https://simonwillison.net/2026/Jun/13/publishing-wasm-wheels/#atom-entries',
				domain: 'simonwillison.net',
				date: '2026-06-13',
			},
		],
		domains: [
			{ name: 'simonwillison.net' },
		],
	},
	{
		id: 'c3e8249a-fdbe-59af-8fb9-85593426a894',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '工作方法',
		editorial_lens: '代理管理',
		title: 'Fable 主動除錯啟示：AI 代理可接手排錯主動權',
		short_summary: '2026 年 6 月 11 日的文章記錄，作者測試 Claude Fable 5 兩天後，觀察到這個 AI 代理在修復 Datasette 介面問題時會主動延展動作：先查相依套件，再建置可重現頁面，最後嘗試透過瀏覽器截圖驗證。文章重點不在「AI 很聰明」，而是顯示單一代理可承接高摩擦的除錯鏈，讓工程師把時間留給判斷與收斂；同時也讓權限控管與可稽核流程成為導入前提。',
		emoji: '🧪',
		did_you_know: '文章指出它會在本機環境自動執行指令、開啟測試頁並抓取畫面，並非只回報建議；加上 `uv run --with pyobjc-framework-Quartz` 與 `screencapture` 等系統工具後，代理可直接產出可驗證的除錯證據。',
		talking_points: [
			'主動分解：使用者只要求找出橫向捲軸異常來源，Fable 即主動往 Datasette 相依套件與模板邏輯展開鑽研，展現任務導向的行為。',
			'本機可複現：它不只觀察錯誤畫面，而是建立暫存 HTML、啟動本機服務，將問題轉為可重跑的步驟化流程，降低臨場偶發性。',
			'視窗操作證據：透過 `pyobjc-framework-Quartz` 列舉視窗並抓取指定視窗圖像，能把 GUI 動作留下截圖證據，讓除錯有實際檢核素材。',
			'工具鏈拼接力：文中顯示一個代理可同時串接程式碼修改、測試、瀏覽器操作與影像比對，代表除錯步驟可做成複利化的工作流。',
			'治理與安全警訊：流程中出現自動開啟 Safari/Firefox、觸發互動視窗等動作，實務上需預先定義可執行工具白名單、操作日誌與回滾規則。',
		],
		quote: 'It knows a whole lot of tricks and it will deploy pretty much any of them to get to its goal.',
		quote_attribution: '開發者部落格, 2026-06-11',
		quote_source_url: 'https://simonwillison.net/2026/Jun/11/fable-is-relentlessly-proactive/#atom-entries',
		quote_source_domain: 'simonwillison.net',
		perspectives: [
			{
				text: '就開發流程而言，文章可被解讀為代理化除錯的可行樣態：從需求拆解、環境操作到結果驗證都可自動化，工程師可把時間放回到設計判斷與釐清需求，而非反覆手動驗證。',
				sources: [
					{
						name: '技術部落格記錄',
						url: 'https://simonwillison.net/2026/Jun/11/fable-is-relentlessly-proactive/#atom-entries',
					},
				],
			},
			{
				text: '同一個實例也暴露治理張力：只要代理能直接動到本機與瀏覽器，就可能進入越權作業邊界。團隊若要放大此模型，安全控制、稽核紀錄與撤回機制必須先於效能增益落地。',
				sources: [
					{
						name: '開發者社群實務觀察',
						url: 'https://simonwillison.net/2026/Jun/11/fable-is-relentlessly-proactive/#atom-entries',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-11',
				date_iso: '2026-06-11',
				content: '作者在兩天使用期後發布實測，紀錄 Fable 5 在排查 Datasette 水平捲軸問題時，自主建立測試頁、呼叫系統工具擷取視窗畫面並反覆比對結果。',
			},
		],
		articles: [
			{
				title: 'Claude Fable is relentlessly proactive',
				link: 'https://simonwillison.net/2026/Jun/11/fable-is-relentlessly-proactive/#atom-entries',
				domain: 'simonwillison.net',
				date: '2026-06-11',
			},
		],
		domains: [
			{ name: 'simonwillison.net' },
		],
	},
];

const aiEduStories: Story[] = [
	{
		id: 'ed4c8b3d-7702-5365-85f7-f1ca3414fa5f',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '治理授權',
		title: 'AI巨頭加速，學校AI治理仍待補',
		short_summary: '6/2–6/12 這十天，AI 在模型、資本與政治上同步躍進：Anthropic 推出 Claude Fable 5，OpenAI 在 6/8 發佈《Built to benefit everyone》，ChatGPT 月活也突破十億。同週教師端卻反映到課堂仍未落地，三分之四 K–12 教師預期 AI 衝擊超過網際網路，但有半數教師看到學生主要在下課後才在手機使用。另有研究面資料顯示僅五州要求學校訂定 AI 政策、僅 13% 教師認為學區規範清楚，顯示教育治理在速度上被明顯落在後面。',
		emoji: '⚖️',
		did_you_know: '原文同時比較了兩端訊號：模型資本發展與資安治理節奏不同步，四分之三教師認為影響巨大，但只有約五成教師說學生不在課堂使用，這個空檔最先被放大成教學公平與監督盲點。',
		talking_points: [
			'模型落後速度：Anthropic 推出 Claude Fable 5 並強調 90% 程式碼由 AI 生成，顯示生成式工具正往高度自動化邁進。',
			'使用規模暴衝：ChatGPT 月活使用者突破十億，超過多數主流平台，顯示學生與教師接觸 AI 的外部環境已進入高滲透期。',
			'教師觀察分歧：超過七成 K–12教師預估 AI 影響會超越網路革命，但半數教師回報學生主要在課後手機使用，不在課堂可見。',
			'政策落差明顯：全美僅五州要求學校訂 AI 政策，僅 13% 教師認為學區有明確規範，現場法規密度明顯不足。',
			'AI治理與學習場域錯位：文章提到企業文件已為 Work 與 Live 建構治理框架，卻缺乏可直接對應 Learn 的學校實作規則。',
		],
		quote: 'Labs wrote frameworks for Work and Live. Nobody wrote the one for Learn — and that’s the document that matters most.',
		quote_attribution: 'Substack (2026-06-12)',
		quote_source_url: 'https://stefanbauschard.substack.com/p/june-12-update-the-week-the-world',
		quote_source_domain: 'stefanbauschard.substack.com',
		perspectives: [
			{
				text: '從產業面看，本文把焦點放在模型、資金與政治訊號快速重疊：Anthropic、OpenAI、資本市場同時加速，讓 AI 的制度化速度高於傳統教育系統，現場可見的是治理優先序轉向而非教材方法論。',
				sources: [
					{
						name: 'Substack',
						url: 'https://stefanbauschard.substack.com/p/june-12-update-the-week-the-world',
					},
				],
			},
			{
				text: '另一個張力來自學校端：K–12 教師已觀察到 AI 影響深遠，但現場資料顯示多數使用發生在課堂外，缺政策與工具邊界，使學校難以在公平、監管與行政流程上同步，教學效果與風險並行上升。',
				sources: [
					{
						name: 'Substack',
						url: 'https://stefanbauschard.substack.com/p/june-12-update-the-week-the-world',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-02',
				date_iso: '2026-06-02',
				content: '文章將 6 月 2 日到 12 日定義為變化快速的十日，模型、採用與政治訊號同時升溫。',
			},
			{
				date: '2026-06-08',
				date_iso: '2026-06-08',
				content: 'OpenAI 在 6/8 發佈《Built to benefit everyone》政策文件，明確描述未來 AI 研究、自動化與經濟擴散方向。',
			},
			{
				date: '2026-06-12',
				date_iso: '2026-06-12',
				content: '作者於 6/12 發表周報，彙整 Anthropic 的 Claude Fable 5、ChatGPT 十億月活與教育端政策缺位的落差。',
			},
		],
		articles: [
			{
				title: 'June 12 Update: The Week the World Changed a Lot and the Classroom Changed a Little',
				link: 'https://stefanbauschard.substack.com/p/june-12-update-the-week-the-world',
				domain: 'stefanbauschard.substack.com',
				date: '2026-06-12',
			},
		],
		domains: [
			{ name: 'stefanbauschard.substack.com' },
		],
	},
	{
		id: 'a5d0a238-3949-55ad-a5a5-0c5aa836815e',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '研究證據',
		title: 'AI 幫助學習，關鍵是防止認知投降',
		short_summary: 'Edsurge 的這則專欄指出，AI 可快速回應學習問題，但未必等於真正學會。文章引用研究後整理兩個信號：自由版 LLM 易讓學生直接接受答案，降低腦力參與與保留；但在大學初階物理課中，搭配教師設計流程的 AI tutor，學習成效可達對照組兩倍。更重要的是，問題不是能否用 AI，而是 AI 要出現在何種教學關卡，否則容易取代思考而非提升學習。',
		emoji: '🧠',
		did_you_know: '研究指出，與一般面授相比，某項大學初階物理課在結構化 AI tutor 並配合教師指導下，學習增益可達兩倍，但高階綜合與批判任務仍不建議完全交給 AI。',
		talking_points: [
			'即時答案不等於學會：園童問「恐龍 50 磅」時，AI 可即時查出答案，但作者認為真正保留知識的是學習者本人，AI只是加速提問與回饋。',
			'認知投降風險：文章認為自由版 LLM 導向直接給答案，最容易讓學生不再查證，形成對答案的過度信任，影響腦力參與與長期保留。',
			'研究見證差異：在一門大學初階物理課實驗中，使用精心設計 AI tutor 的學生，學習增益達到一般活躍面授組的兩倍。',
			'任務邊界不能亂用：該研究警示複雜多概念整合、跨步驟推理與高階批判的任務，不宜交由 AI 獨立完成，需保留教師引導與討論流程。',
			'政策實務訊號：文章提到愛沙尼亞教育部長推動高中 AI 平台（與 OpenAI 合作）時採混合式策略，顯示官方仍偏向「AI 輔助」而非「AI 代勞」。',
		],
		quote: 'The question for educators: How to know when AI supports real learning.',
		quote_attribution: 'Edsurge，2026-06-12',
		quote_source_url: 'https://edsurge.com/news/ai-wont-replace-educators-but-it-is-changing-how-students-learn',
		quote_source_domain: 'edsurge.com',
		perspectives: [
			{
				text: '實證導向觀點認為，AI 是否有成效取決於教學設計。對可量化基礎技能，導師式 AI 可提升學習；若缺乏設計，結果可能只是答案搜尋，教師失去學習仲裁。',
				sources: [
					{
						name: 'Edsurge',
						url: 'https://edsurge.com/news/ai-wont-replace-educators-but-it-is-changing-how-students-learn',
					},
				],
			},
			{
				text: '另一個張力在於學習品質治理。文章將標準免費 LLM 視為高風險情境，指出過度依賴會壓低批判力，提醒教師社群先重建提問與驗證流程，而非只追求題目秒回。',
				sources: [
					{
						name: 'Edsurge',
						url: 'https://edsurge.com/news/ai-wont-replace-educators-but-it-is-changing-how-students-learn',
					},
				],
			},
			{
				text: '政策與導入層面的信號則較務實：愛沙尼亞教育部長推動的高中 AI 平台採客製合作與混合模式，顯示官方關注的是制度化落地與監督，支持「人機共學」而非全面開放。',
				sources: [
					{
						name: 'Edsurge',
						url: 'https://edsurge.com/news/ai-wont-replace-educators-but-it-is-changing-how-students-learn',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-12',
				date_iso: '2026-06-12',
				content: 'Edsurge 發布專欄，集中討論 AI 在教育現場的成效與邊界，並以研究資料支持「AI 可加乘但不能替代」的判斷。',
			},
		],
		articles: [
			{
				title: 'AI Won’t Replace Educators. But It is Changing How Students Learn.',
				link: 'https://edsurge.com/news/ai-wont-replace-educators-but-it-is-changing-how-students-learn',
				domain: 'edsurge.com',
				date: '2026-06-12',
			},
		],
		domains: [
			{ name: 'edsurge.com' },
		],
	},
	{
		id: 'd54e757e-eb42-51b0-aa3e-721bf88690bc',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '研究證據,教學流程,新觀念',
		title: 'AI 時代不是更多答案，而是學會問對問題',
		short_summary: '均一平台在「2026 未來教育國際論壇」指出，台灣在少子化與人才壓力下，學習的關鍵不是加速給答案，而是讓學生學會把「我不會」轉成可行的提問與再作答流程。其與國教院、龍埔國小研究223位學生、共92,818筆紀錄，成績落差由59.4到92.8不等，顯示同齡學生結果差異仍大。研究核心是提問後是否回頭練習可預測成效，AI更像學習腳手架，決定性在教學設計與老師陪伴節點。',
		emoji: '🧠',
		did_you_know: '一場40分鐘的數學課中，龍埔國小兩班共60名學生可產生超過600個問題；中崙高中重補修個案也顯示，OMO下同時用紙本、線上影片與AI筆記本，能幫低谷學生回到持續完成的軌道。',
		talking_points: [
			'學習曲線：論壇以鄧寧-克魯格效應拆解學習階段，從「不懂但很有把握」到發現差距的跌落，再靠持續提問重建認知。',
			'研究規模：國教院與龍埔國小追蹤223名學生、92,818筆學習事件，四組學生的期末平均成績從59.4到92.8，差異相當明顯。',
			'提問行為：成績較低組AI使用不低，但多停留在「我不會」「幫我解答」；研究指出不再追問與驗證，難以轉成穩定學習。',
			'關鍵機制：研究發現，問完AI後是否回去做題，比單純AI使用次數更能預測成效，AI是觸發器而非答案終點。',
			'OMO場域化：紙本講義、線上影片與AI筆記本並用讓老師有時間巡堂，補救與重修課程更能盯到個別學生需求與情緒回復。',
		],
		quote: 'AI 時代，孩子最需要的不是更多答案，而是學會問對問題。',
		quote_attribution: '均一平台，2026-06-11',
		quote_source_url: 'https://official.junyiacademy.org/blog/ai-%e6%99%82%e4%bb%a3%e5%ad%a9%e5%ad%90%e6%9c%80%e9%9c%80%e8%a6%81%e7%9a%84%e4%b8%8d%e6%98%af%e6%9b%b4%e5%a4%9a%e7%ad%94%e6%a1%88%e8%80%8c%e6%98%af%e5%ad%b8%e6%9c%83%e5%95%8f%e5%b0%8d%e5%95%8f/',
		quote_source_domain: 'official.junyiacademy.org',
		perspectives: [
			{
				text: '平台觀點將AI視為提問腳手架，核心不是取代教師，而是讓老師把時間從單向講解轉向陪伴與分組巡堂，對基礎學習者更有利。',
				sources: [
					{
						name: '均一平台',
						url: 'https://official.junyiacademy.org/blog/ai-%e6%99%82%e4%bb%a3%e5%ad%a9%e5%ad%90%e6%9c%80%e9%9c%80%e8%a6%81%e7%9a%84%e4%b8%8d%e6%98%af%e6%9b%b4%e5%a4%9a%e7%ad%94%e6%a1%88%e8%80%8c%e6%98%af%e5%ad%b8%e6%9c%83%e5%95%8f%e5%b0%8d%e5%95%8f/',
					},
				],
			},
			{
				text: '研究面向強調量化驗證：在同場域中，AI 用量不是唯一解釋變項，作答後行為（是否再做題）才是影響成效的中介。',
				sources: [
					{
						name: '國教院',
						url: 'https://official.junyiacademy.org/blog/ai-%e6%99%82%e4%bb%a3%e5%ad%a9%e5%ad%90%e6%9c%80%e9%9c%80%e8%a6%81%e7%9a%84%e4%b8%8d%e6%98%af%e6%9b%b4%e5%a4%9a%e7%ad%94%e6%a1%88%e8%80%8c%e6%98%af%e5%ad%b8%e6%9c%83%e5%95%8f%e5%b0%8d%e5%95%8f/',
					},
				],
			},
			{
				text: '跨學段延展上，資料同時涵蓋小學龍埔與高中重補修案例，訊號不在單一學段優化，而是可複製的教學陪伴與追蹤節點。',
				sources: [
					{
						name: '龍埔國小/中崙高中案例',
						url: 'https://official.junyiacademy.org/blog/ai-%e6%99%82%e4%bb%a3%e5%ad%a9%e5%ad%90%e6%9c%80%e9%9c%80%e8%a6%81%e7%9a%84%e4%b8%8d%e6%98%af%e6%9b%b4%e5%a4%9a%e7%ad%94%e6%a1%88%e8%80%8c%e6%98%af%e5%ad%b8%e6%9c%83%e5%95%8f%e5%b0%8d%e5%95%8f/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-11',
				date_iso: '2026-06-11',
				content: '均一平台在「2026 未來教育國際論壇」新北場發表 AI 學習觀點，提出由提問品質、課堂紀錄與OMO模式串起的教學流程。',
			},
		],
		articles: [
			{
				title: 'AI 時代，孩子最需要的不是更多答案，而是學會問對問題',
				link: 'https://official.junyiacademy.org/blog/ai-%e6%99%82%e4%bb%a3%e5%ad%a9%e5%ad%90%e6%9c%80%e9%9c%80%e8%a6%81%e7%9a%84%e4%b8%8d%e6%98%af%e6%9b%b4%e5%a4%9a%e7%ad%94%e6%a1%88%e8%80%8c%e6%98%af%e5%ad%b8%e6%9c%83%e5%95%8f%e5%b0%8d%e5%95%8f/',
				domain: 'official.junyiacademy.org',
				date: '2026-06-11',
			},
		],
		domains: [
			{ name: 'official.junyiacademy.org' },
		],
	},
	{
		id: '2fdca981-c35e-548d-8dac-397d6cc08cf1',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '新觀念',
		title: '中學生AI營隊：作品自有化讓「作弊」論爭失焦',
		short_summary: '美國一位 AI 夏令營觀察者指出，針對中學生的兩梯次 AI 夏令營顯示，問題不在「孩子是否作弊」，而在任務是否讓孩子擁有作品。第一梯先用約15小時訓練敘事，再搭配 Gemini、Canva 進行創作；第二梯改用 Google AI Studio、Replit 做創業實作。文章提到部分孩子一週可完成短書，且兩梯營隊已舉行、第三梯下週開課。文章因此主張，當作業可歸屬於學習者，AI 會轉化為深化投入的工具，而不是單純繞過規則的手段。',
		emoji: '🚀',
		did_you_know: '作者寫到第一梯先做「角色、情節、主題」等基礎；第二梯先訂問題與受眾，再做 App。文中也提到部分孩子課前就會 Replit，營隊第三梯已宣布下週開跑。',
		talking_points: [
			'雙軌實務：第一軌主打 AI 敘事營，第二軌主打青年創業營，兩者都要求學員完成可展示成果，降低只靠文字抄寫的空洞練習空間。',
			'先教材後工具：故事營在約15小時課程中先教角色、情節與主題，再引入 AI 寫作，目標是先建立作品邏輯再引導工具加值。',
			'中學生交件速度：觀察顯示學員可在一週內完成含主線與主題的短書，且搭配 Gemini 圖像與 Canva 做輔助呈現。',
			'創業流程具體化：學員先定義真實問題與目標受眾，接著用 Google AI Studio 與 Replit 開發作品原型，工具不是目標而是載體。',
			'治理觀念轉折：作者對比現場專注創作與學校常見偵測軟體、榮譽制度改寫、禁令管理，主張核心是任務設計而非只防範學生。',
		],
		quote: 'Cheating is a property of the assignment, not the student.',
		quote_attribution: 'Substack 2026-06-11',
		quote_source_url: 'https://stefanbauschard.substack.com/p/unleashing-kid-wizards-ai-storytellers',
		quote_source_domain: 'stefanbauschard.substack.com',
		perspectives: [
			{
				text: '第一個觀點認為，AI 使用的爭議不是工具本身，而是作業是否被設計為「可被學生真正擁有」。只要成果可署名、可被投入，學習動機與責任感會明顯提升。',
				sources: [
					{
						name: 'Substack',
						url: 'https://stefanbauschard.substack.com/p/unleashing-kid-wizards-ai-storytellers',
					},
				],
			},
			{
				text: '第二個角度強調現行校務常見做法仍偏向監控，像偵測軟體與禁令先行。此做法與營隊現場長時段專注、主動創作的證據形成張力，提醒治理可先從流程重設入手。',
				sources: [
					{
						name: 'Substack',
						url: 'https://stefanbauschard.substack.com/p/unleashing-kid-wizards-ai-storytellers',
					},
				],
			},
			{
				text: '第三個觀點是可實作性：營隊雖屬非正式場域，但顯示「作品導向＋任務設計」可在短周期內驗證，對正式課程有可移轉啟示，但仍需對風險管理條件做校內化調整。',
				sources: [
					{
						name: 'Substack',
						url: 'https://stefanbauschard.substack.com/p/unleashing-kid-wizards-ai-storytellers',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-11',
				date_iso: '2026-06-11',
				content: '作者發表 AI 夏令營觀察，提到已辦第二梯 AI 營並預告第三梯於下週開跑。',
			},
		],
		articles: [
			{
				title: 'Unleashing Kid Wizards: AI storytellers, Emerging Entrepreneurs, and Jedi Builders',
				link: 'https://stefanbauschard.substack.com/p/unleashing-kid-wizards-ai-storytellers',
				domain: 'stefanbauschard.substack.com',
				date: '2026-06-11',
			},
		],
		domains: [
			{ name: 'stefanbauschard.substack.com' },
		],
	},
];

const aiClassroomStories: Story[] = [];

const educationResearchStories: Story[] = [
	{
		id: 'b88b64a9-d705-500d-adfd-e1c0a63c57f1',
		cluster_number: 6,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '美國賽事博彩合法化與低學歷家庭食物不足',
		short_summary: '這篇 NBER 工作論文把美國 2021–2023 年州際賽事博彩合法化的分批時點視為外生政策衝擊，並結合 Google 搜尋投注熱度與美國 Household Pulse Survey 雙週資料，使用插補式差異中差異法估計。公開摘要未揭露完整樣本數，但指出無大學學歷工作成年輕族群食物不足率上升 2.1%，活躍投注者上升 10.5%，影響主要來自家庭財務壓力。對台灣學校而言可作為校務評估家庭風險的政策訊號參考。',
		emoji: '📉',
		did_you_know: '摘要顯示，九州合法化後估計新增約 284,000 個食物不足家庭，且每年可能增加 1.302 億美元醫療支出。注意：本研究為工作論文，非實驗設計，不宜直接推論因果。',
		talking_points: [
			'證據類型：觀察性自然實驗設計。研究以 2021–2023 年各州法規分批落地作為外生衝擊，搭配 Google 搜尋與美國雙週 Household Pulse Survey，採插補式差異中差異法估計政策效果。',
			'數據佐證：公開摘要未揭露 HPS 抽樣總數；估計結果顯示無學歷工作年齡成人食物不足率增加 2.1%，活躍投注者增加 10.5%，效應在 NFL 季賽時段可維持約 3–5 個月。',
			'教師可做：先建立班級家庭風險觀察表，含缺課率、作業延遲、情緒變化三指標，每週由導師與輔導老師共同更新，再與導師會議對照高風險家庭。',
			'教師可做：以兩週為一單位安排家長關懷節點，先做生活需求盤點，再調整作業節點與補交機制；以出席率、作業完成率作為家庭支持介入的成效觀察。',
			'教師可做：回饋時改用「先穩定需求、再談學習」句型，提供社政資源與短期可執行清單，並把「家庭經濟中斷—學習表現下滑」寫入學生發展紀錄，避免把結果誤讀為唯一單因關係。',
		],
		quote: 'We find that legalized sports gambling reduces household food sufficiency by 2.1 percent among working-age adults without a college degree, which translates to a 10.5 percent decline among active bettors.',
		quote_attribution: 'NBER, 2026-06-14',
		quote_source_url: 'https://www.nber.org/papers/w35305#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '研究提供可複製的政策評估步驟：將法規實施時序轉為衝擊變數，再用可追蹤行政資料估計差異，但目前證據只能證明美國脈絡中存在強關聯，未足以直接外推。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35305#fromrss',
					},
				],
			},
			{
				text: '結論提示的主機制是財務壓力，而非心理健康或就業供給，對台灣學校有操作價值；延伸研究缺口在於是否對不同家庭型態、不同制度條件也出現同等效應，仍需對照文獻。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35305#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Wagering the Bread Money: Sports Betting Legalization and Food Sufficiency',
				link: 'https://www.nber.org/papers/w35305#fromrss',
				domain: 'nber.org',
				date: '2026-06-14',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'b4ccc306-8fc0-5856-942a-c7120a30c8ba',
		cluster_number: 7,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: 'JAMA 撤稿提醒：作者學位失實',
		short_summary: '這則《JAMA Pediatrics》撤稿通知指出，《Evidence Without Impact?—Rethinking Home Visiting at Scale》來信作者已承認學位申報不實，期刊於 2026-06-12 發佈撤稿。原始說明未公開研究設計、樣本、國家、追蹤期間或量化方法（例如 RCT、問卷），也沒提供可直接用於因果推論的主要結果。對台灣教師與校務決策而言，這個案例的價值在於提醒：不能只看題目與來源名氣，必須先完成文獻版本與可信度核對，再談其研究含意。',
		emoji: '⚠️',
		did_you_know: '本案關鍵是學術紀錄修正：作者先於 2025-10-06 的來信版本中露出學位不一致，雖仍保留作品流轉紀錄，但在 2026-06-12 才正式發布撤稿公告，期間跨越數月使未更新引用的讀者可能誤用。',
		talking_points: [
			'證據類型：本則為期刊撤稿公告＋作者自我更正書面記錄，屬學術紀錄治理文件，不是新的臨床或教育干預研究結果，核心是可追溯性流程。',
			'數據佐證：公開摘要未揭露樣本數、追蹤期間、效果量；可核對的時間節點僅有 2025-10-06（線上先發）、2025-12（刊登期）、2026-06-12（撤稿公告）。',
			'教學流程：教師可先教學生四步驟：確認作者身份、比對日期版本、查詢更正/撤稿，最後才閱讀研究主張，避免把未驗證版本直接進入教學材料。',
			'學生產出：讓學生以「證據地圖」列出主張、支持資料、是否撤稿、可否引用等欄位，並以 5 行摘要做同儕互評，訓練文獻判讀輸出格式。',
			'教師回饋與成效：可回饋「先看版本，再談內容」；兩週抽查一次作業引用，要求每則引用有日期與撤稿狀態註記，觀察引用錯誤率是否下降。',
		],
		quote: 'In the Letter to the Editor I falsely reported my academic degree as PhD when it was BSc.',
		quote_attribution: 'JAMA Network，2026-06-12',
		quote_source_url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2850395',
		quote_source_domain: 'jamanetwork.com',
		perspectives: [
			{
				text: '編輯部視角是以紀錄完整性為先：即使主張本身未必被全面駁回，也需公開撤稿讓研究脈絡可追溯。對教育研究閱讀教學而言，這可直接做成版本控管與引用倫理情境題。',
				sources: [
					{
						name: 'JAMA Network',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2850395',
					},
				],
			},
			{
				text: '學術倫理視角提醒：信件的作者身分核對失誤，使內容可信度先受質疑。即使主題涉及居家訪視成效，教師仍不可據此下結論，現階段缺口是缺乏完整方法與數據揭露。',
				sources: [
					{
						name: 'JAMA Network',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2850395',
					},
				],
			},
		],
		timeline: [
			{
				date: '2025-10-06',
				date_iso: '2025-10-06',
				content: '作者提交並上線《Evidence Without Impact?—Rethinking Home Visiting at Scale》來信版本',
			},
			{
				date: '2025-12-01',
				date_iso: '2025-12-01',
				content: '文章於《JAMA Pediatrics》2025 年 12 月期刊卷期被收錄',
			},
			{
				date: '2026-06-12',
				date_iso: '2026-06-12',
				content: '期刊發布撤稿通知，記錄作者學位申報不實的更正事實',
			},
		],
		articles: [
			{
				title: 'Notice of Retraction. Lei Z. Evidence Without Impact?—Rethinking Home Visiting at Scale',
				link: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2850395',
				domain: 'jamanetwork.com',
				date: '2026-06-12',
			},
		],
		domains: [
			{ name: 'jamanetwork.com' },
		],
	},
	{
		id: '164b4f06-c7d3-5b56-9473-5711c1763ae0',
		cluster_number: 8,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		editorial_lens: '研究證據',
		title: '科羅拉多研究：放寬SNAP資格最能擴大參與',
		short_summary: 'RAND 在美國科羅拉多州，以全州行政資料回溯歷史後，模擬四種擴大大學生 SNAP（補充營養援助計畫）參與的方案。文章指出，約四分之一大學生遭遇食物不安全，直接影響健康與學習。模擬結果顯示，放寬學生資格規則（含聯邦規範調整或州府更具彈性的解讀）對提升參與率的邊際效果，通常大於只做全州宣導或校內個案管理。對台灣校務與社福銜接單位而言，重點是先修正可得性機制，再談宣導與服務設計。',
		emoji: '🍽️',
		did_you_know: '研究摘要記錄美國約四分之一大學生面臨食物不安全。RAND 以科羅拉多州行政資料模擬四種政策槓桿，指出資格規則調整比宣導或個案管理更能推升參與。樣本數與效果量未在公開摘要揭露。注意：本研究為觀察性行政資料模擬，不宜直接推論因果。',
		talking_points: [
			'證據類型：觀察性政策研究。使用科羅拉多州全州行政紀錄，回溯歷史參與資料，並比較四種擴增 SNAP 方案的模擬效果。',
			'數據佐證：公開摘要僅提供「約四分之一大學生有食物不安全」這個關鍵比例，未揭露樣本總量、追蹤期間、效果量與信賴區間，仍可直接採用其結果指向。',
			'政策機制：研究指出，放寬學生 SNAP 資格規則可帶來較大參與提升，訊息效果較小於制度可得性改造，重點在於申請門檻與認定彈性。',
			'下一步做法：學校可先盤點學生申請障礙，建立「資格條件對照表」，由輔導、學務與社政窗口共用清單，將難度高者列入優先處理。',
			'成效追蹤：建議用每月申請件數、核發率、持續受益月數與到校穩定指標三組指標，先確認是否為制度門檻問題，再調整宣導與輔導資源。',
			'不要誤讀：研究發生在美國科羅拉多州，政策結構與台灣不同，推導時必須先做在地法規與學制差異對照後再作決策。',
		],
		quote: 'the authors found that efforts to broaden student eligibility would increase SNAP participation by a larger amount than such efforts as statewide outreach or college-level case management support that leave student eligibility rules unchanged.',
		quote_attribution: 'RAND，2026-06-11',
		quote_source_url: 'https://www.rand.org/pubs/research_reports/RRA4846-1.html',
		quote_source_domain: 'rand.org',
		perspectives: [
			{
				text: '此研究將政策效果聚焦在資格門檻調整，表示擴大弱勢學生支援不應只靠宣導。若學校仍以加發宣傳單為主，可能錯過更有效的制度性介入。',
				sources: [
					{
						name: 'RAND',
						url: 'https://www.rand.org/pubs/research_reports/RRA4846-1.html',
					},
				],
			},
			{
				text: '因為只有單篇州級分析，結論屬「方向性」而非共識級證據。對台灣而言，這一結果可作政策試點參考，但仍需對照本地長期資料確認可遷移性。',
				sources: [
					{
						name: 'RAND',
						url: 'https://www.rand.org/pubs/research_reports/RRA4846-1.html',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-11',
				date_iso: '2026-06-11',
				content: 'RAND 發表《Levers for Increasing College Student Access to the SNAP》，比較四種擴大科羅拉多大學生 SNAP 參與的政策方案',
			},
		],
		articles: [
			{
				title: 'Levers for Increasing College Student Access to the Supplemental Nutrition Assistance Program',
				link: 'https://www.rand.org/pubs/research_reports/RRA4846-1.html',
				domain: 'rand.org',
				date: '2026-06-11',
			},
		],
		domains: [
			{ name: 'rand.org' },
		],
	},
];

const twEduStories: Story[] = [
	{
		id: 'c8520d08-72b7-5534-92fb-90fdcaa0949c',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '三州起訴補助停發，特教支援面臨斷鏈',
		short_summary: '對台灣的學校管理者來說，這件事提醒：地方補助若缺乏穩定銜接機制，特教支援最先出現斷供。美國三州（加州、羅德島、威斯康辛）指控聯邦於2025年9月與12月停止特教教師專業培訓與學生支援補助，造成替代資源不足。加州指出原先預期五年可拿到1,050萬美元（每年約210萬）卻只拿到三個預算期，州方認為這讓家庭參與與服務人力連結受損。美國教育部雖回應仍持續支持有障礙學生，但仍未化解補助中斷帶來的一線斷裂。',
		emoji: '⚖️',
		did_you_know: '美國教育部在近期宣布本年度再提供1.44億美元，專供州與學區用於嬰幼兒與兒童、青少年等身心障礙服務，顯示政策工具可同時出現停轉與新增。',
		talking_points: [
			'州方主張：3州於6/9同日提告，認為2025年9月、12月停止撥付特教師資與學生支持服務補助，導致現場無法及時替代。',
			'加州金額：州政府稱5年州人員發展補助原估1,050萬美元，預期每年約210萬美元，最終只拿到三個預算期的資金。',
			'補助斷層：加州文件提到補助中止後，家庭參與專案與支援人力維持最先受衝擊，較難快速找到替代預算。',
			'補助清洗：文中也出現英語學習教師專業發展與學校心理健康支持專案被同類砍案，顯示資源重分配對弱勢需求衝擊連鎖。',
			'台灣借鏡：若特教或學校輔導預算綁在短期計畫，建議先設「停權預警與替代機制」，避免關鍵服務先斷在第一線班級。',
		],
		quote: 'The Department is dedicated to ensuring every child with a disability receives the special education and related services they are legally entitled.',
		quote_attribution: 'U.S. Department of Education, 2026-06-12',
		quote_source_url: 'https://www.k12dive.com/news/3-states-sue-over-special-education-teacher-training-grants-Education-Department/822829/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '州方立場偏程序正義與補助保障：先以「無法立即替代」作為實務傷害核心，核心擔憂是法律允諾服務被中斷時誰能接手。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/news/3-states-sue-over-special-education-teacher-training-grants-Education-Department/822829/',
					},
				],
			},
			{
				text: '聯邦觀點則著重政策優先序，主張雖有部分計畫停發，但另補助新入口支援不同服務；張力在於弱勢服務能否真正無縫銜接。',
				sources: [
					{
						name: 'U.S. Department of Education',
						url: 'https://www.k12dive.com/news/3-states-sue-over-special-education-teacher-training-grants-Education-Department/822829/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2025-09-01',
				date_iso: '2025-09-01',
				content: '加州等州指出其特教相關補助在9月先被通知停止，成為後續資源缺口指控的起點。',
			},
			{
				date: '2025-12-01',
				date_iso: '2025-12-01',
				content: '部分補助在12月再度被終止，州方聲稱影響包括師資培訓與特殊教育支援服務延續。',
			},
			{
				date: '2026-06-09',
				date_iso: '2026-06-09',
				content: '加州、羅德島、威斯康辛檢察總長提起訴訟，要求對補助中止行為進行司法審查。',
			},
		],
		articles: [
			{
				title: '3 states sue over cancelled special education teacher training grants',
				link: 'https://www.k12dive.com/news/3-states-sue-over-special-education-teacher-training-grants-Education-Department/822829/',
				domain: 'k12dive.com',
				date: '2026-06-12',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: 'f01398ff-95c4-54d9-8e0e-eb82c25fad4f',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: 'H-1B 10 萬美元費率再上訴 外師招募再受限',
		short_summary: '對台灣教師與校務主管而言，美國 H-1B 外籍人才招募的 10 萬美元費用爭議，提醒我們監看政策變動如何推升人力導入風險。美國聯邦法官在 6 月 8 日認定該費用像稅、違反授權；白宮又在 6 月中上訴，代表外籍研究與教學人力供給可先放緩，台灣學校也應警戒跨國人才斷鏈。',
		emoji: '🛂',
		did_you_know: '判決文件中，Leo Sorokin 寫下 100,000 美元收費不論稱作「規費」還是其他名稱，其實質都接近稅；政府則認為可由移民與國籍法授權，依據不同。',
		talking_points: [
			'訴訟時間線：美國法官 6 月 8 日撤銷 100,000 美元規費判決，白宮約 6 月 11 至 12 日再度提起上訴，規則短期內難定型。',
			'金額直接衝擊：H-1B 新收 100,000 美元，相對一般簽證處理費高出顯著，外籍學術人才引進的即時成本與時間壓力同步上升。',
			'法院判斷焦點：Leo Sorokin 指出該支付在實質與操作上像稅，核心是行政機關是否能越過授權，以新名目加重外籍人員進入門檻。',
			'制度爭議落點：行政方引述《移民與國籍法》權限，主張可控管非公民入境；學校端回應是研究與教學需求受阻，屬「可量測」行政影響。',
			'台灣啟示訊號：高教院校若長期仰賴外籍專長，應建立供應鏈與預警機制，因為國際政策一旦轉向，最先受傷害的是專長缺口與課程延展。',
		],
		quote: 'The substance and application of the $100,000 payment reveal that it is a tax, regardless of what the payment is called.',
		quote_attribution: 'K12 Dive, 2026-06-12',
		quote_source_url: 'https://www.k12dive.com/news/trump-administration-appeals-ruling-against-100k-h-1b-visa-fee/822751/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '行政部門的關注點是移民進口節制與政策可操作性，將 100,000 美元定位為新制規費，以強化對非公民入境條件；其邏輯是「可控、可收、可加速政策目標」。',
				sources: [
					{
						name: 'K12 Dive',
						url: 'https://www.k12dive.com/news/trump-administration-appeals-ruling-against-100k-h-1b-visa-fee/822751/',
					},
				],
			},
			{
				text: '司法觀點更聚焦權限邊界，重點不在移民目標，而在稅負性質是否可由執政者直接訂定。這使執行速度雖快但高額調整，若缺乏明確立法支撐，就容易在法庭被打回。',
				sources: [
					{
						name: 'K12 Dive（引述法院）',
						url: 'https://www.k12dive.com/news/trump-administration-appeals-ruling-against-100k-h-1b-visa-fee/822751/',
					},
				],
			},
			{
				text: '教育實務觀點是人力維持問題。文章提到高校與研究機構依賴 H-1B 引進外籍學者和講師，若收費持續存在，最直接受影響是研究接案、課程接軌與人才續聘。',
				sources: [
					{
						name: 'K12 Dive',
						url: 'https://www.k12dive.com/news/trump-administration-appeals-ruling-against-100k-h-1b-visa-fee/822751/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-08',
				date_iso: '2026-06-08',
				content: '美國聯邦法官判定新 H-1B 100,000 美元收費屬稅性質，認為違反法定授權。',
			},
			{
				date: '2026-06-11',
				date_iso: '2026-06-11',
				content: '美國政府於 6 月中提出上訴，對該判決主張依法得徵收規費，推回行政審理程序。',
			},
		],
		articles: [
			{
				title: 'Trump administration appeals ruling against $100K H-1B visa fee',
				link: 'https://www.k12dive.com/news/trump-administration-appeals-ruling-against-100k-h-1b-visa-fee/822751/',
				domain: 'k12dive.com',
				date: '2026-06-12',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: 'f7fce5a7-b2c0-5734-8169-158e3bd28a17',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '美國校園選擇補助9月前定案，2027始可用',
		short_summary: '對台灣老師與校務主管而言，這類跨層級補助最值得注意的是：先把參與條件、時程與權責框架講清，學校才能決定是否投入行政資源。美國財政部在6月先公開第一版學校選擇稅額抵免規則草案，最晚將於9月底公布；制度預計自2027年1月1日啟動，家庭每年可捐1700美元並享100%抵免，但僅限有州政府加入的州別適用。',
		emoji: '🏫',
		did_you_know: '文中指出，截至4月15日已有27州（超過半數）回應參與意向，IRS也安排州別提前提名與規劃程序，正式規則未到前先預留接軌機制。',
		talking_points: [
			'時程壓力：財政部表示規則最遲9月底公布，給學校與補助單位在2027年前先盤點申請與風險流程的窗口，仍有接軌前置期。',
			'金額與抵免：政策版本設定每戶每年可捐1700美元，並可申請100%所得稅額抵免，關鍵財務節點從2027年1月1日才可真正使用。',
			'地方參與：截止4月15日已有27州表示要加入，但未加入州仍無法使用，顯示補助會先以州為單位分層落地。',
			'受益邊界：草案傾向將公立、私立、宗教K-12列入可認列學校，是否承認家庭教育仍由州法決定，規格會因州而異。',
			'政策張力：支持方看重補助可擴大家庭選學權，反對方擔心資源外流與地區落差；台灣可借鏡的是制度設計必須先解決公平與可審核機制。',
		],
		quote: 'The proposed regulation for the scholarship tax credit is undergoing legal reviews and will be released no later than the end of September.',
		quote_attribution: 'K12 Dive, 2026-06-12',
		quote_source_url: 'https://www.k12dive.com/news/treasury-previews-federal-school-choice-program-Treasury-IRS/822697/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: 'K12 Dive 報導中的政策推動觀點，重點在於先放出草案讓州與執行方可提早規畫，期望先把規格統一再轉入實務，降低2027啟用初期的制度撞牆。',
				sources: [
					{
						name: 'K12 Dive',
						url: 'https://www.k12dive.com/news/treasury-previews-federal-school-choice-program-Treasury-IRS/822697/',
					},
				],
			},
			{
				text: '同一篇報導也可讀到反對聲音：補助只對有州參與者開放且州法可定義學校邊界，若轉化為台灣場景，最危險的是跨區域資源不均與行政協調負擔成為新問題。',
				sources: [
					{
						name: 'K12 Dive',
						url: 'https://www.k12dive.com/news/treasury-previews-federal-school-choice-program-Treasury-IRS/822697/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-15',
				date_iso: '2026-04-15',
				content: '截至4月15日，已有27州表示願意參與美國聯邦學校選擇稅收抵免計畫。',
			},
			{
				date: '2026-06-12',
				date_iso: '2026-06-12',
				content: '美國財政部在圓桌會議中公開規則預告，說明州加入、學生資格、學校認定等議題。',
			},
			{
				date: '2026-09-30',
				date_iso: '2026-09-30',
				content: '財政部稱草案將在9月底前正式公布，作為2027實施的前置規範。',
			},
			{
				date: '2027-01-01',
				date_iso: '2027-01-01',
				content: '學校選擇稅額抵免方案預計在2027年1月1日啟動，家庭才可開始依規申報。',
			},
		],
		articles: [
			{
				title: 'Treasury previews guidance for first federal school choice program',
				link: 'https://www.k12dive.com/news/treasury-previews-federal-school-choice-program-Treasury-IRS/822697/',
				domain: 'k12dive.com',
				date: '2026-06-12',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: 'de1e61bd-bd96-5976-b40c-1ff118a9c523',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '研究證據',
		title: '快訊提示：預算縮減與閱讀數據一起看',
		short_summary: '這篇6/12的K-12快訊測驗把近期美國K-12新聞濃縮成單篇回顧，內文同時提及Education Department提議的預算縮減與Nation’s Report Card閱讀數據更新，將經費壓力與學習成效放在同一張警訊版。對台灣教師與學校管理者而言，年度編列補助或調整項目時，也要同步追蹤學生閱讀成果，否則縮支措施只看表面，難以保住教學品質。',
		emoji: '📘',
		did_you_know: '文章是用「5題」形式回顧近週新聞，主題直接串起預算縮減與閱讀數據更新兩條線索，適合把政策訊號與成效訊號放在同一週期做快速比對。',
		talking_points: [
			'快訊結構：文章採用5題複盤模式，將近週政策與研究訊息壓縮成可快速閱讀版本，方便校務會議在短時間內補齊背景。',
			'預算訊號：內文指出Education Department有預算縮減提案，台灣現場可對應思考學校補助降幅時，哪些人事與資源項目需要保留底線。',
			'閱讀監測：文中把Nation’s Report Card最新閱讀資料放進回顧題庫，說明決策端不能只談財務，閱讀成果也要定期量測與追責。',
			'治理節奏：同篇含有「預算」與「閱讀」兩條資訊，代表政策檢討應同步看成本與效益，否則只抓財務指標會漏掉教學品質風險。',
			'台灣可借鏡：可將每週外部政策快訊改為5題內部盤點，讓第一線老師與行政各單位用同一張清單對齊「哪裡減、為何減、對學生影響是什麼」。',
		],
		quote: 'From proposed Education Department budget cuts to new reading data from the Nation’s Report Card, what did you learn from our recent stories?',
		quote_attribution: 'K12DIVE, 2026-06-12',
		quote_source_url: 'https://www.k12dive.com/news/test-yourself-on-the-past-weeks-k-12-news-june-12-2026/822671/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: 'K12DIVE以問答整理近週新聞，優點是高效率，但它是入口摘要，未必保留預算案條文與研究方法的完整脈絡，台灣轉用時需再補資料。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/news/test-yourself-on-the-past-weeks-k-12-news-june-12-2026/822671/',
					},
				],
			},
			{
				text: '把預算縮減與閱讀成效放在同篇，代表財務治理與學習治理並行，台灣若只追經費平衡會壓縮學習支持；若只追成效也可能忽略制度可持續性。',
				sources: [
					{
						name: 'K12DIVE（政策/研究摘要）',
						url: 'https://www.k12dive.com/news/test-yourself-on-the-past-weeks-k-12-news-june-12-2026/822671/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-12',
				date_iso: '2026-06-12',
				content: 'K12DIVE發佈《Test yourself on the past week’s K-12 news》，以5題快速回顧近週關鍵議題。',
			},
		],
		articles: [
			{
				title: 'Test yourself on the past week’s K-12 news',
				link: 'https://www.k12dive.com/news/test-yourself-on-the-past-weeks-k-12-news-june-12-2026/822671/',
				domain: 'k12dive.com',
				date: '2026-06-12',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: '3ad7b824-f731-5a63-987f-2b8cae4fe896',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '資安信任',
		title: '紐約市29議員要求學校AI先停2年',
		short_summary: '2026/6/12，紐約市29位市議員要求市長與學校局長將全市學校AI應用先暫停2年，核心是學生資料安全。對台灣教師與校務管理者而言，這件事的關鍵不是是否反對AI，而是提醒學校在導入生成式AI前，先把資料權限、供應商條件、家長參與與問責程序補齊，否則制度缺口會直接傷害學校治理信任。',
		emoji: '🛑',
		did_you_know: '紐約市教育局3月提出AI指引，規定教師與校長使用前先經資料隱私與安全合規流程；並在2024年12月新增供應商必須揭露AI能力、禁止用學生資料訓練模型的規範。',
		talking_points: [
			'壓力規模：有29位市議員聯名施壓，要求將紐約市學校內AI使用全面暫停2年，訴求核心是防止學生資料外洩與安全風險擴大。',
			'流程先決：3月AI指引規定，任何AI工具先須通過「資料隱私與安全合規」審查，沒有核准不得進入教學或校務作業流程。',
			'合約條件：當局稱已於2024年12月補上條款，要求廠商揭露AI能力且不得拿學生資料訓練模型，目標是縮小供應商風險責任。',
			'缺口警訊：市府方仍未明確把演算法偏誤、公平影響與教學效益列入審查，議員因此認為制度還不足以全面放行。',
			'時間訊號：6月12日更新中，學校局回應將與家庭、社區共同修訂政策，顯示目前姿態是先穩定治理，再談是否擴大導入。',
		],
		quote: 'The 29 members said the guidance “does not fully align” with privacy protections and that a pause on AI use is needed to prevent serious damage to NYC children.',
		quote_attribution: 'K-12 Dive, 2026-06-12',
		quote_source_url: 'https://www.k12dive.com/news/nyc-schools-face-public-pressure-to-pause-ai-use-for-2-years/822673/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '議會陣線的張力在於問責，29位議員主張先暫停可降低政策風險外溢。對地方而言，先停2年被當作逼出透明規劃與明確責任的談判工具。',
				sources: [
					{
						name: 'K-12 Dive',
						url: 'https://www.k12dive.com/news/nyc-schools-face-public-pressure-to-pause-ai-use-for-2-years/822673/',
					},
				],
			},
			{
				text: '學校局方的立場是以現有流程化解爭議，主張先調整規範再開放使用。這代表治理取向是把問題聚焦在制度修正，而非一刀切關閉服務。',
				sources: [
					{
						name: 'K-12 Dive',
						url: 'https://www.k12dive.com/news/nyc-schools-face-public-pressure-to-pause-ai-use-for-2-years/822673/',
					},
				],
			},
			{
				text: '文章也提到美國全國倡議團體4月主張5年停用，讓這起地方爭議升為更大的數位治理風向。台灣若導入AI，也可能很快面臨同樣的政策節奏與輿論壓力。',
				sources: [
					{
						name: 'K-12 Dive',
						url: 'https://www.k12dive.com/news/nyc-schools-face-public-pressure-to-pause-ai-use-for-2-years/822673/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-06-12',
				date_iso: '2026-06-12',
				content: '29位市議員向紐約市長與學校局長送交聯名信，提出AI暫停2年的要求。',
			},
		],
		articles: [
			{
				title: 'NYC schools face public pressure to pause AI use for 2 years',
				link: 'https://www.k12dive.com/news/nyc-schools-face-public-pressure-to-pause-ai-use-for-2-years/822673/',
				domain: 'k12dive.com',
				date: '2026-06-12',
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
