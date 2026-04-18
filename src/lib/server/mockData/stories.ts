import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';
const AI_APPLICATIONS_UUID = 'c0000005-0000-4000-8000-000000000005';

// ─── Stories synthesized from 308 RSS articles fetched 2026-04-17 (MVP-v6) ───
// MVP-v6 key change: strict one-story = one-topic rule.
// Stories merging unrelated events are dropped; single-source stories
// allowed only for authority feeds (arXiv / JAMA / MIT / OECD / OpenAI).

const aiNewsStories: Story[] = [
	{
		id: 'sai-news-001',
		cluster_number: 1,
		unique_domains: 5,
		number_of_titles: 6,
		category: 'AI 動態',
		title: 'Anthropic 發表 Claude Opus 4.7：逐步強化每一個維度，資安偵測同步升級',
		short_summary:
			'Anthropic 於 4 月 16 日正式推出 Claude Opus 4.7，在進階軟體工程、複雜編碼、高解析視覺理解三個維度均優於 Opus 4.6，並首度搭載新一代資安偵測機制（提示注入防護與異常行為監控）。Latent.Space 標題直言「literally one step better than 4.6 in every dimension」，The Verge 則指出此次發布恰在 Mythos Preview 引爆討論後，是 Anthropic 刻意採分層策略——先讓市場習慣有強監控的高能力模型，再推更強版本。',
		emoji: '🔧',
		did_you_know:
			'Anthropic 官方說明 Opus 4.7 的資安能力刻意設計在 Mythos 之下，目的是在較低風險的商業環境中先測試新一代治理框架的實際效果——每一次商業發布同時也是 Anthropic 自己的壓力測試。',
		talking_points: [
			'Opus 4.7 在進階軟體工程、複雜多步驟任務、高解析影像理解三個維度均比 Opus 4.6 提升，Latent.Space 評為「在每個維度精進一步」的穩健升級。',
			'首度部署新一代資安偵測機制：提示注入（prompt injection）防護與異常行為模式監控同步上線，是 Anthropic 在商用模型上首次的大規模治理實驗。',
			'The Verge 解讀：Anthropic 的分層發布策略——先推 Opus 4.7（有監控）讓市場熟悉，Mythos Preview（更強）僅對受信任研究夥伴開放——是為了讓社會治理跟上模型能力曲線。',
			'iThome 強調資安能力刻意低於 Mythos，反映 Anthropic 謹慎的商業化路線：能力越強，監管框架必須越先到位。',
			'對 Google for Education 生態的教師：Opus 4.7 改善的影像處理能力意味著 Claude 在理解教學圖表、實驗圖示、物理題目圖片上的準確性提升。',
		],
		quote:
			'這款模型雖然不如 Mythos Preview 那麼強大，卻是公司用來測試新一代資安防護機制與模型治理方式的第一個公開版本。',
		quote_attribution: 'TechOrange 科技報橘，2026-04-17',
		quote_source_url: 'https://techorange.com/2026/04/17/anthropic-claude-opus-4-7/',
		quote_source_domain: 'techorange.com',
		perspectives: [
			{
				text: '台灣媒體（TechOrange、iThome）一致聚焦 Opus 4.7 作為「可控 AI」戰略的意義，認為模型治理能力比純能力提升更值得關注。iThome 則強調資安能力刻意低於 Mythos，反映 Anthropic 謹慎的商業化路線。',
				sources: [
					{
						name: 'TechOrange 科技報橘',
						url: 'https://techorange.com/2026/04/17/anthropic-claude-opus-4-7/',
					},
					{
						name: 'iThome 新聞',
						url: 'https://www.ithome.com.tw/news/175136',
					},
				],
			},
			{
				text: 'The Verge 側重競爭格局：Anthropic 在 Mythos buzz 正盛時推 Opus 4.7，顯示刻意的分層發布策略。Latent.Space 分析師評為「在每個維度都比 4.6 精進一步」的穩健升級，而非跳躍式突破。',
				sources: [
					{
						name: 'AI | The Verge',
						url: 'https://www.theverge.com/ai-artificial-intelligence/914463/anthropic-opus-4-7',
					},
					{
						name: 'Latent.Space',
						url: 'https://www.latent.space/p/ainews-anthropic-claude-opus-47-literally',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-11',
				date_iso: '2026-04-11',
				content: 'Anthropic 發布 Mythos Preview，僅對受信任研究夥伴開放，強大能力引起多國監管機構警戒。',
			},
			{
				date: '2026-04-16',
				date_iso: '2026-04-16',
				content: 'Anthropic 正式發表 Claude Opus 4.7，強調資安偵測機制為核心新特色，Latent.Space 評為「逐維度進步」。',
			},
		],
		articles: [
			{
				title: 'Anthropic 發表新 AI 模型 Claude Opus 4.7，攻向「可控 AI」新戰場',
				link: 'https://techorange.com/2026/04/17/anthropic-claude-opus-4-7/',
				domain: 'techorange.com',
				date: '2026-04-17',
			},
			{
				title: 'Claude Opus 4.7強化開發與影像處理，資安能力刻意低於Mythos模型',
				link: 'https://www.ithome.com.tw/news/175136',
				domain: 'ithome.com.tw',
				date: '2026-04-17',
			},
			{
				title: 'Anthropic releases a new Opus model amid Mythos Preview buzz',
				link: 'https://www.theverge.com/ai-artificial-intelligence/914463/anthropic-opus-4-7',
				domain: 'theverge.com',
				date: '2026-04-16',
			},
			{
				title: '[AINews] Anthropic Claude Opus 4.7 - literally one step better than 4.6 in every dimension',
				link: 'https://www.latent.space/p/ainews-anthropic-claude-opus-47-literally',
				domain: 'latent.space',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'techorange.com' },
			{ name: 'ithome.com.tw' },
			{ name: 'theverge.com' },
			{ name: 'latent.space' },
		],
	},
	{
		id: 'sai-news-002',
		cluster_number: 2,
		unique_domains: 4,
		number_of_titles: 4,
		category: 'AI 動態',
		title: 'OpenAI Codex 全面升級：能操控電腦、整合記憶、直接挑戰 Claude Code',
		short_summary:
			'OpenAI 於 4 月 16 日宣布 Codex 重大更新：macOS App 加入 Computer Use（可操控電腦螢幕）、上網搜尋、生成圖片，並新增跨工作階段記憶與外掛整合（Jira、GitHub、Figma）。The Verge 明確稱這是「直接瞄準 Claude Code 的一擊」，iThome 確認台灣開發者已可使用。Agents SDK 同步新增原生沙箱執行，讓 AI 代理在安全隔離環境中長時間自主執行。兩家公司的 agentic coding 競賽正式進入正面交鋒。',
		emoji: '💻',
		did_you_know:
			'Latent.Space 的分析標題《RIP Pull Requests (2005–2026)》引發熱議——Codex 已能完整接管從開 issue 到合併 PR 的整個流程，傳統的 Git Pull Request 工作流程可能正在走向歷史。',
		talking_points: [
			'Codex macOS 版新增 Computer Use：AI 可理解螢幕內容、輸入文字、上網瀏覽，從「寫程式助理」升級為「能替你操作電腦的代理」。',
			'跨工作階段記憶功能讓 Codex 記住開發者偏好與專案脈絡；外掛整合讓 Codex 可讀寫 Jira、GitHub、Figma，成為整個開發生態的中心節點。',
			'Agents SDK 加入原生沙箱執行：長時間自主執行的 AI 代理有更嚴格的權限隔離，企業部署的安全門檻降低。',
			'The Verge 定性：這是 OpenAI 把 Anthropic 視為開發者生態主要競爭對手的公開聲明，不是泛泛的「AI 競賽」，而是明確的「coding 代理市場爭奪」。',
			'iThome 報導 Codex macOS 版已向台灣開發者開放，並確認 Computer Use 功能需手動在設定中啟用。',
		],
		perspectives: [
			{
				text: 'The Verge 明確定性此次更新是「直接瞄準 Claude Code」，OpenAI 把 Anthropic 視為開發者生態的主要競爭對手；Computer Use 是此次最重要突破，讓 Codex 的應用範疇大幅擴大。',
				sources: [
					{
						name: 'AI | The Verge',
						url: 'https://www.theverge.com/ai-artificial-intelligence/913034/openai-codex-updates-use-macos',
					},
				],
			},
			{
				text: 'TechNews 與 OpenAI 官方聚焦 Agents SDK 的沙箱執行：企業部署 AI 代理的信任門檻正在降低，但自主行為增加也意味著需要更嚴格的監控框架——這是「讓 AI 更能幹」與「讓 AI 更安全」同步進行的設計挑戰。',
				sources: [
					{
						name: 'OpenAI News',
						url: 'https://openai.com/index/the-next-evolution-of-the-agents-sdk',
					},
					{
						name: 'TechNews 科技新報',
						url: 'https://technews.tw/2026/04/17/openai-releases-a-major-update-to-codex/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-15',
				date_iso: '2026-04-15',
				content: 'OpenAI 發布 Agents SDK 升級版，加入原生沙箱執行機制。',
			},
			{
				date: '2026-04-16',
				date_iso: '2026-04-16',
				content: 'OpenAI 宣布 Codex 重大更新，The Verge 報導稱這是對 Claude Code 的直接挑戰。',
			},
		],
		articles: [
			{
				title: "OpenAI's big Codex update is a direct shot at Claude Code",
				link: 'https://www.theverge.com/ai-artificial-intelligence/913034/openai-codex-updates-use-macos',
				domain: 'theverge.com',
				date: '2026-04-16',
			},
			{
				title: 'Codex for (almost) everything',
				link: 'https://openai.com/index/codex-for-almost-everything',
				domain: 'openai.com',
				date: '2026-04-16',
			},
			{
				title: 'OpenAI Codex 重大更新：Agent 背景運作、內建瀏覽器、整合外掛',
				link: 'https://technews.tw/2026/04/17/openai-releases-a-major-update-to-codex/',
				domain: 'technews.tw',
				date: '2026-04-17',
			},
			{
				title: 'OpenAI Codex macOS版App加入電腦工具使用功能，能上網、打字、生成圖片',
				link: 'https://www.ithome.com.tw/news/175135',
				domain: 'ithome.com.tw',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'theverge.com' },
			{ name: 'openai.com' },
			{ name: 'technews.tw' },
			{ name: 'ithome.com.tw' },
		],
	},
	{
		id: 'sai-news-003',
		cluster_number: 3,
		unique_domains: 4,
		number_of_titles: 5,
		category: 'AI 動態',
		title: 'Anthropic 資安模型 Mythos 引多國監管警戒，白宮擬開放聯邦機構使用',
		short_summary:
			'Anthropic 的資安旗艦模型 Mythos Preview 發布後，引起美、英、加三國金融監管機構高度警戒，擔憂強大的跨系統分析能力若被攻擊方利用將構成金融系統威脅。彭博（Bloomberg）報導白宮正積極協調允許美國聯邦機構合法使用 Mythos，TechNews 台灣版跟進。iThome 資安週報指出這標誌著 LLM 能力提升已成為國家級金融安全議題。',
		emoji: '🔐',
		did_you_know:
			'Mythos Preview 名稱源自希臘語「神話」，暗示其能力被 Anthropic 內部視為跨越某種「傳說等級」的門檻。目前僅少數受信任的研究夥伴和政府機構獲得存取權限。',
		talking_points: [
			'Mythos Preview 已展現強大的跨系統分析能力——可跨多個平台分析資安弱點、識別攻擊路徑——這種能力在攻擊方手中等同於「自動化的進階持續性滲透（APT）工具」。',
			'美、英、加三國金融監管機構進入警戒狀態：核心擔憂不是 Anthropic 本身，而是「強大 LLM 如果被竊取或濫用」對現有金融基礎設施的衝擊。',
			'彭博報導白宮協調允許聯邦機構使用 Mythos，顯示 AI 模型的「誰可以用」已成為國家安全政策的核心議題，而非只是商業授權問題。',
			'iThome 資安週報（0413–0417 期）分析：這代表監管機構第一次把特定 LLM 的能力提升視為「系統性金融風險」，而非個案資安事件。',
			'對台灣的連結：台灣金融監理機構（金管會）尚未就 LLM 資安風險發出警示，但美英加的警戒代表這類法規討論可能在未來 1-2 年進入台灣政策議程。',
		],
		perspectives: [
			{
				text: 'iThome 資安週報分析：美英加監管機構警戒 LLM 模型能力提升是重要的政策轉折點——從「AI 是新工具」到「強大 AI 是系統性金融風險」的認知升級，代表監管思維正在追趕技術能力的曲線。',
				sources: [
					{
						name: 'iThome 新聞',
						url: 'https://www.ithome.com.tw/news/175148',
					},
				],
			},
			{
				text: 'TechNews 聚焦白宮協調面向：允許聯邦機構使用 Mythos 是一把雙面刃——政府獲得強大防禦工具，但同時也意味著確認了「模型能力已達到需要政府級治理」的門檻。',
				sources: [
					{
						name: 'TechNews 科技新報',
						url: 'https://technews.tw/2026/04/17/white-house-works-to-give-us-agencies-anthropic-mythos-ai/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-11',
				date_iso: '2026-04-11',
				content: 'Anthropic 發布 Mythos Preview，僅對受信任研究夥伴開放。',
			},
			{
				date: '2026-04-17',
				date_iso: '2026-04-17',
				content: '彭博報導白宮擬允許聯邦機構使用 Mythos；iThome 資安週報確認美英加監管機構進入警戒狀態。',
			},
		],
		articles: [
			{
				title: "Anthropic's new cybersecurity model could get it back in the government's good graces",
				link: 'https://www.theverge.com/ai-artificial-intelligence/914229/tides-turning-anthropic-mythos',
				domain: 'theverge.com',
				date: '2026-04-17',
			},
			{
				title: '彭博：白宮擬允許聯邦機構使用 AI 模型 Mythos',
				link: 'https://technews.tw/2026/04/17/white-house-works-to-give-us-agencies-anthropic-mythos-ai/',
				domain: 'technews.tw',
				date: '2026-04-17',
			},
			{
				title: '【資安週報】0413~0417，美英加監管機構警戒LLM模型能力提升恐威脅金融舊系統',
				link: 'https://www.ithome.com.tw/news/175148',
				domain: 'ithome.com.tw',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'theverge.com' },
			{ name: 'technews.tw' },
			{ name: 'ithome.com.tw' },
		],
	},
];

const aiApplicationsStories: Story[] = [
	{
		id: 'sai-app-001',
		cluster_number: 1,
		unique_domains: 2,
		number_of_titles: 2,
		category: 'AI 熱門應用',
		title: 'World 虹膜掃描從加密貨幣擴張到 Tinder 與 Zoom：生物辨識身份驗證進入日常',
		short_summary:
			'Sam Altman 旗下新創 World（前稱 Worldcoin）本週宣布多項擴張：推出 Concert Kit 讓用戶以虹膜掃描購買演唱會門票，並宣布與 Tinder 整合（可驗證「你是真人而非 AI 帳號」）及 Zoom 整合（視訊會議前驗證身份）。The Verge 分析這是 World 正式進軍「日常身份驗證」市場的信號，從加密貨幣的邊緣應用走向主流消費場景。生物辨識身份認證的普及速度和隱私代價正在同步加速。',
		emoji: '👁️',
		did_you_know:
			'World 的虹膜掃描裝置（Orb）目前全球已佈建超過 3,000 個地點，台灣暫無官方站點，但新加坡和香港均有佈建。Concert Kit 讓演唱會主辦單位可選擇「僅接受 World 驗證購票者」，實質上成為「真人驗證」的新標準。',
		talking_points: [
			'Concert Kit 的商業邏輯：演唱會黃牛和 AI 帳號搶票是主辦單位長期痛點，World 虹膜驗證「一人一票、不可轉移」的機制直接解決這個問題——但代價是用戶必須先掃描虹膜。',
			'Tinder 整合的核心訴求：在 AI 生成假帳號盛行的交友 App 生態中，World 驗證提供「這個帳號對應真實生物」的保證，對厭倦假帳號的用戶是吸引力，對隱私敏感者則是警示。',
			'Zoom 整合展示了「工作場景的身份驗證市場」：企業視訊會議中確認「真人」出席的需求正在因 AI 深偽技術而急速上升。',
			'The Verge 分析 World 的策略轉向：從「加密貨幣空投換取虹膜」到「日常服務的身份認證基礎設施」——這是生物辨識資料貨幣化的下一個階段。',
			'隱私爭議：世界各地已有多個國家（德國、英國）調查 World 的資料收集合法性；台灣尚無相關監管動作，但使用者在決定是否參與前應了解其資料政策。',
		],
		perspectives: [
			{
				text: 'INSIDE 從商業擴張角度報導：World 從加密貨幣邊緣走向日常服務，Concert Kit 是最具說服力的落地案例——演唱會門票對真人驗證有強烈需求，World 的時機選擇精準。',
				sources: [
					{
						name: 'INSIDE',
						url: 'https://www.inside.com.tw/article/41105-buy-concert-tickets-by-scanning-your-iris',
					},
				],
			},
			{
				text: 'The Verge 側重隱私批評角度：虹膜掃描是不可更換的生物特徵，一旦資料庫被攻擊或企業政策改變，用戶無法「重設」自己的生物辨識資料——這與密碼外洩「換密碼就好」的情境本質不同。',
				sources: [
					{
						name: 'AI | The Verge',
						url: 'https://www.theverge.com/ai-artificial-intelligence/914385/world-id-tinder-identity',
					},
				],
			},
		],
		articles: [
			{
				title: '掃描虹膜買演唱會門票？Sam Altman 旗下新創 World 推出 Concert Kit、擴大進軍 Tinder 與 Zoom',
				link: 'https://www.inside.com.tw/article/41105-buy-concert-tickets-by-scanning-your-iris',
				domain: 'inside.com.tw',
				date: '2026-04-18',
			},
			{
				title: 'Should you stare into Sam Altman\'s orb before your next date?',
				link: 'https://www.theverge.com/ai-artificial-intelligence/914385/world-id-tinder-identity',
				domain: 'theverge.com',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'inside.com.tw' },
			{ name: 'theverge.com' },
		],
	},
];

const aiEduStories: Story[] = [
	{
		id: 'sai-edu-001',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: 'JAMA 研究：AI 早期診斷錯誤率逾 80%，對 AI 輔助醫療的期待需要重新校準',
		short_summary:
			'【本研究目前為單一來源（iThome 引述 JAMA），待其他媒體跟進確認】美國醫學期刊（JAMA）發表研究，檢測多個主流 AI 模型在早期疾病診斷任務的錯誤率，結果顯示整體錯誤率超過 80%。這不是說 AI 在醫療上毫無用處，而是揭示了「AI 輔助診斷」與「AI 替代診斷」之間存在巨大的能力落差——在需要整合病史、症狀模式、實驗室數值的複雜臨床推理中，現有 LLM 仍遠不可靠。這個發現對正在評估 AI 輔助學習工具的教育工作者同樣有啟示：高錯誤率場景需要人工驗證環節，不能直接依賴輸出。',
		emoji: '🏥',
		did_you_know:
			'JAMA 是「美國醫學會雜誌（Journal of the American Medical Association）」的縮寫，是全球引用率最高的醫學期刊之一。發表在 JAMA 的研究通常需要通過同儕審查，研究方法論的可信度較高，但這也意味著其結論往往比業界宣傳更為保守謹慎。',
		talking_points: [
			'【JAMA 研究，iThome 2026-04-17 報導】多個主流 AI 模型在早期診斷任務中錯誤率超過 80%——這是同儕審查研究的數字，不是評論者的主觀感受。',
			'錯誤率高的核心原因：早期診斷需要整合多維度資訊（症狀時序、藥物史、家族病史、實驗室數值、影像），現有 LLM 在「整合不確定性資訊並給出保守判斷」的能力上仍有根本限制。',
			'重要區分：「AI 輔助」（AI 提供建議，醫生決策）vs「AI 替代」（AI 直接給出診斷）——這個錯誤率說明的是後者的不可靠，而不是前者的無用。',
			'教育類比：AI 在學習評量中的應用同樣存在這個區分。AI 批改作文可以輔助教師，但若直接依賴 AI 評分決定學生成績，需要先了解其在特定科目的錯誤率。',
			'對高中物理教師的具體啟示：AI 在需要圖形理解 + 數學推理的題目（電路分析、力學計算）上的錯誤率尤為值得關注，這類「多模態推理」任務與醫療診斷面臨類似挑戰。',
		],
		quote:
			'AI 診斷錯誤率超過 80%，顯示現有語言模型在複雜臨床推理任務中仍有根本的可靠性問題。',
		quote_attribution: 'iThome 引述 JAMA 研究，2026-04-17',
		quote_source_url: 'https://www.ithome.com.tw/news/175146',
		quote_source_domain: 'ithome.com.tw',
		perspectives: [
			{
				text: '（單一來源觀點）iThome 報導此結果時強調「AI 診斷的高錯誤率」，但同時指出這是針對「早期」診斷的評測——早期診斷的資訊本來就更模糊，人類醫師在同樣條件下的錯誤率也不低，兩者的公平比較需要更多方法論細節。',
				sources: [
					{
						name: 'iThome 新聞',
						url: 'https://www.ithome.com.tw/news/175146',
					},
				],
			},
		],
		articles: [
			{
				title: '美國醫學期刊研究顯示AI早期診斷錯誤率逾80%',
				link: 'https://www.ithome.com.tw/news/175146',
				domain: 'ithome.com.tw',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'ithome.com.tw' },
		],
	},
	{
		id: 'sai-edu-002',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: 'MIT 開源 AI 蛋白質設計工具：讓實驗室生物學家不需要程式背景也能使用',
		short_summary:
			'【本研究目前為單一來源（MIT News）】MIT 研究人員開發出一套 AI 驅動的蛋白質設計工具，並以開源方式發布，目標是讓沒有程式設計背景的實驗室生物學家也能直接使用。這是「AI 降低科學研究工具的技術門檻」的典型案例：過去需要計算生物學家才能操作的分子設計流程，現在透過 AI 介面讓實驗科學家也能執行。對物理教師而言，這個模式（AI 把複雜工具的操作門檻降低，讓領域專家聚焦在領域判斷上）也是 AI 融入學科教學的核心價值所在。',
		emoji: '🧬',
		did_you_know:
			'蛋白質設計是現代藥物開發的核心步驟，傳統上需要計算生物學家花費數週運算才能提出候選蛋白質結構。MIT 這套工具的意義不只是「更快」，而是「讓更多領域的人可以提出假設」——把科學探索的入口點向下移動，可能大幅增加有效假設的數量。',
		talking_points: [
			'【MIT News，2026-04-17】MIT 開源 AI 蛋白質設計工具，設計時刻意針對「不會寫程式的實驗室生物學家」——這意味著工具的輸入介面是生物學語言，而非程式碼或命令列。',
			'工具的教育意義：大學生命科學實驗課可以讓學生操作 AI 設計蛋白質，而不是只讀教科書上的案例——這種「AI 讓學生真正動手做研究」的應用值得台灣高中/大學科學教師關注。',
			'能力邊界的重要性：MIT 研究者強調工具的適用範圍（哪類蛋白質設計任務可以信任 AI 結果），這種「說清楚工具的限制」的做法，是負責任的 AI 工具設計的標準。',
			'開源決策的影響：與商業 AI 工具不同，開源讓學術社群可以審視、修改、改進工具本身——這對研究工具的可信度和長期進化速度都有重要影響。',
			'跨域啟示：「AI 作為領域工具的民主化介面」這個模式，正在科學研究的各個子領域複製——今天是蛋白質設計，明天可能是物理模擬、材料科學、教學素材生成。',
		],
		perspectives: [
			{
				text: '（單一來源觀點）MIT News 報導側重工具的可及性設計（accessibility design）——為非程式背景的科學家設計介面是刻意的工程選擇，代表 MIT 研究者把「能被更多人用到」列為工具成功的核心指標，而非只追求技術指標。',
				sources: [
					{
						name: 'MIT News - Artificial intelligence',
						url: 'https://news.mit.edu/2026/bringing-ai-driven-protein-design-tools-to-biologists-everywhere',
					},
				],
			},
		],
		articles: [
			{
				title: 'Bringing AI-driven protein-design tools to biologists everywhere',
				link: 'https://news.mit.edu/2026/bringing-ai-driven-protein-design-tools-to-biologists-everywhere',
				domain: 'news.mit.edu',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'news.mit.edu' },
		],
	},
];

const aiClassroomStories: Story[] = [
	{
		id: 'sai-cls-001',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		title: 'AI 整理 Google Drive 教學資源：從混亂資料夾到可搜尋的備課系統',
		short_summary:
			'Class Tech Tips 本週提供完整的 AI 輔助整理教學資源指南：用 AI 設計命名規則、依課程標準自動分類、清理 Google Drive 雜亂結構。核心方法是把現有資料夾結構貼給 AI，請它依「學年 × 單元 × 資料類型」建立命名架構，再批次執行。對長期累積了大量教學素材但「找不到想要的那份」的教師，這是一個可在一個下午內完成的系統整理方案。',
		emoji: '🗂️',
		did_you_know:
			'Class Tech Tips 建議的一個反直覺技巧：在請 AI 整理資料夾前，先讓 AI 列出「你目前有哪些冗餘或過時的材料」——大多數老師的 Google Drive 裡有 20-30% 是從來不用的舊版本，清理前先盤點，比直接重新命名更有效率。',
		talking_points: [
			'具體步驟：①列出現有資料夾結構（可截圖或文字列表）→ ②貼給 Gemini/ChatGPT，提示「我是高中物理老師，請設計一套依課程標準的命名系統」→ ③按建議批次重新命名 → 整個流程約 1–2 小時。',
			'Class Tech Tips 建議的分類維度：學科 × 學年 × 教學單元 × 資料類型（簡報、習題、評量、影片連結）——這個四維架構適合大多數台灣高中科目教師。',
			'Google Drive 搜尋的隱藏功能：命名規則一致後，可以用「type:presentation 力學」這類進階搜尋語法，比靠資料夾瀏覽快 10 倍以上。',
			'AI 協助的核心價值不是自動化本身，而是「強迫你說清楚自己的整理邏輯」——你需要向 AI 解釋你的課程結構，這個思考過程本身就有助於整理教學知識體系。',
			'長期維護建議：每學期末花 30 分鐘，讓 AI 掃描新增材料並建議歸類位置，避免累積成新的混亂。',
		],
		perspectives: [
			{
				text: 'Class Tech Tips 強調：AI 整理資源的最大價值在於「逼使你明確表達自己的整理邏輯」——哪些依課標、哪些依班級、哪些依格式，這個思考過程本身就是有價值的。工具整理了 Drive，但真正的產出是一套你自己清楚的知識組織系統。',
				sources: [
					{
						name: 'Class Tech Tips',
						url: 'https://classtechtips.com/2026/04/15/organize-teaching-resources/',
					},
				],
			},
		],
		articles: [
			{
				title: 'How to Use AI to Organize Teaching Resources',
				link: 'https://classtechtips.com/2026/04/15/organize-teaching-resources/',
				domain: 'classtechtips.com',
				date: '2026-04-15',
			},
		],
		domains: [
			{ name: 'classtechtips.com' },
		],
	},
	{
		id: 'sai-cls-002',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		title: 'Claim Auditor：輸入「據研究顯示…」，AI 幫你搜尋同儕審查論文驗證真偽',
		short_summary:
			'Larry Ferlazzo 介紹新工具「The Claim Auditor」：輸入任何宣稱有研究支持的論點，AI 自動搜尋同儕審查資料庫，回傳「是否找到支持研究」與「研究的限制條件」。測試案例包括「小班教學有助學習成效」——AI 找到了支持研究，但也標注了適用條件。這個工具解決教師日常的一個具體痛點：引用教學策略研究時，快速初步核實是否有學術依據，而不是只靠一篇部落格的說法。',
		emoji: '🔍',
		did_you_know:
			'Claim Auditor 的回應方式是「有但有但書」，而非簡單的「是/否」——這種「提供支持研究並同時標注限制條件」的回答方式，比直接 Google 或問 ChatGPT 更接近真正學術核查的標準，因為它強迫用戶面對研究本身的適用邊界。',
		talking_points: [
			'Claim Auditor（theclaim auditor.com）免費使用，支援英文論點查核，操作方式：直接輸入論點句子，不需要搜尋關鍵字——工具會自動拆解論點並比對文獻。',
			'教師的典型使用場景：備課時想確認「主動學習比講授更有效」、「間隔複習比集中學習好」等常被引用的教育研究是否真的有同儕審查依據。',
			'工具的限制（重要）：Claim Auditor 核查的是「有無相關論文存在」，而非「論文品質高低」或「是否已被後續研究推翻」——做完初步核查後仍需配合學科判斷。',
			'對物理教師的應用：在設計 STEM 課程時引用「動手做比聽課更能記住物理概念」等論點，先用 Claim Auditor 確認是否有研究支持，可以讓你對家長和學校的說明更有說服力。',
			'Ferlazzo 同期也測試了「翻轉課堂提升學習成效」這個論點，結果是「有研究支持，但效果大小因科目和實施品質差異很大」——這種帶有細緻條件的回應，比單純的「有/沒有」更有使用價值。',
		],
		perspectives: [
			{
				text: 'Larry Ferlazzo 的觀點：Claim Auditor 代表「AI 作為查核工具」而非「AI 作為權威」的使用方式——它的價值是快速初篩，給你一個「值得進一步查」的信號，而不是取代你的學科判斷。這是教師應該建立的 AI 使用心態模型。',
				sources: [
					{
						name: "Larry Ferlazzo's Websites of the Day…",
						url: 'https://larryferlazzo.edublogs.org/2026/04/15/the-claim-auditor-uses-ai-to-verify-claims-that-people-say-are-research-based/',
					},
				],
			},
		],
		articles: [
			{
				title: '"The Claim Auditor" Uses AI To Verify…Claims That People Say Are Research-Based',
				link: 'https://larryferlazzo.edublogs.org/2026/04/15/the-claim-auditor-uses-ai-to-verify-claims-that-people-say-are-research-based/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-04-15',
			},
		],
		domains: [
			{ name: 'larryferlazzo.edublogs.org' },
		],
	},
];

const twEduStories: Story[] = [
	{
		id: 'stw-edu-001',
		cluster_number: 1,
		unique_domains: 2,
		number_of_titles: 2,
		category: '教育政策',
		title: 'arXiv 審計 TikTok 演算法：30 帳號 8,727 影片，心理健康內容佔 45% 無法逃脫',
		short_summary:
			'arXiv 發表研究（arXiv:2604.14832），以 30 個全新帳號、7 天審計、8,727 部推薦影片，測試不同互動策略對 TikTok 推送心理健康內容的影響。結果顯示：主動互動的帳號每日推薦中有 45% 是心理健康相關內容；即便採迴避或被動策略，也有 11–20% 無法逃脫。同期台灣 join.gov.tw 出現提案要求取消高中全面收取手機，改以規範使用為原則。arXiv 這項研究提供了「問題不在設備本身，而在演算法結構」的具體量化依據，直接切入台灣手機政策辯論的核心。',
		emoji: '📱',
		did_you_know:
			'這篇 arXiv 研究的創新方法論是用「LLM 代理人」模擬不同類型青少年用戶（主動互動型、迴避型、被動型），是首次以 AI 代理人大規模審計社群媒體演算法的學術研究。這個方法讓研究者在不需要真實青少年參與實驗的情況下，系統性地測試演算法行為。',
		talking_points: [
			'【arXiv:2604.14832，單一來源，權威來源 arXiv】主動互動策略使每日推薦中約 45% 為心理健康相關；迴避或被動策略降至 11–20%，但無法完全歸零。',
			'關鍵發現：演算法對用戶行為模式（停留、按讚、搜尋）的反應比初始搜尋意圖更決定性——即使開始時無意接觸敏感內容，行為累積後仍會觸發演算法鎖定。',
			'對台灣手機政策的直接意義：join.gov.tw 上的手機禁令提案從「公平性與自主性」角度主張規範而非禁止，這篇研究從「演算法的系統性傷害」角度提供了支持管制的實證——兩者構成完整的政策辯論框架。',
			'研究建議：平台應能「區分求助行為與痛苦表達」，但目前演算法無此能力，把兩類行為統一導向更多心理健康內容推送，反而可能加重接觸敏感內容的頻率。',
			'對教師的具體啟示：管制的切入點應是「演算法設計規範」（要求平台提供時間限制工具、危害內容分類白名單），而非只規定設備沒收時間。',
		],
		quote:
			'Engagement rapidly saturates feeds with mental health content (~45% of daily recommendations), while avoidance and passive viewing reduce but do not eliminate exposure (~11-20%).',
		quote_attribution: 'arXiv:2604.14832，2026-04-17',
		quote_source_url: 'https://arxiv.org/abs/2604.14832',
		quote_source_domain: 'arxiv.org',
		perspectives: [
			{
				text: '學術研究角度（arXiv）：這是首個以 LLM 代理人系統性審計 TikTok 演算法的實證研究，方法論創新度高。「行為模式比搜尋意圖更重要」的發現，對校園使用規範的設計有直接影響——學生是否「想」找心理健康內容不重要，只要他們的使用行為符合特定模式就會被演算法鎖定。',
				sources: [
					{
						name: 'cs.CY updates on arXiv.org',
						url: 'https://arxiv.org/abs/2604.14832',
					},
				],
			},
			{
				text: '台灣政策角度（join.gov.tw）：手機禁令提案主張「規範使用取代全面禁止」，核心論點是「教學生管理科技比替學生管理科技更重要」。arXiv 研究提供的實證補強了這個論點的一個面向：問題不是手機設備，而是特定 App 的演算法設計需要監管。',
				sources: [
					{
						name: '公共政策網路參與平臺',
						url: 'https://join.gov.tw/idea/detail/446389f7-80c1-444f-b2ff-fc40712f31be',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-17',
				date_iso: '2026-04-17',
				content: 'arXiv 發表 TikTok 演算法審計研究（30 帳號、7 天、8,727 影片）。',
			},
			{
				date: '2026-04-17',
				date_iso: '2026-04-17',
				content: 'join.gov.tw 出現「建議取消高中全面收取手機之作法，改以規範使用為原則」提案。',
			},
		],
		articles: [
			{
				title: "Seeking Help, Facing Harm: Auditing TikTok's Mental Health Recommendations",
				link: 'https://arxiv.org/abs/2604.14832',
				domain: 'arxiv.org',
				date: '2026-04-17',
			},
			{
				title: '建議取消高中全面收取手機之作法，改以規範使用為原則',
				link: 'https://join.gov.tw/idea/detail/446389f7-80c1-444f-b2ff-fc40712f31be',
				domain: 'join.gov.tw',
				date: '2026-04-17',
			},
		],
		domains: [
			{ name: 'arxiv.org' },
			{ name: 'join.gov.tw' },
		],
	},
];

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
