var UPGRADE_DATA_URL = 'https://spreadsheets.google.com/feeds/list/1nH8jV-W0U1YPv08ksVVQTv6G7O2xg9hNDfkT9TSfKX0/od6/public/values?alt=json'
var WEEK_AZUKI_DATA = {
  "梅田綾乃":["火曜日(二) 少女たちよ Easy 難易C"],
  "高橋朱里":["火曜日(二) 少女たちよ Easy 難易B"],
  "岩田華怜":["火曜日(二) 少女たちよ Easy 難易A","日曜日(日) 初日 Easy 難易A"],
  "名取稚菜":["火曜日(二) 少女たちよ Easy 難易S"],
  "高城亜樹":["火曜日(二) 少女たちよ Easy 難易SS"],
  "鈴木紫帆里":["火曜日(二) 少女たちよ Normal 難易C"],
  "阿部マリア":["火曜日(二) 少女たちよ Normal 難易B", "日曜日(日) 少女たちよ Easy 難易S"],
  "鈴木まりや":["火曜日(二) 少女たちよ Normal 難易A","日曜日(日) 初日 Easy 難易S"],
  "近野莉菜":["火曜日(二) 少女たちよ Normal 難易S"],
  "峯岸みなみ":["火曜日(二) 少女たちよ Normal 難易SS","日曜日(日) 少女たちよ Hard 難易A"],
  "宮崎美穗":["火曜日(二) 少女たちよ Hard 難易C","日曜日(日) 少女たちよ Normal 難易A"],
  "中田ちさと":["火曜日(二) 少女たちよ Hard 難易B","日曜日(日) 初日 Easy 難易SS"],
  "佐藤すみれ":["火曜日(二) 少女たちよ Hard 難易A","金曜日(五) 初日 Normal 難易S"],
  "石田晴香":["火曜日(二) 少女たちよ Hard 難易S","金曜日(五) 初日 Hard 難易C"],
  "高橋みなみ":["火曜日(二) 少女たちよ Hard 難易SS","日曜日(日) 少女たちよ Hard 難易SS"],
  "岡田奈々":["水曜日(三) 初日 Easy 難易C","日曜日(日) 初日 Easy 難易C"],
  "高島祐利奈":["水曜日(三) 初日 Easy 難易B","日曜日(日) 少女たちよ Easy 難易B"],
  "岡田彩花":["水曜日(三) 初日 Easy 難易A"],
  "岩立沙穗":["水曜日(三) 初日 Easy 難易S"],
  "入山杏奈":["水曜日(三) 初日 Easy 難易SS"],
  "平田梨奈":["水曜日(三) 初日 Normal 難易C","日曜日(日) 少女たちよ Easy 難易A"],
  "大森美優":["水曜日(三) 初日 Normal 難易B"],
  "藤田奈那":["水曜日(三) 初日 Normal 難易A"],
  "竹內美宥":["水曜日(三) 初日 Normal 難易S","金曜日(五) 初日 Easy 難易S"],
  "松井珠理奈":["水曜日(三) 初日 Normal 難易SS"],
  "岩佐美咲":["水曜日(三) 初日 Hard 難易C","日曜日(日) 少女たちよ Normal 難易S"],
  "武藤十夢":["水曜日(三) 初日 Hard 難易B"],
  "田野優花":["水曜日(三) 初日 Hard 難易A","日曜日(日) 少女たちよ Normal 難易SS"],
  "片山陽加":["水曜日(三) 初日 Hard 難易S","日曜日(日) 初日 Normal 難易SS"],
  "島崎遥香":["水曜日(三) 初日 Hard 難易SS"],
  "佐藤亞美菜":["木曜日(四) 少女たちよ Easy 難易C"],
  "橋本耀":["木曜日(四) 少女たちよ Easy 難易B"],
  "篠崎彩奈":["木曜日(四) 少女たちよ Easy 難易A"],
  "森川彩香":["木曜日(四) 少女たちよ Easy 難易S"],
  "川榮李奈":["木曜日(四) 少女たちよ Easy 難易SS","日曜日(日) 初日 Hard 難易B"],
  "小林茉里奈":["木曜日(四) 少女たちよ Normal 難易C","金曜日(五) 初日 Normal 難易C"],
  "伊豆田莉奈":["木曜日(四) 少女たちよ Normal 難易B","日曜日(日) 初日 Normal 難易C"],
  "島田晴香":["木曜日(四) 少女たちよ Normal 難易A","日曜日(日) 少女たちよ Normal 難易B"],
  "內田真由美":["木曜日(四) 少女たちよ Normal 難易S","日曜日(日) 初日 Normal 難易B"],
  "島崎遙香":["木曜日(四) 少女たちよ Normal 難易SS","日曜日(日) 初日 Hard 難易SS"],
  "小林香菜":["木曜日(四) 少女たちよ Hard 難易C","金曜日(五) 初日 Easy 難易SS"],
  "菊地あやか":["木曜日(四) 少女たちよ Hard 難易B","日曜日(日) 少女たちよ Hard 難易C"],
  "兒玉遙":["木曜日(四) 少女たちよ Hard 難易A"],
  "永尾まりや":["木曜日(四) 少女たちよ Hard 難易S","日曜日(日) 少女たちよ Hard 難易B"],
  "小嶋陽菜":["木曜日(四) 少女たちよ Hard 難易SS","日曜日(日) 初日 Hard 難易A"],
  "西野未姬":["金曜日(五) 初日 Easy 難易C"],
  "北澤早紀":["金曜日(五) 初日 Easy 難易B"],
  "佐々木優佳里":["金曜日(五) 初日 Easy 難易A"],
  "野中美鄉":["金曜日(五) 初日 Normal 難易B"],
  "山內鈴蘭":["金曜日(五) 初日 Normal 難易A"],
  "倉持明日香":["金曜日(五) 初日 Normal 難易SS"],
  "藤江れいな":["金曜日(五) 初日 Hard 難易B","土曜日(六) 少女たちよ Hard 難易S","土曜日(六) 初日 Hard 難易S"],
  "橫山由依":["金曜日(五) 初日 Hard 難易A","土曜日(六) 少女たちよ Normal 難易SS","土曜日(六) 初日 Normal 難易SS"],
  "梅田彩佳":["金曜日(五) 初日 Hard 難易S","土曜日(六) 少女たちよ Easy 難易SS","土曜日(六) 初日 Easy 難易SS"],
  "柏木由紀":["金曜日(五) 初日 Hard 難易SS","土曜日(六) 少女たちよ Hard 難易SS","土曜日(六) 初日 Hard 難易SS"],
  "野澤玲奈":["土曜日(六) 少女たちよ Easy 難易C","土曜日(六) 初日 Easy 難易C"],
  "前田美月":["土曜日(六) 少女たちよ Easy 難易B","土曜日(六) 初日 Easy 難易B","日曜日(日) 少女たちよ Easy 難易C"],
  "內山奈月":["土曜日(六) 少女たちよ Easy 難易A","土曜日(六) 初日 Easy 難易A"],
  "茂木忍":["土曜日(六) 少女たちよ Easy 難易S","土曜日(六) 初日 Easy 難易S"],
  "大島涼花":["土曜日(六) 少女たちよ Normal 難易C","土曜日(六) 初日 Normal 難易C","日曜日(日) 初日 Easy 難易B"],
  "田名部生來":["土曜日(六) 少女たちよ Normal 難易B","土曜日(六) 初日 Normal 難易B","日曜日(日) 少女たちよ Easy 難易SS"],
  "大家志津香":["土曜日(六) 少女たちよ Normal 難易A","土曜日(六) 初日 Normal 難易A"],
  "松井咲子":["土曜日(六) 少女たちよ Normal 難易S","土曜日(六) 初日 Normal 難易S"],
  "前田亞美":["土曜日(六) 少女たちよ Hard 難易C","土曜日(六) 初日 Hard 難易C"],
  "大場美奈":["土曜日(六) 少女たちよ Hard 難易B","土曜日(六) 初日 Hard 難易B","日曜日(日) 初日 Normal 難易S"],
  "矢倉楓子":["土曜日(六) 少女たちよ Hard 難易A","土曜日(六) 初日 Hard 難易A","日曜日(日) 初日 Hard 難易C"],
  "小嶋菜月":["日曜日(日) 少女たちよ Normal 難易C"],
  "北原里英":["日曜日(日) 少女たちよ Hard 難易S"],
  "市川美織":["日曜日(日) 初日 Normal 難易A"],
  "渡邊美優紀":["日曜日(日) 初日 Hard 難易S"]
}

