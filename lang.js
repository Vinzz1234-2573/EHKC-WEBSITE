/* lang.js — shared i18n module for EHKC website
 * Add data-i18n="key" (textContent swap) or data-i18n-html="key" (innerHTML swap)
 * to any translatable element, then call initLang() after this script loads.
 * Keys are namespaced per page; new pages append their keys to ZH below.
 */

(function () {
  /* ─── Translation strings (ZH = Chinese Simplified) ─────────────────────── */
  var ZH = {
    /* Meta */
    'meta.title':       '阿弥陀佛慈善敬老院：关爱伴您回家',
    'meta.description': '阿弥陀佛慈善敬老院：为吉隆坡的长者提供全天候关怀照护、经济援助及院所安置服务。',

    /* Navigation */
    'nav.home':      '首页',
    'nav.services':  '服务',
    'nav.about':     '关于我们',
    'nav.stories':   '故事',
    'nav.news':      '新闻',
    'nav.careers':   '招聘',
    'nav.seekHelp':  '寻求帮助',
    'nav.signIn':    '登录',
    'nav.donate':    '捐款',
    'nav.donateNow': '立即捐款',

    /* Hero */
    'hero.eyebrow': '创立于 2000 年 · 吉隆坡',
    'hero.h1':      '无论人生哪个阶段，<em>关爱始终如家</em><span class="sw">。</span>',
    'hero.sub':     '阿弥陀佛慈善敬老院提供 24 小时全天候照护、经济援助及院舍安置服务，让马来西亚每一位长者都能在晚年活得有尊严、舒适且充满意义。',
    'hero.c1.title': '探索我们的照护',
    'hero.c1.body':  '探索我们全面的长者照护服务，包括院舍照护、安置服务，以及根据每位长者需求量身打造的医疗支持。',
    'hero.c1.link':  '查看服务',
    'hero.c2.title': '联系我们',
    'hero.c2.body':  '我们的护理顾问现在随时为您服务。通过 WhatsApp 联系我们，获取有关安置、费用及个性化护理计划的免费咨询。',
    'hero.c2.link':  '通过 WhatsApp 联系',
    'hero.c3.title': '全天候护理',
    'hero.c3.body':  '专业护士 24 小时轮班照护，持续监测生命体征、协助给药，并及时应对突发状况。',
    'hero.c4.title': '医疗支持',
    'hero.c4.body':  '定期医生探诊、专科转诊及院内物理治疗，每天持续维护和改善每位居民的健康。',
    'hero.c5.title': '每日四餐',
    'hero.c5.body':  '由营养师规划的每日四餐——早餐、午餐、下午茶及晚餐——兼顾饮食限制与个人喜好。',

    /* Stats */
    'stat.years.unit':   '年',
    'stat.years.label':  '爱心照护',
    'stat.seniors.label':'获得支持的长者',
    'stat.meals.label':  '每年供应餐食次数',
    'stat.pct.label':    '全身心投入照护',

    /* Services */
    'svc.eyebrow': '我们的服务',
    'svc.h2':      '长者照护的三大核心服务',
    'svc.p':       '从长者寻求帮助的那一刻起，我们便为其量身定制服务，涵盖经济援助、院所安置及合作网络，确保每个人都能得到帮助。',
    'svc.s1.h3':   '经济援助',
    'svc.s1.p':    '为面临困境的长者提供直接援助，涵盖医疗费用、生活必需品及长期生活开销，保密处理，无繁琐手续。',
    'svc.s1.link': '申请支持',
    'svc.s2.h3':   '敬老院安置服务',
    'svc.s2.p':    '为没有家庭支持的长者提供安全、温暖的居所，配备全职员工、每日四餐及医疗援助。',
    'svc.s2.link': '参观我们的院所',
    'svc.s3.h3':   '合作伙伴',
    'svc.s3.p':    '我们与马来西亚各地的老人院合作，共享资源，扩大覆盖范围，确保帮助触手可及。',
    'svc.s3.link': '查看合作伙伴',

    /* About */
    'about.eyebrow':  '我们是谁',
    'about.h2':       '二十五年如一日的承诺。',
    'about.p':        '阿弥陀佛慈善敬老院于 2000 年在旧巴生路开设，秉持一个简单的承诺：让每一位入住的长者都能有尊严地度过余生。这一承诺从未改变。',
    'about.v1.title': '以慈悲践行关爱',
    'about.v1.p':     '照护不是我们出售的服务，而是我们的团队在每个班次中不断践行的准则。',
    'about.v2.title': '以尊严为本',
    'about.v2.p':     '无论是日常起居还是共同用餐，居民都被当作家人而非病人对待。',
    'about.v3.title': '公开透明的善款运用',
    'about.v3.p':     '每一笔捐款均可申请税务减免，并可追溯其实际用途。',
    'about.cta':      '阅读我们的故事',

    /* Gallery */
    'gal.eyebrow':    '院所生活',
    'gal.h2':         '平凡日子中的静默非凡',
    'gal.p':          '在走廊喝早茶，在日间活动室玩游戏，饭前在花园散步。这些片刻让阿弥陀佛慈善敬老院所真正感受如家。',
    'gal.s1.eyebrow': '社区生活',
    'gal.s1.h3':      '每天相聚',
    'gal.s1.p':       '居民们在遮阴的庭院里喝早茶、午后闲聊，悠然的节奏让这个家充满家庭温暖。',
    'gal.s2.eyebrow': '居民写照',
    'gal.s2.h3':      '每张脸都述说着故事',
    'gal.s2.p':       '每个笑容背后都是一段丰富的人生。我们的居民每天为这个家带来数十年的智慧、温暖与坚韧。',
    'gal.s3.eyebrow': '医疗保健',
    'gal.s3.h3':      '每天关注健康',
    'gal.s3.p':       '我们的员工定期进行健康检查：血压、血氧、血糖，确保每位居民得到持续监测和照护。',
    'gal.s4.eyebrow': '社区探访',
    'gal.s4.h3':      '跨越代沟',
    'gal.s4.p':       '学校团体和青年志愿者定期探访，带来活力和欢笑，提醒我们整个社会都在关爱长者。',
    'gal.s5.eyebrow': '心灵关怀',
    'gal.s5.h3':      '宁静与静思的空间',
    'gal.s5.p':       '我们的祈祷室为居民提供一个静谧的每日礼拜场所。心灵关怀是阿弥陀佛全人健康的重要组成部分。',

    /* Promise / Parallax */
    'promise.eyebrow':  '我们的承诺',
    'promise.quote':    '能够找到可靠的人照顾父亲，是我最在意的事。他们真诚又有爱心，在这里做得非常好。',
    'promise.attr':     'Evon 女士，居民之女',
    'promise.f1.title': '驻场医疗探诊',
    'promise.f1.p':     '每周门诊、持续的慢性病护理计划，以及全天候护理服务，惠及每位居民。',
    'promise.f2.title': '心灵关怀',
    'promise.f2.p':     '每日诵经与辅导，开放所有宗教，尊重每种传统。',
    'promise.f3.title': '家庭联系渠道',
    'promise.f3.p':     '鼓励探访。可按要求提供电话、视频及面对面更新。',

    /* Why Us */
    'whyus.eyebrow': '为什么家庭选择我们',
    'whyus.h2':      '值得信赖的照护品质。',
    'whyus.p':       '不走捷径，不流于形式。只有训练有素、全情投入、能叫出每位居民名字的照护人员。',
    'whyus.c1.h4':   '全天候人员配置',
    'whyus.c1.p':    '全年每天、全天候轮班照护，绝无例外。',
    'whyus.c2.h4':   '医疗资源',
    'whyus.c2.p':    '定期医生探诊、药物监督，以及必要时的医院协调。',
    'whyus.c3.h4':   '每日四餐',
    'whyus.c3.p':    '营养丰富、由营养师指导的餐食，可根据医疗和文化需求调整。',
    'whyus.c4.h4':   '可享税务减免的捐款',
    'whyus.c4.p':    '每笔捐款均符合马来西亚税务豁免资格，并完全透明公开。',

    /* Resident Stories */
    'stories.eyebrow':  '居民故事',
    'stories.h2':       '一次改变一个生命。',
    'stories.p':        '每位居民都有属于自己的独特故事。以下分享的是这些长者的心声，他们正是我们一切努力的核心。',
    'stories.s1.cat':   '回馈社会',
    'stories.s1.q':     '多年来，罗叔叔默默付出，修理旧电器，并将所得全数捐回敬老院。他从不求认可，从不期望任何回报。如今，轮到我们守护他，以满满的爱与感恩回馈他的无私奉献。',
    'stories.s1.name':  '罗庆成叔叔',
    'stories.s1.meta':  '阿弥陀佛慈善敬老院',
    'stories.s2.cat':   '社区',
    'stories.s2.q':     '王阿姨入住时，身边已没有家人可以依靠。我们发现她是一位充满生气、欢笑和无尽故事的女性。她给这个家带来了无价的东西：她的温暖、她的喜悦和她的精神。',
    'stories.s2.name':  '王碧莲阿姨',
    'stories.s2.meta':  '阿弥陀佛慈善敬老院',
    'stories.s3.cat':   '坚韧',
    'stories.s3.q':     '55 岁时，中风改变了霍叔叔的生活，让他独自面对。每天他起床、行走、锻炼，身体一半虚弱但精神依然不屈。他让我们明白，只要被爱包围，人性的坚韧永远不会被击垮。',
    'stories.s3.name':  '霍庆生叔叔',
    'stories.s3.meta':  '阿弥陀佛慈善敬老院',

    /* CTA Band */
    'cta.h2':       '一份慈悲，改变一个生命。',
    'cta.p':        '您的捐赠资助餐食、药物和从容的照护，让一栋房子成为某人祖父母温暖的家。',
    'cta.donate':   '立即捐款',
    'cta.volunteer':'成为志愿者',
    'cta.seekHelp': '寻求帮助',

    /* Person in Charge */
    'pic.eyebrow': '负责人',
    'pic.name':    '黎建成先生',
    'pic.role':    '院长 · 阿弥陀佛慈善敬老院',
    'pic.bio':     '负责日常运营、家庭联络及居民福祉。如有安置咨询、经济援助申请或安排探访，黎建成先生是您的第一联络人。',
    'pic.cta':     'WhatsApp 联系黎先生',

    /* FAQ */
    'faq.eyebrow': '常见问题',
    'faq.h2':      '为家庭解答。',
    'faq.p':       '以下是家庭最常问我们的几个问题。完整列表请访问我们的 FAQ 页面。',
    'faq.q1':      '居民入住费用是多少？',
    'faq.a1':      '月费从 RM 1,800 至 RM 2,500 不等，取决于居民所需的护理级别。许多居民获得补贴——有些免费入住。没有人因经济困难而被拒之门外。',
    'faq.q2':      '可接收哪些类型的长者？',
    'faq.a2':      '我们欢迎生活能自理、需使用轮椅或长期卧床的长者入住，包括患有失智症或有特殊需求者。照护根据每位居民的状况量身定制。',
    'faq.q3':      '居民需要是佛教徒才能入住吗？',
    'faq.a3':      '完全不需要。欢迎所有种族和宗教。居民可自由信奉自己的宗教。我们的照护平等开放给所有人。',
    'faq.q4':      '探访时间是什么时候？',
    'faq.a4':      '欢迎家庭每天上午 9 时至下午 5 时探访。我们的办公时间为周一至周五，上午 9 时至下午 5 时。',
    'faq.q5':      '如何为家人申请入住？',
    'faq.a5':      '填写申请表并安排基本体检，以确认没有传染性疾病风险。所需文件：身份证、填妥的申请表及最新的体检报告。',
    'faq.q6':      '捐款可享税务减免吗？',
    'faq.a6':      '是的。阿弥陀佛援助总会已在马来西亚内陆税收局（LHDN）注册，符合条件的货币捐款可享受税务豁免。请保留收据以备报税。',
    'faq.seeAll':  '查看所有常见问题',

    /* Location / Map */
    'loc.eyebrow':    '我们的位置',
    'loc.h2':         '找到我们的中心',
    'loc.p':          '欢迎莅临我们位于吉隆坡的中心。我们的团队随时准备迎接您和您的家人。',
    'loc.name':       '阿弥陀佛慈善敬老院',
    'loc.addr.lb':    '地址',
    'loc.phone.lb':   '电话',
    'loc.hotline.lb': '热线',
    'loc.hours.lb':   '营业时间',
    'loc.hours.val':  '周一至周日：上午 9:00 – 下午 5:00',
    'loc.dir.title':  '询问路线',
    'loc.dir.sub':    'WhatsApp 联系我们获取帮助',

    /* Footer */
    'foot.p':          '阿弥陀佛慈善敬老院。为吉隆坡长者提供 24 小时照护、经济援助及院舍安置服务。创立于 2000 年。',
    'foot.c1.h4':      '老人院',
    'foot.c1.faq':     '常见问题',
    'foot.c1.news':    '新闻',
    'foot.c1.home':    '首页',
    'foot.c1.about':   '关于我们',
    'foot.c1.donate':  '捐款',
    'foot.c1.services':'服务',
    'foot.c2.h4':      '阿弥陀佛援助总会',
    'foot.c2.careers': '招聘',
    'foot.c2.volunteer':'志愿者',
    'foot.c2.dialysis':'洗肾中心',
    'foot.c2.children':'儿童小屋',
    'foot.c3.h4':      '联系方式',
    'foot.c3.hours':   '周一至周日 上午 9 时至下午 5 时',
    'foot.copyright':  '© 2026 阿弥陀佛援助总会 · 老人护理计划 · 版权所有。',

    /* Float Bar */
    'float.donate': '立即捐款',
    'float.tip':    '您的善举，能为长者带来温暖与希望。'
  };

  /* ─── Core: apply / restore translations ────────────────────────────────── */
  var _origTitle = document.title;
  var _origDesc  = '';
  var _descMeta  = document.querySelector('meta[name="description"]');
  if (_descMeta) _origDesc = _descMeta.getAttribute('content');

  function applyLang(lang) {
    /* textContent elements */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.dataset.i18n;
      if (lang === 'zh' && ZH[key] !== undefined) {
        if (!el.dataset.i18nOrig) el.dataset.i18nOrig = el.innerHTML;
        el.textContent = ZH[key];
      } else if (el.dataset.i18nOrig) {
        el.innerHTML = el.dataset.i18nOrig;
      }
    });

    /* innerHTML elements (hero h1, loc name) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.dataset.i18nHtml;
      if (lang === 'zh' && ZH[key] !== undefined) {
        if (!el.dataset.i18nOrig) el.dataset.i18nOrig = el.innerHTML;
        el.innerHTML = ZH[key];
      } else if (el.dataset.i18nOrig) {
        el.innerHTML = el.dataset.i18nOrig;
      }
    });

    /* Page meta */
    if (lang === 'zh') {
      document.title = ZH['meta.title'];
      if (_descMeta) _descMeta.setAttribute('content', ZH['meta.description']);
      document.documentElement.lang = 'zh';
    } else {
      document.title = _origTitle;
      if (_descMeta) _descMeta.setAttribute('content', _origDesc);
      document.documentElement.lang = 'en';
    }

    /* Toggle button labels */
    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      btn.textContent = lang === 'zh' ? 'EN' : '中文';
    });

    localStorage.setItem('site_lang', lang);
  }

  /* ─── Public: call once per page after DOM is ready ─────────────────────── */
  window.initLang = function () {
    var stored = localStorage.getItem('site_lang') || 'en';
    if (stored === 'zh') applyLang('zh');

    document.querySelectorAll('.lang-toggle').forEach(function (btn) {
      /* set initial label in case initLang runs before DOM paint */
      btn.textContent = stored === 'zh' ? 'EN' : '中文';
      btn.addEventListener('click', function () {
        var current = localStorage.getItem('site_lang') || 'en';
        applyLang(current === 'zh' ? 'en' : 'zh');
      });
    });
  };
})();
