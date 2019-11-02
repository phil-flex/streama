//= wrapped
/**
 * Created by antonia on 14/05/16.
 */
angular.module('streama.translations').config(function ($translateProvider) {
  $translateProvider.translations('hk', {
    LOGIN: {
      TITLE: '請登錄',
      USERNAME: '使用者',
      PASSWORD: '密碼',
      FIRST_TIME_HINT: '第一次登錄？嘗試兩個欄位輸入 \'admin\'。',
      SUBMIT: '登錄',
      SESSION_EXPIRED: '您的會話自上次活動後已過期。請再次登錄。'
    },
    DASHBOARD: {
      TITLE: '儀錶板',
      RECOMMENDATIONS: '為您提供建議',
      NEW_RELEASES: '新版本',
      CONTINUE_WATCHING: '繼續觀看',
      DISCOVER_SHOWS: '發現展會',
      DISCOVER_MOVIES: '發現電影',
      DISCOVER_OTHER_VIDEOS: '發現其他視頻',
      SORT: '排序:',
      SEARCH_BY_NAME: '按名稱搜索...',
      FILTER_BY_TAG: '按標記篩選...',
      FILTER_BY_GENRE: '按類型篩選...',
      BROWSE_GENRES: '流覽',
      LOOKING_AT_GENRE: '您正在查看流派:',
      MARK_COMPLETED: '標記已完成',
      NO_TVSHOWS_FOUND: '沒有可用的電視節目',
      NO_MOVIES_FOUND: '沒有可用的電影'
    },
    VIDEO: {
      RELEASED: '釋放',
      IMDB: 'IMDB',
      RATING: '評級',
      VOTES: '票',
      OVERVIEW: '概述',
      GENRE: '種類',
      TRAILER: '預告片',
      SEASON: '賽季',
      SUBTITLES: '字幕',
      NO_SUBTITLE: '無字幕',
      SUBTITLE_SIZE: '字幕大小',
      VIDEO_FILES: '視頻源',
      UPNEXT: '下一個...'
    },

    MESSAGES: {
      SHARE_SOCKET: '通過創建新會話，您將被重定向回此播放機，但這次您將在 URL 中具有唯一的會話 ID。與好友分享，與他們同步觀看！',
      FILE_MISSING: '此內容有問題。似乎您從中刪除了關聯的視頻檔。',
      CODEC_PROBLEM: '將視頻檔添加到播放機中似乎有問題。這很可能是由於編解碼器問題。嘗試將其轉換為相容的 HTML5 編解碼器，刪除當前連接的檔並重新添加它。如果編解碼器正常，請檢查設置中的伺服器錯誤日誌和基本 URL。',
      WRONG_BASEPATH: '您的視頻獲取包含使用錯誤的基本路徑，但您是通過"{{basePath}}"流覽頁面。請確保在設置中設置了正確的基本路徑，並且正在使用它來流覽應用程式。',
      FILE_IN_FS_NOT_FOUND: '在應用程式可用的任何位置都找不到您的視頻。請檢查您的設置和檔案系統，以確保應用程式可以訪問這些檔。'
    },
    MANAGE_CONTENT: '管理內容',
    MANAGE_SUB_PROFILES: '管理設定檔',
    WHOS_WATCHING: '誰在看？',
    ADD_SUB_PROFILE: '添加設定檔',
    EDIT_BTN: '編輯',
    DONE_BTN: '完成',
    SAVE_BTN: '保存',
    CREATE_BTN: '創建',
    CANCEL_BTN: '取消',
    DELETE_BTN: '刪除',
    ENTER_NAME: '輸入名稱',
    EDIT_PROFILE: '編輯設定檔',
    CREATE_PROFILE: '創建設定檔',
    ADMIN: '管理',
    HELP: '説明',
    HELP_FAQ: '説明/常見問題解答',
    PROFILE_SETTINGS: '使用者設置',
    LOGOUT: '登出',
    CHANGE_PASSWORD: '更改密碼',
    LANGUAGE_en: 'English',
    LANGUAGE_ru: 'Русский/Russian',
    LANGUAGE_de: 'Deutsch/German',
    LANGUAGE_fr: 'Français/French',
    LANGUAGE_es: 'Español/Spanish',
    LANGUAGE_kr: '한국어/Korean',
    LANGUAGE_nl: 'Nederlands/Dutch',
    LANGUAGE_pt: 'Português/Portuguese',
    LANGUAGE_ja: '日本語/Japanese',
    LANGUAGE_it: 'Italiano/Italian',
    LANGUAGE_da: 'Dansk/Danish',
    LANGUAGE_ar: 'عربى/Arabic',
    PROFIlE: {
      USERNAME: '使用者',
      FULL_NAME: '全名',
      LANGUAGE: '語言',
      PAUSE_ON_CLICK: '按一下時暫停視頻',
      FAVORITE_GENRES: '最喜歡的類型',
      AMOUNT_OF_MEDIA_ENTRIES: '儀表板上的視頻數量（在"載入更多"之前）',
      SAVE: '保存設定檔',
      PASS: '密碼',
      OLD_PASS: '舊密碼',
      NEW_PASS: '新密碼',
      NEW_PASS_PLACEHOLDER: '新密碼（最少 6 個字元）',
      REPEAT_PASS: '重複密碼',
      PASS_ERROR_EMPTY: '密碼不能為空',
      PASS_ERROR_LENGTH: '密碼必須至少 6 個字元長',
      PASS_ERROR_REPEAT: '密碼需要匹配',
      SAVE_PASS: '設置新密碼'
    },

    SORT_OPTIONS: {
      AZ: 'A-Z',
      ZA: 'Z-A',
      NEWEST_ADDED: '最近添加',
      OLDEST_ADDED: '首次添加',
      NEWEST_RELEASED: '最新版本',
      OLDEST_RELEASED: '最舊版本',
      NEWEST_AIRED: '最近播出',
      OLDEST_AIRED: '最舊的空氣日期',
      NEWEST_REPORTED: '最近報導',
      OLDEST_REPORTED: '最舊報告',
      NEWEST_UPDATED: '最近更新',
      OLDEST_UPDATED: '最舊更新'
    },

    FAQ: {
      UPLOAD_VIDEO: {
        TITLE: '如何上傳視頻？',
        TEXT: "您可以通過訪問\"管理內容\"功能表上傳視頻。選擇是否要上傳電影、電視節目或其他視頻。按一下螢幕左側垂直巡覽列上的相關子功能表選項。您可以通過按一下\"創建新電影/電視節目/其他視頻\"按鈕或鍵入要上載到搜索欄的視頻的名稱並從搜尋結果中選擇相關影片來上傳視頻。之後，您可以選擇手動填寫視頻資訊，也可以從 MovieDB 載入其資訊。之後，您可以通過按一下\"管理檔\"按鈕上傳視頻和字幕檔。"
      },
      DELETE_VIDEO: {
        TITLE: '如何刪除視頻？',
        TEXT: "您可以通過以下方法刪除視頻：轉到視頻的信息頁面，然後單擊\“管理文件\”並選擇紅色的垃圾桶圖標。 單擊\“編輯電影\”並選擇\“刪除電影\”是另一種方法。 您也可以使用\“管理內容\”菜單中的\“文件管理器\”。 您可以在那裡查看所有已上傳的文件。 單擊紅色的垃圾桶圖標刪除文件。"
      },
      VIDEO_FORMATS: {
        TITLE: '支持哪些視頻格式？',
        TEXT: "Streama當前僅支持HTML5播放器支持的視頻文件格式。 您可以通過將文件拖放到瀏覽器上的空白標籤來測試視頻文件是否兼容HTML5播放器。"
      },
      SUBTITLES: {
        TITLE: '如何為視頻添加字幕？',
        TEXT: "您可以通過單擊視頻信息頁面中的管理文件按鈕為視頻添加字幕。 您可以在其中拖放字幕文件。 以前，您必須手動將它們轉換為兼容的文件格式，但現在不再需要！ 現在，該應用程序將為您處理該問題。"
      },
      INVITE_USERS: {
        TITLE: '如何邀請朋友觀看託管視頻？',
        TEXT: "您可以邀請朋友使用您託管的Streama，與朋友分享視頻。 轉到“用戶”菜單，然後單擊“邀請用戶”按鈕。 填寫邀請表單，然後選擇被邀請者的角色。 具有管理員角色的用戶可以編輯用戶和設置。 具有Content Manager角色的用戶可以編輯內容。 您的朋友將通過電子郵件收到有關邀請的通知。 您還可以通過單擊視頻播放器的“共享”按鈕並將會話URL鏈接到他們來與您的朋友共享視頻會話。"
      },
      BASE_URL: {
        TITLE: "什麼是基本URL，應如何配置？",
        TEXT: "基本URL用於視頻和邀請電子郵件中的鏈接。"
      },
      NOTIFICATIONS: {
        TITLE: "什麼是通知？",
        TEXT: "您可以通過向他們邀請的朋友發送通知消息來通知他們有關上傳的視頻。 您可以通過以下方式將它們添加到您的通知隊列中，方法是：單擊視頻信息頁面中的“添加通知”按鈕，然後轉到“通知”菜單，然後單擊“發送隊列”按鈕。"
      },
      VIDEO_PLAYER_SHORTCUTS: {
        TITLE: "視頻播放器有快捷鍵嗎？",
        TEXT: "是。 暫停/取消暫停：空格。 管理音量：向上或向下箭頭鍵。 向前/向後跳過視頻：向左或向右箭頭鍵。 跳遠：控制鍵+向左或向右。 全屏開/關：alt + Enter。 字幕開/關：S，靜音：M，返回上一屏幕：刪除或退格。"
      },
      FAVORITE_GENRES: {
        TITLE: "用戶喜歡的流派如何影響流？",
        TEXT: "快來了..."
      },
      USEFUL_LINKS: {
        TITLE: "有用的鏈接",
        TEXT: "快來了..."
      }
    }
  });
});
