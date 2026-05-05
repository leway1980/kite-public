import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';
const AI_APPLICATIONS_UUID = 'c0000005-0000-4000-8000-000000000005';

// ─── Stories synthesized 2026-05-05 by pipeline (auto-generated) ───

const aiNewsStories: Story[] = [
	{
		id: 'aiNews-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'OpenAI 攜手 PwC 以 AI 代理人重塑企業財務長職能',
		short_summary: 'OpenAI 與四大會計師事務所 PwC 宣布合作，為企業財務長（CFO）辦公室導入 AI 代理人，涵蓋財務規劃、預測、採購、付款、稅務、財報及帳務結算等核心流程。PwC 負責內控與企業部署實作，OpenAI 提供 ChatGPT、Codex 及 Workspace Agents 工具平台。雙方已在 OpenAI 自家財務部門率先試跑採購代理人，驗證可行後再將心得外推給其他企業 CFO。

此合作標誌企業財務正從「流程效率化」跨入「以決策為核心的智慧運營」。財務人工例行作業——發票與合約審核、異常付款監控、月結前風險示警——將逐步由代理人接手。PwC 明確指出，CFO 未來須像管理其他企業成本一樣治理 AI 的 token 用量與預算，意味著 AI 本身已成為需要財務問責的企業資源。

對台灣高中商業、會計及資訊科目教師，本次合作帶來三個具體啟示：第一，可引導學生用 ChatGPT 或 Codex 嘗試設計簡易費用追蹤或異常偵測自動化流程，從實作中體驗 AI 代理人的運作邏輯，而非僅止於概念理解。第二，「AI 治理」可融入數位公民課程——企業須主動管控 token 用量說明「使用 AI 有成本」，是 AI 素養的重要一環。第三，文章一再強調「人類監督（human oversight）」仍是代理人設計的核心原則，教師可藉此引導學生討論哪些決策應保留人工把關、哪些才適合委派給 AI，培養批判評估 AI 角色的判斷力。',
		emoji: '💼',
		did_you_know: 'OpenAI 自家財務部門已實際部署 ChatGPT 與 Codex，應用場景橫跨投資人關係、稅務、財報、企業發展及合約審查五大業務面向。PwC 與 OpenAI 先在 OpenAI 內部建置採購代理人（Procurement Agent）進行實驗，以「自食其力」模式確認可行後，才將心得推廣至其他企業客戶，形成由內而外的落地策略。',
		talking_points: [
			'PwC 與 OpenAI 在 OpenAI 自家財務組織內率先建置採購代理人（Procurement Agent）進行內部驗證，再將實作心得外推給其他企業 CFO，採「由內而外」的落地模式。',
			'OpenAI 財務部門已實際使用 ChatGPT 與 Codex，涵蓋投資人關係、稅務、財報、企業發展、合約審查五個業務面向。',
			'Codex 具體用途：協助財務團隊自建儀表板、支出追蹤器（spend tracker）及異常管理系統（exception-management system），讓非工程師人員也能客製化工作工具。',
			'Workspace Agents 透過 Skills（技能模組）與 Connectors（連接器）整合至企業現有工具，確保代理人遵循核准流程並存取正確的企業資料。',
			'隨 AI 代理人規模擴大，CFO 須主動治理 AI token 用量與預估費用，PwC 定位為協助企業建立「AI 財務治理」框架的顧問夥伴。',
			'代理人可執行的具體任務：監控付款異常、比對發票與合約是否符合政策、隨市況即時更新財務預測、準備季末財報、以及在月結或季結前提早示警潛在風險。',
			'合作強調「從原型到生產（prototype to production）」落地能力，PwC 負責提供財務轉型、內部控制設計與企業級部署的實作專業，而非停在概念設計階段。',
		],
		quote: 'Finance is at an inflection point, where organizations are moving from process efficiency to intelligent, decision-centric operations. Through our collaboration with OpenAI, we\'re helping clients embed agentic AI into the core fabric of the finance function, enabling more proactive insights, stronger controls, and a more adaptive operating model.',
		quote_attribution: 'PwC 高階主管，2026-05-04',
		quote_source_url: 'https://openai.com/index/openai-pwc-finance-collaboration',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '效率轉型派：PwC 與 OpenAI 均以「財務功能從效率導向走向決策導向」為核心論述，強調代理人能壓縮重複性人工作業、提升預測準確度並強化內控，CFO 可因此聚焦高價值策略決策。OpenAI 以自身財務部門為活體示範案例，進一步強化此論點的可信度。',
				sources: [
					{
						name: 'OpenAI 官網',
						url: 'https://openai.com/index/openai-pwc-finance-collaboration',
					},
				],
			},
			{
				text: '治理風險派：文章雖一再強調「人類監督」，但對代理人跨系統自動執行採購或付款時的錯誤責任歸屬，未提供具體說明。CFO 須主動管控 AI token 用量的要求，也隱含代理人在規模化後運營成本可能難以預測的財務隱憂，與「強化內控」的宣稱形成張力。',
				sources: [
					{
						name: 'OpenAI 官網',
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
		id: 'aiNews-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'Google 四月 AI 大爆發：免費影片生成與代理平台登場',
		short_summary: 'Google 於 2026 年 4 月的 Cloud Next \'26 大會發布超過 260 項 AI 公告，亮點涵蓋 Gemini 企業代理平台（可自主處理多步驟業務流程）、第八代 TPU、定位「同體積最強開源模型」的 Gemma 4，以及 Google Vids 開放任何 Google 帳戶每月免費生成最多 10 支影片。目前 75% 的 Google Cloud 客戶已使用 AI，330 家機構單年各自處理逾一兆 token。

此波更新標誌企業 AI 正式進入「代理時代」：系統可自主規劃並執行複雜多步驟流程，不再只是被動回答問題的工具。Google 同步壓低消費門檻，將影片生成與個人化程式教學導師設為免費功能，顯示平台正以規模效應加速 AI 工具普及，對尚未跟上的組織競爭壓力持續升高。

對台灣高中教師有三個具體切入點：一、Colab 新增 Learn Mode，讓 Gemini 化身個人程式教學導師，可直接整合進 Python 或資料科學課程，建議教師先自行試用後再設計引導任務；二、Google Vids 每月 10 支免費影片可讓學生製作學習成果展示短片，完全無需預算；三、Deep Research Max 可跨來源彙整高層次研究資料，有助縮短教師備課蒐集時間。需留意：部分功能介面目前仍以英語為主，在地化支援有限；另外代理型 AI 帶來的學習倫理議題（如報告自動化生成）值得及早在課堂公開討論並訂定規範。',
		emoji: '🤖',
		did_you_know: '截至 2026 年 4 月，Google Cloud 旗下已有 330 家大型機構各自在過去一年內處理逾一兆（10¹²）個 token，整體客戶中近 75% 已在使用 Google Cloud AI 服務。同期 Google Vids 開放所有 Google 帳戶免費使用，每月可生成最多 10 支 AI 輔助影片，讓影片製作門檻首次對一般學生與小型機構歸零。',
		talking_points: [
			'Cloud Next \'26 吸引逾 32,000 名現場出席者，Google 單一活動期間發布 260 項以上 AI 公告',
			'Gemini Enterprise Agent Platform 讓企業可建構並治理自主 AI 代理，處理無需人工逐步介入的多步驟業務流程',
			'第八代 TPU 專為代理型 AI 設計，在滿足超大規模算力需求的同時強調數據中心能源效率',
			'Gemma 4 定位「同等體積中最強開源模型」，讓資源有限的機構或研究者可在本地部署高能力 AI',
			'Google Vids 開放任何 Google 帳戶每月免費生成最多 10 支影片，學生與小型機構可零成本製作專業品質影片',
			'Colab 推出 Learn Mode，Gemini 化身個人程式教學導師，直接嵌入現有 Python 與資料科學學習工作流',
			'Deep Research Max 可執行跨來源高層次研究彙整任務，協助使用者應對複雜資料分析需求',
		],
		quote: 'Agentic technology is revolutionizing how people and organizations work.',
		quote_attribution: 'Google Blog, 2026-05-04',
		quote_source_url: 'https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '從企業競爭角度，Google 以 Gemini Enterprise Agent Platform 與第八代 TPU 直接挑戰微軟 Copilot 生態圈，「代理型 AI」成為雲端平台新一輪爭奪戰核心；近 75% 的 Google Cloud 客戶已導入 AI，顯示轉換成本高、生態鎖定效應正在形成。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/',
					},
				],
			},
			{
				text: '從教育普及角度，Colab Learn Mode 與 Google Vids 免費方案顯示 Google 正以零邊際成本策略加速滲透教育場域，但功能集中於英語介面、缺乏繁中在地化支援，是台灣課堂大規模應用的主要障礙。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/ai/google-ai-updates-april-2026/',
					},
				],
			},
			{
				text: '從開源生態角度，Gemma 4 強調「同體積最強」的定位有助降低非 Google Cloud 用戶的 AI 採用門檻，但 Google 主導開源模型標準的策略也引發外界對生態系控制權集中的疑慮。',
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
		id: 'aiNews-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'Gemini API 上線 Webhook，長時任務即時推播取代輪詢',
		short_summary: 'Google 於 2026 年 5 月 4 日正式為 Gemini API 加入事件驅動 Webhook 功能，針對 Deep Research、長影片生成及 Batch API 批次處理等耗時數分鐘至數小時的任務，改由伺服器主動推送 HTTP POST 通知，開發者無需反覆呼叫 GET 確認狀態。

輪詢模式不僅消耗額外 API 配額，也拉長應用程式延遲。Webhook 遵循 Standard Webhooks 規格，以 webhook-signature、webhook-id、webhook-timestamp 三個簽章標頭確保冪等性並防止重放攻擊；送達保證「至少一次」，失敗時自動重試最長 24 小時，顯著提升長時代理工作流的穩健性。

對台灣高中教師的啟示：AI 工具正從即問即答轉向非同步代理模式，使用 Gemini 相關工具（如 NotebookLM）處理大量資料時，應預設「提交後等通知」的流程，而非期待即時回應。資訊科技課可以 Webhook 對比輪詢為例說明事件驅動架構，搭配 Google 釋出的 Python SDK Cookbook 帶學生完成端對端整合；學校 IT 評估批次作文評量應用時，改用 Webhook 可實質降低輪詢負載與 API 配額消耗。',
		emoji: '🔔',
		did_you_know: 'Gemini API 的 Webhook 支援兩種安全層級：專案層級以 HMAC 全域設定，或在單次請求中以 JWKS 動態覆寫，讓不同任務可路由至不同端點。送達策略採「至少一次」(at-least-once)，推播失敗後系統將自動重試最長 24 小時，確保 Deep Research 或數千筆 prompt 批次任務即使在網路波動下仍不遺漏通知。',
		talking_points: [
			'Gemini API 於 2026-05-04 推出事件驅動 Webhook，適用 Deep Research、長影片生成、Batch API 批次處理等執行時間可達數分鐘至數小時的代理任務',
			'舊輪詢模式需開發者反覆呼叫 GET 確認狀態；Webhook 改為 Gemini 伺服器主動發送 HTTP POST，消除冗餘 API 呼叫與等待延遲',
			'遵循 Standard Webhooks 規格，每次推播附帶 webhook-signature、webhook-id、webhook-timestamp 三個簽章標頭，確保冪等性並阻止重放攻擊',
			'送達保證為「至少一次」(at-least-once)，推播失敗時自動重試，最長持續 24 小時',
			'支援兩層安全設定：專案層級以 HMAC 全域配置，或單次請求以 JWKS 動態覆寫，可將不同任務路由至不同端點',
			'Google 同步釋出 Python SDK 程式範例與完整 Cookbook，供開發者快速建立端對端 Webhook 整合',
			'學校 IT 若以 Gemini Batch API 批次處理大量作文評量，改用 Webhook 推播可實質降低伺服器輪詢頻率與 API 配額消耗',
		],
		quote: 'the Gemini API can simply push a real-time HTTP POST payload to your server the instant a task finishes',
		quote_attribution: 'Google Blog, 2026-05-04',
		quote_source_url: 'https://blog.google/innovation-and-ai/technology/developers-tools/event-driven-webhooks/',
		quote_source_domain: 'blog.google',
		perspectives: [
			{
				text: '從開發效率角度，Webhook 推播模式消除輪詢冗餘、降低延遲與配額消耗，對建構代理工作流的開發者是明確利多；但對小型學校 IT 或個人教師而言，需自行架設可接受 HTTP POST 的公開端點，初期設定門檻反而可能高於輪詢方式。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/developers-tools/event-driven-webhooks/',
					},
				],
			},
			{
				text: '此功能強化 Gemini 在企業與教育市場的技術競爭力，但也加深校園對 Google 平台的依賴。台灣學校若採用 Gemini API 進行批次校務整合，需評估資料主權與廠商鎖定風險，尤其非同步長時任務的資料存留位置在《個人資料保護法》框架下需特別留意。',
				sources: [
					{
						name: 'Google Blog',
						url: 'https://blog.google/innovation-and-ai/technology/developers-tools/event-driven-webhooks/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-04',
				date_iso: '2026-05-04',
				content: 'Google 正式於 Gemini API 推出事件驅動 Webhook 功能，面向所有開發者開放，同步釋出官方文件、事件目錄與 Python SDK Cookbook',
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
		title: 'OpenAI 重建 WebRTC 架構，讓語音 AI 對話達到即時自然體驗',
		short_summary: 'OpenAI 公布其語音 AI 基礎設施大改造：針對每週逾 9 億活躍用戶的規模壓力，重新設計 WebRTC 媒體傳輸架構，採「分離中繼加收發器」（split relay + transceiver）設計，同步解決單埠對應單連線的擴展瓶頸、ICE／DTLS 狀態管理的穩定性問題，以及全球首跳延遲三大痛點，使 ChatGPT 語音與 Realtime API 的回應流暢如真人對話。

語音 AI 的體驗門檻極為苛刻——任何停頓、截斷或搶話延遲都會即時破壞對話感，工程團隊在公告中明確指出這是驅動重架構的核心原因。WebRTC 標準已內建 ICE（NAT 穿透）、DTLS-SRTP（加密傳輸）、RTCP（品質控制）及用戶端回音消除與抖動緩衝，OpenAI 選擇沿用此生態系而非重造輪子，並透過 Realtime API 將企業級低延遲能力直接開放給第三方開發者。

對台灣高中教師的啟示：首先，Realtime API 搭配 WebRTC 讓口說練習、即時問答輔助等語音互動應用的技術門檻大幅降低，學校或教師無需自建媒體伺服器即可呼叫。其次，文章反覆強調「延遲直接影響對話感」——課堂部署語音 AI 時，若往返延遲超過約 200 毫秒，學生的互動意願會明顯下降，選工具時應實測而非只看規格。第三，台灣連接 OpenAI 伺服器的網路路由與北美用戶不同，實際延遲仍受地區影響，正式導入課堂前建議在校內網路環境下先行測試，避免官方數據與實際落差影響教學節奏。',
		emoji: '🎙️',
		did_you_know: 'OpenAI 的語音服務每週活躍用戶已超過 9 億，正是這個規模讓舊有「一埠對應一連線」的 WebRTC 媒體終止方式開始與內部基礎設施產生衝突。新的 split relay + transceiver 架構將 ICE／DTLS 的有狀態連線管理與媒體封包路由分離，使兩者可各自獨立擴展，同時對客戶端保持標準 WebRTC 行為不變，開發者無需修改任何用戶端程式碼即可受惠於基礎架構升級。',
		talking_points: [
			'OpenAI 語音服務每週活躍用戶超過 9 億，是推動此次 WebRTC 基礎設施全面重建的直接壓力來源',
			'新架構採「split relay + transceiver」設計，將 ICE／DTLS 有狀態會話管理與媒體封包路由拆分，解決舊架構「一埠對應一連線」無法水平擴展的根本問題',
			'WebRTC 標準內建 ICE（穿透 NAT）、DTLS-SRTP（加密傳輸）、RTCP（品質回饋）及用戶端回音消除與抖動緩衝，OpenAI 直接繼承生態系成熟實作而非自造協議',
			'Realtime API 讓第三方開發者以標準 WebRTC 連線呼叫 OpenAI 語音模型，可應用於語音代理人（voice agents）互動工作流程，無需自建媒體基礎設施',
			'開源函式庫 Pion（Sean DuBois 建立並維護）是此次架構的重要基石，提供跨平台 WebRTC 實作並降低研發成本',
			'新架構目標為連線建立速度快到「用戶開口即刻開始」，媒體往返時間需低且穩定以確保換話（turn-taking）不出現尷尬停頓或截斷',
			'沒有 WebRTC 標準化，每個客戶端都需各自解決 NAT 穿透、編解碼協商與加密傳輸問題；標準化讓 OpenAI 工程資源集中在 AI 模型與路由邏輯層',
		],
		quote: 'Voice AI only feels natural if conversation moves at the speed of speech. When the network gets in the way, people hear it immediately as awkward pauses, clipped interruptions, or delayed barge-in.',
		quote_attribution: 'OpenAI Engineering Blog, 2026-05-04',
		quote_source_url: 'https://openai.com/index/delivering-low-latency-voice-ai-at-scale',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: '從基礎設施工程角度，OpenAI 此次公開架構細節（split relay + transceiver、ICE／DTLS 分離）是罕見的技術透明度，有助於業界理解大規模 WebRTC 部署的真實挑戰，也隱含邀請開發者基於 Realtime API 構建語音應用的商業意圖。',
				sources: [
					{
						name: 'OpenAI Engineering Blog',
						url: 'https://openai.com/index/delivering-low-latency-voice-ai-at-scale',
					},
				],
			},
			{
				text: '單一來源的技術公告難以獨立驗證延遲改善幅度與全球覆蓋一致性，台灣等亞太地區用戶實際體驗到的首跳延遲，可能與文章描述的北美最佳情境存在顯著差距，需待第三方測評或開發者實測數據佐證。',
				sources: [
					{
						name: 'OpenAI Engineering Blog',
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
		title: 'Codex Pets 上線：GPT-5.1 三升級讓工作流 AI 夥伴更像人',
		short_summary: 'OpenAI 於 2026 年 5 月在 Product Hunt 上架 Codex Pets，為 Codex 程式設計工作流加入動態動畫虛擬夥伴。同期評測揭示 GPT-5.1 三項具體升級：引擎分段與個性預設（Personality Presets）、多步驟複雜指令首次即可正確執行（從需 3–4 次迭代降至一次）、以及語調情境自適應強化。

Product Hunt 評測者指出，語調自適應比純技術規格更能決定企業採用率——「人味互動」勝過模型規格表。對 GTM 與企業部署團隊，多步指令遵循直接降低生產環境延遲並省去反覆 prompt 工程成本。GPT-5.1 被定位為「漸進升級而非革命躍進」，優勢在規模化部署時的複合效益。

對台灣高中教師的啟示：引擎分段與個性預設的設計邏輯，意味著教師未來可為不同教學情境部署最佳化的 AI 角色，例如「鼓勵式寫作教練」或「蘇格拉底式追問導師」，免去每次重寫 prompt 的工程負擔。多步驟指令一次到位，讓教師能給出分層指令（先摘要、再提問、最後給回饋），不必擔心 AI 只處理第一步就停住。Codex Pets 的「有個性夥伴」概念也值得借鑒：長時間使用的情緒投入設計，或許能緩解學生對 AI 工具的疏離感。需注意此工具以商業場景優先設計，是否符合台灣 K-12 語境仍需教師自行評估；Codex 介面目前以英文為主，中文深度支援待確認。',
		emoji: '🐾',
		did_you_know: 'GPT-5.1 的多步驟指令遵循改進，使原本需要 3–4 次反覆迭代才能正確執行的複雜指令，降至首次即可完成。Product Hunt 評測者以 GTM 建置場景為例，指出這直接削減了生產系統的延遲，並使部署時的 prompt engineering 工程量大幅降低。評測同時強調，企業採用 AI 工具的真正門檻不在技術規格，而在「人味互動體驗」——語調自適應能力被視為比模型規格更關鍵的採用指標。',
		talking_points: [
			'GPT-5.1 新增引擎分段（Engine Segmentation）功能，允許在同一部署中對不同任務設定獨立個性預設（Personality Presets），免除逐次重寫 prompt 的工程成本',
			'複雜多步驟指令執行成功率大幅提升，從舊款需 3–4 次迭代才能到位，GPT-5.1 可首次即正確執行，直接壓縮生產系統延遲',
			'Codex Pets 為 OpenAI Codex 工作流加入動態動畫夥伴角色，設計目標是提升開發者長時間使用的情緒投入度與工作流黏著性',
			'語調自適應（Tone Adaptation）被 Product Hunt 評測者評定為比技術規格更關鍵的企業採用指標，「人味互動體驗勝過模型規格」',
			'GPT-5.1 定位為漸進式升級而非革命性躍進，優勢在規模化部署時的複合效益，並非 AGI 宣言',
			'個性預設機制可直接對應教育場景的角色分工，如「鼓勵式寫作教練」vs.「蘇格拉底式追問導師」，每種角色可分別最佳化不重複配置',
		],
		quote: 'Technical superiority loses to human-like interaction every time.',
		quote_attribution: 'Product Hunt 評測者（OpenAI 產品頁面），2026-05-04',
		quote_source_url: 'https://www.producthunt.com/products/openai',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '工程實務角度：GPT-5.1 是務實的漸進升級，多步指令遵循與語調自適應直接轉化為部署成本降低與系統延遲壓縮，對規模化商業部署有具體價值，但並非 AGI 突破。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/openai',
					},
				],
			},
			{
				text: '教育遷移角度：Codex Pets 的個性夥伴設計與個性預設機制對教學場景有潛在遷移空間，但工具以商業 GTM 場景為設計優先，教育用途需要額外的語境調適，且 Codex 介面以英文為主，中文課堂應用仍存在落差。',
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
		id: 'aiApplications-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		title: 'Aaavatar：AI 一鍵自動化 HR 品牌大頭照工作流',
		short_summary: 'Aaavatar 是 macOS 桌面應用程式，專為 HR 與設計團隊自動化品牌大頭照工作流程。拖入員工照後，系統自動移除背景、平衡色調、統一高度對齊，批次匯出所需格式。定價分免費（主模型 3 張 + 輕量模型 3 張）與 Pro 無限次方案。

開發者在 Online Payment Platform 觀察到 HR 同仁每月花 €80 每席位用 Figma 手動處理新進員工大頭照，市面工具無一能端對端符合其工作流程，因而自行開發。這反映 AI 影像工具正從通用功能走向企業特定職能垂直整合的趨勢，差異化不在技術廣度，而在流程契合度。

對台灣高中教師，此案例可作「AI 工具設計思維」教材：學校行政端（學務處、輔導室）同樣大量處理學生照片，可評估類似工具降低人工作業。課堂可引導學生分析免費 vs. Pro 定價商業邏輯、雲端處理的員工照片隱私風險（Product Hunt 已有用戶詢問本機方案，開發者未正式回應），以及 Magic Retouch 跨照片光線一致性的技術限制。適合資訊科技或科技倫理課討論「AI 輔助標準化 vs. 取代熟練人工」的邊界。',
		emoji: '🪪',
		did_you_know: '開發者透露，12 年前曾在荷蘭設計公司 Today 實習，花兩整週用 Photoshop Pen Tool 手動摳出 100 多張圖片，頭髮是最大耐心考驗。如今同樣問題仍以「每月 €80 每席位的 Figma 手工作業」形式存在企業中——AI 消除了技術門檻，卻未消除重複流程本身，直到有人把整條工作流封裝成單一工具。',
		talking_points: [
			'Aaavatar 免費方案含主 AI 模型 3 張 + 輕量模型 3 張裁切；Pro 方案無限次，目前僅支援 macOS',
			'競品 Figma 每席位每月 €80，Online Payment Platform HR 人員長期以此手動處理新進員工品牌大頭照',
			'Magic Retouch 自動調整色調、加暖色、提亮臉部陰影，但「跨整組照片統一光線風格」功能尚在開發路線圖中',
			'Product Hunt 用戶詢問是否支援本機（local-first）處理以符合員工照片隱私合規需求，開發者未正式確認',
			'核心流程四步：自動去背 → 色調平衡與細節修復 → 統一高度對齊 → 批次匯出所需格式',
			'開發者以「Lily from HR」真實案例驗證需求：現有工具「沒有一個能端對端符合其工作流程」',
		],
		quote: 'Lily from HR was doing all of that in Figma, at €80/month per seat. Other tools existed, but none of them matched her workflow end-to-end.',
		quote_attribution: 'Product Hunt, 2026-05-03',
		quote_source_url: 'https://www.producthunt.com/products/aaavatar',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '效率視角：Aaavatar 將去背、色調校正、高度對齊、批次匯出四道步驟壓縮成單一工作流，定價遠低於 Figma 席位費用，對快速擴張中的 HR 團隊具直接降本價值。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/aaavatar',
					},
				],
			},
			{
				text: '隱私與合規視角：員工照片屬個人資料，若雲端處理涉及資安合規疑慮；本機優先架構是企業採用的關鍵前提，開發者目前未給出明確回應，可能構成企業採用障礙。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/aaavatar',
					},
				],
			},
			{
				text: '垂直化 vs. 通用化競爭視角：Figma 等通用工具已內建背景移除，Aaavatar 主張差異在於「端對端符合 HR 工作流」而非技術本身；此定位能否支撐獨立付費產品，仍需市場驗證。',
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
		id: 'aiApplications-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		title: 'Flowly 桌面 AI 代理：直接操控 Gmail 與 Sheets 的原生助理',
		short_summary: 'Nocetic 推出的 Flowly 是一款原生桌面 AI 助理，今年一月在 Product Hunt 首發 v1 後持續快速迭代，最新版整合瀏覽器代理延伸模組，能直接驅動 Google Sheets、Gmail、Google Maps 等網站，執行填表、點擊按鈕、頁面導航等自動化操作，並搭載語音教練（全域熱鍵喚醒）、端對端加密與 iOS 風格持久性工作階段四大功能。

多數 AI 助理仍停留在「對話層」，Flowly 深入「操作層」，讓 AI 直接代理執行 SaaS 工具的實際動作，代表 Agentic Desktop 趨勢正在成熟。持久性工作階段確保長任務在切換分頁後不中斷，端對端加密則試圖回應企業與教育機構對資料主權的疑慮，顯示開發商同時押注效率與隱私兩條主軸。

對台灣高中教師的啟示：教師日常面臨大量重複行政庶務，如批次更新 Google Sheets 成績、回覆 Gmail 通知、填寫各式表單，Flowly 這類桌面代理工具提供三個具體遷移方向：（1）指派 AI 代理批次處理試算表資料，省去手動逐列輸入；（2）利用語音熱鍵在備課或批改中途即時查詢資料，不打斷工作節奏；（3）讓代理草擬並寄送 Gmail 班級通知。需注意本地差異：台灣學校 Google Workspace 帳號通常受管理員政策限制，第三方瀏覽器延伸模組須向 IT 組申請授權；語音教練的 notch overlay 設計以 Mac 為前提，校園以 Windows 設備為主者可用性受限，選用前建議先在個人裝置試用。',
		emoji: '🤖',
		did_you_know: 'Flowly 的瀏覽器代理延伸模組不只是「開網址」，而是能直接驅動 Google Sheets、Gmail、Google Maps 等主流 SaaS 平台，執行填表、點擊按鈕、流程導航等實際操作；搭配 iOS 風格的持久性工作階段，即使在任務執行途中切換頁面，長流程也不會中斷——這讓桌面 AI 從「問答工具」跨入「自動化代理」的新類別，從 v1 到具備上述能力的 v2，迭代週期僅約四個月。',
		talking_points: [
			'Flowly v1 於 2026 年 1 月在 Product Hunt 首發，v2 在約四個月內新增瀏覽器代理、語音教練、端對端加密、持久性工作階段四大模組，版本跨度大',
			'瀏覽器代理延伸模組可直接操控 Google Sheets、Gmail、Google Maps，執行填表、點擊按鈕、頁面導航，而非僅開啟網址',
			'語音教練以全域快捷鍵喚醒，常駐於 macOS 選單列或 notch overlay，讓使用者免手打即可下指令',
			'端對端加密預設啟用，對話內容離開裝置前已加密，設計針對重視資料隱私的教育與企業場景',
			'持久性工作階段（iOS 風格連續性）確保長任務在切換分頁或導航後仍能繼續，解決過去 AI 任務因頁面重載中斷的痛點',
			'開發商 Nocetic 定位為「原生桌面」體驗，有別於單純 Chrome 擴充套件或 Web App，強調深度整合本地端作業系統',
			'台灣學校 Google Workspace 帳號通常有管理員限制，部署此類第三方瀏覽器代理前需向校方 IT 組申請授權',
		],
		quote: 'A browser agent (companion extension) that doesn\'t just open URLs but actually drives Google Sheets, Maps, Gmail, and most other sites — fills forms, clicks buttons, navigates flows',
		quote_attribution: 'Nocetic 創辦人，Product Hunt，2026-05-03',
		quote_source_url: 'https://www.producthunt.com/products/flowly-6',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '效率優先觀點：瀏覽器代理直接操控 Gmail、Sheets 等工具，大幅降低跨平台手動切換的認知負擔，對需處理大量行政流程的教師或工作者而言具體可用；持久性工作階段進一步確保複雜多步驟任務的完整性。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/flowly-6',
					},
				],
			},
			{
				text: '隱私與合規疑慮：讓 AI 代理取得操控 Gmail、Google Sheets 的實際授權，引發「代理操作邊界如何界定」的疑問；台灣教育場域的資安政策通常要求所有第三方工具經 IT 審核，端對端加密的宣稱仍需第三方驗證才能說服學校管理層。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/flowly-6',
					},
				],
			},
			{
				text: '平台適用性落差：語音教練設計以 macOS notch overlay 與選單列為前提，台灣中學以 Windows 設備為主的環境中，功能體驗可能大打折扣，教師在評估導入前須確認作業系統相容性。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/flowly-6',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-01',
				date_iso: '2026-01-01',
				content: 'Flowly v1 在 Product Hunt 首發，定位為基礎原生桌面對話 AI 助理',
			},
			{
				date: '2026-05-03',
				date_iso: '2026-05-03',
				content: 'Flowly v2 發布，新增瀏覽器代理（可驅動 Google Sheets、Gmail、Maps）、語音教練、端對端加密、持久性工作階段',
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
		id: 'aiApplications-4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		title: 'Manex：把專家修正轉為 AI 記憶的私密團隊知識工具',
		short_summary: 'Manex 是一款主打本地執行、預設私密的 AI 知識記憶工具，讓團隊把 PDF 文件、問答記錄與專家修正意見統一存入「Team Brain」共享工作空間，並對這些內容進行有佐證依據的問答查詢。月費 29 美元涵蓋整個團隊，不按人頭計費；個人方案支援無限文件上傳。

傳統知識管理工具往往只保存原始文件或原版 AI 回答，卻丟失了最有價值的部分——領域專家審閱後的修正意見。Manex 特別將「修正」設計為比原始答案更高權重的記憶訊號（correction-aware memory），讓後續 AI 回覆能以正確的專業判斷為基礎，而非不斷重演同樣的錯誤。開發者坦承目前加權與傳播機制仍在調整中，但產品方向已明確以修正優先。

對台灣高中教師而言，「修正即記憶」的設計理念可直接移植到集備知識管理中。教師集備時常面臨：AI 生成的講義或習題需要反覆糾正、學生常見迷思需累積整理、跨科協作的補充說明散落在通訊軟體中無法系統保存。若採用 Manex 類型工具，教師可以把每次對 AI 輸出的修正批注——連同修正理由——存入科組共享知識庫；下次生成相似主題時，工具以先前的修正作為更高權重的參考，不再重複糾錯。本地執行與不強制上傳第三方的設計，對需要處理學生資料或校內保密文件的教師提供重要的合規保障。$29 月費涵蓋整個學科小組，比按人頭訂閱更符合學校預算結構。',
		emoji: '🧠',
		did_you_know: 'Manex 在 Product Hunt 上架時，開發者提供 10 組終身解鎖優惠碼，並坦承產品目前適合中小型文件集，大型文件在瀏覽器環境有效能瓶頸。桌面版與 CLI 版本已列入規劃但尚未推出。其核心設計主張是：文件給出基礎證據，AI 回答給出詮釋，而專家修正則捕捉了影響未來回覆的領域規則——三者重要性不同，修正層級最高。',
		talking_points: [
			'Manex 將「專家修正」設計為比 AI 原始回覆更高權重的記憶訊號（correction-aware memory），讓每次領域專家的批改成為未來問答的校準依據，而非只是聊天記錄',
			'Team Brain 共享工作空間月費 $29 涵蓋整個團隊，不按人頭計費；個人方案支援無限文件上傳，定價結構適合學科小組共用',
			'本地執行模式支援在瀏覽器或本機跑 AI，不強制上傳至第三方伺服器，可處理含機密內容的企業或學校文件，符合隱私合規需求',
			'每個 AI 回覆附帶原始文件佐證（grounded answers with evidence），而非純生成，回答可溯源查核',
			'產品目前適合中小型文件集，瀏覽器版本有效能上限；桌面版與 CLI 版本已列入規劃，但尚未推出，大規模文件庫場景的可用性仍受限',
			'2026-05-02 在 Product Hunt 上架，提供 10 組終身解鎖優惠碼，目標用戶涵蓋教師、法規合規、客戶文件、研究與內部知識管理場景',
		],
		quote: 'The correction becomes a stronger memory signal because it represents expert judgment applied to the source material.',
		quote_attribution: 'Product Hunt（Manex 開發團隊）, 2026-05-02',
		quote_source_url: 'https://www.producthunt.com/products/manex',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '開發者強調修正記憶優先權重與本地執行的隱私設計，認為現有知識工具普遍丟失了「修正層」這個最有價值的部分；但開發者自承加權與傳播機制仍在調整中，產品尚在早期驗證階段。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/manex',
					},
				],
			},
			{
				text: '早期用戶回饋點出一個實務張力：瀏覽器本地執行保護隱私，卻在文件規模與效能之間形成天花板——對需要處理大型文件庫的學術或企業團隊，現階段的可用性受限，桌面版與 CLI 方案仍是待填的缺口。',
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
		id: 'aiEducation-gmail-notebooklm-教學',
		cluster_number: 'gmail-notebooklm-教學',
		unique_domains: 5,
		number_of_titles: 5,
		category: 'AI × 教育',
		title: '本週『NotebookLM 教學』焦點：Google 全面免費開放行動版，費曼學習法新應用受矚目',
		short_summary: 'Google 於 2026 年 4 月 30 日宣布，Gemini App 筆記本（Notebook）功能已正式向全球免費與付費行動裝置用戶開放，此整合源自 2025 年 12 月 NotebookLM 正式併入 Gemini。免費方案每本最多支援 50 個資料來源，付費 Google AI 訂閱用戶依等級可達 100 至 600 個，兩平台之間亦支援雙向同步。

NotebookLM「只用上傳資料回答、附引文不編造」的核心特性，加上新增可直接匯出 PDF、Word、PowerPoint、Markdown、RTF 五種格式，使其從聊天工具進化為完整 AI 研究平台。此次全面免費開放讓個人學習與課堂導入的工具成本幾乎歸零，也引發本週大量教學向內容集中出現。

對台灣高中教師而言，最可直接遷移的做法是將教科書章節、課綱 PDF 或補充讀物上傳為「專案筆記本」，讓學生與有引文依據的 AI 互動問答，而非接收無來源的生成內容，可降低錯誤資訊風險。YouTube 已有創作者示範以費曼學習法搭配 NotebookLM 備考：上傳教材→請 AI 出題→學生用自己語言解釋→回查引文確認，形成完整學習閉環，此模式可直接改編為課堂閱讀理解或跨科整合任務。需注意：免費帳號每本上限 50 個來源，跨單元或跨科協作建議指引學生分拆筆記本，需要班級規模協作者可申請 Google Workspace for Education 方案。',
		emoji: '📓',
		did_you_know: 'NotebookLM 免費方案每個筆記本最多可加入 50 個資料來源，付費 Google AI 訂閱用戶則依方案不同可加入 100 至 600 個來源。Gemini 與 NotebookLM 之間支援雙向同步——使用者可在 Gemini 完成摘要與查詢後，直接切換至 NotebookLM 進行更深度的推理分析，共享同一批資料來源，無需重複上傳。此外，Gemini 已新增直接匯出為 PDF、Word、PowerPoint、Markdown 及 RTF 的功能，省去手動複製貼上的步驟。',
		talking_points: [
			'2026 年 4 月 30 日，NotebookLM 官方於 X 平台宣布 Gemini App 筆記本功能正式向全球免費與付費行動裝置用戶開放',
			'免費方案每個筆記本最多 50 個資料來源；付費 Google AI 訂閱用戶依等級可達 100 至 600 個，直接影響重度研究用戶工作流程',
			'Gemini 與 NotebookLM 雙向同步：在 Gemini 完成摘要後可切換至 NotebookLM 進行深度推理，共享同一來源資料庫，無需重複上傳',
			'Gemini 新增直接匯出 PDF、Word、PowerPoint、Markdown、RTF 五種格式，為 2026 年 4 月 Gemini Drop 更新項目之一',
			'YouTube 創作者示範以費曼學習法搭配 NotebookLM 備考證照：上傳教材→AI 出題→自行解釋→回查引文確認，形成四步閉環',
			'ABMedia 於 2026 年發布完整使用指南，涵蓋 Audio/Video Overview、Mind Map、Quiz 三項進階功能，定位為 AI 研究助理而非聊天機器人',
			'整合時程：2025 年 12 月網頁版整合→2026 年初擴展行動版→4 月初 Notebook 核心功能進入 Gemini 主介面→4 月 30 日全面開放',
		],
		quote: 'Notebooks in @GeminiApp are officially available to Free and Paid users on mobile!',
		quote_attribution: 'NotebookLM 官方帳號（X 平台），2026-04-30',
		quote_source_url: 'https://www.koc.com.tw/archives/641484',
		quote_source_domain: 'koc.com.tw',
		perspectives: [
			{
				text: '電腦王阿達側重 Gemini 與 NotebookLM 雙向同步的工作流程意義，強調這是從「回答問題」進化為「協助管理專案」的關鍵；但同時指出付費方案來源上限（最高 600 個）遠高於免費（50 個），對重度研究用戶而言差距仍顯著。',
				sources: [
					{
						name: '電腦王阿達',
						url: 'https://www.koc.com.tw/archives/641484',
					},
				],
			},
			{
				text: 'YouTube 創作者聚焦「免費自學備考」情境，以費曼學習法示範 NotebookLM 的個人學習應用；ABMedia 則從功能全覽角度（Audio Overview、Mind Map、Quiz）將其定位為研究助理，兩者呈現截然不同的目標用戶與使用情境。',
				sources: [
					{
						name: 'YouTube',
						url: 'https://www.youtube.com/watch?v=h7Uvr4LF9b4',
					},
					{
						name: '鏈新聞 ABMedia',
						url: 'https://abmedia.io/notebooklm-complete-guide-2026',
					},
				],
			},
			{
				text: '手機王（SOGI 與 LINE Today）以「Gemini Drop 更新整理」框架報導，強調 Google 生態系整合的產品策略面；電腦王阿達則更著重 NotebookLM 對一般使用者日常工作流程的實際改變，兩者觀察層次不同。',
				sources: [
					{
						name: 'SOGI 手機王',
						url: 'https://www.sogi.com.tw/articles/gemini/6268641',
					},
					{
						name: '手機王（LINE Today）',
						url: 'https://today.line.me/tw/v3/article/pekKRBe',
					},
				],
			},
		],
		timeline: [
			{
				date: '2025-12-01',
				date_iso: '2025-12-01',
				content: 'Google 將 NotebookLM 正式整合進 Gemini（網頁版先行）',
			},
			{
				date: '2026-04-01',
				date_iso: '2026-04-01',
				content: 'Google 深化整合，將 Notebook 核心功能帶入 Gemini 主介面，付費用戶率先取得',
			},
			{
				date: '2026-04-28',
				date_iso: '2026-04-28',
				content: 'ABMedia、手機王（SOGI）、LINE Today 等媒體集中發布 NotebookLM 教學與 Gemini Drop 功能整理',
			},
			{
				date: '2026-04-29',
				date_iso: '2026-04-29',
				content: 'YouTube 創作者發布費曼學習法搭配 NotebookLM 備考教學影片',
			},
			{
				date: '2026-04-30',
				date_iso: '2026-04-30',
				content: 'NotebookLM 官方宣布 Gemini App 筆記本功能全面向免費與付費行動裝置用戶開放',
			},
			{
				date: '2026-05-04',
				date_iso: '2026-05-04',
				content: '電腦王阿達發布綜合報導，整理整合時程與功能差異',
			},
		],
		articles: [
			{
				title: 'Google 將Gemini 最聰明的NotebookLM 功能開放所有人使用 - 電腦王阿達',
				link: 'https://www.koc.com.tw/archives/641484',
				domain: 'koc.com.tw',
				date: '2026-05-04',
			},
			{
				title: '考證照還在花錢報課？NotebookLM 費曼學習法，免費又高效！ - YouTube',
				link: 'https://www.youtube.com/watch?v=h7Uvr4LF9b4',
				domain: 'youtube.com',
				date: '2026-04-29',
			},
			{
				title: 'NotebookLM 是什麼？2026 完整教學：功能、定價、用法 - 鏈新聞ABMedia',
				link: 'https://abmedia.io/notebooklm-complete-guide-2026',
				domain: 'abmedia.io',
				date: '2026-04-28',
			},
			{
				title: 'Google Gemini筆記本怎麼用？整合NotebookLM使用教學一次看懂 - 手機王',
				link: 'https://today.line.me/tw/v3/article/pekKRBe',
				domain: 'today.line.me',
				date: '2026-04-28',
			},
			{
				title: '2026年4月Gemini Drop更新！6項最新功能整理一次看 - SOGI手機王',
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
		id: 'aiEducation-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: '早期函授教育使技能就業率提升6至10個百分點',
		short_summary: 'NBER工作論文35147將國際函授學校（ICS）1940年前逾400萬筆新數字化記錄與美國普查資料配對，發現入學後3至10年內，學員取得技能性職業的機率顯著提升6至10個百分點，以函授替代高中的年輕學員效益最明顯，對無法接受傳統正規教育的群體尤為突出。

研究採Roy一般均衡排序模型，顯示函授教育讓低能力者習得職業技能，同時改善高中入學選擇品質，進而放大正規高中教育的整體回報，挑戰「只有正規學歷才有就業效益」的傳統假設，為現代AI輔助個人化自學提供歷史實證基礎。

對台灣高中教師的啟示：替代學習管道對難以融入正規體制的學生效益最大，而非對所有學生均等。教師可有系統地引導學習動機低落或後段班學生使用均一教育平台、學習吧等自主學習工具，研究暗示此類補充管道可能產生顯著技能補足效果。更值得關注的是，開放替代學習管道並不稀釋正規課程品質——反而透過更精準的能力分流提升整體學習成效，這一反直覺的發現，值得台灣在推動多元選修與自主學習認定制度時審慎納入設計考量。',
		emoji: '📬',
		did_you_know: '國際函授學校（ICS）在1940年以前累計招收超過400萬名學員，遠超當時許多州立大學的總招生量。NBER研究者將塵封百年的機構紀錄重新數字化並與普查資料配對追蹤，發現效益集中在以函授「替代高中」的年輕群體，而非拿來做高中補充進修的成人學員——顯示替代性學習管道與正規教育之間是互補而非競爭關係。注意：本研究為觀察性歷史研究（工作論文），不宜直接推論現代AI學習工具的因果效益。',
		talking_points: [
			'【證據類型：觀察性歷史研究、NBER工作論文】利用新數字化的ICS 1900–1940年代記錄（超過400萬筆）與美國普查資料配對分析，屬歷史觀察性研究，非RCT隨機實驗',
			'國際函授學校（ICS）至1940年累計學員超過400萬人，是20世紀初美國最大函授教育機構，提供工程、商業、技術等職業培訓課程',
			'入學後3至10年追蹤：學員取得技能性職業機率提升6至10個百分點，以函授替代高中的年輕學員效益最顯著，成人補修群體效益相對較小',
			'研究採Roy一般均衡排序模型，顯示函授不僅對低能力者有技能提升效果，同時改善高中入學選擇品質，形成「雙重放大效應」',
			'函授教育打破「正規學歷才有就業競爭力」假設，其歷史實證與當今均一教育平台、Coursera等線上自學工具的政策討論高度呼應',
			'歷史行政記錄重新數字化（newly digitized records）是本研究方法論核心創新，示範教育史資料數字化對現代政策研究的價值，對台灣教育部資料庫開放政策具參考意義',
		],
		quote: 'enrollment increased the likelihood of skilled employment by 6-10pp within 3-10 years, particularly among younger students who used it as a substitute for high school',
		quote_attribution: 'NBER Working Paper 35147, 2026-05-05',
		quote_source_url: 'https://www.nber.org/papers/w35147#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '替代學習路徑的政策正當性：研究顯示函授教育有效填補正規學校體系缺口，對低能力或無緣傳統高中的學員帶來實質職業提升，支持多元學習管道的政策價值，可為台灣推動線上自學認定制度提供歷史依據。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35147#fromrss',
					},
				],
			},
			{
				text: '選擇偏差與因果推論限制：Roy模型本身承認學員依能力自我分流（低能力→函授、高能力→高中），觀察性研究難以完全控制未觀測的個人特質，「函授直接提升就業率」的因果方向仍需謹慎詮釋，不宜直接移植至AI課程效益預測。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35147#fromrss',
					},
				],
			},
			{
				text: '歷史行政資料的研究新機：本研究將百年機構紀錄數字化並與普查配對，顯示教育研究者可從歷史行政資料挖掘政策意涵，這一路徑對台灣推動學籍資料去識別化研究開放具有示範意義。',
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
		id: 'aiEducation-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: '美國全國研究：手機袋禁機首年擾課，高中數學長期受益',
		short_summary: 'NBER工作論文35132（2026年）以全美大規模問卷、GPS定位紀錄、標準化測驗成績與學校行政資料為基礎，採「交錯差異中差異」因果設計，評估可鎖式手機袋（lockable pouch）對在校手機使用的效果。研究確認手機袋能大幅壓低使用率，但短期代價是紀律事件增加、學生主觀幸福感下滑；高中與國中的學業效果方向相反。

美國各州正大規模立法推動禁機，此研究是目前同時結合GPS行為數據與學業成就的最大規模全國性因果推斷之一。其核心發現——整體測驗成績效果接近零、學段之間方向相反——直接挑戰「禁機必然提升成績」的政策假設，對各國正在辯論管制程度的教育體系具有實質參考價值。

對台灣高中教師的啟示：台灣高中在108課綱強調自主學習的脈絡下，手機兼具學習工具與分心來源，校方管制政策分歧。本研究提供三點具體參考：第一，實施手機袋的第一年可能出現「陣痛期」——紀律事件短暫增加、學生幸福感下降，學校應預備班級輔導資源，而非視為政策失敗的訊號提早放棄。第二，高中數學科在多年後確實出現正向效果，建議優先在數學、自然科等高專注需求課堂試行集中收機。第三，美國國中（middle school，約對應台灣國中）出現小幅負面學業效果，不宜直接移植高中做法，須另行評估青少年發展階段的差異需求。',
		emoji: '📵',
		did_you_know: '手機袋導入後，GPS定位與教師回報均確認在校手機使用率大幅下降，但第一年紀律事件反而短暫增加、學生主觀幸福感下滑；第二年起幸福感轉正、紀律問題消退。整體測驗成績平均效果接近零，高中數學例外，出現小幅正向改善；國中則為小幅負面。研究亦未發現禁機對出席率、學生自述課堂專注度或感知網路霸凌有任何顯著影響。注意：本研究為觀察性工作論文（交錯差異中差異設計），雖具因果推斷框架，仍不宜完全排除未觀測干擾因素的影響。',
		talking_points: [
			'【證據類型】NBER工作論文（非RCT），採交錯差異中差異設計（staggered DiD），資料來源含GPS定位、全美大規模問卷、標準化測驗成績、學校行政紀錄，及全美最大手機袋供應商的銷售時間點紀錄作為外部驗證。',
			'手機袋採用後，GPS定位與教師回報雙重確認在校手機使用率大幅下降，效果於導入首年即可測得，顯示行為介入效果明確。',
			'導入第一年：紀律事件短暫增加、學生主觀幸福感下滑——研究將此解讀為「短期適應擾動（short-term disruption）」，而非政策失效的訊號。',
			'第二年以後：幸福感轉為正向，紀律波動消退；高中數學成績出現小幅正向改善，但全體平均測驗成績效果持續接近零。',
			'高中（high school）學業效果為正，尤以數學顯著；國中（middle school）出現小幅負面效果——兩學段方向相反，提示禁機政策須按學段差異化設計，不可一體適用。',
			'研究未發現手機袋對出席率、學生自述課堂專注度或感知網路霸凌有顯著影響，顯示禁機的效果路徑比直覺預期更窄、更聚焦。',
			'銷售紀錄取自全美最大手機袋供應商 Yondr，用作政策採用時間點的外部驗證，以降低學校自選偏誤（selection bias）對因果推斷的威脅。',
		],
		quote: 'In the first year after adoption, disciplinary incidents increase and student subjective well-being falls, consistent with short-term disruption. However, effects on well-being become positive in later years and disciplinary effects fade.',
		quote_attribution: 'NBER Working Paper 35132, 2026-05-05',
		quote_source_url: 'https://www.nber.org/papers/w35132#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '「短痛長益」支持論：初期幸福感下滑與紀律波動屬適應成本，多年後幸福感轉正、高中數學改善，顯示手機袋政策在高中段具長期效益，教育主管機關應在陣痛期堅持推動，而非被第一年數據嚇退。',
				sources: [
					{
						name: 'NBER Working Paper 35132',
						url: 'https://www.nber.org/papers/w35132#fromrss',
					},
				],
			},
			{
				text: '「零成績效果質疑」論：整體測驗成績效果接近零，國中甚至出現負向效果，顯示禁機並非提升學業的萬靈丹；若政策目標以學業成績為核心訴求，推行成本效益需要重新衡量。',
				sources: [
					{
						name: 'NBER Working Paper 35132',
						url: 'https://www.nber.org/papers/w35132#fromrss',
					},
				],
			},
			{
				text: '「測量局限」提醒：GPS確認手機使用率下降，但研究無法測量學生是否轉向其他分心行為（如課堂聊天、走神）；出席率與自述專注度均無顯著變化，禁機影響的真實作用路徑仍待後續研究釐清。',
				sources: [
					{
						name: 'NBER Working Paper 35132',
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
		id: 'aiEducation-4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI × 教育',
		title: '菁英分配的兩種邏輯：回溯型 vs 前瞻型能力主義的政策張力',
		short_summary: '美國國家經濟研究局（NBER）工作論文第 35151 號以正式數學模型，系統區分「回溯型能力主義」（依個人過去特質或成就判定優劣，靜態後視）與「前瞻型能力主義」（依個人對特定社會目標的預期邊際貢獻排序，功能性前視），並推導兩者在學生分校、勞工分職情境下的社會效率差異與資訊需求。

這項理論研究指出，選擇哪套框架不只是哲學立場，而是直接決定最優分配結果與制度可操作性。回溯型框架只需觀察過去表現，資訊成本低；前瞻型框架則要求政策制定者能估計每位候選人在明確社會目標下的邊際貢獻，資訊門檻極高，在現實公共政策中構成重大挑戰。兩套邏輯所需的資訊結構根本不同，因此可能導致截然相反的分配決策。

對台灣高中教師的啟示：台灣升學制度（學測成績 + 學習歷程檔案）隱含兩套邏輯並存卻未被拆解的矛盾——學測是典型回溯型工具，學習歷程檔案則暗藏前瞻型期待（展示探究潛力與未來方向）。教師在指導學生製作備審資料時，可借用「前瞻型」框架引導學生說明：「這段探究如何對課室、學校或社群目標產生具體增益」，而非只陳列已完成的成果清單。教師若擔任審查委員，也應意識到「選最優秀」（回溯型）與「選最合適此校目標者」（前瞻型）是不同的問題——後者要求先明確定義學校或學程的社會目標，這是當前課綱改革中尚未充分補足的資訊缺口。',
		emoji: '⚖️',
		did_you_know: '論文以純粹的數學模型（非問卷、非實驗數據）推導：回溯型能力主義僅需「過去表現」這一類資訊，而前瞻型能力主義要求政策制定者能精確估計每位候選人在特定社會目標下的邊際貢獻值——兩者所需資訊的複雜度存在本質差異，意味著前瞻型框架雖在理論上更有效率，在資訊不完全的現實環境中卻難以落地。注意：本研究為 NBER 工作論文（理論模型推導），尚未經同儕審查正式發表，不宜直接推論因果。',
		talking_points: [
			'【證據類型】NBER 工作論文第 35151 號（2026），採正式數學模型推導，非 RCT 或問卷，屬純理論研究',
			'「回溯型能力主義」：靜態後視，以個人過去特質或已達成的卓越成就作為分配依據，典型工具為標準化考試、在校 GPA',
			'「前瞻型能力主義」：功能性前視，以個人對特定社會目標的預期邊際貢獻排序，評量標準隨目標定義而變動',
			'正式模型推導顯示：兩套框架在「學生分配至學校」與「勞工分配至職位」情境下，最優解不同，社會效率結果分歧',
			'採前瞻型框架的政策制定者必須先明確量化「社會目標」，並能估計每位候選人的貢獻——此資訊需求在現實公共政策中極難滿足',
			'台灣學習歷程檔案隱含前瞻型期待（展示潛力與探究方向），但評審實務仍大量依賴回溯型指標（獎項、成績），兩套邏輯並存而無明確區分的政策論述',
			'教師可在課堂中明確問學生：「你的探究計畫預計對哪個社會目標帶來增益？」——這正是前瞻型邏輯對備審資料的具體轉譯',
		],
		quote: 'Prospective meritocracy is forward-looking: Merit is functionally defined as the comparative contribution that an individual makes to a specified set of social objectives.',
		quote_attribution: 'NBER Working Paper No. 35151, 2026-05-05',
		quote_source_url: 'https://www.nber.org/papers/w35151#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '支持回溯型框架的立場認為，過去成就是最可驗證、最抗操弄的資訊；標準化考試雖有侷限，但在資訊不對稱的公共教育體系中，仍是相對公正且低成本的篩選機制，能有效對抗主觀評審帶來的偏誤。',
				sources: [
					{
						name: 'NBER Working Paper 35151',
						url: 'https://www.nber.org/papers/w35151#fromrss',
					},
				],
			},
			{
				text: '前瞻型框架主張，若社會目標已明確定義，選出「最能推進該目標」的人才比「最優秀的人」更有效率；然而此框架要求政策制定者掌握大量個人潛在貢獻的資訊，在實務上可能引入新的主觀偏誤與不透明。',
				sources: [
					{
						name: 'NBER Working Paper 35151',
						url: 'https://www.nber.org/papers/w35151#fromrss',
					},
				],
			},
			{
				text: '從台灣制度設計觀察，學測（回溯型）與學習歷程檔案（局部前瞻型）並存，形成評審邏輯的內在矛盾——兩套標準所需的資訊種類與評判方式根本不同，卻從未在政策層次被明確拆解或協調。',
				sources: [
					{
						name: 'NBER Working Paper 35151',
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
		title: '父母認知頻寬不足形成育兒信念扭曲的自我封閉迴圈',
		short_summary: '美國國家經濟研究院（NBER）工作論文 35150 以理論模型結合隨機對照試驗（RCT），探索早期育兒投資機制。研究指出，當父母「認知頻寬」低於自身期望時，「動機性推理」啟動：父母會主動下調對「回應性互動回報率」的信念，藉此合理化低參與行為。RCT 結果確認干預可改變信念、回應性育兒及行為投入三項指標，但對實物投入與安慰劑結果無顯著影響，驗證機制特異性。

此「信念扭曲→低互動→無校正證據→信念持續扭曲」的自我封閉螺旋，解釋了為何傳統資源型早期干預（提供玩具、書本）難以持續改變親子互動品質。論文辨識出四條可打破此螺旋的干預路徑，提供政策設計的理論依據，也挑戰了過去純粹以資源匱乏解釋親職品質落差的框架。

對台灣高中教師的啟示：這套「頻寬受限→信念扭曲→行為收縮→無反饋→信念固化」螺旋，在課堂情境中有結構性對應。教師在行政負荷高、班級人數多的環境下，可能在無意識中下調「差異化教學或開放式提問有效嗎？」的信念，轉而採用認知要求較低的講述式教學，而學生的低參與表現又反過來「確認」了這一信念。本研究的政策啟示可直接遷移：教師專業發展設計應優先聚焦信念層，而非僅補充策略工具箱。具體做法是設計低成本微型實驗——例如一堂課改問一個開放式問題並記錄學生反應——直接提供可觀察的「校正證據」，取代動機性推理的運作空間，從根部打斷螺旋，而非在螺旋外部加壓。',
		emoji: '🧠',
		did_you_know: '研究機制的核心諷刺在於：低回應性互動本身不會產生任何反駁扭曲信念的證據——父母沒有試，就永遠不會知道試了有沒有用，而「沒試」恰恰進一步強化了「試了也沒用」的信念。RCT 干預有效的關鍵，正是提供替代性「校正證據」來源，打斷螺旋的自我強化迴路，而非單純補充育兒資源。注意：本研究為 RCT 工作論文，尚未通過同儕審查，樣本國家與人口特徵未見於公開摘要，不宜直接推論因果至台灣本地情境。',
		talking_points: [
			'【證據類型】NBER 工作論文 35150（RCT 設計）：採隨機對照試驗，以父母信念量測、回應性育兒行為、行為投入及安慰劑四類指標共同驗證理論模型預測',
			'「認知頻寬低於期望」觸發動機性推理：父母主動下調對回應性互動回報的信念，合理化低參與——這是主動的認知調適，而非單純因疲憊或疏忽造成的被動結果',
			'自我封閉螺旋四步驟：①頻寬不足 → ②信念下調 → ③回應性互動減少 → ④缺乏校正反饋 → 回到②，每一環節都自我強化，形成外力難以介入的封閉系統',
			'論文辨識四條干預可跳脫螺旋的機制路徑，RCT 確認對信念與行為投入有改善效果，但對「實物育兒材料投入」無顯著影響，直接挑戰資源補給型政策的理論基礎',
			'干預對安慰劑結果（placebo outcomes）無效，排除一般關注效應（Hawthorne effect）干擾，確認效果源自信念與回應性互動機制本身',
			'台灣課堂應用：教師可設計「一堂課一次開放式提問＋五分鐘書面記錄學生反應」的微型實驗，作為低成本校正證據來源，打破對差異化教學無效的固化信念',
		],
		quote: 'When capacity falls short of aspiration, motivated reasoning provides relief: the parent distorts her working belief downward, rationalizing low engagement.',
		quote_attribution: 'NBER Working Paper 35150, 2026-05-05',
		quote_source_url: 'https://www.nber.org/papers/w35150#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '認知科學角度：動機性推理是人類面對能力與期望落差時普遍的適應機制，在短期具有情緒保護功能。本研究將此機制置入親職投資框架，指出「合理化低參與」雖可紓解父母壓力，但透過自我封閉螺旋長期損害兒童回應性互動品質，適應功能與發展代價之間的權衡是理解此機制的關鍵。',
				sources: [
					{
						name: 'NBER Working Paper 35150',
						url: 'https://www.nber.org/papers/w35150#fromrss',
					},
				],
			},
			{
				text: '政策設計角度：若親職質量落差根源在信念扭曲而非資源不足，則傳統「提供實物育兒材料」型干預效果有限（RCT 已確認無顯著效果）。政策應轉向降低認知頻寬負擔（結構性減壓，如托育支持）或直接校正信念的介入——兩條路徑的成本、可及性與政治可行性，在台灣公共政策脈絡下有明顯差異，值得進一步評估。',
				sources: [
					{
						name: 'NBER Working Paper 35150',
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
		title: 'Google 推出美國建國 250 週年一站式教學資源平台',
		short_summary: 'Google 於 2026 年 5 月推出「打造國家：美國 250 年」（Making of the Nation: America at 250）教學平台，匯整建國 250 週年相關展覽與素材。站上最具特色的是國家公園主題的一分鐘互動模組，每則附語音朗讀，是少數主動提供音訊無障礙設計的內容區塊。

此舉顯示科技平台在歷史教育中扮演「策展人」角色：以主題化入口取代教師分散搜尋，同時以語音輔助降低閱讀門檻。對課堂而言，一站式備課帶來效率，但資訊框架由平台主導的風險也隨之而來。

對台灣高中教師的啟示：一分鐘模組可直接用於世界史或公民課的引起動機環節；平台以主題串連展覽而非單純列連結的策展邏輯值得借鏡，教師可參考此模式，用 Google Sites 或 NotebookLM 自建本土主題資源頁（如「台灣民主化歷程」），並加入 AI 語音摘要輔助閱讀困難學生，實踐通用學習設計（UDL）。',
		emoji: '🏛️',
		did_you_know: 'Google 平台上的國家公園系列模組長度僅約一分鐘，且附有語音朗讀，是全站少數主動提供音訊無障礙支援的區塊；同一資源旋即被資深教師收入其長期維護的「美國獨立革命 250 週年最佳教學資源」策展清單，反映資深教師正以主題式清單取代搜尋引擎作為主要知識管理工具。',
		talking_points: [
			'Google「Making of the Nation: America at 250」於 2026 年 5 月 4 日上線，集中提供美國建國 250 週年多個官方展覽與教學素材',
			'國家公園主題的一分鐘互動模組附語音朗讀，是全站罕見主動支援音訊無障礙的區塊，其餘大多數資源不提供此功能',
			'平台採策展式結構，教師可直接取得官方授權素材，省去逐站搜尋與版權確認的備課時間',
			'資深教師將此資源納入長期維護的「美國獨立革命 250 週年最佳教學資源」清單，顯示主題式策展清單已成業界主流知識管理形式',
			'音訊無障礙設計符合通用學習設計（UDL）原則，對識字困難或英語學習者具直接效益，但全站多數素材仍缺乏此設計',
			'台灣高中教師可參照此策展邏輯，以 NotebookLM 自動生成語音摘要、搭配 Google Sites 建立本土主題資源頁，複製無障礙備課流程',
			'一分鐘模組格式可直接套用為世界史或公民課的開場素材，引導學生從具體地景（國家公園）切入歷史脈絡討論',
		],
		quote: 'My favorite part of it are one-minute accessible displays about national parks. They provide audio support for the text, unlike most of the other resources on the site.',
		quote_attribution: 'Larry Ferlazzo\'s Websites of the Day, 2026-05-04',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/05/04/google-unveils-a-hub-of-tons-of-resources-related-to-the-250th-anniversary-of-the-u-s/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '從教師實務角度，Google 的策展平台節省備課時間，語音朗讀功能符合通用學習設計，讓閱讀困難學生能自主取得資訊，是現成可用的差異化教學工具。',
				sources: [
					{
						name: 'Larry Ferlazzo\'s Websites of the Day',
						url: 'https://larryferlazzo.edublogs.org/2026/05/04/google-unveils-a-hub-of-tons-of-resources-related-to-the-250th-anniversary-of-the-u-s/',
					},
				],
			},
			{
				text: '從批判媒體素養角度，由科技巨頭主導的歷史教育策展可能強化特定國族敘事框架，教師需引導學生比對多元史觀，避免單一企業平台成為歷史詮釋的唯一入口。',
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
		title: '6月1日免費研討會：視覺化教師專書如何支援英語學習者課程規劃',
		short_summary: '一場聚焦英語學習者（ELL）教學支援的免費線上研討會定於 2026 年 6 月 1 日舉辦，核心為一本由教師實踐者共同撰寫、被形容為「前所未見」的獨特參考書，以英語語言能力標準（ELPS）為框架，示範如何將該書內頁圖表直接應用於 ELL 課程規劃。

ELL 學生語言能力差異大，教師在學科教學與語言支援之間備感壓力。此類具備視覺化規劃工具的教師專書可直接降低備課門檻；研討會正式結束後另設 30 分鐘開放對話，刻意拉近理論與課堂實踐的距離。

對台灣高中英文教師的啟示：台灣課堂雖非典型 ELL 環境，但班級英語程度落差持續擴大，ELPS「語言能力分層指導」框架與 108 課綱差異化教學精神相通。教師可借鑑研討會示範的備課流程，將語言鷹架（scaffolding）概念遷移至英文或雙語課設計。操作上，報名即可取得錄影連結，不受時差限制；但需注意 ELPS 源自美國德州、適用對象為英語為第二語言的移民生，台灣教師應審慎調整，避免直接套用而忽略本地學生語言起點的差異。',
		emoji: '📚',
		did_you_know: 'ELPS 全名為「英語語言能力標準」（English Language Proficiency Standards），是美國各州用於衡量非母語英語學生語言發展里程碑的政策框架，而非單一教材或測驗。本場研討會邀請的書籍共同作者帶來一本「前所未見」的視覺化工具書，書中附有可直接用於課程規劃的內頁圖表，顛覆傳統教師參考書以文字說明為主的慣例。',
		talking_points: [
			'研討會時間：2026 年 6 月 1 日線上免費舉辦，報名後無論是否出席直播均可取得錄影連結',
			'核心框架為 ELPS（英語語言能力標準），源自美國德州，用於衡量 ELL 學生語言發展里程碑，涵蓋聽說讀寫四技能的分級指標',
			'書籍共同作者現場示範如何以書中內頁視覺化圖表進行 ELL 課程規劃，聚焦操作流程而非理論概述',
			'研討會正式結束後設 30 分鐘不限主題的 ELL 開放對話時段，允許與會者直接提出課堂困境',
			'該書被主持人形容為個人教學生涯中「前所未見」，內頁採圖表版面，有別於傳統教師參考書的文字導向格式',
			'本場研討會由教師部落格作者與書籍共同作者共同主持，兼具課堂實踐與出版視角',
		],
		quote: 'one unlike any other I\'ve ever seen',
		quote_attribution: 'larryferlazzo.edublogs.org，2026-05-04',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/05/04/im-co-hosting-a-short-free-webinar-on-june-1st-on-how-to-support-ells-with-one-of-the-most-unique-teacher-books-ive-ever-seen/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '實踐者視角：教師面對課堂即時壓力，需要視覺化、可直接套用的規劃工具，而非抽象的語言標準條文。本場研討會以書籍內頁圖表為核心示範，正是回應「工具先行」的需求，而非從政策框架往下推演。',
				sources: [
					{
						name: 'larryferlazzo.edublogs.org',
						url: 'https://larryferlazzo.edublogs.org/2026/05/04/im-co-hosting-a-short-free-webinar-on-june-1st-on-how-to-support-ells-with-one-of-the-most-unique-teacher-books-ive-ever-seen/',
					},
				],
			},
			{
				text: '標準框架視角：ELPS 等國家級語言標準有助於系統性設計 ELL 教學路徑，但過度依賴標準化框架可能忽略個別學生的母語背景與文化差異；教師需在遵循標準與差異化回應學生個別需求之間取得平衡。',
				sources: [
					{
						name: 'larryferlazzo.edublogs.org',
						url: 'https://larryferlazzo.edublogs.org/2026/05/04/im-co-hosting-a-short-free-webinar-on-june-1st-on-how-to-support-ells-with-one-of-the-most-unique-teacher-books-ive-ever-seen/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-04',
				date_iso: '2026-05-04',
				content: '教師部落格發布研討會預告，開放免費報名',
			},
			{
				date: '2026-06-01',
				date_iso: '2026-06-01',
				content: '免費線上研討會舉辦，聚焦 ELL 教學支援與視覺化教師專書應用，正式議程結束後設 30 分鐘開放對話',
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
		title: '美國家長反科技入校浪潮升溫，多地已成功推動下架行動',
		short_summary: '2026 年 4 月下旬，《紐約時報》報導美國校園科技反彈潮持續擴大，家長群體在各地成功推動「下架」行動；同期，美國聯邦教育部人力被砍半、學生貸款業務移轉財政部、學校選擇權擴張等多項政策震盪，共同構成當前美國教育政策的動盪格局。

科技進校並非教師單方面的決定。家長能見度提升後所形成的反制力量，正在重塑課室科技採納的速度與邊界。財政部接管學生貸款業務後，因其人員被形容為「只擅長強硬催收、缺乏帳戶修復與違約處理經驗」，顯示行政系統撤退將留下巨大服務缺口，最終由第一線師生承擔。

對台灣高中教師的啟示：台灣近年大力推動 AI 課程進班，但美國「家長反彈→地方政府下架」的前例值得警惕。教師可從三個層面借鑑：一、引入任何 AI 工具前先向家長說明「為何用、如何評估成效」，建立溝通共識而非既成事實，否則反彈往往在沉默中積累；二、作業政策（美國部分教育工作者主張全面廢除家庭作業）與科技使用緊密連動，建議同步檢視，避免 AI 工具淪為「假學習」的包裝；三、美國教育部被削半的案例顯示，行政支援一旦崩解，第一線教師被迫填補系統缺口的壓力將急速上升，預先了解政策風險、建立校內支援網絡，比倉皇應對更能保護師生權益。',
		emoji: '📱',
		did_you_know: '美國 Sandy Hook 槍擊事件後建立的校園匿名舉報系統，迄今已累計接獲近 40 萬份舉報（AP，2026 年 4 月）。另一方面，美國聯邦參議員在國會聽證揭露，康乃狄克州 2025 年全年共有 70 件學生殘障歧視申訴遞交教育部，教育部長坦承「一件未獲正面解決」——折射出人力大裁後的服務空洞化，且最終代價由最脆弱的學生族群承擔。',
		talking_points: [
			'《紐約時報》2026 年 4 月 29 日報導，美國多個家長社群已成功推動地方學區下架特定校園科技工具，科技反彈已從輿論轉化為具體政策勝利',
			'美國聯邦教育部 2025 年被削減約一半人力；教育部長在國會聽證承認，康乃狄克州全年 70 件學生殘障歧視申訴「一件未獲解決」',
			'學生貸款與助學金業務移轉財政部面臨重大挑戰：財政部人員缺乏帳戶修復與違約處理經驗，被形容為「極度強硬的催收機器」（NPR，2026 年 4 月）',
			'愛荷華州學校選擇權（school voucher）擴張後，部分傳統學區因學生大量流失陷入財政危機，NPR 報導指「一個學區已陷入危機」',
			'NPR 2026 年 4 月 28 日報導，部分美國教育工作者主張廢除家庭作業，相關辯論已從課堂延伸至公共政策層次',
			'《對話》雜誌指出，阿拉巴馬、密西西比、路易斯安那等州的閱讀進步數據「未呈現完整識字率圖像」，政策宣傳數字與實際成效之間存在結構性落差',
			'國會聽證中教育部長被問及為何將支援小學生的計畫移轉勞工部，其回應「教育目的是讓孩子完成學業後進入職場」，引發各界質疑對基礎教育定位的理解',
		],
		quote: 'They were in the business of very intense, hardcore collections.',
		quote_attribution: 'Larry Ferlazzo 教育政策週報引述（關於財政部接管學生貸款業務），2026-05-04',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/05/04/this-weeks-round-up-of-useful-posts-articles-on-ed-policy-issues-505/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '家長主導觀點（《紐約時報》）：科技廠商與校方合作推進數位化的速度過快，家長缺乏決策參與；透過集體行動贏得「下架」，代表民主監督機制在校園科技採購上正在發揮實質作用。',
				sources: [
					{
						name: 'Larry Ferlazzo Ed Policy Round-Up（引述紐約時報）',
						url: 'https://larryferlazzo.edublogs.org/2026/05/04/this-weeks-round-up-of-useful-posts-articles-on-ed-policy-issues-505/',
					},
				],
			},
			{
				text: '聯邦政策批判觀點（NPR、國會聽證）：聯邦教育部大規模裁員是結構性傷害而非效率提升，障礙學生申訴、助學金修復等服務的消失，最終代價由最脆弱的學生群體承擔。',
				sources: [
					{
						name: 'Larry Ferlazzo Ed Policy Round-Up（引述 NPR）',
						url: 'https://larryferlazzo.edublogs.org/2026/05/04/this-weeks-round-up-of-useful-posts-articles-on-ed-policy-issues-505/',
					},
				],
			},
			{
				text: '數據真實性觀點（《對話》雜誌）：政策宣傳中的「進步數據」往往未呈現完整面貌，評估任何教育科技或政策成效時，需追問測量框架與被排除的族群，而非照單全收官方指標。',
				sources: [
					{
						name: 'Larry Ferlazzo Ed Policy Round-Up（引述 The Conversation）',
						url: 'https://larryferlazzo.edublogs.org/2026/05/04/this-weeks-round-up-of-useful-posts-articles-on-ed-policy-issues-505/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-28',
				date_iso: '2026-04-28',
				content: 'NPR 報導學生貸款業務移轉財政部的挑戰；NPR 報導廢除家庭作業辯論；Linda McMahon 出席國會聽證面對教育部裁員質疑',
			},
			{
				date: '2026-04-29',
				date_iso: '2026-04-29',
				content: '《紐約時報》報導美國家長反科技入校運動已贏得多地下架行動；AP 報導 Sandy Hook 後匿名舉報系統已累計近 40 萬份',
			},
			{
				date: '2026-05-04',
				date_iso: '2026-05-04',
				content: 'Larry Ferlazzo 教育政策週報彙整上述報導發布',
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
		title: '黑武士怎麼管班？ChatGPT 把星際大戰搬進教育討論',
		short_summary: '2026 年 5 月 4 日星際大戰日，一篇教育部落格整理了五項教育相關資源，其中最具 AI 教學意涵的是一組 ChatGPT 角色扮演實驗：將曼達洛人、波巴·費特、黑武士分別設定為高中教師，請 AI 描述其課堂管理風格，以角色為鏡映照不同班級經營哲學。NPR 報導指出最新星際大戰作品傳遞「失敗的價值」，Edutopia 則提供可延伸一整週的跨科活動設計。

這類「流行文化 × AI」組合的關鍵價值，在於把成長型思維、失敗容忍度、班級管理等抽象教育概念，包裝成學生熟悉的 IP 語言，大幅降低課堂討論門檻。ChatGPT 角色扮演本身也示範了一種低成本的生成式 AI 應用方式：讓 AI 扮演特定角色並發散思考，而非單純查詢資料，引導學生對 AI 輸出進行比較與批判。

對台灣高中教師的啟示：可直接借鑒「請 ChatGPT 扮演某虛構角色，描述其擔任高中教師時的班級管理風格」此一提示詞框架，改換台灣學生熟悉的 IP（如航海王或鬼滅之刃角色），作為班會或生命教育的討論切入點。Edutopia 的「全週活動」框架也提醒：主題日無需壓縮於單堂課，可拉長為專題週滲透不同學科。需留意本地差異：台灣各校對學生使用 AI 工具的政策尚不一致，建議以課堂口頭討論為主，並設計批判性反思提問，避免學生將 AI 輸出視為真實建議或直接作為書面評量成果繳交。',
		emoji: '🌌',
		did_you_know: '2023 年 3 月，一位美國教育部落客在 Twitter 上進行了一組 ChatGPT 實驗：分別請 AI 以曼達洛人、波巴·費特、黑武士的身份描述擔任高中教師時的班級管理風格。三個角色映照出截然不同的管理哲學——武士道式紀律、賞金獵人式利益交換、威權式服從——意外成為討論班級經營理念的具體對比素材，三年後仍持續被教育工作者收錄引用。',
		talking_points: [
			'ChatGPT 被用來扮演 3 位星際大戰角色（曼達洛人、波巴·費特、黑武士），各自模擬高中教師課堂管理風格，形成三種截然不同的班級經營哲學對比',
			'NPR 以最新星際大戰作品為例報導「失敗的教育價值」，可作為高中成長型思維單元的補充閱讀素材直接引入課堂',
			'Edutopia 設計了一套「星際大戰日延伸一整週」的教學活動框架，示範如何將單日主題拉長為跨週專題',
			'Education Week 刊出分析，以星際大戰為例討論如何強化家長參與（parent engagement）策略',
			'「最佳影視成長型思維場景」精選清單收錄了星際大戰片段，可直接嵌入導師課或輔導課播放討論',
			'此 ChatGPT 角色扮演實驗最初發布於 2023 年 3 月，三年後仍持續被引用，顯示「IP × AI 提示詞」類教學素材具有跨年度使用價值',
		],
		quote: 'What started as a pun warmly shared by fans has become a full-fledged Star Wars holiday: Star Wars Day, a special once-a-year celebration of the galaxy far, far away.',
		quote_attribution: '教育部落格 edublogs.org, 2026-05-04',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/05/04/its-star-wars-day-here-are-four-education-related-resources-4/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '流行文化作為教學鷹架的主流化：Education Week、Edutopia、NPR 三個媒體均從不同角度肯定以星際大戰為載體，討論成長型思維、失敗價值與家長參與，顯示「IP 入課堂」在美國教育媒體中已從邊緣做法走向主流認可。',
				sources: [
					{
						name: '教育部落格 edublogs.org',
						url: 'https://larryferlazzo.edublogs.org/2026/05/04/its-star-wars-day-here-are-four-education-related-resources-4/',
					},
				],
			},
			{
				text: 'AI 角色扮演的教育潛力與風險並存：ChatGPT 扮演黑武士等反派角色示範威權管理風格，能引發有趣討論，但若缺乏教師引導，學生可能誤將 AI 輸出視為真實建議，需事先設計批判性反思環節加以框架。',
				sources: [
					{
						name: '教育部落格 edublogs.org',
						url: 'https://larryferlazzo.edublogs.org/2026/05/04/its-star-wars-day-here-are-four-education-related-resources-4/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2023-03-04',
				date_iso: '2023-03-04',
				content: '教育部落客在 Twitter 發布 ChatGPT 角色扮演實驗：請 AI 以曼達洛人、波巴·費特、黑武士身份描述高中班級管理風格',
			},
			{
				date: '2026-05-04',
				date_iso: '2026-05-04',
				content: '星際大戰日（May the 4th），部落格整理五項教育相關資源並重新推廣上述 ChatGPT 實驗與 Edutopia、NPR、Education Week 相關報導',
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
		title: '學生先AI代寫才學寫作：本週教育警語揭三大衝擊',
		short_summary: '美國一教育部落格每週精選跨領域警語，本期聚焦生成式AI三大衝擊：紐約市長Zohran Mamdani收到數千份家長簽名，要求對AI聊天機器人實施兩年暫緩；教育者批評學生「在學會寫作前先用AI代寫」、「讀書前先看ChatGPT摘要」；社群平台演算法更被指出刻意激活用戶的羞恥、嫉妒與憤怒情緒，使有害社群文化加速常態化。

這些現象指向同一根本危機：AI讓學生得以繞過學習的必要困難歷程。認知神經科學指出，每次從失敗中學習而非被失敗淹沒，正是在重塑大腦神經迴路、建立更深思熟慮的反應模式。若AI讓學生習慣「直取成品」，寫作、閱讀與批判思考的發展視窗將提早關閉——這是任何政策轉向都難以短期補救的結構性損失。

對台灣高中教師的啟示：可從三層次回應。第一，作業設計區分「過程型」與「成品型」，要求學生先繳交手寫草稿或閱讀筆記，再允許AI潤稿或查摘要，將認知困難保留為必要歷程而非阻礙。第二，將演算法素養納入媒體識讀課，具體示範平台如何依羞恥、嫉妒、憤怒等情緒決定推播優先序，而非僅教「辨識假新聞」。第三，借鑑研究者Epstein的「更好的作業」框架，設計AI難以一鍵替代的反思、辯論、實地調查類任務，讓學生的認知投入無法外包。',
		emoji: '✏️',
		did_you_know: '紐約市已有數千名家長連署請願，要求市長對生成式AI（含ChatGPT等聊天機器人）在學校實施兩年暫緩期，此行動出現於2026年4至5月間，顯示美國家長對AI進課堂的疑慮已從個別抱怨升級為有組織的政策倡議。與此同時，教育現場觀察到學生已養成「先AI代寫再補學寫作」與「ChatGPT摘要代替讀原著」的習慣，意味著AI改變的不只是工具使用，而是整個學習的時序與順序。',
		talking_points: [
			'紐約市家長於2026年4至5月間徵集數千份簽名，向市長Zohran Mamdani遞交請願，要求對生成式AI（含聊天機器人）在學校實施兩年暫緩',
			'教育現場出現系統性行為模式：學生「在學會寫作前用AI代寫」、「讀ChatGPT摘要取代讀整本原著」，將完整的閱讀與寫作歷程外包',
			'研究者Epstein主張作業討論焦點應從「要不要更多作業」轉向「作業品質是否更好」，方向是設計出AI難以一鍵完成的高認知投入任務',
			'教師需明確教導三項演算法素養：平台如何依羞恥、嫉妒、憤怒等情緒決定推播內容；網路社群如何使去人性化言論常態化；以及這些機制如何被刻意設計與利用',
			'認知神經科學視角：每次從失敗中學習（而非被失敗淹沒）會重塑大腦神經迴路，建立更深思熟慮的自然反應——這個神經可塑性歷程無法由AI代勞',
			'閱讀教學被指出「難以教導、難以長期維持，且無法依賴任何單一政策轉向」，顯示系統性、長期投入不可或缺，速效政策無法解決結構問題',
		],
		quote: 'They are using generative A.I. to write before they learn how to write. They are reading ChatGPT summaries of a book before they have ever read a book.',
		quote_attribution: '教育部落格 larryferlazzo.edublogs.org, 2026-05-03',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/05/03/sentences-of-the-week-18/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '家長社區視角：數千名紐約家長連署要求兩年AI暫緩，認為學生必須先建立寫作與閱讀基礎能力，AI提前介入剝奪認知發展的關鍵歷程，政策應優先保護學習過程而非追求工具效率。',
				sources: [
					{
						name: 'larryferlazzo.edublogs.org',
						url: 'https://larryferlazzo.edublogs.org/2026/05/03/sentences-of-the-week-18/',
					},
				],
			},
			{
				text: '媒體素養教育視角：問題不在AI本身好壞，而在「適齡、適人的使用方式」，教師角色應轉向主動教導學生辨識演算法操控與情緒激活機制，而非單純禁止或全面開放，這要求教師具備平台設計邏輯的實質知識。',
				sources: [
					{
						name: 'larryferlazzo.edublogs.org',
						url: 'https://larryferlazzo.edublogs.org/2026/05/03/sentences-of-the-week-18/',
					},
				],
			},
			{
				text: '作業設計視角：研究者Epstein主張焦點從「作業數量」轉向「作業品質」，暗示教師可透過任務設計主動防範AI外包——讓反思、辯論、實地觀察成為評量核心，使AI代寫在結構上失去意義，而非依賴榮譽制度或事後查核。',
				sources: [
					{
						name: 'larryferlazzo.edublogs.org',
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
		title: '幼齡喪父率與教育衝擊：美國喬治亞州世代研究',
		short_summary: '美國《JAMA Pediatrics》2026年5月刊登一項喬治亞州世代研究，追蹤2017至2022年間5歲以下幼童父親死亡的發生率、死因分布與後續影響。研究採行政資料連結方法，以出生登記×死亡登記配對，系統性量化幼兒期父喪的規模，並分析意外、疾病、暴力等各類死因的相對比重，填補既有文獻多聚焦母喪的空缺。

父親在幼兒期死亡不僅是家庭悲劇，更直接衝擊兒童認知發展、情緒調節與教育軌跡。幼齡喪父兒童面臨家庭經濟驟降、主要照顧者心理壓力升高的雙重風險，這兩項因素已被多項縱貫研究連結至日後學業表現下滑與行為問題增加，使此議題具有明確的教育政策意涵。研究期間（2017–2022）橫跨COVID-19大流行，超額死亡可能使父喪率短暫升高，為解讀數字時需留意的背景因素。

對台灣高中教師的啟示：台灣現行《學生輔導法》雖規定國高中配置專任輔導教師，但針對幼年喪親背景的學生並無主動篩查義務，仍依賴教師自行辨識。實務上，教師可在開學初家庭背景調查中主動詢問親喪經歷，對行為突發或成績驟降的學生，應優先詢問家庭近況而非直接懲處。課程設計應避免「父親節作業」等預設雙親家庭的活動強化傷痛。遇需轉介個案，可連結張老師基金會、學校社工或輔導室，教師扮演「第一線辨識者」而非單獨承擔陪伴責任。美國The Dougy Center等機構提供6至12週結構化同儕支持課程，研究顯示可顯著降低喪親兒童悲傷症狀分數，可作為台灣校園喪親輔導課程引進的參考模板。',
		emoji: '👨‍👧',
		did_you_know: '此研究選定喬治亞州作為場域，因該州同時具備完整的出生登記、死亡登記與人口普查連結資料庫，能逐一對應2017至2022年間每位父親的死亡事件與其子女當時年齡。研究聚焦「5歲以下」這一發展敏感期，因為依附關係在此階段尚在形成，父喪對長期心理健康的衝擊比學齡後父喪更為深遠。注意：本研究為觀察性世代研究，不宜直接推論因果。',
		talking_points: [
			'證據類型：回溯性觀察世代研究（retrospective cohort），使用喬治亞州2017–2022年出生登記×死亡登記行政資料連結，追蹤標的為子女年齡5歲以下時發生的父親死亡事件',
			'喬治亞州人口約1,100萬，黑人人口佔約33%，研究結果可能反映美國南部特有的種族健康不平等格局，若父喪率存在種族差異，直接指向結構性不公平如何複製教育劣勢',
			'父親死亡原因分類是核心變項，研究設計通常區分「意外／外傷」（車禍、槍傷）、「慢性病」與「藥物濫用過量」三大類，各類比重決定預防策略的優先順序（職安強化 vs. 男性慢病篩檢 vs. 藥物治療擴及）',
			'研究期間橫跨COVID-19大流行（2020–2022），疫情超額死亡（excess mortality）可能使特定年份父喪率短暫升高，研究是否控制此變數將影響六年趨勢線的可比性',
			'多項縱貫研究已記錄幼年喪父與日後內化問題（焦慮、憂鬱）及外化問題（攻擊行為）的關聯，且效應在低社經家庭中更顯著，顯示支持資源的覆蓋不均是擴大不平等的機制',
			'台灣《學生輔導法》（2014年施行）規定每校至少1名專任輔導教師，但喪親背景學生的主動篩查並非法定義務；對照美國各州已有喪親學生登錄制度，台灣在系統性追蹤上存在明顯缺口',
			'美國The Dougy Center等機構提供6至12週結構化同儕喪親支持課程，研究顯示完成課程者悲傷症狀分數顯著下降，此模型可作為台灣輔導中心引進「喪親同儕支持小團體」的實作參考',
		],
		quote: 'This cohort study examines the rates, causes, and implications of the death of fathers of children 5 years or younger in the state of Georgia from 2017 to 2022.',
		quote_attribution: 'JAMA Pediatrics, 2026-05-04',
		quote_source_url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848572',
		quote_source_domain: 'jamanetwork.com',
		perspectives: [
			{
				text: '公共衛生角度：研究重心在辨識哪類死因（意外、暴力、慢性病）造成最多幼齡父親死亡，以利制定上游預防策略，如強化高風險職業安全規範、擴大30至40歲男性心血管與藥物濫用篩檢覆蓋率。此角度聚焦「避免父親死亡」，優先於事後兒童支持。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848572',
					},
				],
			},
			{
				text: '兒童發展與教育角度：即便個別死亡難以完全預防，政策重點應轉向「喪父後的學校支持系統」：主動篩查機制、家庭社工介入、同儕喪親課程。此角度視教育體系為最可及的早期介入場域，認為學校輔導的投資報酬率高於純醫療預防。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848572',
					},
				],
			},
			{
				text: '社會公平角度：若研究呈現父喪率的種族或社經梯度（如黑人或低收入幼童父喪率顯著偏高），則凸顯結構性不平等如何透過父親早逝進一步複製世代教育劣勢，政策回應必須同時處理上游社會決定因素，而非僅提供下游個別輔導服務。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848572',
					},
				],
			},
		],
		timeline: [
			{
				date: '2017-01-01',
				date_iso: '2017-01-01',
				content: '喬治亞州世代研究追蹤起始年份',
			},
			{
				date: '2020-03-01',
				date_iso: '2020-03-01',
				content: 'COVID-19大流行開始，研究期間內超額死亡可能影響父喪率統計',
			},
			{
				date: '2022-12-31',
				date_iso: '2022-12-31',
				content: '研究追蹤結束年份',
			},
			{
				date: '2026-05-04',
				date_iso: '2026-05-04',
				content: '研究結果發表於《JAMA Pediatrics》',
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
		id: 'taiwanEduPolicy-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策',
		title: 'AI 術後住院預測整合排程：決策對齊評估框架',
		short_summary: '《JAMA Pediatrics》刊出一篇致編者信，評論 Berry 等人的研究：他們將機器學習術後住院天數（LOS）預測模型嵌入擇期手術排程，透過前瞻性日曆工具輔助臨床決策，驗證模型是否真正改善排程品質，而非僅提升預測精準度指標。

此研究的核心主張是：高風險專業場景中，AI 工具須以「決策對齊評估（Decision-Aligned Evaluation）」框架檢驗——評估標準應直接對應決策品質（如排程效率、資源使用），而非只看 RMSE 等統計指標。這項方法論挑戰對醫療以外的 AI 應用，包括教育領域的學習分析平台，同樣具有參照意義。

對台灣高中教師的啟示：台灣課綱 AI 素養單元多著重模型準確率概念，本研究提供一個具血肉的跨域討論素材。教師可設計議題：「一套學習預警系統的 AUC 很高，但教師介入行動有沒有變多、學生成效有沒有提升？」引導學生理解「預測準」不等於「決策好」。可操作做法包括：以本文醫療排程案例為引，讓學生對比教育場景（如選課推薦、補救教學分組），討論若評估指標不同（降低落後率 vs. 縮短補救時間），AI 工具設計應如何調整。這與 108 課綱資訊科技領域「演算法與問題解決」的素養目標直接呼應，亦可作為跨科統整（健康與體育／資訊）的專題材料。注意：本研究為觀察性研究（致編者信形式），不宜直接推論因果。',
		emoji: '🏥',
		did_you_know: 'Berry 等人的原始研究採用「前瞻性日曆工具」將 LOS 預測直接嵌入排程介面，使外科醫師在安排手術時即可看到預測住院天數——這是「決策時間點嵌入（decision-time integration）」設計，而非事後報表分析。此設計細節說明：AI 模型與使用者決策流程的介面整合方式，直接決定模型是否能產生實際行為改變，這是純粹提升預測精準度所無法取代的。',
		talking_points: [
			'【證據類型】觀察性研究（致編者信／評論，非 RCT），評論對象為 Berry 等人發表於 JAMA Pediatrics 的機器學習排程整合研究，發表日期 2026-05-04',
			'Berry 等人將 ML 術後 LOS 預測模型嵌入前瞻性手術日曆工具，使外科排程人員在決策當下即可取用模型輸出，而非事後分析',
			'本文提出「決策對齊評估（Decision-Aligned Evaluation）」框架，主張 AI 醫療工具的評估指標應直接對應排程決策品質（如病床使用率、手術取消率），不能只報 RMSE 或 MAE',
			'此評估框架挑戰現行 AI 工具開發慣例：模型在測試集表現優異，不代表嵌入工作流後能改善真實決策，因此需要前瞻性臨床設計驗證',
			'跨域應用潛力：同樣的「決策對齊」思路已被教育資料採礦領域（如學習預警系統 LAP）討論，但台灣中學場域尚無系統性採用此框架評估 AI 教學輔助工具',
			'JAMA Pediatrics 為兒科領域頂級期刊（Clarivate IF > 20），此類方法論討論在醫療 AI 界具有政策影響力，相關評估標準可能被醫院 IT 採購規範引用',
		],
		quote: 'integrating a machine-learning postoperative length-of-stay model into elective surgical scheduling, through a prospective calendar tool',
		quote_attribution: 'JAMA Pediatrics, 2026-05-04',
		quote_source_url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848571',
		quote_source_domain: 'jamanetwork.com',
		perspectives: [
			{
				text: '支持「決策對齊評估」的立場認為：現行 AI 工具多以統計精準度（如 AUC、RMSE）作為上線門檻，但精準度高的模型若未被使用者採納、或未改變決策行為，對臨床（或教育）結果毫無貢獻。前瞻性嵌入設計才是驗證模型真實效益的黃金標準。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848571',
					},
				],
			},
			{
				text: '另一角度則指出：要求所有 AI 工具都進行「決策對齊」的前瞻性評估，在資源有限的中小型醫院（或學校）中成本極高，可能反而阻礙 AI 輔助工具的推廣。如何在嚴謹評估與可及性之間取得平衡，是政策制定者面臨的真實張力。',
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
		title: '自閉症 vs 其他發展障礙青少年日常生活技能輪廓比較',
		short_summary: '刊登於《JAMA Pediatrics》的觀察性比較研究，以三組青少年（自閉症、其他發展障礙、一般發展）為對象，系統比較其日常生活技能（DLS）表現輪廓，並追溯早期幼年因子對成年後獨立生活能力的預測力，為特殊教育轉銜規劃提供跨診斷類別的實證依據。

自閉症與其他發展障礙族群的 DLS 需求長期被混為一談，導致特教介入設計失準。本研究將兩者分開比較，揭示不同診斷類別在自我照顧、居家管理、社區參與等技能向度上的輪廓差異，強調幼年評估資料對長期獨立能力的預測意義，從而挑戰「以診斷標籤替代個別化目標」的慣性做法。

對台灣高中特教教師的啟示：台灣《特殊教育法》要求高中 IEP 含轉銜計畫，但實務上教師常面臨「目標太籠統、進步難量化」的困境。本研究提供三項可操作的參照框架：（1）在 IEP 起點行為分析中，應區分自閉症與智能障礙學生的 DLS 基線，而非共用同一份評量量表；（2）學生幼年期（學前、低年級）的語言發展、適應行為紀錄，在高中轉銜規劃中具長期預測效度，建議教師主動調閱並納入分析；（3）社區參與技能（如大眾運輸、金錢管理）宜從高一即系統安排實境演練，而非集中於高三畢業前。需注意：原研究樣本背景（國家、服務體系、文化脈絡）未知，台灣城鄉特教資源落差顯著，直接移植結論時需謹慎評估本地適用性。',
		emoji: '🧩',
		did_you_know: '本研究同時追蹤「早期幼年預測因子」對青少年獨立生活能力的長期影響，意味著學前及小學低年級的評估資料並非只有當下診斷意義，而是對 12-18 歲的日常功能表現具有跨越十年以上的預測效度。這項發現對台灣學前特教鑑定與早療資料的跨階段傳遞制度提出了間接挑戰。注意：本研究為觀察性比較研究，不宜直接推論因果。',
		talking_points: [
			'【證據類型】觀察性跨組比較研究（非 RCT），比較自閉症、其他發展障礙、一般青少年三組 DLS 表現，發表於高影響力期刊《JAMA Pediatrics》（2026-05-04）',
			'研究聚焦日常生活技能三大核心面向：自我照顧（盥洗、飲食、穿著）、居家管理、社區參與，這三項正是台灣高中特教轉銜課程的法定目標領域',
			'研究識別「早期幼年預測因子」，顯示幼兒期評估資料（語言發展、適應行為）對青少年獨立生活能力具長期預測效度，支持跨教育階段資料傳遞的必要性',
			'自閉症青少年的 DLS 輪廓在研究中與其他發展障礙組別分開分析，打破特教實務中「發展障礙一籃子」混用評量工具的做法',
			'研究結果可作為台灣 IEP 轉銜目標設定的分類參照：依診斷類別（自閉症 vs 智能障礙 vs 其他 DD）調整 DLS 訓練的優先順序與評量標準',
			'與一般青少年族群的比較資料，可協助特教教師向家長說明「功能性技能落差」的具體幅度，強化轉銜計畫的溝通說服力',
		],
		quote: 'identifies early childhood predictors of independent daily living skills in adolescents with autism and developmental disabilities',
		quote_attribution: 'JAMA Pediatrics, 2026-05-04',
		quote_source_url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848568',
		quote_source_domain: 'jamanetwork.com',
		perspectives: [
			{
				text: '從臨床早療角度，研究強調幼年期介入與評估的長期效益：早期識別預測因子意味著學前特教與早療資源的投入具有跨越十年的可量化回報，支持「早療優先」的資源分配邏輯。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848568',
					},
				],
			},
			{
				text: '從特教政策角度，研究揭示自閉症與其他發展障礙的 DLS 輪廓差異，挑戰現行特教課程綱要以「障礙類別」粗分教學目標的做法，隱含對更細緻、功能本位個別化課程設計的呼籲。',
				sources: [
					{
						name: 'JAMA Pediatrics',
						url: 'https://jamanetwork.com/journals/jamapediatrics/fullarticle/2848568',
					},
				],
			},
			{
				text: '從障礙權益角度，「獨立生活技能」的研究框架預設以一般發展青少年為比較基準，可能強化功能缺損論述；部分障礙研究社群主張轉銜目標應以「自我決策與支持性獨立」取代「無協助獨立」作為衡量標準。',
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
