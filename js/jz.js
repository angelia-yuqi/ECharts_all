
 // document.getElementById("iFrame1").stylecontentWindow
 // document.getElementById("iFrame1").style.overflow="hidden";.document.getElementById("windowss_api")
// setTimeout(function(){
//   var iwindow=window.frames["iFrame1"];
//   console.log("--------------all",iwindow);
//   var idoc = iwindow.document;
//           console.log("window",iwindow);//获取iframe的window对象
//           console.log("document",idoc);  //获取iframe的document
//           console.log("html",idoc.getElementById("windowss_api"));//获取iframe的html
//           console.log("head",idoc.head);  //获取head
//           console.log("body",idoc.body);
// console.log("--------------all",iwindow,"++++++++++++",idoc);
//
// },1000)
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    list:'',
    infor_all:[{
      infor_name:"隔壁老王",
      infor_time:"2017-4-5 12:12:12",
      infor_content:"附近新开一个社区，白酒市场缺乏，可以考虑开一家分店",
      infor_img:"https://image.qiluyidian.mobi/43230590851066149651QN1D928U291dGhFYXN0.jpg?imageMogr2/auto-orient/thumbnail/680x410"
    }],
    manage_market:[{
        mk_id:1,
        mk_piao:"购买20瓶景芝酒",
        mk_chanpin:"景芝酒53度",
        mk_start_time:"2017-05-09",
        mk_people:"李钦",
        mk_other:"来喝酒了，买新酒了"
    },{
        mk_id:2,
        mk_piao:"购买20瓶景芝酒",
        mk_chanpin:"景芝酒53度",
        mk_start_time:"2017-05-09",
        mk_people:"李钦",
        mk_other:"来喝酒了，买新酒了"
    }],
    manage_shop:[{
        ms_id:1,
        ms_piao:"购买20瓶景芝酒",
        ms_chanpin:"景芝酒53度",
        ms_start_time:"2017-05-09",
        ms_people:"李钦",
        ms_other:"来喝酒了，买新酒了"
    },{
        ms_id:2,
        ms_piao:"购买20瓶景芝酒",
        ms_chanpin:"景芝酒53度",
        ms_start_time:"2017-05-09",
        ms_people:"李钦",
        ms_other:"来喝酒了，买新酒了"
    }],
    manage_fahuo:[
      {
        key:1,
        mingxi:'34度500ml景阳春原珍',
        faqishijian:'2017-5-12',
        faqiren:'刘培贵',
        tijiaoren:'刘培贵',
        zhuangtai:'已发货'
      },
      {
        key:2,
        mingxi:'国标景芝原浆',
        faqishijian:'2017-5-15',
        faqiren:'杨五洲',
        'tijiaoren':'杨五洲',
        'zhuangtai':'已发货'
      },
      {
        key:3,
        mingxi:'62度50L私家窖藏国标景芝原浆',
        faqishijian:'2017-5-15',
        'faqiren':'李莉莉',
        'tijiaoren':'李莉莉',
        'zhuangtai':'已发货'
      },
      {
        key:4,
        mingxi:'BC38度480ml景阳春和春',
        faqishijian:'2017-5-16',
        'faqiren':'朱万星',
        'tijiaoren':'朱万星',
        'zhuangtai':'已发货'
      },
      {
        key:5,
        mingxi:'BC49度500ml单位招待专用酒',
        faqishijian:'2017-5-16',
        'faqiren':'刘国智',
        'tijiaoren':'刘国智',
        'zhuangtai':'已发货'
      },
      {
        key:6,
        mingxi:'BC38度500ml1#景阳春景韵(流通)',
        faqishijian:'2017-5-17',
        'faqiren':'刘勇',
        'tijiaoren':'刘勇',
        'zhuangtai':'已发货'
      },
      {
        key:7,
        mingxi:'BC38度480ml1#景阳春珍品小老虎',
        faqishijian:'2017-5-18',
        'faqiren':'尹誉晓',
        'tijiaoren':'尹誉晓',
        'zhuangtai':'已发货'
      },
      {
        key:8,
        mingxi:'BC38度500ml景阳春翡翠',
        faqishijian:'2017-5-18',
        'faqiren':'尹誉晓',
        'tijiaoren':'尹誉晓',
        'zhuangtai':'已发货'
      },
    ],
    manage_shengchan:[
      {
        key:1,
        mingcheng:'BC32度500ml景阳春A景(酒店)(1*6)',
        shengchanliang:'1000瓶',
        shijishengchanliang:'1100瓶',
        zhanbi:'110%',
      },
      {
        key:2,
        mingcheng:'BC50度238ml景芝古酿12生效系列',
        shengchanliang:'1000瓶',
        shijishengchanliang:'1200瓶',
        zhanbi:'120%',
      },
      {
        key:3,
        mingcheng:'BC49度500ml单位招待专用酒',
        shengchanliang:'1000瓶',
        shijishengchanliang:'900瓶',
        zhanbi:'90%',
      },
      {
        key:4,
        mingcheng:'BC38度500ml1#景阳春景韵(流通)',
        shengchanliang:'1000瓶',
        shijishengchanliang:'800瓶',
        zhanbi:'80%',
      },
      {
        key:5,
        mingcheng:'BC38度480ml1#景阳春珍品小老虎(东营)',
        shengchanliang:'1000瓶',
        shijishengchanliang:'800瓶',
        zhanbi:'80%',
      },
      {
        key:6,
        mingcheng:'BC32度600ml光瓶景阳春绵柔陈香(淄博)',
        shengchanliang:'1000瓶',
        shijishengchanliang:'700瓶',
        zhanbi:'70%',
      },
      {
        key:7,
        mingcheng:'BC38度500ml景阳春翡翠(滨州)',
        shengchanliang:'1000瓶',
        shijishengchanliang:'1100瓶',
        zhanbi:'110%',
      },
      {
        key:8,
        mingcheng:'BC32度500ml景阳春A景(酒店)',
        shengchanliang:'1000瓶',
        shijishengchanliang:'1300瓶',
        zhanbi:'130%',
      }
    ],
    manage_caigou:[
      {
        key:1,
        cailiaomingcheng:'高粱',
        jihuacaigou:'1100',
        shiji:'1100',
        zhanbi:'100%',
      },
      {
        key:2,
        cailiaomingcheng:'大米',
        jihuacaigou:'1000',
        shiji:'900',
        zhanbi:'90%',
      },
      {
        key:3,
        cailiaomingcheng:'小麦',
        jihuacaigou:'1000',
        shiji:'800',
        zhanbi:'80%',
      },
      {
        key:4,
        cailiaomingcheng:'糯米',
        jihuacaigou:'1000',
        shiji:'950',
        zhanbi:'95%',
      },
      {
        key:5,
        cailiaomingcheng:'大缸',
        jihuacaigou:'20',
        shiji:'20',
        zhanbi:'100%',
      },
      {
        key:6,
        cailiaomingcheng:'60W灯泡',
        jihuacaigou:'100',
        shiji:'100',
        zhanbi:'100%',
      },
      {
        key:7,
        cailiaomingcheng:'白炽灯',
        jihuacaigou:'100',
        shiji:'110',
        zhanbi:'110%',
      },
      {
        key:8,
        cailiaomingcheng:'酒曲',
        jihuacaigou:'1000',
        shiji:'1100',
        zhanbi:'110%',
      },
      {
        key:9,
        cailiaomingcheng:'玉米粉',
        jihuacaigou:'1000',
        shiji:'1100',
        zhanbi:'110%',
      },
      {
        key:10,
        cailiaomingcheng:'消毒液',
        jihuacaigou:'1100',
        shiji:'1100',
        zhanbi:'100%',
      },
    ],
    manage_angongsi:[
      {
        key:1,
        gongsimingcheng:'景芝酒业酒厂',
        xiaoliang:'1000/1100',
        xiaoliang_bili:'110%',
        xiaoshoue:'2000/2200',
        xiaoshoue_bili:'110%',

      },
      {
        key:2,
        gongsimingcheng:'景芝酒业酒厂',
        xiaoliang:'1000/1100',
        xiaoliang_bili:'110%',
        xiaoshoue:'2000/2200',
        xiaoshoue_bili:'110%',

      },
      {
        key:3,
        gongsimingcheng:'景芝酒业酒厂',
        xiaoliang:'1000/1100',
        xiaoliang_bili:'110%',
        xiaoshoue:'2000/2200',
        xiaoshoue_bili:'110%',

      },
      {
        key:4,
        gongsimingcheng:'景芝酒业酒厂',
        xiaoliang:'1000/1100',
        xiaoliang_bili:'110%',
        xiaoshoue:'2000/2200',
        xiaoshoue_bili:'110%',

      },
      {
        key:5,
        gongsimingcheng:'景芝酒业酒厂',
        xiaoliang:'1000/1100',
        xiaoliang_bili:'110%',
        xiaoshoue:'2000/2200',
        xiaoshoue_bili:'110%',

      },
      {
        key:6,
        gongsimingcheng:'景芝酒业酒厂',
        xiaoliang:'1000/1100',
        xiaoliang_bili:'110%',
        xiaoshoue:'2000/2200',
        xiaoshoue_bili:'110%',

      },
      {
        key:7,
        gongsimingcheng:'景芝酒业酒厂',
        xiaoliang:'1000/1100',
        xiaoliang_bili:'110%',
        xiaoshoue:'2000/2200',
        xiaoshoue_bili:'110%',

      },
      {
        key:8,
        gongsimingcheng:'景芝酒业酒厂',
        xiaoliang:'1000/1100',
        xiaoliang_bili:'110%',
        xiaoshoue:'2000/2200',
        xiaoshoue_bili:'110%',

      },
    ],
    manage_anbumen:[
      {
        key:1,
        bumenname:'酿酒三厂',
        gongsi:'酿酒三厂',
        xiaoliang:'1000/1100',
        xiaoliang_bili:'110%',
        xiaoshoue:'2000/2200',
        xiaoshoue_bili:'110%',
      },
      {
        key:2,
        bumenname:'酿酒二厂',
        gongsi:'酿酒二厂',
        xiaoliang:'1000/1200',
        xiaoliang_bili:'120%',
        xiaoshoue:'2000/2400',
        xiaoshoue_bili:'120%',
      },
      {
        key:3,
        bumenname:'酿酒一厂',
        gongsi:'酿酒一厂',
        xiaoliang:'1000/1400',
        xiaoliang_bili:'140%',
        xiaoshoue:'2000/2200',
        xiaoshoue_bili:'110%',
      },
      {
        key:4,
        bumenname:'酿酒四厂',
        gongsi:'酿酒四厂',
        xiaoliang:'500/600',
        xiaoliang_bili:'120%',
        xiaoshoue:'2000/2200',
        xiaoshoue_bili:'110%',
      },
      {
        key:5,
        bumenname:'酿酒五厂',
        gongsi:'酿酒五厂',
        xiaoliang:'500/700',
        xiaoliang_bili:'140%',
        xiaoshoue:'2000/2400',
        xiaoshoue_bili:'120%',
      },
      {
        key:6,
        bumenname:'酿酒六厂',
        gongsi:'酿酒六厂',
        xiaoliang:'1000/1000',
        xiaoliang_bili:'100%',
        xiaoshoue:'2000/2000',
        xiaoshoue_bili:'100%',
      },

    ],
    manage_anchanpin:[
      {
        key:1,
        chanp:'62度50L私家窖藏国标景芝原浆（大师级）',
        xiaoliang:'1000/1100',
        xiaoliang_bili:'110%',
        xiaoshoue:'2000/2200',
        xiaoshoue_bili:'110%',
      },
      {
        key:2,
        chanp:'BC49度500ml单位招待专用酒',
        xiaoliang:'1000/1200',
        xiaoliang_bili:'120%',
        xiaoshoue:'2000/2400',
        xiaoshoue_bili:'120%',
      },
      {
        key:3,
        chanp:'BC38度500ml1#景阳春景韵(流通)(1*6)',
        xiaoliang:'1000/1400',
        xiaoliang_bili:'140%',
        xiaoshoue:'2000/2200',
        xiaoshoue_bili:'110%',
      },
      {
        key:4,
        chanp:'BC32度600ml光瓶景阳春绵柔陈香(淄博)(1*6)',
        xiaoliang:'500/600',
        xiaoliang_bili:'120%',
        xiaoshoue:'2000/2200',
        xiaoshoue_bili:'110%',
      },
      {
        key:5,
        chanp:'BC32度500ml景阳春A景(酒店)(1*6)',
        xiaoliang:'500/700',
        xiaoliang_bili:'140%',
        xiaoshoue:'2000/2400',
        xiaoshoue_bili:'120%',
      },
      {
        key:6,
        chanp:'BC38度500ml景阳春翡翠(滨州)(1*6)',
        xiaoliang:'1000/1000',
        xiaoliang_bili:'100%',
        xiaoshoue:'2000/2000',
        xiaoshoue_bili:'100%',
      },

    ],
    manage_jiya:[
      {
        key:1,
        jiyachanpin:"BC50度238ml景芝古酿12生效系列（新疆）",
        jiyaliang:"2233",
        jiyatime:"60",
        tijaoren:"刘勇",
        beizhu:"积压产品"
      },
      {
        key:2,
        jiyachanpin:"BC49度500ml单位招待专用酒",
        jiyaliang:"2233",
        jiyatime:"60",
        tijaoren:"刘勇",
        beizhu:"积压产品"
      },
      {
        key:3,
        jiyachanpin:"BC38度500ml1#景阳春景韵(流通)(1*6)",
        jiyaliang:"2233",
        jiyatime:"60",
        tijaoren:"刘勇",
        beizhu:"积压产品"
      },
      {
        key:4,
        jiyachanpin:"BC38度480ml1#景阳春珍品小老虎(东营)(1*6)",
        jiyaliang:"2233",
        jiyatime:"60",
        tijaoren:"刘勇",
        beizhu:"积压产品"
      },
      {
        key:5,
        jiyachanpin:"BC32度600ml光瓶景阳春绵柔陈香(淄博)(1*6)",
        jiyaliang:"2233",
        jiyatime:"60",
        tijaoren:"刘勇",
        beizhu:"积压产品"
      },
      {
        key:6,
        jiyachanpin:"35度500ml新品景芝5年(流通)(1*6)",
        jiyaliang:"2233",
        jiyatime:"60",
        tijaoren:"刘勇",
        beizhu:"积压产品"
      },
      {
        key:7,
        jiyachanpin:"38度500ml景阳春御酿酒(东营)(1*6)",
        jiyaliang:"2233",
        jiyatime:"60",
        tijaoren:"刘勇",
        beizhu:"积压产品"
      },
      {
        key:8,
        jiyachanpin:"42度500ml景阳春畅享(聊城)(1*6)",
        jiyaliang:"2233",
        jiyatime:"60",
        tijaoren:"刘勇",
        beizhu:"积压产品"
      },
  ],
  manage_fahuochanpin:[
    {
      key:1,
      kehuming:'刘国智',
      mingcheng:"一品景芝",
      fahuoliang:"2354",
      zhanbi:"80%",
      beizhu:"请发货"
    },
    {
      key:2,
      kehuming:'刘国智',
      mingcheng:"一品景芝",
      fahuoliang:"2354",
      zhanbi:"80%",
      beizhu:"请发货"
    },
    {
      key:3,
      kehuming:'刘国智',
      mingcheng:"一品景芝",
      fahuoliang:"2354",
      zhanbi:"80%",
      beizhu:"请发货"
    },
    {
      key:4,
      kehuming:'刘国智',
      mingcheng:"一品景芝",
      fahuoliang:"2354",
      zhanbi:"80%",
      beizhu:"请发货"
    },
    {
      key:5,
      kehuming:'刘国智',
      mingcheng:"一品景芝",
      fahuoliang:"2354",
      zhanbi:"80%",
      beizhu:"请发货"
    },
    {
      key:6,
      kehuming:'刘国智',
      mingcheng:"一品景芝",
      fahuoliang:"2354",
      zhanbi:"80%",
      beizhu:"请发货"
    },
    {
      key:7,
      kehuming:'刘国智',
      mingcheng:"一品景芝",
      fahuoliang:"2354",
      zhanbi:"80%",
      beizhu:"请发货"
    },
    {
      key:8,
      kehuming:'刘国智',
      mingcheng:"一品景芝",
      fahuoliang:"2354",
      zhanbi:"80%",
      beizhu:"请发货"
    },
  ],
  manage_kaoqin:[
    {
      key:1,
      name:'朱万星',
      bumen:'定制酒中心主任',
      chuchai:'7',
      qingjia:'2',
      kuquchuchai:'7',
      gongsi:'18'
    },
    {
      key:2,
      name:'朱万星',
      bumen:'定制酒中心主任',
      chuchai:'7',
      qingjia:'2',
      kuquchuchai:'7',
      gongsi:'18'
    },
    {
      key:3,
      name:'朱万星',
      bumen:'定制酒中心主任',
      chuchai:'7',
      qingjia:'2',
      kuquchuchai:'7',
      gongsi:'18'
    },
    {
      key:4,
      name:'朱万星',
      bumen:'定制酒中心主任',
      chuchai:'7',
      qingjia:'2',
      kuquchuchai:'7',
      gongsi:'18'
    },
    {
      key:5,
      name:'朱万星',
      bumen:'定制酒中心主任',
      chuchai:'7',
      qingjia:'2',
      kuquchuchai:'7',
      gongsi:'18'
    },
    {
      key:6,
      name:'朱万星',
      bumen:'定制酒中心主任',
      chuchai:'7',
      qingjia:'2',
      kuquchuchai:'7',
      gongsi:'18'
    },
    {
      key:7,
      name:'朱万星',
      bumen:'定制酒中心主任',
      chuchai:'7',
      qingjia:'2',
      kuquchuchai:'7',
      gongsi:'18'
    },
    {
      key:8,
      name:'朱万星',
      bumen:'定制酒中心主任',
      chuchai:'7',
      qingjia:'2',
      kuquchuchai:'7',
      gongsi:'18'
    },
  ],
  manage_kaqinbumen:[
    {
      key:1,
      bumen:'运营经理',
      guishu:'鲁西分公司总经理',
      chuchai:'7',
      qingjia:'2',
      kuquchuchai:'7',
      gongsi:'18'
    },
    {
      key:2,
      bumen:'运营经理',
      guishu:'鲁西分公司总经理',
      chuchai:'7',
      qingjia:'2',
      kuquchuchai:'7',
      gongsi:'18'
    },
    {
      key:3,
      bumen:'运营经理',
      guishu:'鲁西分公司总经理',
      chuchai:'7',
      qingjia:'2',
      kuquchuchai:'7',
      gongsi:'18'
    },
    {
      key:4,
      bumen:'运营经理',
      guishu:'鲁西分公司总经理',
      chuchai:'7',
      qingjia:'2',
      kuquchuchai:'7',
      gongsi:'18'
    },
    {
      key:5,
      bumen:'运营经理',
      guishu:'鲁西分公司总经理',
      chuchai:'7',
      qingjia:'2',
      kuquchuchai:'7',
      gongsi:'18'
    },
    {
      key:6,
      bumen:'运营经理',
      guishu:'鲁西分公司总经理',
      chuchai:'7',
      qingjia:'2',
      kuquchuchai:'7',
      gongsi:'18'
    },
    {
      key:7,
      bumen:'运营经理',
      guishu:'鲁西分公司总经理',
      chuchai:'7',
      qingjia:'2',
      kuquchuchai:'7',
      gongsi:'18'
    },
    {
      key:8,
      bumen:'运营经理',
      guishu:'鲁西分公司总经理',
      chuchai:'7',
      qingjia:'2',
      kuquchuchai:'7',
      gongsi:'18'
    },
  ],
  manage_liucheng:[
    {
      key:1,
      title:'申请请假',
      faqiren:'李莉莉',
      time:'2017-05-09',
      jiedian:'主任未审核',
      jieshoutime:'2017-05-11',
      zhuangtai:'已通过',
      endtime:'2017-05-12'
    },
    {
      key:2,
      title:'申请请假',
      faqiren:'李莉莉',
      time:'2017-05-09',
      jiedian:'主任未审核',
      jieshoutime:'2017-05-11',
      zhuangtai:'已通过',
      endtime:'2017-05-12'
    },
    {
      key:3,
      title:'申请请假',
      faqiren:'李莉莉',
      time:'2017-05-09',
      jiedian:'主任未审核',
      jieshoutime:'2017-05-11',
      zhuangtai:'已通过',
      endtime:'2017-05-12'
    },
    {
      key:4,
      title:'申请请假',
      faqiren:'李莉莉',
      time:'2017-05-09',
      jiedian:'主任未审核',
      jieshoutime:'2017-05-11',
      zhuangtai:'已通过',
      endtime:'2017-05-12'
    },
    {
      key:5,
      title:'申请请假',
      faqiren:'李莉莉',
      time:'2017-05-09',
      jiedian:'主任未审核',
      jieshoutime:'2017-05-11',
      zhuangtai:'已通过',
      endtime:'2017-05-12'
    },
    {
      key:6,
      title:'申请请假',
      faqiren:'李莉莉',
      time:'2017-05-09',
      jiedian:'主任未审核',
      jieshoutime:'2017-05-11',
      zhuangtai:'已通过',
      endtime:'2017-05-12'
    },
    {
      key:7,
      title:'申请请假',
      faqiren:'李莉莉',
      time:'2017-05-09',
      jiedian:'主任未审核',
      jieshoutime:'2017-05-11',
      zhuangtai:'已通过',
      endtime:'2017-05-12'
    },
  ]
  }
})


