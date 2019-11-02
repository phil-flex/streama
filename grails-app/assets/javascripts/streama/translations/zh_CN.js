//= wrapped
/**
 * Created by philip on 2019-11-02.
 */
angular.module('streama.translations').config(function ($translateProvider) {
    $translateProvider.translations('cn', {
      LOGIN: {
        TITLE: '请登录',
        USERNAME: '使用者',
        PASSWORD: '密码',
        FIRST_TIME_HINT: '第一次登录？尝试两个栏位输入 \'admin\'。',
        SUBMIT: '登录',
        SESSION_EXPIRED: '您的会话自上次活动后已过期。请再次登录。'
      },
      DASHBOARD: {
        TITLE: '仪表板',
        RECOMMENDATIONS: '为您提供建议',
        NEW_RELEASES: '新版本',
        CONTINUE_WATCHING: '继续观看',
        DISCOVER_SHOWS: '发现展会',
        DISCOVER_MOVIES: '发现电影',
        DISCOVER_OTHER_VIDEOS: '发现其他视频',
        SORT: '排序:',
        SEARCH_BY_NAME: '按名称搜索...',
        FILTER_BY_TAG: '按标记筛选...',
        FILTER_BY_GENRE: '按类型筛选...',
        BROWSE_GENRES: '流览',
        LOOKING_AT_GENRE: '您正在查看流派:',
        MARK_COMPLETED: '标记已完成',
        NO_TVSHOWS_FOUND: '没有可用的电视节目',
        NO_MOVIES_FOUND: '没有可用的电影'
      },
      VIDEO: {
        RELEASED: '释放',
        IMDB: 'IMDB',
        RATING: '评级',
        VOTES: '票',
        OVERVIEW: '概述',
        GENRE: '种类',
        TRAILER: '预告片',
        SEASON: '赛季',
        SUBTITLES: '字幕',
        NO_SUBTITLE: '无字幕',
        SUBTITLE_SIZE: '字幕大小',
        VIDEO_FILES: '视频源',
        UPNEXT: '下一个...'
      },
  
      MESSAGES: {
        SHARE_SOCKET: '通过创建新会话，您将被重定向回此播放机，但这次您将在 URL 中具有唯一的会话 ID。与好友分享，与他们同步观看！',
        FILE_MISSING: '此内容有问题。似乎您从中删除了关联的视频档。',
        CODEC_PROBLEM: '将视频档添加到播放机中似乎有问题。这很可能是由于编解码器问题。尝试将其转换为相容的 HTML5 编解码器，删除当前连接的档并重新添加它。如果编解码器正常，请检查设置中的伺服器错误日志和基本 URL。',
        WRONG_BASEPATH: '您的视频获取包含使用错误的基本路径，但您是通过"{{basePath}}"流览页面。请确保在设置中设置了正确的基本路径，并且正在使用它来流览应用程式。',
        FILE_IN_FS_NOT_FOUND: '在应用程式可用的任何位置都找不到您的视频。请检查您的设置和档案系统，以确保应用程式可以访问这些档。'
      },
      MANAGE_CONTENT: '管理内容',
      MANAGE_SUB_PROFILES: '管理设定档',
      WHOS_WATCHING: '谁在看？',
      ADD_SUB_PROFILE: '添加设定档',
      EDIT_BTN: '编辑',
      DONE_BTN: '完成',
      SAVE_BTN: '保存',
      CREATE_BTN: '创建',
      CANCEL_BTN: '取消',
      DELETE_BTN: '删除',
      ENTER_NAME: '输入名称',
      EDIT_PROFILE: '编辑设定档',
      CREATE_PROFILE: '创建设定档',
      ADMIN: '管理',
      HELP: '说明',
      HELP_FAQ: '说明/常见问题解答',
      PROFILE_SETTINGS: '使用者设置',
      LOGOUT: '登出',
      CHANGE_PASSWORD: '更改密码',
      LANGUAGE_en: 'English',
      LANGUAGE_ru: 'Русский/Russian',
      LANGUAGE_de: 'Deutsch/German',
      LANGUAGE_fr: 'Français/French',
      LANGUAGE_es: 'Español/Spanish',
      LANGUAGE_kr: '한국어/Korean',
      LANGUAGE_nl: 'Nederlands/Dutch',
      LANGUAGE_pt: 'Português/Portuguese',
      LANGUAGE_ja: '日本语/Japanese',
      LANGUAGE_it: 'Italiano/Italian',
      LANGUAGE_da: 'Dansk/Danish',
      LANGUAGE_ar: 'عربى/Arabic',
      PROFIlE: {
        USERNAME: '使用者',
        FULL_NAME: '全名',
        LANGUAGE: '语言',
        PAUSE_ON_CLICK: '按一下时暂停视频',
        FAVORITE_GENRES: '最喜欢的类型',
        AMOUNT_OF_MEDIA_ENTRIES: '仪表板上的视频数量（在"载入更多"之前）',
        SAVE: '保存设定档',
        PASS: '密码',
        OLD_PASS: '旧密码',
        NEW_PASS: '新密码',
        NEW_PASS_PLACEHOLDER: '新密码（最少 6 个字元）',
        REPEAT_PASS: '重复密码',
        PASS_ERROR_EMPTY: '密码不能为空',
        PASS_ERROR_LENGTH: '密码必须至少 6 个字元长',
        PASS_ERROR_REPEAT: '密码需要匹配',
        SAVE_PASS: '设置新密码'
      },
  
      SORT_OPTIONS: {
        AZ: 'A-Z',
        ZA: 'Z-A',
        NEWEST_ADDED: '最近添加',
        OLDEST_ADDED: '首次添加',
        NEWEST_RELEASED: '最新版本',
        OLDEST_RELEASED: '最旧版本',
        NEWEST_AIRED: '最近播出',
        OLDEST_AIRED: '最旧的空气日期',
        NEWEST_REPORTED: '最近报导',
        OLDEST_REPORTED: '最旧报告',
        NEWEST_UPDATED: '最近更新',
        OLDEST_UPDATED: '最旧更新'
      },
  
      FAQ: {
        UPLOAD_VIDEO: {
          TITLE: '如何上传视频？',
          TEXT: "您可以通过访问\"管理内容\"功能表上传视频。选择是否要上传电影、电视节目或其他视频。按一下萤幕左侧垂直巡览列上的相关子功能表选项。您可以通过按一下\"创建新电影/电视节目/其他视频\"按钮或键入要上载到搜索栏的视频的名称并从搜寻结果中选择相关影片来上传视频。之后，您可以选择手动填写视频资讯，也可以从 MovieDB 载入其资讯。之后，您可以通过按一下\"管理档\"按钮上传视频和字幕档。"
        },
        DELETE_VIDEO: {
          TITLE: '如何删除视频？',
          TEXT: "您可以通过以下方法删除视频：转到视频的信息页面，然后单击\“管理文件\”并选择红色的垃圾桶图标。 单击\“编辑电影\”并选择\“删除电影\”是另一种方法。 您也可以使用\“管理内容\”菜单中的\“文件管理器\”。 您可以在那里查看所有已上传的文件。 单击红色的垃圾桶图标删除文件。"
        },
        VIDEO_FORMATS: {
          TITLE: '支持哪些视频格式？',
          TEXT: "Streama当前仅支持HTML5播放器支持的视频文件格式。 您可以通过将文件拖放到浏览器上的空白标签来测试视频文件是否兼容HTML5播放器。"
        },
        SUBTITLES: {
          TITLE: '如何为视频添加字幕？',
          TEXT: "您可以通过单击视频信息页面中的管理文件按钮为视频添加字幕。 您可以在其中拖放字幕文件。 以前，您必须手动将它们转换为兼容的文件格式，但现在不再需要！ 现在，该应用程序将为您处理该问题。"
        },
        INVITE_USERS: {
          TITLE: '如何邀请朋友观看讬管视频？',
          TEXT: "您可以邀请朋友使用您讬管的Streama，与朋友分享视频。 转到“用户”菜单，然后单击“邀请用户”按钮。 填写邀请表单，然后选择被邀请者的角色。 具有管理员角色的用户可以编辑用户和设置。 具有Content Manager角色的用户可以编辑内容。 您的朋友将通过电子邮件收到有关邀请的通知。 您还可以通过单击视频播放器的“共享”按钮并将会话URL链接到他们来与您的朋友共享视频会话。"
        },
        BASE_URL: {
          TITLE: "什么是基本URL，应如何配置？",
          TEXT: "基本URL用于视频和邀请电子邮件中的链接。"
        },
        NOTIFICATIONS: {
          TITLE: "什么是通知？",
          TEXT: "您可以通过向他们邀请的朋友发送通知消息来通知他们有关上传的视频。 您可以通过以下方式将它们添加到您的通知队列中，方法是：单击视频信息页面中的“添加通知”按钮，然后转到“通知”菜单，然后单击“发送队列”按钮。"
        },
        VIDEO_PLAYER_SHORTCUTS: {
          TITLE: "视频播放器有快捷键吗？",
          TEXT: "是。 暂停/取消暂停：空格。 管理音量：向上或向下箭头键。 向前/向后跳过视频：向左或向右箭头键。 跳远：控制键+向左或向右。 全屏开/关：alt + Enter。 字幕开/关：S，静音：M，返回上一屏幕：删除或退格。"
        },
        FAVORITE_GENRES: {
          TITLE: "用户喜欢的流派如何影响流？",
          TEXT: "快来了..."
        },
        USEFUL_LINKS: {
          TITLE: "有用的链接",
          TEXT: "快来了..."
        }
      }
    });
  });
  
  