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
    'stat.seniors.label':'位长者受惠',
    'stat.meals.label':  '每年供应餐食次数',
    'stat.pct.label':    '用心守护',

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
    'float.tip':    '您的善举，能为长者带来温暖与希望。',

    /* ── Stories page (st.*) ─────────────────────────────────────────────── */

    /* Meta */
    'st.meta.title':       '故事分享｜阿弥陀佛慈善敬老院',
    'st.meta.description': '来自长者、家庭及志愿者的真实故事——他们的生命因阿弥陀佛老人院而改变。',

    /* Hero */
    'st.hero.pill': '<i class="fa fa-heart"></i> 每一个生命，都值得被看见',
    'st.hero.h1':   '来自敬老院的故事',
    'st.hero.p':    '每一位走进我们大门的长者，都承载着一生的故事。这些是他们与我们分享的故事：关于坚韧、尊严，以及被关爱所带来的温暖力量。',

    /* Featured Stories section */
    'st.feat.tag': '精选故事',
    'st.feat.h2':  '来自院舍的真实心声',

    /* Featured Story 1 — Uncle Loh Keng Seng */
    'st.feat1.name': '罗庆成叔叔',
    'st.feat1.meta': '<i class="fa fa-location-dot"></i> 阿弥陀佛慈善敬老院',
    'st.feat1.cat':  '<i class="fa fa-hand-holding-heart"></i> 回馈社会',
    'st.feat1.h3':   '他默默奉献多年，现在轮到我们回报他了。',
    'st.feat1.p':    '多年来，罗叔叔默默付出，修理旧电器，将其收集回收，并将每一分钱收益捐回给老人院。他从不求认可，从不期望任何回报，只是默默付出。如今，命运完成了一个温暖的循环。这位曾经照顾我们的人，如今已成为我们这个大家庭的一员。现在轮到我们照顾他了，我们怀着满满的爱与感恩，细心照顾他。',

    /* Featured Story 2 — Aunty Wong Pek Lin */
    'st.feat2.name': '王碧莲阿姨',
    'st.feat2.meta': '<i class="fa fa-location-dot"></i> 阿弥陀佛慈善敬老院',
    'st.feat2.cat':  '<i class="fa fa-people-roof"></i> 社区',
    'st.feat2.h3':   '她独自来到这里，却成了这个家的灵魂人物。',
    'st.feat2.p':    '王阿姨来到我们这里时没有任何家人可以依靠。我们确保她永远不会感到被遗弃，永远不会独自面对这个世界。而我们发现的，是一位充满生气、欢笑和无尽故事的女性。她是这个大家庭最温暖的核心，分享着她的经历，照亮她所到之处的每个角落。她也许来时一无所有，但她给这个家带来了无价的东西：她的温暖、她的喜悦和她的精神。',

    /* Featured Story 3 — Uncle Hok Keng Sang */
    'st.feat3.name': '霍庆生叔叔',
    'st.feat3.meta': '<i class="fa fa-location-dot"></i> 阿弥陀佛慈善敬老院',
    'st.feat3.cat':  '<i class="fa fa-heart-pulse"></i> 坚韧',
    'st.feat3.h3':   '中风夺走了他一半的力气，却夺不走他的精神。',
    'st.feat3.p':    '55 岁时，中风永远改变了霍叔叔的生活。不幸的是，他独自面对这一切。是慈济发现了他，让我们有机会照顾他。他话不多，但他的行动说明一切。每天他起床、行走、锻炼，身体一半虚弱但精神依然不屈。他在力所能及时帮助照护人员，在访客来临时温暖地微笑。他无声的坚韧提醒我们，只要被爱包围，再艰难的人生也不会失去希望。',

    /* Resident Stories section paragraph */
    'st.stories.p': '每位居民都带着独特的故事入住。以下是这些长者的真实心声，他们也是我们坚持付出的原因。',

    /* Numbers band */
    'st.stat.nursing.label':    '护理与支持',
    'st.stat.dedication.label': '用心守护',

    /* Families & Volunteers */
    'st.vol.tag': '家庭与志愿者',
    'st.vol.h2':  '一路同行的家人与伙伴',
    'st.vol.p':   '我们的故事，也来自每一个信任我们的家庭，以及每一位无私奉献的志愿者。',

    'st.vol1.h4': '女儿的安心',
    'st.vol1.p':  '我父亲很固执，拒绝接受任何帮助。但在阿弥陀佛入住短短两周后，他已经主动邀请工作人员陪他散步。自从他搬进去，我再也没有为他担心过一次。',
    'st.vol1.by': '<i class="fa fa-user"></i> Sarah Ooi · 居民之女，八打灵再也',

    'st.vol2.h4': '为什么我一直坚持回来',
    'st.vol2.p':  '我在大学时开始在这里做志愿者，那是四年前的事。每个星期六我都带领音乐活动，居民们脸上的喜悦胜过我曾经获得的任何考试成绩。',
    'st.vol2.by': '<i class="fa fa-user"></i> Amirul Hadi · 志愿者，马来亚大学学生',

    'st.vol3.h4': '超越期待的医疗照护',
    'st.vol3.p':  '作为一名退休护士，我起初持怀疑态度。但这里的护理标准——详尽的护理交班记录、每一个细微动作中的爱心——丝毫不逊于我 30 年护理生涯中见过的最佳照护标准。',
    'st.vol3.by': '<i class="fa fa-user"></i> Fatimah 护士（退休）· 医疗志愿者',

    'st.vol4.h4': '放心地奉献',
    'st.vol4.p':  '我每月捐款，总想知道钱用在哪里。阿弥陀佛每季度给我一份详细说明。知道我的每一令吉买来了餐食、药物和笑容，这让我持续捐献。',
    'st.vol4.by': '<i class="fa fa-user"></i> 陈志荣 · 月度捐款人，巴生',

    /* Latest Scenes */
    'st.scenes.tag':   '<i class="fa fa-images"></i> 最新快照',
    'st.scenes.h2':    '来自老人院的最新快照',
    'st.scenes.p':     '阿弥陀佛基金会日常生活的最新片刻，由团队持续记录与分享。',
    'st.scenes.empty': '暂无照片，请稍后再来查看。',
    'st.scenes.error': '照片目前无法加载。',

    /* Photo Gallery */
    'st.gal.tag': '<i class="fa fa-camera"></i> 图片展览',
    'st.gal.h2':  '镜头下的院所生活',
    'st.gal.p':   '阿弥陀佛慈善敬老院日常生活的真实瞬间：照护、社区、信仰，以及在爱与陪伴中安然老去的尊严与从容。',

    /* Photo captions */
    'st.cap1':  '<i class="fa fa-people-roof"></i> 社区与共融',
    'st.cap2':  '<i class="fa fa-heart"></i> 居民写照',
    'st.cap3':  '<i class="fa fa-stethoscope"></i> 医疗保健',
    'st.cap4':  '<i class="fa fa-heart-pulse"></i> 每日健康检查',
    'st.cap5':  '<i class="fa fa-hands-holding-heart"></i> 悉心照护',
    'st.cap6':  '<i class="fa fa-pills"></i> 医疗支持',
    'st.cap7':  '<i class="fa fa-om"></i> 心灵圣所',
    'st.cap8':  '<i class="fa fa-children"></i> 青年探访活动',
    'st.cap9':  '<i class="fa fa-handshake-angle"></i> 社区联系',
    'st.cap10': '<i class="fa fa-house-medical"></i> 我们的院所 · 吉隆坡旧巴生路',

    /* Video section */
    'st.vid.tag':      '<i class="fa fa-film"></i> 来自我们的家',
    'st.vid.h2':       '走进阿弥陀佛慈善敬老院的日常',
    'st.vid.p':        '走进我们院所的日常生活，了解那些让它充满家的温度的人们。',
    'st.vid1.label':   '<i class="fa fa-play"></i> 我们的日常',
    'st.vid2.label':   '<i class="fa fa-play"></i> 我们的社区',
    'st.vid.fallback': '您的浏览器不支持视频标签。',

    /* CTA Band */
    'st.cta.h2':   '一起书写下一个温暖故事。',
    'st.cta.p':    '您的捐款、您的时间，或仅仅是转介一位有需要的长者——每一个善举，都能为长者的人生写下新的希望篇章。',
    'st.cta.wa':   '<i class="fab fa-whatsapp"></i> 联系我们的 WhatsApp',

    /* ── FAQ page (faq.*) ────────────────────────────────────────────────── */

    /* Meta */
    'faq.meta.title':       '常见问题 – 阿弥陀佛慈善敬老院',
    'faq.meta.description': '关于吉隆坡阿弥陀佛老人院老人照护、入院、费用、捐款及日常生活的常见问题解答。',

    /* Hero */
    'faq.hero.pill': '常见问题',
    'faq.hero.h1':   '您想了解的，<br>都在<em>这里</em>。',
    'faq.hero.p':    '关于阿弥陀佛慈善敬老院照护服务、入住申请、日常生活及捐款的常见问题解答。',
    'faq.crumb':     '常见问题',

    /* Category labels */
    'faq.cat.donations': '捐款',
    'faq.cat.assist':    '关于阿弥陀佛援助计划',
    'faq.cat.subsidies': '老人照护 — 补贴',
    'faq.cat.centre':    '关于中心',
    'faq.cat.medical':   '照护与医疗',
    'faq.cat.admission': '入院',
    'faq.cat.fees':      '费用与付款',
    'faq.cat.comms':     '沟通与家庭',
    'faq.cat.daily':     '老人照护 — 日常生活',

    /* Donations */
    'faq.q1': '善款将用于哪些用途？',
    'faq.a1': '捐款直接支持我们照护的长者——涵盖餐食、药物、照护人员薪资及日常生活需求。部分善款也会拨给阿弥陀佛援助总会，分配至其他部门，包括<strong>儿童小屋</strong>、<strong>洗肾中心</strong>及<strong>阿弥陀佛援助计划</strong>。',
    'faq.q2': '多余的实物捐赠会如何分配？',
    'faq.a2': '食物、纸尿裤及日常必需品等额外实物捐赠将拨至阿弥陀佛援助总会，并根据最大需求分配至各部门——包括<strong>儿童小屋</strong>、<strong>洗肾中心</strong>及<strong>阿弥陀佛援助计划</strong>。',
    'faq.q3': '可以以他人名义捐款吗——包括已故者？',
    'faq.a3': '可以。我们可以安排以他人名义捐款，包括作为对已故者的纪念或祝福。<div class="faq-highlight"><strong>请注意：</strong>以他人名义捐款<strong>不享有税务豁免资格</strong>。</div>',
    'faq.q4': '捐款可享税务减免吗？',
    'faq.a4': '是的。阿弥陀佛援助总会<strong>已在马来西亚内陆税收局（LHDN）注册</strong>，捐款人直接捐出的符合条件的货币捐款可享受税务豁免。请保留收据以备报税之用。',

    /* About Amitabha Assist */
    'faq.q5': '什么是阿弥陀佛援助计划？',
    'faq.a5': '阿弥陀佛援助计划是阿弥陀佛援助总会的社区外展部门。其工作包括：<br><br><strong>灾难救援</strong> — 援助受水灾和紧急事故影响的社区<br><strong>物资分发</strong> — 向有需要的人派送食物和必需品<br><strong>校园援助计划</strong> — 支持政府援助有限的偏远地区学校',

    /* Elder Care — Subsidies */
    'faq.q6': '居民入住费用是多少？',
    'faq.a6': '月费从<strong>RM 1,800 至 RM 2,500</strong>不等，取决于居民所需的护理级别和状况。请直接联系我们，根据您家人的需求获取个性化报价。',
    'faq.q7': '既然是慈善院所，为什么还要收费？',
    'faq.a7': '网站所列为未补贴前的标准收费——实际上，许多居民获得阿弥陀佛援助总会的经济援助。部分居民<strong>完全免费入住</strong>，其他人每月只需支付几百令吉。至少有一名居民由外部慈善机构（慈济）全额资助。<br><br>即使是全额费用，基金会已给予部分补贴。支付全额费用的居民所缴费用也回馈给慈善机构，帮助资助无力支付者的照护。<div class="faq-highlight">没有人会因经济困难而被拒于门外。欢迎联系我们，我们将根据您的情况提供协助。</div>',

    /* About the Centre */
    'faq.q8':  '敬老院位于何处？',
    'faq.a8':  '我们的中心位于<strong>A14, Jalan Rukun 7, Taman Gembira, 58200 Kuala Lumpur</strong>。驾车可轻松抵达，每天上午 9 时至下午 5 时开放探访。',
    'faq.q9':  '中心可容纳多少名居民？',
    'faq.a9':  '我们的中心最多可同时容纳<strong>35 名长者</strong>。若所有床位已满，我们将把您的家人列入候补名单，一旦有空位即会与您联系。',
    'faq.q10': '可接收哪些类型的长者？',
    'faq.a10': '我们欢迎<strong>能自理</strong>、<strong>需轮椅</strong>或<strong>卧床</strong>的长者。我们也接收患有<strong>失智症或其他特殊需求</strong>的长者。每位居民均获得根据其状况量身定制的照护级别。',
    'faq.q11': '入住中心有年龄限制吗？',
    'faq.a11': '<strong>没有最低或最高年龄要求</strong>。任何需要照护和支持的长者均欢迎申请入住我们的中心。',
    'faq.q12': '居民需要是佛教徒才能入住吗？',
    'faq.a12': '完全不需要。<strong>我们的中心欢迎所有种族和宗教</strong>。居民可自由祈祷和信奉自己的宗教。虽然我们的基金会有佛教根源，但我们的照护平等延伸至每一个人。',

    /* Care & Medical */
    'faq.q13': '你们有护士值班吗？',
    'faq.a13': '目前我们有<strong>训练有素的照护人员全天候值班</strong>。我们正积极规划聘请合格护士，以进一步加强我们的医疗照护服务。',
    'faq.q14': '发生医疗紧急情况时如何处理？',
    'faq.a14': '发生医疗紧急情况时，我们的工作人员将立即：<br><br><strong>1.</strong> 呼叫救护车<br><strong>2.</strong> 通知中心主任<br><strong>3.</strong> 告知居民的监护人或家属<br><br>若有必要，我们的中心主任还会陪同老年居民前往医院，以确保居民能持续获得妥善照护。',
    'faq.q15': '你们协助管理药物吗？',
    'faq.a15': '是的。我们确保所有药物得到<strong>妥善整理和安排</strong>。我们的照护人员将确保每天准时为每位居民给药。',

    /* Admission */
    'faq.q16': '如何为家人申请入住？',
    'faq.a16': '您需要填写<strong>申请表</strong>。申请入住的长者还需要进行简单的<strong>体检</strong>，以确认没有传染性疾病。我们将为您提供所需健康检查项目的清单。',
    'faq.q17': '入住需要哪些文件？',
    'faq.a17': '入住时需要以下文件：<br><br><strong>•&nbsp; 身份证（MyKad）</strong><br><strong>•&nbsp; 已填妥的申请表</strong><br><strong>•&nbsp; 最新体检报告</strong>',

    /* Fees & Payment */
    'faq.q18': '接受哪些付款方式？',
    'faq.a18': '我们接受<strong>现金</strong>、<strong>银行转账</strong>或<strong>信用卡</strong>付款。',
    'faq.q19': '每月付款截止日期是何时？',
    'faq.a19': '每月付款周期根据<strong>居民抵达中心的日期</strong>而定。例如，若居民于 10 日入住，则后续款项须于每月 10 日缴清。',
    'faq.q20': '入住时需要支付押金吗？',
    'faq.a20': '是的。入住时需支付相当于<strong>一个月费用的押金</strong>。当居民决定离开时，押金可全额退还，并将在离开后一个月内通过银行转账退回。',

    /* Communication & Family */
    'faq.q21': '家属如何了解长者的近况？',
    'faq.a21': '我们定期向家属提供居民状况的更新。一旦出现任何<strong>变化、问题或重要进展</strong>，我们将及时联系家属。您也可以在办公时间随时致电我们。',
    'faq.q22': '家属可以致电或联系老人吗？',
    'faq.a22': '可以，我们鼓励家属保持联系。只要居民有自己的手机，可以自由通话。敬请家属于<strong>晚上 9 点前</strong>来电，以免影响居民休息。',

    /* Elder Care — Daily Life */
    'faq.q23': '居民可享有哪些照护服务？',
    'faq.a23': '所有居民均可获得：<br><br><strong>每日 4 餐</strong>（早餐、午餐、下午茶及晚餐）<br><strong>24 小时照护人员</strong>全天候照顾居民<br><strong>纸尿裤</strong>初期由院方提供，之后将请家属按需要补充',
    'faq.q24': '供应什么类型的餐食？',
    'faq.a24': '中心供应的所有餐食均为<strong>全素食</strong>。若家属探访时希望为亲人准备荤食，也欢迎自行携带。',
    'faq.q25': '探访时间是什么时候？',
    'faq.a25': '欢迎家人和朋友<strong>每天上午 9 时至下午 5 时</strong>探访。<br>我们的办公时间为<strong>周一至周五，上午 9 时至下午 5 时</strong>。',
    'faq.q26': '居民可以与家人一同外出吗？',
    'faq.a26': '可以。居民可以与其<strong>监护人或家人</strong>外出。我们只需请您在带居民外出前<strong>至少提前一天</strong>通知中心，以便我们做好相应准备。',

    /* CTA Band */
    'faq.cta.h2': '仍有<em>疑问</em>？',
    'faq.cta.p':  '我们的团队随时乐意为您提供帮助。通过 WhatsApp 联系我们或直接致电——无论大小问题，我们都乐意为您解答。',

    /* ── About page (about.*) ────────────────────────────────────────────── */

    /* Meta */
    'about.meta.title':       '关于我们：阿弥陀佛慈善敬老院',
    'about.meta.description': '创立于 2000 年，阿弥陀佛慈善敬老院致力于二十余年，为马来西亚的长者提供他们真正应得的尊严、爱与关怀。',

    /* Hero */
    'about.hero.pill': '我们的故事',
    'about.hero.h1':   '以慈悲为本，<br>我们<em>改变世界</em>。',
    'about.hero.p':    '创立于 2000 年，阿弥陀佛援助总会致力于二十余年，为马来西亚的长者提供他们真正应得的尊严、爱与关怀。',

    /* About Story Section */
    'about.story.eyebrow': '阿弥陀佛的心',
    'about.story.h2':      '我们的故事<br>与<em>使命</em>',
    'about.story.p':       '创立于 2000 年，阿弥陀佛慈善敬老院（旧巴生路）一直为长者提供每日四餐、24 小时全天候照护及心灵支持，让每一位长者都能以尊严度过晚年。欢迎捐款，捐款可享税务减免。',

    /* Value List */
    'about.value1': '<strong>创立于 2000 年：</strong>在吉隆坡旧巴生路提供逾 25 年的专业老人照护。',
    'about.value2': '<strong>每日 4 餐：</strong>每天为我们照护的每位居民提供四餐营养均衡的餐食。',
    'about.value3': '<strong>24 小时全天候照护与心灵支持：</strong>全职员工提供充满爱心的心灵引导。',
    'about.value4': '<strong>可享税务减免的捐款：</strong>欢迎您的捐献，捐款符合税务豁免资格。',

    /* Milestones */
    'about.mile.eyebrow': '我们的影响',
    'about.mile.h2':      '逾二十年的<em>悉心照护</em> 💕',
    'about.mile1.label':  '服务年数',
    'about.mile2.label':  '位长者受惠',
    'about.mile3.label':  '每日照护时数',
    'about.mile4.label':  '每日营养餐食',

    /* Mission Strip */
    'about.mission.quote': '"每一位长者都应有尊严、受尊重，并感受到如家一般的温暖——我们致力于将这一切化为现实。"',
    'about.mission.attr':  '<strong>阿弥陀佛援助总会</strong> · 创立于 2000 年，吉隆坡旧巴生路',
    'about.mp1': '为每位居民提供以人为本、充满关怀的照护服务',
    'about.mp2': '与马来西亚各地合作敬老院携手，为长者提供更完善的照护服务。',
    'about.mp3': '可享税务减免的捐款，直接改善生命',
    'about.mp4': '为长者提供心灵关怀与有意义的社群',

    /* CTA Band */
    'about.cta.h2': '成为我们故事的一部分',
    'about.cta.p':  '无论您是捐款、做志愿者，还是协助转介有需要的长者——每一个善举都能改变一个生命。',

    /* ── Services page (services.*) ──────────────────────────────────────── */

    /* Meta */
    'services.meta.title':       '我们的服务 —阿弥陀佛慈善敬老院',
    'services.meta.description': '阿弥陀佛慈善敬老院提供全面的长者护理服务：经济援助、院所安置，以及吉隆坡的合作伙伴。',

    /* Hero */
    'services.hero.pill': '长者护理服务',
    'services.hero.h1':   '我们的<br><em>三大长者支援服务</em>',
    'services.hero.p':    '一系列全面的护理服务，每项服务均经过精心设计，以满足每位长者不同的照护需求。',

    /* Services Grid */
    'services.grid.tag': '我们提供的服务',
    'services.grid.h2':  '我们如何<br><em>关爱长者</em> 🏠',
    'services.grid.p':   '每项服务都植根于慈悲之心，为最需要我们的长者及其家庭提供真实而持久的支持。',
    'services.card1.h3':   '经济援助',
    'services.card1.p':    '我们为面临困境的长者提供切实的经济支持，涵盖基本医疗费用及日常生活开销，让他们在晚年能够安心、稳定、有尊严地生活。',
    'services.card1.link': '获取援助',
    'services.card2.h3':   '敬老院安置',
    'services.card2.p':    '我们在敬老院为有需要的长者提供充满爱心与关怀的空间：一个安全、支持性的环境，配备全职照护人员、专属工作人员及完善的医疗照护支援，确保他们的全面健康。',
    'services.card2.link': '立即查询',
    'services.card3.h3':   '协作支持',
    'services.card3.p':    '我们积极与合作敬老院协作，扩大我们的护理范围，携手为各地长者提供更完善的照护服务，因为没有一位长者应该缺乏帮助或陪伴。',
    'services.card3.link': '了解更多',

    /* How It Works */
    'services.how.tag': '服务流程',
    'services.how.h2':  '获取帮助<em>很简单</em>',
    'services.how.p':   '我们尽力让家庭和长者能够以最简便的方式获得他们应得的护理和支持。',
    'services.step1.h4': '联系我们',
    'services.step1.p':  '拨打我们的热线电话、通过 WhatsApp 联系我们，或填写联系表单。我们随时准备以慈悲之心聆听您的需求。',
    'services.step2.h4': '需求评估',
    'services.step2.p':  '我们的团队将与您会面，详细了解您家人的具体需求和情况。',
    'services.step3.h4': '护理计划',
    'services.step3.p':  '我们将制定个性化的支持方案：经济援助、院所安置或协作护理。',
    'services.step4.h4': '持续支持',
    'services.step4.p':  '我们将持续陪伴您，进行定期跟进、适时调整，并持续贴心的关怀与照护。',

    /* Transparency */
    'services.trans.tag': '透明度与信任',
    'services.trans.h2':  '<i class="fa fa-house"></i> 您的善款<br>如何帮助长者',
    'services.trans.p':   '每一分捐款都将直接用于改善弱势长者的生活。以下是您慷慨捐款的用途。',
    'services.fund1': '医疗费用：为有需要的长者提供诊疗、药物及专科治疗',
    'services.fund2': '每日营养餐食及膳食补充剂，以维持我们所照护的长者的健康',
    'services.fund3': '为我们的敬老院及合作机构提供安全住所、水电及维护费用',
    'services.fund4': '向社区中面临困境的长者提供直接经济援助',
    'services.fund5': '员工培训、社区关怀计划及在马来西亚各地扩展合作网络',

    /* CTA Band */
    'services.cta.h2': '准备好帮助他人或需要帮助？',
    'services.cta.p':  '立即联系我们。我们富有爱心的团队随时准备倾听、引导和一路陪伴您。',

    /* ── Blog / News page (blog.*) ───────────────────────────────────────── */

    /* Meta */
    'blog.meta.title':       '新闻与动态：阿弥陀佛援助总会长者护理',
    'blog.meta.description': '来自阿弥陀佛援助总会长者护理的最新新闻、活动、公告及筹款动态。',

    /* Hero */
    'blog.hero.h1': '新闻与动态',
    'blog.hero.p':  '随时了解阿弥陀佛慈善敬老院的最新活动、公告及社区计划。',

    /* Category labels (filter bar + dynamic post-card badges) */
    'blog.filter.all':       '全部',
    'blog.cat.event':        '活动',
    'blog.cat.news':         '新闻',
    'blog.cat.announcement': '公告',
    'blog.cat.fundraising':  '筹款',

    /* Post card UI */
    'blog.card.readMore':  '阅读更多',
    'blog.modal.viewFull': '查看完整详情',
    'blog.loading':        '加载中…',

    /* Empty state messages */
    'blog.empty.noPosts':     '暂无文章',
    'blog.empty.noPostsBody': '我们尚未发布任何新闻或动态，请稍后再来查看！',
    'blog.empty.noCatPrefix': '暂无',
    'blog.empty.noCatSuffix': '文章',
    'blog.empty.noCatBody':   '此类别目前暂无文章，请稍后再来查看，或浏览所有新闻与动态。',
    'blog.empty.viewAll':     '查看所有文章',
    'blog.empty.visitMain':   '访问主网站',

    /* ── Jobs / Careers page (jobs.*) ────────────────────────────────────── */

    /* Meta */
    'jobs.meta.title':       '招聘：阿弥陀佛慈善敬老院',
    'jobs.meta.description': '加入阿弥陀佛慈善敬老院团队。我们正在招聘富有爱心的护理员及支持人员，在马来西亚吉隆坡从事有意义的长者护理职业。',

    /* Hero */
    'jobs.hero.pill': '职业机会',
    'jobs.hero.h1':   '我们正在招聘<br><em>加入我们的团队</em>',
    'jobs.hero.p':    '欢迎加入我们温暖而有意义的团队，您的工作将产生真实的影响，并为马来西亚长者群体的福祉作出贡献。与我们共同成长，同时改变他人的生活。',
    'jobs.hero.wa':   '<i class="fab fa-whatsapp"></i> WhatsApp 联系我们：012-776 2911',

    /* Hiring Banner */
    'jobs.banner.title': '我们正在招聘！',
    'jobs.banner.text':  '欢迎加入我们温暖而有意义的团队，您的工作将产生真实的影响，并为长者社群的福祉作出贡献。与我们共同成长，同时改变他人的生活。',
    'jobs.banner.tags':  '#招聘 #工作 #护理 #长者护理',

    /* Shared WhatsApp-to-apply label (hiring banner button + modal alt link) */
    'jobs.wa.apply': '通过 WhatsApp 申请',

    /* Open Positions */
    'jobs.open.tag': '空缺职位',
    'jobs.open.h2':  '当前<em>招聘职位</em>',

    /* Job card dynamic strings */
    'jobs.badge.fulltime': '全职',
    'jobs.apply.now':      '立即申请',
    'jobs.loading':        '加载中…',
    'jobs.empty.title':    '目前暂无职缺。',
    'jobs.empty.body':     '请稍后再来查看，或通过 WhatsApp 联系我们：012-776 2911。',

    /* Why Join Us */
    'jobs.why.tag': '为何加入我们',
    'jobs.why.h2':  '一份<em>有意义</em>的事业',
    'jobs.why.p':   '不仅仅是一份工作：这是一种使命。以下是团队成员热爱这份工作的原因。',
    'jobs.why1.h4': '有意义的工作',
    'jobs.why1.p':  '每一天，您都在直接、切实地改变我们长者居民的生活。',
    'jobs.why2.h4': '充满爱心的团队',
    'jobs.why2.p':  '与志同道合、富有爱心的同事并肩工作，共同成长。',
    'jobs.why3.h4': '培训与成长',
    'jobs.why3.p':  '我们通过在职培训和专业发展机会，投资于您的成长。',
    'jobs.why4.h4': '稳定的工作',
    'jobs.why4.p':  '创立于 2000 年，我们在一个值得信赖的慈善机构中提供稳定、长期的就业机会。',
    'jobs.why5.h4': '社区影响力',
    'jobs.why5.p':  '成为一家知名非营利机构的一员，每年积极影响数百位长者的生活。',
    'jobs.why6.h4': '多语言团队',
    'jobs.why6.p':  '我们的团队使用中文、普通话、广东话、福建话、马来语及英语进行沟通。',

    /* Application Modal */
    'jobs.modal.apply':      '申请：',
    'jobs.modal.reviewNote': '我们亲自审阅每份申请',
    'jobs.form.fullName':          '全名',
    'jobs.form.email':             '电子邮件',
    'jobs.form.phone':             '电话号码',
    'jobs.form.position':          '申请职位',
    'jobs.form.coverLetter':       '求职信 / 简短留言',
    'jobs.form.namePlaceholder':   '您的全名',
    'jobs.form.msgPlaceholder':    '请介绍您自己、您的经验，以及为什么您适合这个职位…',
    'jobs.form.uploadCv':          '上传简历',
    'jobs.form.uploadHint':        '点击上传或<strong>拖放文件</strong><br><strong>接受任何格式</strong>（PDF、DOC、DOCX、JPG、PNG…） · 最大 10 MB',

    /* Trust Indicators */
    'jobs.trust.secure':  '您的数据安全无虞',
    'jobs.trust.privacy': '我们尊重您的隐私',
    'jobs.trust.reply':   '我们将在 3 天内回复',

    /* Submit & Status Messages */
    'jobs.submit.btn':       '提交申请',
    'jobs.submit.preferWa':  '想通过 WhatsApp 申请？',
    'jobs.step.uploading':   '第 1/2 步：正在上传简历…',
    'jobs.step.saving':      '第 2/2 步：正在保存申请…',
    'jobs.status.submitted': '申请已提交！我们将尽快与您联系。',
    'jobs.status.needCv':    '请在提交前上传您的简历。',
    'jobs.status.tooLarge':  '文件过大，最大 10 MB。',
    'jobs.status.uploadFailed': '上传失败，请稍后重试；如问题持续，请联系管理员',
    'jobs.cv.ready': '<strong style="color:#16a34a">文件已准备就绪，可上传</strong>'
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

    /* placeholder attribute (form inputs/textareas) */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.dataset.i18nPlaceholder;
      if (lang === 'zh' && ZH[key] !== undefined) {
        if (el.dataset.i18nPhOrig === undefined) el.dataset.i18nPhOrig = el.getAttribute('placeholder') || '';
        el.setAttribute('placeholder', ZH[key]);
      } else if (el.dataset.i18nPhOrig !== undefined) {
        el.setAttribute('placeholder', el.dataset.i18nPhOrig);
      }
    });

    /* Page meta — use page-specific overrides if declared on <html> */
    if (lang === 'zh') {
      var titleKey = document.documentElement.dataset.zhTitle || 'meta.title';
      var descKey  = document.documentElement.dataset.zhDesc  || 'meta.description';
      document.title = ZH[titleKey] || ZH['meta.title'];
      if (_descMeta) _descMeta.setAttribute('content', ZH[descKey] || ZH['meta.description']);
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