// $(function() {
  // $('#doc-datepicker').datepicker().
  //   on('changeDate.datepicker.amui', function(event) {
  //     console.log(event.date);
  //   });
// });



    var start_count = 1188;
    function init_all_count(){
        var t_num = $(".t_num");
        $(".t_num").html("");
        res_string = String(start_count).split("").reverse().join("")
        var len = String(start_count).length;
        for(var i=0;i<len;i++){
            // if(i%3 == 0 && i != 0){
            //     t_num.prepend('<img src="./img/images/numsplit.png" class="t_split_img">');
            // }
            var num = String(res_string).charAt(i);
            t_num.prepend('<img src="./img/images/num'+num+'.png" class="t_num_img">');
        }

        start_count = start_count + 111;
    }
    init_all_count();
    // setInterval('init_all_count()', 100);
    function random() {
        return +(Math.random() * (maxData - 10)).toFixed(1);
    }


var doscroll = function(pareat){
var $parent = $(pareat);
var $first = $parent.find('li:first');
var height = $first.height();
$first.animate({
    marginTop: -height + 'px'  //或者改成： marginTop: -height + 'px'
  }, 500, function() {// 动画结束后，把它插到最后，形成无缝
  $first.css('marginTop', 0).appendTo($parent);
 // $first.css('marginTop', 0).appendTo($parent);
});
};
setInterval(function(){doscroll('.js-slide-list')}, 2000);
setInterval(function(){doscroll('.js-slide-list_top')}, 4000);

