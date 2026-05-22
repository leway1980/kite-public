import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';
const AI_APPLICATIONS_UUID = 'c0000005-0000-4000-8000-000000000005';
const EDU_RESEARCH_UUID = 'c0000006-0000-4000-8000-000000000006';
const WORK_METHODS_UUID = 'c0000007-0000-4000-8000-000000000007';

// ─── Stories synthesized 2026-05-22 by pipeline (auto-generated) ───

const aiNewsStories: Story[] = [
	{
		id: 'ac9dae15-d5e4-5cf4-8a35-931bcc71c3a3',
		cluster_number: 2,
		unique_domains: 2,
		number_of_titles: 2,
		category: 'AI 動態',
		editorial_lens: '新工作模式',
		title: '通用 AI 破 80 年平面單位距離猜想',
		short_summary: 'OpenAI 於 2026-05-20 對外發布通用推理模型的突破：這個自 1946 年始的平面單位距離問題，原本被認為以方格構造近似最優，現在由新的反例族證明可達到多項式更高界。模型據稱不到 32 小時、花費低於 1000 美元完成，且非專用數學解題器；成果還有外部學術社群驗證與伴隨論文，顯示前沿研究可將較長鏈條的假設拆解與推導，交由通用 AI 代理先行，再由人類進行可追蹤覆核。',
		emoji: '🧠',
		did_you_know: 'OpenAI 文章指出，這次推理結果另有伴隨論文與外部檢核軌跡；同時還提到該模型在研究內的時間與資源條件大約「不到 32 小時、低於 1000 美元」，推理摘要則達到約 125 頁。',
		talking_points: [
			'破局訊號：80 年前提出的平面單位距離猜想被反例族否定方格近似最優，顯示原上界理解已被更新。',
			'效能門檻：官方文件提到模型在 32 小時內、低於 1000 美元完成探索，降低高難題試錯的時間與硬體負擔。',
			'模型角色：OpenAI 明確說明是通用推理模型，而非 AlphaProof/Lean 類專用數學引擎，代表可跨題目共用同一模型流程。',
			'可核可查：OpenAI 與外部學者共同完成驗證，並有伴隨論文補充背景與方法，方便研究流程複核。',
			'工作模式變化：消息與社群回饋都提到 inference-time scaling 與長鏈推理，顯示「模型先提案、研究者再覆核」可成為新作業線。',
		],
		quote: 'This result marks the first time that a prominent open problem, central to a subfield of mathematics, has been solved autonomously by AI.',
		quote_attribution: 'OpenAI, 2026-05-20',
		quote_source_url: 'https://openai.com/index/model-disproves-discrete-geometry-conjecture',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: 'OpenAI 將成果定義為前沿研究能力驗證，核心是通用模型能在長鏈推理中產出可核對主張，並支援未來以代理化流程反覆推進研究。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/model-disproves-discrete-geometry-conjecture',
					},
				],
			},
			{
				text: 'Latent Space 的彙整版著重外部回應與實作細節，從 32 小時、125 頁輸出與研究者評述觀察這不只是單一成果，而是AI在科學工作方式上的可用性訊號。',
				sources: [
					{
						name: 'Latent Space',
						url: 'https://www.latent.space/p/ainews-openai-gpt-next-disproves',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-20',
				date_iso: '2026-05-20',
				content: 'OpenAI 發佈平面單位距離問題被推翻的正式說明，指出通用推理模型完成突破並附外部驗證脈絡。',
			},
			{
				date: '2026-05-21',
				date_iso: '2026-05-21',
				content: 'Latent Space 在 AINews 彙整稿補述成本與社群回應，並關注模型推理規模與研究實務意義。',
			},
		],
		articles: [
			{
				title: '[AINews] OpenAI GPT-next disproves 80 year old Erdős planar unit distance problem for under $1000',
				link: 'https://www.latent.space/p/ainews-openai-gpt-next-disproves',
				domain: 'latent.space',
				date: '2026-05-21',
			},
			{
				title: 'An OpenAI model has disproved a central conjecture in discrete geometry',
				link: 'https://openai.com/index/model-disproves-discrete-geometry-conjecture',
				domain: 'openai.com',
				date: '2026-05-20',
			},
		],
		domains: [
			{ name: 'latent.space' },
			{ name: 'openai.com' },
		],
	},
	{
		id: '1cf7df2c-d0ba-5e30-abf9-8e22f5bba31a',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '新工作模式',
		title: 'AdventHealth 以AI降80%醫療行政負擔',
		short_summary: 'OpenAI 公布，AdventHealth 在其跨州醫療體系導入 ChatGPT for Healthcare，目標是把大量行政與文件作業從醫護人員身上拿掉，再回收時間給患者照護。報導提到，行政作業可降低 80% 之後，醫療服務效率與照護容量同步提升；同時將「採用」做為可衡量的營運指標，顯示 AI 轉型不只看工具，而是以可複製流程推動組織改造。',
		emoji: '🏥',
		did_you_know: '導入重點不只在 AI 模型，而是把每日每人訊息量與流程節點當 KPI，並同步納入財務、HR、IT 等支援團隊，形成可長期維運的人機協作節奏。',
		talking_points: [
			'流程化導入：AdventHealth 避免零散試點，將 ChatGPT 用法先在全系統先行定義，再擴張到各部門，目標是把行政流程標準化為可持續的日常作業。',
			'行政效率跳升：新聞指出行政工作耗時可下降 80%，以文件整理與案例彙整為主的流程因此被壓縮，醫護可把時間轉回直接照護與臨床決策。',
			'壓縮關鍵步驟：文章提到醫師先前每件利用率管理可能要十多分鐘跨步驟審查，導入後透過 AI 協助摘要與結構化，將重工縮短為更短的可控流程。',
			'跨部門擴散：不只臨床，金融、HR、IT 等後勤單位也用同一套工具鏈處理文件與材料準備，顯示節流效果可在整體營運面外溢，而非局部優化。',
			'治理與信任：他們把採用本身視為產品，從「可否安全一致使用」切入，透過量化監測每位使用者訊息量，把人機覆核變成可管理、可追蹤的日常機制。',
		],
		quote: 'The hardest part of AI in healthcare is getting humans to use it safely, consistently, and at scale.',
		quote_attribution: 'OpenAI, 2026-05-21',
		quote_source_url: 'https://openai.com/index/adventhealth',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '從組織治理角度看，AdventHealth 的做法把 AI 當作流程改革工具，而非獨立專案，意義在於把人員採用率、品質與安全性拉到同一治理框架，較能避免醫療場域常見的短命試點。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/adventhealth',
					},
				],
			},
			{
				text: '從一線執行角度看，核心突破是將「節省時間」具體化成 80% 的行政降幅，讓員工能感知回饋，而非只聽到抽象自動化承諾；這比單純升級工具更能降低AI採用阻力。',
				sources: [
					{
						name: 'AdventHealth 內部案例',
						url: 'https://openai.com/index/adventhealth',
					},
				],
			},
		],
		articles: [
			{
				title: 'AdventHealth advances whole-person care with OpenAI',
				link: 'https://openai.com/index/adventhealth',
				domain: 'openai.com',
				date: '2026-05-21',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: '652f70b4-d4f4-551d-b58e-3a9e0a95d0be',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '新工作模式',
		title: 'Google 密蘇里進軍：500MW供電與在地就業鏈同步佈局',
		short_summary: 'Google 於 2026-05-20 宣布在美國密蘇里州蒙哥馬利郡推進新資料中心與在地產業配套，透過與 Ameren 的 Capacity Commitment Framework 新增超過 500MW 供電能力，並設立 2,000 萬美元 Energy Impact Fund 協助家庭節能降費。新動作把雲端基礎建設、能源補助與建築職能培力綁在同一條公共流程中，代表舊有「先建設、再補網路與人力」的限制被打開：AI 基礎設施可提前規劃地方就業入口，降低部署與社區落地的落差。',
		emoji: '⚡',
		did_you_know: 'Google 指出資料中心可作為經濟引擎，每創造一個直接職位，能進一步帶動九個當地工作職缺；同時又以 2,000 萬美元能源基金補助家庭節能，形成就業與用電雙向影響的政策樣本。',
		talking_points: [
			'容量前置：與 Ameren 簽訂 Capacity Commitment Framework，規畫新增超過 500MW 供電能力，先把資料中心營運所需的能源穩定性寫入地方投資前提。',
			'能源公平：透過 20,000,000 美元 Energy Impact Fund，採取住宅節能改善、耗能效率作法，回應社區電費壓力而非僅補貼企業。',
			'職訓設計：資金導向當地建築人才通道，支持 Montgomery County 的 Construction Laborers and Contractors Training Center，補足基建期的人力斷層。',
			'就業外溢：Google 明確指出每個直接職位可帶動 9 個在地職位，將雲端建設的價值放大到修繕、供應鏈與社區服務層。',
			'跨部門治理：文章顯示企業、公共事業與社區訓練體系同步合作，暗示 AI 基礎建設不再只談機櫃與帶寬，而是要以可維運流程替代單點投資。',
		],
		quote: 'Our data centers act as economic engines, generating nine local jobs for every direct position created.',
		quote_attribution: 'Google 官方部落格，2026-05-20',
		quote_source_url: 'https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/missouri-programs/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: 'Google 的敘事主軸放在先補足能源與工資入口，凸顯 AI 基礎建設競逐未來時，供電穩定與社區得失才是第一道閘道；這對地方治理是較少看到的反向設計。',
				sources: [
					{
						name: 'Google 官方部落格',
						url: 'https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/missouri-programs/',
					},
				],
			},
			{
				text: '若以人才面看，合作方是建築及工程訓練通道而非通用 AI 課程，顯示科技企業在不同區域會先投入可立即上線的基礎工務人才，而非抽象化的技術素養，地方機構可據此校準課程節奏。',
				sources: [
					{
						name: 'Google 官方部落格',
						url: 'https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/missouri-programs/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-20',
				date_iso: '2026-05-20',
				content: 'Google 公布密蘇里州蒙哥馬利郡新一輪社區投資，包含新增超過 500MW 供電規劃、2,000 萬美元能源影響基金與當地職訓合作。',
			},
		],
		articles: [
			{
				title: 'We’re announcing new community investments in Missouri.',
				link: 'https://blog.google/innovation-and-ai/infrastructure-and-cloud/global-network/missouri-programs/',
				domain: 'blog.google',
				date: '2026-05-20',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
	{
		id: '1a095a56-aa8a-59f6-9750-7a10bd525eaf',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '代理應用',
		title: 'Google I/O 2026：Gemini 3.5 Flash 推進代理式開發',
		short_summary: 'Google 在 2026 年 5 月 20 日 I/O 2026 發表會推出 Gemini 3.5 Flash，並同步開放於 Antigravity、Gemini API、AI Studio 與 Android Studio 使用，另補上 Gemini Omni 的多模態影片生成規劃。這代表過去大量手工串接工具與反覆測試的開發流程，開始改走可自動化、可追蹤的代理化工作流；在高難題、長時任務上，若速度與品質靠攏旗艦模型且成本更低，團隊的作業節奏與驗證節點會被迫重設。',
		emoji: '🤖',
		did_you_know: '公告給出 Gemini 3.5 Flash 的量測資料：Terminal-Bench 2.1 得 76.2%，GDPval-AA 為 1656 Elo，MCP Atlas 為 83.6%，並同時主張成本可低於同類 frontier 模型的一半。',
		talking_points: [
			'一鍵接軌：Gemini 3.5 Flash 在 Antigravity、Gemini API、AI Studio 與 Android Studio 同步可用，讓團隊少了多環境重整合的前置工時。',
			'效能基準更新：模型在 Terminal-Bench 2.1 為 76.2%、GDPval-AA 1656 Elo、MCP Atlas 83.6%，並直接拿來對比 Gemini 3.1 Pro。',
			'長時任務提效：官方訴求是長程代理任務可縮短時間，且在一些場景成本常低於同級模型的五成以下。',
			'內容可稽核化：Gemini Omni 影片輸出內建不可見 SynthID 水印，並提供 Gemini App、Chrome 與 Search 作為驗證路徑。',
			'能力分段落地：Omni 先切入影片產出，音訊目前以語音參考為主，並保留日後擴展其他音訊類型的承諾。',
		],
		quote: 'Gemini 3.5 Flash delivers intelligence that rivals large flagship models at speeds you expect from the Flash series.',
		quote_attribution: 'Google Blog，2026-05-20',
		quote_source_url: 'https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '從產品開發視角，Google 清楚把方向放在代理式長程作業，主張以高效模型承接開發、維護與文件流程，降低反覆人工介入。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/',
					},
				],
			},
			{
				text: '從治理視角，Omni 的 SynthID 及可驗證通道回應了內容真偽與稽核需求，但公告也顯示能力落地仍高度依賴平台能力，最終信任與權限設計仍需組織自建。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-20',
				date_iso: '2026-05-20',
				content: 'Google I/O 2026 公告推出 Gemini 3.5 Flash，並同步推出多入口可用路徑：Antigravity、Gemini API、AI Studio 與 Android Studio。',
			},
			{
				date: '2026-05-20',
				date_iso: '2026-05-20',
				content: 'Google 同日公開 Gemini Omni 的多模態方向，先支援影像/影音相關的輸入輸出，並導入 SynthID 水印與驗證機制。',
			},
		],
		articles: [
			{
				title: '100 things we announced at I/O 2026',
				link: 'https://blog.google/innovation-and-ai/technology/ai/google-io-2026-all-our-announcements/',
				domain: 'blog.google',
				date: '2026-05-20',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
	{
		id: '43a21429-af22-5d98-aafe-d8e4f6613fe4',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		editorial_lens: '新工作模式',
		title: 'Google Beam 實驗讓混合會議更接近同室共作',
		short_summary: 'Google 在 2026/05/20 推出 Google Beam 新實驗，目標是改善混合會議中遠端參與者被動旁聽的情況。透過 HP Dimension 沉浸式螢幕與空間音訊，非 Beam 裝置的人也能以真實比例加入並有方向感，讓家庭或辦公室場景都可自動套用同一模式。Google 研究指出，這種設計能讓社交連結感提升 50%、回報可參與對話能力提升 21%，對遠端協作流程的參與門檻有明顯影響。',
		emoji: '🎥',
		did_you_know: '實驗指出，混合會議在加入 HP Dimension 與空間音訊後，使用者報告的社交連結感增加 50%，且更能投入對話的能力提高 21%。',
		talking_points: [
			'真實比例呈現：實驗將非 Beam 端參與者以接近真人大小顯示，搭配桌面式佈局，降低傳統小窗下讀取表情與反應的盲點。',
			'空間音訊加強辨識：每位發言者的聲音會對應到其螢幕位置，會議中可快速定位誰在發言並及時回應，降低插話延遲。',
			'跨場域自動套用：使用者無論在家或辦公室加入，都能自動啟用實驗流程，會議準備不再靠手動切換參數維持一致體驗。',
			'研究量化效果：官方表示，社交連結感較一般體驗增加 50%，參與者自評「能貢獻對話」意願提升 21%，對投入感有可驗證改善。',
			'生態系延伸線：Google 明確提到持續與 Google Workspace、Zoom合作，顯示目標不只是單點展示，而是併入主流會議日常。',
			'組織採用潛力：若未來導入到日常協作流程，會議可從「遠端觀看」轉為「近似同室共作」，有助跨地點團隊即時決策。',
		],
		quote: 'Our research suggests approaches like these help close the hybrid \'inclusion gap\' by facilitating a 50% stronger sense of social connection and a 21% increase in reported ability to contribute to conversations.',
		quote_attribution: 'Google Blog, 2026-05-20',
		quote_source_url: 'https://blog.google/innovation-and-ai/models-and-research/google-research/google-beam-group-meetings/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '從工作流程角度，重點不在增加更多功能，而是把多方位會議的感知成本變成可預設的環境能力，尤其適合依賴即時討論而非大量同步文件的團隊。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/models-and-research/google-research/google-beam-group-meetings/',
					},
				],
			},
			{
				text: '從產品策略看，Google 把實驗與 Workspace、Zoom 鏈接，代表方向是先走跨平台整合，而非封閉佈署；但試驗性標示也暗示企業導入仍須觀望效能、資安與成本門檻。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/models-and-research/google-research/google-beam-group-meetings/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-20',
				date_iso: '2026-05-20',
				content: 'Google 發表 Google Beam 新實驗，導入 HP Dimension 與空間音訊優化混合會議體驗，並同步提及與 Google Workspace、Zoom 的合作延伸。',
			},
		],
		articles: [
			{
				title: 'A new experiment brings better group meetings to Google Beam',
				link: 'https://blog.google/innovation-and-ai/models-and-research/google-research/google-beam-group-meetings/',
				domain: 'blog.google',
				date: '2026-05-20',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
];

const aiApplicationsStories: Story[] = [
	{
		id: 'bf639815-7218-54aa-adf2-1a12035d16b7',
		cluster_number: 1,
		unique_domains: 2,
		number_of_titles: 2,
		category: 'AI 熱門應用',
		editorial_lens: '新工作模式',
		title: 'Gemini Omni Flash：影片創作流程化',
		short_summary: '2026-05-19 Product Hunt 上線 Gemini Omni，主打可由文字、影像、草圖一路生成影片，並同步支援 Gemini App、Flow 與 YouTube。2026-05-21 的 HN 討論補上 Omni Flash 取得限制，指出免費 Google Flow 點數、方案等級、地區與帳號名單會影響是否可用。對內容與教育場域而言，關鍵不是工具新增，而是能否把構想、生成、校正、輸出轉成可驗證、可替代的流程化工作線。',
		emoji: '🎬',
		did_you_know: 'Show HN 這篇貼文有 2 個讚與 0 則留言，但仍明確聚焦 Omni Flash 可及性，特別是免費點數與方案限制如何決定能否直接生成；這是產品發布初期常被忽略的實務風險。',
		talking_points: [
			'一站式起點：Product Hunt 將 Gemini Omni 描述為可從文字、影像、草圖到影片的一體流程，對團隊有助於縮短素材產生與試作間的切換步驟。',
			'跨端整合：同模型可在 Gemini App、Flow、YouTube 運作，等於把發想、預覽、發布放在同一條導線，降低多系統搬運成本。',
			'可用性邊界：HN 指出 Omni Flash 是否出現與帳號、地區、方案、Google AI 名單及 Flow 點數有關，免費額度不保證可開啟全部模型。',
			'替代機制：原文主張若 Flash 無法使用，需比對其他 AI 影片工具並保留備援路徑，確保專案時程不被單一入口阻塞。',
			'流程標準化：兩篇來源都提到比例、時長、解析度、音訊與預覽下載步驟，代表影片製作可改寫成可重複執行的 SOP，而非純手工試錯。',
		],
		quote: 'Turn any idea into stunning videos with a single prompt, image, sketch, or reference.',
		quote_attribution: 'Product Hunt, 2026-05-19',
		quote_source_url: 'https://www.producthunt.com/products/gemini-omni-4',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: 'HN 觀點較務實，將重點放在供能門檻上；在缺權限、點數不足時，先驗證存取條件是流程能否啟動的第一關，對機構採用風險管理很關鍵。',
				sources: [
					{
						name: 'Show HN',
						url: 'https://omnigemini.video',
					},
				],
			},
			{
				text: 'Product Hunt 聚焦工作方法，討論不只「會不會做影片」，而是能否維持跨版本風格一致、可編輯及可擴充，反映產業端關心的是可控產能與品牌一致性。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/gemini-omni-4',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-19',
				date_iso: '2026-05-19',
				content: 'Product Hunt 上架 Gemini Omni，並宣稱可用文字、影像、草圖快速生成影片，支援 Gemini App、Flow、YouTube。',
			},
			{
				date: '2026-05-21',
				date_iso: '2026-05-21',
				content: 'Show HN 顯示 Gemini Omni Flash 的存取需注意 Google AI 方案、Flow 點數、地區與帳號名單等條件，並建議預先檢查替代方案。',
			},
		],
		articles: [
			{
				title: 'Show HN: Gemini Omni Flash access notes and AI video generator',
				link: 'https://omnigemini.video',
				domain: 'omnigemini.video',
				date: '2026-05-21',
			},
			{
				title: 'Gemini Omni',
				link: 'https://www.producthunt.com/products/gemini-omni-4',
				domain: 'producthunt.com',
				date: '2026-05-19',
			},
		],
		domains: [
			{ name: 'omnigemini.video' },
			{ name: 'producthunt.com' },
		],
	},
	{
		id: '72da057e-2489-571e-a3c8-0a4394f37960',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '新工作模式',
		title: 'Basedash Skills：非工程人員也能畫圖',
		short_summary: 'Basedash 於 2026-05-21 在 Product Hunt 公布「Skills」更新。該工具今年初推出時就主打「描述需求即可 AI 視覺化、無需 SQL」，本次則把操作收斂為可重複使用的指令技能，讓非工程與非資料分析角色能更快做出圖表。這對重視即時決策的團隊而言，意義在於將報表製作從個別人力操作，逐步轉為可複製的低門檻工作流程。',
		emoji: '📈',
		did_you_know: '原文同時揭示兩件關鍵：工具原本的核心是自然語言即時繪圖，且在 5/21 訊息中已明確預告次日上線，表示其方向是從單次體驗走向可規模複用。',
		talking_points: [
			'自然語言入門：產品主軸是只要描述需求即可自動視覺化，降低了現場人員撰寫 SQL 的操作門檻。',
			'技能化模組：此次聚焦 Skills 設計，將提示指令封裝成可重複套用的模組，讓建立圖表流程更可維持一致品質。',
			'角色受益者：更新主打一般商業使用者，不再必須每次都等待工程師或資料分析師協作，縮短回應時間。',
			'時間節點：公告時間為 2026-05-21，文件明確寫到「明天」上線，顯示產品版本節奏與推進節點已明確化。',
			'治理提醒：速度提升不等於治理完成，導入時仍需確認資料版本、權限與誤用防護，否則快也可能失真。',
		],
		quote: 'You just describe the chart you want, and Basedash uses AI to visualize your data, no SQL required.',
		quote_attribution: 'Product Hunt, 2026-05-21',
		quote_source_url: 'https://www.producthunt.com/products/basedash',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '正向解讀是它把 AI 畫圖能力進一步產品化，從一次性操作轉為可複製技能庫，利於跨專案一致化與知識留存。',
				sources: [
					{
						name: 'Product Hunt 產品頁',
						url: 'https://www.producthunt.com/products/basedash',
					},
				],
			},
			{
				text: '另一個角度是風險先行：雖強調低門檻，但若未同步建立資料治理、命名規格與稽核機制，組織仍可能出現快速產出但可置信度不足。',
				sources: [
					{
						name: 'Product Hunt 討論資訊',
						url: 'https://www.producthunt.com/products/basedash',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-21',
				date_iso: '2026-05-21',
				content: 'Product Hunt 公布 Basedash Skills 升級訊息，並說明產品定位與更新方向。',
			},
			{
				date: '2026-05-22',
				date_iso: '2026-05-22',
				content: '資訊中明確寫到隔日推出，對外釋出的主要時間節點形成新版本上線節奏。',
			},
		],
		articles: [
			{
				title: 'Basedash Skills',
				link: 'https://www.producthunt.com/products/basedash',
				domain: 'producthunt.com',
				date: '2026-05-21',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'f5f250c7-b656-5d99-bf1a-0475a0875377',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用',
		title: 'AlliHat 打造 Safari Claude 側欄',
		short_summary: 'AlliHat 在 Product Hunt 聚焦 Safari 缺少 Claude 內嵌體驗的痛點，將 AI 對話直接放進目前頁面的側欄，並加入反白即時解釋、可重複工作流與能操作頁面的 Agent Mode。產品早期僅支援使用者自行帶入 Anthropic 金鑰，導致轉換較低，後來加入 Apple Intelligence 無設定替代後明顯改善；同時維持每年 29.99 美元（試用後）訂閱，顯示瀏覽器 AI 的關鍵並非模型花樣，而是是否能快速嵌入日常流程。',
		emoji: '🧠',
		did_you_know: '開發者回報原先需要先開 Anthropic 帳號設定 API 金鑰，造成很多人放棄；加入 Apple Intelligence 的無門檻進入後，試用轉付費率大致提高到原本的兩倍，顯示第一時間可用比模型選擇更影響成效。',
		talking_points: [
			'缺口對準：Chrome 有 Claude 插件、Safari 沒有，AlliHat 以頁面內側欄處理重複查詢，避免再開啟獨立聊天頁。',
			'上手先行：產品核心不在模型名次，而是「前 30 秒可用」，對新用戶的第一步障礙做降摩擦是主軸。',
			'流程複用：Workflows 把翻譯、摘要、自訂提示整併成按鈕，一次點擊即可重複執行，節省人工逐步操作。',
			'代理延伸：Agent Mode 除了解答，也能點擊網頁、填寫表單與導覽，讓 AI 不只會回話，也會幫忙完成任務。',
			'營運與治理：產品標價一年 29.99 美元（試用後），同時宣稱金鑰直送 Anthropic、全程在 Mac 運行，未追蹤無分析。',
		],
		quote: 'The lesson I think wasn\'t \'users want a specific model.\' It was \'users want something that works in the first 30 seconds.\'',
		quote_attribution: 'Product Hunt, 2026-05-21',
		quote_source_url: 'https://www.producthunt.com/products/allihat',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品觀點在於把「AI 對話」變成可執行流程：從查網頁、整理到填表，一條鏈路都落在同一頁，對教育現場可借鏡的是先把高頻工作切成可重複動作。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/allihat',
					},
				],
			},
			{
				text: '留言實務提出切頁後對話歸屬問題，開發者回應採「錨定原頁」設計。這反映瀏覽器 AI 在體驗上常要在跨頁流動與對話上下文保留之間做取捨。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/allihat',
					},
				],
			},
			{
				text: '隱私敘事主張無追蹤與分析，並把請求導向 Anthropic，短期有助於品牌信任建立；但機構端仍需自行檢視金鑰管理與稽核政策是否符合內部治理。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/allihat',
					},
				],
			},
		],
		articles: [
			{
				title: 'AlliHat',
				link: 'https://www.producthunt.com/products/allihat',
				domain: 'producthunt.com',
				date: '2026-05-21',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: '59073b80-b57d-5d69-91ee-4a378ee8d4b3',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		editorial_lens: '代理應用',
		title: 'Mixpanel Headless：產品分析可程式代理化',
		short_summary: 'Product Hunt 於 2026-05-20 的討論頁將 Mixpanel Headless 定位為可讓代理與開發者程式化存取的分析工具，主打事件、漏斗、群組與即時轉換追蹤。評論者一致提到介面乾淨、分群與自訂儀表板易懂，非資料科學背景人員也能快速取得行為洞察；但也有提及高階功能學習曲線、資料量大時效能變慢與費用隨流量上升，顯示導入前仍要先做效能與成本規劃。',
		emoji: '📊',
		did_you_know: '評論裡反覆提到的「事件優先（event-first）」是關鍵，讓人不用只看最終報表，而是先把行為事件標準化，直接讓 AI 代理在既有流程中自動取用與回報。',
		talking_points: [
			'程式化流程：Mixpanel Headless 透過可調用介面把事件、漏斗、留存與轉換分析做成代理可執行動作，能替代人工反覆查報表。',
			'低門檻實務：多位評論認為其介面整齊、分群與儀表板易上手，2026-05-20 以後的討論顯示非資料科學人員亦能快速回收關鍵數據。',
			'進階學習：受訪者回饋顯示高階分析有一定門檻，代表組織要先建立事件定義與指標治理，否則代理化未必能穩定落地。',
			'成本壓力：評論同時提到資料量增加會抬高開銷，這個 2026-05-20 的訊號對教育平台擴增用量時格外重要。',
			'可複製模式：如果教育團隊先把登入、點擊、完成作業等事件打標，AI 代理可持續監控流失與參與度，替代人工定期彙整的教學分析。',
			'效能風險：多則回饋提及大資料集下偶有遲滯，提醒以代理自動化前應先評估資料切片、取樣與更新頻率機制。',
		],
		quote: 'Reviewers largely see Mixpanel as a strong, easy-to-use analytics tool for tracking user behavior, events, funnels, cohorts, and conversions in real time.',
		quote_attribution: 'Product Hunt, 2026-05-20',
		quote_source_url: 'https://www.producthunt.com/products/mixpanel',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: 'Product Hunt 使用者面向強調操作可用性，認為介面與儀表板簡化了技能門檻，對縮短分析等待時間、讓行政與產品團隊更快決策具有直接幫助。',
				sources: [
					{
						name: 'Product Hunt 留言討論',
						url: 'https://www.producthunt.com/products/mixpanel',
					},
				],
			},
			{
				text: '建立者與進階用戶觀點偏向架構層面，強調事件模型與速度優勢，但同時提醒進階功能要可持續投入，否則「看起來好用」不代表規模化後仍低成本。',
				sources: [
					{
						name: 'Product Hunt 產品討論',
						url: 'https://www.producthunt.com/products/mixpanel',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-20',
				date_iso: '2026-05-20',
				content: 'Product Hunt 討論頁將 Mixpanel Headless 的產品分析與代理導向能力整理公開，社群集中討論即時追蹤、事件模型與可擴充性。',
			},
		],
		articles: [
			{
				title: 'Mixpanel Headless',
				link: 'https://www.producthunt.com/products/mixpanel',
				domain: 'producthunt.com',
				date: '2026-05-20',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
];

const workMethodsStories: Story[] = [
	{
		id: 'f83e1d78-2979-565f-be0b-5f5a23b11974',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '工作方法',
		editorial_lens: '代理應用',
		title: 'Datasette Agent 發布：資料庫AI代理可擴充',
		short_summary: '2026 年 5 月 21 日，Datasette 官方網站推出第一版 Datasette Agent，主打以自然語言查詢資料庫的對話介面，讓資料操作能用「問—查—回」方式進行。本文同步列出三款首發外掛，並用 Gemini 3.1 Flash-Lite 示範可直接生成 SQL 查詢；同時提供本地模型接法，標誌 AI 代理不只可以在雲端試用，而是可朝可審核、可延展、可離線運作的工作流程轉型。',
		emoji: '🤖',
		did_you_know: '示範中使用者詢問「最近看到 pelican 的時間」時，代理會回傳 SQL 邏輯並查出 2026-05-20 的最新紀錄，含對應物種與時間欄位。',
		talking_points: [
			'插件化起手：首發已提供 3 欄外掛，包含 datasette-agent-charts、datasette-agent-openai-imagegen、datasette-agent-sprites，先把功能擴充標準化。',
			'查詢可追溯：在 agent.datasette.io live demo 中，提問會轉成 SQL 並回傳具體欄位結果，降低 AI 回答難以稽核的風險。',
			'流程可複製：文章給出 uvx 指令鏈，直接把 datasette-agent 與 llm-lmstudio 串到 gemma-4-26b-a4b，可用同一腳本在本機重現。',
			'模型效率指標：示範模型為 Gemini 3.1 Flash-Lite，主打速度快與成本低，且能在查詢流程中直接處理 SQLite。',
		],
		quote: 'I\'ve shipped three plugins so far: datasette-agent-charts, datasette-agent-openai-imagegen, and datasette-agent-sprites.',
		quote_attribution: 'Datasette 官方部落格, 2026-05-21',
		quote_source_url: 'https://simonwillison.net/2026/May/21/datasette-agent/#atom-entries',
		quote_source_domain: 'simonwillison.net',
		perspectives: [
			{
				text: '產品層面觀察：本篇將焦點放在可外掛化架構，不是只談單次對話體驗，而是讓工具鏈可拆解為圖表、影像、執行沙盒等模組，利於團隊持續整合。',
				sources: [
					{
						name: 'Datasette 官方部落格',
						url: 'https://simonwillison.net/2026/May/21/datasette-agent/#atom-entries',
					},
				],
			},
			{
				text: '治理層面觀察：文中強調本地模型接法與 SQL 可重現，對有隱私與權限要求的單位是關鍵訊號，表示可將代理能力逐步納入內部作業而非完全依賴外部 API。',
				sources: [
					{
						name: 'Datasette 官方部落格',
						url: 'https://simonwillison.net/2026/May/21/datasette-agent/#atom-entries',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-21',
				date_iso: '2026-05-21',
				content: '發布 Datasette Agent 首版，並同步說明 plugin 方案與 Gemini 3.1 Flash-Lite 的 live demo 流程。',
			},
		],
		articles: [
			{
				title: 'Datasette Agent',
				link: 'https://simonwillison.net/2026/May/21/datasette-agent/#atom-entries',
				domain: 'simonwillison.net',
				date: '2026-05-21',
			},
		],
		domains: [
			{ name: 'simonwillison.net' },
		],
	},
	{
		id: '71e20513-d10a-5c94-824e-0381a57dc0e4',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '工作方法',
		editorial_lens: '代理管理',
		title: 'Gemini 3.5 Flash 全域上線與提價',
		short_summary: 'Google 在 Google I/O 當天將 Gemini 3.5 Flash 直接推為正式版，並同步用於 Gemini app、AI 搜尋、Google Antigravity、AI Studio 與企業平台，形成跨產品共用底盤。新價格為輸入 1.5 美元／百萬 token、輸出 9 美元／百萬 token，較前代 Flash 系列大幅上修。雖保有 1,048,576 輸入與 65,536 輸出 token 的超長上下文，但這輪關鍵改變是：模型可達性拉高了，成本治理反而更受重視。',
		emoji: '💸',
		did_you_know: 'Gemini 3.5 Flash 在作者整理的測試比較中，高推理版本成本約 1,551.60，明顯高於 3.1 Pro Preview 的 892.28，接近進入高價位 API 生態的中樞水平。',
		talking_points: [
			'價值定義轉向：3.5 Flash 單價到 1.5／1,000,000 輸入 token、9／輸出 token，分別為 3 Flash Preview 的 3 倍、3.1 Flash-Lite 的 6 倍，部署預算必須重算。',
			'全域底盤策略：模型同步進到 Search AI Mode、Gemini app、Antigravity、AI Studio 與企業平台，表示核心流程不再是「少量試用」，而是全通路常態化。',
			'流程風險管理：可吃 1,048,576 輸入 token 與 65,536 輸出 token，有利長上下文代理；但任何高頻對話都需先建 token 成本警戒線。',
			'治理機制信號：新增 Interactions API（測試版）走伺服器端歷史管理，類似 OpenAI Responses，對長任務工作流的回溯與複核更友善。',
			'成本對照：文中同時列出 Claude Opus 4.7、GPT-5.5 的 benchmark 成本，顯示市場主軸正從模型功能轉向「可承受的持續成本」博弈。',
		],
		quote: 'Google are also pushing a new Interactions API, currently in beta.',
		quote_attribution: 'Simon Willison, 2026-05-19',
		quote_source_url: 'https://simonwillison.net/2026/May/19/gemini-35-flash/#atom-entries',
		quote_source_domain: 'simonwillison.net',
		perspectives: [
			{
				text: '同文指出同時上線全產品矩陣，雖然短期成本上揚，但對組織而言重點是把日常工作流都放在同一模型層，降低整體整合摩擦，反而可提高運維效率。',
				sources: [
					{
						name: 'Simon Willison',
						url: 'https://simonwillison.net/2026/May/19/gemini-35-flash/#atom-entries',
					},
				],
			},
			{
				text: '另一個張力是價格訊號：模型從免費級感知進入可付費主力，代表工程團隊必須以「可預測預算 + 版本治理」取代以往只求可用性，否則成本失控會拖累代理導入。',
				sources: [
					{
						name: 'Simon Willison',
						url: 'https://simonwillison.net/2026/May/19/gemini-35-flash/#atom-entries',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-19',
				date_iso: '2026-05-19',
				content: 'Google 在 I/O 當日發布 Gemini 3.5 Flash（GA），並同步列出其在 Google Search AI Mode、Gemini app、Antigravity、AI Studio 與企業產品的使用。',
			},
		],
		articles: [
			{
				title: 'Gemini 3.5 Flash: more expensive, but Google plan to use it for everything',
				link: 'https://simonwillison.net/2026/May/19/gemini-35-flash/#atom-entries',
				domain: 'simonwillison.net',
				date: '2026-05-19',
			},
		],
		domains: [
			{ name: 'simonwillison.net' },
		],
	},
];

const aiEduStories: Story[] = [
	{
		id: 'f2dac301-c5f1-5602-8695-401878c356cd',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '平台導入',
		title: '阿爾伯塔用 Face control 讓行動學童自立學習',
		short_summary: '在加拿大阿爾伯塔，Black Gold School Division（32 所學校、14,000 名學生）全面導入 Chromebook 內建的 Face control，讓行動不便的七年級學生 Liam 可用頭部微動直接操作游標，不必再靠繁瑣接線與反覆按頭部開關完成點擊。教育工作者再用 Gemini 開發延伸工具，將學習網站題目轉成一鍵存取，讓作業操作更短更穩定。這說明學校導入無障礙不只是在硬體上新增選項，而是把設備能力與課務流程一起改造，先讓學生能自立而非持續被代辦。',
		emoji: '♿',
		did_you_know: '文章中提到的個案是七年級學生 Liam。Face control 讓他可透過頭部移動滾動與點選，原本每句話都需外部幫忙輸入、每次操作要經過繁複接線與切換開關的流程，導入後直接可在 Chromebook 上自主完成更多學習任務。',
		talking_points: [
			'全面部署：Black Gold School Division 在 32 所學校、14,000 名學生體系中，將 Face control 當作 Chromebook 的無障礙基礎設定推行。',
			'流程反轉：個案原本需接上實體開關並多次按頭部開關才能點選；導入後改為頭部微轉即可捲動與選取，操作步驟明顯減半。',
			'學習主動權：Liam 可直接開啟 Google Classroom 作業並啟用語音輸入，將「逐字代寫」縮小為少數情境支援。',
			'AI 外掛加值：校方透過 Gemini 建立客製擴充，讓學習網站題目可在畫面快速定位，減少在網頁中反覆查找的時間。',
			'落地重點：案例顯示設備功能與課務流程若未同步，無障礙技術只會變成新增操作；同步後才真正轉成可持續的學習自治。',
		],
		quote: 'By utilizing his Chromebook\'s camera, Face control allows Liam to scroll and navigate freely by moving his head.',
		quote_attribution: 'Google Blog, 2026-05-21',
		quote_source_url: 'https://blog.google/products-and-platforms/devices/chromebooks/face-control/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '平台訊號上，Google 同時提供原生無障礙功能與 Gemini 自訂擴充路徑，顯示導入重心正在由單點特色轉為可擴充的平台化工作流程，但後端維運仍得由校端接手。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/products-and-platforms/devices/chromebooks/face-control/',
					},
				],
			},
			{
				text: '學校服務面看，個案聚焦在一位行動障礙七年級生，但核心訊號是可複製性：有標準設備（每台 Chromebook）與明確作業流程後，支援重點可從個案代勞轉為全校無障礙自治。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/products-and-platforms/devices/chromebooks/face-control/',
					},
				],
			},
		],
		articles: [
			{
				title: 'Here\'s how accessibility tools and Gemini are helping students find independence',
				link: 'https://blog.google/products-and-platforms/devices/chromebooks/face-control/',
				domain: 'blog.google',
				date: '2026-05-21',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
	{
		id: '21048092-668b-5742-81b7-7d32d9d62f30',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '新觀念',
		title: 'AI 成為學生思考介面而非作業工具',
		short_summary: 'Anthropic 的資金與營收躍升顯示 AI 產業正從研發競逐走向可獲利競逐：收入自 2025 年初約 10 億美元，五個月後到 2026 年 5 月約 440 億美元，並伴隨兆元級估值與 IPO 前兆。OpenAI 則宣布自動解出 1946 年提出的平面單位距離問題，標誌通用推理模型可獨立跨越長期未解難題。這代表學習情境中 AI 不再只在作業使用，而是成為手機、搜尋、穿戴設備皆可即時接續的思考介面，學習型態也因此被重寫。',
		emoji: '🧠',
		did_you_know: 'Anthropic 2026 年 5 月營收約 440 億美元，WSJ 又預估 6 月季營收可達 109 億美元且營運利潤 5.59 億美元；若兩者成立，AI 供應商已進入可較早觀察到的獲利可預測階段。',
		talking_points: [
			'資本加速：Bloomberg 於 5/12 提到 Anthropic 再談 300 億美元級以上融資，前估值超過 9000 億美元，顯示市場提前定價其成長。',
			'營收躍升：Anthropic 營收從 2025 年初約 10 億美元，2025 年底約 90 億美元，5 月再到 440 億美元，曲線已非短期爆量。',
			'市場訊號：WSJ 與 Yahoo 先後報導 6 月季營收可到 109 億美元、營運利潤 5.59 億美元並有 shadow IPO 跑價，資本期待高度一致。',
			'人才訊號：Karpathy 於 5/19 宣布加入 Anthropic，稱未來幾年 LLM 前沿極具「奠基」意義，將加速模型公司戰略重整。',
			'教學重心：文中主張 AI 會出現在手機、搜尋、臉部與穿戴場景，學習不再只在課堂與作業裡發生，教師需面對即時提問常態化。',
		],
		quote: 'AI will not be something a student “uses” for an assignment. It will be the medium they think inside — on their phone, in their search, on their face, on their shirt - to solve unsolved math problems',
		quote_attribution: 'Substack, 2026-05-21',
		quote_source_url: 'https://stefanbauschard.substack.com/p/may-21-update-1-trillion-ipos-500',
		quote_source_domain: 'stefanbauschard.substack.com',
		perspectives: [
			{
				text: '第一層訊號是市場化：Anthropic 的收入與估值訊息被放大，表示大型模型已被視為可擴張產品線；對教育機構來說，未來課室 AI 選型或更偏向供應商穩定度而非新奇功能。',
				sources: [
					{
						name: 'Stefanbauschard Substack',
						url: 'https://stefanbauschard.substack.com/p/may-21-update-1-trillion-ipos-500',
					},
				],
			},
			{
				text: '第二層是研究實力：OpenAI 的開放數學題自主解法把 AI 性質由「輔助」推高到「可主導推理」，有機會衝擊傳統「學生自己完成」的作答倫理，但文章仍缺乏課程設計與評量驗證。',
				sources: [
					{
						name: 'Stefanbauschard Substack',
						url: 'https://stefanbauschard.substack.com/p/may-21-update-1-trillion-ipos-500',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-12',
				date_iso: '2026-05-12',
				content: 'Bloomberg 報導 Anthropic 進行新一輪募資談判，金額可能超過 300 億美元，前估值被描述在 9000 億美元以上。',
			},
			{
				date: '2026-05-19',
				date_iso: '2026-05-19',
				content: 'Andrej Karpathy 宣布加入 Anthropic，並形容接下來 LLM 前沿將是決定未來幾年的關鍵時期。',
			},
			{
				date: '2026-05-20',
				date_iso: '2026-05-20',
				content: 'Wall Street Journal 與 Yahoo Finance 相繼引述 Anthropic 6 月季營收、營運利潤及兆元級 shadow IPO 價格訊號。',
			},
			{
				date: '2026-05-20',
				date_iso: '2026-05-20',
				content: 'OpenAI 宣布其一般用途推理模型自主解決平面單位距離問題，為長達近 80 年未決題目帶來新解。',
			},
		],
		articles: [
			{
				title: 'May 21 Update: $1 Trillion IPOs, $500 Million+ Profits, & Solving Open Mathematics Problems Talking to Your Eye Glasses',
				link: 'https://stefanbauschard.substack.com/p/may-21-update-1-trillion-ipos-500',
				domain: 'stefanbauschard.substack.com',
				date: '2026-05-21',
			},
		],
		domains: [
			{ name: 'stefanbauschard.substack.com' },
		],
	},
	{
		id: '538f614c-ceea-529b-8998-131b8e1d6d22',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '職涯判斷',
		title: '美國大學畢業禮：AI爭議與學生抗爭浮上檯面',
		short_summary: 'Inside Higher Ed 報導 2026 年五月，UCF 與亞利桑那大學畢業典禮接連出現學生針對 AI 的強烈抗議。學生在典禮上不僅質疑 AI 對就業與人生道路的衝擊，也對校方將 AI 引入行政流程的可靠度不滿。報導更點出 Glendale 社區學院 AI 點名失誤導致上百名新生名單錯亂，凸顯科技導入不只是政策選擇，而是牽涉到學校制度正當性與世代信任感的驗證關卡。',
		emoji: '🎓',
		did_you_know: '文章提到的畢業典禮AI誤讀名單事件，說明 AI 在學校場域不僅是課堂工具，而是會直接影響學位授予儀式的公平感與公開性。',
		talking_points: [
			'畢業典禮情緒逆轉：UCF Orlando 畢業典禮上，學生先為主講者鼓掌，當其稱 AI 是「下一次工業革命」後，現場即出現嗆聲與反對。',
			'10,000 人規模抗議：在亞利桑那大學 Tucson 畢業會場，前 Google CEO 面對約 10,000 名新畢業生談 AI 未來時，反對聲浪成為討論焦點。',
			'AI點名失準：Glendale 社區學院的 AI 點名系統曾漏讀或錯置上百位畢業生姓名，直接造成畢業流程混亂與爭議。',
			'世代壓力疊加：報導指出 2022 年進入大學的 2026 屆學生，先歷經疫情隔離對人際與心理的影響，再加上 AI 對入門白領職位衝擊預測。',
			'資本與學界加速：文中提到多所院校已與 OpenAI、Anthropic、Google 合作導入 AI 工具，顯示其滲透已從概念討論進入制度實作。',
		],
		quote: '“the machines are coming, the jobs are evaporating,” and “the question is whether you will have shaped artificial intelligence.”',
		quote_attribution: 'Inside Higher Ed, 2026-05-21',
		quote_source_url: 'https://www.insidehighered.com/news/tech-innovation/artificial-intelligence/2026/05/21/specter-ai-haunts-class-2026',
		quote_source_domain: 'insiderhighered.com',
		perspectives: [
			{
				text: '學生觀點主張 AI 是生涯被動推進力量，對未來工作與身分歸屬的可控性產生集體焦慮，並在象徵性公共場域快速外溢。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/tech-innovation/artificial-intelligence/2026/05/21/specter-ai-haunts-class-2026',
					},
				],
			},
			{
				text: '學校與企業強調 AI 可提升效率與轉型速度，但同一事件顯示治理不足會先傷害信任，導入成效不只看工具採用數量。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/tech-innovation/artificial-intelligence/2026/05/21/specter-ai-haunts-class-2026',
					},
				],
			},
		],
		articles: [
			{
				title: 'Specter of AI Haunts Class of 2026',
				link: 'https://www.insidehighered.com/news/tech-innovation/artificial-intelligence/2026/05/21/specter-ai-haunts-class-2026',
				domain: 'insiderhighered.com',
				date: '2026-05-21',
			},
		],
		domains: [
			{ name: 'insiderhighered.com' },
		],
	},
	{
		id: '16d8f344-e642-50c2-856a-e371b7fcfd4b',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '研究證據',
		title: 'AI 成為學生情緒出口 美國高校支持缺口',
		short_summary: '美國高教面對學生心理需求上升，越來越多人先向 AI 倾诉而非找人。Inside Higher Ed 的報導引述 The Rithm Project 去年秋季對 13 至 24 歲近 2,400 名青年調查，顯示約三分之一受訪者會把 AI 當情緒或關係支持來源，甚至視為可對話的角色。這不只是工具使用習慣改變，而是高教在心理支持與關係陪伴上的供給端產生了可見缺口，值得校園政策立即設計人機分流與轉介機制。',
		emoji: '🧠',
		did_you_know: '調查裡的「AI 角色」定義，不是以戀愛伴侶為主的 AI 伴侶敘事，而是將 AI 視為可扮演不同身份的人際對話對象，研究發現這樣可提升受訪者對行為真實回報。這類修正讓數據更接近學生實際使用情境。',
		talking_points: [
			'調查規模揭示：Rithm Project 對 13–24 歲近 2,400 名年輕人做調查，讓「AI 情緒用途」有明確樣本而非單一臆測。',
			'使用比率關鍵：研究估算約一成或三分之一青年會主動以 AI 做情緒與關係支持的對話，代表支援需求不只學術任務。',
			'名詞設計影響：團隊刻意改用「AI 角色」而非「AI 伴侶」，避免污名化語彙；同一題幹在不同稱呼下可得到不同回應品質。',
			'高教系統訊號：文章指出高等教育機構在心理健康壓力下，學生先選 AI 而非人，反映導師與諮商入口在可及性與匿名友善度上不足。',
			'政策與倫理意涵：事件發生於 2026-05-21 的 Inside Higher Ed 專題播報，提示高校需同時兼顧 AI 回應速度與危機辨識，避免將高風險個案過度留在聊天前線。',
		],
		quote: '我們看到大約三分之一年輕人在使用上把 AI 當成情緒或關係支持的一部分。',
		quote_attribution: 'Inside Higher Ed, 2026-05-21',
		quote_source_url: 'https://www.insidehighered.com/news/student-success/health-wellness/2026/05/21/why-are-students-opening-ai-instead-people',
		quote_source_domain: 'insidehighered.com',
		perspectives: [
			{
				text: '從研究端看，這是一組行為證據：若不先修正問法語彙，受訪者常用更保守、帶污名的詞回避真實使用，導致統計低估 AI 在情緒支援的實際佔比。',
				sources: [
					{
						name: 'The Rithm Project',
						url: 'https://www.insidehighered.com/news/student-success/health-wellness/2026/05/21/why-are-students-opening-ai-instead-people',
					},
				],
			},
			{
				text: '從媒體觀察端看，問題不只在工具流行，而是高教照護鏈條的治理問題。學生先對 AI 傾訴，代表校內人際支持、信任感與導師可近性出現缺口，需要制度化補位。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/news/student-success/health-wellness/2026/05/21/why-are-students-opening-ai-instead-people',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-21',
				date_iso: '2026-05-21',
				content: 'Inside Higher Ed 發布《Voices of Student Success》節目專訪，公開 The Rithm Project 的青年 AI 使用調查結果。',
			},
		],
		articles: [
			{
				title: 'Why Are Students Opening Up to AI Instead of People?',
				link: 'https://www.insidehighered.com/news/student-success/health-wellness/2026/05/21/why-are-students-opening-ai-instead-people',
				domain: 'insidehighered.com',
				date: '2026-05-21',
			},
		],
		domains: [
			{ name: 'insidehighered.com' },
		],
	},
	{
		id: '402591e6-6b46-560c-a3aa-201beffa93c9',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教育趨勢',
		editorial_lens: '新觀念',
		title: 'DeepMind轉向揭開高教AI新軌跡',
		short_summary: 'Inside Higher Ed 於 2026-05-21 的專欄指出，DeepMind 在 ChatGPT（2022-11）衝擊後從偏重科學 AI 的研究室，轉回 Google 母體走向產品導向，這意味著 AI 在高教的發展不只停留在生成式文字、簡報工具階段。文章以 AlphaGo、AlphaFold 與《The Infinity Machine》為脈絡，提醒台灣高教政策與管理不能只看校園目前常見 AI 議題，而要同步觀察產業端將 AI 從科研成果轉為可嵌入日常流程的長程變化。',
		emoji: '🧭',
		did_you_know: '專欄提到 DeepMind 內部的核心觀點：生成式 AI 可能只是過渡期，真正的趨勢是讓 AI 具備判斷力與情境感知，進入可持續、可信任的工作流程。',
		talking_points: [
			'組織轉向：文中指出 DeepMind 在 2022-11 之後被重新納入 Google 母體，並從研究實驗中心轉為更偏產品發佈的工程團隊。',
			'歷史脈絡：作者把 AlphaGo 與 AlphaFold 當作兩個核心里程碑，主張這些研究成果比短期生成式功能更能預示未來 AI 在教育的影響深度。',
			'高教警訊：專欄提醒如果只以校園現在的生成式 AI 表現判斷，會低估 AI 技術在研究、行政與教學流程中的長程重組力。',
			'時間訊號：書評鏈接《The Infinity Machine》出版於 2026-03，專欄發布於 2026-05-21，反映學術界關注 AI 路線圖升溫。',
			'治理含意：文中將未來目標描述為「可信合作夥伴」而非「文案代工」，對高教治理意味著要重新設計流程責任、驗證機制與信任邊界。',
		],
		quote: 'The belief—at least within DeepMind—is that what AI did for protein science with AlphaFold, tomorrow’s AI will similarly revolutionize everything.',
		quote_attribution: 'Inside Higher Ed, 2026-05-21',
		quote_source_url: 'https://www.insidehighered.com/opinion/columns/learning-innovation/2026/05/21/why-read-infinity-machine-age-half-crappy-university',
		quote_source_domain: 'insidehighered.com',
		perspectives: [
			{
				text: '本片文章把重點放在 AI 的組織轉型節奏：從研究實驗室到產品研發的位階變動，對高教政策比單一工具功能比較更有預警意義。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/opinion/columns/learning-innovation/2026/05/21/why-read-infinity-machine-age-half-crappy-university',
					},
				],
			},
			{
				text: '另一角度是實用化邏輯：同樣論 AI 在教育，但文章偏向問「未來能否信任 AI 在流程中協作」，與一般只討論利弊的校園爭議論述呈現不同取向。',
				sources: [
					{
						name: 'Inside Higher Ed',
						url: 'https://www.insidehighered.com/opinion/columns/learning-innovation/2026/05/21/why-read-infinity-machine-age-half-crappy-university',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-21',
				date_iso: '2026-05-21',
				content: 'Inside Higher Ed 發表《Why Read ‘The Infinity Machine’?》，以 DeepMind 路線變化切入高教 AI 未來。',
			},
		],
		articles: [
			{
				title: 'Why Read ‘The Infinity Machine’?',
				link: 'https://www.insidehighered.com/opinion/columns/learning-innovation/2026/05/21/why-read-infinity-machine-age-half-crappy-university',
				domain: 'insidehighered.com',
				date: '2026-05-21',
			},
		],
		domains: [
			{ name: 'insidehighered.com' },
		],
	},
];

const aiClassroomStories: Story[] = [
	{
		id: '795a54ef-0350-544a-a960-d386fdd43fde',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		editorial_lens: '教學流程',
		title: 'AI 快速做課堂資訊圖的可複製方法',
		short_summary: '2026-05-19 發布的《Easy EdTech Podcast 371》聚焦「AI 協助製作課堂資訊圖」，核心做法是先用明確提示詞讓生成式 AI 將複雜概念轉成學生好懂的視覺素材，並強調以學習對象、風格與色彩控制輸出品質。文中同時提醒教師在課前審閱、修正與查核，避免直接沿用未驗證內容。對需壓縮備課時間、又要兼顧說明清楚的教師而言，這是一套可直接落地的教學流程參考。',
		emoji: '🎨',
		did_you_know: '第 371 集附有可直接複製的工具與資源清單，從 ChatGPT、Google NotebookLM 到 Canva AI、Gemini Nano Banana 2，顯示單一教學流程可跨文字生成到圖像輸出。',
		talking_points: [
			'核心主題：第371集主打把複雜主題轉為課堂資訊圖，降低教師在視覺化教學素材上的時間負擔，先看懂重點再進入教學。',
			'提示詞規格：內容建議在 prompt 中加入學習對象、視覺風格與配色，這三個欄位可直接影響 AI 生成結果是否可直接拿去用。',
			'工具配線：文章示範多工具併用，從 ChatGPT 與 Google NotebookLM 做內容構思，到 Canva AI 與 Gemini Nano Banana 2 完成視覺生成。',
			'品質控管：主張將 AI 當合作工具，未經 review、refine、fact-check 前不能直接上課，將校驗節點放在課前作業流程。',
			'商務訊息：文末有 ASCD 與 ISTE 的資源導向與書籍推廣，建議教師先分辨方法內容與行銷內容再決定是否採用。',
		],
		quote: 'Treat AI as a collaborative tool by reviewing, refining, and fact-checking outputs before using them in class.',
		quote_attribution: 'Easy EdTech Podcast, 2026-05-19',
		quote_source_url: 'https://classtechtips.com/2026/05/19/classroom-infographics-371/',
		quote_source_domain: 'classtechtips.com',
		perspectives: [
			{
				text: '此則重點不只是工具推廣，而是把工作流程切成「提示詞設計、生成、修訂、上課前查核」四步，對日常教案製作壓力較大的教師可直接參考，具體性高。',
				sources: [
					{
						name: 'Easy EdTech Podcast',
						url: 'https://classtechtips.com/2026/05/19/classroom-infographics-371/',
					},
				],
			},
			{
				text: '同時可看到商業導流痕跡並存：ASCD／ISTE 的導購與資源連結併列其間，若要長期採用，應將方法與品牌行銷訊息分開評估，避免混淆決策。',
				sources: [
					{
						name: 'ASCD/ISTE',
						url: 'https://classtechtips.com/2026/05/19/classroom-infographics-371/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-19',
				date_iso: '2026-05-19',
				content: '發布《Easy EdTech Podcast 371》節目，公開以 AI 製作課堂資訊圖的提示詞與流程建議。',
			},
		],
		articles: [
			{
				title: 'Quick Strategies for Making Classroom Infographics with AI – Easy EdTech Podcast 371',
				link: 'https://classtechtips.com/2026/05/19/classroom-infographics-371/',
				domain: 'classtechtips.com',
				date: '2026-05-19',
			},
		],
		domains: [
			{ name: 'classtechtips.com' },
		],
	},
];

const educationResearchStories: Story[] = [];

const twEduStories: Story[] = [
	{
		id: 'a86182f5-bfdd-5e34-9a2b-f9d6bdfdea69',
		cluster_number: 4,
		unique_domains: 2,
		number_of_titles: 2,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '大南方AI智慧健康展：跨域健康治理示範',
		short_summary: '對台灣教師與學校管理者而言，臺南「大南方AI智慧健康展」提供可觀察的跨域治理樣態：由資訊工業策進會主辦，展期為115年6月12日至13日，在大臺南會展中心舉行，並串連國科會、數位發展部、衛生福利部、臺南市政府與「大南方新矽谷推動方案」，核心目標是以 AI 提升健康照護服務韌性與效率。對校務端來說，可參考其是否值得納入學生健康教育、地方資源對接與行政合作設計。',
		emoji: '🏥',
		did_you_know: 'TYC 版文提到本展係依資訊工業策進會「資慧字第1150000925號」(115.05.20)函文辦理，亦與國科會、數位發展部、衛生福利部與臺南市政府共同推動。',
		talking_points: [
			'跨部會合作：本案同時整合國科會、數位發展部、衛生福利部與臺南市政府，將 AI 健康應用放在政策合作而非單機構展示，對地方治理邏輯有直接參考價值。',
			'活動時程：展覽明定於115年6月12日至13日在大臺南會展中心辦理，學校可依此規畫跨域觀摩與行政窗口同步安排。',
			'施政目標：主文明確主打「健康臺灣」與「均衡臺灣」，重點指向提升照護服務韌性與運作效率，與校園健康服務可觀察治理目標形成對應。',
			'產學研連結：訊息將展會與「大南方新矽谷推動方案」接軌，顯示地方可透過產學研網絡導入實作場域，供校方思考合作教材與實作題目。',
			'行政節點：TYC版本補充5/20函文字號，讓活動有明確行政節點可追溯，但目前仍未揭露預算、績效指標與參展成果，需持續追蹤。',
			'校務應用：對校務管理者而言，關鍵不在是否立刻導入，而在如何以此檢視「跨部會合作」在學校健康服務與社區連動上的可複製機制。',
		],
		quote: '藉由提升服務韌性與運作效率，促進產業智慧化轉型。',
		quote_attribution: '臺北市政府教育局，2026-05-21',
		quote_source_url: 'https://www.doe.gov.taipei/News_Content.aspx?n=9AA0CC873BD001A2&s=56C096C5A57D16F6',
		quote_source_domain: 'doe.gov.taipei',
		perspectives: [
			{
				text: 'DOE 版偏向公告性轉知，重點放在政策目標與合作關係的總體描述，對外部機構而言較適合先建立政策雷達與合作方向。',
				sources: [
					{
						name: '臺北市政府教育局',
						url: 'https://www.doe.gov.taipei/News_Content.aspx?n=9AA0CC873BD001A2&s=56C096C5A57D16F6',
					},
				],
			},
			{
				text: 'TYC 版補上5/20函文號與主辦流程語句，讓行政端可追查事件起點，對學校行政人員有利於判斷合作窗口與提案時機，但資訊仍停在前置公告。',
				sources: [
					{
						name: 'TYC',
						url: 'https://www.tyc.edu.tw/News_Content.aspx?n=5143&s=1625616',
					},
				],
			},
			{
				text: '兩篇都未揭露參展單位、預算與成效評估，對學校而言目前只能列為「可關注樣態」，仍不足以直接做成正式採購或長期合作決策。',
				sources: [
					{
						name: '臺北市政府教育局',
						url: 'https://www.doe.gov.taipei/News_Content.aspx?n=9AA0CC873BD001A2&s=56C096C5A57D16F6',
					},
					{
						name: 'TYC',
						url: 'https://www.tyc.edu.tw/News_Content.aspx?n=5143&s=1625616',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-20',
				date_iso: '2026-05-20',
				content: '依據資訊工業策進會「資慧字第1150000925號」函文，展會行政作業動作啟動。',
			},
			{
				date: '2026-06-12',
				date_iso: '2026-06-12',
				content: '「大南方AI智慧健康展」於大臺南會展中心展開，展期延續到6月13日。',
			},
		],
		articles: [
			{
				title: '【轉知】財團法人資訊工業策進會辦理「大南方AI智慧健康展」資訊',
				link: 'https://www.doe.gov.taipei/News_Content.aspx?n=9AA0CC873BD001A2&s=56C096C5A57D16F6',
				domain: 'doe.gov.taipei',
				date: '2026-05-21',
			},
			{
				title: '財團法人資訊工業策進會辦理「大南方AI智慧健康展」',
				link: 'https://www.tyc.edu.tw/News_Content.aspx?n=5143&s=1625616',
				domain: 'tyc.edu.tw',
				date: '2026-05-21',
			},
		],
		domains: [
			{ name: 'doe.gov.taipei' },
			{ name: 'tyc.edu.tw' },
		],
	},
	{
		id: '0e6d9f96-2f48-5352-b3ce-7cad36b4b660',
		cluster_number: 5,
		unique_domains: 2,
		number_of_titles: 2,
		category: '教育政策與治理',
		editorial_lens: '組織運作',
		title: '新北3日AI教育年會：教師研修與校務可借鏡',
		short_summary: '這則公告對台灣學校最直接的意義是：AI研習不是另起爐灶，而是可直接納入地方行政研修規畫的治理案例。教育部指導下，新北市政府教育局與中華民國無界塾創新教育協會共同辦理「2026台灣AI教育年會」，定於7月3日至5日舉行，並以教師賦能、教學實踐、學生學習與評量回饋為核心主軸。對學校管理者而言，這代表地方可用同樣機制設計教師社群合作、課程現場觀摩與成效回饋流程。',
		emoji: '🤖',
		did_you_know: '年會資訊同時由 DOE 與 TYC 公開，活動定位一致但文件重點不同；主會場為淡水國泰人壽訓練中心，時間為7月3日至5日，明確可作為跨校排程參考。',
		talking_points: [
			'政策起點：活動以教育部指導為基礎，由新北市政府教育局辦理，學校可據此設計與中央方針對齊的AI研習申請流程。',
			'時間切片：年會規劃在7月3日至5日連辦3天，可供校務行政在學期中段安排教師參與與跨校協作。',
			'場域設計：主場選在淡水國泰人壽訓練中心（鄧公路266號，鄧公站旁），有助學校提前檢核交通、報到與跨單位集合可行性。',
			'主題聚焦：議程標示「教師賦能」「教學實踐」「學生學習及評量回饋」三主軸，可直接對應校內專案管理中的教學觀摩與回饋機制。',
			'文件對照：兩篇通告時間都在2026-05-21，但一篇偏政策導向，一篇補上5月20日函號，學校需同時保留版本以避免流程斷點。',
		],
		quote: '旨揭活動為推廣AI輔助教學模式，促進教師專業社群交流與實踐。',
		quote_attribution: '台北市政府教育局, 2026-05-21',
		quote_source_url: 'https://www.doe.gov.taipei/News_Content.aspx?n=9AA0CC873BD001A2&s=DBE5189317CAD103',
		quote_source_domain: 'doe.gov.taipei',
		perspectives: [
			{
				text: 'DOE版先給出政策授權背景與活動宗旨，適合學校先抓總體方向；對行政而言是做為宣告AI推動必要性與預算立項的上段依據。',
				sources: [
					{
						name: '台北市政府教育局',
						url: 'https://www.doe.gov.taipei/News_Content.aspx?n=9AA0CC873BD001A2&s=DBE5189317CAD103',
					},
				],
			},
			{
				text: 'TYC版補上「115年5月20日新北教研資字第1150955088號函」，較易被學校行政對應內部稽核節點，對流程控管與溝通承辦面更實用。',
				sources: [
					{
						name: 'TYC',
						url: 'https://www.tyc.edu.tw/News_Content.aspx?n=5143&s=1625598',
					},
				],
			},
			{
				text: '兩則訊息都未揭露經費、成果指標與教師參與機制，顯示目前仍偏「啟動公告」性質，後續追蹤需由學校自行補齊成效量測。',
				sources: [
					{
						name: '台北市政府教育局',
						url: 'https://www.doe.gov.taipei/News_Content.aspx?n=9AA0CC873BD001A2&s=DBE5189317CAD103',
					},
					{
						name: 'TYC',
						url: 'https://www.tyc.edu.tw/News_Content.aspx?n=5143&s=1625598',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-21',
				date_iso: '2026-05-21',
				content: '新北市政府教育局與 TYC 同步公布「2026台灣AI教育年會」辦理公告，說明活動導向與主要資訊。',
			},
			{
				date: '2026-07-03',
				date_iso: '2026-07-03',
				content: '「2026台灣AI教育年會」於7月3日至5日開辦，預計辦理3日。',
			},
		],
		articles: [
			{
				title: '【轉知】「2026台灣AI教育年會」資訊',
				link: 'https://www.doe.gov.taipei/News_Content.aspx?n=9AA0CC873BD001A2&s=DBE5189317CAD103',
				domain: 'doe.gov.taipei',
				date: '2026-05-21',
			},
			{
				title: '新北市政府教育局與中華民國無界塾創新教育協會共同辦理「2026台灣AI教育年會」',
				link: 'https://www.tyc.edu.tw/News_Content.aspx?n=5143&s=1625598',
				domain: 'tyc.edu.tw',
				date: '2026-05-21',
			},
		],
		domains: [
			{ name: 'doe.gov.taipei' },
			{ name: 'tyc.edu.tw' },
		],
	},
	{
		id: 'c4af1112-56b4-5208-b581-fa335497a311',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '美國警示「螢幕過量」：校務控螢幕要有底線',
		short_summary: '台灣學校正普遍面臨平板、線上作業與手機管理並行的現實，這則美國案例提醒教育現場必先訂下螢幕使用邊界。美國衛生暨公共服務部長官於 2026 年 5 月 21 日發佈兒少螢幕警示，指出過量娛樂螢幕可能影響認知、情緒、學習與心理健康，並說明課堂多工會拖累注意力與成績，同步指出截至目前已有至少 8 州、9 項法案限制校內螢幕與教育科技，搭配 29 頁工具書，將警示導向可執行的班級作法。',
		emoji: '🛑',
		did_you_know: '這份警示隨附 29 頁工具包，明確鼓勵學校在可行時改以書本或紙本作業取代螢幕任務；文件並提到可在校園實施「bell-to-bell」手機限制，並列出愛荷華州 K-5 每日數位教學 60 分鐘上限的參照。',
		talking_points: [
			'風險訊號：重複要求看螢幕、哭鬧、以螢幕舒緩情緒、避開人際互動，皆被列入螢幕過量徵兆，適合納入校內巡檢清單。',
			'學習影響：警示指出高強度休閒螢幕會削弱作業專注，衝擊注意力與閱讀回憶，進而影響成績與測驗表現。',
			'政策訊號：文內提到截至當下已有 8 個州通過 9 項州法，明顯形成「限制校內螢幕」的州際政策高地，為台灣行政可做比較。',
			'治理工具：29 頁 toolkit 建議優先改為紙本書面作業，並非全面封鎖，而是以可替代任務降低多工與分心。',
			'產業張力：industry 團體雖未明言反對，但已對政策表達疑慮，表示若未區分教學與非教學用途，可能壓縮合法數位教學空間。',
		],
		quote: 'limit screen use by assigning work in books or on paper whenever possible.',
		quote_attribution: 'U.S. Surgeon General / HHS, 2026-05-21',
		quote_source_url: 'https://www.k12dive.com/news/surgeon-general-advisory-urges-caution-on-youth-screen-use/820897/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: 'HHS的立場是公共健康導向，將螢幕沉迷與學習受損視為可干預的健康議題，優先要求減量與行為邊界，而非只提升媒體素養。',
				sources: [
					{
						name: 'K12Dive',
						url: 'https://www.k12dive.com/news/surgeon-general-advisory-urges-caution-on-youth-screen-use/820897/',
					},
				],
			},
			{
				text: '州政府端則偏向立法硬性介入，愛荷華州以 K-5 每日 60 分鐘數位授課上限為例，代表政策可先用時間配額控風險，再配合課程設計微調。',
				sources: [
					{
						name: 'K12Dive',
						url: 'https://www.k12dive.com/news/surgeon-general-advisory-urges-caution-on-youth-screen-use/820897/',
					},
				],
			},
			{
				text: '教育科技業者角度更擔心範圍界線不清，若一體適用全校規範，可能把教材設計、學習平台與溝通工具一併壓縮，形成替代性風險。',
				sources: [
					{
						name: 'K12Dive',
						url: 'https://www.k12dive.com/news/surgeon-general-advisory-urges-caution-on-youth-screen-use/820897/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-21',
				date_iso: '2026-05-21',
				content: '美國HHS衛生總監發佈青少年螢幕使用警示，並同步公開含 29 頁建議的 toolkit。',
			},
		],
		articles: [
			{
				title: 'Surgeon general advisory urges caution on youth screen use',
				link: 'https://www.k12dive.com/news/surgeon-general-advisory-urges-caution-on-youth-screen-use/820897/',
				domain: 'k12dive.com',
				date: '2026-05-21',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: 'e7e472a9-2d30-51de-b1e5-a32aa1607b08',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '治理授權',
		title: '美國教育補助把宗教元素寫入愛國教育條件',
		short_summary: '對台灣學校行政單位而言，重點是補助規則會直接改變課程取向。美國教育部於 2026-05-21 前完成「愛國教育」優先條件定稿，經過超過5,000 則意見後仍保留「猶太基督教」與建國者宗教觀念於『美國政治傳統』定義，且未排除宗教組織參與，爭議在於公費是否可以綁定特定價值框架。',
		emoji: '⚖️',
		did_you_know: '你可能不知道，該優先條件最初於去年的9月提出，最後到5月21日才定稿；即使有5,000多則反對意見，部門仍維持原有宗教名詞與合作規則。',
		talking_points: [
			'經費門檻轉向：美國教育部將「美國政治傳統」納入補助優先順序，專案內容是否符合該定義，會直接影響是否符合補助競爭條件。',
			'程序規模：定稿前共回收超過5,000則公開意見，顯示政策爭議集中在理念取向，而非只在執行細節上。',
			'宗教元素保留：最終定義仍含「猶太基督教」與建國者宗教信念，且將宗教影響與《憲法》文獻並列為課程考量。',
			'合作對象放寬：公告明定宗教組織不會被排除在資助合作之外，讓經費流向與價值爭議形成同一條件鏈。',
			'政策延續軌跡：文章指出此路徑與1776委員會、2025年「Ending Radical Indoctrination」命令一脈相承，並非一次性行政決定。',
		],
		quote: 'The priority and definitions are focused on an accurate and honest study of American history and government.',
		quote_attribution: 'K12 Dive, 2026-05-21',
		quote_source_url: 'https://www.k12dive.com/news/ed-dept-spending-priority-raises-concerns-with-nod-to-judeo-christianity/820923/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '政府面向主張將此定義視為學術與歷史方法修正，透過補助機制引導學校補強建國史材料，並認為未違反政教分立。',
				sources: [
					{
						name: 'K12 Dive',
						url: 'https://www.k12dive.com/news/ed-dept-spending-priority-raises-concerns-with-nod-to-judeo-christianity/820923/',
					},
				],
			},
			{
				text: '反對意見則以第一修正案與公校世俗性為核心，質疑若補助條件指定宗教語彙，將把政治與信仰爭議轉化為資金分配的實質限制。',
				sources: [
					{
						name: 'K12 Dive',
						url: 'https://www.k12dive.com/news/ed-dept-spending-priority-raises-concerns-with-nod-to-judeo-christianity/820923/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-21',
				date_iso: '2026-05-21',
				content: '美國教育部於公開最終優先順序公告中，維持將猶太基督教及建國者宗教觀念納入『美國政治傳統』定義。',
			},
		],
		articles: [
			{
				title: 'Ed Dept spending priority raises concerns with nod to Judeo-Christianity',
				link: 'https://www.k12dive.com/news/ed-dept-spending-priority-raises-concerns-with-nod-to-judeo-christianity/820923/',
				domain: 'k12dive.com',
				date: '2026-05-21',
			},
		],
		domains: [
			{ name: 'k12dive.com' },
		],
	},
	{
		id: '67ef84ff-36e5-5e80-b278-41effdca9ced',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策與治理',
		editorial_lens: '組織運作',
		title: '12.6百萬學童缺少暑期課後學習',
		short_summary: '這件事對台灣學校行政很直接：若暑期補充學習沒有穩定公共資源，弱勢家庭學生仍會被擠出學習場域。Afterschool Alliance 的調查顯示，全美約 12.6 百萬（約 1,260 萬）學童無法參加有結構的暑期課後方案；其中 38% 因費用、18% 因交通、13% 因時段或場域不符而缺席，89% 家長支持政府補助，反映暑季支援是「資源設計」而非「參與意願」問題。',
		emoji: '📚',
		did_you_know: '供給端不只學校，社區組織占 34%、市鎮設施占 32%、學校占 32%，也就是要維持暑期服務，地方必須把跨單位名單先做成常態合作圖。',
		talking_points: [
			'缺口規模：全美約 1260 萬兒童無法參與結構化暑期活動，顯示弱勢與交通弱勢家庭的暑季學習斷層不只個案。',
			'費用門檻：調查指出 38% 家庭因成本無法參加，台灣若推廣課後銜接，補助設計比名目更多先解決「可負擔」問題。',
			'交通受限：18% 家庭受地點與交通影響，13% 因時段不符，地方行政可優先做就近場域與班表接軌評估。',
			'家長共識高：89% 家長支持公共資源補助暑期課後，代表需求具普遍性，管理者可據此提出預算邏輯。',
			'供給結構：社區團體、城鄉設施、學校比例各高，對台灣而言代表單一學校主辦不足，跨部門編制更能降低空窗。',
			'台美對比：報告同時提醒高中以下不同學段皆可能受影響，台灣可據年齡與交通量能，做分段與分區梯度方案。',
		],
		quote: 'For many students in Tuscaloosa, summer is where they discover their interests, their talents, and possibilities they may not even know exist yet.',
		quote_attribution: 'K12Dive, 2026-05-21',
		quote_source_url: 'https://www.k12dive.com/news/summer-learning-school-barriers-funding-survey/820714/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: '資料面向關注「需求端」：費用、交通、時段是主因，政策含意是先把可及性設成設計條件。此角度適合校務治理討論經費效益與補助門檻。',
				sources: [
					{
						name: 'K12Dive',
						url: 'https://www.k12dive.com/news/summer-learning-school-barriers-funding-survey/820714/',
					},
				],
			},
			{
				text: '治理面向偏重「供給端組網」：報導以 Tuscaloosa 為例，由社區組織、城鎮設施與學校共同承接，提示地方合作模型可行，但是否可複製取決於預算與行政彈性。',
				sources: [
					{
						name: 'K12Dive',
						url: 'https://www.k12dive.com/news/summer-learning-school-barriers-funding-survey/820714/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-21',
				date_iso: '2026-05-21',
				content: 'Afterschool Alliance 發布美國暑期學習報告，指出大量兒童缺乏有結構的暑期學習機會，並揭示費用、交通與時段為主要障礙。',
			},
		],
		articles: [
			{
				title: '12.6M kids lack access to summer programming',
				link: 'https://www.k12dive.com/news/summer-learning-school-barriers-funding-survey/820714/',
				domain: 'k12dive.com',
				date: '2026-05-21',
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
