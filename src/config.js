/**
 * 主题配置文件
 * 食用指南：https://github.com/chanshiyucx/blog/issues/41
 * 联系作者：Blog https://chanshiyu.com      QQ 1124590931
 */

export default {
  /**
   * =========================================================
   *                      站点功能【必需】
   * =========================================================
   */

  /**
   * 站点标题
   */
  name: 'Bonny',
  title: '一念不生心澄然',
  subtitle: '我欲穿花寻路 直入白云深处 浩气展虹霓',

  /**
   * Github Issues 配置
   */
  username: 'IceBonny', // github 用户名
  repository: 'eeyoreBlog', // 文章仓库地址
  token: ['3d98f66b1020517ac26', '3d7928a1b6f7aea8b55aa'], // token 从中间任意位置拆开成两部分，避免 github 代码检测失效

  /**
   * Gitalk 配置，文档详见：https://github.com/gitalk/gitalk
   */
  gitalk: {
    clientID: '6e5fdf6f838b947fdac6',
    clientSecret: '4d1fa9047ba97a16a32e9d1af5ac7d046bec3591',
    repo: 'comment', // 评论仓库地址
    owner: 'IceBonny',
    admin: ['IceBonny'],
    distractionFreeMode: false, // 是否开始无干扰模式【背景遮罩】
  },

  /**
   * leancloud 配置 【注意切换为国际版】
   */
  leancloud: {
    appId: 'WhEonQyQjCb3reqTRYvuSOAL-MdYXbMMI',
    appKey: 'zHzvLrNYkUmIdOupOG0GhF5b',
  },

  /**
   * =========================================================
   *                        页面设置
   * =========================================================
   */

  /**
   * 归档页面
   */
  archiveOpts: {
    display: true, // 是否显示该页面
    enableComment: false, // 是否开启评论功能
    qoute: '浊以静之徐清 安以动之徐生', // 页面顶部一言
  },

  /**
   * 分类页面
   */
  categoryOpts: {
    display: true,
    enableComment: false,
    qoute: '人间自是有情痴 此恨不关风与月',
  },

  /**
   * 标签配置
   */
  tagOpts: {
    display: true,
    enableComment: false,
    qoute: '醉舞下山去 明月逐人归',
  },

  /**
   * 灵感页面
   */
  inspirationOpts: {
    display: true,
    enableComment: true,
    qoute: '云散月明谁点缀 天容海色本澄清',
  },

  /**
   * 书单页面
   */
  bookOpts: {
    display: true,
    enableComment: true,
    qoute: '浮云遮月不分明 谁挽长江一洗放天青',
  },

  /**
   * 友链页面
   */
  friendOpts: {
    display: true,
    enableComment: true,
    qoute: '一念不生心澄然',
  },

  /**
   * 关于页面
   */
  aboutOpts: {
    display: true,
    enableComment: true,
    qoute: '仰望等太阳升起 听见鸟群回来的声音 为我守候的人是你',
    avatar: '//cdn.jsdelivr.net/gh/IceBonny/eeyoreBlog-Imgs/blog/avatar.jpg',
    motto: '怕什么真理无穷 进一步有一步的欢喜',
    career: 'Front end development Engineer &  Life-Long Learner',
    contact: [
      {
        icon: '//cdn.jsdelivr.net/gh/IceBonny/eeyoreBlog-Imgs/blog/email.png',
        link: 'http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=Ik9bW2JHR1tNUEcMWltY',
      },
      {
        icon: '//cdn.jsdelivr.net/gh/IceBonny/eeyoreBlog-Imgs/blog/github.png',
        link: 'https://github.com/IceBonny',
      },
      {  
        icon: '//cdn.jsdelivr.net/gh/IceBonny/eeyoreBlog-Imgs/blog/jj.png',
        link: 'https://juejin.im/user/3368559359310749'
      },
      {
        icon: '//cdn.jsdelivr.net/gh/IceBonny/eeyoreBlog-Imgs/blog/music.png',
        link: 'https://music.163.com/#/user/home?id=282365329',
      },
      {
        icon: '//cdn.jsdelivr.net/gh/IceBonny/eeyoreBlog-Imgs/blog/zhihu.png',
        link: 'https://www.zhihu.com/people/icebonny',
      },

      // {
      //   icon: '//cdn.jsdelivr.net/gh/IceBonny/eeyoreBlog-Imgs/blog/rsshub.png',
      //   link: 'https://rsshub.app/github/issue/IceBonny/eeyoreBlog',
      // },
    ],
  },

  /**
   * =========================================================
   *                         主题自定义
   * =========================================================
   */

  /**
   * 加载动画
   */
  loadingImg: '//cdn.jsdelivr.net/gh/IceBonny/eeyoreBlog-Imgs@latest/blog/loading.gif',

  /**
   * 文章默认图
   */
  defaultCover: '//cdn.jsdelivr.net/gh/IceBonny/eeyoreBlog-Imgs@latest/bg/defaultCover.jpg',

  /**
   * 赛钱箱
   */
  qrcode: [
    {
      name: '支付宝',
      img: '//cdn.jsdelivr.net/gh/IceBonny/eeyoreBlog-Imgs@latest/blog/zfb.png',
    },
    {
      name: '微信',
      img: '//cdn.jsdelivr.net/gh/IceBonny/eeyoreBlog-Imgs@latest/blog/wx.png',
    },
  ],

  /**
   * 音乐播放器,
   */
  APlayer: [
    {
      name: 'うたかたの风と蝉时雨',
      artist: 'Little Planet',
      url: 'https://files.catbox.moe/wo7zjt.mp3',
      cover: '//cdn.jsdelivr.net/gh/IceBonny/eeyoreBlog-Imgs@latest/blog/cover1.jpg',
    },
    {
      name: '春の凑に',
      artist: 'TUMENECO',
      url: 'https://files.catbox.moe/ducy49.mp3',
      cover: '//cdn.jsdelivr.net/gh/IceBonny/eeyoreBlog-Imgs@latest/blog/cover2.jpg',
    },
    {
      name: '夏阳炎',
      artist: '天威梦方',
      url: 'https://files.catbox.moe/7migen.mp3',
      cover: '//cdn.jsdelivr.net/gh/IceBonny/eeyoreBlog-Imgs@latest/blog/cover3.jpg',
    },
    {
      name: '秋风のとおり道',
      artist: '风神华伝',
      url: 'https://files.catbox.moe/b58fq6.mp3',
      cover: '//cdn.jsdelivr.net/gh/IceBonny/eeyoreBlog-Imgs@latest/blog/cover4.jpg',
    },
    {
      name: '冬のわすれもの',
      artist: 'ハルノカゼ',
      url: 'https://files.catbox.moe/vwnawp.mp3',
      cover: '//cdn.jsdelivr.net/gh/IceBonny/eeyoreBlog-Imgs@latest/blog/cover5.jpg',
    },
  ],

  /**
   * 主题配色，主要用于文章、灵感、关于等卡片配色
   * 推荐一个超棒的取色站，日本の伝統色：http://nipponcolors.com/
   */
  themeColors: [
    '#B28FCE', // 薄
    '#86C166', // 苗
    '#F596AA', // 桃
    '#F19483', // 曙
    '#F9BF45', // 玉子
    '#FAD689', // 浅黄
    '#E79460', // 洗柿
    '#2EA9DF', // 露草
    '#FB966E', // 洗朱
    '#BC9F77', // 白茶
    '#867835', // 黄海松茶
    '#B9887D', // 水がき
  ],
}