//经营状况数据
$('#my-popup').on('open.modal.amui', function(){
console.log('第一个演示弹窗打开了');
var b="我是数据";
app.list=b
});
//销售排名
$('#sell_all').on('open.modal.amui', function(){
console.log('第二个演示弹窗打开了');
var b="我是数据";
app.list=b
});
//库存概况
$('#repertory_all').on('open.modal.amui', function(){
console.log('第三个演示弹窗打开了');
var b="我是数据";
app.list=b
});
//工作流程监控BPM
$('#flow_all').on('open.modal.amui', function(){
console.log('第一个演示弹窗打开了');
var b="我是数据";
app.list=b
});
//阳光酿造
$('#sun_all').on('open.modal.amui', function(){
console.log('第四个演示弹窗打开了');
var b="我是数据";
app.list=b
});
//生产监控
$('#production_all').on('open.modal.amui', function(){
console.log('第五个演示弹窗打开了');
var b="我是数据";
app.list=b
});
//极优佳App运营概况
$('#app_all').on('open.modal.amui', function(){
console.log('第一个演示弹窗打开了');
var b="我是数据";
app.list=b
});
var top_left=[];
//经营概况
var jz_left_top = echarts.init(document.getElementById('jz_left_top'), 'dark');
var top1_data_all=[{"sum1":20,"sum2":80},{"sum1":20,"sum2":80},{"sum1":30,"sum2":70},{"sum1":60,"sum2":40}];
//销售排名
var jz_left_top2 = echarts.init(document.getElementById('jz_left_top2'), 'dark');
// 库存概况
var jz_top6_zhe = echarts.init(document.getElementById('jz_top6_zhe'), 'dark');
//考勤统计
var jz_top4_left1 = echarts.init(document.getElementById('jz_top4_left1'), 'dark');
var jz_top4_left2 = echarts.init(document.getElementById('jz_top4_left2'), 'dark');
var jz_top4_left3 = echarts.init(document.getElementById('jz_top4_left3'), 'dark');
var top3_center_tu = echarts.init(document.getElementById('top3_center_tu'), 'dark');
// ------------------经营概况-------------------------

