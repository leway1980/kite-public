import type { Domain, Story } from '$lib/types';

const AI_NEWS_UUID = 'c0000001-0000-4000-8000-000000000001';
const AI_EDU_UUID = 'c0000002-0000-4000-8000-000000000002';
const TW_EDU_UUID = 'c0000003-0000-4000-8000-000000000003';
const AI_CLASSROOM_UUID = 'c0000004-0000-4000-8000-000000000004';
const AI_APPLICATIONS_UUID = 'c0000005-0000-4000-8000-000000000005';
const EDU_RESEARCH_UUID = 'c0000006-0000-4000-8000-000000000006';

// ─── Stories synthesized 2026-05-08 by pipeline (auto-generated) ───

const aiNewsStories: Story[] = [
	{
		id: 'aiNews-1',
		cluster_number: 1,
		unique_domains: 2,
		number_of_titles: 2,
		category: 'AI 動態',
		title: '5G智慧消防落地高雄　鎖定日本輸出',
		short_summary: '台灣大與高雄市政府消防局宣布，5G智慧消防輔助救援系統已於今年初導入高雄火場救援，主軸是5G專網、室內定位、即時建模。過去需人工回報、逐一確認現場的流程，改以系統在約2分鐘內完成火場掌握與部署，平均救災效率提升約50%。\n這代表台灣電信端從「通訊供應者」轉向「公共安全與產業服務整合者」：系統整合LiDAR、點雲、IMU與AI，定位誤差約120公分，並掛接生命徵象與氧氣瓶監測警示；今年還以「台灣電信業者唯一入圍」身份上榜MWC GLOMO Awards緊急服務類，意味其已具備可複製與跨域擴散條件。\n對台灣高中教師啟示：可將「2分鐘即時建模」與「過往人工回報」做成對照課堂，讓學生用高雄案例分析訊息延遲對決策的影響；以120公分定位誤差與5G專網穩定度作為資料品質判讀題，設計消防、智慧製造或能源巡檢情境，讓學生練習把感測資料轉成行動指令。也能討論日本/東南亞輸出為何受在地系統商、採購流程牽制，讓學生理解AI導入不是只看模型，而是制度與流程的整合。',
		emoji: '🚒',
		did_you_know: '系統不只做定位與地圖，而是將生命警示納入作戰規範：當消防人員長時間未移動、生命徵象異常或訊號中斷，會直接提醒安全官啟動RIT。系統已在高雄百貨、醫院、科技廠房與住宅場域測試，且導入了120公分量級的室內定位精度。',
		talking_points: [
			'2026年5月8日宣布「今年初」起正式投入高雄實戰，將5G智慧消防輔助救援系統從測試轉為火場任務。',
			'全流程指揮縮短到約2分鐘內完成火場資訊掌握與救援部署，較過去人工回報與逐一確認流程節省大量前段時間。',
			'平均救災效率提升約50%，為成效量化提供可直接比較的關鍵指標。',
			'核心技術鏈接LiDAR、點雲計算、IMU、AI定位，室內定位誤差控制在約120公分。',
			'安全機制包含心跳、氧氣瓶殘量監控，若偵測長時間未移動、生命徵象異常或訊號中斷會自動通知安全官並啟動RIT。',
			'導入場域除火場外含高雄大型百貨、醫院、科技廠房、住宅區，用於驗證通訊與定位在不同建築環境下的穩定性。',
			'同日與日本Nirik簽署MOU，對外目標是今年內日本第一個消防案並結合在地系統整合商推進輸出。',
		],
		quote: '該系統已於今年初正式投入高雄消防局火場救援任務，透過 5G 專網、室內定位與即時建模技術，協助指揮中心快速掌握火場內部狀況。',
		quote_attribution: '科技新報, 2026-05-08',
		quote_source_url: 'https://technews.tw/2026/05/08/taiwan-mobile-smart-fire-protection/',
		quote_source_domain: 'technews.tw',
		perspectives: [
			{
				text: '科技新報版面偏重可量測效益，將重點放在2分鐘掌握火場、50%救災效率提升與120公分定位精度，對教師可直接轉化為可教學、可量化的案例。',
				sources: [
					{
						name: 'technews.tw',
						url: 'https://technews.tw/2026/05/08/taiwan-mobile-smart-fire-protection/',
					},
				],
			},
			{
				text: 'finance.technews.tw則將同一事件放在輸出敘事中解讀，著重Nirik合作、跨國橋接與N台系統國際商務路徑，強調台日市場與未來東南亞拓展，而非僅是地方救援成效。',
				sources: [
					{
						name: 'finance.technews.tw',
						url: 'https://finance.technews.tw/2026/05/08/taiwan-mobile-smart-fire-protection-japan/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-08',
				date_iso: '2026-05-08',
				content: '台灣大與高雄市政府消防局共同公布5G智慧消防輔助救援系統導入成果與實戰效益，顯示系統已於高雄投入實際救災。',
			},
			{
				date: '2026-05-08',
				date_iso: '2026-05-08',
				content: '台灣大宣布與日本Nirik簽署MOU，啟動5G智慧消防系統輸出日本的合作與商務推進。',
			},
		],
		articles: [
			{
				title: '5G 智慧消防應用出海，台灣大與日本 Nirik 簽署 MOU',
				link: 'https://finance.technews.tw/2026/05/08/taiwan-mobile-smart-fire-protection-japan/',
				domain: 'finance.technews.tw',
				date: '2026-05-08',
			},
			{
				title: '台灣大智慧消防系統落地高雄，火場定位、救援效率提升 50%',
				link: 'https://technews.tw/2026/05/08/taiwan-mobile-smart-fire-protection/',
				domain: 'technews.tw',
				date: '2026-05-08',
			},
		],
		domains: [
			{ name: 'finance.technews.tw' },
			{ name: 'technews.tw' },
		],
	},
	{
		id: 'aiNews-2',
		cluster_number: 2,
		unique_domains: 2,
		number_of_titles: 2,
		category: 'AI 動態',
		title: 'ChatGPT Trusted Contact 上線：成人可設安心聯絡人',
		short_summary: 'OpenAI 於 2026 年 5 月 7 日推出 ChatGPT「Trusted Contact」，18 歲以上使用者（韓國為 19 歲）可指定一位成年人為信任聯絡人。若偵測到對話可能涉及自傷或自殺高風險，系統先提醒使用者，再由小組人工複核是否通知聯絡人。\n這是將原本僅提供青少年家長通知的做法，延伸到成年用戶的版本。聯絡人必須在七天內接受邀請、未通過時可改選，通報也限制為 email、簡訊或應用內提醒，且不外流完整聊天內容。對業界來說，這是一個將危機治理從關鍵字阻擋，轉向「社會連結＋人工核證」的新設計。\n對台灣高中教師，這可直接轉為危機素養教材：課前先定義危險訊號、預先擬定求助開場句與轉介路徑，模擬 AI 警示後由班導、輔導室、家長接力處理的流程。導入時須先處理學生隱私同意、未成年授權與家校保密規範，避免把美式 18 歲門檻直接搬到台灣使用。',
		emoji: '🛡️',
		did_you_know: '一個具體實作細節是，通報並非一味「自動推播」：先由系統做自我傷害高風險判斷，再經小組人工審核後才發送警示；聯絡人也必須先接受邀請且期限為一週，且可被使用者移除或更換，降低了權限固著與隱私外流風險。',
		talking_points: [
			'OpenAI 在 2026-05-07 正式推出 Trusted Contact，將安全功能從青少年場景延伸到成人。',
			'功能適用條件為 18 歲以上，僅韓國例外設定為 19 歲以上。',
			'每位使用者僅可指定一位成年 Trusted Contact，對方必須接受邀請才生效，且邀請有 7 天時限。',
			'啟動流程以「偵測疑似自傷/自殺」為條件，非一般情緒表達就會觸發。',
			'自動判斷後需經「小型專責團隊」人工複核，才會以 email、簡訊或 ChatGPT 站內通知發送警示。',
			'通報內容不會外露完整聊天紀錄，使用者可自行移除或編輯聯絡人；聯絡人若拒絕可再重選。',
			'The Verge 提到 OpenAI 此次做法承接早前 9 月份的青少年安全通知，並與 Meta 在 Instagram 對重複搜尋自傷主題通知父母的模式形成類比。',
		],
		quote: 'Trusted Contact is designed to offer another layer of support alongside the localized helplines already available in ChatGPT.',
		quote_attribution: 'OpenAI，2026-05-07',
		quote_source_url: 'https://openai.com/index/introducing-trusted-contact-in-chatgpt',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: 'OpenAI 將此功能框定為「危機時的第二道支援線」，核心是保留自治權：先提示再複核、可否認可停止，目標是把緊急介入納入既有求助流程而非替代醫療與熱線服務。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/introducing-trusted-contact-in-chatgpt',
					},
				],
			},
			{
				text: 'The Verge 的報導則把重點放在治理脈絡，指出該功能延續先前因青少年自傷事件導入家長安全通知的軌跡，並把它放在 Meta 類似保護機制旁邊比較，強調平台正在以「機制化通報」回應倫理壓力。',
				sources: [
					{
						name: 'The Verge',
						url: 'https://www.theverge.com/ai-artificial-intelligence/925874/chatgpt-trusted-contact-emergency-self-harm-notification',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-07',
				date_iso: '2026-05-07',
				content: 'OpenAI 對外宣布推出 Trusted Contact，開放成人使用者在 ChatGPT 設定中新增信任聯絡人。',
			},
			{
				date: '2026-05-07',
				date_iso: '2026-05-07',
				content: 'The Verge 同日報導此功能，並補充它與先前九月版青少年安全通知及 Meta Instagram 自傷預警機制的連動脈絡。',
			},
		],
		articles: [
			{
				title: 'ChatGPT’s ‘Trusted Contact’ will alert loved ones of safety concerns',
				link: 'https://www.theverge.com/ai-artificial-intelligence/925874/chatgpt-trusted-contact-emergency-self-harm-notification',
				domain: 'theverge.com',
				date: '2026-05-07',
			},
			{
				title: 'Introducing Trusted Contact in ChatGPT',
				link: 'https://openai.com/index/introducing-trusted-contact-in-chatgpt',
				domain: 'openai.com',
				date: '2026-05-07',
			},
		],
		domains: [
			{ name: 'theverge.com' },
			{ name: 'openai.com' },
		],
	},
	{
		id: 'aiNews-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'GPT-5.5 推出 Trusted Access for Cyber 強化關鍵防線',
		short_summary: 'OpenAI 在 2026-05-07 發布 GPT-5.5-Cyber 限量預覽，將對象鎖定在保護關鍵基礎設施的防禦者。它說明 GPT-5.5 與 GPT-5.5-Cyber 會依任務情境分流，前者給大多數防禦團隊、後者給高風險專責流程；前一版 GPT-5.5 兩週前已上線，這次補上了更受控的 cyber 版本，並透過 Trusted Access for Cyber（TAC）調整可接受請求邊界。\n\n為何重要？OpenAI 不是只把模型能力放大，而是先調整治理：先驗證與授權再放行，讓合法防禦者可降低拒絕率做漏洞盤點、惡意碼分析、逆向工程、偵測工程與補丁驗證，同時持續封鎖 credential theft、stealth、persistence 等高風險行為。它提到已與美國聯邦、州政府及主要商業單位討論，反映業界已從「模型效能」進入「可控能力分層」的基礎設施時代。\n\n對台灣高中教師的啟示是可落地的：第一步可在資訊或網路安全課做「分權實作」情境，把學生分成普通帳號與高權限帳號，對同一安全事件輸入做差異化對照；第二步結合 2026-06-01 起的更高帳號保護節奏，建立學校帳號的防釣魚、雙因素與最小權限清單；第三步引導學生設計校內資安事件清單（漏洞辨識、通報、補丁驗證）並記錄哪些查詢應該被系統封鎖，讓資安倫理與流程意識在高中階段先被訓練，而不是只教會工具本身。',
		emoji: '🛡️',
		did_you_know: '文章明確指出，TAC 對已核可防禦者放寬的是「分類器拒絕」層級，而非全部解除限制：仍會阻擋第三方系統剝奪、憑證竊取、潛伏持久化、惡意碼部署等高害行為。也就是說，防守端拿到的是條件化權限，而不是無條件權限。',
		talking_points: [
			'2026-05-07：OpenAI 發布 GPT-5.5-Cyber limited preview，目標對象限定為負責關鍵基礎設施防護者。',
			'距離發文僅 2 週前，OpenAI 已先上線 GPT-5.5，現在用 TAC 為資安場景補上高規格版本。',
			'TAC 以身分與信任為核心：通過驗證的防禦者可在合法流程中降低分類器拒絕率，反而讓防禦效率更高。',
			'可授權的核心工作包含 vulnerability identification/triage、malware analysis、binary reverse engineering、detection engineering、patch validation，且有明確任務語意。',
			'同時保留硬式阻擋：credential theft、stealth、persistence、malware deployment、第三方系統利用等請求仍直接封鎖。',
			'從 2026-06-01 起，存取最 permissive 的 cyber 模型者需啟用 Advanced Account Security，否則無法享有最高權限。',
			'OpenAI 指出曾與美國聯邦與州政府及主要商業安全單位討論，將 TAC 設計與公共安全與企業作業需求同步。',
		],
		quote: 'Trusted Access for Cyber is an identity and trust-based framework designed to help ensure enhanced cyber capabilities are being placed in the right hands.',
		quote_attribution: 'OpenAI, 2026-05-07',
		quote_source_url: 'https://openai.com/index/gpt-5-5-with-trusted-access-for-cyber',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: 'OpenAI 立場偏向工具治理先行。它將 TAC 當作產品基底的一部分，而非附屬條款，核心訊息是能力擴充必須先完成身分、信任與稽核設計，否則不放大權限。',
				sources: [
					{
						name: 'OpenAI 官方部落格',
						url: 'https://openai.com/index/gpt-5-5-with-trusted-access-for-cyber',
					},
				],
			},
			{
				text: '從公共安全與資安實務端看，這是折衷方案：既要維持漏洞分析與惡意軟體研判速度，又要避免把模型直接給未控權限。條件化授權比單純封鎖更接近 SOC 可執行的模型。 ',
				sources: [
					{
						name: 'OpenAI 官方部落格（安全政策轉述）',
						url: 'https://openai.com/index/gpt-5-5-with-trusted-access-for-cyber',
					},
				],
			},
			{
				text: '面向教育，這不是單純的新產品訊息，而是教材素材：同一模型在不同授權等級下輸出不同，能讓高中生理解「AI 安全」不只是辨識錯誤資訊，更是制度設計與責任分工的問題。',
				sources: [
					{
						name: 'OpenAI 官方部落格',
						url: 'https://openai.com/index/gpt-5-5-with-trusted-access-for-cyber',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-07',
				date_iso: '2026-05-07',
				content: 'OpenAI 發布 GPT-5.5-Cyber 限量預覽，啟用 Trusted Access for Cyber 服務關鍵基礎設施防禦者。',
			},
			{
				date: '2026-06-01',
				date_iso: '2026-06-01',
				content: '進一步要求存取最敏感 cyber 模型的個別成員，必須啟用 Advanced Account Security（釣魚防護）作為進階授權條件。',
			},
		],
		articles: [
			{
				title: 'Scaling Trusted Access for Cyber with GPT-5.5 and GPT-5.5-Cyber',
				link: 'https://openai.com/index/gpt-5-5-with-trusted-access-for-cyber',
				domain: 'openai.com',
				date: '2026-05-07',
			},
		],
		domains: [
			{ name: 'openai.com' },
		],
	},
	{
		id: 'aiNews-4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 動態',
		title: 'Parloa 推出可直接上線的語音 AI 客服代理',
		short_summary: 'OpenAI 於 2026-05-07 公告，柏林公司 Parloa 將客服自動化改為可對話 AI 服務代理。其 AMP 平台以 GPT-5.4 為核心，企業可用自然語言定義代理角色、指令、工具與邊界，不必寫程式，並透過「模擬→評估→上線」流程持續驗證。\n其原因在於生產可用性：Parloa 指出密碼重設、保單詢問等重複通話可先由代理處理，並在部署前大量回放真實情境，測試延遲、邊界案例與失敗分支，重點是讓模型在實際對話可穩定執行，而非只看模型新穎。\n台灣高中老師可直接借鏡：先聚焦 1 個高頻校務情境（請假、分班、課程衝堂、成績申訴），把每段對話拆成可控工具清單與回覆邊界，讓行政人員與任課老師先做模擬腳本。可採每週兩次測試，先由兩組模型式樣腳本模擬師生問答，再以規則檢核＋LLM 評分比對是否遺漏資訊；最終再開放人工接軌，避免少數案例誤答影響學生權益。',
		emoji: '☎️',
		did_you_know: 'AMP 的驗證流程不是只看單次對答正確率，而是先用「一模型當來電者、一模型當客服代理」的雙模型模擬，再加 deterministic checks 與 LLM-as-a-judge 打分，同步確認指令遵循、工具調用與任務完成，偏向生產導向的品質保證。',
		talking_points: [
			'Parloa 從早期 rule-based voice agent 進化為 AMP，並以 GPT-5.4 作為核心模型之一，主軸轉向可擴充的服務代理。',
			'設計端改成由業務專家用自然語言設定角色、行為指令、可用工具與邊界，取代傳統硬式意圖樹與流程程式。',
			'平台要求先模擬再上線：在上線前以兩組模型交互對話，先測試 caller-to-agent 的行為一致性與穩定性。',
			'評估端加入 deterministic checks 與 LLM-as-a-judge 兩層評分機制，重點檢核「是否照規格回應、是否正確調用 API、是否完成任務」。',
			'Parloa 強調生產場景中的延遲與邊界條件管理，並由 orchestration layer 同步處理 routing 與多步驟請求。',
			'文章提到「模型只有在生產可用才有意義」，核心目標是減少客服真實工單壓力與一致性風險，而非只優化單次測試指標。',
			'AMP 目標客群是 SME 與非技術人員，使不同事業部門可自行連接內部系統、快速迭代對話內容。',
		],
		quote: 'The models only matter if they work in production. We work closely with OpenAI on how to make the models fast and reliable enough for real-time conversations.',
		quote_attribution: 'OpenAI, 2026-05-07',
		quote_source_url: 'https://openai.com/index/parloa',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: 'OpenAI 走的是「上線穩定優先」路線。文本聚焦真實通話場景中的延遲、邊界情境與失敗處理，這和一般只談模型能力的 AI 公關敘事形成明顯差異。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/parloa',
					},
				],
			},
			{
				text: 'Parloa 強調非技術人員可建代理，語義上是將客服治理民主化：模型不是替代工程，而是讓主管與業務直接控制行為規格，風險在於規則設計與權限邊界要同等嚴格。',
				sources: [
					{
						name: 'Parloa',
						url: 'https://openai.com/index/parloa',
					},
				],
			},
		],
		articles: [
			{
				title: 'Parloa builds service agents customers want to talk to',
				link: 'https://openai.com/index/parloa',
				domain: 'openai.com',
				date: '2026-05-07',
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
		title: 'OpenAI 三大實時語音模型：可邊聽邊做事',
		short_summary: 'OpenAI 在 2026-05-07 發表 API 三款新語音模型：GPT-Realtime-2、GPT-Realtime-Translate、GPT-Realtime-Whisper。GPT-Realtime-2 被定位有 GPT-5 類推理能力，GPT-Realtime-Translate 可把 70+ 輸入語言翻成 13 種輸出語言，GPT-Realtime-Whisper 則做即時串流轉錄，三者直接放在 API 供開發者接工具與任務流，目標是讓語音對話可同時理解、回應並執行。\n\n文中主張語音體驗不只改善口感，而是把語音轉向「可動的工作流程」。透過 voice-to-action、systems-to-voice、voice-to-voice 三種模式，並舉 Zillow 找屋、機場航班延誤、訂單號回覆等場景，顯示語音正在從單純問答走向可調度任務、導覽流程、維持情境感的服務層。這使競爭格局中，供應商將不只賣 ASR 或 TTS，而是賣可持續對話的行動能力。\n\n對台灣高中教師可直接落地三件事：第一，用 GPT-Realtime-2 設 30 分鐘情境練習，例如請學生下 2 位素食、1 位不吃菇、廚房空間有限的條件，檢驗其能否產出可執行步驟；第二，在英語/多語課將學生口語輸入轉譯成中文回饋，縮短聽懂與反應差距；第三，課堂討論用 GPT-Realtime-Whisper 即時轉錄，保留時間戳做後續批改與自我修正。導入前先規劃學生授權、資料留存天數與校內網路頻寬，避免錄音內容外流及未成年人隱私問題。',
		emoji: '🎙️',
		did_you_know: '新聞中給了可直接驗證的規格與流程：翻譯模型可在同場景維持與說話者速度接近的同步，並且明確支援 70+ 輸入語言、13 種輸出語言；同時 GPT-Realtime-2 首度被放到能處理較複雜對話需求的位置。官方示例也刻意加入 30 分鐘與多條件輸入，顯示模型測試不只看翻譯正確率，更看情境推理與決策穩定度。',
		talking_points: [
			'OpenAI 同步推出三款模型：GPT-Realtime-2、GPT-Realtime-Translate、GPT-Realtime-Whisper，均為即時語音工作流設計。',
			'GPT-Realtime-2 被定位為第一個具有 GPT-5 類推理能力的語音模型，主攻複雜對話中的邏輯推進。',
			'GPT-Realtime-Translate 公開規格為 70+ 輸入語言、13 個輸出語言，並可即時追上說話節奏。',
			'開發者使用案例採用 voice-to-action：如 Zillow 在 1 次語音指令內同時處理 BuyAbility、避開忙碌路線並安排週六時段看屋。',
			'systems-to-voice 案例示範航班延誤情境，系統可同時回報改變的登機門、重新步行路線與行李轉運狀態。',
			'測試指令包含 30 分鐘晚餐規畫、2 位素食、1 位厭惡菇菇、廚房偏小等限制條件，檢驗模型在多條件約束下仍能維持行動建議。',
			'另有 Orbit-742Q 訂單號重述、團隊里程碑表達與路途問答等腳本，可直接作為 2 分鐘工具測試清單。',
		],
		quote: 'Together, the models we are launching move realtime audio from simple call-and-response toward voice interfaces that can actually do work: listen, reason, translate, transcribe, and take action as a conversation unfolds.',
		quote_attribution: 'OpenAI, 2026-05-07',
		quote_source_url: 'https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api',
		quote_source_domain: 'openai.com',
		perspectives: [
			{
				text: 'OpenAI 的立場偏平台工程路線，先用模型能力與 API 能力邊界建立信心，讓開發者快速決定是否能直接替換現有呼叫式流程。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api',
					},
				],
			},
			{
				text: '同一文本中也可見場景化推動邏輯：Zillow、航班、訂單回覆等案例把語音放進具體行動鏈，而非停留在客服查詢，顯示產品分化在流程整合能力。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api',
					},
				],
			},
			{
				text: '對教育端而言，文本未談隱私治理與師生同意流程，卻提供可立即改寫教材的結構；機構端必須補齊授權、錄音留存、敏感資訊遮罩，否則落地阻力可能高於技術難度。',
				sources: [
					{
						name: 'OpenAI',
						url: 'https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-07',
				date_iso: '2026-05-07',
				content: 'OpenAI 公布 GPT-Realtime-2、GPT-Realtime-Translate 與 GPT-Realtime-Whisper，並以 voice-to-action、systems-to-voice、voice-to-voice 三種模式定義即時語音產品方向。',
			},
		],
		articles: [
			{
				title: 'Advancing voice intelligence with new models in the API',
				link: 'https://openai.com/index/advancing-voice-intelligence-with-new-models-in-the-api',
				domain: 'openai.com',
				date: '2026-05-07',
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
		title: 'KodHau 用 PR 記憶降低 AI 改壞專案風險',
		short_summary: 'Product Hunt 於 2026-05-08 公開 KodHau（Senior Context for AI Agents），主張在 AI coding agent 寫第一行前先讀取團隊部落知識。原文指出它會把 GitHub PR 歷史、架構決策、審查評論、被否決方案整合進模型脈絡，並以超複雜的 dotnet/runtime 倉庫驗證可行性。這不是「更會寫 code」的工具，而是補齊「為何這樣寫」的缺口。\n為何重要：原文案例提到曾有 8 個月未解問題，先前嘗試過 200 行錯誤修法；有了歷史決策後可用 7 行做正確修補，並指出其中 4 年前的工程判斷。又在 2 分鐘可完成設定、支援 Cursor、Claude Code 等 MCP client，等同把知識管理直接放進開發流程，降低生產事故、縮短 debug 週期，也逼迫團隊把決策留痕跡。\n對台灣高中教師啟示是：可把這個概念改成「課堂專案上下文清單」的教學策略，不只交作業而是要求學生先看歷史決策再改碼。可安排 1 次 20 分鐘演示：對比 7 行正解與 200 行錯誤修法，讓學生學會查 PR 註解、提出變更原因與回溯依據。實作上要本機優先，避免學生作業與學校資料外流到外部服務，並在班級規範中加入「先列決策、後動手」的步驟。',
		emoji: '🧠',
		did_you_know: '原文給出可直接驗證的對照：對 .NET runtime 的舊問題，先前有 200 行作法被證明錯誤，後來在 KodHau 協助下改為 7 行即可修正；另有 4 年前工程師決策被當作關鍵依據，顯示 PR 上下文與被否決方案能顯著決定修正方向。',
		talking_points: [
			'KodHau 定位為 MCP server，目標是將 PR 歷史、設計決策、review comment、被否決做法導入 AI agent，避免只看「現有程式碼」而失去脈絡。',
			'案例引用了超大開源專案 dotnet/runtime，顯示工具不是只在小專案 demo，而是面向高複雜度 codebase 設計。',
			'文章提到某起 8 個月未解的 bug 曾有 200 行錯誤嘗試，之後用 KodHau 找到歷史決策後只用 7 行完成修補。',
			'作者描述 4 年前工程師的決策仍可重用，暗示歷史 PR 決策是可長期查詢的「組織智慧」而非即時短期知識。',
			'2 分鐘設定、支援 Cursor 與 Claude Code，代表導入成本低，對需要頻繁使用 AI 代理的研發流程可快速嵌入。',
			'強調「Your code never leaves your machine」與本機執行，對有資安與資料治理限制的團隊（含學校）更易導入。',
			'同一工具串連到 PR、架構與審查決策的思路，也可對應到課程設計，讓學生在程式改動前先建立「為何」而非只追求「如何」的能力。',
		],
		quote: 'Cursor with KodHau surfaced 3 PRs explaining exactly why that would break prod.',
		quote_attribution: 'Product Hunt, 2026-05-08',
		quote_source_url: 'https://www.producthunt.com/products/kodhau-senior-context-for-ai-agents',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '工具面向：這個主張聚焦在開發效率與事故預防，把知識圖譜化為可供 LLM 直接讀取的上下文，強調流程落地速度快（2 分鐘）與整合成本低。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/kodhau-senior-context-for-ai-agents',
					},
				],
			},
			{
				text: '治理面向：文本將「本機執行、代碼不外流」放進核心承諾，對政府補助學校、企業 IT 或醫療等高敏感場景有更實際意義，雖未直接論證，但形成安全優先的邏輯。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/kodhau-senior-context-for-ai-agents',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-08',
				date_iso: '2026-05-08',
				content: 'Product Hunt 上架 KodHau 新產品，並以 dotnet/runtime 修 bug 實例與 2 分鐘安裝流程說明其定位。',
			},
		],
		articles: [
			{
				title: 'KodHau',
				link: 'https://www.producthunt.com/products/kodhau-senior-context-for-ai-agents',
				domain: 'producthunt.com',
				date: '2026-05-08',
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
		title: 'Stetos.co：大規模對話聆聽與即時行動',
		short_summary: 'Stetos.co 在 Product Hunt 內推出，定位為「insight infrastructure」。產品可快速把 AI listening agent 部署到網站、產品、活動後流程、導覽與客戶發掘場景，支援語音與文字對話，並在對談中追問、依情境調整問題，將「成千上萬段」開放式回饋整理成主題、情緒、反對意見、需求與意圖；同場景即可匯出可執行資料，將碎片回饋集中化。\n\n創辦人指出，企業常喊著 customer-led 或 community-led，但實務上回饋通常散落問卷、表單、工單、銷售通話、訪談逐字稿與社群留言，難以形成完整洞見。Stetos.co 的做法是以單一會談層面把這些訊號回收，並在會談結束後可直接觸發 reward、連結、下一步行動，讓洞察快速進入產品/服務決策，並可持續 24/7 運作。\n\n對台灣高中教師而言，可直接複製「短談話＋行動導向」流程：將班級回饋從傳統紙本問卷改成 10 分鐘語音/文字訪談，讓學生匿名回應學習壓力、作業負荷與自我調節需求，教師每週匯出情緒與主題趨勢後，用於分組輔導、分流資源與活動再設計。落地時要預先定義「回饋僅教學改進用途」、資料保存位置，以及獎勵機制，避免學生為拿點數而偏離真實意見。',
		emoji: '🎙️',
		did_you_know: '產品頁特別強調兩件實作細節：第一是可在分鐘級完成 agent 設定與分享（link/embed），第二是可透過語音或文字的同場景會談自動接上後續動作。加上同時顯示對談與分析結果的 demo，代表回饋蒐集與分析不必分階段，能快速做成可追蹤的閉環。',
		talking_points: [
			'標語主張為「Deploy AI agents to conduct qualitative interviews at scale」，核心是以 AI 將訪談式聆聽放大到大量場景。',
			'可把聆聽代理佈署在網站、產品體驗、活動後、onboarding、客訴與社群檢核等多個場景，降低流程建置邊界。',
			'文件宣稱可在「minutes」內建立 AI listening agent，並可直接分享連結或嵌入任何頁面。',
			'明確支援 voice 與 chat 兩種渠道，並使用追問機制與情境自適應，逐步補齊未被問到的資訊。',
			'將回饋結果分為 theme、sentiment、objections、needs、intent 等欄位，形成可分析的結構化輸出。',
			'每場談話可即時觸發 reward、連結或下一步，直接把收集鏈接回產品流程，並支援 24/7 不中斷對話。',
			'討論區提問提到是否能匯入既有 transcripts，反映企業仍在關心是否能與既有工具資料打通。',
		],
		quote: 'Deploy AI agents to conduct qualitative interviews at scale.',
		quote_attribution: 'Product Hunt，2026-05-08',
		quote_source_url: 'https://www.producthunt.com/products/stetos-co',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品方觀點是先解決蒐集能力不足：將問卷、客服、銷售、訪談等片段化回饋集中到單一對話介面，核心訴求不是替代既有工具，而是把聆聽從被動整理改為即時可行動。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/stetos-co',
					},
				],
			},
			{
				text: '在討論反應中，第一位真實需求是跨系統整合：若不能匯入既有 transcripts，可能又會多出一個新資料孤島。這顯示「可對話」不等於可立即落地，落地價值仍取決於導入成本與生態銜接。',
				sources: [
					{
						name: 'Product Hunt 討論區',
						url: 'https://www.producthunt.com/products/stetos-co',
					},
				],
			},
			{
				text: '教育場景可把它視為需求診斷工具而非評量工具：能捕捉學生未被預設問項涵蓋的聲音，但若缺少匿名告知與資料治理，24/7 對話也可能衍生隱私風險與回饋污染，實務上必須先建立倫理與保存規則。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/stetos-co',
					},
				],
			},
		],
		articles: [
			{
				title: 'Stetos.co',
				link: 'https://www.producthunt.com/products/stetos-co',
				domain: 'producthunt.com',
				date: '2026-05-08',
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
		title: 'Monid 2.0 聚合 200+ Agent 工具生態',
		short_summary: 'Monid 2.0 將原先要多次接線的代理工具集中到單一技能入口。Product Hunt 內容指出，這次升級後可支援 200+ 工具，涵蓋社群 scraping、搜尋 API、電商資料、lead gen、競品追蹤與情緒分析；且產品在 15 天前才從「wallet for agents」轉向 2.0，累積已有 3,000+ 次 agents 購買紀錄。\n\n其意義在於工具基礎設施從「API 金鑰分散管理」轉向「平台式即用、可比較、可控預算」模式，並透過 MCP 開放在 Claude.ai、Claude Desktop、Claude Code、Cursor、Windsurf、OpenClaw、Hermes Agent 等 7+ 環境使用。這代表 agent 開發不再只拼接技術，而是考驗資源治理與工作流設計。\n\n對台灣高中教師來說，可借鏡「一次上線、逐步擴充」的流程設計：先用 1～2 個工具做固定任務序列（如題材蒐證→競品對照→情緒摘要），再在教學活動前先定義預算上限、可用工具名單與輸出格式，讓學生練習評估工具差異而非直接堆 API。導入時務必比對授權條款與隱私邊界，尤其避免以學生身分抓取未公開或可識別個資，否則便利性可能快速轉為管理風險。',
		emoji: '🧩',
		did_you_know: '原文披露 Monid 自從 15 天前以「wallet for agents」起步後，短時間內即累積 3,000+ 次 agents 購買。升級到 2.0 不只加工具數量（200+）與即時付費能力，還同步強調 MCP 整合與預算控管，顯示這類平台正在把「工具多樣性」與「財務治理」綁在同一入口，減少開發端重複整合成本。',
		talking_points: [
			'Monid 2.0 被定位為 OpenRouter for agent tools，核心是把多種 agent 工具整併到單一入口，避免團隊重複接線。',
			'產品公告稱可接入 200+ 工具，含社群 scraping、搜尋 API、電商資料、lead gen、競品追蹤與情緒分析，屬於工具類型全域化清單。',
			'公司在 15 天前仍稱作「wallet for agents」，如今改口 2.0，顯示版本迭代節奏與回應速度極快。',
			'公告同時出現「3,000+」這個量化指標，表示上線後已有超過三千筆 agent 交易行為。',
			'Monid 2.0 明確加入 budget controls，讓團隊可針對不同代理任務設預算上限，降低失控消耗。',
			'MCP 支援包含 Claude.ai、Claude Desktop、Claude Code、Cursor、Windsurf、OpenClaw、Hermes Agent，至少 7 個入口可直接接軌。',
			'Monid 主打「No subscriptions, No API keys」，在導入第一步上降低門檻，但支付與使用行為會集中在平台治理邏輯。',
		],
		quote: 'Monid is OpenRouter for agent tools.',
		quote_attribution: 'Product Hunt, 2026-05-08',
		quote_source_url: 'https://www.producthunt.com/products/monid',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '平台方角度視為工具整合基礎設施升級：由錢包導向轉為可比對、可付費、可跨平台調用的市場，核心是縮短 agent 落地時間與降低整合摩擦。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/monid',
					},
				],
			},
			{
				text: '成本治理角度可讀到反向訊號：宣稱免 API key、免訂閱有助於啟用，但 3,000+ 交易與預算控管並行，表示真正風險可能轉成平台治理失序與權限濫用，需要組織內制定明確配額規則。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/monid',
					},
				],
			},
			{
				text: '教育現場可見示範價值高於直接複製：它證明工具整併與工作流標準化可做教學原型，但台灣學校仍要加本地資安、隱私與授權檢核，避免先進工具先一步，但規範未同步。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/monid',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-04-23',
				date_iso: '2026-04-23',
				content: 'Monid 以「wallet for agents」形式上線，作為 agent 工具與資源管理入口起步。',
			},
			{
				date: '2026-05-08',
				date_iso: '2026-05-08',
				content: '產品公告 Monid 2.0，主打整合 200+ 工具、即時比較與支付、預算控管，並加入 MCP 多平台接入。',
			},
		],
		articles: [
			{
				title: 'Monid 2.0',
				link: 'https://www.producthunt.com/products/monid',
				domain: 'producthunt.com',
				date: '2026-05-08',
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
		title: 'Radiq：讓需求規格直接變 AI 可執行任務',
		short_summary: 'Radiq 在 Product Hunt 發表，主打「customer-to-code loop」自動化。它整合產品經理在 Slack、Jira、Confluence、會議與客服訊息中的需求線索與證據，直接生成可交付給 AI coding agent 的開發規格；文章稱傳統流程常要花上整週，目標是縮短為「幾分鐘」。\n\n此舉意義不只是提速文字產出，而是修正 2026 年 AI coding agent 的交接斷層：若規格缺程式碼上下文，就會被反覆追問回頭改。Radiq 不強調一般向量找資料，而是用知識圖譜把證據與模組、相依性、決策順序接在一起，再經 MCP 送入 IDE，對接可執行輸出。\n\n對台灣高中教師，可直接遷移為「課程規格化」做法：將學生提問、作業回饋、作品 bug 回報集中到同一張任務欄，先標註主題、證據、授課章節、負責教師，再每週固定一次轉為可執行教學調整。建議以 4 步驟運行：證據收斂、規格化、對應教材模組、交付教學微更新。台灣現場常見 LINE、紙本、雲端表單並存，先統一欄位規則比換工具更重要，否則 AI 只會放大雜訊。',
		emoji: '🤖',
		did_you_know: '文章將核心差異放在「知識圖譜」而非單純語意搜尋：不只做訊號聚類，而是讓客訴、會議與任務線索直接映到程式模組與相依性。輸出規格再經 MCP 送入 Cursor 或 Windsurf，意圖是讓規格成為可直接執行的指令，而不是另存的敘事文件。',
		talking_points: [
			'核心問題被明確鎖定：PM 在 Slack、Jira、Confluence、會議與客服紀錄間手工拼接訊號，花掉大量週期時間。',
			'原文核心主張是時間壓縮：從一個階段常需「一週」的整理與重寫流程，目標轉成「幾分鐘」完成交付。',
			'規格化的業務規模背景明確：文中提到 50 人跨部門團隊將產品從 0 成長到 4,000 萬美元，顯示對高節奏產品線的解法需求。',
			'技術做法採知識圖譜，而非只靠向量檢索，將客戶證據直接映射到程式模組、依賴與決策順序。',
			'交付鏈路具體到工具：規格可直接推進 Cursor 或 Windsurf，並透過 MCP 進到 IDE，縮短人工轉述環節。',
			'團隊驗證方式採 design partners，並回報開發速度可提升，提供可量化成效的採用依據。',
		],
		quote: 'What took a week now takes minutes.',
		quote_attribution: 'Product Hunt, 2026-05-08',
		quote_source_url: 'https://www.producthunt.com/products/radiq',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品管理視角集中在縮短需求交接摩擦：把跨工具脈絡整合與規格重寫自動化，核心是把人力時間從重組流程中拿回來。',
				sources: [
					{
						name: 'Product Hunt 討論串（PM 觀點）',
						url: 'https://www.producthunt.com/products/radiq',
					},
				],
			},
			{
				text: '技術視角更偏工程落地可行性，指出若只靠文字聚合會忽略模組相依；知識圖譯可直接處理「代碼上下文」是其差異化主張。',
				sources: [
					{
						name: 'Product Hunt 討論串（技術面）',
						url: 'https://www.producthunt.com/products/radiq',
					},
				],
			},
			{
				text: '商務訊號則回到 KPI：用 design partners 驗證開發速度改善，表示這類工具要證明的是交付效率，不只是介面亮點。',
				sources: [
					{
						name: 'Product Hunt 討論串',
						url: 'https://www.producthunt.com/products/radiq',
					},
				],
			},
		],
		articles: [
			{
				title: 'Radiq',
				link: 'https://www.producthunt.com/products/radiq',
				domain: 'producthunt.com',
				date: '2026-05-08',
			},
		],
		domains: [
			{ name: 'producthunt.com' },
		],
	},
	{
		id: 'aiApplications-5',
		cluster_number: 5,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 熱門應用',
		title: 'Illospace：AI 與團隊共作空間',
		short_summary: 'Product Hunt 於 2026-05-07 在討論頁公開 Illospace，標語是「Living space where teams and agents work together」。它將團隊與 AI 代理人放進同一個空間，聲稱可共享同一段記憶與 team brain，並內建資料庫、cron jobs、workspace applications 等工具，朝流程化工作區設計。\n\n這代表 AI 的應用型態正從「一次性問答」轉為持續協作架構。Illospace 用 canvas of ideas and threads 串起工作脈絡，配合 hands-off work 與動態介面，讓任務可以在背景持續推進而非只靠人工逐步催辦；也就是說，AI 不只補充文字產出，而是直接進入日常作業節點。\n\n對台灣高中教師而言，可參考先從小單位試辦：以一班級導入共備 thread，分別讓教師與助教負責教材、評量、行政提醒，再透過 cron jobs 以每週固定節奏自動彙整更新。原文目前僅 12 followers、仍屬早期訊號，導入前要先把匿名化、學生資料不外流、權限分層、校內網路存取規則定義清楚，再決定是否擴展到多科共用。',
		emoji: '🤝',
		did_you_know: '原文揭露 Illospace 的關鍵做法不是只有對話功能，而是「同記憶共享」加上可建立 databases 與 cron jobs 的流程工具。再加上 canvas of ideas and threads 的設計，它同時嘗試解決三件事：合作同步、任務排程、介面生成；目前 page 上有 12 followers，顯示仍在成長前段，但已呈現明確的產品骨架。',
		talking_points: [
			'2026-05-07 於 Product Hunt 討論頁上線 Illospace，產品副標為「Living space where teams and agents work together」。',
			'原文明示產品目前有 12 followers，反映目前仍處於早期社群回饋階段。',
			'核心敘述是「sharing the same memory」與「team brain」，即多角色共用同一工作記憶體。',
			'內建系統工具包含建立 databases 的能力，可把專案知識沉澱成可查找資料層。',
			'支援 cron jobs，明示可安排例行背景任務，例如每週摘要、每日盤點。',
			'同時提供 workspace applications 與 dynamic interfaces，結合 canvas and threads 讓多人可平行觀察進度。',
			'產品文案提到 hands-off work，表示可將可重複任務交由代理人離線執行，減少人為輪替延遲。',
		],
		quote: 'Illospace is a workspace where teams work together alongside agents, sharing the same memory and the same "team brain".',
		quote_attribution: 'Product Hunt, 2026-05-07',
		quote_source_url: 'https://www.producthunt.com/products/illospace',
		quote_source_domain: 'producthunt.com',
		perspectives: [
			{
				text: '產品導向上，它是把「協作平台」與「代理人平台」合一，偏向工程與生產力社群的組織效率工具；訊號上更像是新功能驗證，而非完整成熟產品宣告。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/illospace',
					},
				],
			},
			{
				text: '教學場域角度則會關心可控性：同一 workspace 同步資料雖能加速共備，但在校園環境可能引發隱私、責任歸屬與權限邊界問題，尤其缺少已驗證的教育規範與在地資安文件。',
				sources: [
					{
						name: 'Product Hunt',
						url: 'https://www.producthunt.com/products/illospace',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-07',
				date_iso: '2026-05-07',
				content: 'Product Hunt 公開 Illospace 產品頁與討論訊息，主打團隊與 AI agents 同步作業的工作空間設計。',
			},
		],
		articles: [
			{
				title: 'Illospace',
				link: 'https://www.producthunt.com/products/illospace',
				domain: 'producthunt.com',
				date: '2026-05-07',
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
		title: '本週「NotebookLM 教學」焦點：先有治理後導入',
		short_summary: '美國喬治亞理工學院資訊科技辦公室（OIT）於 2026-05-08 將 Gemini 與 NotebookLM 納入企業級服務，向全校教職員開放，並規劃首份校級 AI 政策；同時有 5/4 的 KOC 與 5/5 的 SOGI 報導指出 NotebookLM 整合進 Gemini 並對一般用戶提供免費/付費版本。另有 5 則快訊來自 5 個域名，且有 1 則本地高中活動訊號指出教師已在課堂裡同時導入 TalkPal、NotebookLM、ClassPoint。 \n\n這些訊號的核心不是單純「哪個工具比較潮」，而是是否能把授權、資安、法規與課堂落地一起設計。新聞稿明確寫到第三方安全評估、資料隱私與風險分析、契約與合規審查，並以 GTRI、USG 對齊為前提，代表高教機構把 AI 走向常態化，等同把治理程序視為產品開放的先決件。 \n\n對台灣高中教師的啟示是：可先從可控場景起步，先做 2–4 週試行，先用 NotebookLM 幫助文獻整理、提問導向備課與跨科整合，再擴及學生作業批改或研究導引。實務上要先明確資料邊界與帳號申請：例如敏感作業與個資不上傳，學生帳號採申請制、名額控管，並以完成率、重工時間、抄襲警示等指標評估成效；目前尚缺的是台灣校務端對授權名額與責任歸屬的實務標準化。',
		emoji: '🧠',
		did_you_know: '喬治亞理工的做法將管理主軸放在授權流程：教職員走 OIT 管理環境與標準憑證存取，敏感資料研究人員需先查閱 Institutional AI Register；學生、臨時人員和附屬人員則要經 MyAccess Packages 申請 Google for Education 授權，且授權名額有限。此設計暗示 AI 工具先行並非全域放開，而是分層與稽核並行。',
		talking_points: [
			'原始快訊 5 則、去重後訊號 5 個、不同域名 5 家，但 5/8 的新聞內容以單一校方公告為主，轉述與重播屬擴散，不代表 5 個互異論點。',
			'喬治亞理工 OIT 明確將 Gemini 與 NotebookLM 併入其 enterprise service，並限定由 OIT 管理環境、標準憑證存取，對象以全校教職員為主。',
			'校方表示將在未來數週正式推出首份 AI 政策，且要與美國喬治亞大學系統（USG）規範一致，導向可稽核治理。',
			'政策條件包含第三方安全評估、資料隱私與風險分析、契約與合規審查、機構規章一致性，且敏感資料研究員需參照 Institutional AI Register。',
			'5/4–5/5 期間，KOC 與 SOGI 擴大報導 NotebookLM 在 Gemini 的整合與「全面開放」內容，反映產品面主要訊號是可及性擴大。',
			'5/5 的育才獨中工作坊證實，現場教師已開始用 TalkPal、NotebookLM、ClassPoint 進行教學串接，代表一線落地多為流程化工具組合而非單工具導入。',
			'學生、附屬人員與臨時員工需透過 MyAccess Packages 申請 Google for Education 帳號且名額有限，顯示授權邊界與資源上限是導入的第一個瓶頸。',
		],
		quote: '我們的目標是為校園社群提供所需的工具，以加快工作效率並激發更大潛能。',
		quote_attribution: '喬治亞理工學院資訊科技辦公室, 2026-05-08',
		quote_source_url: 'https://sunmedia.tw/news/technology/1778110348-%E5%96%AC%E6%B2%BB%E4%BA%9E%E7%90%86%E5%B7%A5%E5%AD%B8%E9%99%A2%E5%95%9F%E7%94%A8%20Gemini%E3%80%81NotebookLM%E3%80%80%E5%8A%A0%E9%80%9F%E6%95%99%E5%AD%B8%E7%A0%94%E7%A9%B6AI%E6%95%B4%E5%90%88',
		quote_source_domain: 'sunmedia.tw',
		perspectives: [
			{
				text: '喬治亞理工路線把 AI 當作治理專案：先定授權、風險與合規，再談服務普及。這個角度重在可持續制度化，而非單次工具宣傳。',
				sources: [
					{
						name: 'sunmedia.tw',
						url: 'https://sunmedia.tw/news/technology/1778110348-%E5%96%AC%E6%B2%BB%E4%BA%9E%E7%90%86%E5%B7%A5%E5%AD%B8%E9%99%A2%E5%95%9F%E7%94%A8%20Gemini%E3%80%81NotebookLM%E3%80%80%E5%8A%A0%E9%80%9F%E6%95%99%E5%AD%B8%E7%A0%94%E7%A9%B6AI%E6%95%B4%E5%90%88',
					},
				],
			},
			{
				text: 'KOC 與 SOGI 報導角度偏產品訊號：強調 2026-05-04 到 2026-05-05 期間功能可用、免費與付費分層、一般用戶入口，提供擴散速度但缺少校務治理細節。',
				sources: [
					{
						name: 'koc.com.tw',
						url: 'https://www.koc.com.tw/archives/641484',
					},
					{
						name: 'sogi.com.tw',
						url: 'https://www.sogi.com.tw/articles/gemini/6268707',
					},
				],
			},
			{
				text: '育才獨中案例則代表一線教室視角：訊號集中在工具組合與教學活動執行，與機構政策層的風險框架形成缺口，亦指出本地落地更依賴教師共備與課程設計能力。',
				sources: [
					{
						name: 'perak.sinchew.com.my',
						url: 'https://perak.sinchew.com.my/news/20260504/perak/7475508?variant=zh-hant',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-04',
				date_iso: '2026-05-04',
				content: 'KOC 報導 Google/NotebookLM 與 Gemini 整合並對一般用戶提供開放入口，提及付費/免費方案並存。',
			},
			{
				date: '2026-05-05',
				date_iso: '2026-05-05',
				content: 'SOGI 與地方報導延續此訊號：SOGI 側重筆記本功能操作與教學應用，地方校園訊號指出教師已嘗試導入相關 AI 工具於課程活動。',
			},
			{
				date: '2026-05-08',
				date_iso: '2026-05-08',
				content: 'sunmedia 與 n.yam 引述喬治亞理工 OIT 公告，宣布 Gemini 與 NotebookLM 導入教學研究服務，並規劃首份 AI 政策與授權名單機制。',
			},
		],
		articles: [
			{
				title: '喬治亞理工學院啟用Gemini、NotebookLM 加速教學研究AI整合- 商傳媒',
				link: 'https://sunmedia.tw/news/technology/1778110348-%E5%96%AC%E6%B2%BB%E4%BA%9E%E7%90%86%E5%B7%A5%E5%AD%B8%E9%99%A2%E5%95%9F%E7%94%A8%20Gemini%E3%80%81NotebookLM%E3%80%80%E5%8A%A0%E9%80%9F%E6%95%99%E5%AD%B8%E7%A0%94%E7%A9%B6AI%E6%95%B4%E5%90%88',
				domain: 'sunmedia.tw',
				date: '2026-05-08',
			},
			{
				title: '喬治亞理工學院啟用Gemini、NotebookLM 加速教學研究AI整合 - 蕃新聞',
				link: 'https://n.yam.com/Article/20260507742636',
				domain: 'n.yam.com',
				date: '2026-05-08',
			},
			{
				title: 'NotebookLM整合進Gemini！筆記本功能全面開放用戶免費使用 - SOGI手機王',
				link: 'https://www.sogi.com.tw/articles/gemini/6268707',
				domain: 'sogi.com.tw',
				date: '2026-05-06',
			},
			{
				title: '育才独中峇迪蜡染工作坊文美班学生体验蜡染工艺- 地方 - 大霹雳',
				link: 'https://perak.sinchew.com.my/news/20260504/perak/7475508?variant=zh-hant',
				domain: 'perak.sinchew.com.my',
				date: '2026-05-05',
			},
			{
				title: 'Google 將Gemini 最聰明的NotebookLM 功能開放所有人使用 - 電腦王阿達',
				link: 'https://www.koc.com.tw/archives/641484',
				domain: 'koc.com.tw',
				date: '2026-05-04',
			},
		],
		domains: [
			{ name: 'sunmedia.tw' },
			{ name: 'n.yam.com' },
			{ name: 'sogi.com.tw' },
			{ name: 'perak.sinchew.com.my' },
			{ name: 'koc.com.tw' },
		],
	},
];

const educationResearchStories: Story[] = [
	{
		id: 'educationResearch-1',
		cluster_number: 1,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		title: '手機鎖袋上鎖後，第一年紀律先擾動再穩定',
		short_summary: 'NBER 工作論文以美國全國中學樣本研究「可上鎖手機袋」政策，方法為準實驗設計：以 staggered difference-in-differences 比較政策導入前後，並整併全國學生問卷、GPS pings、標準化考試、學校行政紀錄與主要供應商銷售資料。摘要未揭露完整樣本數與效果量資訊，但研究提供跨校、跨時段的因果近似結構。\n\n這份研究在政策層面重要，因為它指出手機限用不是單點成效，而是有時間動態：導入初期可能出現紀律衝擊與學生幸福感下滑，後續才可能回穩；同時學業平均效應接近零。也就是說，校方若只以分數做績效判斷，會漏掉秩序與心理適應過程。\n\n對台灣高中教師而言，可借鏡先行小範圍分段導入的策略：先試行1學期，再比較紀律事件、學生幸福感、教學專注度與月度考試趨勢；不是直接全校一刀切。第一年保留實作課程行動裝置例外，減少教學中斷。由於高一高二的過渡可能較敏感，應設立申訴與調適機制；高三則可同步檢視是否能以更嚴格規範改善準備考試環境。',
		emoji: '📵',
		did_you_know: '公開摘要顯示：導入第一學年後，紀律事件與學生主觀幸福感先上升再回穩；測驗成績平均效應則接近0，且高中數學可能有小幅正向、國中段小幅負向。注意：本研究為準實驗觀察研究，不宜直接推論因果',
		talking_points: [
			'證據類型：美國跨校準實驗設計（quasi-experimental），核心方法為 staggered difference-in-differences，並非 RCT。',
			'數據佐證：公開摘要未揭露樣本數、追蹤期間與完整效果量/信賴區間，但明確揭露資料鏈結來源與變項。',
			'研究整合了全美規模的學生調查、GPS pings、標準化測驗、學校行政資料，以及最大手機袋供應商銷售紀錄。',
			'政策導入第一年，研究觀察到紀律事件增加，且學生主觀幸福感下降，顯示禁用改變有短期干擾效應。',
			'後續年度，幸福感效應轉正、紀律惡化效應回落，表示現場適應與規範內化需要時間。',
			'學業方面，研究顯示標準化成績平均效果「接近0」，且高中與中學段方向不同：高中尤其數學有小幅正向，中學段則是小幅負向。',
			'研究同時指出，出席率、自陳課堂專注度與感知線上霸凌在摘要中未見明顯差異，不能只用單一成效指標評估手機管理。',
		],
		quote: 'For academic achievement, average effects on test scores are consistently close to zero.',
		quote_attribution: 'NBER, 2026-05-08',
		quote_source_url: 'https://www.nber.org/papers/w35132#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '一個現場治理視角認為，此研究支持先行試辦：手機袋政策可能先打斷既有秩序再恢復，關鍵是是否有第一年過渡與回饋修正。短期升高的紀律事件不一定代表政策失敗。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35132#fromrss',
					},
				],
			},
			{
				text: '從結果外推角度看，研究顯示成效可分校段，形成延伸研究缺口：台灣缺乏對照文獻前不宜直接全面複製，需本地試點驗證高中與國中段是否有同方向反應，並補充因果識別與情境變項。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35132#fromrss',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-08',
				date_iso: '2026-05-08',
				content: 'NBER 公布《The Effects of School Phone Bans: National Evidence from Lockable Pouches》工作論文摘要，提出以美國全國資料評估手機上鎖袋政策。',
			},
		],
		articles: [
			{
				title: 'The Effects of School Phone Bans: National Evidence from Lockable Pouches',
				link: 'https://www.nber.org/papers/w35132#fromrss',
				domain: 'nber.org',
				date: '2026-05-08',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'educationResearch-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		title: '早期遠距教育是否增加技術工作機會？',
		short_summary: 'NBER 工作論文研究 20 世紀初美國的早期遠距教育：學生透過郵件收教材、寄回作業，再由學校批改。研究以 International Correspondence Schools（ICS）學員紀錄串聯人口普查資料，發現參與者在 3 到 10 年後進入技術性工作的機率高出 6 到 10 個百分點。',
		emoji: '📬',
		did_you_know: 'ICS 在 1940 年前累積超過 400 萬名學生，是當時美國最大的早期遠距教育機構。這篇研究不是在討論現代線上課，而是用歷史資料追蹤「不能或不想走傳統高中路徑」的人，是否能靠替代學習進入技術性工作。',
		talking_points: [
			'證據類型：NBER 工作論文使用早期遠距教育的個體紀錄，並串聯人口普查資料追蹤後續職涯。',
			'核心數字：ICS 在 1940 年前累積超過 400 萬名學生；參與者 3–10 年後進入技術性工作的機率高出 6–10 個百分點。',
			'研究焦點：作者比較的是早期遠距教育作為高中替代路徑的效果，不是一般補習、短期職訓或現代線上課程。',
			'可能機制：這種替代學習讓部分學生先取得可就業技能，也改善哪些人繼續走高中路徑的選擇排序。',
			'台灣借鏡：較接近「可認列的替代學習路徑」設計，不能直接等同現行補修、遠距課或職探活動。',
		],
		quote: 'Enrollment in correspondence schools increased the likelihood of skilled employment by 6-10 percentage points within 3-10 years, particularly among younger students who used it as a substitute for high school.',
		quote_attribution: 'NBER, 2026-05-08',
		quote_source_url: 'https://www.nber.org/papers/w35147#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '一種解讀是：替代學習路徑若能被制度承認，可能成為技能入口，而不只是補救教學。但這是歷史美國資料，不能直接推論到現代台灣。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35147#fromrss',
					},
				],
			},
			{
				text: '另一個限制是研究設計：它不是 RCT，而是歷史資料與模型估計。若要轉成台灣政策，需要另看學分認證、技職銜接與本地長期追蹤資料。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35147#fromrss',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-08',
				date_iso: '2026-05-08',
				content: 'NBER 發布《Learning by Mail: The Impact of Correspondence Schools in Early 20th Century America》',
			},
		],
		articles: [
			{
				title: 'Learning by Mail: The Impact of Correspondence Schools in Early 20th Century America',
				link: 'https://www.nber.org/papers/w35147#fromrss',
				domain: 'nber.org',
				date: '2026-05-08',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'educationResearch-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		title: '家長自我合理化如何壓縮早教投入',
		short_summary: 'NBER 工作論文 W35150（10.3386/w35150）建立一個早期教養投入模型：當家長注意力與時間不足時，會把「親職回應能否改善兒童發展」的回報估得偏低，進而合理化低投入。研究以理論模型配合隨機對照試驗（RCT）驗證這條機制，並觀察到信念校正可同步改變互動與參與行為。其核心不是只問資源多少，而是問家長是否收到可使信念校準的回饋訊號。\n本研究的意涵在於：只補素材、補金錢，若未同時改變家長對「回應式互動」的預期，改善容易停在表面。論文指出在容量不足時，扭曲信念會讓家庭陷入自我封閉循環，讓介入難以落地。摘要未揭露樣本數、追蹤期間與效應量，但其模型＋RCT組合仍顯示學校可從「家庭行為設計」下手，重新切開介入失靈。\n對台灣高中教師的具體啟示是：別只靠單次親職講座，而要把可觀測行為變成固定流程。例如每週由家長回填 3 分鐘回應任務、語句回饋次數、陪伴時段；每2～4週由導師回饋一次。以低負擔清單替代抽象喊話，並優先先導高風險與忙碌家庭，才較能避免把「投入不足」誤判成不合作，而不是家庭能力不足。',
		emoji: '🧠',
		did_you_know: '公開摘要可確認一條具體機制：家長低容量情境會形成信念下修，進而抑制親子回應行為，並因缺乏回饋再讓信念更偏差。研究也明確指出 RCT 結果支援模型預測，但未公開樣本數與效果量。注意：本研究為工作論文中的工作模型＋RCT，未宜直接推論普遍因果。',
		talking_points: [
			'證據類型：模型推導 + NBER 工作論文中的實驗設計（RCT）組合，測量焦點放在家長信念、注意力與親職行為的交互。',
			'數據佐證：公開摘要未揭露樣本數、追蹤期間、效果量或信賴區間；可確認的量化描述僅限於信念與行為方向性修正訊息。',
			'機制觀測：當家長認為可達成的親職效益低於期望時，會透過『自我合理化』壓低回報判斷，短期降低互動投入。',
			'循環效應：扭曲信念→親職反應較少→缺乏校準證據→扭曲更穩固，形成 self-sealing 的負向回路，這是論文核心邏輯。',
			'政策線索：研究未訴諸抽象補助，而是要求介入設計讓家長能快速看到「回應行為」回饋，降低認知負荷。',
			'實務轉譯：可參考論文提出「四種逃脫通道」的邏輯，先用簡短清單（例如每週兩次微任務）與2～4週追蹤節奏設計家長行為提醒。',
		],
		quote: 'When capacity falls short of aspiration, motivated reasoning provides relief: the parent distorts her working belief downward, rationalizing low engagement.',
		quote_attribution: 'NBER Working Papers, 2026-05-08',
		quote_source_url: 'https://www.nber.org/papers/w35150#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '此研究將焦點放在家庭認知機制而非資源缺口，對台灣高中實務是提醒：介入不能只補教具，還要補回饋架構與可觀測行為目標，才能改變親職投入。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35150#fromrss',
					},
				],
			},
			{
				text: '延伸研究缺口：摘要未揭露樣本與效應量，也未提供跨文化對照。未來需在台灣高中家庭情境再做對照實驗，確認該機制在升學壓力與家長工作型態差異下是否成立。',
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
				date: '2026-05-08',
			},
		],
		domains: [
			{ name: 'nber.org' },
		],
	},
	{
		id: 'educationResearch-4',
		cluster_number: 4,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育研究',
		title: '功績主義：別只看過去成績',
		short_summary: '這篇 NBER 工作論文（W35151）於 2026-05-08 發表，將功績主義拆成「回溯式」與「前瞻式」兩種：前者依個人特質與過去成就判斷，後者依對既定社會目標的未來比較性貢獻判斷。研究採用形式化模型，並以學生分配到學校、勞工匹配職位為案例，比對不同制度下的分配結果與政策訊號。研究摘要未揭露樣本數、抽樣國家、追蹤期間與量化效應值，方法上偏向理論推演而非實證。\n\n此區分之所以關鍵，是因為同一制度中的「公平」可有截然不同實作邏輯：若以回溯式為主，既有成績與背景更易決定機會；若採前瞻式，政策必須先設定欲達成的教育目標，再以可度量結果替代純過往排名。對學校選才、資源分配與人才培育而言，這代表原本看起來對等的程序，實際可能反映不同的價值取向與權力分配。\n\n對台灣高中教師而言，可直接套用為「前瞻式評量」的教學設計原則：第一，日常記錄不僅保存試卷分數，還要保留三個月一次的學習成長率、跨域合作表現與任務完成度；第二，分組與分流前，先用單元任務明確定義目標（例如探究深度、社會關懷、同儕回饋）並據此給予權重；第三，轉學校與升學建議時，改用「未來可發展指標」取代單次考試作為主要敘事，避免把歷史績效視為唯一天花板。此方式符合本土雙軌課程與高雄、台中等不同校型的人力差異，也較容易與 113 課綱能力本位與在校生成長追蹤銜接。',
		emoji: '⚖️',
		did_you_know: '本文明確指出「功績」可同時是回溯式與前瞻式兩種制度語言，進而改寫學校與職場分配的公平邏輯；但摘要未提供樣本數、國家範圍、期間長度與效果量。注意：本研究為工作論文，不宜直接推論因果。',
		talking_points: [
			'證據類型：NBER 2026 工作論文 W35151，研究方法為形式化模型推導，非 RCT、問卷或公開縱向追蹤，摘要未揭露樣本數與效應量。',
			'研究主張：回溯式功績主義（retrospective）將個人過去特質與既有成果作為分配依據，與傳統「拿到的成績」機制對應。',
			'研究主張：前瞻式功績主義（prospective）將功績定義為對指定社會目標之比較性貢獻，核心是未來可驗證表現。',
			'實作情境：作者建立學生進學校分派與勞工進職位兩個對照案例，說明同一政策目標在兩種功績定義下會產生不同分配結果。',
			'政策訊息：回溯式主要需要歷史紀錄資料，前瞻式則必須補齊多期成長、成果指標與目標一致性的資料欄位。',
			'時間軸：W35151 在 2026-05-08 對外公開，提供 2026 年後台灣教育政策討論可引用的制度設計框架。',
			'風險提示：摘要未提供國家別或樣本規模，若直接移植到 2-3 年縱向學生紀錄較短的校務情境，需先做校本化驗證。',
		],
		quote: 'Retrospective meritocracy is static or backwards-looking: Merit is based on an individual’s characteristics or past achievements as representative of excellence or as desert for a position already obtained.',
		quote_attribution: 'NBER，2026-05-08',
		quote_source_url: 'https://www.nber.org/papers/w35151#fromrss',
		quote_source_domain: 'nber.org',
		perspectives: [
			{
				text: '該論文的價值在於先分離兩種功績邏輯，讓「公平」不再是抽象口號，而是可比較的制度條件：一個看歷史證明，一個看未來目標達成。這對教育分配研究提供明確坐標。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35151#fromrss',
					},
				],
			},
			{
				text: '由於目前僅為理論工作論文，缺少實證樣本與縱向證據；延伸研究缺口在於是否能以台灣高中學生族群進行對照驗證，測試前瞻式評核是否真的減少代際與區域差距。',
				sources: [
					{
						name: 'NBER',
						url: 'https://www.nber.org/papers/w35151#fromrss',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-08',
				date_iso: '2026-05-08',
				content: 'NBER 公開工作論文《Retrospective Versus Prospective Meritocracy》（W35151）',
			},
		],
		articles: [
			{
				title: 'Retrospective Versus Prospective Meritocracy',
				link: 'https://www.nber.org/papers/w35151#fromrss',
				domain: 'nber.org',
				date: '2026-05-08',
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
		title: '先控權限再試用：高中導入 Agentic AI 先行法',
		short_summary: '本文以一篇先上手再修正的方式，解釋 agentic AI 在教育中的核心機制：教師給定目標並授權後，AI 可直接執行行動。原文舉出可行動項目含開啟程式、操控瀏覽器、撰寫程式、線上購物與連續動作序列，且非只輸出文字。若用「我想做網站」這類需求，agentic 流程可先規劃再執行，少掉人工轉接。這段敘事的重要性，在於它把生成式 AI 的「提示-輸出」模式推進到「提示-執行」模式。另一方面，文章指出 MS CoPilot 的 Agents 名稱與真正 agentic 能力未必一致，與 CustomGPT、Claude Projects、Gemini Gems 的界線仍在變化，對學校採購與治理會造成落差。對台灣高中教師啟示是：先從 1 件低風險任務做試點，例如每週公告整理、教材資源匯整。第 1 週可用同題目同時試跑 ChatGPT Codex、Claude Code、Claude CoWork，紀錄每次授權事件與結果，再逐步改為第 2 週的課務流程。實務上先鎖定「讀檔/存檔」兩類高風險權限白名單、保留人工覆核點，才能在效率與學生資料安全間取得平衡。',
		emoji: '🤖',
		did_you_know: '原文中關鍵差異不是「有沒有很厲害」，而是有沒有權限機制。作者直接點出 AI 會在需要操作時跳出授權提示，且「讀取檔案」可設總是允許，意味教師可在效率與風險之間建立細部控管，而不是一上線就全放權限。',
		talking_points: [
			'agentic AI 的定義是：在獲得人類需求與授權後自動執行，原文列出 5 種可觸發動作（開程式、導覽瀏覽器、建程式、線上購物、連續流程），比起單純文字生成更像可執行代理。',
			'文章以「I want to build a website」做對照，示範 1 次需求可延伸為 1 條執行計畫與後續工具串接，減少人手完成最後整合的步驟。',
			'作者先嘗試的核心組合為 3 個工具：ChatGPT Codex、Claude Code、Claude CoWork，並明確說明 Codex 是獨立桌面 app，而後兩者可在 Claude 桌面升級取得。',
			'在權限節奏上，工具會在需要電腦操作時即時提示，『讀取檔案』可設定長期授權；建議教師以 1 次測試任務驗證此機制是否符合校務資安規定。',
			'文章區隔 MS CoPilot 的 Agents 與真正 agentic，並與 CustomGPT、Claude Projects、Gemini Gems 對照；表示名稱不等於能力，採購前至少要比對 1) 是否可跨 app 行動 2) 權限提示流程。',
			'文中提到 Einstein、Kerra 在高教場域的出現，顯示討論焦點已從工具新奇度轉向線上空間治理，教師導入前先做 2 張表：工具行動邊界表與授權例外表。',
		],
		quote: 'The user says “I want to build a website” and the agentic AI builds a plan, gathers tools, and builds it.',
		quote_attribution: 'aiedusimplified.substack.com, 2026-05-08',
		quote_source_url: 'https://aiedusimplified.substack.com/p/exploring-agentic-ai',
		quote_source_domain: 'aiedusimplified.substack.com',
		perspectives: [
			{
				text: '角度一：工具能力面向。原文不強調品牌神話，而用「是否能在授權後主動執行」作為判準，主張行為本體先於名詞定義，對校方採購有直接影響。',
				sources: [
					{
						name: 'aiedusimplified.substack.com',
						url: 'https://aiedusimplified.substack.com/p/exploring-agentic-ai',
					},
				],
			},
			{
				text: '角度二：治理面向。文章透過 Einstein、Kerra 在高教的案例揭示，agentic 推進時最大的張力不是會不會做，而是校園空間控管能否同步跟上，這是教育現場比功能更先行的門檻。',
				sources: [
					{
						name: 'aiedusimplified.substack.com',
						url: 'https://aiedusimplified.substack.com/p/exploring-agentic-ai',
					},
				],
			},
			{
				text: '角度三：實務可行性。作者提出「半成品先行」而非一次到位，對非程式背景教師更友善，意味高中可先做小規模 POC，再靠授權紀錄累積成校內規範。',
				sources: [
					{
						name: 'aiedusimplified.substack.com',
						url: 'https://aiedusimplified.substack.com/p/exploring-agentic-ai',
					},
				],
			},
		],
		articles: [
			{
				title: 'Exploring Agentic AI',
				link: 'https://aiedusimplified.substack.com/p/exploring-agentic-ai',
				domain: 'aiedusimplified.substack.com',
				date: '2026-05-08',
			},
		],
		domains: [
			{ name: 'aiedusimplified.substack.com' },
		],
	},
	{
		id: 'aiClassroom-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		title: '時差合作課程設計：四步驟與真實任務接軌',
		short_summary: 'ClassTechTips 於 2026-05-08 發表訪談，與 OneSchool Global 北美區教學與學習總監 Charlie Huynh 討論其「Learning to Learn」架構。文章指出，跨時區合作要先在基礎學段做合作、溝通、規劃、反思四項技能 scaffold，並以 Perfect Pitch Competition 等延伸學習串起學生作品與真實情境。\n\n這不是單向介紹國際合作，而是建構可複製的教學流程：學生在每個任務都有真實受眾（家庭、祖父母、畢業生與社區成員），並以 OneSchool Global 的規模證明其模式可運作——8,000 名學生、120 個校區、分布 20 國。對台灣而言，重點在於校方如何在維持一致性時保留在地彈性。\n\n對台灣高中教師可直接遷移：先用 1-2 週做「課前規劃—任務共作—回饋修正」流程，安排跨班合作任務時設定 45 分鐘教學微模組加 1 次 2 週線上共備，發表前保留 1 次同儕與家長回饋。實作時要調整課程時段與行政行政流程，避免把國際合作變成臨時加班，而是納入週次時程與成績觀測指標。',
		emoji: '🌍',
		did_you_know: '該文給出的關鍵數據是 OneSchool Global 的組織規模：8,000 名學生、120 所校區、分布 20 個國家。更有意思的是其強調的不是單一活動，而是用四技能 scaffold 加上 Perfect Pitch 這類實作專案，將學習承接成可量化、可外部展示的流程。',
		talking_points: [
			'核心做法明確鎖定四技能 scaffold：合作、溝通、規劃、反思，先在基礎學段建立學習責任。',
			'文章明示 Perfect Pitch Competition 可作為延伸學習工具，讓學生作品放進跨校際實作情境。',
			'OneSchool Global 的敘事數據為 8,000 名學生、120 校區、20 國，代表其教學框架可在大規模跨國網絡中維持一致。',
			'受眾設計納入家庭、祖父母、校友、社區，將作品從交作業改為面向外部真實角色回饋。',
			'內容把「learning to learn」寫成主體責任機制，重點在學生自己訂目標、執行與追蹤反思，而非只做課堂任務。',
			'此模型的操作重點是把任務時間切成前置規劃、共作、回饋三段，對偏學測導向課表可做成固定例行，以降低跨時區協作摩擦。',
		],
		quote: 'Hands-on projects and tasks help students apply learning and retain it longer than traditional textbooks and worksheets.',
		quote_attribution: 'ClassTechTips，2026-05-08',
		quote_source_url: 'https://classtechtips.com/2026/05/08/tips-for-connecting-classrooms-bonus/',
		quote_source_domain: 'classtechtips.com',
		perspectives: [
			{
				text: '這篇專文偏向教師落地指南：用清楚可教、可複製的流程切割跨時區協作，重點放在第一線教學如何把抽象合作變成可複盤行為。',
				sources: [
					{
						name: 'ClassTechTips',
						url: 'https://classtechtips.com/2026/05/08/tips-for-connecting-classrooms-bonus/',
					},
				],
			},
			{
				text: '另一種張力來自機構敘事的擴展邏輯：OneSchool Global 以 20 國規模做背書，展示的是一套可以同時兼顧品牌一致性與在地彈性的組織化教學模型，超越單一學校案例。',
				sources: [
					{
						name: 'ClassTechTips（轉述 OneSchool Global）',
						url: 'https://classtechtips.com/2026/05/08/tips-for-connecting-classrooms-bonus/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-08',
				date_iso: '2026-05-08',
				content: 'ClassTechTips 發佈專訪，聚焦 OneSchool Global 的跨時區合作課程設計、Learning to Learn 框架與 Perfect Pitch 等延伸學習專案。',
			},
		],
		articles: [
			{
				title: 'Teaching Across Time Zones: Tips for Connecting Classrooms – Bonus Episode with OneSchool Global',
				link: 'https://classtechtips.com/2026/05/08/tips-for-connecting-classrooms-bonus/',
				domain: 'classtechtips.com',
				date: '2026-05-08',
			},
		],
		domains: [
			{ name: 'classtechtips.com' },
		],
	},
	{
		id: 'aiClassroom-3',
		cluster_number: 3,
		unique_domains: 1,
		number_of_titles: 1,
		category: 'AI 教學實戰',
		title: '6 年研究揭示：從禁令到歸屬感的教學轉向',
		short_summary: '2026-05-08 的《SEL Weekly Update》不是單篇觀察，而是每週 4 項 SEL 資源彙整：轉引《The Washington Post》的 6 年研究、指出禁止糖飲料可能失效的案例、納入教師關係系統性文獻，並補上 AJ Juliani 的 K-12 動機討論；又加上 2025-11-03 InnerDrive 對動機三要素（目的、勝任感、歸屬感）的提醒。\n這類內容把 SEL 從情緒活動邊邊料，拉回學校治理與教學設計：處理行為不只靠獎懲與禁令，而是以研究、工具、流程做驗證。當學校資源以「可執行清單」呈現時，可同時降低教師搜尋成本並提高班級管理的一致性，對高壓課務環境是可持續做法。\n對台灣高中教師可先做 4 週微實驗：第一週建立班級目標與規則，第二週改以替代行為規範取代全面禁用（如零食、手機），第三週用每節課發言、作業提交率、遲到違規次數追蹤，第四週以教師-學生雙向關係回饋修正制度。備考週前降低規範改動幅度，先做逐步導入，能避免學生抵抗與突發爭議。',
		emoji: '🧠',
		did_you_know: '文中最值得記住的一個細節是：面對行為問題時，全面禁止未必是解法。《SEL Weekly Update》指出「禁糖禁汽水」也可能反而刺激逆反，提醒教師要改走可替代策略。同時它把 6 年研究與關係研究接上動機三要素，意味情緒教育可直接落到教室管理流程。',
		talking_points: [
			'本次更新於 2026-05-08 發布，精簡整併 4 類 SEL 主題，方便教師一次抓到研究、文獻、方法與觀點。',
			'《The Washington Post》在該文中提供 6 年研究脈絡，強化「幸福」與情緒議題在班級治理中的長期證據性。',
			'文中提到《I’m a a pediatrician...》將「禁糖禁汽水」作為反例，提示全面禁止在學生行為管理可能引發逆反。',
			'《Building Strong and Positive Teacher-Student Relationships...》被放入最佳資源類型，作為系統性文獻回顧＋策略指引，對教師關係建構可直接借鑑。',
			'AJ Juliani 的 K-12 動機文章與 InnerDrive 的 2025-11-03 引言（目的、勝任感、歸屬感）形成同主題鏈，讓獎懲討論轉為需求導向設計。',
			'建議以 4 週為一期進行教室微實作，每週固定檢核；用發言次數、作業提交率與違規次數三指標回推規範調整。',
		],
		quote: 'Motivation isn’t just about rewards or threats. It’s about purpose, competence and belonging.',
		quote_attribution: 'InnerDrive，2025-11-03',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/05/08/sel-weekly-update-293/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '《The Washington Post》角度偏重研究結果與實務可逆性，主張對糖汽水等禁令要保留替代策略，否則可能增加衝突與對抗。',
				sources: [
					{
						name: 'The Washington Post',
						url: 'https://larryferlazzo.edublogs.org/2026/05/08/sel-weekly-update-293/',
					},
				],
			},
			{
				text: '《SEL Weekly Update》本身採編輯式整合，強調在教師端可快速找到可用資源，與學術篇幅較重的報導比較，形成「先行動後驗證」的工程化邏輯。',
				sources: [
					{
						name: 'larryferlazzo.edublogs.org',
						url: 'https://larryferlazzo.edublogs.org/2026/05/08/sel-weekly-update-293/',
					},
				],
			},
			{
				text: 'InnerDrive 的觀點則更偏心理動機理論，主軸是目的與歸屬感；此立場與制度化修法形成張力，也回應了為何 SEL 不能只設規範。',
				sources: [
					{
						name: 'InnerDrive',
						url: 'https://larryferlazzo.edublogs.org/2026/05/08/sel-weekly-update-293/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2025-11-03',
				date_iso: '2025-11-03',
				content: 'InnerDrive 發文指出動機不只在獎懲，核心是目的、勝任感與歸屬感。',
			},
			{
				date: '2026-05-08',
				date_iso: '2026-05-08',
				content: '《SEL Weekly Update》更新發布，彙整 SEL 資源與 K-12 動機、教師關係及行為管理相關內容。',
			},
		],
		articles: [
			{
				title: 'SEL Weekly Update',
				link: 'https://larryferlazzo.edublogs.org/2026/05/08/sel-weekly-update-293/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-05-08',
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
		title: '英語版不佳後，TED-Ed 推出《亨利塔》西語版',
		short_summary: '2026-05-08 一篇英語教學博客提到，TED-Ed 先前的《Henrietta Lacks》英文影片被作者評為“pretty bad”，同主題後續補上西班牙語版本，作者因繁忙僅做初步觀察，表示「希望會比較好」。這則訊號同時保留了一個關鍵線索：平台仍在同題材做版本迭代，而非一次交付。\n\n這件事的重要性在於，學習內容的品質判斷已從「單一次上傳」變成「版本持續修正」，而多語版本本身可改善可及性但未必保證正確性。教師若直接採用，可能把平台的修補過程當成權威背書，卻沒核對版本差異與學術敘事是否一致。\n\n對台灣高中教師而言，這篇訊號可直接轉成教學流程：先以英文版本做主軸，接著對照西語版本進行 1 對 1 的術語與事實核對，再用 1 份中文對照表整理差異，建議每節 45 分鐘內完成；若班上缺英西語能力，先以中文字幕或中文摘要銜接。課堂中要明確標示此素材為「待二次驗證版本」，把「可能較好」和「已驗證」分開，避免把未確認版本直接寫入正式筆記與作業題幹。',
		emoji: '🎬',
		did_you_know: '該篇完整片段透露 TED-Ed 是在英文版被質疑後，才補上西班牙語版本，卻仍以作者自述的「may or may not be better」為主軸，而非公開對照報告。這代表即使是大平台內容，也可能只提供「版本更新訊息」而非修正清單，實務上更像是可及性嘗試，而非完整學術品質背書。',
		talking_points: [
			'時間點明確在 2026-05-08：TED-Ed 在同一主題《Henrietta Lacks》推出西班牙語版本，訊號數量僅 1，仍顯示題材可持續更新。',
			'來源文直接指出早期英文版是“pretty bad”，機構版本若無校驗機制，教師不得不當場判斷是否適合課堂。',
			'作者表述“life’s been hectic…haven’t gotten a chance to look carefully”，表示採用前至少要再多一次 1 次教師審視流程。',
			'實作上可用 1 套流程：英文版影片 + 西班牙語版本 + 中文重點對照表，逐段比對術語與敘事，不可只評價語音品質。',
			'建議 45 分鐘課前活動：15 分鐘播放摘要段落、20 分鐘學生列出差異、10 分鐘修正與共識彙整，便於在生物/生命倫理單元導入。',
			'建立 1 張追蹤表（欄位：發布日期、語言版本、教師驗證日、偏差備註）可避免跨班重複使用未驗證素材。',
			'若班級有雙語學伴，可用 1 份工具清單（如影片字幕匯出＋共編文件）做比較，讓學生參與「版本稽核」而非只聽答案。',
		],
		quote: 'Awhile back TED-Ed published a pretty bad video about Henrietta Lacks, and I hope this Spanish-language version their created is a lot better.',
		quote_attribution: 'larryferlazzo.edublogs.org, 2026-05-08',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/05/08/ted-ed-has-published-this-spanish-language-video-about-henrietta-lacks-which-may-or-may-not-be-better-than-their-terrible-english-version/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '網誌作者立場偏向第一線教師觀察，先給予情緒化品質判斷而非正式評鑑，重點放在是否更能在教學脈絡中運作。它的價值是快速回報，但可信度需再透過課程情境驗證。',
				sources: [
					{
						name: 'larryferlazzo.edublogs.org',
						url: 'https://larryferlazzo.edublogs.org/2026/05/08/ted-ed-has-published-this-spanish-language-video-about-henrietta-lacks-which-may-or-may-not-be-better-than-their-terrible-english-version/',
					},
				],
			},
			{
				text: 'TED-Ed 的機構行動是推新語言版本，反映平台可及性政策，但未提供逐段差異對照，形成「版本有更替、品質未透明」的張力；教育者需把平台更新視為待驗證素材。',
				sources: [
					{
						name: 'TED-Ed（來源訊號）',
						url: 'https://larryferlazzo.edublogs.org/2026/05/08/ted-ed-has-published-this-spanish-language-video-about-henrietta-lacks-which-may-or-may-not-be-better-than-their-terrible-english-version/',
					},
				],
			},
		],
		articles: [
			{
				title: 'TED-Ed Has Published This Spanish-Language Video About Henrietta Lacks, Which May Or May Not Be Better Than Their Terrible English Version',
				link: 'https://larryferlazzo.edublogs.org/2026/05/08/ted-ed-has-published-this-spanish-language-video-about-henrietta-lacks-which-may-or-may-not-be-better-than-their-terrible-english-version/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-05-08',
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
		title: '免費月報與多管道訂閱：Edublog 5月號訊號',
		short_summary: '5/8 這則訊息指出博主剛寄出五月份的免費月報，明確記錄月報訂閱數已超過 3,000 人；同時提供「7 種免費訂閱」每日貼文的方式，並透露日更內容的日常訂閱族群可達數萬人規模。\n\n它的重要性在於證明教育知識傳播不一定靠付費圍牆才能擴大影響：固定「每月」的匯整報告搭配「每日」接觸入口，能持續建立讀者黏著。對 AI 教育內容供應者而言，讀者行為其實在意穩定節奏與可預期更新，這比偶發爆點貼文更能形成長線名單。\n\n對台灣高中教師可直接套用：先設定每月一次「AI 教學快訊」(例如每月第一週寄出)，再補上每日 1–2 則精簡更新；用校內信箱、Line、班級公告三種以上免費通道分流，先不追求人數破萬，而是追蹤開信率、回覆率與班導入回收率。若你要把 AI 活動教案落地，最好在課綱節點前（如每學期第 2 週）先推一次總覽，並保留可複製模板給同校同儕。\n',
		emoji: '📬',
		did_you_know: '原文的關鍵不在話題本身，而在擴散機制：免費月報已超過 3,000 人訂閱，且透過 7 種免費通道可持續追蹤每日文章，顯示「固定節奏＋多通路」在教育內容上仍能形成高黏著。作者還提到日常部落格訂閱可達數萬，意味長尾型教育閱讀有穩定需求。',
		talking_points: [
			'2026-05-08 公開宣布「5 月免費月報」已發送，說明發布頻率為每月一次。',
			'文中明確寫出月報訂閱人數「超過 3,000」，代表小規模社群可快速累積穩定受眾。',
			'同時提供「7 種免費訂閱」每日貼文的選項，將入口數量明確放大至 7 種以上。',
			'訊號提到日常訂閱者達到「數萬」（tens of thousands）規模，代表日更入口不是輔助，而是核心流量載體。',
			'資訊定位為「free」與「very simple」，顯示低門檻內容可降低高中教師導入門檻。',
			'可供學校行動化：以每月主題刊 + 每日短訊雙軌做傳播，先在學期初建立名單機制，再在教學週期中滾動更新。',
		],
		quote: 'I’ve just mailed out the May issue of my very simple free monthly email newsletter.',
		quote_attribution: 'Edublogs（2026-05-08）',
		quote_source_url: 'https://larryferlazzo.edublogs.org/2026/05/08/just-sent-out-free-monthly-email-newsletter-94/',
		quote_source_domain: 'larryferlazzo.edublogs.org',
		perspectives: [
			{
				text: '訊號顯示內容生產者端採取「低成本高頻率」策略：先用簡化月報先行建立信任，再用多通道每日入口延長觸及，這是教學社群擴散的一種可測策略。',
				sources: [
					{
						name: 'Edublogs',
						url: 'https://larryferlazzo.edublogs.org/2026/05/08/just-sent-out-free-monthly-email-newsletter-94/',
					},
				],
			},
			{
				text: '受眾端可被理解為偏好穩定節奏的讀者，不只看單篇價值，而看是否能每月與每日持續接觸。對教育訊息而言，名單經營會比流量衝刺更能形成長期使用。',
				sources: [
					{
						name: 'Edublogs',
						url: 'https://larryferlazzo.edublogs.org/2026/05/08/just-sent-out-free-monthly-email-newsletter-94/',
					},
				],
			},
			{
				text: '在台灣高中場域，這可轉成制度化做法：教學資源不靠平台演算法分配，而是透過校務信箱與同好群組建立自主傳遞機制，降低外部平台政策變動對資訊流的影響。',
				sources: [
					{
						name: 'Edublogs',
						url: 'https://larryferlazzo.edublogs.org/2026/05/08/just-sent-out-free-monthly-email-newsletter-94/',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-08',
				date_iso: '2026-05-08',
				content: '針對五月號內容發布：寄發免費月報，並同步宣告可透過 7 種免費管道訂閱每日文章。',
			},
		],
		articles: [
			{
				title: 'Just Sent-Out Free Monthly Email Newsletter',
				link: 'https://larryferlazzo.edublogs.org/2026/05/08/just-sent-out-free-monthly-email-newsletter-94/',
				domain: 'larryferlazzo.edublogs.org',
				date: '2026-05-08',
			},
		],
		domains: [
			{ name: 'larryferlazzo.edublogs.org' },
		],
	},
];

const twEduStories: Story[] = [
	{
		id: 'taiwanEduPolicy-gmail-教育部-ai-數位學習',
		cluster_number: 'gmail-教育部-ai-數位學習',
		unique_domains: 18,
		number_of_titles: 24,
		category: '教育政策',
		title: '本週「教育部AI數位學習」焦點：平權試辦與AI Di+雙軌推動',
		short_summary: '快訊去重後為17則（原始24則，含1則同質轉載），主訊號是教育部兩條施政主軸：『館館有AI』在2026年第4季先於3間國立圖書館試辦，民眾持借書證可免費使用ChatGPT、Claude、Gemini；『AI Di+』則由大學支援中小學場域，導入AI學伴與線上工具，補上學習落差。為什麼重要：政策重心已從單機硬體補助轉向可近性與教師落地，並同步出現47所國立大學延展、16所大學×185校合作、教師認證與AI人才方案，顯示是制度型導入而非單一新聞稿。缺口在於：目前未見完整預算金額、到位進度、跨地區使用量與校務成效指標。\n\n對台灣高中教師的啟示是可以先做局部可控試點：建立班級AI學伴制度，先用每週固定時段做閱讀摘要、提問清單、寫作修訂等任務，依「每人每日4小時、單次2小時」管理邏輯設限，降低資源浪費。再接上雲端平台記錄提問與回饋品質，逐步加入隱私/版權提醒與評核流程。教師不是等所有政策上線才行動，而是先在現有班級流程中測試可複製的教學節奏，建立證據再擴大。',
		emoji: '🤖',
		did_you_know: '試辦設計不是只開通帳號，而是每館先配5台專用電腦，並要求試辦場域訂定預約與使用規則以避免資源被少數長時間佔用；三個初始場館為國家圖書館、國立公共資訊圖書館、國立臺灣圖書館。政策文中同時提到日後擴展到47所國立大學，代表供給邏輯從少數公共入口轉成全國校園網絡。',
		talking_points: [
			'訊號濃縮：此集群原始有24則快訊，去重後17個來源訊號，其中1則明確判定為同質轉載，重複報導主要集中在同一份政策素材。',
			'教育部「館館有AI」定稿為2026年第4季先行3間國立圖書館試辦，每館先設5台設備，持借書證即可使用付費版ChatGPT、Claude、Gemini。',
			'計畫將由試辦三館延伸至47所國立大學，並指出私校可透過相關補助辦理，構成公共設施+校網擴散的雙軌路徑。',
			'AI Di+的重複報導核心一致：16所大學與185校合作，透過大專生擔任AI學伴、需求探勘與數位工具支援，主打中小學自主學習。',
			'2026年期間同時出現「AI與數位學習績優徵選」訊號，要求中小學提交教案/績優案例，顯示政策開始進入制度化評量。',
			'新竹縣百名教師取得Gemini AI認證、資策會合作推動新北市數位職能護照，代表教師能力建構與校務合作被納入推廣節點。',
			'補助與治理觀點上，部分訊號提到補助方向轉向雲端學習平台、適性化軟體與教師數位素養培訓；但目前缺少明確預算金額與評估KPI。',
		],
		quote: '教育部將於2026年第四季起，在國家圖書館、國立公共資訊圖書館與國立臺灣圖書館先行試辦『館館有AI』，民眾持借書證即可免費使用GPT與Gemini等生成式AI工具的付費版本。',
		quote_attribution: '遠見雜誌, 2026-05-08',
		quote_source_url: 'https://www.gvm.com.tw/article/129951',
		quote_source_domain: 'gvm.com.tw',
		perspectives: [
			{
				text: '公共資源導向觀點把AI定位為平權服務，重點在試點入口與設備配置，讓弱勢可用到高階模型；與此同時透過國家圖書館、公共資訊圖書館與國立圖書館做低門檻起點。',
				sources: [
					{
						name: '遠見雜誌',
						url: 'https://www.gvm.com.tw/article/129951',
					},
					{
						name: 'ETtoday',
						url: 'https://www.ettoday.net/news/20260503/3159111.htm',
					},
				],
			},
			{
				text: '執行端觀點集中在AI Di+與校務共構，強調大學、國中小與教師端的接軌，主張透過學伴、教案實驗與作法轉化來補齊現場執行，與公共入口報導形成場域差異。',
				sources: [
					{
						name: '台北傳媒',
						url: 'https://www.tcnews.com.tw/education/item/29292.html',
					},
					{
						name: 'Yahoo新聞',
						url: 'https://tw.news.yahoo.com/ai%E8%BC%94%E5%8A%A9%E6%A8%82%E5%AD%B8-%E6%95%99%E8%82%B2%E9%83%A8-ai-di-%E5%AF%A6%E9%A9%97%E6%96%B9%E6%A1%88-073049090.html',
					},
				],
			},
			{
				text: '政策治理觀點認為目前仍存在資料缺口：除少數提到補助轉向之外，新聞中仍未交代預算總額、學校參與率、成效衡量和資安監控指標，使「有多少訊號」快於「有多少證據」。',
				sources: [
					{
						name: 'TechNews',
						url: 'https://technews.tw/ai-agent/dna-decide-the-social-status/7458/',
					},
					{
						name: '中時新聞網（轉載）',
						url: 'https://money.udn.com/money/story/5612/9485601?from=udnamp-referralnews_ch1001artbottom',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-02',
				date_iso: '2026-05-02',
				content: '青年創新創業題組提案破350組且有AI題目，顯示學生端與創新生態對AI學習應用有明顯投入，同步出現AI時代數位法治素養等議題。',
			},
			{
				date: '2026-05-03',
				date_iso: '2026-05-03',
				content: '『館館有AI』由試辦訊號轉為主新聞，公開試辦三館與服務條件；另外新竹縣教師獲Gemini AI認證等校務推廣訊號同步出現。',
			},
			{
				date: '2026-05-04',
				date_iso: '2026-05-04',
				content: '教育部發布「教育AI及數位學習績優徵選」，同步可見AI Di+進入不同新聞站與社群轉載，標示政策從公告走向擴散。',
			},
			{
				date: '2026-05-06',
				date_iso: '2026-05-06',
				content: 'AI Di+在大學與185校合作脈絡具體化，並舉辦全國工作會議；同日也有資策會、在地教育局結合推動AI人才與數位職能政策訊號。',
			},
			{
				date: '2026-05-08',
				date_iso: '2026-05-08',
				content: '南韓擴建69處AI數位學習中心的國際案例曝光後，教育部對外聚焦偏鄉師培、AI及教學實作導向合作，強化政策方向與國際比較。',
			},
		],
		articles: [
			{
				title: '公私協力打造偏鄉師資培育新典範推動AI及教學實作導向創新師培模式',
				link: 'https://www.edu.tw/News_Content.aspx?n=9E7AC85F1954DDA8&s=73A09C2753775ABF',
				domain: 'edu.tw',
				date: '2026-05-08',
			},
			{
				title: '教育部「館館有AI」：拿借書證ChatGPT、Gemini免費用！資格與啟動時間？',
				link: 'https://www.gvm.com.tw/article/129951',
				domain: 'gvm.com.tw',
				date: '2026-05-08',
			},
			{
				title: '南韓擴建69處AI數位學習中心推動全民AI生活圈',
				link: 'https://tw.stock.yahoo.com/news/%E5%8D%97%E9%9F%93%E6%93%B4%E5%BB%BA69%E8%99%95ai%E6%95%B8%E4%BD%8D%E5%AD%B8%E7%BF%92%E4%B8%AD%E5%BF%83-%E6%8E%A8%E5%8B%95%E5%85%A8%E6%B0%91ai%E7%94%9F%E6%B4%BB%E5%9C%88-035516414.html',
				domain: 'tw.stock.yahoo.com',
				date: '2026-05-08',
			},
			{
				title: '若環境影響有限，政府教育補助政策應如何轉型？',
				link: 'https://technews.tw/ai-agent/dna-decide-the-social-status/7458/',
				domain: 'technews.tw',
				date: '2026-05-08',
			},
			{
				title: '教育部推AI Di+實驗方案AI學伴助培育自主學習力',
				link: 'https://www.msn.com/zh-tw/news/living/%E6%95%99%E8%82%B2%E9%83%A8%E6%8E%A8ai-di-%E5%AF%A6%E9%A9%97%E6%96%B9%E6%A1%88-ai%E5%AD%B8%E4%BC%B4%E5%8A%A9%E5%9F%B9%E8%82%B2%E8%87%AA%E4%B8%BB%E5%AD%B8%E7%BF%92%E5%8A%9B/ar-AA22kKPM',
				domain: 'msn.com',
				date: '2026-05-07',
			},
			{
				title: '教育部啟動教育機構個資行政檢查',
				link: 'https://money.udn.com/money/story/5612/9485601?from=udnamp-referralnews_ch1001artbottom',
				domain: 'money.udn.com',
				date: '2026-05-07',
			},
			{
				title: '南台灣AI生態鏈成形！數位經濟國際攜手產學資本打造「營收導向AI新時代」',
				link: 'https://n.yam.com/Article/20260506443324',
				domain: 'n.yam.com',
				date: '2026-05-06',
			},
			{
				title: 'AI進入教室！教育部推AI學伴16所大學攜手185校實驗教學',
				link: 'https://www.tcnews.com.tw/education/item/29292.html',
				domain: 'tcnews.com.tw',
				date: '2026-05-06',
			},
			{
				title: 'AI輔助樂學教育部「AI Di+實驗方案」舉辦全國工作會議',
				link: 'https://tw.news.yahoo.com/ai%E8%BC%94%E5%8A%A9%E6%A8%82%E5%AD%B8-%E6%95%99%E8%82%B2%E9%83%A8-ai-di-%E5%AF%A6%E9%A9%97%E6%96%B9%E6%A1%88-073049090.html',
				domain: 'tw.news.yahoo.com',
				date: '2026-05-06',
			},
			{
				title: '資策會攜新北市教育局推動AI人才培育與數位職能護照',
				link: 'https://www.cna.com.tw/business/chinese/432631',
				domain: 'cna.com.tw',
				date: '2026-05-06',
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
				title: '教育部推「館館有AI」計畫全國圖書館與47所大學將免費開放付費版AI工具',
				link: 'https://www.bigmedia.com.tw/article/1777763719176',
				domain: 'bigmedia.com.tw',
				date: '2026-05-03',
			},
			{
				title: '新北「人權法治列車」 攜手檢察官強化AI時代數位法治素養| 台灣好新聞',
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
		],
		domains: [
			{ name: 'edu.tw' },
			{ name: 'gvm.com.tw' },
			{ name: 'tw.stock.yahoo.com' },
			{ name: 'technews.tw' },
			{ name: 'msn.com' },
			{ name: 'money.udn.com' },
			{ name: 'n.yam.com' },
			{ name: 'tcnews.com.tw' },
			{ name: 'tw.news.yahoo.com' },
			{ name: 'cna.com.tw' },
			{ name: 'tngs.tn.edu.tw' },
			{ name: 'news.ltn.com.tw' },
			{ name: 'ettoday.net' },
			{ name: 'twpowernews.com' },
			{ name: 'bigmedia.com.tw' },
			{ name: 'today.line.me' },
			{ name: 'chinesedaily.com' },
			{ name: 'news.pchome.com.tw' },
			{ name: 'news.pchome.com.tw' },
		],
	},
	{
		id: 'gmail-ai-融入教學-高中',
		cluster_number: 'gmail-ai-融入教學-高中',
		unique_domains: 3,
		number_of_titles: 3,
		category: '教育政策',
		title: 'AI融入教學三種落地方式：高中教師可借鏡',
		short_summary: '2026-05-02 與 2026-05-06 共 3 則快訊形成「AI 融入教學」叢集；原始 Google 快訊關鍵字含「高中」，但來源實際橫跨中學、小學與高教，分別來自文匯報、荷花、中央社。三個明確訊號是：元朗商會中學於 2024/25 學年推進 AI 資優跨域專題；大角嘴天主教小學把 AI 放入 VARK 四種學習類型教學流程；東華大學觀遊系將生成式AI導入「馬太鞍自由行」導覽教學。這些訊號共同揭示，AI 正在從概念演練走向可交付的課務流程。\n此趨勢意義在於，AI 不再只出現在資訊科技課，而是同時出現在語文、跨學科專題、導覽與社會情境學習；學校將 AI 定位為「學習路徑設計」與「自學回饋」的工具，而非單向輸出平台。這代表 AI 融入教學的核心不只是硬體導入，而是任務設計、評量機制與價值導向的再分配。目前可確認的主訊號是實作樣態，但仍缺少成本、人時、成效量化與規模化落地證據。\n對台灣高中教師的直接啟示是：不要把三個案例當成可原樣複製的高中方案，而是抽出可控規模的「AI 任務切片」。例如 1 次課堂做一個跨學科導覽腳本，配合學生學習類型分組，再用 AI 生成範例由學生批改修正。再建立每週追蹤表，紀錄 AI 回饋、學生修正與教學調整，避免變成只會貼上工具的作業。高二/高三可先對接歷史、地理、生活科技等科目，並鎖定 10-20 人試行；校內共備與行政支援到位後再擴至年級制，這比一次到位的全面上線更能降低失敗風險。',
		emoji: '🤖',
		did_you_know: '元朗商會中學的做法不只停留在展示類應用。其 2024/25 學年的虛擬秦朝兵馬俑專題，先用 AI 建模供資優學生驗證歷史細節；同校更在文物導覽加入混合實境與人臉識別，並結合「AI電話」讓學生與康熙、雍正、乾隆進行超時空語音對話。這類設計顯示，AI 融入不一定提升題庫分數，而是能把閱讀、探究、文化學習與服務學習串成可驗證成果。',
		talking_points: [
			'本叢集來自 3 則原始快訊（2026-05-02 兩則、2026-05-06 一則）；Google 快訊關鍵字含「高中」，但來源實際橫跨中學、小學與高教，去重後 3 個來源訊號，同質轉播 0。',
			'元朗商會中學在 2024/25 學年以AI＋雲端做跨學科專題，學生以秦朝兵馬俑為題，用模型比對與場景展示方式完成深度學習。',
			'同一校內案例補上「混合實境」與大型語言模型，透過人臉識別與 AI 推薦閱讀系統，將資優學生導向由工具使用轉為閱讀與研究路徑設計。',
			'大角嘴天主教小學明確採用 VARK 四型（視覺、聽覺、閱讀寫作、動覺）作為分組與教學設計依據，並將 AI 介面放入寫作、音樂與圖書館檢索等日常流程。',
			'該校的「六日制」每一循環安排 1 個下午多元智能活動、5 個下午 Fun 時段，校方指出可讓學生接觸活動類型由原本約 10 類擴展到 11-12 類。',
			'大角嘴案例同時採用 AI 即時回饋與弱項題目補練，強調學生先自我檢核再由教師做二次追蹤，形成自學閉環。',
			'東華大學觀遊系由徐暘展助理教授在「旅遊目的地經營管理」導入生成式AI語音導覽，代表生成式AI可直接嵌入高教場域的專業模擬與觀光學習任務。',
		],
		quote: '「AI不僅是技術工具，更可擔當『學習路徑設計師』」',
		quote_attribution: '文匯報, 2026-05-06',
		quote_source_url: 'https://www.wenweipo.com/a/202605/06/AP69fa4f02e4b0b49ad1b9aa84.html',
		quote_source_domain: 'wenweipo.com',
		perspectives: [
			{
				text: '文匯報訊號聚焦中學資優教育制度化經驗，重點在「學中用、用中學」與社會責任導向，呈現的是學習方法論的重構；荷花則偏向基礎學校治理，強調日課配置、作息制度與學習差異化，兩者都談工具但切入問題完全不同。',
				sources: [
					{
						name: '香港文匯網 - 文匯報',
						url: 'https://www.wenweipo.com/a/202605/06/AP69fa4f02e4b0b49ad1b9aa84.html',
					},
					{
						name: '荷花',
						url: 'https://www.eugenebaby.com/articleList/%E5%8D%87%E5%AD%B8%E6%95%99%E8%82%B2/%E5%A4%A7%E8%A7%92%E5%98%B4%E5%A4%A9%E4%B8%BB%E6%95%99%E5%B0%8F%E5%AD%B8-1',
					},
				],
			},
			{
				text: '中央社訊號把AI放到高教導覽與旅遊經營管理課，顯示高教實務場景已能承接AI語音導覽、自由行任務與生成式內容製作，與K12的作業化教學形成「技能銜接」線。這裡的價值不在是否採用AI，而在如何把產出轉為可評量任務成果。',
				sources: [
					{
						name: '中央社',
						url: 'https://www.cna.com.tw/postwrite/chi/432240',
					},
				],
			},
		],
		timeline: [
			{
				date: '2026-05-02',
				date_iso: '2026-05-02',
				content: '大角嘴天主教小學揭露已將 AI 併入課程設計與 VARK 四型分群，並以 6 日循環制擴大多元智能活動與即時回饋機制。',
			},
			{
				date: '2026-05-02',
				date_iso: '2026-05-02',
				content: '東華大學觀遊系導入生成式AI進行馬太鞍自由行語音導覽試教，作為「旅遊目的地經營管理」課程的一部分。',
			},
			{
				date: '2026-05-06',
				date_iso: '2026-05-06',
				content: '元朗商會中學分享 2024/25 學年以 AI 深化資優教學與閱讀探索，並將 AI for Good 融入中學服務學習與價值教育課程。',
			},
		],
		articles: [
			{
				title: '【數教新知】AI賦能資優教育充分發揮學生潛能- 香港文匯網 - 文匯報',
				link: 'https://www.wenweipo.com/a/202605/06/AP69fa4f02e4b0b49ad1b9aa84.html',
				domain: 'wenweipo.com',
				date: '2026-05-06',
			},
			{
				title: '大角嘴天主教小學因材施教全人發展多元化學習模式結合AI輔助教學 - 荷花',
				link: 'https://www.eugenebaby.com/articleList/%E5%8D%87%E5%AD%B8%E6%95%99%E8%82%B2/%E5%A4%A7%E8%A7%92%E5%98%B4%E5%A4%A9%E4%B8%BB%E6%95%99%E5%B0%8F%E5%AD%B8-1',
				domain: 'eugenebaby.com',
				date: '2026-05-02',
			},
			{
				title: '東華大學觀遊系導入生成式AI走進馬太鞍學習自由行語音導覽 - 中央社',
				link: 'https://www.cna.com.tw/postwrite/chi/432240',
				domain: 'cna.com.tw',
				date: '2026-05-02',
			},
		],
		domains: [
			{ name: 'wenweipo.com' },
			{ name: 'eugenebaby.com' },
			{ name: 'cna.com.tw' },
		],
	},
	{
		id: 'taiwanEduPolicy-2',
		cluster_number: 2,
		unique_domains: 1,
		number_of_titles: 1,
		category: '教育政策',
		title: '週更快問：K-12資安事故與學校調查',
		short_summary: 'K12DIVE 於 2026-05-08 發布《Test yourself on the past week’s K-12 news》快問快答，將近一週 K-12 新聞濃縮為 5 題。它同時涵蓋「教育科技公司資安事故」與「美國司法部對學校的新調查」，並鼓勵讀者於社群以 #K12DivePopQuiz 回報得分。這種題目型回顧不是單篇報導，而是把一週多源資訊壓成可驗證的學習清單。\n\n這組訊息的意義在於：K-12 現象不再只是教學內容本身，而是跨越資安治理與法規責任。教育科技供應商一旦發生事件，校園可能承擔連帶影響；而 DOJ 的追蹤意味著學校面對的不只是內控，而是外部監管標準與問責條件。這對教育現場是明確警訊：資安風險管理與法規風險管理已是同一張清單中的兩項項目。\n\n對台灣高中教師而言，可直接借鏡為「每週 5 題」風險盤點：一是每週固定 1 次 15 分鐘做課務會議，抽 1 項資安事件與 1 項法規訊息；二是每月第一週由班導師確認常用學習平台版本更新與權限變更；三是把異常通報流程寫成 1~2 張表單，課內教師可在 24 小時內回報。若本校同時面臨資安事件與行政查核壓力，至少要先完成 1 份資料外流防護與存取權限名單，否則問題會由「教學工具問題」轉為「校務治理責任」的第二次傷害。',
		emoji: '🛡️',
		did_you_know: '這篇 K-12 快問主題把 5 題測驗與 #K12DivePopQuiz 串成回饋機制，核心不是提供單一爆點，而是用可作答題目讓讀者快速驗證資訊記憶。其一頁式結構同時放入「ed tech 資安事故」與「學校 DOJ 調查」兩條線，反映近端教育新聞的重點已從事件描述，轉向風險連動。',
		talking_points: [
			'Pop Quiz 形式明確標出 5 題題目，將近週新聞壓縮成可測驗清單。',
			'主題時間框架為「past week」，符合每週更新與快速回顧的報導節奏。',
			'文章同篇同時點出教育科技公司（ed tech）資安事故與美國司法部（Department of Justice）對學校的新調查。',
			'互動機制指定 hashtag #K12DivePopQuiz，讀者可在社群直接貼出分數與回應。',
			'題目框架刻意把校內治理和外部平台風險放一起，凸顯資安與法規是同時存在的校務風險。',
			'在台灣可直接轉化為每週一次的教師風險複盤：5 題→1 分鐘回報→1 週內修正權限或流程。',
		],
		quote: 'From a cybersecurity incident at an ed tech company to new Department of Justice probes into schools, what did you learn from our recent stories?',
		quote_attribution: 'K12DIVE, 2026-05-08',
		quote_source_url: 'https://www.k12dive.com/news/pop-quiz-test-k-12-news-may-4-2026/819622/',
		quote_source_domain: 'k12dive.com',
		perspectives: [
			{
				text: 'K12DIVE 採「題目式閱讀」而非長文評析，重點是訊息可測可回顧。這種做法把政策訊息轉成教學化知識，讓一線使用者用答案驗證自己的政策敏感度，與傳統報導先鋪陳、再解讀的風格形成張力。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/news/pop-quiz-test-k-12-news-may-4-2026/819622/',
					},
				],
			},
			{
				text: '同時列入 DOJ 對學校調查，使故事從「校園事件」擴展到「監管問責」敘事。這顯示媒體視角不只談個別事故，而是把學校當成可被外部追責的治理節點，對風險管理邏輯是直接升級。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/news/pop-quiz-test-k-12-news-may-4-2026/819622/',
					},
				],
			},
			{
				text: '在台灣情境，這種跨素材快轉模式可轉為教職同儕共學機制，但實務上必須補上在地規範與校務權責邊界。也就是說，內容可快速套用，方法不能直接複製。',
				sources: [
					{
						name: 'K12DIVE',
						url: 'https://www.k12dive.com/news/pop-quiz-test-k-12-news-may-4-2026/819622/',
					},
				],
			},
		],
		articles: [
			{
				title: 'Test yourself on the past week’s K-12 news',
				link: 'https://www.k12dive.com/news/pop-quiz-test-k-12-news-may-4-2026/819622/',
				domain: 'k12dive.com',
				date: '2026-05-08',
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
