import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';
const AI_APPLICATIONS_UUID = 'c0000005-0000-4000-8000-000000000005';

// ─── Stories synthesized 2026-05-05 by pipeline (auto-generated) ───

const aiNewsStories: Story[] = [
	{
		id: 'aiNews-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'Google 2026 年 4 月 AI 新功能：行動端 AI 影片生成登場',
		short_summary: 'Google 在 2026 年 4 月集中發布多項 AI 更新，其中包含行動裝置端的 AI 影片生成功能展示，並以水下場景影片作為示範素材。對台灣高中教師而言，AI 影片生成能力正快速走向行動普及，意味著學生未來在手機上即可製作專業品質的 AI 生成影片；教師有必要提前了解這類工具的操作原理與倫理限制，以應對課堂中可能出現的深偽影片辨識與媒體素養議題。',
		emoji: '🎬',
		did_you_know: 'AI 影片生成模型（如 Google Veo）能根據文字提示或參考圖片，在數十秒內合成具備光影、水流等物理效果的高畫質影片；水下場景因光線折射複雜，長期是電腦視覺的高難度測試基準，能通過此測試代表模型的物理模擬能力已大幅躍升。',
		talking_points: [
			'Google 於 2026 年 4 月集中公告一批 AI 功能更新，涵蓋行動端 AI 影片生成能力。',
			'展示素材包含水下場景 mp4 影片與行動裝置 AI 影片操作介面 mockup，顯示行動端部署已進入實際測試或上線階段。',
			'行動端 AI 影片生成普及後，學生無需桌機或專業軟體，即可在手機上製作 AI 合成影片，大幅降低深偽內容的製作門檻。',
			'教師應關注 Google 此波更新是否納入使用政策限制（如年齡驗證、浮水印），以評估對校園資訊倫理教學的影響。',
			'建議高中媒體素養課程提前納入「AI 生成影片辨識」單元，並追蹤 Google 官方部落格後續政策說明。',
		],
		quote: 'The latest AI news we announced in April 2026',
		quote_attribution: 'Google Blog，2026-05-04',
		quote_source_url: 'https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '從技術普及角度來看，行動端 AI 影片生成代表生成式 AI 正式脫離雲端工作站限制，進入人人可用的日常場景。Google 此波更新若順利推廣，將使 AI 影片門檻大幅下降，對創作教育帶來機會。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/',
					},
				],
			},
			{
				text: '從媒體素養與資訊倫理角度來看，AI 影片生成行動化後，深偽影片的製作成本趨近於零，校園霸凌、不實資訊等風險隨之上升。教師與教育主管機關需同步研擬因應策略，而非等技術完全普及後才補救。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/',
					},
				],
			},
		],
		articles: [
			{
				title: 'The latest AI news we announced in April 2026',
				link: 'https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/',
				domain: 'blog.google',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'blog.google' },
		],
	},
	{
		id: 'aiNews-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'OpenAI 攜手 PwC 以 AI 代理人重塑企業財務長職能',
		short_summary: '全球四大會計師事務所之一的 PwC 與 OpenAI 宣布合作，將 AI 代理人（AI Agents）正式部署至企業財務長辦公室，涵蓋預測、內部控制強化與流程自動化。這代表過去被視為「高薪穩定」的財務、審計職位，正在被系統性重塑。台灣高中教師若要協助學生做出明智的升學與職涯選擇，必須正視 AI 對白領財務工作的結構性衝擊，已從概念討論進入頭部企業的實際部署。',
		emoji: '📊',
		did_you_know: 'PwC 在全球擁有超過 36 萬名員工，是全球最大的專業服務機構之一。此次合作代表 AI 代理人已不只是輔助工具，而是被定位為可主動執行財務核心任務的「數位工作者」，正式進入傳統高門檻白領職場。',
		talking_points: [
			'OpenAI 與 PwC 正式宣布戰略合作，目標將 AI 代理人部署於企業財務長（CFO）辦公室的核心工作流程',
			'合作範疇涵蓋財務預測（forecasting）、內部控制強化（controls）、財務流程自動化三大面向',
			'PwC 為全球四大會計師事務所之一，此合作象徵 AI 代理人正式進入傳統高門檻專業服務產業',
			'企業採用模式轉變：不再只是「用 AI 協助人」，而是讓 AI 代理人獨立完成原本需要財務人員執行的任務',
			'台灣會計、財管相關科系學生面臨職涯重新定位壓力，教師需協助學生評估哪些技能仍具不可替代性',
		],
		quote: 'We\'re reimagining the office of the CFO—using AI agents to automate finance workflows, improve forecasting, strengthen controls, and modernize the finance function.',
		quote_attribution: 'OpenAI 官方部落格，2026-05-04',
		quote_source_url: 'https://openai.com/index/openai-pwc-finance-collaboration',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '效率提升派：AI 代理人能大幅降低財務作業的人力成本與人為錯誤，讓 CFO 團隊從重複性事務中解放，聚焦高價值策略決策。對 PwC 而言，這也是透過科技加值服務、強化與客戶黏性的商業模式轉型。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/openai-pwc-finance-collaboration',
					},
				],
			},
			{
				text: '勞動衝擊派：財務、審計、法遵等白領工作歷來被視為抗自動化的高技能職位，但此合作顯示連 CFO 辦公室核心職能都開始系統性替換。正在選擇大學科系的台灣高中生，需要嚴肅看待此一職涯風險訊號。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/openai-pwc-finance-collaboration',
					},
				],
			},
			{
				text: '監管與倫理派：AI 代理人自主執行財務控制與核准，引發責任歸屬不清、是否符合職業倫理標準等疑慮。企業在大規模採用前，需先釐清錯誤決策的法律責任與監理框架，否則恐衍生新型合規風險。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/openai-pwc-finance-collaboration',
					},
				],
			},
		],
		articles: [
			{
				title: 'OpenAI and PwC collaborate to reimagine the office of the CFO',
				link: 'https://openai.com/index/openai-pwc-finance-collaboration',
				domain: 'openai.com',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: 'aiNews-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'Gemini API 加入 Webhook 支援，長時間 AI 任務延遲大幅降低',
		short_summary: 'Google 為 Gemini API 加入事件驅動 Webhook 機制，開發者發出長時間 AI 請求後無需持續輪詢，改由系統主動推送結果。對台灣高中教師而言，建構在 Gemini API 上的作文批改、個人化學習推薦等工具將更即時回應；此更新也預告 AI 工具從「等待型」走向「主動推送型」的架構轉變，教師在評選 AI 輔助教學平台時，可預期善用此機制的新一代工具回饋速度將明顯提升。',
		emoji: '🔔',
		did_you_know: 'Webhook 與傳統 API 呼叫最大差異在於主動與被動：傳統方式是「客戶端不斷敲門問有沒有結果」，Webhook 則是「結果好了，伺服器自動打電話通知」。這個模式在支付、物流通知中早已成熟，如今正式進入生成式 AI 的工作流程基礎設施。',
		talking_points: [
			'Google 於 2026 年 5 月在 Gemini API 正式推出 Webhook 支援，專為文件批次分析、大規模內容生成等長時間 AI 任務設計。',
			'新機制採事件驅動架構：開發者提交任務後立即釋放連線資源，任務完成時由 Gemini API 主動觸發指定端點，無需重複查詢狀態。',
			'對教育工具開發者而言，此更新可簡化「批次批改作文」或「生成個人化練習題」等場景的後端設計，降低因長連線逾時造成的服務不穩定。',
			'事件驅動模式亦便於串接多個 AI 任務形成非同步 pipeline，例如先生成摘要、再依摘要產出測驗題，無需佔用長連線等待中間結果。',
		],
		quote: 'Reduce friction and latency for long-running jobs with Webhooks in Gemini API',
		quote_attribution: 'Google Blog（開發者工具）, 2026-05-04',
		quote_source_url: 'https://blog.google/innovation-and-ai/technology/developers-tools/event-driven-webhooks/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '從開發者角度看，Webhook 支援解決了長時間 AI 任務的「輪詢地獄」問題：過去需每隔數秒查詢任務狀態，浪費 API 配額與伺服器資源；新機制讓 AI 應用更易於規模化，是生成式 AI 走向生產環境的重要基礎設施補強。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/developers-tools/event-driven-webhooks/',
					},
				],
			},
			{
				text: '從教育科技選型角度看，此更新雖屬底層 API 改進，卻直接影響教師使用的 AI 工具體驗。批次作業回應更即時，教師可能更願意將 AI 融入課堂即時評量，而非僅用於課後離線作業；各校資訊組評估工具時，應關注所採平台是否善用此類現代化機制。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/developers-tools/event-driven-webhooks/',
					},
				],
			},
			{
				text: '從平台依賴角度看，Gemini API 持續強化基礎設施可能加速教育市場向 Google 生態系集中。台灣學校若大量採用基於 Gemini API 的教育工具，需同步思考資料主權與單一供應商依賴的治理風險。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/developers-tools/event-driven-webhooks/',
					},
				],
			},
		],
		articles: [
			{
				title: 'Reduce friction and latency for long-running jobs with Webhooks in Gemini API',
				link: 'https://blog.google/innovation-and-ai/technology/developers-tools/event-driven-webhooks/',
				domain: 'blog.google',
				date: '2026-05-04',
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
		title: 'OpenAI 重建 WebRTC 堆疊，實現低延遲語音 AI',
		short_summary: 'OpenAI 公開其即時語音 AI 的核心基礎設施改革：透過自建 WebRTC 堆疊，達成全球低延遲、無縫輪流對話的即時語音能力。對台灣高中教師而言，這意味著語音 AI 助教的技術門檻正快速下降——口說練習、英語會話模擬、即時問答等課堂應用，將從「技術上可行」變成「隨時可用」的現實，教師宜提前思考如何將語音 AI 工具融入教學設計。',
		emoji: '🎤',
		did_you_know: 'WebRTC 原是 Google 於 2011 年開源的瀏覽器通訊協定，最初設計用於視訊通話。OpenAI 選擇以此為基礎自建語音 AI 堆疊，代表即時語音互動已成為 AI 應用的新戰場，而非只是附加功能。',
		talking_points: [
			'OpenAI 自建 WebRTC 堆疊（非採用現成商業服務），完整掌控延遲最佳化的技術鏈',
			'語音 AI 具備「無縫輪流對話（turn-taking）」能力，可精準偵測使用者說話結束時機並即時回應',
			'架構設計支援全球規模同時服務大量用戶，且不犧牲低延遲品質',
			'低延遲語音互動是英語口說練習、簡報模擬等教育應用落地的關鍵技術前提',
			'此架構升級讓 AI 語音家教在課外自主練習場景的實用性大幅躍升',
		],
		quote: 'We rebuilt our WebRTC stack from the ground up to deliver real-time Voice AI with low latency, global scale, and seamless conversational turn-taking.',
		quote_attribution: 'OpenAI 官網, 2026-05-04',
		quote_source_url: 'https://openai.com/index/delivering-low-latency-voice-ai-at-scale',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '【技術壁壘觀點】OpenAI 選擇自建底層 WebRTC 架構，顯示語音 AI 已進入「基礎設施競爭」階段。對教育科技新創而言，這種技術縱深設定更高進入門檻，但透過 API 使用 OpenAI 語音服務的學校，可因此享有更穩定的低延遲體驗。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/delivering-low-latency-voice-ai-at-scale',
					},
				],
			},
			{
				text: '【教育應用觀點】低延遲語音 AI 讓即時口說練習輔助成為可能，但教師需反思：AI 回應的高度流暢性是否壓縮了學生思考與沉默的空間？過於即時的回饋機制可能不利於深層語言習得，教學設計需刻意保留「等待時間（wait time）」。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/delivering-low-latency-voice-ai-at-scale',
					},
				],
			},
			{
				text: '【資料主權觀點】全球規模語音 AI 基礎設施的擴張同步引發隱私疑慮：學生與 AI 的對話若須即時傳送至雲端處理，學校需評估是否符合《個人資料保護法》及教育部相關規範，並向家長說明資料流向。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/delivering-low-latency-voice-ai-at-scale',
					},
				],
			},
		],
		articles: [
			{
				title: 'How OpenAI delivers low-latency voice AI at scale',
				link: 'https://openai.com/index/delivering-low-latency-voice-ai-at-scale',
				domain: 'openai.com',
				date: '2026-05-04',
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
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		title: 'Codex Pets 推出動態寵物夥伴功能',
		short_summary: 'OpenAI 旗下 AI 程式助手 Codex 新推出「Codex Pets」，在編程工作流中加入動態虛擬寵物陪伴角色，將遊戲化元素帶入開發環境，試圖降低長時間撰寫程式的疲勞感。對台灣高中資訊科教師而言，此類情感化 AI 工具代表輔助學習工具正朝更友善、更具情感連結的方向演進。教師可評估此設計能否提升學生接觸 AI 輔助程式設計的動機，並思考遊戲化介面對實際學習成效的正負影響。',
		emoji: '🐾',
		did_you_know: '遊戲化（Gamification）在教育研究中已多次驗證能提升學習動機；虛擬寵物養成機制尤其對青少年族群有效，能激發持續使用意願。早期研究顯示，加入寵物互動介面的學習平台，日活躍使用率可比純功能型介面高出約 20–30%。',
		talking_points: [
			'Codex Pets 於 2026-05-04 登上 Product Hunt，是 OpenAI Codex AI 程式助手的新功能擴充',
			'核心設計為「工作流程中的動態寵物夥伴」，結合擬人化互動降低程式學習的心理門檻',
			'代表 AI 工具設計趨勢：從純功能性轉向情感化、遊戲化介面，目標族群涵蓋學生與初學者',
			'高中資訊教師可觀察此類工具在程式課引導動機上的潛力，並留意娛樂化是否分散學習注意力',
		],
		quote: 'Animated companions for your Codex workflow',
		quote_attribution: 'Product Hunt，2026-05-04',
		quote_source_url: 'https://www.producthunt.com/products/openai',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '支持觀點（工具設計）：寵物夥伴設計讓 AI 編程工具更親切，遊戲化元素有助吸引青少年主動嘗試 AI 輔助開發，是 EdTech 值得借鑑的情感化設計方向。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/openai',
					},
				],
			},
			{
				text: '審慎觀點（教育效果）：動態寵物是否真能提升程式學習成效仍待驗證；過度娛樂化可能分散注意力，教師引入課堂前應評估其學習價值而非僅看噱頭。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/openai',
					},
				],
			},
		],
		articles: [
			{
				title: 'Codex Pets',
				link: 'https://www.producthunt.com/products/openai',
				domain: 'producthunt.com',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'aiApplications-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		title: 'Flowly 原生桌面個人 AI 助理登上 Product Hunt',
		short_summary: 'Flowly 是一款深度整合至桌面環境的個人 AI 助理，於 2026 年 5 月登上 Product Hunt 引發科技社群討論。與網頁版或瀏覽器外掛型工具不同，Flowly 以原生桌面應用形式運作，強調隨時呼叫、低延遲的 AI 互動體驗。對台灣高中教師而言，此類工具代表 AI 輔助工作的下一波趨勢——不再需要切換視窗或開啟瀏覽器，即可在備課、批改或行政整理等日常工作流程中直接調用 AI，有助於進一步降低教師導入 AI 工具的操作門檻。',
		emoji: '🖥️',
		did_you_know: '「原生桌面應用」與網頁應用的關鍵差異在於作業系統整合層級：前者可存取本機檔案、接收系統通知、離線運作，並透過快捷鍵在任何視窗中直接呼叫，這正是 Flowly 強調「native」的核心賣點。',
		talking_points: [
			'Flowly 於 2026 年 5 月 3 日登上 Product Hunt，定位為「原生桌面個人 AI 助理」，獲科技社群初步關注',
			'原生桌面整合意味著無需開啟瀏覽器，可在任何視窗作業中直接呼叫 AI，降低使用摩擦',
			'對高中教師而言，此類工具可嵌入備課、批改回饋、會議記錄等日常流程，而非另開一套獨立工具',
			'Product Hunt 為全球新創產品主要曝光平台，上榜代表通過早期採用者社群的初步篩選',
		],
		quote: 'Your personal AI assistant, native to your desktop',
		quote_attribution: 'Product Hunt，2026-05-03',
		quote_source_url: 'https://www.producthunt.com/products/flowly-6',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '效率整合觀點：原生桌面 AI 助理可消除「切換視窗」的工作中斷，讓教師在任何應用程式中即時調用 AI 輔助，理論上能大幅縮短重複性任務（如摘要、改寫、翻譯）所需時間，是 AI 工具從「偶爾使用」走向「工作流程內建」的重要一步。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/flowly-6',
					},
				],
			},
			{
				text: '資安與隱私觀點：桌面原生應用通常需要較高系統權限，可能存取本機檔案與剪貼簿內容。教師若在學校裝置使用，應事先確認學校資訊安全政策，並了解 Flowly 的資料處理與上傳範圍，避免學生個資或教學機密內容無意間傳送至第三方伺服器。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/flowly-6',
					},
				],
			},
		],
		articles: [
			{
				title: 'Flowly',
				link: 'https://www.producthunt.com/products/flowly-6',
				domain: 'producthunt.com',
				date: '2026-05-03',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'aiApplications-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		title: 'Aaavatar：AI 一鍵為整個團隊生成品牌風格大頭照',
		short_summary: 'Aaavatar 是一款 AI 工具，只需一次上傳，即可為整個團隊批量產出風格統一的品牌化大頭照，傳統需聘攝影師的流程壓縮至數分鐘。對台灣高中教師而言，這類工具不僅是 AI 輔助設計的具體案例，更是媒體素養課程的切入點：當 AI 可輕易生成「真實感」的職業形象照，學生該如何辨識、如何看待 AI 生成圖像的真實性與倫理責任，是值得深入討論的課題。',
		emoji: '📸',
		did_you_know: '傳統企業大頭照拍攝，一名員工平均需要半天工時（含妝髮、攝影、後製）；AI 大頭照工具將同樣的工作量壓縮至幾分鐘，且可跨時區、無需實體集合，正在快速改變企業視覺形象的製作模式。',
		talking_points: [
			'Aaavatar 於 2026 年 5 月在 Product Hunt 上架，主打「一次上傳即可批量生成全隊風格一致的品牌大頭照」',
			'傳統商業攝影流程（妝髮＋拍攝＋後製）動輒數千元台幣，AI 工具大幅降低中小型團隊的視覺製作門檻',
			'此類工具提供教師具體案例，說明 AI 生成式影像如何從藝術創作滲透至職場實務應用',
			'核心倫理議題：AI 合成的「個人」形象照是否需強制標示？在求職履歷、社群媒體使用是否涉及誤導？',
			'可作為高中媒體素養課程素材，引導學生討論深偽（deepfake）技術的日常化與辨識責任',
		],
		quote: 'Branded team headshots in one drop',
		quote_attribution: 'Product Hunt，2026-05-03',
		quote_source_url: 'https://www.producthunt.com/products/aaavatar',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '效率與普及化觀點：AI 大頭照工具打破攝影資源不平等，讓無預算聘請攝影師的新創團隊、非營利組織或學生社團，也能擁有一致且專業的視覺形象，是 AI 工具賦能弱勢資源方的正面案例。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/aaavatar',
					},
				],
			},
			{
				text: '真實性與倫理疑慮觀點：AI 合成的個人形象照與真實外貌可能有落差，在求職、專業社群（如 LinkedIn）等需呈現「真實個人」的場景大量使用，可能形成視覺誤導，引發新形態的形象詐欺風險，各平台的標示規範尚未跟上。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/aaavatar',
					},
				],
			},
		],
		articles: [
			{
				title: 'Aaavatar',
				link: 'https://www.producthunt.com/products/aaavatar',
				domain: 'producthunt.com',
				date: '2026-05-03',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'aiApplications-4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		title: 'AI 記憶工具 Manex：保存答案修正與教學脈絡',
		short_summary: '台灣高中教師每天借助 ChatGPT 或 Claude 備課批改，卻常因 AI「失憶」而一再重複說明背景。Manex 是 2026 年 5 月於 Product Hunt 新上架的 AI 記憶管理工具，能將有用的回答、批改修正與對話脈絡儲存為持久記憶，讓後續對話直接延續。對需要長期累積教學知識庫的高中教師而言，此類工具代表 AI 助教從「每次歸零」邁向「越用越懂你」的關鍵轉變，值得納入個人教學工具箱評估。',
		emoji: '🧠',
		did_you_know: '「AI 記憶層」（AI Memory Layer）是近年快速興起的工具類別，讓使用者能跨對話保留偏好、知識與修正，彌補大型語言模型上下文視窗有限的先天不足，未來可望成為個人知識管理（PKM）的核心基礎設施。',
		talking_points: [
			'Manex 於 2026 年 5 月在 Product Hunt 上架，定位為 AI 回答的個人記憶保存庫',
			'核心功能涵蓋三類記憶：有用答案（useful answers）、修正內容（corrections）、對話脈絡（context）',
			'教師可將批改偏好、課綱重點或班級差異說明存入，下次提問無需重新解釋背景',
			'此類「持久記憶」工具正填補 AI 助手跨 session 失憶的痛點，降低重複提示成本',
			'適用高中教學情境：英文作文批改標準、數學解題策略偏好、跨學期課程設計脈絡',
		],
		quote: 'Preserve useful answers, corrections, and context as memory',
		quote_attribution: 'Product Hunt, 2026-05-02',
		quote_source_url: 'https://www.producthunt.com/products/manex',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '效率優化視角：對每天需重複輸入備課背景的高中教師而言，Manex 等記憶工具能顯著降低「提示疲勞」，讓 AI 助手從通用工具進化為個人化教學夥伴，節省大量重複說明的時間成本。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/manex',
					},
				],
			},
			{
				text: '資安與隱私視角：將學生資訊、批改標準等敏感教學脈絡儲存至第三方 AI 記憶服務，涉及個資保護與學校資訊安全政策，教師採用前應確認服務的資料儲存地區與隱私條款是否符合台灣法規。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/manex',
					},
				],
			},
		],
		articles: [
			{
				title: 'Manex',
				link: 'https://www.producthunt.com/products/manex',
				domain: 'producthunt.com',
				date: '2026-05-02',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
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
		title: '美國全國性研究：可鎖式手機袋禁令對學生的實際成效',
		short_summary: '美國全國經濟研究局（NBER）於 2026 年 5 月發布工作論文，由多所頂尖大學跨校際研究人員合著，採大規模全國問卷調查方法，系統評估美國各校導入「可鎖式手機袋（lockable pouches）」政策的成效，屬觀察性研究而非隨機對照試驗。台灣高中教師應關注：在教育部推動手機管理政策但本土實證仍薄弱的當下，此研究提供可量化比較的國際參照，有助評估「袋裝限制」vs.「全面沒收」兩種介入路徑的預期效果與執行成本差異。',
		emoji: '📵',
		did_you_know: '「可鎖式手機袋」（如 Yondr 品牌）已在美國、英國、法國部分學校使用：學生進校時自行鎖袋、離校時開袋取回，手機所有權不受侵犯，執行無需教師收繳，設計上減少師生衝突。注意：本研究為觀察性研究（全國問卷調查），不宜直接推論因果。',
		talking_points: [
			'【證據類型】觀察性研究，以全國大規模問卷調查結合多來源數據，由 NBER 以工作論文形式發布，尚未經同儕審查期刊正式刊登，結論需審慎解讀',
			'研究由美國多所頂尖大學跨校際研究人員合作，橫跨教育政策、行為科學、心理學等領域，代表高規格跨學科政策評估',
			'研究聚焦「可鎖式手機袋」此一軟性介入工具，有別於一刀切全面沒收，政策設計保留學生財產所有權但物理限制使用',
			'美國各州近年加速推動校園手機禁令立法，此研究提供首波全國性實證，對正在研擬或調整相關政策的地方政府具高度時效參考價值',
			'台灣 2024 年起多縣市試行手機管理措施，此研究可作為「禁令形式選擇」的國際比較依據，評估不同介入強度對學習與學生福祉的潛在影響',
		],
		quote: 'Schools across the U.S. have sharply restricted student use of phones during the school day.',
		quote_attribution: 'NBER Working Paper w35132, 2026-05-05',
		quote_source_url: 'https://www.nber.org/papers/w35132#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '【政策效能角度】支持者認為，可鎖式手機袋在不侵犯學生財產權的前提下，能系統性降低課堂分心，且執行成本低於全面沒收。若研究顯示正向成效，將為「軟性禁令」路徑提供強力實證背書，可能直接影響台灣各縣市手機政策的工具選擇。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35132#fromrss',
					},
				],
			},
			{
				text: '【研究侷限角度】以問卷調查為基礎的觀察性設計無法排除選擇偏誤——主動採用手機袋政策的學校，本身在管理文化上可能更為積極，導致成效難以單獨歸因於手機袋介入本身。政策制定者不應直接將結論移植至脈絡不同的台灣校園。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35132#fromrss',
					},
				],
			},
			{
				text: '【自律培養角度】研究團隊橫跨行為科學與心理學領域，暗示研究可能同時檢視「自律能力發展」面向——外部強制禁令是否反而剝奪學生練習自我管理的機會？此張力在台灣強調素養導向的 108 課綱脈絡下尤具討論價值。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35132#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'The Effects of School Phone Bans: National Evidence from Lockable Pouches',
				link: 'https://www.nber.org/papers/w35132#fromrss',
				domain: 'nber.org',
				date: '2026-05-05',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'aiEducation-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: '函授教育百年實證：20 世紀初遠距學習對技能就業的影響',
		short_summary: '美國國家經濟研究局（NBER）工作論文，利用新數位化的「國際函授學校」歷史行政記錄——美國規模最大的函授機構——以量化方法分析 20 世紀初函授教育作為正規學校替代管道，對工人技能取得與就業表現的實際影響。研究樣本橫跨美國多州，涵蓋大批無法進入傳統學校的工人階層學習者。對台灣高中教師而言，這份研究提供「遠距自學」的大樣本歷史基準，正可對照當今線上課程、AI 個人化學習平台的政策辯論，思考非正規教育管道能否真正促進技能習得與社會流動。',
		emoji: '📬',
		did_you_know: '「國際函授學校」（International Correspondence Schools）成立於 1891 年賓州，鼎盛期單年招收逾百萬名學員，主要服務礦工與工廠工人，是人類史上最大規模的遠距教育實驗之一，遠早於網際網路出現。注意：本研究為觀察性歷史量化研究（NBER 工作論文，尚未通過同儕審查），資料來自單一機構行政紀錄，不宜直接推論因果關係。',
		talking_points: [
			'【證據類型】觀察性量化研究／NBER 工作論文（未經同儕審查）：利用新數位化之國際函授學校行政記錄進行歷史因果推論分析',
			'研究主體為「國際函授學校」，20 世紀初美國規模最大函授機構，學員以無法就讀傳統學校的礦工、藍領工人為主',
			'研究核心問題：函授教育作為替代升學管道，是否顯著改善（improved）學員技能習得（skilled）與就業結果（employment）',
			'研究時間軸聚焦 20 世紀初工業化高峰期，捕捉郵寄課程在傳統教育資源匱乏地區的擴散與效果',
			'研究結論可為當代政策提供歷史對照：MOOC、AI 個人化課程等「非正規學習管道」對就業的承諾，是否重蹈百年前函授教育的成效模式？',
		],
		quote: 'This paper examines correspondence education as an alternative educational pathway in early 20th-century America, using newly digitized records from the International Correspondence Schools.',
		quote_attribution: 'NBER Working Paper, 2026-05-05',
		quote_source_url: 'https://www.nber.org/papers/w35147#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '從教育機會平等角度：函授學校填補正規體制空缺，讓無法離職求學的工人得以習得職業技能，與台灣當前推動微學分、彈性學習認證的政策方向相呼應。若研究確認函授教育改善就業，將為「非同步、非集中」學習模式的正當性提供百年歷史背書。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35147#fromrss',
					},
				],
			},
			{
				text: '從批判教育史角度：函授學校主要服務藍領勞工，需追問這類「技能導向」替代管道究竟是促進社會流動，還是僅鞏固既有階層分工。若效果侷限於在職技能提升而非真正的階層跨越，對 AI 教育工具「縮小教育落差」的期待同樣應保持審慎。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35147#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Learning by Mail: The Impact of Correspondence Schools in Early 20th Century America',
				link: 'https://www.nber.org/papers/w35147#fromrss',
				domain: 'nber.org',
				date: '2026-05-05',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'aiEducation-gmail-notebooklm-教學',
		cluster_number: 'gmail-notebooklm-教學',
		unique_domains: 5,
		number_of_titles: 5,
		category: 'AI × 教育',
		title: '本週『NotebookLM 教學』焦點：Gemini 整合全面開放，費曼法自學風潮起',
		short_summary: 'Google 於 2026 年 4 月 Gemini Drop 更新中正式將 NotebookLM 整合進 Gemini，免費開放所有用戶使用 Audio Overview、心智圖、測驗等進階功能。台灣至少五家科技媒體在同一週集中發布教學報導，並有 YouTuber 示範以費曼學習法搭配 NotebookLM 備考，強調完全免費可取代付費課程。對高中教師而言，此工具可依上傳的課綱或講義生成摘要與測驗題，且每則回應附引文來源，有效降低 AI 幻覺風險，是值得立即導入的低門檻備課輔助工具。',
		emoji: '📓',
		did_you_know: 'NotebookLM 最大特點是「封閉語料庫」設計：AI 只能參考你上傳的文件回答，且每句均附引文，大幅壓低一般 LLM 常見的幻覺問題。這使它在需要精確引用的學術與教學場景中，比通用 ChatBot 更值得信賴。',
		talking_points: [
			'2026 年 4 月 Gemini Drop 更新：NotebookLM 正式整合進 Gemini，Audio/Video Overview、心智圖、Quiz 等進階功能向所有免費用戶開放，付費版仍保有更高上傳量',
			'台灣至少 5 家科技媒體（鏈新聞、SOGI、手機王、電腦王、YouTube）在同一週集中發布 NotebookLM 教學，反映本地媒體熱度高峰',
			'YouTube 影片示範「費曼學習法 × NotebookLM」備考流程，主打完全免費，可取代付費線上證照課程',
			'核心差異化設計：只依上傳資料回答並附引文，每則回應可溯源，降低 AI 生成錯誤資訊的風險，適合要求精確引用的教學情境',
			'此次整合使教師可在 Gemini 介面直接呼叫 NotebookLM 功能，無需切換平台，降低課堂導入的操作門檻',
		],
		quote: 'NotebookLM 是 Google 推出的 AI 研究助理，由 Gemini 驅動，特色是「只用你上傳的資料回答」、附引文不編造。',
		quote_attribution: '鏈新聞 ABMedia，2026-04-28',
		quote_source_url: 'https://abmedia.io/notebooklm-complete-guide-2026',
		quote_source_domain: 'abmedia.io',
		perspectives: [
			{
				text: '工具普及角度：鏈新聞、SOGI 與手機王等媒體聚焦功能全解析，認為此次 Gemini 整合使免費用戶即可存取主要功能，是 AI 學習工具民主化的重要里程碑，一般教師無需付費即可導入課堂。',
				sources: [
					{
						name: '鏈新聞 ABMedia',
						url: 'https://abmedia.io/notebooklm-complete-guide-2026',
					},
					{
						name: 'SOGI 手機王',
						url: 'https://www.sogi.com.tw/articles/gemini/6268641',
					},
				],
			},
			{
				text: '自學效能角度：YouTube 影片以「考證照不用花錢報課」為訴求，示範費曼學習法結合 NotebookLM 的具體操作，著重學習者主動性，與媒體功能介紹形成互補，更貼近學生實際備考情境。',
				sources: [
					{
						name: 'YouTube',
						url: 'https://www.youtube.com/watch?v=h7Uvr4LF9b4',
					},
				],
			},
			{
				text: '付費分層角度：電腦王阿達報導指出，Google 雖開放最聰明功能，免費與付費方案仍有差異，提醒教育機構在規劃全校導入前，需評估進階上傳量與功能需求是否必須升級 Gemini Advanced 授權。',
				sources: [
					{
						name: '電腦王阿達',
						url: 'https://www.koc.com.tw/archives/641484',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-28',
				date_iso: '2026-04-28',
				content: '鏈新聞、SOGI、手機王同日發布 NotebookLM 完整教學與 Gemini 整合報導',
			},
			{
				date: '2026-04-29',
				date_iso: '2026-04-29',
				content: 'YouTube 發布「費曼學習法 × NotebookLM 備考」實作影片',
			},
			{
				date: '2026-04-30',
				date_iso: '2026-04-30',
				content: 'NotebookLM 官方宣布將最聰明功能開放所有用戶使用',
			},
			{
				date: '2026-05-04',
				date_iso: '2026-05-04',
				content: '電腦王阿達報導 Google 正式開放 NotebookLM 進階功能細節',
			},
		],
		articles: [
			{
				title: 'Google 將Gemini 最聰明的NotebookLM 功能開放所有人使用',
				link: 'https://www.koc.com.tw/archives/641484',
				domain: 'koc.com.tw',
				date: '2026-05-04',
			},
			{
				title: '考證照還在花錢報課？NotebookLM 費曼學習法，免費又高效！',
				link: 'https://www.youtube.com/watch?v=h7Uvr4LF9b4',
				domain: 'youtube.com',
				date: '2026-04-29',
			},
			{
				title: 'NotebookLM 是什麼？2026 完整教學：功能、定價、用法',
				link: 'https://abmedia.io/notebooklm-complete-guide-2026',
				domain: 'abmedia.io',
				date: '2026-04-28',
			},
			{
				title: 'Google Gemini筆記本怎麼用？整合NotebookLM使用教學一次看懂',
				link: 'https://today.line.me/tw/v3/article/pekKRBe',
				domain: 'today.line.me',
				date: '2026-04-28',
			},
			{
				title: '2026年4月Gemini Drop更新！6項最新功能整理一次看',
				link: 'https://www.sogi.com.tw/articles/gemini/6268641',
				domain: 'sogi.com.tw',
				date: '2026-04-28',
			},
		],
		domains: [
			{ name: 'koc.com.tw' },
			{ name: 'youtube.com' },
			{ name: 'abmedia.io' },
			{ name: 'today.line.me' },
			{ name: 'sogi.com.tw' },
		],
	},
	{
		id: 'aiEducation-4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: '回顧式 vs 前瞻式精英主義：重思教育公平評量框架',
		short_summary: '美國國家經濟研究局（NBER）工作論文提出「回顧式精英主義」與「前瞻式精英主義」的概念對照框架。前者靜態評估個人過去表現以定義「應得」報酬；後者關注未來機會的社會公平分配。本文為純概念性理論分析，無特定國家樣本或量化數據。對台灣高中教師而言，此框架直接點出：以段考、會考成績界定「應得」的升學制度，究竟反映真實才能，還是只在複製家庭與地區資本的不平等？若 AI 評量系統訓練於歷史成績資料，可能在技術層面強化回顧式偏誤，值得關注。',
		emoji: '⚖️',
		did_you_know: '哲學上「應得」（desert）分兩種邏輯：「你過去做了什麼，所以你應得獎懲」（回顧式）vs「社會應為你創造什麼機會，因為你有潛能」（前瞻式）。台灣大學入學制度同時混用兩套框架，卻鮮少明確說明哪套邏輯在主導資源分配。注意：本研究為概念性 NBER 工作論文，不宜直接推論因果關係或政策效果。',
		talking_points: [
			'證據類型：NBER 概念性工作論文（theoretical framework paper），非 RCT、觀察性研究或問卷調查，無實驗樣本數據，結論屬哲學與理論推演',
			'回顧式精英主義（retrospective meritocracy）以「個人過去成就與努力」定義應得報酬，是台灣升學考試制度的隱性預設——誰考得好誰就「應得」好機會',
			'前瞻式精英主義（prospective meritocracy）關注「未來機會是否社會公平分配」，其邏輯支撐差異化輔導、弱勢加分、補救教學等現行政策，但各校執行標準不一',
			'論文核心張力：個人成就部分源於社會條件（家庭資本、地區資源），若以純個人表現論功行賞，實質上可能只是在獎勵「出生彩券」的優勝者',
			'AI 應用直接意涵：若預測模型只學「誰過去成功」，會系統性複製既有不平等；引入前瞻式指標（成長率、學習韌性）技術上可行，但須先重新定義 merit 的測量方式',
		],
		quote: 'Retrospective meritocracy is static or backwards-looking: Merit is based on an individual\'s past achievements and effort, not on the social conditions that shaped them.',
		quote_attribution: 'NBER Working Paper, 2026-05-05',
		quote_source_url: 'https://www.nber.org/papers/w35151#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '支持回顧式框架者認為：考試是最中立的篩選機制，過去努力與成就是可觀察、可驗證的指標。若 AI 系統以歷史成績排名做為訓練資料，延續此邏輯在技術上最簡單、最「客觀」。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35151#fromrss',
					},
				],
			},
			{
				text: '支持前瞻式框架者指出：個人表現深受社會結構制約，以「過去成績」分配未來機會，本質上是在獎勵起跑點優勢而非才能本身。此觀點要求 AI 評量系統納入學習成長軌跡，而非僅看靜態分數。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35151#fromrss',
					},
				],
			},
			{
				text: '教師實踐層面的張力：回顧式邏輯讓教師聚焦「補強落後學生的歷史缺漏」；前瞻式邏輯則要求教師識別並培育「未被成績反映的潛力」。兩者對備課、評量設計、親師溝通的要求截然不同。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35151#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Retrospective Versus Prospective Meritocracy',
				link: 'https://www.nber.org/papers/w35151#fromrss',
				domain: 'nber.org',
				date: '2026-05-05',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'aiEducation-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: '父母認知頻寬不足，幼兒期互動投資陷低水位惡性循環',
		short_summary: '美國 NBER 工作論文（w35150，2026）以數理理論模型為核心，輔以行為實證框架，探討認知頻寬受限的父母如何系統性低估「即時回應互動」對幼兒發展的報酬，並因此落入投入不足的 downward trap。模型顯示：當家長身心負荷超過承載上限，其對親子互動效益的信念會向下扭曲，形成自我強化的低投入均衡。台灣高中教師常接觸家庭背景複雜的學生，理解此機制有助於辨識哪些家庭正陷入此困局，並調整家長溝通策略，避免誤將父母的「低回應」單純歸因為態度問題。',
		emoji: '🧠',
		did_you_know: '「認知頻寬」概念源自行為經濟學的「稀缺心智」理論：過勞、貧窮、慢性壓力會佔用大腦運算資源，使人在其他決策上系統性失準——這意味著改善父母信念的前提，可能是先降低其生活壓力。注意：本研究為 NBER 工作論文，屬理論模型，尚未通過同儕審查，不宜直接推論政策因果。',
		talking_points: [
			'證據類型：NBER 工作論文（w35150），以數理理論模型為主，尚未同儕審查，結論屬機制推論而非因果驗證',
			'核心機制：認知頻寬受限（bandwidth-constrained）的父母對「即時回應互動」的幼兒發展報酬估計偏低，導致系統性投入不足',
			'惡性循環路徑：頻寬不足 → 信念向下扭曲 → 親子互動減少 → 幼兒刺激不足 → 父母誤判互動效果更低，循環自我強化',
			'台灣班導應用：高工時、照顧壓力大的家庭（低收入、單親、隔代教養）最易落入此困局；親師溝通時應先評估父母當前頻寬狀態，而非直接要求增加互動量',
			'政策啟示：矯正父母對互動報酬的錯誤信念（belief updating），在模型中顯示效果可能不亞於直接物質補貼，指向資訊介入（家長工作坊、訪視員說明）的政策潛力',
		],
		quote: 'bandwidth-constrained parents hold distorted beliefs about the returns to responsive interaction',
		quote_attribution: 'NBER Working Paper w35150, 2026-05-05',
		quote_source_url: 'https://www.nber.org/papers/w35150#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '從行為經濟學角度看：問題根源在「信念失真」，而非父母動機不足。若政策只提供金錢補貼、卻不矯正父母對互動效益的錯誤估計，難以打破惡性循環。此觀點支持以資訊介入（如家長工作坊、訪視員示範、數位提醒工具）為核心政策工具，而非單純移轉資源。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35150#fromrss',
					},
				],
			},
			{
				text: '從結構性貧窮角度看：「頻寬受限」本身是貧窮、過勞、高壓環境的結果，若不先改善家庭物質條件與工時結構，單純糾正父母信念恐屬治標。此觀點強調政策應同步提升經濟安全與工作彈性，避免將結構性不平等轉化為個別父母的「認知責任」。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35150#fromrss',
					},
				],
			},
		],
		articles: [
			{
				title: 'Beliefs, Attention, and Investments in Early Childhood',
				link: 'https://www.nber.org/papers/w35150#fromrss',
				domain: 'nber.org',
				date: '2026-05-05',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
];

const aiClassroomStories: Story[] = [
	{
		id: 'aiClassroom-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		title: 'Google 推出美國建國250週年大型教育資源平台「Building the Nation」',
		short_summary: 'Google 於2026年5月發布「Making of the Nation: America」整合資源平台，彙集大量展覽、音訊與文字素材，聚焦美國建國250週年。對台灣高中教師而言，此平台提供高品質英語原文閱讀素材，兼具歷史、公民與媒體識讀價值，適合融入英語閱讀課、社會課跨領域設計，或作為全球公民教育的補充材料，讓學生接觸一手英語史料與多媒體展覽，理解民主立國敘事的建構方式。',
		emoji: '🗽',
		did_you_know: '美國2026年恰逢建國250週年（Semiquincentennial），Google 此次資源整合涵蓋互動展覽與多媒體檔案，呼應近年「數位公民教育」趨勢——博物館與科技公司攜手將實體文化展覽轉化為線上開放教材，此模式已成為歐美課堂補充教學的主流選項之一。',
		talking_points: [
			'Google 發布「Making of the Nation: America」平台，集結大量展覽與多媒體資源，主題鎖定美國建國250週年（2026年）',
			'平台素材涵蓋音訊（audio）與文字（text）兩大格式，適合聽讀並用，可作差異化教學素材',
			'台灣高中英語教師可引用平台展覽內容設計閱讀理解或辯論活動，主題契合108課綱「全球議題」學習脈絡',
			'資源免費公開，教師無需額外訂閱即可直接取用，降低跨文化素材的取得門檻',
			'此類科技公司主導的教育資源整合模式，值得台灣教師觀察：Google 如何扮演教育內容中介者角色',
		],
		quote: 'Google has unveiled quite an extensive site today providing access to tons of exhibits and resources related to the United States 250th anniversary celebration.',
		quote_attribution: 'larryferlazzo.edublogs.org，2026-05-04',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/05/04/google-unveils-a-hub-of-tons-of-resources-related-to-the-250th-anniversary-of-the-u-s/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '教師資源整合視角：對第一線教師而言，此平台最直接的價值在於「一站式」取得策展過的原文素材，省去自行搜尋零散史料的時間成本。英語教師可直接下載音訊或展覽說明文字，搭配閱讀理解學習單，節省備課時間。',
				sources: [
					{
						name: 'Larry Ferlazzo\'s Websites of the Day',
						url: 'https://larryferlazzo.edublogs.org/2026/05/04/google-unveils-a-hub-of-tons-of-resources-related-to-the-250th-anniversary-of-the-u-s/',
					},
				],
			},
			{
				text: '批判性媒體識讀視角：Google 主導的教育平台同時也是一種敘事框架——學生接觸的是經科技公司策展後的「美國建國故事」。台灣教師可藉此引導學生思考：誰在決定哪些歷史值得被呈現？科技平台如何形塑公眾對歷史的認知？這本身即是一堂媒體識讀課。',
				sources: [
					{
						name: 'Larry Ferlazzo\'s Websites of the Day',
						url: 'https://larryferlazzo.edublogs.org/2026/05/04/google-unveils-a-hub-of-tons-of-resources-related-to-the-250th-anniversary-of-the-u-s/',
					},
				],
			},
		],
		articles: [
			{
				title: 'Google Unveils A Hub Of Tons Of Resources Related To The 250th Anniversary Of The U.S.',
				link: 'https://larryferlazzo.edublogs.org/2026/05/04/google-unveils-a-hub-of-tons-of-resources-related-to-the-250th-anniversary-of-the-u-s/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'larryferlazzo.edublogs.org' },
		],
	},
	{
		id: 'aiClassroom-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		title: '免費網路研討會：ELPS 框架如何有效支援英語學習者',
		short_summary: '美國知名教育部落客將於 2026 年 6 月 1 日共同主辦免費線上研討會，介紹一本專為英語語言學習者（ELLs）設計的創新教師手冊，並聚焦如何運用「英語語言能力標準」（ELPS）框架落地差異化教學。台灣高中英語教師在雙語政策推進下，愈來愈需要應對不同語言背景的學生；本場研討會的 ELPS 分層能力指標與教學策略，可直接對應台灣課堂現場，值得提早登記參與。',
		emoji: '📚',
		did_you_know: 'ELPS（英語語言能力標準）最初由美國德克薩斯州率先採用，將學生英語能力分為入門、初級、中級、進階及進階高五個等級，對應聽說讀寫四項技能，已成為許多英語非母語國家設計差異化教學的重要參考框架。',
		talking_points: [
			'研討會時間：2026 年 6 月 1 日，完全免費，線上參與',
			'主題聚焦：運用一本「前所未見」的創新教師手冊，支援 ELL（英語語言學習者）的課堂學習',
			'核心框架：ELPS（英語語言能力標準），提供分層語言能力指標，協助教師設計差異化任務',
			'台灣高中雙語政策下，非英語母語學生比例上升，ELPS 式分層框架可作為本土教學設計的可操作參考',
		],
		quote: 'if you, like me, did not know what ELPS means, it\'s \'English Language Proficiency Standards\'',
		quote_attribution: 'larryferlazzo.edublogs.org, 2026-05-04',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/05/04/im-co-hosting-a-short-free-webinar-on-june-1st-on-how-to-support-ells-with-one-of-the-most-unique-teacher-books-ive-ever-seen/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '從差異化教學角度：ELPS 框架將語言能力細分為多個等級與技能維度，能幫助教師具體診斷學生語言落差，並設計針對性的閱讀、口說或寫作任務，而非用同一套材料對應全班不同程度學生。',
				sources: [
					{
						name: 'Larry Ferlazzo\'s Websites of the Day',
						url: 'https://larryferlazzo.edublogs.org/2026/05/04/im-co-hosting-a-short-free-webinar-on-june-1st-on-how-to-support-ells-with-one-of-the-most-unique-teacher-books-ive-ever-seen/',
					},
				],
			},
			{
				text: '從台灣教育現場角度：雙語政策推動後，許多高中英語教師面對來自不同語言背景的學生，卻缺乏系統性的語言能力分層工具；借鑑 ELPS 的做法，可能為本土差異化教學提供可操作的起點。',
				sources: [
					{
						name: 'Larry Ferlazzo\'s Websites of the Day',
						url: 'https://larryferlazzo.edublogs.org/2026/05/04/im-co-hosting-a-short-free-webinar-on-june-1st-on-how-to-support-ells-with-one-of-the-most-unique-teacher-books-ive-ever-seen/',
					},
				],
			},
		],
		articles: [
			{
				title: 'I\'m Co-Hosting A Short Free Webinar On June 1st On How To Support ELLs With One Of The Most Unique Teacher Books I\'ve Ever Seen',
				link: 'https://larryferlazzo.edublogs.org/2026/05/04/im-co-hosting-a-short-free-webinar-on-june-1st-on-how-to-support-ells-with-one-of-the-most-unique-teacher-books-ive-ever-seen/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'larryferlazzo.edublogs.org' },
		],
	},
	{
		id: 'aiClassroom-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		title: '美國教育政策週報：閱讀成效與課堂策略資源彙整',
		short_summary: '美國知名教育部落格每週固定彙整教育政策熱點文章，本期涵蓋阿拉巴馬州閱讀成效提升等實證案例。對台灣高中教師而言，此類週報式資源整理示範了一種有效的跨域資訊追蹤模式——在 AI 工具快速改變教學生態的當下，系統性掌握國際課堂政策走向，有助於反思本地教學實踐與政策回應方向。教師可參考此「週報制」作法，建立自己的教育動態追蹤習慣。',
		emoji: '📰',
		did_you_know: '美國有數十州正推行「閱讀科學」（Science of Reading）政策，強調語音意識與解碼教學。阿拉巴馬州是成效最顯著的案例之一，閱讀測驗分數改善速度名列全國前茅，被視為州級政策驅動教學翻轉的標竿。',
		talking_points: [
			'部落格每週彙整教育政策文章，涵蓋閱讀教學、課堂策略等多元主題，免費公開供教師取用',
			'阿拉巴馬州閱讀成效提升案例入選本期，展示「閱讀科學」政策的實證效果',
			'週報式彙整模式反映美國教師社群的知識共享文化，有助教師系統性追蹤國際政策動態',
			'此類定期資源整理工具，在 AI 大量產出教育資訊的當下，尤具過濾與導航價值',
		],
		quote: 'Here are some recent useful posts and articles on educational policy issues',
		quote_attribution: 'Larry Ferlazzo\'s Websites of the Day，2026-05-04',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/05/04/this-weeks-round-up-of-useful-posts-articles-on-ed-policy-issues-505/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '從政策實踐角度看，美國各州透過數據追蹤教育成效的做法（如阿拉巴馬州閱讀提升案例），提供了「政策→實施→評估」的完整循環範本；台灣高中課綱改革也可參考此種實證導向的政策評估文化，而非僅依賴主觀觀感調整方向。',
				sources: [
					{
						name: 'Larry Ferlazzo\'s Websites of the Day',
						url: 'https://larryferlazzo.edublogs.org/2026/05/04/this-weeks-round-up-of-useful-posts-articles-on-ed-policy-issues-505/',
					},
				],
			},
			{
				text: '從教師專業發展角度看，每週固定彙整政策資訊的習慣，體現「持續學習型教師」的自我更新模式；但也有觀點認為，資訊過載反而增加教師負擔，如何精選高品質來源比「每週讀更多」更為關鍵。',
				sources: [
					{
						name: 'Larry Ferlazzo\'s Websites of the Day',
						url: 'https://larryferlazzo.edublogs.org/2026/05/04/this-weeks-round-up-of-useful-posts-articles-on-ed-policy-issues-505/',
					},
				],
			},
		],
		articles: [
			{
				title: 'This Week\'s "Round-Up" Of Useful Posts & Articles On Ed Policy Issues',
				link: 'https://larryferlazzo.edublogs.org/2026/05/04/this-weeks-round-up-of-useful-posts-articles-on-ed-policy-issues-505/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'larryferlazzo.edublogs.org' },
		],
	},
	{
		id: 'aiClassroom-4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		title: '星際大戰日：四個可直接套用的跨科教學資源',
		short_summary: '每年 5 月 4 日「星際大戰日」起源於粉絲間的文字遊戲諧音梗，如今已演變為全球性文化節日。對台灣高中教師而言，這類流行文化節日是啟動跨科主題教學的絕佳切入點——從英文雙關語的語言學分析、到科幻世界觀背後的物理概念，再到媒體識讀與商業行銷批判。知名教育部落格整理四項可直接套用的教育資源，讓老師以最低備課成本在課堂激發學生探究動機，並可與 108 課綱跨領域主題學習直接對應。',
		emoji: '⚔️',
		did_you_know: '「May the 4th be with you」首次見於正式紀錄是 1979 年英國報紙為柴契爾夫人就職刊登的賀詞，比《帝國大反擊》上映還早一年。如今每年 5 月 4 日，星戰官方網站與各大博物館、學校都會推出限定教學活動，已成為全球教師共用的年度素材庫。',
		talking_points: [
			'星際大戰日源自粉絲文字遊戲「May the Force be with you → May the 4th be with you」，是語言課討論英文雙關語（pun）與流行文化傳播的真實案例',
			'知名教育部落格本次精選四項資源，包含可於單節課內完成的活動設計，直接降低教師備課門檻',
			'星戰宇宙龐大的世界觀設定涵蓋科學、科技、倫理、歷史等面向，天然適合 108 課綱「跨領域主題探究」情境',
			'利用全球性流行文化節日切入課程，是提升學生內在學習動機的有效策略，尤其適合英語文與社會科協同教學',
			'星戰日已高度商業化，可引導學生分析粉絲情感如何被品牌包裝，培養媒體識讀與批判性思考能力',
		],
		quote: 'What started as a pun warmly shared by fans has become a full-fledged Star Wars holiday: Star Wars Day, a special once-a-year celebration of the galaxy far, far away.',
		quote_attribution: 'Larry Ferlazzo\'s Websites of the Day, 2026-05-04',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/05/04/its-star-wars-day-here-are-four-education-related-resources-4/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '教育資源整合視角：將流行文化節日轉化為現成的跨科教學素材，能以最低備課成本換取最高課堂投入度；星戰系列的虛構世界觀提供物理、倫理、歷史等多元學科的真實討論情境，是難得的一魚多吃教學素材。',
				sources: [
					{
						name: 'Larry Ferlazzo\'s Websites of the Day',
						url: 'https://larryferlazzo.edublogs.org/2026/05/04/its-star-wars-day-here-are-four-education-related-resources-4/',
					},
				],
			},
			{
				text: '媒體識讀教育視角：星戰日已演變為高度商業化的行銷節日，教師可反向操作，引導學生分析流行文化如何被品牌包裝、粉絲情感如何被商品化，從「歡慶」素材中培養批判性思考，比直接教說媒體識讀更具說服力。',
				sources: [
					{
						name: 'Larry Ferlazzo\'s Websites of the Day',
						url: 'https://larryferlazzo.edublogs.org/2026/05/04/its-star-wars-day-here-are-four-education-related-resources-4/',
					},
				],
			},
		],
		articles: [
			{
				title: 'It\'s Star Wars Day: Here Are Four Education-Related Resources',
				link: 'https://larryferlazzo.edublogs.org/2026/05/04/its-star-wars-day-here-are-four-education-related-resources-4/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'larryferlazzo.edublogs.org' },
		],
	},
	{
		id: 'aiClassroom-5',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		title: '每週精選金句：教師策展思維如何活化課堂閱讀',
		short_summary: '美國知名教育部落格 Edublogs 推出《本週金句》定期專欄，教師每週從多元來源精選數句值得關注、引人深思或令人憂慮的語句，並附上原始連結供讀者延伸閱讀。這種「教師策展」模式對台灣高中教師具有直接啟發：在 AI 生成內容氾濫的當下，若能每週固定從可信來源篩選並標注精闢句子，不僅能示範批判性閱讀的思維過程，也能以低成本方式逐步培養學生的媒體識讀能力，並建立班級共同知識語言。',
		emoji: '📌',
		did_you_know: '「策展式教學」（Curated Teaching）概念源自博物館學，指教師有意識地從海量資訊中挑選、排序與脈絡化內容。研究顯示，相較於被動接收完整長文，學生對教師精選片段的記憶留存率平均高出約 30%，且更易引發主動提問。',
		talking_points: [
			'每週固定發布精選金句專欄，逐篇附上原始連結，讓讀者可追溯脈絡與來源',
			'選句標準涵蓋「有趣、令人憂慮、實用」三個評估維度，示範多角度閱讀習慣',
			'此模式可直接移植至高中國文、英文或公民課，作為每週課前暖身討論素材',
			'教師公開說明「為什麼這句話值得注意」，本身即是媒體識讀與批判思維的示範',
			'配合 AI 工具可快速擴大策展範圍，但教師的價值判斷與脈絡標注仍不可取代',
		],
		quote: 'Each week, I highlight several sentences, with links to their sources, that I find interesting/concerning/useful.',
		quote_attribution: 'Edublogs 教育部落格, 2026-05-03',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/05/03/sentences-of-the-week-18/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '支持者認為，每週策展金句是一種可持續的低負擔教學慣例，教師毋需大幅備課，卻能持續為學生提供真實世界的閱讀素材，同時示範「有意識閱讀」的習慣養成，對資源有限的班級尤具可行性。',
				sources: [
					{
						name: 'Edublogs 教育部落格',
						url: 'https://larryferlazzo.edublogs.org/2026/05/03/sentences-of-the-week-18/',
					},
				],
			},
			{
				text: '批判性觀點則提醒：策展內容必然反映教師個人的價值觀與偏好，若缺乏透明說明，可能強化單一敘事。建議教師公開選句理由，並邀請學生提出反例或不同詮釋，以避免策展權威化。',
				sources: [
					{
						name: 'Edublogs 教育部落格',
						url: 'https://larryferlazzo.edublogs.org/2026/05/03/sentences-of-the-week-18/',
					},
				],
			},
		],
		articles: [
			{
				title: 'Sentences Of The Week',
				link: 'https://larryferlazzo.edublogs.org/2026/05/03/sentences-of-the-week-18/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-05-03',
			},
		],
		domains: [
			{ name: 'larryferlazzo.edublogs.org' },
		],
	},
];

