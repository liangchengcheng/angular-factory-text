/**
 * Created by lcc on 15/12/14.
 */
angular.module('app',[])
    .value('realname','lcc')//是可以改变的
    .value('realname','zgf')
    .constant('http','www.baidu.com')//是不可以改变的
    .constant('http','www.ouhu.com')
    .factory('data',function(){
        return{
            //做任何操作。
            msg:'hahhahahahaha',
            setMsg:function(){
                this.msg="不";
            }
        }
    })
    .factory('MyMes',function(){
        return{
            //做任何操作。
            msg:'来自facebook'
        }
    })
    .service('User',function(){
        this.firstname="lmj";
        this.lastname="xtc";
        this.getName=function(){
            return this.firstname+this.lastname;
        }
    })
    .controller('MyCtrl',function($scope,realname,http,data,User,MyMes){
        $scope.msg="你好";
        $scope.data=MyMes;
        $scope.realname=realname;
        $scope.http=http;
        $scope.datas=data;
        data.setMsg();
        $scope.uname=User.getName();
    })
    .controller('CY',function($scope,MyMes){
        $scope.data=MyMes;
    })

