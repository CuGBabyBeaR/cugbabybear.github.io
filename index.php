<?php namespace Michelf ?>
<!DOCTYPE html>
<html>

<head>
  <title>CuGBabyBeaR's Web Lab</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <link rel="stylesheet" href="//bears.qiniudn.com/css/style.css">
  <script type="text/javascript" src="//bears.qiniudn.com/js/marked.js"></script>
</head>

<body>
  <!--[if lt IE 7]> <div style=' clear: both; height: 59px; padding:0 0 0 15px; position: relative;'> <a href="http://windows.microsoft.com/zh-CN/internet-explorer/downloads/ie?ocid=ie6_countdown_bannercode"><img src="http://www.theie6countdown.cn/img/banner/upgrade.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today." /></a></div> <![endif]-->
  <div class="alert" id="history-api-alert">您的浏览器不支持 HTML5 History API ！</div>
  <div class="toplogobanner">
    <div class="container toplogo-container">
      <span class="header">CuGBabyBeaR's Web Lab</span>
      <img class="toplogo toplogo-animation" src="//bears.qiniudn.com/images/logo300.png" id="toplogo" alt="LOGO">
    </div>
  </div>
  <div class="navbar">
    <div class="container">
      <ul id="nav">
        <li><a href="./home">首页</a></li>
        <li><a href="./projects">作品/项目</a></li>
        <li><a target="_blank" href="https://github.com/CuGBabyBeaR">GitHub</a></li>
        <li><a target="_blank" href="http://blog.csdn.net/cugbabybear">博客</a></li>
        <li><a href="./about">关于作者</a></li>
      </ul>
    </div>
  </div>
  <div class="container">
    <div class="content" id="content">
      <?php
      $filename = "home";
      if (is_array($_GET) && count($_GET) > 0) {
        if (isset($_GET["p"])) {
          $filename = $_GET["p"];
        }
      }
      switch ($filename) {
        case '404':
          echo "<p>&nbsp;</p><h1>404：页面未找到!  (＞﹏＜) </h1><p>&nbsp;</p>";
          break;
        case '403':
          echo "<p>&nbsp;</p><h1>403：禁止访问！ ╮(╯▽╰)╭</h1><p>&nbsp;</p>";
          break;
        case '500':
          echo "<p>&nbsp;</p><h1>500：内部错误！ ⊙﹏⊙b </h1><p>&nbsp;</p>";
          break;
        default:
          $filename = $filename.'.md';
          if (file_exists($filename)){
            require_once 'Michelf/MarkdownExtra.inc.php';
            echo MarkdownExtra::defaultTransform(file_get_contents($filename));
          }else{
            echo "<p>&nbsp;</p><h1>404：页面未找到!  (＞﹏＜) </h1><p>&nbsp;</p>";
          }
          break;
      }


      ?>
    </div>
  </div>
  <script type="text/javascript" src="//bears.qiniudn.com/js/script.js"></script>
  <script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1252970974'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s23.cnzz.com/z_stat.php%3Fid%3D1252970974%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));</script>
</body>

</html>
