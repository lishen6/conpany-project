$(function(){
	$(".caidan").on('click',function(){
  	if(!$(this).hasClass('caidanShow')){
  		$(this).addClass('caidanShow');
  		$(".header1-tab-btn1>div").stop().animate({'right':'0'},200);
  	}else{
  		$(this).removeClass('caidanShow');
  		$(".header1-tab-btn1>div").stop().animate({'right':'-130%'},200);
  	}
  	
  })
	var mySwiper1 = new Swiper ('#swiper-head', {
	    loop: true,
	    autoplay: 2000,
	    // 如果需要分页器
	    pagination: '.swiper-pagination'
	  })  
  var mySwiper2 = new Swiper ('#swiper-body4', {
    loop: true,
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    onTransitionEnd: function(swiper){
	      //console.log(swiper.activeIndex); //切换结束时，告诉我现在是第几个slide
	      $(".body4-title span").each(function(){
	      	 $(this).removeClass("active");	      	 
	      })
	      switch(swiper.activeIndex){
	      	 	case 0: $(".body4-title").children('span').eq(4).addClass('active'); break;
	      	 	case 1: $(".body4-title").children('span').eq(0).addClass('active'); break;
	      	 	case 2: $(".body4-title").children('span').eq(1).addClass('active'); break;
	      	 	case 3: $(".body4-title").children('span').eq(2).addClass('active'); break;
	      	 	case 4: $(".body4-title").children('span').eq(3).addClass('active'); break;
	      	 	case 5: $(".body4-title").children('span').eq(4).addClass('active'); break;
	      	 	case 6: $(".body4-title").children('span').eq(0).addClass('active'); break;
	      	 }
	    }
  })
  var mySwiper3 = new Swiper ('#swiper-body5', {
     spaceBetween: 10,
     slidesPerView: 4,
     freeMode: true //不自动粘合
  })
  //新闻
  var json = [
     {title:'“数据沥金·产融结合”文沥发布2017年银企集成金融科技方案',info:'【中国，2017年6月9日】上海文沥信息技术有限公司（以下简称“文沥”或“Welinkdata”）于6月4日与中国贸易金融网合作举办了“数据沥金·产融结合”银企沙龙对接交流会上海站活动。来自招商银行、交通银行、上海银行、泺亨（中国）和孚厘金融等多家金融机构以及万昌医药、科天中国等企业的领导和业内专家齐聚一堂，就政策解读、银企集成、风控管理和大数据征信等话题进行了深入探讨和交流。'},
     {title:'文沥银企集成金融科技拓宽中小企业融资新渠道',info:'【中国，2017年6月22日】上海文沥信息技术有限公司日前受邀参加了第十五届中国ECR大会，此次大会在风光秀美的杭州西溪湿地召开。除文沥外，阿里巴巴、IBM、京东、可口可乐、宝洁、沃尔玛、雀巢、联合利华、强生、招商路凯及我查查等国内外众多知名快消品和零售业届的顶尖品牌商与制造商、零售科技/IT公司、供应链金融公司和物流公司等齐聚一堂、共同见证这场消费品领域的年度盛事。'},
     {title:'三大金融科技改变供应链金融发展',info:'在金融科技不断进步的同时，供应链金融也在完成自身的变革，对于供应链金融的深刻理解，上海文沥技术有限公司CEO钟胜九告诉《经济》记者，“不去从资本角度来量化供应链金融有多少万亿的市场，只是告诉你在金融科技的推动下，它就是企业经营和金融发展的必然方向”。'},
     {title:'文沥应邀担任中国供应链金融产业生态联盟副理事长',info:'【中国，2017年5月19日】日前，由中国贸易金融网、《贸易金融》杂志、中国交易银行50人论坛主办，北京财资和供应链金融应用技术研究院承办的2017年供应链金融年会在北京举行，年会汇集了来自银行，保险和供应链金融等各行各业的数百家企业代表、专家学者和媒体记者。中华人民共和国工业和信息化原部长李毅中、中国国际经济交流中心副理事长魏建国、中国中小企业协会常务副会长张竞强、浦发交易银行部总经理杨斌、中国社科院金融所银行研究室主任曾刚和上海文沥信息技术有限公司CEO钟胜九等专家代表受邀出席了此次盛会，并作为中国供应链金融产业生态联盟理事代表见证了联盟的盛大揭牌仪式。'},
     {title:'文沥荣获中国供应链金融“最佳风控企业奖”',info:'【中国·2017年4月21日】上海文沥信息技术有限公司（以下简称“文沥”或“Welinkdata”）于4月21日应邀出席于北京粤财JW万豪酒店召开的2017年供应链金融年会。此次以“产融结合下的供应链金融4.0的机遇与挑战”为主题的盛会由中国贸易金融网、《贸易金融》杂志，中国交易银行50人论坛主办，北京财资和供应链金融应用技术研究院承办。'},
     {title:'文沥荣登2017年供应链金融生态图谱 揭示供应链金融方法论制胜三要素',info:'3月23日，上海文沥信息技术有限公司（以下简称“文沥”或”Welinkdata“）应邀出席由万联网主办的第四届中国供应链金融创新高峰论坛。此次论坛以“产业+金融+科技”为主题，针对金融科技驱动供应链金融创新、产融结合助力实体经济、产业互联网B2B平台供应链金融发展路径等议题展开交流与讨论。吸引了来自制造商贸焦点企业、电商、供应链、物流、互联网金融、银行、金融机构、投资机构及供应链平台技术服务商近500位跨界企业高管参与。论坛期间，万联供应链金融研究院发布了2017年《供应链金融生态图谱》，图谱收录了包括平安、招行、京东金融、文沥等54家供应链金融标杆企业的创新商业模式，文沥荣登《供应链金融生态图谱》位列信息化服务商 ！'},
     {title:'文沥荣膺2016年度海信集团“十大优秀合作伙伴”',info:'【中国，2017年2月9日】 上海文沥信息技术有限公司（以下简称“文沥”）日前在海信集团有限公司主办的2016年度“优秀合作伙伴”评选中，凭借本年度在海信渠道与终端管理信息化（暨B2B平台）这一项目的产品技术、方案实施和项目交付方面的优异表现，赢得了海信集团上下的高度评价，取得了业务部门和技术团队的充分肯定，被海信集团有限公司评为“2016年度十大优秀合作伙伴”之一'},
     {title:'试水春糖会，文沥剑指2017食品行业供应链金融！',info:'【中国，2017年4月6日】上海文沥信息技术有限公司 （以下简称“文沥”）于3月23日至25日亮相四川成都世纪城新国际会展中心SWH 27A展位，与国内外三千余家食品饮料企业齐聚2017年第96届全国糖酒商品交易会！'}
  ]
  $("#swiper-body5 .swiper-slide").on("click",function(){
  	 var _index = $(this).index();
     $(".body5-content>h4").html(json[_index].title);
     $(".body5-content>p").html(json[_index].info);
  	 if(!$(this).hasClass('active')){
  	 	$(this).addClass('active').siblings('.swiper-slide').removeClass('active');
  	 }
  })
  
})
