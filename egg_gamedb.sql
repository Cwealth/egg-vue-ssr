/*
 Navicat Premium Data Transfer

 Source Server         : localhost_53399
 Source Server Type    : MySQL
 Source Server Version : 50633
 Source Host           : localhost:53399
 Source Schema         : egg_gamedb

 Target Server Type    : MySQL
 Target Server Version : 50633
 File Encoding         : 65001

 Date: 31/12/2020 21:35:10
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for cms_banner
-- ----------------------------
DROP TABLE IF EXISTS `cms_banner`;
CREATE TABLE `cms_banner`  (
  `id` int(8) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `typeId` int(8) NOT NULL COMMENT '类型Id',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '名称',
  `imgUrl` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '图片路径',
  `adUrl` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '广告链接',
  `sortId` int(11) NULL DEFAULT 99 COMMENT '排序',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '横幅图' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of cms_banner
-- ----------------------------
INSERT INTO `cms_banner` VALUES (15, 1, '铁血守卫', '/upload/20201216/1608084977051_0.05984721061573195.jpg', '', 1);
INSERT INTO `cms_banner` VALUES (16, 1, '国战之三国志', '/upload/20201216/1608085013684_0.7273206732559321.jpg', '', 2);
INSERT INTO `cms_banner` VALUES (17, 1, '妖灵契', '/upload/20201216/1608085094207_0.28340351485336845.jpg', '', 3);
INSERT INTO `cms_banner` VALUES (18, 2, '混沌起源', '/upload/20201216/1608085216822_0.1233396442544814.jpg', '', 3);
INSERT INTO `cms_banner` VALUES (19, 2, '一刀传世', 'http://testgambox.oss-cn-shanghai.aliyuncs.com/20201223/1608725961180_0.3848354725226997.png', '', 1);
INSERT INTO `cms_banner` VALUES (20, 2, '九州仙剑传', '', '', 2);

-- ----------------------------
-- Table structure for cms_banner_type
-- ----------------------------
DROP TABLE IF EXISTS `cms_banner_type`;
CREATE TABLE `cms_banner_type`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '类型名称',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '横幅图类型' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of cms_banner_type
-- ----------------------------
INSERT INTO `cms_banner_type` VALUES (1, '首页');
INSERT INTO `cms_banner_type` VALUES (2, '手机游戏');

-- ----------------------------
-- Table structure for cms_game_operate
-- ----------------------------
DROP TABLE IF EXISTS `cms_game_operate`;
CREATE TABLE `cms_game_operate`  (
  `id` int(8) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '名称',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '游戏平台' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of cms_game_operate
-- ----------------------------
INSERT INTO `cms_game_operate` VALUES (1, 'Android');
INSERT INTO `cms_game_operate` VALUES (2, 'IOS');
INSERT INTO `cms_game_operate` VALUES (3, 'H5');

-- ----------------------------
-- Table structure for cms_game_type
-- ----------------------------
DROP TABLE IF EXISTS `cms_game_type`;
CREATE TABLE `cms_game_type`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '类型名称',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '游戏类型' ROW_FORMAT = Compact;

-- ----------------------------
-- Records of cms_game_type
-- ----------------------------
INSERT INTO `cms_game_type` VALUES (1, '经典卡牌');
INSERT INTO `cms_game_type` VALUES (2, '回合游戏');
INSERT INTO `cms_game_type` VALUES (3, '传奇大作');
INSERT INTO `cms_game_type` VALUES (4, '战争策略');
INSERT INTO `cms_game_type` VALUES (5, '模拟养成');
INSERT INTO `cms_game_type` VALUES (6, '轻松休闲');
INSERT INTO `cms_game_type` VALUES (7, '即时战斗');
INSERT INTO `cms_game_type` VALUES (8, '热门仙侠');
INSERT INTO `cms_game_type` VALUES (9, '三国策略');
INSERT INTO `cms_game_type` VALUES (10, '剧情文字');
INSERT INTO `cms_game_type` VALUES (11, '西方魔幻');
INSERT INTO `cms_game_type` VALUES (12, '西游题材');
INSERT INTO `cms_game_type` VALUES (13, '经典武侠');
INSERT INTO `cms_game_type` VALUES (14, '角色扮演');

-- ----------------------------
-- Table structure for cms_games
-- ----------------------------
DROP TABLE IF EXISTS `cms_games`;
CREATE TABLE `cms_games`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '游戏名称',
  `iconUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '游戏图标',
  `bannerUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '封面图',
  `iosLink` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'ios下载地址',
  `androidLink` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '安卓下载地址',
  `describe` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '简介',
  `clickNum` int(11) NULL DEFAULT 0 COMMENT '下载次数',
  `typeId` int(11) NOT NULL COMMENT '类型Id',
  `images` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '图片集',
  `operateId` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '平台Id',
  `sortId` int(11) NULL DEFAULT 99 COMMENT '排序',
  `createTime` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `updateTime` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  `webUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'H5地址',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 30 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of cms_games
-- ----------------------------
INSERT INTO `cms_games` VALUES (13, '长安十二英雄', '/upload/20201216/1608086030323_0.7084104964729274.png', NULL, NULL, NULL, '《长安十二英雄》是一款经典卡牌对战类游戏，游戏中，玩家可以通过收集武将，打通关卡，与玩家对战，夺宝，擂台比武等众多精彩玩法，体验不一样的隋唐风情。', 9999, 1, '/upload/20201216/1608086068673_0.9614760414862915.jpg,/upload/20201216/1608086073554_0.1802455367536897.jpg,/upload/20201216/1608086078050_0.1265950130875002.jpg,/upload/20201216/1608086081783_0.09334195855138239.jpg,/upload/20201216/1608086085423_0.2205423191056186.jpg', '1', 99, '2020-12-16 10:34:46', '2020-12-16 14:32:25', NULL);
INSERT INTO `cms_games` VALUES (14, '大唐仙灵', '/upload/20201216/1608087416657_0.6929330373899121.png', NULL, NULL, NULL, '大唐仙灵，是一款放置类策略游戏，玩家可以收集大唐中百余种仙灵并对其进行养成。玩家可以将数十只仙灵组成战队，不同的组合可以创造出不同的流派。 游戏易于上手，却有很多值得玩家研究的内容。 考虑到手机用户的碎片化游戏时间，将休闲玩法与策略深度结合在一起，把角色的属性简化为一个主要的战斗力，使玩家可以更直观地辨别角色的强度，进行直接的强强对抗。 另一方面，为了保证游戏的策略深度及避免千篇一律的玩法，给熟悉游戏的玩家提供更多样的游戏体验，我们创造了四种相互克制的次级属性，并围绕着四种次级属性为每个角色设计了数个技能，当玩家深入了解这些角色特点和技能后，可以通过自己的喜好搭配出许多出其不意的组合。', 999, 1, '/upload/20201216/1608087420979_0.05674130078049111.jpg,/upload/20201216/1608087422952_0.8750097006021311.jpg,/upload/20201216/1608087426869_0.13374552723582633.jpg,/upload/20201216/1608087430264_0.5497100718860868.jpg,/upload/20201216/1608087433322_0.04525168476018249.jpg', '1', 99, '2020-12-16 10:57:14', '2020-12-16 14:32:21', NULL);
INSERT INTO `cms_games` VALUES (15, '怪兽宝贝', '/upload/20201216/1608087530612_0.7961802841135384.gif', NULL, NULL, NULL, '欧气召唤！策略战斗，享受放置乐趣，快派出你的怪兽小队开启魔幻冒险之旅！~拒绝爆肝，，睡觉挂机，天降怪兽！~与数百万的玩家一同踏上魔幻旅程,带领你的怪兽小队深入古老的废墟,对抗邪恶的黑暗势力!~一起配养你独一无二的角色,联手其他玩家对抗邪恶势力！~宏大的世界观,将背景与游戏体验做了完美的结合,不断历练感受战斗的乐趣！', 5656, 1, '/upload/20201216/1608087535560_0.05948183661841955.jpg,/upload/20201216/1608087537859_0.11640070059416097.jpg,/upload/20201216/1608087540319_0.07688880029429379.jpg,/upload/20201216/1608087544406_0.9356502154338475.jpg,/upload/20201216/1608087547277_0.540437515101722.jpg', '1', 99, '2020-12-16 10:59:08', '2020-12-16 10:59:08', NULL);
INSERT INTO `cms_games` VALUES (16, '万灵召唤', '/upload/20201216/1608087616403_0.005838083398779448.png', NULL, NULL, NULL, '《万灵召唤》是一款有特色的集换式卡牌竞技手游。拥有精美魔幻风格设计，英雄+卡牌娱乐方式，五大阵营多种战术搭配。数百张卡牌任你搭配，每个职业都有自己的特色，是对战场的把握，还是按部就班的碾压开来开始战斗吧！', 9999, 1, '/upload/20201216/1608087619629_0.10865540101818683.jpg,/upload/20201216/1608087621832_0.7710887043655319.jpg,/upload/20201216/1608087624052_0.47468300498890925.jpg,/upload/20201216/1608087627788_0.7595259540591313.jpg,/upload/20201216/1608087630579_0.4526405074084032.jpg', '1', 99, '2020-12-16 11:00:31', '2020-12-16 14:32:28', NULL);
INSERT INTO `cms_games` VALUES (17, '契约战记', '/upload/20201216/1608087724118_0.4258867337316872.gif', NULL, NULL, NULL, '这是一款以西方神话为背景的日韩风卡牌手游，独创斗牌玩法、百变时装系统、家园和家族的社交互动，带给你休闲而又富含乐趣的游戏体验。', 9999, 1, '/upload/20201216/1608087726643_0.9546039004457225.jpg,/upload/20201216/1608087730169_0.36169609706544326.jpg,/upload/20201216/1608087733719_0.14301759581655316.jpg,/upload/20201216/1608087736595_0.7941388726617615.jpg,/upload/20201216/1608087739789_0.19556461169952466.jpg', '1', 99, '2020-12-16 11:02:20', '2020-12-16 14:32:15', NULL);
INSERT INTO `cms_games` VALUES (18, '小小三国志 - 送随机SSR', '/upload/20201216/1608087808883_0.601906465036995.gif', NULL, NULL, NULL, '趣味三国冒险，爆笑武将养成！《小小三国志》是一款Q版三国卡牌游戏，脑洞清奇，画风呆萌，三国名将通通都到碗里来！懒人模式，轻松挂机升级打Boss，在上班的同时一统三国；精美卡通渲染，流畅骨骼动画，鲜活可爱的人物让人爱到无法自拔；多样玩法其乐无穷，给你活力四射的愉快三国体验！', 9999, 1, '/upload/20201216/1608087811303_0.9246568999661506.jpg,/upload/20201216/1608087813292_0.8009713570001247.jpg,/upload/20201216/1608087817405_0.2030658807017658.jpg,/upload/20201216/1608087820788_0.7316116419293384.jpg,/upload/20201216/1608087824177_0.047534050706785624.jpg', '1', 99, '2020-12-16 11:03:45', '2020-12-16 14:32:11', NULL);
INSERT INTO `cms_games` VALUES (19, '傲剑情缘 h5', '/upload/20201216/1608100465227_0.2342387433738149.png', '/upload/20201216/1608100467822_0.9601207163862211.jpg', NULL, NULL, '《傲剑情缘》是一款全新的以武侠江湖题材背景的RPG游戏。精美的人物刻画、丰富真实的江湖场景、热血刺激的打斗渲染，给你身临其境的直观游戏感受。天纵英才群侠出，铁血豪情论英雄。这里有上百个极具特色、风格迥异的武侠等待你的召唤，与你一起结伴而行，共闯天涯路。', 66464, 2, '/upload/20201216/1608100558478_0.3926229079950272.jpg,/upload/20201216/1608100558795_0.5601970097664934.jpg,/upload/20201216/1608100558797_0.36556872282814235.jpg,/upload/20201216/1608100558801_0.2334030760628132.jpg,/upload/20201216/1608100558802_0.24174539545232077.jpg', '3,2,1', 1, '2020-12-16 14:34:35', '2020-12-23 21:01:30', NULL);
INSERT INTO `cms_games` VALUES (20, '一刀传世(新）', '/upload/20201216/1608100699243_0.2915225385266984.png', 'http://gamboxrelease.oss-cn-beijing.aliyuncs.com/20201223/1608729573677_0.6227542304918927.png', NULL, NULL, '龙大哥也忍不住要玩的《一刀传世》，是一款集MMO与RPG为一体的全新传奇手游，游戏拥有独家五分身玩法、VIP全部免费，更有官方内挂加持…难怪大哥也停不下来。~', 145456, 3, '/upload/20201216/1608100712074_0.9318634029397657.jpg,/upload/20201216/1608100712074_0.6007931346965236.jpg,/upload/20201216/1608100712078_0.30167689662178754.jpg,/upload/20201216/1608100712078_0.9140012548535901.jpg,/upload/20201216/1608100712079_0.7941438479103804.jpg', '3', 2, '2020-12-16 14:38:33', '2020-12-23 21:19:35', NULL);
INSERT INTO `cms_games` VALUES (21, '斗罗大陆（新）', '/upload/20201216/1608100795216_0.07711138624925451.png', '/upload/20201216/1608100797394_0.24705301588642947.gif', NULL, NULL, '《斗罗大陆》H5正版授权巨作——~正版授权巨作《斗罗大陆》H5震撼来袭；~原著小说改编，沉浸式剧情还原，原创策略玩法，多武魂觉醒，万千~魂环搭配，与你创造斗罗大陆的新篇章！快来征战星斗大森林，狩猎~魂兽获得最强魂环；争霸斗魂场，角逐最强魂师；激战杀戮之都、通~关海神九考，继承神祇之位！马上进入斗罗大陆，携手史莱克七怪，~振兴唐门！', 34154, 5, '/upload/20201216/1608100802042_0.17544400711403707.jpg,/upload/20201216/1608100802042_0.9374177438106259.jpg,/upload/20201216/1608100802046_0.11124871643886491.jpg,/upload/20201216/1608100802046_0.6609448616864539.jpg,/upload/20201216/1608100802052_0.3133847589793126.jpg', '3', 3, '2020-12-16 14:40:02', '2020-12-16 14:40:13', NULL);
INSERT INTO `cms_games` VALUES (22, '龙魂创世', '/upload/20201216/1608100892872_0.8627041754371563.png', '/upload/20201216/1608100898198_0.5352499512477478.png', NULL, NULL, '《龙魂创世》是一款以三国时代为背景制作，深刻打造回合制养成的游戏大作，丰富多样的对战玩法让你体验最具策略性的回合制，它同时是一款极具策略、挑战智商的手机游戏，它玩的不只是数值碾压，你的培养思路、武将搭配、战略布阵配合才是你称霸天下的关键！', 1454165, 4, '/upload/20201216/1608100903186_0.8771509776431108.png,/upload/20201216/1608100903186_0.2619170148502248.png,/upload/20201216/1608100903187_0.8085624489425114.png,/upload/20201216/1608100903187_0.8819669989058851.png,/upload/20201216/1608100903189_0.8062057352327399.png', '2', 4, '2020-12-16 14:41:44', '2020-12-16 14:41:44', NULL);
INSERT INTO `cms_games` VALUES (23, '骑战三国', '/upload/20201216/1608101093975_0.3508543638384485.png', '/upload/20201216/1608101101111_0.4845305841076917.gif', NULL, NULL, '《骑战三国》是一款三国题材的策略卡牌游戏。游戏中融入武将收集、军团战、名城争夺、草船借箭等玩法, 经典完美传承，三国策略卡牌情怀再续！~开局就送白马银枪赵子龙，助主公战吕布，统三国，谁敢与争锋？更有超过上百的三国群英，丰富的武将阵容搭配，数十种合体大招组合，狂拽炫酷，酣畅战斗！更有三国美人齐聚，翘首待与主公合体，貂蝉小姐姐约你来战！一吕二赵三典韦，四关五马六张飞，尽可收归麾下，助主公攻城掠地占名城！~三国乱世我主沉浮，运筹帷幄之中，决胜千里之外，谁敢与争锋？', 45465, 4, '/upload/20201216/1608101110684_0.9675050761832038.jpg,/upload/20201216/1608101110685_0.5806893254849697.jpg,/upload/20201216/1608101110689_0.15796414551369264.jpg,/upload/20201216/1608101110690_0.1347379231122683.jpg,/upload/20201216/1608101110692_0.5281978311132158.jpg', '2', 5, '2020-12-16 14:43:04', '2020-12-16 14:45:11', NULL);
INSERT INTO `cms_games` VALUES (24, '疯狂酋长', '/upload/20201216/1608101050387_0.5261103813855694.gif', '/upload/20201216/1608101053556_0.11686633721233508.png', NULL, NULL, '《疯狂酋长》是一款2DQ版画风的回合制H5手游。游戏中玩家需要扮演一名初出茅庐的勇者，探索整个蛮荒大陆，在探索的过程中可以招募各种强力乖萌的宠物和伙伴，在蛮荒大陆中自由的战斗和探索。', 56544, 6, '/upload/20201216/1608101068214_0.6450230173753622.png,/upload/20201216/1608101068214_0.3365100542706623.png,/upload/20201216/1608101068214_0.6294062520119224.png,/upload/20201216/1608101068214_0.904136903789087.png,/upload/20201216/1608101068214_0.02942338672648548.png', '3', 6, '2020-12-16 14:44:29', '2020-12-16 14:44:29', NULL);
INSERT INTO `cms_games` VALUES (25, '皇上吉祥2', '/upload/20201216/1608101219472_0.01957698180100831.png', '/upload/20201216/1608101222770_0.843894404468656.jpg', NULL, NULL, '《皇上吉祥2》是以皇帝第一视角为主线的策略养成类游戏，故事发生在明末清初，穿越大清登基即位，本以为是太平盛世，怎料各方势力纷争不断，朝廷权臣当道，边疆炮火连天，江山社稷危在旦夕，一场关乎国家社稷的大战，正在悄然发酵。', 45454, 14, '/upload/20201216/1608101227394_0.1553911407167634.jpg,/upload/20201216/1608101227391_0.9912539873206825.jpg,/upload/20201216/1608101227394_0.5302564662221514.jpg,/upload/20201216/1608101227394_0.5869969382118514.jpg,/upload/20201216/1608101227398_0.7140874896666689.jpg', '3', 7, '2020-12-16 14:47:09', '2020-12-23 19:53:03', NULL);
INSERT INTO `cms_games` VALUES (26, '三生三世十里桃花', '/upload/20201216/1608101322635_0.9782866234519836.gif', '/upload/20201216/1608101324814_0.6377890014043937.jpg', NULL, NULL, '西山居重金打造的次代回合制《三生三世十里桃花》问情开启预约！虽是正版授权，但我们更看重玩法：百种仙侣萌宠，订制化培养你的个性伴侣；一呼百应的浓情社交，找师傅，找情缘，告别枯燥挂机。DIY自己的战袍，用海量外观装扮独一无二的自己，更有江湖帮派、自由交易、另类剧情等你体验！这个三生三世，有点不一样~', 4154, 5, '/upload/20201216/1608101329410_0.26085548231157185.jpg,/upload/20201216/1608101329410_0.7440717427056809.jpg,/upload/20201216/1608101329414_0.73073712348918.jpg,/upload/20201216/1608101329418_0.4001999966597052.jpg', '2', 8, '2020-12-16 14:48:50', '2020-12-28 21:28:33', 'dsdsd');
INSERT INTO `cms_games` VALUES (27, '西游女儿国', '', '', '12122121', '测试', '《西游女儿国》是西游修仙题材的回合制挂机类游戏，拥有精美的手绘场景和宠物造型，精致炫酷的动作技能特效设计皆使玩家眼前一亮，也更加凸显游戏的可玩性。游戏拥有丰富的宠物、助战、坐骑，能充分满足玩家的成长、收集乐趣。', 454645, 3, 'http://testgambox.oss-cn-shanghai.aliyuncs.com/20201225/1608899249933_0.7076262801415978.jpg,http://testgambox.oss-cn-shanghai.aliyuncs.com/20201225/1608899250117_0.3884073836803159.jpg', '2,1,3', 665, '2020-12-16 15:44:31', '2020-12-28 21:28:27', 'sdsjnfsdifhjoi');
INSERT INTO `cms_games` VALUES (28, 'sadsads', '', '', 'dsds', 'dsdsds', 'eradasd', 0, 1, '', '1,2,3', 99, '2020-12-28 21:30:20', '2020-12-28 21:30:20', 'gfdsfretgwdwd');
INSERT INTO `cms_games` VALUES (29, 'dsadasds', 'http://testgambox.oss-cn-shanghai.aliyuncs.com/20201228/1609162236451_0.4435672519855105.png', 'http://testgambox.oss-cn-shanghai.aliyuncs.com/20201228/1609162243427_0.8209980861532675.png', 'sadsasdfsdsa', 'dsdasdsad', 'ffadasgsw', 3, 2, '', '1,2', 99, '2020-12-28 21:30:49', '2020-12-28 21:30:49', 'dsdasds');

-- ----------------------------
-- Table structure for cms_news
-- ----------------------------
DROP TABLE IF EXISTS `cms_news`;
CREATE TABLE `cms_news`  (
  `id` int(8) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `imgUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '展示图',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '标题',
  `typeId` int(8) NOT NULL COMMENT '新闻类型',
  `sortId` int(11) NULL DEFAULT 99 COMMENT '排序Id',
  `content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '内容',
  `gameId` int(8) NULL DEFAULT NULL COMMENT '关联游戏Id',
  `createTime` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `updateTime` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  `realmId` int(8) NULL DEFAULT NULL COMMENT '域名Id',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of cms_news
-- ----------------------------
INSERT INTO `cms_news` VALUES (3, '/upload/20201216/1608120905156_0.7168466190348495.jpg', '《梦幻之星OL2：新起源》PC封测将于明年1月进行', 1, 99, '<div class=\"content padb_83\">\n<p><span style=\"font-size: 16px;\">虽然世嘉寄予厚望的《梦幻之星OL2：新起源》尚未确定全球发行日期，但日本玩家很快就会有机会体验这款游戏。该发行商最近宣布，该地区PC玩家的封闭测试将于2021年1月底开始。这将持续到2021年2月初。</span></p>\n<p><img src=\"https://ossh5.memewan.com/Editor/2020-12-16/5fd9cf491cbdc.jpg\" alt=\"\" /></p>\n<p><span style=\"font-size: 16px;\">现在申请已经开放，将持续到2021年1月4日，将会提供5万个名额。要求包括生活在日本，拥有现有的PSO2帐户，并满足beta版的硬件要求。会有两个测试-第一个是针对当前的玩家，将套用他们目前的PSO2角色数据。</span></p>\n<p><span style=\"font-size: 16px;\">目前还不清楚主机版本是否也会在日本进行封闭测试。其他地区的封闭测试也尚未公布。《梦幻之星OL2：新起源》将于明年在北美面向XSX/S, Xbox One和PC发行，同时在日本面向PS4, PC和Switch(云游戏)发行。</span></p>\n</div>', NULL, '2020-12-16 20:15:39', '2020-12-16 20:30:18', NULL);
INSERT INTO `cms_news` VALUES (4, '/upload/20201216/1608122045811_0.7786506479922393.jpg', 'IGN公开《生化危机8》全新截图 最具冲击力的“生化危机”', 1, 99, '<div class=\"content padb_83\">\n<p><span style=\"font-size: 16px;\">卡普空给了IGN三张独家截图，并透漏了该作的一些信息，表示该作是迄今为止最具冲击力的&ldquo;生化危机&rdquo;，我们一起来了解一下。</span></p>\n<p><span style=\"font-size: 16px;\">《生化危机8》的制作人Peter Fabiano对IGN表示：&ldquo;我们很高兴《生化危机：村庄》能在2021年上市，粉丝们在明年就能够体验该作。我们觉得这款游戏是过去25年来最具积累的生化危机作品，游戏中充满了粉丝喜爱的恐惧元素以及惊喜。除此以外，还有更多谜题需要玩家解决。&rdquo;</span></p>\n<p><span style=\"font-size: 16px;\">他还表示：&ldquo;我们希望粉丝能够喜欢探索这个荒凉的、白雪皑皑的村庄，在那里，新的敌人正等待着玩家去战斗。玩家在再次操控伊森&middot;温特斯，体验更多在前作中没有出现的剧情。新的技术使我们能让玩家沉浸在以前无法实现的游戏体验中，我们希望该作成为迄今为止最具冲击力的生化危机游戏。&rdquo;</span></p>\n<p><span style=\"font-size: 16px;\">《生化危机8》将于2021年登陆PC、PS5、XSX，据之前评级信息，玩家或许在2021年4月看到该作身影。</span></p>\n<p><span style=\"font-size: 16px;\"><strong>IGN独家截图：</strong></span></p>\n<p><span style=\"font-size: 16px;\"><strong><img src=\"https://ossh5.memewan.com/Editor/2020-12-16/5fd9cee785a2d.jpg\" alt=\"\" /><img src=\"https://ossh5.memewan.com/Editor/2020-12-16/5fd9ceeaecf71.jpg\" alt=\"\" /><img src=\"https://ossh5.memewan.com/Editor/2020-12-16/5fd9cef099115.jpg\" alt=\"\" /><br /></strong></span></p>\n<p><span style=\"font-size: 16px;\"><strong>&nbsp;</strong></span></p>\n<p><span style=\"font-size: 16px;\"><strong>&nbsp;</strong></span></p>\n</div>', 27, '2020-12-16 20:34:23', '2020-12-25 21:16:16', NULL);
INSERT INTO `cms_news` VALUES (5, 'http://testgambox.oss-cn-shanghai.aliyuncs.com/20201225/1608902248862_0.5173708363027427.png', '手机在线游戏【神指三国（即将下架）】下架公告', 2, 0, '<div class=\"content padb_83\">\n<p><span style=\"font-size: 18px;\">《神指三国》停运关服公告</span></p>\n<p><span style=\"font-size: 18px;\">亲爱的各位玩家，十分遗憾的通知您，由于各种原因，经慎重评估后决定《神指三国》将于2021年1月29日10：00正式停止游戏运营并关闭服务器，具体安排如下：</span></p>\n<p><span style=\"font-size: 18px;\">1.2020年11月30日10:00起不再开启新服；</span></p>\n<p><span style=\"font-size: 18px;\">2.2020年12月30日10:00起关闭充值、注册等功能服务；</span></p>\n<p><span style=\"font-size: 18px;\">3.2021年1月29日10:00关闭服务器，正式停止游戏运营，届时玩家将无法登录游戏。</span></p>\n<p><span style=\"font-size: 18px;\">感谢大家一直以来的理解与支持，三国霸业，短暂告别，期待与您的下次重逢，祝您游戏愉快！</span></p>\n</div>', 27, '2020-12-16 21:07:36', '2020-12-28 19:41:05', NULL);
INSERT INTO `cms_news` VALUES (6, 'http://testgambox.oss-cn-shanghai.aliyuncs.com/20201228/1609155689797_0.4679974600309502.png', '1212', 1, 99, '', 27, '2020-12-28 19:41:31', '2020-12-28 20:53:47', 3);
INSERT INTO `cms_news` VALUES (7, 'http://testgambox.oss-cn-shanghai.aliyuncs.com/20201228/1609158673377_0.8027809579802496.png', '测试', 2, 99, '<p>大萨达所</p>', 27, '2020-12-28 20:31:18', '2020-12-28 21:19:08', 4);

-- ----------------------------
-- Table structure for cms_news_type
-- ----------------------------
DROP TABLE IF EXISTS `cms_news_type`;
CREATE TABLE `cms_news_type`  (
  `id` int(8) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '名称',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of cms_news_type
-- ----------------------------
INSERT INTO `cms_news_type` VALUES (1, '活动');
INSERT INTO `cms_news_type` VALUES (2, '福利');
INSERT INTO `cms_news_type` VALUES (3, '公告');
INSERT INTO `cms_news_type` VALUES (4, '攻略');

-- ----------------------------
-- Table structure for cms_realm
-- ----------------------------
DROP TABLE IF EXISTS `cms_realm`;
CREATE TABLE `cms_realm`  (
  `id` int(8) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '域名',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of cms_realm
-- ----------------------------
INSERT INTO `cms_realm` VALUES (2, 'www.youquwan.com');
INSERT INTO `cms_realm` VALUES (3, 'www.gzshoujiafang.com');
INSERT INTO `cms_realm` VALUES (4, '192.168.2.138:7000');

-- ----------------------------
-- Table structure for cms_service
-- ----------------------------
DROP TABLE IF EXISTS `cms_service`;
CREATE TABLE `cms_service`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '区服名称',
  `gameId` int(11) NOT NULL COMMENT '游戏Id',
  `time` varchar(13) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '开服时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of cms_service
-- ----------------------------
INSERT INTO `cms_service` VALUES (11, ' 冒险177服', 24, '1608120438000');
INSERT INTO `cms_service` VALUES (12, ' 昊天6226服', 21, '1609313975000');
INSERT INTO `cms_service` VALUES (13, '冒险160服', 24, '1608480000000');
INSERT INTO `cms_service` VALUES (14, '混沌183服', 20, '1607356800000');
INSERT INTO `cms_service` VALUES (15, '昊天6224服', 21, '1607788800000');
INSERT INTO `cms_service` VALUES (16, '昊天6240服', 20, '1608480000000');
INSERT INTO `cms_service` VALUES (17, ' 127区', 27, '1606924800000');
INSERT INTO `cms_service` VALUES (18, ' 128区', 27, '1607067933000');
INSERT INTO `cms_service` VALUES (19, '昊天6240服', 20, '1607270400000');
INSERT INTO `cms_service` VALUES (20, '昊天6236服', 21, '1608746400000');

-- ----------------------------
-- Table structure for sys_config
-- ----------------------------
DROP TABLE IF EXISTS `sys_config`;
CREATE TABLE `sys_config`  (
  `configId` int(11) NOT NULL AUTO_INCREMENT COMMENT '系统配置主键',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '网站名称',
  `webCode` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '备案号',
  `copyright` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '版权',
  `serviceEmail` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱地址',
  `keywords` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '网站关键字',
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '网站描述',
  `logoUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '网站logo',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '网站底部备注',
  `androidLink` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '安卓APP下载地址',
  `iosLink` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '苹果APP下载地址',
  `ico` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '网站ico',
  PRIMARY KEY (`configId`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_config
-- ----------------------------
INSERT INTO `sys_config` VALUES (1, '有趣玩', '鄂ICP备18007922号-2', 'Copyright ©2018-2020 youxihezi.net 游戏盒子 版权所有', '1501583478@qq.com', '有趣玩、游戏盒子、手游、页游、H5游戏一站搞定', '有趣玩、游戏盒子、手游、页游、H5游戏一站搞定', 'http://testgambox.oss-cn-shanghai.aliyuncs.com/20201223/1608726335140_0.5314668637114726.png', '声明：本站点为非赢利性网站 不接受任何赞助和广告', 'https://www.baidu.com/', 'https://www.baidu.com/', '/upload/20201217/1608206059967_0.6673789849571237.ico');

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色code',
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色名',
  `createTime` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `updateTime` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `code`(`code`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES (1, 'admin', '管理员', '2020-12-18 14:34:57', '2020-12-18 15:37:30');
INSERT INTO `sys_role` VALUES (2, 'user', '测试', '2020-12-18 15:22:43', '2020-12-18 16:27:22');
INSERT INTO `sys_role` VALUES (14, 'deve', '开发人员', '2020-12-18 17:13:24', '2020-12-18 17:13:24');

-- ----------------------------
-- Table structure for sys_role_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_user`;
CREATE TABLE `sys_role_user`  (
  `userId` bigint(20) NOT NULL,
  `roleId` int(11) NOT NULL,
  PRIMARY KEY (`userId`, `roleId`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_role_user
-- ----------------------------
INSERT INTO `sys_role_user` VALUES (1, 1);
INSERT INTO `sys_role_user` VALUES (1, 2);
INSERT INTO `sys_role_user` VALUES (2, 2);

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'Id',
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '角色账号',
  `password` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '密码',
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '角色名',
  `headImgUrl` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '头像地址',
  `phone` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '电话',
  `sex` tinyint(1) NULL DEFAULT 0 COMMENT '性别',
  `enabled` tinyint(1) NOT NULL DEFAULT 1 COMMENT '状态',
  `createTime` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `updateTime` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES (1, 'admin', '4b66e55f6a73ef96f2fbdb93db5eb8c0', '愤怒的羊驼', 'http://testgambox.oss-cn-shanghai.aliyuncs.com/20201223/1608726790957_0.8662230860876612.jpg', '1501583478', 0, 1, '2020-12-15 05:18:05', '2020-12-23 20:33:12');
INSERT INTO `sys_user` VALUES (2, 'lzq', 'f3859630ccb72eeb1f34e4c1de06856d', '愤怒的褶裙', '/upload/20201216/1608085713529_0.6175081473978012.jpg', '', 1, 1, '2020-12-16 10:28:38', '2020-12-18 16:27:39');

SET FOREIGN_KEY_CHECKS = 1;