var dataStyle = {
    normal: {
      label: {show:false},
        labelLine: {show:true},
        shadowBlur: 0,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};
var placeHolderStyle = {
    normal : {
        color: 'rgba(255,255,255,0.2)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};
option_jz_left_top1 = {
   backgroundColor: 'rgba(1,1,1,0)',
     color: ['#0766E8', '#2EAA78','#FE7F1E','#ECAC13'],
    tooltip : {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        itemGap:12,
        y: 'bottom',
        data:['采购计划','生产计划','发货计划','销售任务'],
        itemStyle : dataStyle,
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    series : [{
        name:'采购计划',
        type:'pie',
        clockWise:false,
        radius : ['10%', '24%'],
        itemStyle : dataStyle,
        hoverAnimation: false,

        data:[
            {
                value:top1_data_all[0].sum1,
                name:'采购计划',
            },
            {
                value:top1_data_all[0].sum2,
                name:'未完成',
                itemStyle : placeHolderStyle
            }

        ]
    },
        {
            name:'生产计划',
            type:'pie',
            clockWise:false,
            radius : ['28%', '42%'],
            itemStyle : dataStyle,
            hoverAnimation: false,

            data:[
                {
                    value:top1_data_all[1].sum1,
                    name:'生产计划',
                },
                {
                    value:top1_data_all[1].sum2,
                    name:'未完成',
                    itemStyle : placeHolderStyle
                }

            ]
        },
         {
            name:'发货计划',
            type:'pie',
            clockWise:false,
            radius : ['46%', '60%'],
            itemStyle : dataStyle,
            hoverAnimation: false,

            data:[
                {
                    value:top1_data_all[2].sum1,
                    name:'发货计划'
                },
                {
                    value:top1_data_all[2].sum2,
                    name:'未完成',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'销售任务',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : ['64%', '78%'],
            itemStyle : dataStyle,

            data:[
                {
                    value:top1_data_all[3].sum1,
                    name:'销售任务'
                },
                {
                    value:top1_data_all[3].sum2,
                    name:'未完成',
                    itemStyle : placeHolderStyle
                }
            ]
        },


    ]
};
//销售排名------------------------------------------------------
var category = [];
var dottedBase = +new Date();
var lineData = [];
var barData = [];

for (var i = 0; i < 8; i++) {
    var date = new Date(dottedBase += 1000 * 3600 * 24);
    category.push([
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    ].join('-'));
    var b = Math.random() * 200;
    var d = Math.random() * 200;
    barData.push(b)
    lineData.push(d + b);
}


// option
option_jz_left_top2 = {
    color:['#2ADACD','#FE7F1E','#D4237A'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {show: false, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['去年同期','本月','增长比例']
    },
    xAxis: [
        {
            type: 'category',
            data: ['办事处','运营','部门','人力','安全节能','酿酒'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '完成度',
            min: 0,
            max: 2250,
            interval: 500,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '销量',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value}'
            }
        }
    ],
    series: [
        {
            name:'去年同期',
            type:'bar',
            data:[1102.0, 1500.9, 1300.0, 1230.2, 1025.6, 1176.7]
        },
        {
            name:'本月',
            type:'bar',
            data:[1302.6, 1805.9, 1029.0, 1926.4, 1128.7, 1470.7]
        },
        {
            name:'增长比例',
            type:'line',
            yAxisIndex: 1,
            data:[20.0, 32.2, 13.3, 20.5, 16.3, 10.2]
        }
    ]
}

// -----------------------折线图--------------------------
option_jz_top6_zhe = {
    color: ['#00ffff', '#00ffa2', '#f0e750'],
    tooltip: {
        trigger: 'axis',
        textStyle: {
            fontSize: 15,
            color: "#fff",
        }
    },
    legend: {
        orient: 'horizontal',
        right: "4%",
        itemGap: 20,
        //itemWidth:16,
        //itemHeight:12,
        data: ['订单量', '提货量'],
        textStyle: {
            color: '#fff',
        }
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        right: 'right',
        top: '20%',
        itemGap: 20,
        feature: {
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        },
        iconStyle: {
            normal: {
                color: '#0390e9'
            }
        }
    },
    grid: {
        show: true,
        left: 60,
        top: 34,
        right: 44,
        bottom: 42,
        borderWidth: 1,
        borderColor: 'rgba(170,172,178,0.33)',
        backgroundColor: 'rgba(17, 34, 69, 0.24)',
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        //在（type: 'category'）中设置data有效
        data: ['00:00:00', '03:00:00', '06:00:00', '09:00:00', '12:00:00',
            '15:00:00', '18:00:00', '21:00:00', '00:00:00'
        ],

        splitLine: { //坐标轴在 grid 区域中的分隔线；
            show: true,
            lineStyle: { //分割线颜色，可设单个，也可以设置数组。
                color: 'rgba(170,172,178,0.33)'
            }
        },
        axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
            show: true,
            lineStyle: {
                color: 'rgba(170,172,178,0.53)'
            },
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,0.83)',
                fontSize: 15,
            },
        },
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        max: 4000,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(170,172,178,0.33)'
            }
        },
        axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
            show: true,
            lineStyle: {
                color: 'rgba(170,172,178,0.53)'
            },
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,0.83)',
                fontSize: 12,
            },
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['#112245', 'rgba(34,50,82,0.4)']
            }
        }
    }],
    series: [{
                name: '订单量',
                type: 'line',
                smooth: true, //是否平滑曲线显示
                lineStyle: { //线条样式
                    normal: {
                        width: 1
                    }
                },
                areaStyle: { //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 255, 255, 0.9)'
                        }, {
                            offset: 0.7,
                            color: 'rgba(0, 255, 255, 0.6)'
                        }], false),

                        shadowColor: 'rgba(0, 0, 0, 0.9)', //阴影颜色
                        shadowBlur: 10 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                    }
                },
                itemStyle: { //折现拐点标志的样式
                    normal: {
                        color: 'rgb(0,255,255)'
                    }
                },
                data: [2000, 122, 3121, 54, 60, 2630, 1150, 2442, 1292]
            }, {
                name: '提货量',
                type: 'line',
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(240, 231, 80, 0.9)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(240, 231, 80, 0.4)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.9)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(240,231,80)'

                    }
                },
                data: [1130, 812, 1134, 2361, 413, 1330, 1301, 594, 1230]
            },

        ] //series结束
}; // option结束
//------------------------------------------------
// -------------------------考勤统计小圆圈11-------------------------------------
option_jz_top4_left1 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['']
    },
    series: [{
        name: '全率',
        type: 'pie',
        radius: ['60%', '70%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 40,
            name: '全率',
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 20,
                        color:'red'
                    }
                }
            },
             itemStyle: {
                 normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(207, 8,255, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(207, 2,255, 0.9)'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 1)',
                    color: '#fff',
                    shadowBlur: 10
                },
            }
        }, {
            value: 60,
            name: '占位',
            itemStyle: {
                        normal: {
                            color: '#fff'
                        }
                    },
            label: {
                normal: {
                    formatter: '\n全勤率',
                    textStyle: {
                        color: '#fff',
                        fontSize: 18
                    }
                }
            },
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#fff'
                },
                emphasis: {
                    color: '#fff'
                }
            },
            hoverAnimation: false
        }]
    }]
};
// -----------------------考勤统计小圆圈结束--------------------------

