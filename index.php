<?php
/**
 *
 * index(入口文件)
 *
// +----------------------------------------------------------------------
// | Package   Srdcphp企业网站管理系统
// +----------------------------------------------------------------------
// | Copyright (c) 2009-2014 http://www.xyphp.com All rights reserved.
// +----------------------------------------------------------------------
// | Author    襄阳尚睿德创信息技术有限公司 QQ：862199478  srdc2012@163.com
// +----------------------------------------------------------------------
 */
if(!is_file('./Cache/config.php'))header("location: ./Install");
header("Content-type: text/html;charset=utf-8");
ini_set('memory_limit','32M');
error_reporting(E_ERROR | E_WARNING | E_PARSE);
define('Srdcphp',true);
define('UPLOAD_PATH','./Uploads/');
define('VERSION','v2.0 Released');
define('UPDATETIME','20120926');
define('APP_NAME','Srdcphp');
define('APP_PATH','./Srdcphp/');
define('APP_LANG',true);
define('APP_DEBUG',true);
define('THINK_PATH','./Core/');
require(THINK_PATH.'Core.php');
?>
