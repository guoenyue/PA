app.directive("myBread",[function(){
        return {
            link:function($scope,$ele,$attrs){

            },
            restrict:"EA",
            replace:true,
            template:'<ol class="breadcrumb"><li ng-repeat="item in breads" ng-if="!$last"><a href="javascript:(0);">{{item}}</a></li><li ng-repeat="item in breads" ng-if="$last" class="active">{{item}}</li></ol>',
            scope:{
                breads:"="
            }
        }
}]);
app.directive("myAccordionNav",["$compile",function($compile){
    var tempObj={tmpl:""};
    return {
        link:function($scope,$ele,$attrs){
            $($ele).on('show.bs.collapse',".collapse", function (e) {
                $(this).prev().find("i").addClass("glyphicon-chevron-down").removeClass("glyphicon-chevron-right");
            }).on("hide.bs.collapse",".collapse",function(e){
                $(this).prev().find("i").addClass("glyphicon-chevron-right").removeClass("glyphicon-chevron-down");
            });

            tempObj.tmpl=`
           <div class="panel-group" id="{{tabid}}" role="tablist" aria-multiselectable="true">
               <div class="panel panel-default" ng-repeat="tab in tabs">
                   <div class="panel-heading" role="tab" id="{{'tab_'+tabid+$index}}">
                       <h4 class="panel-title">
                           <a role="button" data-toggle="collapse" data-parent="#{{tabid}}" href="#{{'tabCont_'+tabid+$index}}" aria-expanded="false" aria-controls="collapseOne">
                           {{tab.title}}<i class="pull-right glyphicon glyphicon-chevron-right"></i>
                       </a>
                       </h4>
                   </div>
                   <div id="{{'tabCont_'+tabid+$index}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="{{'tab_'+tabid+$index}}">
                       <div class="panel-body">
                           {{tab.content}}
                       </div>
                   </div>
               </div>
           </div>`;  
            $($ele).html($compile(tempObj.tmpl)($scope));
        },
        restrict:"EA",
        replace:true,
        template:tempObj.tmpl,
        scope:{
            tabs:"=",
            tabid:"="
        }
    }
}]);