// -----------------------考勤统计小圆圈22222--------------------------

option_jz_top4_left2 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['']
    },
    series: [{
        name: '饼图二',
        type: 'pie',
        radius: ['60%', '70%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 40,
            name: '占有率',
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 20,
                        color:'red'
                    }
                }
            },
             itemStyle: {
                 normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(207, 8,255, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(17, 99,198, 0.9)'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 1)',
                    shadowBlur: 10
                },
            }
        }, {
            value: 60,
            name: '占位',
            label: {
                normal: {
                    formatter: '\n完率',
                    textStyle: {
                        color: '#555',
                        fontSize: 16
                    }
                }
            },
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }]
};
// -----------------------考勤统计小圆圈结束--------------------------

// -----------------------考勤统计小圆圈333333--------------------------

option_jz_top4_left3 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['']
    },
    series: [{
        name: '饼图二',
        type: 'pie',
        radius: ['60%', '70%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 40,
            name: '占有率',
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 20,
                        color:'red'
                    }
                }
            },
             itemStyle: {
                 normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(207, 8,255, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(17, 99,198, 0.4)'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 1)',
                    shadowBlur: 10
                },
            }
        }, {
            value: 60,
            name: '占位',
            label: {
                normal: {
                    formatter: '\n完成率',
                    textStyle: {
                        color: '#555',
                        fontSize: 16
                    }
                }
            },
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }]
};
// -----------------------考勤统计小圆圈结束--------------------------
option_top3_center_tu = {
    color: ['#00ffff', '#00ffa2', '#f0e750'],
    tooltip: {
        trigger: 'axis',
        textStyle: {
            fontSize: 15,
            color: "#fff",
        }
    },
    legend: {
        orient: 'horizontal',
        right: "4%",
        itemGap: 20,
        //itemWidth:16,
        //itemHeight:12,
        data: ['高危'],
        textStyle: {
            color: '#fff',
        }
    },
    toolbox: {
        show: false,
        orient: 'vertical',
        right: 'right',
        top: '20%',
        itemGap: 20,
        feature: {
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        },
        iconStyle: {
            normal: {
                color: '#0390e9'
            }
        }
    },
    grid: {
        show: true,
        left: 60,
        top: 34,
        right: 44,
        bottom: 42,
        borderWidth: 1,
        borderColor: 'rgba(170,172,178,0.33)',
        backgroundColor: 'rgba(17, 34, 69, 0.24)',
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        //在（type: 'category'）中设置data有效
        data: ['00:00:00', '03:00:00', '06:00:00', '09:00:00', '12:00:00',
            '15:00:00', '18:00:00', '21:00:00', '00:00:00'
        ],

        splitLine: { //坐标轴在 grid 区域中的分隔线；
            show: true,
            lineStyle: { //分割线颜色，可设单个，也可以设置数组。
                color: 'rgba(170,172,178,0.33)'
            }
        },
        axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
            show: true,
            lineStyle: {
                color: 'rgba(170,172,178,0.53)'
            },
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,0.83)',
                fontSize: 15,
            },
        },
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        max: 30,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(170,172,178,0.33)'
            }
        },
        axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
            show: true,
            lineStyle: {
                color: 'rgba(170,172,178,0.53)'
            },
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,0.83)',
                fontSize: 12,
            },
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['#112245', 'rgba(34,50,82,0.4)']
            }
        }
    }],
    series: [{
                name: '实时活跃数曲线',
                type: 'line',
                smooth: true, //是否平滑曲线显示
                lineStyle: { //线条样式
                    normal: {
                        width: 1
                    }
                },
                areaStyle: { //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 255, 255, 0.9)'
                        }, {
                            offset: 0.7,
                            color: 'rgba(0, 255, 255, 0.6)'
                        }], false),

                        shadowColor: 'rgba(0, 0, 0, 0.9)', //阴影颜色
                        shadowBlur: 10 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                    }
                },
                itemStyle: { //折现拐点标志的样式
                    normal: {
                        color: 'rgb(0,255,255)'
                    }
                },
                data: [2, 12, 3, 5, 6, 2, 11, 24, 12]
            }

        ] //series结束
}; // option结束
// -------------------------考勤统计小圆圈11-------------------------------------
option_jz_top4_left1 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['']
    },
    series: [{
        name: '全勤率',
        type: 'pie',
        radius: ['60%', '70%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 40,
            name: '占有率',
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 20,
                        color:'red'
                    }
                }
            },
             itemStyle: {
                 normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 211,252, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 193,246, 0.4)'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 1)',
                    shadowBlur: 10
                },
            }
        }, {
            value: 60,
            name: '占位',
            label: {
                normal: {
                    formatter: '\n全勤率',
                    textStyle: {
                        color: '#555',
                        fontSize: 14
                    }
                }
            },
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }]
};
//经营概况
jz_left_top.setOption(option_jz_left_top1);
//销售排名
jz_left_top2.setOption(option_jz_left_top2);
//库存概况
jz_top6_zhe.setOption(option_jz_top6_zhe);
//考勤统计
jz_top4_left1.setOption(option_jz_top4_left1);
jz_top4_left2.setOption(option_jz_top4_left2);
jz_top4_left3.setOption(option_jz_top4_left3);
top3_center_tu.setOption(option_top3_center_tu);
/*tabs切换start*/


/*tabs切换end*/
