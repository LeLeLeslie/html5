/* 
* @Author: Marte
* @Date:   2019-04-13 16:08:35
* @Last Modified by:   Marte
* @Last Modified time: 2019-04-13 16:29:46
*/

require.config({
    paths:{
        'jquery' :'../lib/jquery-3.0.0.min',
        'common' :'../lib/common',
        'fangdajing': '../lib/fangdajing',
        'jq_cookie':'../lib/jquery.cookie',
        'swiper':'../lib/swiper.min',
        'details':'../js/details',
        'index':'../js/index',
        'goodsList':'../js/goodsList'
        // 'shoppingCart':'../js/shoppingCart'
    },
    shim:{
        'fangdajing':['jquery'],
        'jq_cookie':['jquery'],
        'swiper':['jquery'],
        'details':['jquery'],
        'index':['jquery'],
        'goodsList':['jquery'],
        'shoppingCart':['jquery']
    }
});