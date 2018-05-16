//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
    ],
    kindList: [
      {
        title: "生鲜果蔬",
        img: "/images/dining-table-header.jpg",
      },
      {
        title: "粮油干货",
        img: "/images/grain-dry-cargo-header.jpg",
      },
      {
        title: "地方特产",
        img: "/images/local-specialty-header.jpg",
      },
      {
        title: "名茶名酒",
        img: "/images/tea—tobacco-header.jpg",
      },
      {
        title: "进口食品",
        img: "/images/imported-food-header.jpg",
      }
    ],

    proList: [{
      proimg: "/images/dining-1.jpg",
      proprice: "￥8.9",
      proamount: "菜心 2kg"
    },
    {
      proimg: "/images/dining-18.jpg",
      proprice: "￥21.98",
      proamount: "羊肉卷"
    },
    {
      proimg: "/images/dining-3.jpg",
      proprice: "￥8.9",
      proamount: "安迪山苹果"
    }
    ],
    proList_oil: [{
      proimg: "/images/grain-1.jpg",
      proprice: "￥188.8",
      proamount: "有机石板米"
    },
    {
      proimg: "/images/grain-16.jpg",
      proprice: "￥208.0",
      proamount: "长寿花金胚玉米油"
    },
    {
      proimg: "/images/grain-23.jpg",
      proprice: "￥96.0",
      proamount: "龙稻稻花香大米"
    }
    ],
    proList_local: [{
      proimg: "/images/local-1.jpg",
      proprice: "￥82.0",
      proamount: "振豫臻品腐竹"
    },
    {
      proimg: "/images/local-2.jpg",
      proprice: "￥398.0",
      proamount: "原味丹堤腰果"
    },
    {
      proimg: "/images/local-3.jpg",
      proprice: "￥83.0",
      proamount: "精选陕北红枣"
    }
    ],

    proList_tea: [{
      proimg: "/images/tea-2.jpg",
      proprice: "￥82.0",
      proamount: "韩国清河清酒"
    },
    {
      proimg: "/images/tea-3.jpg",
      proprice: "￥398.0",
      proamount: "特级明前茶"
    },
    {
      proimg: "/images/tea-4.jpg",
      proprice: "￥83.0",
      proamount: "欢沁桃红葡萄酒"
    }
      ,
    {
      proimg: "/images/tea-5.jpg",
      proprice: "￥82.0",
      proamount: "普洱迷你小沱茶"
    }
      ,
    {
      proimg: "/images/tea-6.jpg",
      proprice: "￥82.0",
      proamount: "忆江南龙井"
    },
    {
      proimg: "/images/tea-7.jpg",
      proprice: "￥82.0",
      proamount: "欢沁桃红葡萄酒"
    }
    ],
    proList_import: [{
      proimg: "/images/imported-1.jpg",
      proprice: "￥82.0",
      proamount: "泰国金枕头榴莲"
    },
    {
      proimg: "/images/imported-2.jpg",
      proprice: "￥398.0",
      proamount: "艾伦蒂全脂纯牛奶"
    },
    {
      proimg: "/images/imported-3.jpg",
      proprice: "￥83.0",
      proamount: "澳洲混合桉树蜂蜜"
    }
      ,
    {
      proimg: "/images/imported-4.jpg",
      proprice: "￥82.0",
      proamount: "马来西亚白咖啡"
    }
      ,
    {
      proimg: "/images/imported-6.jpg",
      proprice: "￥82.0",
      proamount: "越南白心火龙果"
    },
    {
      proimg: "/images/imported-39.jpg",
      proprice: "￥82.0",
      proamount: "西班牙特级橄榄油"
    }
    ]

  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  getUserInfo: function (e) {
  }
})
