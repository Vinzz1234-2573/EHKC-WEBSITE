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
    'st.cta.help': '<i class="fa fa-hand-holding-heart"></i> 寻求帮助'
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