var app = angular.module('requestor',[]);

app.run(['$rootScope', function ($rootScope) {
  $rootScope.upgradedata = null;
  $rootScope.loaded = false;
  $rootScope.member_choosed = -1;
  $rootScope.memberlist = []
  $rootScope.quality_choosed = -1
  $rootScope.qualitylist = []
  $rootScope.result_required = ''
  $rootScope.result_orgin = []
}])

app.controller('LoadingCtrl', ['$scope','$http', '$rootScope', function($scope,$http,$rootScope) {
  $scope.loading = false;
  $scope.loadData = function(){
    $scope.loading = true;
    $http.get(UPGRADE_DATA_URL).success(function(data) {
      $rootScope.upgradedata = data;
      $rootScope.loaded = true;
      $scope.loading = false;
      $rootScope.memberlist = []
      entry = $rootScope.upgradedata.feed.entry
      for (var i = 2; i < entry.length; i++) {
        $rootScope.memberlist.push(entry[i].gsx$_cn6ca.$t)
      };
      keys = Object.keys(entry[0])

      for (k in keys) {
        if(keys[k].indexOf('gsx$') >= 0){
          $rootScope.qualitylist.push(keys[k].substring(4))
        }
      };
      $rootScope.qualitylist.reverse()
      $rootScope.qualitylist.pop()

    }).error(function(data, status, headers, config){
      $scope.upgradedata = null;
      $rootScope.loaded = false;
      $scope.loading = false;
    });
  }
}]);

app.controller('MemberCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
  $scope.choose = function(id){
    $rootScope.member_choosed = id;
  }
}])

app.controller('QualityCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
  $scope.choose = function(id){
    $rootScope.quality_choosed = id;
  }
  $scope.go = function(){
    $rootScope.result_required = ''
    $rootScope.result_orgin = []
    entry = $rootScope.upgradedata.feed.entry
    member_need = entry[$rootScope.member_choosed + 2]['gsx$'+$rootScope.qualitylist[$rootScope.quality_choosed]].$t
    console.log(member_need)
    if (member_need.length <=0) {
      $rootScope.result_required = 'required member data not found!'
      return
    }
    $rootScope.result_required = 'Required： ' + member_need + '\n'
    member_need = member_need.split('、')
    for (var i = 0; i < member_need.length; i++) {
      orgin = WEEK_AZUKI_DATA[member_need[i]]
      if (orgin) {
        $rootScope.result_orgin.push(member_need[i] + ': ' + orgin.join(' , ') + '\n')
      };
    };
    
  }
}])
// {
//   '岩田華怜':['火曜日(二) 少女たちよ Easy 難易A', '日曜日(日)']
// }