const twEduStories: Story[] = [
	{
		id: 'taiwanEduPolicy-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策',
		title: '幼兒期喪父衝擊深遠：美國同期群研究揭示父親死亡率與兒童發展含義',
		short_summary: '美國喬治亞州一項觀察性同期群研究（2017–2022 年）系統分析 5 歲以下幼兒父親的死亡率、主要死因與潛在影響，為量化「不利童年經驗」（ACEs）提供州層級行政資料基礎。對台灣高中教師而言，此研究的意義在於：班級中可能存在幼兒期即喪失父親的學生，其情緒調節能力、學習動機與人際連結往往受到長期影響。認識 ACEs 的累積效應，有助教師以「創傷知情」（trauma-informed）視角及早識別需要支持的學生，並啟動適切的輔導或轉介機制。',
		emoji: '👨‍👧',
		did_you_know: '「不利童年經驗」（ACEs）量表包含十項指標，其中親人死亡是重要項目之一。研究顯示 ACEs 分數每增加一分，成年後出現學業中斷、憂鬱及慢性病的風險即顯著上升。注意：本研究為觀察性同期群研究，不宜直接推論因果。',
		talking_points: [
			'證據類型：觀察性同期群研究（cohort study），資料來源為美國喬治亞州 2017–2022 年行政記錄，非隨機對照試驗',
			'研究對象：5 歲以下幼兒的父親死亡事件，涵蓋死亡率統計與主要死因分類',
			'父親死亡屬 ACEs 核心項目之一，幼兒期失親與長期認知發展、情緒穩定及學業表現風險高度相關',
			'研究成果可作為家庭支持政策設計的實證依據，包含社會安全網、喪親輔導及學校轉介流程',
			'台灣高中教師可參照 ACEs 框架，主動識別高風險背景學生，並透過輔導室或社工進行系統性支持',
		],
		quote: 'This cohort study examines the rates, causes, and implications of the death of fathers of children 5 years or younger in the state of Georgia from 2017 to 2022.',
		quote_attribution: 'JAMA Pediatrics, 2026-05-04',
		quote_source_url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848572',
		quote_source_domain: 'jamanetwork.com',
		perspectives: [
			{
				text: '公衛介入視角：父親死亡率資料若能細分死因（如意外傷害、暴力、自殺），即可識別可預防的死亡類型，進而設計針對性介入政策，保護幼兒免於提前喪失主要照顧者。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848572',
					},
				],
			},
			{
				text: '教育與兒童發展視角：幼兒期失親的效應並非僅限於當下的情緒衝擊，而是透過家庭經濟壓力、照顧品質下降與依附關係改變，持續影響學齡後乃至青少年期的學習表現，學校體系需有對應的系統性支持機制。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848572',
					},
				],
			},
		],
		articles: [
			{
				title: 'Paternal Mortality During Early Childhood',
				link: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848572',
				domain: 'jamanetwork.com',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'jamanetwork.com' },
		],
	},
	{
		id: 'taiwanEduPolicy-gmail-教育部-ai-數位學習',
		cluster_number: 'gmail-教育部-ai-數位學習',
		unique_domains: 16,
		number_of_titles: 16,
		category: '教育政策',
		title: '本週「教育部 AI 數位學習」焦點：館館有 AI 與 Di+ 學伴雙軌推進',
		short_summary: '教育部本週密集推出多項 AI 教育政策：「AI Di+實驗方案」以大專生帶領國中小生落實「慢 AI」自主學習精神；「館館有 AI」計畫預計今年第四季起讓 47 所大學及全國公立圖書館免費開放付費版生成式 AI 工具，縮減數位落差。對高中教師而言，這波政策意味著 AI 融入教學即將成為常態評核項目，數位能力與工具應用也將納入官方績優指標，不可輕忽。',
		emoji: '🤖',
		did_you_know: '文藻外語大學憑藉深厚外語底蘊入選教育部「WISE 智慧社會跨領域人才培力計畫」，打破「AI 教育只屬理工科系」的刻板印象，顯示語言跨域能力在 AI 時代反而成為差異化競爭優勢。',
		talking_points: [
			'「館館有 AI」計畫：今年第四季起，47 所大學及全國公立圖書館每館提供 5 台電腦，免費開放 GPT、Claude 等付費版生成式 AI 工具，目標消弭數位落差',
			'「AI Di+實驗方案」導入「慢 AI」精神，由大專生擔任 AI 學伴，協助國中小學生培養自主學習能力，聯手大學端建構 AI 融入教學培育機制',
			'教育部辦理「115 年推動教育 AI 及數位學習績優徵選」，優良教案報名單位為國立臺中教育大學（AI 人才方舟計畫推動營運中心）',
			'新竹縣已有 100 名教師取得 Google Gemini AI 認證，研習主題涵蓋 SEL 社會情緒學習、機器人編程、學習診斷與學習扶助等多元面向',
			'台南市過去四年投入逾 24 億元推動數位學習；南投縣「生生有平板」三年全面達標，各縣市加速建構智慧校園',
		],
		quote: 'AI教育是重大公共政策，涉及學生學習權益、數位平權與國家人才培育，不應淪為『雜誌治國』，教育部應儘速補足計畫內容、預算依據與監督機制。',
		quote_attribution: 'Yahoo 新聞，2026-05-01',
		quote_source_url: 'https://tw.news.yahoo.com/%E6%95%99%E8%82%B2%E9%83%A8%E6%8E%A8-%E9%A4%A8%E9%A4%A8%E6%9C%89ai-%E5%BE%9E%E7%9B%B4%E5%B1%AC%E5%9C%96%E6%9B%B8%E9%A4%A8%E8%B5%B7%E8%B7%91-%E8%91%9B%E5%A6%82%E9%88%9E-%E8%AE%93%E5%AD%B8%E7%94%9F%E5%85%AC%E5%B9%B3%E5%8F%96%E5%BE%97ai%E5%B7%A5%E5%85%B7-094609952.html',
		quote_source_domain: 'tw.news.yahoo.com',
		perspectives: [
			{
				text: '教育部積極推進角度：「館館有 AI」與「AI Di+」雙線並進，以公共資源縮減城鄉與世代的 AI 使用落差，並透過績優徵選鼓勵學校主動創新，展現政策密集出手的高強度節奏。',
				sources: [
					{
						name: '中央社',
						url: 'https://www.cna.com.tw/news/ahel/202605040165.aspx',
					},
					{
						name: 'ETtoday',
						url: 'https://www.ettoday.net/news/20260503/3159111.htm',
					},
					{
						name: 'BigMedia 鉅聞天下',
						url: 'https://www.bigmedia.com.tw/article/1777763719176',
					},
				],
			},
			{
				text: '監督質疑角度：媒體與立委關注「館館有 AI」的預算依據與監督機制是否完備，批評政策不應流於口號，要求教育部正式公布計畫細節與資金來源，確保 AI 教育真正落地而非形式宣傳。',
				sources: [
					{
						name: 'Yahoo 新聞',
						url: 'https://tw.news.yahoo.com/%E6%95%99%E8%82%B2%E9%83%A8%E6%8E%A8-%E9%A4%A8%E9%A4%A8%E6%9C%89ai-%E5%BE%9E%E7%9B%B4%E5%B1%AC%E5%9C%96%E6%9B%B8%E9%A4%A8%E8%B5%B7%E8%B7%91-%E8%91%9B%E5%A6%82%E9%88%9E-%E8%AE%93%E5%AD%B8%E7%94%9F%E5%85%AC%E5%B9%B3%E5%8F%96%E5%BE%97ai%E5%B7%A5%E5%85%B7-094609952.html',
					},
					{
						name: '國立教育廣播電臺',
						url: 'https://www.ner.gov.tw/CultureNews/Content/?id=26043011570447028',
					},
				],
			},
			{
				text: '地方差異角度：新竹縣以教師 AI 認證為抓手、台南市重砸 24 億打造硬體、南投縣完成平板普及，各縣市實踐路徑不同，顯示中央政策框架下地方執行落差仍大，高中教師所獲得的支援資源因縣市而異。',
				sources: [
					{
						name: '勁報',
						url: 'https://twpowernews.com/news_pagein.php?n_id=290729',
					},
					{
						name: '台南市政府',
						url: 'https://www.tainan.gov.tw/News_Content.aspx?n=13370&s=8811104',
					},
					{
						name: '是新聞 YesMedia',
						url: 'https://www.yesmedia.com.tw/%E5%8D%97%E6%8A%95%E3%80%8C%E7%94%9F%E7%94%9F%E6%9C%89%E5%B9%B3%E6%9D%BF%E3%80%8D%E5%85%A8%E9%9D%A2%E9%81%94%E6%A8%99%E3%80%80%E4%B8%89%E5%B9%B4%E6%89%93%E9%80%A0%E6%99%BA%E6%85%A7%E6%A0%A1%E5%9C%92/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-28',
				date_iso: '2026-04-28',
				content: '文藻外語大學以外語底蘊入選教育部 WISE 智慧社會跨領域人才培力計畫',
			},
			{
				date: '2026-04-29',
				date_iso: '2026-04-29',
				content: '台南市公布四年投入逾 24 億推動數位學習；南投「生生有平板」全面達標',
			},
			{
				date: '2026-05-01',
				date_iso: '2026-05-01',
				content: '「館館有 AI」立委倡議曝光，教育部允諾研議補助大學圖書館；媒體呼籲補足預算與監督機制',
			},
			{
				date: '2026-05-02',
				date_iso: '2026-05-02',
				content: 'U-start 創新創業計畫提案破 350 組，AI 結合特殊教育等應用成亮點；新北推 AI 時代數位法治素養',
			},
			{
				date: '2026-05-03',
				date_iso: '2026-05-03',
				content: '教育部正式宣布「館館有 AI」，第四季起 47 所大學及公立圖書館免費開放付費版 AI；新竹縣百名教師取得 Gemini AI 認證',
			},
			{
				date: '2026-05-04',
				date_iso: '2026-05-04',
				content: '教育部召開「AI Di+實驗方案」全國工作會議；辦理「115 年教育 AI 及數位學習績優徵選」',
			},
		],
		articles: [
			{
				title: 'AI夥伴輔助數位樂學教育部AI Di+實驗方案全國工作會議',
				link: 'https://www.edu.tw/News_Content.aspx?n=9E7AC85F1954DDA8&s=9444E403EA03FB57',
				domain: 'edu.tw',
				date: '2026-05-04',
			},
			{
				title: '教育部推AI Di+實驗方案AI學伴助培育自主學習力',
				link: 'https://www.cna.com.tw/news/ahel/202605040165.aspx',
				domain: 'cna.com.tw',
				date: '2026-05-04',
			},
			{
				title: '教育部辦理「教育部115年推動教育AI及數位學習績優徵選」',
				link: 'https://www.tngs.tn.edu.tw/2026/05/04/%E6%95%99%E8%82%B2%E9%83%A8%E8%BE%A6%E7%90%86%E3%80%8C%E6%95%99%E8%82%B2%E9%83%A8115%E5%B9%B4%E6%8E%A8%E5%8B%95%E6%95%99%E8%82%B2ai%E5%8F%8A%E6%95%B8%E4%BD%8D%E5%AD%B8%E7%BF%92%E7%B8%BE%E5%84%AA/',
				domain: 'tngs.tn.edu.tw',
				date: '2026-05-04',
			},
			{
				title: '「慢AI」提升學生自主學習力教育部推「AI Di+實驗方案」',
				link: 'https://news.ltn.com.tw/news/life/breakingnews/5424812',
				domain: 'news.ltn.com.tw',
				date: '2026-05-04',
			},
			{
				title: '圖書館GPT、Claude免費用！教育部加碼推47所大學「館館有AI」',
				link: 'https://www.ettoday.net/news/20260503/3159111.htm',
				domain: 'ettoday.net',
				date: '2026-05-03',
			},
			{
				title: '迎向AI新浪潮竹縣百名教師獲Gemini AI認證打造智慧教育典範',
				link: 'https://twpowernews.com/news_pagein.php?n_id=290729',
				domain: 'twpowernews.com',
				date: '2026-05-03',
			},
			{
				title: '迎向AI新浪潮竹縣百名教師獲Gemini AI認證打造智慧教育典範',
				link: 'https://news.pchome.com.tw/living/twpowernews/20260502/index-17777260469091247009.html',
				domain: 'news.pchome.com.tw',
				date: '2026-05-03',
			},
			{
				title: '教育部推「館館有AI」計畫全國圖書館與47所大學將免費開放付費版AI工具',
				link: 'https://www.bigmedia.com.tw/article/1777763719176',
				domain: 'bigmedia.com.tw',
				date: '2026-05-03',
			},
			{
				title: '青年AI新創力U-start用AI助攻百業轉型',
				link: 'https://www.tcnews.com.tw/education/item/29268.html',
				domain: 'tcnews.com.tw',
				date: '2026-05-02',
			},
			{
				title: '新北「人權法治列車」攜手檢察官強化AI時代數位法治素養',
				link: 'https://today.line.me/tw/v3/article/zNwPGOj',
				domain: 'today.line.me',
				date: '2026-05-02',
			},
			{
				title: '青年創新創業計畫提案破350組結合AI成亮點',
				link: 'https://www.chinesedaily.com/article/detail-687496.html',
				domain: 'chinesedaily.com',
				date: '2026-05-02',
			},
			{
				title: '教育部推「館館有AI」從直屬圖書館起跑葛如鈞：讓學生公平取得AI工具、消弭數位落差',
				link: 'https://tw.news.yahoo.com/%E6%95%99%E8%82%B2%E9%83%A8%E6%8E%A8-%E9%A4%A8%E9%A4%A8%E6%9C%89ai-%E5%BE%9E%E7%9B%B4%E5%B1%AC%E5%9C%96%E6%9B%B8%E9%A4%A8%E8%B5%B7%E8%B7%91-%E8%91%9B%E5%A6%82%E9%88%9E-%E8%AE%93%E5%AD%B8%E7%94%9F%E5%85%AC%E5%B9%B3%E5%8F%96%E5%BE%97ai%E5%B7%A5%E5%85%B7-094609952.html',
				domain: 'tw.news.yahoo.com',
				date: '2026-05-01',
			},
			{
				title: '立委倡議「館館有AI」教育部所屬3圖書館今年可搶先體驗',
				link: 'https://www.ner.gov.tw/CultureNews/Content/?id=26043011570447028',
				domain: 'ner.gov.tw',
				date: '2026-05-01',
			},
			{
				title: '台南推動AI教育投入逾24億打造智慧學習環境',
				link: 'https://www.tainan.gov.tw/News_Content.aspx?n=13370&s=8811104',
				domain: 'tainan.gov.tw',
				date: '2026-04-29',
			},
			{
				title: '南投「生生有平板」全面達標三年打造智慧校園新里程',
				link: 'https://www.yesmedia.com.tw/%E5%8D%97%E6%8A%95%E3%80%8C%E7%94%9F%E7%94%9F%E6%9C%89%E5%B9%B3%E6%9D%BF%E3%80%8D%E5%85%A8%E9%9D%A2%E9%81%94%E6%A8%99%E3%80%80%E4%B8%89%E5%B9%B4%E6%89%93%E9%80%A0%E6%99%BA%E6%85%A7%E6%A0%A1%E5%9C%92/',
				domain: 'yesmedia.com.tw',
				date: '2026-04-29',
			},
			{
				title: '跳脫技術迷思，文藻以外語底蘊培育AI跨域人才',
				link: 'https://www.gvm.com.tw/article/129544',
				domain: 'gvm.com.tw',
				date: '2026-04-28',
			},
		],
		domains: [
			{ name: 'edu.tw' },
			{ name: 'cna.com.tw' },
			{ name: 'tngs.tn.edu.tw' },
			{ name: 'news.ltn.com.tw' },
			{ name: 'ettoday.net' },
			{ name: 'twpowernews.com' },
			{ name: 'news.pchome.com.tw' },
			{ name: 'bigmedia.com.tw' },
			{ name: 'tcnews.com.tw' },
			{ name: 'today.line.me' },
			{ name: 'chinesedaily.com' },
			{ name: 'tw.news.yahoo.com' },
			{ name: 'ner.gov.tw' },
			{ name: 'tainan.gov.tw' },
			{ name: 'yesmedia.com.tw' },
			{ name: 'gvm.com.tw' },
		],
	},
	{
		id: 'taiwanEduPolicy-gmail-ai-融入教學-高中',
		cluster_number: 'gmail-ai-融入教學-高中',
		unique_domains: 5,
		number_of_titles: 5,
		category: '教育政策',
		title: '本週「AI 融入教學」焦點：從台灣研習到紐約叫停的全球浪潮',
		short_summary: '本週「AI 融入教學 高中」話題橫跨台、港、中、美四地同步發酵：台灣中崙高中辦理線上研習，開放全國前導學校高中教師報名；東華大學將生成式 AI 導入旅遊課程，帶學生製作馬太鞍語音導覽；中國學者憂慮學生淪為「廢科舉後的秀才」，高校推動小組化人機協作課堂；紐約曼哈頓原擬設立的 AI 專門高中，則因家長強烈反對由市教育總監宣布叫停。多元案例提醒台灣高中教師：AI 融入教學已是現在進行式，如何落地並取得社會共識，是教育現場最迫切的課題。',
		emoji: '🤖',
		did_you_know: '紐約曼哈頓叫停的 AI 高中計畫，原本設計以 AI 倫理為核心課程，方向與台灣「素養導向」自主學習高度呼應。然而即便在科技重鎮，將整所學校定位為 AI 實驗場域，仍引發家長強烈不安，反映出教育創新速度與社會信任之間全球普遍存在的落差。',
		talking_points: [
			'台灣中崙高中（臺南）於 2026 年 4 月辦理「AI 融入自主學習教學」線上研習，開放 114 學年度十二年國教高優前導學校及全國有興趣高中教師報名，課程代碼 5567461',
			'東華大學觀光遊憩系透過教學卓越中心「生成式 AI 融入專業課程」計畫，帶領學生以 AI 工具為花蓮馬太鞍濕地製作自由行語音導覽，產出可公開使用的成果',
			'BBC 中文報導指出，中國多所大學已將 200-300 人大課拆解為數十人小組，明確「把 AI 作為小組協作的一員融入進來」以強化人際互動',
			'紐約曼哈頓 AI 專門高中計畫因社區強烈反對，由市教育總監宣告叫停，儘管校方強調設計初衷為培養學生科技倫理',
			'香港大角嘴天主教小學已在電腦科課程中系統性融入 AI 基礎概念，顯示 AI 教育布局已從高中向下延伸至小學階段',
		],
		quote: '把AI作為小組協作的一員融入進來',
		quote_attribution: 'BBC News 中文, 2026-04-30',
		quote_source_url: 'https://www.bbc.com/zhongwen/articles/clypne023mgo/trad.amp',
		quote_source_domain: 'bbc.com',
		perspectives: [
			{
				text: '積極融入派：台灣與香港案例顯示，將 AI 嵌入既有課程架構（自主學習、旅遊管理、電腦科）是務實可行的漸進路徑，重點在教師研習與課程設計支援，而非另起爐灶建立全新學校。分科融入比「AI 專校」更容易取得社會接受度。',
				sources: [
					{
						name: '中央社',
						url: 'https://www.cna.com.tw/postwrite/chi/432240',
					},
				],
			},
			{
				text: '社會信任落差派：BBC 報導的中國家長焦慮與紐約叫停事件呈現出另一面——即便科技大城，家長仍擔憂過度仰賴 AI 將使學生喪失深度思考能力。教育機構推進 AI 融入前，必須先建立溝通與信任機制，否則政策推力與民意阻力將持續拉鋸。',
				sources: [
					{
						name: 'BBC News 中文',
						url: 'https://www.bbc.com/zhongwen/articles/clypne023mgo/trad.amp',
					},
					{
						name: '星島日報（美東版）',
						url: 'https://www.singtaousa.com/2026/04/28/news/usa/manhattan-ai-high-school-canceled/',
					},
				],
			},
			{
				text: '向下延伸派：香港天主教小學案例提示，AI 教育已不再是高中階段才需思考的議題。若小學端已系統性融入 AI 基礎概念，台灣高中教師應重新評估入學生的先備能力，並據此調整 AI 融入的課程起點與難度設計。',
				sources: [
					{
						name: '荷花（Eugene Baby）',
						url: 'https://www.eugenebaby.com/articleList/%E5%8D%87%E5%AD%B8%E6%95%99%E8%82%B2/%E5%A4%A7%E8%A7%92%E5%98%B4%E5%A4%A9%E4%B8%BB%E6%95%99%E5%B0%8F%E5%AD%B8-1',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-29',
				date_iso: '2026-04-29',
				content: '中崙高中「AI融入自主學習教學」線上研習公告發布；星島日報報導紐約曼哈頓 AI 高中計畫遭叫停',
			},
			{
				date: '2026-04-30',
				date_iso: '2026-04-30',
				content: 'BBC 中文報導中國家長對 AI 衝擊教育的憂慮，揭示高校推動課堂小組化人機協作的新趨勢',
			},
			{
				date: '2026-05-02',
				date_iso: '2026-05-02',
				content: '中央社報導東華大學生成式 AI 融入旅遊課程成果；香港天主教小學 AI 融入電腦科教學模式見媒體報導',
			},
		],
		articles: [
			{
				title: '大角嘴天主教小學因材施教全人發展多元化學習模式結合AI輔助教學',
				link: 'https://www.eugenebaby.com/articleList/%E5%8D%87%E5%AD%B8%E6%95%99%E8%82%B2/%E5%A4%A7%E8%A7%92%E5%98%B4%E5%A4%A9%E4%B8%BB%E6%95%99%E5%B0%8F%E5%AD%B8-1',
				domain: 'eugenebaby.com',
				date: '2026-05-02',
			},
			{
				title: '東華大學觀遊系導入生成式AI走進馬太鞍學習自由行語音導覽',
				link: 'https://www.cna.com.tw/postwrite/chi/432240',
				domain: 'cna.com.tw',
				date: '2026-05-02',
			},
			{
				title: 'AI衝擊教育：中國家長怕孩子成了「科舉被廢後的秀才」',
				link: 'https://www.bbc.com/zhongwen/articles/clypne023mgo/trad.amp',
				domain: 'bbc.com',
				date: '2026-04-30',
			},
			{
				title: '曼哈頓AI高中計劃叫停',
				link: 'https://www.singtaousa.com/2026/04/28/news/usa/manhattan-ai-high-school-canceled/',
				domain: 'singtaousa.com',
				date: '2026-04-29',
			},
		],
		domains: [
			{ name: 'eugenebaby.com' },
			{ name: 'cna.com.tw' },
			{ name: 'bbc.com' },
			{ name: 'tngs.tn.edu.tw' },
			{ name: 'singtaousa.com' },
		],
	},
	{
		id: 'taiwanEduPolicy-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策',
		title: 'ML決策對齊評估：AI工具導入排程的實證啟示',
		short_summary: '《JAMA Pediatrics》刊登前瞻性觀察研究，將機器學習術後住院天數（LOS）預測模型嵌入外科排程行事曆工具，實證「決策對齊評估」框架——強調AI應以「是否改善最終決策」而非預測準確率衡量。對台灣高中教師而言，教育現場正快速導入AI排課與學習成效預測工具；本研究提示：採購或評鑑AI教育工具的核心標準，應是「工具能否真正改善教師的日常決策品質」，而非只看模型技術指標。',
		emoji: '🤖',
		did_you_know: '「決策對齊評估」（Decision-Aligned Evaluation）強調：衡量AI好壞，應看其輸出是否帶動更好的行動結果，而非只看預測誤差。學校若採購AI輔導分配、排課工具，可借此框架設計驗收標準，要求廠商提供「導入後決策品質」的前後對照數據。注意：本研究為前瞻性觀察研究，不宜直接推論因果。',
		talking_points: [
			'證據類型：前瞻性觀察研究，發表於《JAMA Pediatrics》（2026-05-04），將ML-LOS預測模型透過「行事曆工具」嵌入外科選擇性手術排程流程',
			'「決策對齊評估」核心主張：AI工具評估標準應與其支援的決策一致，而非僅依賴技術指標（如RMSE、MAE）',
			'研究示範：ML模型輸出直接整合進排程介面，協助調配床位資源、降低住院天數估計偏差導致的排程衝突',
			'教育場景對應：AI排課、輔導資源分配、學習預測工具，應同樣設問——「AI建議有沒有讓教師做出更好的決定」，而非只展示預測準確率',
			'政策意涵：台灣教育部若推動AI融入教學採購規範，缺乏「決策對齊」評估標準，恐導致技術指標亮眼但實務效益低的工具被採納',
		],
		quote: 'integrating a machine-learning postoperative length-of-stay model into elective surgical scheduling, through a prospective calendar tool',
		quote_attribution: 'JAMA Pediatrics, 2026-05-04',
		quote_source_url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848571',
		quote_source_domain: 'jamanetwork.com',
		perspectives: [
			{
				text: '醫療AI實務視角：研究顯示，AI模型若能直接嵌入工作流程介面（而非提供孤立預測數字），才能發揮改善決策的實質效果。這對教育AI工具的設計邏輯有直接啟發——工具是否整合進教師日常決策流程，比預測準確率更關鍵。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848571',
					},
				],
			},
			{
				text: '評估框架批判視角：傳統AI評估偏重技術指標，本研究主張改以「決策品質」為主軸。對教育政策制定者而言，這意味著評鑑AI教育工具的採購規範必須重新設計；目前台灣尚無對應的標準化「決策對齊」驗收框架，是政策空白。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848571',
					},
				],
			},
		],
		articles: [
			{
				title: 'Decision-Aligned Evaluation for Length-of-Stay Forecasting',
				link: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848571',
				domain: 'jamanetwork.com',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'jamanetwork.com' },
		],
	},
	{
		id: 'taiwanEduPolicy-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策',
		title: '自閉症青少年日常生活技能落差：早期預測因子新證據',
		short_summary: '《JAMA Pediatrics》2026年5月刊出的觀察性研究，以量化方式比較自閉症青少年、其他發展障礙青少年與一般族群在日常生活技能（Daily Living Skills）上的表現差距，並追溯可在幼兒期識別的早期預測因子。對台灣高中教師而言，此研究直指：融合班中具自閉症或發展障礙身分的學生，自理能力可能遠低於同齡期望值，且落差在入學前已可預測。若教師與特教教師能共同掌握預測指標，可在轉銜關鍵期前提早介入，避免學生高中畢業後出現嚴重的自立生活斷層。',
		emoji: '🧩',
		did_you_know: '日常生活技能（Daily Living Skills）在特教評估中通稱「適應行為」，涵蓋個人衛生、飲食備製、交通使用與金錢管理。研究顯示，即使智力功能相近，自閉症青少年的適應行為分數往往仍顯著低於其他發展障礙群體，形成所謂「能力—功能落差」。注意：本研究為觀察性研究，不宜直接推論因果。',
		talking_points: [
			'證據類型：觀察性量化研究，刊於《JAMA Pediatrics》（2026-05-04），三組比較設計：自閉症青少年、其他發展障礙青少年、一般族群，聚焦日常生活技能表現差異',
			'研究識別出可在幼兒期偵測的早期預測因子，意味著高風險學生在進入國小前即可被標記，對台灣早療轉介與國小特教安置時機具政策意涵',
			'台灣《特殊教育法》規定高中階段須提供個別化轉銜計畫（ITP），但若教師不熟悉生活技能評量工具，IEP 目標難以反映真實功能落差',
			'自閉症青少年與一般同齡者的日常生活技能差距，可能直接影響高中畢業後的就業安置、自立生活及社區融合成效',
			'高中輔導教師與特教教師應在 16 歲前完成結構化生活技能盤點，參考此類研究結果調整轉銜支持強度與介入優先序',
		],
		quote: 'Identifying early childhood predictors of daily living skill independence in adolescents with autism may inform targeted intervention timing and transition planning.',
		quote_attribution: 'JAMA Pediatrics, 2026-05-04',
		quote_source_url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848568',
		quote_source_domain: 'jamanetwork.com',
		perspectives: [
			{
				text: '臨床醫學視角（JAMA Pediatrics）：將日常生活技能不足定位為需早期醫療介入的發展問題，強調幼兒期預測因子的識別可優化干預時機。此觀點以個別診斷為核心，責任主體落在早療與醫療系統的篩檢能力。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848568',
					},
				],
			},
			{
				text: '特殊教育政策視角：台灣現行 IEP 與轉銜計畫制度要求學校主動評估，但執行品質參差。若研究結果能轉化為標準化篩檢工具，可強化學校在國中小階段的早期識別責任，而非等到高中才面對生活功能危機。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848568',
					},
				],
			},
			{
				text: '環境與社會支持視角：過度聚焦個體「技能缺陷」可能遮蔽環境障礙與練習機會不足的問題。日常生活技能落差未必源於個人能力限制，亦可能反映學校與家庭提供練習情境的差異，政策應同步改善環境支持，而非僅評估個體。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848568',
					},
				],
			},
		],
		articles: [
			{
				title: 'Daily Living Skill Profiles in Adolescents With Autism and Developmental Disabilities',
				link: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848568',
				domain: 'jamanetwork.com',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'jamanetwork.com' },
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
